"use client";

import { skillGroups } from "@/lib/profile";
import { Reveal, SectionHead } from "./reveal";

const marqueeWords = [
  "Python",
  "Spark",
  "Snowflake",
  "LangGraph",
  "Databricks",
  "Kafka",
  "PyTorch",
  "Terraform",
  "Airflow",
  "FastAPI",
  "AWS",
  "Azure",
];

export default function Toolkit() {
  const total = skillGroups.reduce((n, g) => n + g.skills.length, 0);

  return (
    <section id="toolkit" className="py-20 md:py-24">
      <div className="container">
        <SectionHead
          index="05"
          label="Toolkit"
          title={"Skills\n*& tools.*"}
          aside={`${total} tools across AI, data, ML, cloud and product, grouped by the problems they solve.`}
        />

        <div className="mt-16 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={(i % 4) * 0.06} className="border-t border-rule pb-10 pt-5">
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-xl font-normal tracking-tight text-ink">{g.title}</h3>
                <span className="font-mono text-[10px] text-ink-3">{String(g.skills.length).padStart(2, "0")}</span>
              </div>
              <p className="mt-1.5 text-[13px] leading-snug text-ink-3">{g.blurb}</p>
              <ul className="mt-5 space-y-1">
                {g.skills.map((s) => (
                  <li key={s} className="group flex items-baseline text-[15px] text-ink-2 transition-colors hover:text-ink">
                    <span className="h-px w-0 self-center bg-pine transition-all duration-500 ease-out group-hover:mr-2 group-hover:w-3" />
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-16 overflow-hidden border-y border-rule py-6" aria-hidden>
        <div className="animate-marquee flex w-max" style={{ ["--marquee-duration" as string]: "70s" }}>
          {[0, 1].map((k) => (
            <div key={k} className="flex shrink-0 items-center">
              {marqueeWords.map((w, i) => (
                <span key={w} className="flex items-center">
                  <span
                    className={
                      i % 2 ? "hl px-8 text-6xl text-pine md:text-8xl" : "display px-8 text-6xl text-ink md:text-8xl"
                    }
                  >
                    {w}
                  </span>
                  <span className="text-2xl text-ink-3">✳</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
