import { ReactNode } from "react";
import { Nav } from "@/components/terminal/Nav";
import { Footer } from "@/components/terminal/Footer";
import { ScrollNavMain } from "@/components/terminal/ScrollNavMain";

/**
 * Terminal shell shared by the four routes. Fixed Nav + Footer frame a single
 * centered viewport band. Content is centered when it fits (so desktop shows no
 * scrollbar); when a page is taller than the viewport — e.g. the experience /
 * projects lists on a phone — the band scrolls internally instead of clipping
 * the top out of reach. Reaching the top/bottom edge and continuing to
 * scroll or swipe (ScrollNavMain) is a second way between routes, alongside
 * clicking Nav directly.
 */
export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-[100dvh] flex-col overflow-hidden">
      <Nav />
      <ScrollNavMain>{children}</ScrollNavMain>
      <Footer />
    </div>
  );
}
