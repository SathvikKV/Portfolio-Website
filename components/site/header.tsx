"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { profile } from "@/lib/profile";
import { cn } from "@/lib/utils";
import { ease } from "./reveal";
import { getLenis } from "./smooth-scroll";

export const sections = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "notebooks", label: "Notebooks" },
  { id: "toolkit", label: "Toolkit" },
  { id: "contact", label: "Contact" },
];

export function BostonTime({ className }: { className?: string }) {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", timeZone: "America/New_York" });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 15_000);
    return () => clearInterval(id);
  }, []);
  return <span className={cn("tabular-nums", className)}>Boston {time ?? "—"}</span>;
}

export default function Header() {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 40);
    if (y > 500 && y > prev + 2) setHidden(true);
    else if (y < prev - 2) setHidden(false);
  });

  useEffect(() => {
    const lenis = getLenis();
    if (open) lenis?.stop();
    else lenis?.start();
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const href = (id: string) => (onHome ? `#${id}` : `/#${id}`);

  return (
    <>
      <motion.header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
          scrolled && !open ? "border-b border-rule bg-paper/85 backdrop-blur-md" : "border-b border-transparent",
        )}
        animate={{ y: hidden && !open ? "-100%" : "0%" }}
        transition={{ duration: 0.7, ease }}
      >
        <div className="container flex h-16 items-center justify-between gap-6">
          <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="flex h-8 w-8 items-center justify-center bg-ink font-display text-[12px] font-bold tracking-tight text-paper transition-colors duration-500 group-hover:bg-pine">
              SV
            </span>
            <span className="leading-none">
              <span className="block font-display text-[15px] font-semibold tracking-tight text-ink">{profile.name}</span>
              <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.12em] text-ink-3">AI · Data Engineer</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
            {sections.map((s, i) => (
              <a
                key={s.id}
                href={href(s.id)}
                className="group flex items-baseline gap-1.5 text-[14px] text-ink-2 transition-colors hover:text-ink"
              >
                <span className="font-mono text-[10px] text-ink-3">0{i + 1}</span>
                <span className="link-draw">{s.label}</span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <BostonTime className="label hidden lg:inline" />
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full border border-ink px-4 py-1.5 text-[13px] text-ink transition-colors duration-300 hover:bg-ink hover:text-paper sm:inline-block"
            >
              Résumé
            </a>
            <button
              className="text-[14px] text-ink md:hidden"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col bg-paper pt-24 md:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.8, ease }}
          >
            <ul className="container flex flex-col">
              {[...sections, { id: "blog", label: "Writing" }].map((s, i) => (
                <motion.li
                  key={s.id}
                  className="border-b border-rule"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.15 + i * 0.05, ease }}
                >
                  <Link
                    href={s.id === "blog" ? "/blog" : href(s.id)}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline justify-between py-4"
                  >
                    <span className="display text-5xl text-ink">{s.label}</span>
                    <span className="font-mono text-xs text-ink-3">0{i + 1}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="container mt-auto flex items-center justify-between pb-8">
              <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="link-undraw text-ink">
                Résumé ↗
              </a>
              <BostonTime className="label" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
