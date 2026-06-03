"use client";

import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useRef, useEffect, useState, ReactNode } from "react";

/* ============================================
   SCROLL / POINTER ANIMATION PRIMITIVES

   Trimmed to the primitives actually in use.
   ============================================ */

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
 * Disabled on touch devices and when the user prefers reduced motion.
 */
export function MagneticElement({ children, className = "", strength = 0.3 }: MagneticElementProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
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

  if (isTouchDevice || prefersReducedMotion) {
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
