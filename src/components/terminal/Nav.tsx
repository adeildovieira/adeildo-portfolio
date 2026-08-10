"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LINKS } from "@/lib/routes";

/**
 * Fixed, centered top nav. Active route is brighter than the rest; the ✦
 * separators are decorative and muted.
 */
export function Nav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 top-0 z-40 px-4 pt-3 pb-6 text-xs sm:text-sm"
    >
      {/*
        Scroll edge effect (Apple S12): content passes *under* the chrome, so
        the chrome needs a material. A gradient scrim + blur that fades to
        transparent reads as depth; a hard opaque bar or a 1px divider does
        not. Sits behind the links so the labels stay at full contrast.
      */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg via-bg/85 to-transparent backdrop-blur-[6px] [mask-image:linear-gradient(to_bottom,black_55%,transparent)]"
      />

      <ul className="relative flex items-center justify-center gap-2.5 sm:gap-4">
        {LINKS.map((link, i) => {
          const active = pathname === link.href;
          return (
            <li key={link.href} className="flex items-center gap-2.5 sm:gap-4">
              {i > 0 && (
                <span aria-hidden="true" className="text-[#333] select-none">
                  ✦
                </span>
              )}
              <Link
                href={link.href}
                aria-current={active ? "page" : undefined}
                // min-h-11 = 44px, the WCAG 2.5.8 / HIG minimum. These were
                // 20px tall. The box grows; the type does not.
                className={`inline-flex min-h-11 items-center px-1 tracking-wide transition-colors duration-200 ${
                  active ? "text-fg" : "text-muted hover:text-fg"
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
