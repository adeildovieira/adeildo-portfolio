"use client";

import { MotionConfig } from "framer-motion";
import { ReactNode } from "react";

/**
 * Single Framer Motion boundary. `reducedMotion="user"` makes every entrance
 * reveal and route crossfade respect the OS setting automatically.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
