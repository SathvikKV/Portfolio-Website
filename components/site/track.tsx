"use client";

import { Children, useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type State = {
  target: number;
  current: number;
  min: number;
  snaps: number[];
  dragging: boolean;
  startX: number;
  startY: number;
  startTarget: number;
  samples: { x: number; t: number }[];
  moved: number;
  axis: "x" | "y" | null;
  wheelTimer: number;
  running: boolean;
};

const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));

/**
 * Inertial horizontal carousel. Position is eased toward a target on every
 * frame (frame-rate independent), so drags, flicks, trackpad swipes, arrows and
 * keys all share the same motion. Children marked `data-parallax` drift inside
 * their frames as they cross the viewport.
 */
export function Track({
  children,
  label,
  className,
  itemClassName,
  tone = "ink",
}: {
  children: ReactNode;
  label: string;
  className?: string;
  itemClassName?: string;
  tone?: "ink" | "paper";
}) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const s = useRef<State>({
    target: 0,
    current: 0,
    min: 0,
    snaps: [0],
    dragging: false,
    startX: 0,
    startY: 0,
    startTarget: 0,
    samples: [],
    moved: 0,
    axis: null,
    wheelTimer: 0,
    running: false,
  });
  const [index, setIndex] = useState(0);
  const [snapCount, setSnapCount] = useState(1);
  const indexRef = useRef(0);
  const items = Children.toArray(children);
  const count = items.length;
  const kick = useRef<() => void>(() => {});

  const nearest = useCallback((x: number) => {
    const { snaps } = s.current;
    let best = 0;
    for (let i = 1; i < snaps.length; i++) if (Math.abs(snaps[i] - x) < Math.abs(snaps[best] - x)) best = i;
    return best;
  }, []);

  const settle = useCallback(
    (x: number) => {
      const st = s.current;
      st.target = st.snaps[nearest(clamp(x, st.min, 0))];
      kick.current();
    },
    [nearest],
  );

  const go = useCallback(
    (delta: number) => {
      const st = s.current;
      const i = clamp(nearest(st.target) + delta, 0, st.snaps.length - 1);
      st.target = st.snaps[i];
      kick.current();
    },
    [nearest],
  );

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;
    const st = s.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let last = performance.now();
    let visible = true;

    const measure = () => {
      const kids = Array.from(track.children) as HTMLElement[];
      const pad = parseFloat(getComputedStyle(track).paddingLeft) || 0;
      st.min = Math.min(0, viewport.clientWidth - track.scrollWidth);
      const snaps = kids.map((k) => clamp(-(k.offsetLeft - pad), st.min, 0));
      // Drop duplicate snaps at the end (cards that are all visible once fully scrolled).
      st.snaps = snaps.filter((v, i) => i === 0 || Math.abs(v - snaps[i - 1]) > 1);
      setSnapCount(st.snaps.length);
      st.target = clamp(st.target, st.min, 0);
      apply(true);
    };

    const parallaxEls = () => Array.from(track.querySelectorAll<HTMLElement>("[data-parallax]"));
    let pEls = parallaxEls();

    const apply = (force = false) => {
      track.style.transform = `translate3d(${st.current.toFixed(2)}px,0,0)`;
      const vw = viewport.clientWidth;
      if (!reduce) {
        for (const el of pEls) {
          const frame = el.parentElement!;
          const r = frame.getBoundingClientRect();
          const centre = r.left + r.width / 2;
          const p = (centre - vw / 2) / vw; // -0.5 … 0.5 across the viewport
          el.style.transform = `translate3d(${(-p * 9).toFixed(2)}%,0,0) scale(1.18)`;
        }
      }
      if (barRef.current) {
        const progress = st.min === 0 ? 1 : st.current / st.min;
        barRef.current.style.transform = `scaleX(${clamp(0.06 + progress * 0.94, 0, 1)})`;
      }
      const i = nearest(st.current);
      if (i !== indexRef.current || force) {
        indexRef.current = i;
        setIndex(i);
      }
    };

    const loop = (now: number) => {
      const dt = Math.min(0.064, (now - last) / 1000);
      last = now;
      // Exponential smoothing: ~same feel at 60Hz and 120Hz.
      const k = st.dragging ? 1 - Math.pow(1e-15, dt) : 1 - Math.pow(0.0035, dt);
      st.current += (st.target - st.current) * k;
      if (Math.abs(st.target - st.current) < 0.05) st.current = st.target;
      apply();
      if (st.current !== st.target || st.dragging) raf = requestAnimationFrame(loop);
      else st.running = false;
    };

    kick.current = () => {
      if (reduce) {
        st.current = st.target;
        apply();
        return;
      }
      if (!st.running && visible) {
        st.running = true;
        last = performance.now();
        raf = requestAnimationFrame(loop);
      }
    };

    // Pointer drag (mouse, pen and horizontal touch swipes)
    const onDown = (e: PointerEvent) => {
      if (e.button !== 0) return;
      st.dragging = true;
      st.axis = e.pointerType === "mouse" ? "x" : null;
      st.startX = e.clientX;
      st.startY = e.clientY;
      st.startTarget = st.target;
      st.moved = 0;
      st.samples = [{ x: e.clientX, t: performance.now() }];
      kick.current();
    };
    const onMove = (e: PointerEvent) => {
      if (!st.dragging) return;
      const dx = e.clientX - st.startX;
      const dy = e.clientY - st.startY;
      if (!st.axis) {
        if (Math.abs(dx) < 6 && Math.abs(dy) < 6) return;
        st.axis = Math.abs(dx) > Math.abs(dy) ? "x" : "y";
      }
      if (st.axis === "y") {
        st.dragging = false;
        return;
      }
      st.moved = Math.max(st.moved, Math.abs(dx));
      let next = st.startTarget + dx;
      // Rubber band past either end
      if (next > 0) next = next * 0.32;
      else if (next < st.min) next = st.min + (next - st.min) * 0.32;
      st.target = next;
      st.samples.push({ x: e.clientX, t: performance.now() });
      if (st.samples.length > 6) st.samples.shift();
      if (st.moved > 6) viewport.classList.add("cursor-grabbing");
    };
    const onUp = () => {
      if (!st.dragging) return;
      st.dragging = false;
      viewport.classList.remove("cursor-grabbing");
      const a = st.samples[0];
      const b = st.samples[st.samples.length - 1];
      const v = a && b && b.t > a.t ? (b.x - a.x) / (b.t - a.t) : 0; // px per ms
      settle(st.target + v * 260);
    };
    // Swallow the click that ends a drag so cards don't open accidentally.
    const onClickCapture = (e: MouseEvent) => {
      if (st.moved > 6) {
        e.preventDefault();
        e.stopPropagation();
        st.moved = 0;
      }
    };

    // Trackpad horizontal swipes; vertical wheel is left to page scrolling.
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY) * 1.2) return;
      e.preventDefault();
      e.stopPropagation();
      st.target = clamp(st.target - e.deltaX, st.min - 60, 60);
      kick.current();
      clearTimeout(st.wheelTimer);
      st.wheelTimer = window.setTimeout(() => settle(st.target), 140);
    };

    const onDragStart = (e: Event) => e.preventDefault();

    viewport.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    viewport.addEventListener("click", onClickCapture, true);
    viewport.addEventListener("wheel", onWheel, { passive: false });
    viewport.addEventListener("dragstart", onDragStart);

    const ro = new ResizeObserver(() => {
      pEls = parallaxEls();
      measure();
      settle(st.target);
    });
    ro.observe(viewport);
    ro.observe(track);
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) apply(true);
    });
    io.observe(viewport);
    measure();

    return () => {
      cancelAnimationFrame(raf);
      st.running = false;
      ro.disconnect();
      io.disconnect();
      viewport.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
      viewport.removeEventListener("click", onClickCapture, true);
      viewport.removeEventListener("wheel", onWheel);
      viewport.removeEventListener("dragstart", onDragStart);
    };
  }, [nearest, settle, count]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      go(1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(-1);
    }
  };

  const atStart = index === 0;
  const atEnd = index >= snapCount - 1;
  const paper = tone === "paper";

  return (
    <div className={cn("relative", className)}>
      <div
        ref={viewportRef}
        role="region"
        aria-roledescription="carousel"
        aria-label={label}
        tabIndex={0}
        onKeyDown={onKeyDown}
        className="cursor-grab select-none overflow-hidden outline-none [touch-action:pan-y]"
      >
        <div
          ref={trackRef}
          className="flex w-max items-start gap-5 pl-[var(--page-inset)] pr-[var(--page-inset)] will-change-transform md:gap-8"
        >
          {items.map((child, i) => (
            <div
              key={i}
              className={cn("shrink-0", itemClassName)}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}`}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      <div className="container mt-10 flex items-center gap-6">
        <span className={cn("font-mono text-xs tabular-nums", paper ? "text-paper/60" : "text-ink-3")}>
          {String(atEnd ? count : index + 1).padStart(2, "0")}
          <span className="mx-1.5">/</span>
          {String(count).padStart(2, "0")}
        </span>
        <div className={cn("relative h-px flex-1 overflow-hidden", paper ? "bg-paper/20" : "bg-rule")}>
          <div
            ref={barRef}
            className={cn("absolute inset-0 origin-left", paper ? "bg-paper" : "bg-ink")}
            style={{ transform: "scaleX(0.06)" }}
          />
        </div>
        <div className="flex gap-2">
          {[
            { d: -1, label: "Previous", glyph: "←", disabled: atStart },
            { d: 1, label: "Next", glyph: "→", disabled: atEnd },
          ].map((b) => (
            <button
              key={b.label}
              onClick={() => go(b.d)}
              disabled={b.disabled}
              aria-label={b.label}
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-full border text-lg transition-all duration-300 disabled:opacity-25",
                paper
                  ? "border-paper/30 text-paper enabled:hover:bg-paper enabled:hover:text-ink"
                  : "border-ink/25 text-ink enabled:hover:border-ink enabled:hover:bg-ink enabled:hover:text-paper",
              )}
            >
              {b.glyph}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
