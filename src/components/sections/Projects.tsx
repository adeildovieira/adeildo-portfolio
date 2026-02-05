"use client";

import { useState, useRef, useEffect } from "react";
import { FadeUp } from "@/components/ui/Animations";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Projects Section
 * 
 * Showcase of work with:
 * - Project cards with carousel navigation
 * - Tech stack tags
 * - Links to live demo and source code
 * - Arrow navigation for browsing
 */

interface Project {
  title: string;
  description: string;
  tags: string[];
  emoji?: string;
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "RepSense AI",
    description: "Rep counters don't say much to users. So I built an ESP32 workout coach that calls the OpenAI API in real time, returning streams of bench press exercise sensor data for on-device feedback (rep count, imbalance, tempo, rest quality), emphasizing UX, reliability, and human-readable insights on the device display.",
    tags: ["OpenAI API", "ESP32-BOX-3", "IMU Sensor", "IoT", "C"],
    emoji: "🏋️",
    githubUrl: "https://github.com/adeildovieira/RepSense-IoT-and-AI-Gym-Helper",
    featured: false,
  },
  {
    title: "MealPilot (Microsoft AI for Good Hackathon)",
    description: "Built a Copilot Studio extension using Azure Maps Search/Routing to return geo-personalized healthy-meal options across NYC; pilot with 28 students achieved 80% task success in 45s vs 5 min (85% faster), targeting areas with >30% food insecurity.",
    tags: ["Python", "MS Copilot Studio", "Azure Maps API"],
    emoji: "🥗",
    featured: false,
  },
  {
    title: "CNN Waste Classification",
    description: "Deep learning model for automated waste classification using Convolutional Neural Networks. Trained on diverse waste imagery to accurately categorize recyclables, organics, and landfill items, promoting sustainable waste management practices.",
    tags: ["Python", "TensorFlow", "CNN", "Computer Vision"],
    emoji: "♻️",
    githubUrl: "https://github.com/adeildovieira/ML-Class-Final-Project",
    featured: false,
  },
  {
    title: "DartHub - Star Wars To-Do App",
    description: "A Star Wars themed to-do app built with Flutter and Firebase. Features user authentication, real-time Firebase database sync, and a playful Dark Side aesthetic. Team project with support for Android and Web.",
    tags: ["Flutter", "Dart", "Firebase", "Cross-Platform"],
    emoji: "⚔️",
    githubUrl: "https://github.com/adeildovieira/StarWars-To-Do-App-Flutter",
    featured: false,
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className="group relative w-full overflow-hidden rounded-2xl border border-white/5 bg-background-secondary transition-all duration-300 hover:border-opalite-500/30 hover:shadow-xl hover:shadow-opalite-900/10"
    >
      {/* Project Image / Emoji */}
      <div className="aspect-video w-full bg-gradient-to-br from-background-tertiary to-background-secondary">
        <div className="flex h-full items-center justify-center">
          {project.emoji ? (
            <span className="text-7xl">{project.emoji}</span>
          ) : (
            <span className="text-sm text-foreground-muted">Project Image</span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="mb-2 text-xl font-semibold text-foreground text-shadow group-hover:text-opalite-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="mb-4 text-foreground-muted text-shadow-sm leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-background-tertiary px-3 py-1 text-xs font-medium text-foreground-muted text-shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-foreground-muted text-shadow-sm transition-colors hover:text-opalite-400"
            >
              <Github size={16} />
              Source
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-foreground-muted text-shadow-sm transition-colors hover:text-opalite-400"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-opalite-500/50 to-transparent" />
      </div>
    </article>
  );
}

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Calculate the offset for the carousel
  const getTransformOffset = () => {
    // Mobile: 100% per card, Desktop: 51% per card (2 visible)
    const offset = isMobile ? 100 : 51;
    return `translateX(-${currentIndex * offset}%)`;
  };

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Create extended projects array for infinite loop effect
  const extendedProjects = [...projects, ...projects.slice(0, 2)];

  // Reset position when reaching the cloned items
  useEffect(() => {
    if (currentIndex >= projects.length) {
      const timeout = setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.style.transition = 'none';
          setCurrentIndex(currentIndex - projects.length);
          requestAnimationFrame(() => {
            if (containerRef.current) {
              containerRef.current.style.transition = 'transform 0.5s ease-in-out';
            }
          });
        }
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  return (
    <section
      id="projects"
      className="relative z-10 py-24 px-6 md:py-32"
    >
      <div className="mx-auto max-w-4xl text-center">
        {/* Section Header */}
        <FadeUp>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-opalite-400 text-shadow">
            Projects
          </p>
        </FadeUp>
        
        <FadeUp delay={0.1}>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground text-shadow sm:text-4xl md:text-5xl">
            Things I&apos;ve Built
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="mb-12 text-lg text-foreground-muted text-shadow-sm">
          </p>
        </FadeUp>
      </div>

      {/* Projects Carousel */}
      <div className="mx-auto max-w-6xl relative">
        {/* Left Arrow */}
        <button
          onClick={prevProject}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 p-2 text-foreground-muted hover:text-opalite-400 transition-colors"
          aria-label="Previous project"
        >
          <ChevronLeft size={40} strokeWidth={1.5} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextProject}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 p-2 text-foreground-muted hover:text-opalite-400 transition-colors"
          aria-label="Next project"
        >
          <ChevronRight size={40} strokeWidth={1.5} />
        </button>

        {/* Carousel Container */}
        <FadeUp delay={0.3}>
          <div className="overflow-hidden px-2 md:px-0">
            <div 
              ref={containerRef}
              className="flex gap-4 md:gap-6 transition-transform duration-500 ease-in-out"
              style={{ transform: getTransformOffset() }}
            >
              {extendedProjects.map((project, index) => (
                <div
                  key={`${project.title}-${index}`}
                  className="w-full md:w-[calc(50%-12px)] flex-shrink-0"
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Page Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex % projects.length || index === (currentIndex + 1) % projects.length
                  ? "bg-opalite-400"
                  : "bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        {/* View All Link */}
        <FadeUp delay={0.6}>
          <div className="mt-12 text-center">
            <a
              href="https://github.com/adeildovieira"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-opalite-400 text-shadow transition-colors hover:text-opalite-300"
            >
              View all projects on GitHub
              <ExternalLink size={16} />
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
