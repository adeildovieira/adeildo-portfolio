"use client";

import { useEffect, useState } from "react";

/**
 * FilmGrain Component
 * 
 * Creates that signature grainy, moving background effect like afamolie.com.
 * Uses an animated GIF for the grain texture — simple, performant, authentic.
 * 
 * Features:
 * - Animated grain in hero section (moving GIF)
 * - Static grain below hero (frozen frame for readability)
 * - Smooth transition between animated ↔ static on scroll
 * - Resumes animation when scrolling back to top
 */

export function HeroGrain() {
  const [isAnimated, setIsAnimated] = useState(true);

  // Switch between animated and static grain based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      // Switch to static when scrolled past 50% of hero height
      const shouldAnimate = scrollY < heroHeight * 0.5;
      setIsAnimated(shouldAnimate);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Animated grain (visible in hero) */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-500"
        style={{
          opacity: isAnimated ? 1 : 0,
          backgroundImage: "url('/grain.gif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden="true"
      />
      {/* Static grain (visible below hero) */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-500"
        style={{
          opacity: isAnimated ? 0 : 1,
          backgroundImage: "url('/grain-static.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden="true"
      />
    </>
  );
}

/**
 * BackgroundGradient Component
 * 
 * Static gradient background with opalite blue tones.
 * Always visible throughout the page.
 */
export function BackgroundGradient() {
  return (
    <>
      {/* Grainy gradient background - opalite blue tones */}
      <div
        className="pointer-events-none fixed inset-0 z-[1]"
        style={{
          background: `
            radial-gradient(
              ellipse 80% 50% at 50% 0%,
              rgba(59, 154, 224, 0.12) 0%,
              rgba(10, 35, 64, 0.08) 40%,
              transparent 70%
            ),
            radial-gradient(
              ellipse 60% 40% at 100% 100%,
              rgba(31, 90, 144, 0.08) 0%,
              transparent 50%
            ),
            radial-gradient(
              ellipse 40% 30% at 0% 80%,
              rgba(47, 122, 184, 0.06) 0%,
              transparent 50%
            )
          `,
        }}
        aria-hidden="true"
      />

      {/* Vignette effect for cinematic edge darkening */}
      <div
        className="pointer-events-none fixed inset-0 z-[2]"
        style={{
          background: `
            radial-gradient(
              ellipse 70% 70% at 50% 50%,
              transparent 0%,
              rgba(0, 0, 0, 0.3) 100%
            )
          `,
        }}
        aria-hidden="true"
      />
    </>
  );
}

/**
 * FilmGrain Component
 * 
 * Combines HeroGrain (animated GIF, fades on scroll) and BackgroundGradient (static).
 * The grain is visible in the hero section then fades away for readability.
 */
export function FilmGrain() {
  return (
    <>
      <HeroGrain />
      <BackgroundGradient />
    </>
  );
}
