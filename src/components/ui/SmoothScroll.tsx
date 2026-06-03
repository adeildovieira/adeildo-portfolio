"use client";

import { ReactNode, useEffect, useRef } from "react";
import Lenis from "lenis";
import { MotionConfig, useReducedMotion } from "framer-motion";

/**
 * SmoothScroll Provider
 *
 * Wraps the application in Lenis smooth scrolling for butter-smooth scroll
 * physics, and provides a single `MotionConfig reducedMotion="user"` boundary
 * so every Framer Motion animation respects the user's OS setting.
 *
 * When the user prefers reduced motion, Lenis is not initialized — the page
 * falls back to native scrolling.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    let rafId = 0;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [prefersReducedMotion]);

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
