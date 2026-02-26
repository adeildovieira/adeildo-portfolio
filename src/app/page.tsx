import { FilmGrain, Navigation, SmoothScroll, CustomCursor } from "@/components/ui";
import {
  Hero,
  About,
  Projects,
  Skills,
  Experience,
  Blog,
  Contact,
  Footer,
} from "@/components/sections";

/**
 * Home Page
 *
 * Portfolio as storytelling experience:
 * - Smooth scroll (Lenis) for butter-smooth physics
 * - Custom cursor for interactive delight
 * - Scroll-linked animations throughout
 * - Cinematic film grain overlay
 * - Strategic section order: Experience before Projects
 */
export default function Home() {
  return (
    <SmoothScroll>
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Cinematic Film Grain Overlay */}
      <FilmGrain />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Blog />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </SmoothScroll>
  );
}
