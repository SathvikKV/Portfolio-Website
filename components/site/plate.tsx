import Image from "next/image";
import type { Project } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Tech } from "./tech-icon";

const hasImage = (p: Project) => Boolean(p.image) && !p.image.includes("placeholder");

function seeded(slug: string) {
  let h = 2166136261;
  for (const c of slug) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  return () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
}

/** Concentric survey-style contours around a peak, deterministic per project. */
function contours(slug: string) {
  const rnd = seeded(slug);
  const cx = 120 + rnd() * 160;
  const cy = 140 + rnd() * 160;
  const p1 = rnd() * 6.28;
  const p2 = rnd() * 6.28;
  const p3 = rnd() * 6.28;
  const paths: { d: string; index: boolean }[] = [];
  for (let k = 1; k <= 18; k++) {
    const r = 14 + k * 19;
    let d = "";
    for (let s = 0; s <= 72; s++) {
      const t = (s / 72) * Math.PI * 2;
      const wobble =
        1 + 0.13 * Math.sin(3 * t + p1 + k * 0.08) + 0.07 * Math.sin(5 * t + p2) + 0.05 * Math.sin(2 * t + p3 + k * 0.25);
      const x = cx + Math.cos(t) * r * wobble;
      const y = cy + Math.sin(t) * r * wobble * 1.08;
      d += `${s === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
    }
    paths.push({ d: d + "Z", index: k % 5 === 0 });
  }
  return { paths };
}

/**
 * The image area of a project. Screenshots are printed in warm monochrome
 * until hovered; projects without one get a contour plate and a typed spec.
 */
export function Plate({
  project,
  className,
  sizes = "(max-width: 768px) 80vw, 520px",
  priority,
  parallax = true,
  showSpec = true,
}: {
  project: Project;
  className?: string;
  sizes?: string;
  priority?: boolean;
  parallax?: boolean;
  showSpec?: boolean;
}) {
  if (hasImage(project)) {
    return (
      <div className={cn("relative overflow-hidden bg-paper-3", className)}>
        <div {...(parallax ? { "data-parallax": "" } : {})} className="absolute inset-0 will-change-transform">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes={sizes}
            priority={priority}
            className="print object-cover object-top"
            draggable={false}
          />
        </div>
      </div>
    );
  }

  const { paths } = contours(project.slug);
  const stack = (project.techStackDetailed ?? [{ category: "Stack", technologies: project.tags }]).slice(0, 3);

  return (
    <div className={cn("relative overflow-hidden bg-paper-2", className)} aria-hidden>
      <div {...(parallax ? { "data-parallax": "" } : {})} className="absolute inset-0 will-change-transform">
        <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
          {paths.map((p, i) => (
            <path
              key={i}
              d={p.d}
              fill="none"
              stroke={p.index ? "#1F5A43" : "#141614"}
              strokeOpacity={p.index ? 0.75 : 0.22}
              strokeWidth={p.index ? 1.3 : 0.8}
              vectorEffect="non-scaling-stroke"
              className="transition-[stroke-opacity] duration-700"
            />
          ))}
        </svg>
      </div>
      {showSpec && (
        <dl className="absolute inset-x-0 bottom-0 m-4 space-y-1 bg-paper-card/90 p-4 font-mono text-[10.5px] leading-relaxed text-ink-2 backdrop-blur-sm md:m-5">
          {stack.map((s) => (
            <div key={s.category} className="flex gap-3">
              <dt className="w-[38%] shrink-0 truncate pt-px uppercase tracking-[0.12em] text-ink-3">{s.category}</dt>
              <dd className="flex min-w-0 flex-wrap gap-x-3 gap-y-1 text-ink">
                {s.technologies.slice(0, 3).map((t) => (
                  <Tech key={t} name={t} />
                ))}
              </dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  );
}
