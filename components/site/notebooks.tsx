"use client";

import Image from "next/image";
import { labItems, type LabItem } from "@/lib/profile";
import { SectionHead } from "./reveal";
import { Track } from "./track";

// Slight, fixed tilts so the cards read as a hand-laid stack rather than a grid.
const tilts = [-1.2, 0.8, -0.5, 1.1, -0.9, 0.6];

function IndexCard({ item, i }: { item: LabItem; i: number }) {
  const href = item.link ?? item.demo;
  const body = (
    <article
      className="ruled relative flex h-[380px] flex-col bg-paper-card p-6 pl-10 shadow-[0_1px_0_rgba(28,26,22,0.06),0_18px_30px_-22px_rgba(28,26,22,0.45)] transition-transform duration-700 ease-out [transform:rotate(var(--tilt))] group-hover:[transform:translateY(-6px)_rotate(0deg)]"
      style={{ ["--tilt" as string]: `${tilts[i % tilts.length]}deg` }}
    >
      <span className="absolute inset-y-0 left-7 w-px bg-pine/50" />
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-pine">{item.kind}</span>
        <span className="font-mono text-[10px] text-ink-3">#{String(i + 1).padStart(3, "0")}</span>
      </div>
      {item.image && (
        <div className="relative -mr-2 ml-auto mt-4 h-24 w-32 rotate-2 bg-paper p-1.5 shadow-[0_8px_16px_-10px_rgba(28,26,22,0.5)]">
          <span className="absolute -top-2 left-1/2 z-10 h-4 w-12 -translate-x-1/2 -rotate-3 bg-pine-soft/50" />
          <div className="relative h-full w-full overflow-hidden">
            <Image src={item.image} alt="" fill sizes="128px" className="print object-cover" draggable={false} />
          </div>
        </div>
      )}
      <h3 className="mt-auto font-display text-[1.6rem] font-normal leading-[1.1] tracking-tight text-ink">{item.title}</h3>
      <p className="mt-3 line-clamp-4 text-[14px] leading-[28px] text-ink-2">{item.description}</p>
      <div className="mt-4 flex items-center justify-between text-[13px]">
        {href ? <span className="link-draw text-ink">Open notebook ↗</span> : <span className="text-ink-3">Not published</span>}
        {item.demo && item.link && <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-moss">Live demo</span>}
      </div>
    </article>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group block py-3" draggable={false}>
      {body}
    </a>
  ) : (
    <div className="group py-3">{body}</div>
  );
}

export default function Notebooks() {
  return (
    <section id="notebooks" className="py-20 md:py-24">
      <div className="container">
        <SectionHead
          index="04"
          label="Notebooks"
          title={"Data science\n*notebooks & take-homes.*"}
          aside="Where I try out models, causal methods and ways of telling a story with data."
        />
      </div>
      <div className="mt-14">
        <Track label="Notebooks" itemClassName="w-[78vw] sm:w-[320px]">
          {labItems.map((item, i) => (
            <IndexCard key={item.title} item={item} i={i} />
          ))}
        </Track>
      </div>
    </section>
  );
}
