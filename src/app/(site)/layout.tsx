import { ReactNode } from "react";
import { Nav } from "@/components/terminal/Nav";
import { Footer } from "@/components/terminal/Footer";

/**
 * Terminal shell shared by the four routes. Fixed Nav + Footer frame a single
 * centered viewport band. Content is centered when it fits (so desktop shows no
 * scrollbar); when a page is taller than the viewport — e.g. the experience /
 * projects lists on a phone — the band scrolls internally instead of clipping
 * the top out of reach.
 */
export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-[100dvh] flex-col overflow-hidden">
      <Nav />
      <main className="flex-1 overflow-y-auto overflow-x-hidden overscroll-contain">
        <div className="mx-auto flex min-h-full w-full max-w-6xl items-center justify-center px-5 py-20 sm:px-8 sm:py-24">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
