"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { domainLabels, projects, type Project, type ProjectDomain } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Plate } from "./plate";
import { Tech } from "./tech-icon";
import { SectionHead, ease } from "./reveal";
import { Track } from "./track";

const filters: ("all" | ProjectDomain)[] = ["all", "ai", "data", "ml", "fullstack", "mechanical"];

// A loose editorial rhythm of frame sizes instead of a uniform row of cards.
const frames = [
  "w-[80vw] sm:w-[clamp(340px,40vw,600px)] [&_.frame]:aspect-[4/3]",
  "w-[72vw] sm:w-[clamp(260px,24vw,360px)] [&_.frame]:aspect-[4/5]",
  "w-[76vw] sm:w-[clamp(300px,31vw,460px)] [&_.frame]:aspect-square",
  "w-[72vw] sm:w-[clamp(260px,24vw,360px)] [&_.frame]:aspect-[3/4]",
];

function ProjectCard({ project, n }: { project: Project; n: number }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block" draggable={false}>
      <div className="frame relative overflow-hidden">
        <Plate
          project={project}
          className="absolute inset-0 transition-transform duration-1000 ease-out group-hover:scale-[0.985]"
        />
        <span className="absolute left-3 top-3 bg-paper/90 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-ink">
          No. {String(n).padStart(2, "0")}
        </span>
      </div>
      <div className="mt-5 flex items-baseline justify-between gap-4">
        <span className="label">{domainLabels[project.domain]}</span>
        <span className="text-ink-3 transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:text-pine">
          →
        </span>
      </div>
      <h3 className="mt-3 font-display text-[clamp(1.6rem,2.3vw,2.25rem)] font-normal leading-[1.05] tracking-tight text-ink">
        <span className="link-draw">{project.title}</span>
      </h3>
      {project.metric && <p className="hl mt-1.5 text-lg text-pine">{project.metric}</p>}
      <p className="mt-3 line-clamp-3 max-w-[46ch] text-[15px] leading-relaxed text-ink-2">{project.description}</p>
      <p className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-3">
        {project.tags.slice(0, 4).map((t) => (
          <Tech key={t} name={t} />
        ))}
      </p>
    </Link>
  );
}

export default function Work() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("all");
  const list = useMemo(() => (filter === "all" ? projects : projects.filter((p) => p.domain === filter)), [filter]);
  const count = (f: (typeof filters)[number]) => (f === "all" ? projects.length : projects.filter((p) => p.domain === f).length);

  return (
    <section id="work" className="py-20 md:py-24">
      <div className="container">
        <SectionHead
          index="02"
          label="Selected work"
          title={`${projects.length} projects,\n*built and shipped.*`}
          aside="Agents, data platforms, ML research and a few machines from my mechanical engineering years. Drag, swipe or use the arrow keys."
        />

        <div className="no-scrollbar -mx-6 mt-14 flex gap-6 overflow-x-auto px-6 md:mx-0 md:ml-[25%] md:px-0">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "relative shrink-0 pb-2 text-[15px] transition-colors duration-300",
                filter === f ? "text-ink" : "text-ink-3 hover:text-ink",
              )}
            >
              {f === "all" ? "Everything" : domainLabels[f]}
              <sup className="ml-1 font-mono text-[10px]">{count(f)}</sup>
              {filter === f && (
                <motion.span
                  layoutId="work-filter"
                  className="absolute inset-x-0 bottom-0 h-px bg-ink"
                  transition={{ duration: 0.6, ease }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.7, ease }}
          className="mt-12"
        >
          <Track label="Projects">
            {list.map((p, i) => (
              <div key={p.slug} className={frames[i % frames.length]}>
                <ProjectCard project={p} n={projects.indexOf(p) + 1} />
              </div>
            ))}
          </Track>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
