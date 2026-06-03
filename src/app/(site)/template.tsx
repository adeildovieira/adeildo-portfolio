"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

/**
 * Quick crossfade between routes (~150ms). A template re-mounts on every
 * navigation, so this fades each new route in. Honors reduced motion via the
 * app-level MotionConfig.
 */
export default function SiteTemplate({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.16, ease: "easeOut" }}
      className="h-full w-full"
    >
      {children}
    </motion.div>
  );
}
