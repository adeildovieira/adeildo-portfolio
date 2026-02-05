"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

/**
 * FadeUp Animation Component
 * 
 * Wraps child elements and applies a scroll-triggered fade-up animation,
 * similar to Apple's website reveal effects. Elements start below their
 * final position with zero opacity and smoothly animate into view.
 * 
 * Props:
 * - children: The content to animate
 * - delay: Stagger delay in seconds (default: 0)
 * - duration: Animation duration in seconds (default: 0.6)
 * - className: Additional CSS classes
 * - once: Whether to animate only once (default: true)
 */

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  /** Distance to travel up in pixels */
  distance?: number;
}

export function FadeUp({
  children,
  delay = 0,
  duration = 0.6,
  className = "",
  once = true,
  distance = 40,
}: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { 
    once, 
    margin: "-10% 0px -10% 0px" // Trigger slightly before element enters viewport
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: distance }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: distance }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1], // Custom easing for smooth, Apple-like feel
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * FadeIn Animation Component
 * 
 * Simple fade without vertical movement.
 * Useful for background elements or images.
 */
interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.8,
  className = "",
  once = true,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-5% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggerContainer Component
 * 
 * Parent container that staggers the animation of its children.
 * Use with FadeUp components as children for cascading reveal effects.
 */
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggerItem Component
 * 
 * Child component to be used inside StaggerContainer.
 * Automatically inherits stagger timing from parent.
 */
interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function StaggerItem({ children, className = "" }: StaggerItemProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.25, 0.4, 0.25, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
