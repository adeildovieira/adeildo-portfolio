import type { Metadata } from "next";
import Link from "next/link";
import { LINKS } from "@/lib/routes";

/**
 * 404.
 *
 * The stock Next.js error page shipped here instead: no links, no nav, no
 * branding, and two competing <title> tags. Apple S16 Wayfinding asks four
 * questions of every screen, and "How do I get out?" had no in-page answer —
 * a mistyped URL, or a stale link from a resume PDF, stranded the visitor.
 * Supplying our own not-found also resolves the duplicate title.
 */

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="flex min-h-[100dvh] flex-col items-center justify-center px-6 text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-muted">404</p>

      <h1 className="mt-6 text-[clamp(2rem,5vw,3.5rem)] font-bold lowercase leading-[0.95] tracking-[-0.02em]">
        no such route
      </h1>

      <p className="mt-6 max-w-[46ch] text-[15px] leading-relaxed text-muted">
        That page does not exist — it may have moved, or the link may be out of
        date. Here is everything that does exist:
      </p>

      <nav aria-label="Site" className="mt-10">
        <ul className="flex flex-wrap items-center justify-center gap-2 text-sm sm:gap-4">
          {[...LINKS, { href: "/blog", label: "writing" }].map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="inline-flex min-h-11 items-center px-2 text-muted underline-offset-4 transition-colors duration-200 hover:text-fg hover:underline"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
