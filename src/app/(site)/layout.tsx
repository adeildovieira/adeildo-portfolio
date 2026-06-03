import { ReactNode } from "react";
import { Nav } from "@/components/terminal/Nav";
import { Footer } from "@/components/terminal/Footer";

/**
 * Terminal shell shared by the four no-scroll routes. Fixed Nav + Footer
 * frame a single centered viewport band. `h-[100dvh] overflow-hidden`
 * guarantees no vertical scrollbar on desktop.
 */
export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-[100dvh] flex-col overflow-hidden">
      <Nav />
      <main className="flex flex-1 items-center justify-center overflow-hidden px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto w-full max-w-6xl">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
