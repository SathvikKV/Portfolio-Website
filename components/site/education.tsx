"use client";

import Image from "next/image";
import { education } from "@/lib/profile";
import { Reveal, SectionHead } from "./reveal";

export default function Education() {
  return (
    <section id="education" className="container py-20 md:py-24">
      <SectionHead index="06" label="Education" title={"Two degrees,\n*two disciplines.*"} />
      <div className="mt-16 grid gap-12 md:grid-cols-12 md:gap-8">
        {education.map((e, i) => (
          <Reveal
            key={e.institution}
            delay={i * 0.1}
            className={i === 0 ? "md:col-span-4 md:col-start-4" : "md:col-span-4 md:col-start-9"}
          >
            <div className="flex items-center justify-between border-t border-ink pt-4">
              <span className="font-mono text-[11px] tracking-[0.12em] text-ink-3">{e.period}</span>
              <div className="relative h-10 w-10">
                <Image src={e.logo} alt={`${e.institution} logo`} fill sizes="40px" className="object-contain grayscale" />
              </div>
            </div>
            <h3 className="mt-6 font-display text-4xl font-normal leading-[1.05] tracking-tight text-ink">{e.degree}</h3>
            <p className="hl mt-1 text-xl text-pine">{e.focus}</p>
            <p className="mt-4 text-[15px] text-ink">
              {e.institution} <span className="text-ink-3">· {e.location}</span>
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-2">{e.description}</p>
            <p className="label mb-2 mt-8">Coursework</p>
            <p className="text-[14px] leading-relaxed text-ink-2">{e.courses.join(" · ")}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
