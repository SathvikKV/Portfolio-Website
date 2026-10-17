"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

let instance: Lenis | null = null;

export function getLenis() {
  return instance;
}

/** Page-wide inertial scrolling. Native scrolling is kept for touch and reduced motion. */
export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    instance = new Lenis({
      autoRaf: true,
      lerp: 0.085,
      wheelMultiplier: 1,
      anchors: { offset: -72 },
    });
    return () => {
      instance?.destroy();
      instance = null;
    };
  }, []);

  // Route changes: start at the top (or the hash target) without a smooth jump.
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        requestAnimationFrame(() => instance?.scrollTo(el as HTMLElement, { offset: -72, immediate: true }));
        return;
      }
    }
    instance?.scrollTo(0, { immediate: true });
  }, [pathname]);

  return null;
}
