"use client";

import Image from "next/image";
import { animate, motion, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { heroStats, profile } from "@/lib/profile";
import { Reveal, SplitReveal, ease } from "./reveal";
import TopoField from "./topo-field";

function CountUp({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-5% 0px" });
  const reduce = useReducedMotion();
  const [n, setN] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, value, { duration: 1.8, delay: 0.9, ease, onUpdate: (v) => setN(Math.round(v)) });
    return () => controls.stop();
  }, [inView, reduce, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {n}
      {suffix}
    </span>
  );
}

const disciplines = [
  { k: "AI engineering", v: "Agents, browser automation, RAG and LLM apps" },
  { k: "Data engineering", v: "Spark, Databricks, Kafka and Snowflake pipelines" },
  { k: "ML engineering", v: "SageMaker, MLflow and models in production" },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const fieldY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);

  return (
    <section ref={ref} id="top" className="relative isolate overflow-hidden pt-24">
      <motion.div style={{ y: fieldY }} className="absolute inset-0 -z-10">
        <TopoField className="h-full w-full [mask-image:radial-gradient(ellipse_70%_60%_at_30%_35%,black_30%,transparent_80%)]" />
      </motion.div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.1 }}
          className="flex items-center justify-between border-b border-rule pb-4 pt-4"
        >
          <span className="label flex items-center gap-2.5 text-ink">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-pine opacity-40 [animation-duration:2.4s]" />
              <span className="relative h-2 w-2 rounded-full bg-pine" />
            </span>
            {profile.current.title} at {profile.current.company}
          </span>
          <span className="label hidden sm:inline">{profile.location}</span>
        </motion.div>

        <div className="grid gap-10 pb-14 pt-10 md:grid-cols-12 md:gap-8 md:pt-14">
          <motion.div style={{ y: textY }} className="flex flex-col md:col-span-7">
            <SplitReveal
              as="h1"
              immediate
              delay={0.15}
              stagger={0.09}
              text={"Sathvik\nVadavatha"}
              className="display text-[clamp(3.6rem,10.5vw,10.5rem)] font-bold uppercase leading-[0.84] tracking-[-0.035em] text-ink [font-variation-settings:'wdth'_72]"
            />

            <Reveal delay={0.55} className="mt-10 max-w-[640px] md:mt-12">
              <p className="font-display text-[clamp(1.6rem,2.7vw,2.5rem)] font-medium leading-[1.12] tracking-[-0.02em] text-ink">
                I build <span className="text-pine">AI agents</span> and the <span className="text-pine">data platforms</span>{" "}
                they run on.
              </p>
            </Reveal>

            <Reveal delay={0.7} className="mt-6 max-w-[56ch]">
              <p className="text-[16px] leading-relaxed text-ink-2 md:text-[17px]">
                Software &amp; AI engineer in Boston. Right now: underwriting agents at Stratafi. Before that, a data
                platform for 2M+ loyalty members at Arrivia, FDA-grade ML infrastructure at Triple Ring, and real-time
                pipelines at ITC Infotech. Mechanical engineer by training.
              </p>
            </Reveal>

            <Reveal delay={0.85} className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <a
                href="#work"
                className="group inline-flex items-center gap-3 rounded-full bg-ink py-2 pl-2 pr-6 text-[15px] text-paper transition-colors duration-500 hover:bg-pine"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-paper/10 transition-transform duration-500 ease-out group-hover:translate-y-0.5">
                  ↓
                </span>
                See projects
              </a>
              <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="link-undraw text-[15px] text-ink">
                Résumé (PDF)
              </a>
              <a href="#contact" className="link-undraw text-[15px] text-ink-2 hover:text-ink">
                Get in touch
              </a>
            </Reveal>
          </motion.div>

          <motion.figure
            style={{ y: photoY }}
            className="relative -order-1 md:order-none md:col-span-5 md:col-start-8"
          >
            <motion.div
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              animate={{ clipPath: "inset(0% 0 0 0)" }}
              transition={{ duration: 1.4, delay: 0.35, ease }}
              className="relative aspect-[4/3] overflow-hidden bg-paper-2 md:aspect-[4/5]"
            >
              <motion.div
                initial={{ scale: 1.15 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, delay: 0.35, ease }}
                className="absolute inset-0"
              >
                <Image
                  src={profile.photo}
                  alt={`Portrait of ${profile.name}`}
                  fill
                  priority
                  sizes="(max-width: 768px) 92vw, 42vw"
                  className="object-cover object-[50%_25%]"
                />
              </motion.div>
            </motion.div>
            <figcaption className="mt-3 flex items-baseline justify-between gap-4">
              <span className="label text-ink">{profile.name}</span>
              <span className="label">Software · AI · Data</span>
            </figcaption>
          </motion.figure>
        </div>

        <Reveal delay={0.4} className="grid border-t border-rule sm:grid-cols-3">
          {disciplines.map((d, i) => (
            <div
              key={d.k}
              className="border-b border-rule py-5 sm:border-b-0 sm:py-6 sm:pr-6 [&:not(:first-child)]:sm:border-l [&:not(:first-child)]:sm:pl-6"
            >
              <p className="font-mono text-[11px] text-pine">0{i + 1}</p>
              <p className="mt-2 font-display text-xl font-semibold tracking-tight text-ink">{d.k}</p>
              <p className="mt-1 text-[14.5px] leading-snug text-ink-2">{d.v}</p>
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.2} className="grid grid-cols-2 border-y border-rule md:grid-cols-4">
          {heroStats.map((s, i) => (
            <div
              key={s.label}
              className="border-rule py-7 pr-4 md:py-9 [&:nth-child(even)]:border-l [&:nth-child(even)]:pl-5 md:[&:not(:first-child)]:border-l md:[&:not(:first-child)]:pl-6 [&:nth-child(n+3)]:border-t md:[&:nth-child(n+3)]:border-t-0"
            >
              <p className="display text-[clamp(2.6rem,5vw,4.5rem)] font-semibold leading-none text-ink">
                <CountUp value={s.value} prefix={s.prefix} suffix={s.suffix} />
              </p>
              <p className="mt-3 max-w-[22ch] text-[14px] leading-snug text-ink-2">{s.label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
