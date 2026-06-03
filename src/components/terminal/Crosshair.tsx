"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

/**
 * Custom crosshair cursor — a center `+` that tracks the pointer, like the
 * reference. Precise (no spring lag). Mouse/fine-pointer only; on touch it
 * renders nothing and the native cursor is left untouched.
 */
export function Crosshair() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    // Client-only capability detection, deferred to an effect so the first
    // client render matches the static HTML (avoids a hydration mismatch).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEnabled(fine);
    if (!fine) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move, { passive: true });
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-difference"
      style={{ x, y, opacity: visible ? 1 : 0 }}
    >
      <span
        style={{ position: "absolute", width: 16, height: 1, left: -8, top: 0, background: "#fff" }}
      />
      <span
        style={{ position: "absolute", width: 1, height: 16, left: 0, top: -8, background: "#fff" }}
      />
    </motion.div>
  );
}
