"use client";

import { usePathname } from "next/navigation";

export function Grain() {
  const pathname = usePathname();
  
  // Conditional logic: animated GIF on index, static PNG everywhere else
  const bgImage = pathname === "/" ? "/grain.gif" : "/grain-static.png";

  return (
    <div
      aria-hidden="true"
      // z-0 ensures it blocks the underlying HTML/Body black backgrounds
      className="pointer-events-none fixed inset-0 z-0 h-full w-full bg-[#000] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${bgImage}')` }}
    />
  );
}