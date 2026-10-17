"use client";

import { capabilities, profile } from "@/lib/profile";
import { Reveal, SectionHead } from "./reveal";

const numerals = ["i", "ii", "iii", "iv", "v", "vi"];

export default function Intro() {
  return (
    <section id="about" className="container py-20 md:py-28">
      <SectionHead index="01" label="Introduction" title={"Mechanical engineer turned\n*AI & data engineer.*"} />

      <div className="mt-16 grid gap-12 md:grid-cols-12 md:gap-8">
        <Reveal className="md:col-span-7 md:col-start-4">
          <p className="font-display text-[clamp(1.3rem,1.9vw,1.75rem)] font-normal leading-[1.45] text-ink">
            {profile.bio}
          </p>
        </Reveal>
      </div>

      <div className="mt-24 md:grid md:grid-cols-12 md:gap-8">
        <Reveal className="md:col-span-3">
          <span className="label">What I do</span>
        </Reveal>
        <ol className="mt-6 grid gap-x-8 sm:grid-cols-2 md:col-span-9 md:mt-0 lg:grid-cols-3">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 0.08} className="border-t border-rule py-6">
              <li className="list-none">
                <div className="flex items-baseline gap-3">
                  <span className="hl w-7 text-lg text-pine">{numerals[i]}.</span>
                  <h3 className="font-display text-2xl font-normal tracking-tight text-ink">{c.title}</h3>
                </div>
                <p className="mt-3 pl-10 text-[15px] leading-relaxed text-ink-2">{c.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
