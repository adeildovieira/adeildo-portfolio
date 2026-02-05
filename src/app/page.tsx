import { FilmGrain, Navigation } from "@/components/ui";
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
 * Main portfolio landing page featuring:
 * - Cinematic film grain overlay for atmosphere
 * - Scroll-triggered animations (Apple-style reveals)
 * - Strategic section order: Experience before Projects (internships are your strength!)
 * 
 * Each section is a self-contained component with its own animations.
 * The FilmGrain overlay creates the distinctive visual style.
 */
export default function Home() {
  return (
    <>
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
    </>
  );
}
