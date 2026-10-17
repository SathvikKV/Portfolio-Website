"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

export const ease = [0.16, 1, 0.3, 1] as const;

/** Fades content up the first time it enters the viewport. */
export function Reveal({
  children,
  delay = 0,
  className,
  y = 24,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 1.1, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Splits text into words that slide up from behind a mask, like type being set.
 * Wrap a word in *asterisks* to set it in italic pine.
 */
export function SplitReveal({
  text,
  as: Tag = "h2",
  className,
  delay = 0,
  stagger = 0.045,
  immediate = false,
}: {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  stagger?: number;
  /** Animate on mount instead of on scroll (for above-the-fold text). */
  immediate?: boolean;
}) {
  const reduce = useReducedMotion();
  const lines = text.split("\n");
  let wordIndex = 0;
  let inAccent = false;

  const trigger = immediate
    ? { animate: "show" as const }
    : { whileInView: "show" as const, viewport: { once: true, margin: "-8% 0px" } };

  return (
    <Tag className={className} aria-label={text.replace(/\*/g, "").replace(/\n/g, " ")}>
      <motion.span className="block" initial={reduce ? false : "hidden"} {...trigger} aria-hidden>
        {lines.map((line, li) => (
          <span key={li} className="block">
            {line.split(" ").map((raw, wi, words) => {
              // *phrases* may span several words; track whether we're inside one.
              const opens = raw.startsWith("*");
              if (opens) inAccent = true;
              const accent = inAccent;
              if (raw.replace(/[.,!?]+$/, "").endsWith("*") || raw.endsWith("*")) inAccent = false;
              const word = raw.replace(/\*/g, "");
              const i = wordIndex++;
              return (
                <span key={wi} className="-mr-[0.1em] inline-block overflow-hidden pb-[0.12em] pr-[0.1em] align-top [margin-bottom:-0.12em]">
                  <motion.span
                    className={cn("inline-block", accent && "hl text-pine")}
                    variants={{ hidden: { y: "110%" }, show: { y: "0%" } }}
                    transition={{ duration: 1.1, delay: delay + i * stagger, ease }}
                  >
                    {word}
                    {wi < words.length - 1 ? "\u00a0" : ""}
                  </motion.span>
                </span>
              );
            })}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}

/** Section opener: a numbered marginal label beside a large serif heading. */
export function SectionHead({
  index,
  label,
  title,
  aside,
  className,
}: {
  index: string;
  label: string;
  title: string;
  aside?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("grid gap-6 border-t border-rule pt-6 md:grid-cols-12 md:gap-8", className)}>
      <div className="flex gap-6 md:col-span-3 md:flex-col md:gap-3">
        <span className="label text-pine">{index} /</span>
        <span className="label">{label}</span>
      </div>
      <div className="md:col-span-9">
        <SplitReveal text={title} className="display text-[clamp(2.6rem,6.4vw,6rem)] leading-[0.95] text-ink" />
        {aside && (
          <Reveal delay={0.2} className="mt-6 max-w-xl text-lg leading-relaxed text-ink-2">
            {aside}
          </Reveal>
        )}
      </div>
    </div>
  );
}

const METRIC = /(~?\$?\d[\d,.]*(?:%|\+|K\+?|M\+?|×|x(?=\s))|~\d[\d,.]*|under (?:\d+ (?:seconds|minutes)|an hour))/g;

/** Sets numeric results in prose (~35%, 2M+, under 30 seconds…) in pine so they can be scanned. */
export function Metrics({ text }: { text: string }) {
  return (
    <>
      {text.split(METRIC).map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className="whitespace-nowrap font-medium text-pine">
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  );
}
