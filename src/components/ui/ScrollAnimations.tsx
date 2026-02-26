"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
  useMotionValue,
  MotionValue,
} from "framer-motion";
import { useRef, useEffect, useState, ReactNode, createContext, useContext } from "react";

/* ============================================
   SCROLL-LINKED ANIMATION PRIMITIVES

   These replace the simple FadeUp pattern with
   scroll-position-driven animations for an
   Apple-like immersive experience.
   ============================================ */

// ----- StickySection -----

interface StickySectionContextValue {
  progress: MotionValue<number>;
}

const StickySectionContext = createContext<StickySectionContextValue>({
  progress: new MotionValue(),
});

export function useStickyProgress() {
  return useContext(StickySectionContext).progress;
}

interface StickySectionProps {
  children: ReactNode;
  /** Total scroll height as multiplier of viewport (e.g., 3 = 300vh) */
  height?: number;
  className?: string;
}

/**
 * StickySection
 *
 * Creates a tall scroll container with a sticky viewport.
 * Children get access to a 0→1 progress value via useStickyProgress().
 */
export function StickySection({ children, height = 3, className = "" }: StickySectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <StickySectionContext.Provider value={{ progress: scrollYProgress }}>
      <div ref={containerRef} className={className} style={{ height: `${height * 100}vh` }}>
        <div className="sticky top-0 h-screen overflow-hidden">{children}</div>
      </div>
    </StickySectionContext.Provider>
  );
}

// ----- TextReveal -----

interface TextRevealProps {
  text: string;
  className?: string;
  /** Range within parent progress to animate [start, end] */
  range?: [number, number];
  progress: MotionValue<number>;
}

/**
 * TextReveal
 *
 * Reveals text word-by-word based on a scroll progress value.
 * Each word transitions from dim (0.15 opacity) to full (1.0).
 */
export function TextReveal({ text, className = "", range = [0, 1], progress }: TextRevealProps) {
  const words = text.split(" ");

  return (
    <p className={className}>
      {words.map((word, i) => {
        const wordStart = range[0] + (i / words.length) * (range[1] - range[0]);
        const wordEnd = range[0] + ((i + 1) / words.length) * (range[1] - range[0]);
        return <TextRevealWord key={`${word}-${i}`} word={word} range={[wordStart, wordEnd]} progress={progress} />;
      })}
    </p>
  );
}

function TextRevealWord({
  word,
  range,
  progress,
}: {
  word: string;
  range: [number, number];
  progress: MotionValue<number>;
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);

  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.25em]">
      {word}
    </motion.span>
  );
}

// ----- ParallaxLayer -----

interface ParallaxLayerProps {
  children: ReactNode;
  /** Speed multiplier. Positive = moves slower (parallax back), negative = faster */
  speed?: number;
  className?: string;
}

/**
 * ParallaxLayer
 *
 * Scroll-linked parallax on child content.
 * speed > 0: element lags behind scroll (moves less)
 * speed < 0: element moves faster than scroll
 */
export function ParallaxLayer({ children, speed = 0.5, className = "" }: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [speed * -100, speed * 100]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}

// ----- CountUp -----

interface CountUpProps {
  /** Target number to count to */
  target: number;
  /** Prefix (e.g., "$") */
  prefix?: string;
  /** Suffix (e.g., "K", "+") */
  suffix?: string;
  className?: string;
  /** Duration in seconds */
  duration?: number;
}

/**
 * CountUp
 *
 * Animates a number from 0 to target when it enters the viewport.
 */
export function CountUp({ target, prefix = "", suffix = "", className = "", duration = 2 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 100, damping: 30, duration: duration * 1000 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(target);
    }
  }, [isInView, motionValue, target]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });
    return unsubscribe;
  }, [springValue]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}

// ----- MagneticElement -----

interface MagneticElementProps {
  children: ReactNode;
  className?: string;
  /** Magnetic strength (default 0.3 = 30% of distance) */
  strength?: number;
}

/**
 * MagneticElement
 *
 * Makes children attract toward the cursor when hovering.
 * Disabled on touch devices.
 */
export function MagneticElement({ children, className = "", strength = 0.3 }: MagneticElementProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(!window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isTouchDevice || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * strength);
    y.set((e.clientY - centerY) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  if (isTouchDevice) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ----- ScrollReveal -----

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  /** Start offset from bottom of viewport (0 = element at bottom, 1 = element at top) */
  offset?: [string, string];
}

/**
 * ScrollReveal
 *
 * Scroll-linked fade + translate. Unlike FadeUp which triggers once,
 * this continuously responds to scroll position.
 */
export function ScrollReveal({ children, className = "", offset }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset || ["start end", "end 0.8"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);

  return (
    <div ref={ref}>
      <motion.div style={{ opacity, y }} className={className}>
        {children}
      </motion.div>
    </div>
  );
}
