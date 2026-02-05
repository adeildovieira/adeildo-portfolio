"use client";

import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/Animations";

/**
 * Skills Section
 * 
 * Technical skills organized by category.
 * Visual representation of proficiency areas.
 */

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Framer Motion"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "FastAPI", "Spring Boot", "REST APIs", "GraphQL"],
  },
  {
    title: "Database & Cloud",
    skills: ["PostgreSQL", "MongoDB", "Redis", "AWS", "Docker", "Kubernetes"],
  },
  {
    title: "Tools & Practices",
    skills: ["Git", "GitHub", "CI/CD", "Agile/Scrum", "Testing", "Linux"],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="relative z-10 py-24 px-6 md:py-32"
    >
      {/* Background Accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-opalite-900/5 to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <FadeUp>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-opalite-400">
            Skills
          </p>
        </FadeUp>
        
        <FadeUp delay={0.1}>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            My Toolbox
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="mb-12 max-w-2xl text-lg text-foreground-muted">
            Technologies and tools I&apos;ve worked with and continue to learn. 
            Always expanding my skill set to solve new challenges.
          </p>
        </FadeUp>

        {/* Skills Grid */}
        <StaggerContainer
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.1}
        >
          {skillCategories.map((category) => (
            <StaggerItem key={category.title}>
              <div className="h-full rounded-2xl border border-white/5 bg-background-secondary/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-opalite-500/20">
                <h3 className="mb-4 text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/5 bg-background-tertiary px-3 py-1.5 text-sm text-foreground-muted transition-colors hover:border-opalite-500/30 hover:text-opalite-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Currently Learning */}
        <FadeUp delay={0.6}>
          <div className="mt-12 rounded-2xl border border-opalite-500/20 bg-opalite-900/10 p-6 text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-opalite-400">
              Currently Learning
            </p>
            <p className="mt-2 text-foreground-muted">
              Lorem ipsum dolor sit amet — always growing, always curious.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
