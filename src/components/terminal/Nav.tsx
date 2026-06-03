"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "index" },
  { href: "/experience", label: "experience" },
  { href: "/projects", label: "projects" },
  { href: "/about", label: "about me" },
];

/**
 * Fixed, centered top nav. Active route is brighter than the rest; the ✦
 * separators are decorative and muted.
 */
export function Nav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-5 text-xs sm:text-sm"
    >
      <ul className="flex items-center gap-2.5 sm:gap-4">
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
                className={`tracking-wide transition-colors duration-200 ${
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
