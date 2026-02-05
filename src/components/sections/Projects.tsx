"use client";

import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/Animations";
import { ExternalLink, Github } from "lucide-react";

/**
 * Projects Section
 * 
 * Showcase of work with:
 * - Project cards with images
 * - Tech stack tags
 * - Links to live demo and source code
 * - Hover effects for engagement
 */

interface Project {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "RepSense",
    description: "An AI-powered bench press assistant that provides real-time form feedback and rep counting. Combines embedded systems with cloud AI for an intelligent gym companion.",
    tags: ["OpenAI API", "ESP32", "IoT", "Python", "Computer Vision"],
    githubUrl: "https://github.com/adeildovieira/repsense",
    featured: false,
  },
  {
    title: "Waste Classification CNN",
    description: "A convolutional neural network that classifies waste into recyclable categories using image recognition. Trained on thousands of images to help automate waste sorting.",
    tags: ["Python", "TensorFlow", "CNN", "Computer Vision", "Deep Learning"],
    githubUrl: "https://github.com/adeildovieira/waste-classification",
    featured: false,
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <StaggerItem>
      <article
        className={`group relative overflow-hidden rounded-2xl border border-white/5 bg-background-secondary transition-all duration-300 hover:border-opalite-500/30 hover:shadow-xl hover:shadow-opalite-900/10 ${
          project.featured ? "md:col-span-2" : ""
        }`}
      >
        {/* Project Image Placeholder */}
        <div className="aspect-video w-full bg-gradient-to-br from-background-tertiary to-background-secondary">
          <div className="flex h-full items-center justify-center text-foreground-muted">
            <span className="text-sm">Project Image</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Featured Badge */}
          {project.featured && (
            <span className="mb-3 inline-block rounded-full bg-opalite-900/50 px-3 py-1 text-xs font-medium text-opalite-400">
              Featured
            </span>
          )}

          <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-opalite-400 transition-colors">
            {project.title}
          </h3>
          
          <p className="mb-4 text-foreground-muted leading-relaxed">
            {project.description}
          </p>

          {/* Tags */}
          <div className="mb-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-background-tertiary px-3 py-1 text-xs font-medium text-foreground-muted"
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
                className="flex items-center gap-2 text-sm text-foreground-muted transition-colors hover:text-opalite-400"
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
                className="flex items-center gap-2 text-sm text-foreground-muted transition-colors hover:text-opalite-400"
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
    </StaggerItem>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="relative z-10 py-24 px-6 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <FadeUp>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-opalite-400">
            Projects
          </p>
        </FadeUp>
        
        <FadeUp delay={0.1}>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Things I&apos;ve Built
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="mb-12 max-w-2xl text-lg text-foreground-muted">
            A selection of projects that showcase my skills and passion for building 
            software. Each project represents challenges overcome and lessons learned.
          </p>
        </FadeUp>

        {/* Projects Grid */}
        <StaggerContainer
          className="grid gap-6 md:grid-cols-2"
          staggerDelay={0.1}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </StaggerContainer>

        {/* View All Link */}
        <FadeUp delay={0.6}>
          <div className="mt-12 text-center">
            <a
              href="https://github.com/adeildovieira"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-opalite-400 transition-colors hover:text-opalite-300"
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
