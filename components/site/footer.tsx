"use client";

import Link from "next/link";
import { profile } from "@/lib/profile";
import { BostonTime, sections } from "./header";
import { getLenis } from "./smooth-scroll";

export default function Footer() {
  return (
    <footer className="border-t border-paper/10 bg-pine-deep text-paper">
      <div className="container">
        <div className="grid gap-10 border-t border-paper/15 py-14 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <p className="font-display text-3xl font-normal tracking-tight">{profile.name}</p>
            <p className="mt-2 max-w-xs text-[14px] leading-relaxed text-paper/50">
              {profile.role}. Data platforms, applied ML and agentic AI.
            </p>
          </div>
          <nav className="md:col-span-3" aria-label="Footer">
            <p className="label mb-4 text-paper/40">Index</p>
            <ul className="space-y-2 text-[14px]">
              {sections.map((s) => (
                <li key={s.id}>
                  <Link href={`/#${s.id}`} className="link-draw text-paper/75 hover:text-paper">
                    {s.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/blog" className="link-draw text-paper/75 hover:text-paper">
                  Writing
                </Link>
              </li>
            </ul>
          </nav>
          <div className="md:col-span-4">
            <p className="label mb-4 text-paper/40">Colophon</p>
            <p className="text-[14px] leading-relaxed text-paper/60">
              Set in Fraunces, Instrument Sans and IBM Plex Mono. The contour map at the top is drawn live from simplex noise.
              Built with Next.js and Framer Motion.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-3 border-t border-paper/15 py-6 text-[12px] text-paper/45 sm:flex-row sm:items-center">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <BostonTime />
          <button
            onClick={() => (getLenis() ? getLenis()!.scrollTo(0) : window.scrollTo({ top: 0, behavior: "smooth" }))}
            className="link-draw self-start text-paper/70 hover:text-paper sm:self-auto"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
