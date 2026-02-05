"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { FadeUp } from "@/components/ui/Animations";

/**
 * Hero Section
 * 
 * The first thing visitors see - makes a strong first impression.
 * Features:
 * - Large, bold name and title
 * - Brief tagline
 * - Call-to-action buttons
 * - Scroll indicator
 * - Social links
 */
export function Hero() {
  const handleScrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative z-20 flex min-h-screen items-center justify-center px-6"
    >
      <div className="mx-auto max-w-4xl text-center">
        {/* Greeting */}
        <FadeUp delay={0.2}>
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-opalite-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Software Engineer
          </p>
        </FadeUp>

        {/* Name - Using Playfair Display for elegant, expressive energy */}
        <FadeUp delay={0.3}>
          <h1 className="mb-6 font-display text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            Adeildo
            <span className="text-opalite-500"> Vieira</span>
          </h1>
        </FadeUp>

        {/* Tagline */}
        <FadeUp delay={0.4}>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-foreground-muted drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] md:text-xl">
            Computer Science at Duke '26. New Grad.
            <br />
            Prev. SWE Intern at BTG Pactual Bank, SWE Intern at Duke Code+ Program.
          </p>
        </FadeUp>

        {/* CTA Buttons */}
        <FadeUp delay={0.5}>
          <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-md bg-opalite-600 px-8 font-medium text-white text-shadow-sm transition-all hover:bg-opalite-500 hover:shadow-lg hover:shadow-opalite-600/25"
            >
              View My Work
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/10 px-8 font-medium text-foreground text-shadow-sm transition-all hover:border-opalite-500/50 hover:bg-white/5"
            >
              Get in Touch
            </a>
          </div>
        </FadeUp>

        {/* Social Links */}
        <FadeUp delay={0.6}>
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/adeildovieira"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-muted transition-colors hover:text-opalite-400"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href="https://linkedin.com/in/adeildovieira"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-muted transition-colors hover:text-opalite-400"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:me@adeildovieira.com"
              className="text-foreground-muted transition-colors hover:text-opalite-400"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
          </div>
        </FadeUp>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={handleScrollToAbout}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground-muted transition-colors hover:text-opalite-400"
        aria-label="Scroll to content"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.button>
    </section>
  );
}
