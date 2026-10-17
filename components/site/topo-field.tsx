"use client";

import { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";

// A deterministic PRNG so the terrain is the same on every visit.
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const LEVEL_STEP = 0.11;
const INDEX_EVERY = 5; // every fifth contour is an "index contour", drawn heavier like on survey maps

/**
 * Animated topographic map: iso-lines of a slowly drifting noise field, traced
 * with marching squares. The pointer raises a hill that the contours flow around.
 */
export default function TopoField({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const noise = createNoise3D(mulberry32(7));
    let w = 0;
    let h = 0;
    let cell = 12;
    let cols = 0;
    let rows = 0;
    let field = new Float32Array(0);
    let raf = 0;
    let running = true;
    let t = 0;
    let last = performance.now();
    let frame = 0;
    const pointer = { x: -1e4, y: -1e4, tx: -1e4, ty: -1e4, strength: 0, target: 0 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cell = w < 700 ? 14 : 11;
      cols = Math.ceil(w / cell) + 1;
      rows = Math.ceil(h / cell) + 1;
      field = new Float32Array(cols * rows);
    };

    const sample = () => {
      const f = 0.0021;
      const sigma2 = 2 * 120 * 120;
      for (let j = 0; j < rows; j++) {
        const y = j * cell;
        for (let i = 0; i < cols; i++) {
          const x = i * cell;
          let v = noise(x * f, y * f, t) * 0.68 + noise(x * f * 2.3 + 40, y * f * 2.3, t * 1.4) * 0.27;
          if (pointer.strength > 0.001) {
            const dx = x - pointer.x;
            const dy = y - pointer.y;
            v += pointer.strength * 0.75 * Math.exp(-(dx * dx + dy * dy) / sigma2);
          }
          field[j * cols + i] = v;
        }
      }
    };

    const trace = (level: number) => {
      // Marching squares; each cell contributes 0–2 segments to one batched path.
      for (let j = 0; j < rows - 1; j++) {
        for (let i = 0; i < cols - 1; i++) {
          const a = field[j * cols + i];
          const b = field[j * cols + i + 1];
          const c = field[(j + 1) * cols + i + 1];
          const d = field[(j + 1) * cols + i];
          const idx = (a > level ? 8 : 0) | (b > level ? 4 : 0) | (c > level ? 2 : 0) | (d > level ? 1 : 0);
          if (idx === 0 || idx === 15) continue;
          const x = i * cell;
          const y = j * cell;
          const top = () => [x + ((level - a) / (b - a)) * cell, y];
          const right = () => [x + cell, y + ((level - b) / (c - b)) * cell];
          const bottom = () => [x + ((level - d) / (c - d)) * cell, y + cell];
          const left = () => [x, y + ((level - a) / (d - a)) * cell];
          const seg = (p: number[], q: number[]) => {
            ctx.moveTo(p[0], p[1]);
            ctx.lineTo(q[0], q[1]);
          };
          switch (idx) {
            case 1:
            case 14:
              seg(left(), bottom());
              break;
            case 2:
            case 13:
              seg(bottom(), right());
              break;
            case 3:
            case 12:
              seg(left(), right());
              break;
            case 4:
            case 11:
              seg(top(), right());
              break;
            case 6:
            case 9:
              seg(top(), bottom());
              break;
            case 7:
            case 8:
              seg(left(), top());
              break;
            case 5:
              seg(left(), top());
              seg(bottom(), right());
              break;
            case 10:
              seg(left(), bottom());
              seg(top(), right());
              break;
          }
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      sample();
      ctx.lineCap = "round";
      for (let k = -9; k <= 9; k++) {
        const isIndex = k % INDEX_EVERY === 0;
        ctx.beginPath();
        trace(k * LEVEL_STEP + 0.02);
        ctx.strokeStyle = isIndex ? "rgba(31, 90, 67, 0.5)" : "rgba(20, 22, 20, 0.12)";
        ctx.lineWidth = isIndex ? 1.25 : 0.85;
        ctx.stroke();
      }
    };

    const loop = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      t += dt * 0.028;
      // Ease the hill toward the pointer so it glides rather than snaps.
      const k = 1 - Math.pow(0.0015, dt);
      pointer.x += (pointer.tx - pointer.x) * k;
      pointer.y += (pointer.ty - pointer.y) * k;
      pointer.strength += (pointer.target - pointer.strength) * (1 - Math.pow(0.02, dt));
      // ~30fps is plenty for drifting contours and halves the CPU cost.
      if (frame++ % 2 === 0) draw();
      if (running) raf = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const inside = x >= 0 && y >= 0 && x <= rect.width && y <= rect.height;
      if (inside && pointer.strength < 0.01) {
        pointer.x = x;
        pointer.y = y;
      }
      pointer.tx = x;
      pointer.ty = y;
      pointer.target = inside ? 1 : 0;
    };

    resize();
    if (reduce) {
      draw();
    } else {
      raf = requestAnimationFrame(loop);
    }

    const io = new IntersectionObserver(([entry]) => {
      if (reduce) return;
      if (entry.isIntersecting && !running) {
        running = true;
        last = performance.now();
        raf = requestAnimationFrame(loop);
      } else if (!entry.isIntersecting) {
        running = false;
        cancelAnimationFrame(raf);
      }
    });
    io.observe(canvas);
    const ro = new ResizeObserver(() => {
      resize();
      draw();
    });
    ro.observe(canvas);
    window.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return <canvas ref={ref} className={className} aria-hidden />;
}
