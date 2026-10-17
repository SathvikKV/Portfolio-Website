"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { experiences, type Experience } from "@/lib/profile";
import { cn } from "@/lib/utils";
import { Metrics, Reveal, SectionHead, ease } from "./reveal";

function Row({ exp, open, onToggle, n }: { exp: Experience; open: boolean; onToggle: () => void; n: number }) {
  return (
    <li className="border-t border-rule">
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="group relative grid w-full grid-cols-12 items-baseline gap-x-4 gap-y-1 py-6 text-left md:py-8"
      >
        <span
          className={cn(
            "absolute inset-x-0 top-0 h-px origin-left bg-pine transition-transform duration-700 ease-out",
            open ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
          )}
        />
        <span className="col-span-12 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-3 md:col-span-3">
          {exp.period}
        </span>
        <span className="col-span-10 font-display text-[clamp(1.7rem,3.2vw,3rem)] font-normal leading-[1.05] tracking-tight text-ink transition-transform duration-700 ease-out group-hover:translate-x-2 md:col-span-5">
          {exp.company}
          <span className="mt-2 block max-w-[52ch] font-sans text-[15px] leading-snug tracking-normal text-ink-2">
            {exp.summary}
          </span>
        </span>
        <span className="col-span-12 order-last text-[15px] text-ink-2 md:order-none md:col-span-3">
          {exp.position}
          <span className="block text-[13px] text-ink-3">{exp.location}</span>
        </span>
        <span className="col-span-2 flex justify-end md:col-span-1">
          <span
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-full border border-ink/25 text-ink transition-all duration-500 ease-out group-hover:border-ink",
              open && "rotate-45 border-ink bg-ink text-paper",
            )}
          >
            +
          </span>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ height: { duration: 0.8, ease }, opacity: { duration: 0.5 } }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-12 gap-x-4 pb-10">
              <div className="col-span-12 mb-6 md:col-span-3 md:mb-0">
                {exp.logo ? (
                  <div className="relative h-14 w-14 overflow-hidden bg-paper-card p-2 ring-1 ring-rule">
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      fill
                      sizes="56px"
                      className="object-contain p-2 grayscale"
                    />
                  </div>
                ) : (
                  <div className="hl flex h-14 w-14 items-center justify-center bg-ink text-2xl text-paper">
                    {exp.company[0]}
                  </div>
                )}
                <p className="label mt-4">Entry {String(n).padStart(2, "0")}</p>
              </div>
              <ol className="col-span-12 space-y-4 md:col-span-6 md:col-start-4">
                {exp.responsibilities.map((r, i) => (
                  <motion.li
                    key={r}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 + i * 0.05, ease }}
                    className="flex gap-4 text-[15.5px] leading-relaxed text-ink-2"
                  >
                    <span className="mt-1 font-mono text-[10px] text-ink-3">{String(i + 1).padStart(2, "0")}</span>
                    <span>
                      <Metrics text={r} />
                    </span>
                  </motion.li>
                ))}
              </ol>
              <div className="col-span-12 mt-8 md:col-span-2 md:col-start-11 md:mt-0">
                <p className="label mb-3">Tools</p>
                <ul className="space-y-1.5 text-[14px] text-ink">
                  {exp.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export default function Ledger() {
  const [open, setOpen] = useState<number | null>(0);
  const main = experiences.filter((e) => !e.earlier);
  const earlier = experiences.filter((e) => e.earlier);

  return (
    <section id="experience" className="container py-20 md:py-24">
      <SectionHead
        index="03"
        label="Experience"
        title={"Where I've\n*worked.*"}
        aside="Underwriting agents in fintech, data platforms for 2M+ travellers, FDA-grade ML infrastructure and real-time pipelines for legacy PLM."
      />
      <Reveal className="mt-16">
        <ul className="border-b border-rule">
          {main.map((e, i) => (
            <Row key={e.company} exp={e} n={i + 1} open={open === i} onToggle={() => setOpen(open === i ? null : i)} />
          ))}
        </ul>
        <p className="label mb-2 mt-16">Earlier, in mechanical & industrial engineering</p>
        <ul className="border-b border-rule">
          {earlier.map((e, i) => {
            const k = main.length + i;
            return <Row key={e.company} exp={e} n={k + 1} open={open === k} onToggle={() => setOpen(open === k ? null : k)} />;
          })}
        </ul>
      </Reveal>
    </section>
  );
}
