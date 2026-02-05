"use client";

import { FadeUp } from "@/components/ui/Animations";

/**
 * Skills Section
 * 
 * Grid-based layout with categories and tech icons.
 * Shows tech name on hover via tooltip.
 */

// Skill categories with icons (using simple-icons CDN for tech logos)
const skillCategories = [
  {
    title: "Backend & Languages",
    skills: [
      { name: "Python", icon: "python", color: "#3776AB" },
      { name: "TypeScript", icon: "typescript", color: "#3178C6" },
      { name: "Node.js", icon: "nodedotjs", color: "#339933" },
      { name: "Java", icon: "openjdk", color: "#ED8B00" },
      { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
      { name: "C", icon: "c", color: "#A8B9CC" },
      { name: "R", icon: "r", color: "#276DC3" },
      { name: "SQL", icon: "mysql", color: "#4479A1" },
      { name: "GraphQL", icon: "graphql", color: "#E10098" },
      { name: "FastAPI", icon: "fastapi", color: "#009688" },
    ],
  },
  {
    title: "DevOps & Infrastructure",
    skills: [
      { name: "Docker", icon: "docker", color: "#2496ED" },
      { name: "AWS", icon: "aws", color: "#FF9900", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
      { name: "Azure", icon: "azure", color: "#0078D7", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" },
      { name: "Git", icon: "git", color: "#F05032" },
      { name: "GitHub", icon: "github", color: "#ffffff" },
      { name: "CI/CD", icon: "githubactions", color: "#2088FF" },
      { name: "Linux", icon: "linux", color: "#FCC624" },
      { name: "VM", icon: "virtualbox", color: "#183A61" },
    ],
  },
  {
    title: "Technologies",
    skills: [
      { name: "PostgreSQL", icon: "postgresql", color: "#4169E1" },
      { name: "Redis", icon: "redis", color: "#DC382D" },
      { name: "REST API", icon: "openapiinitiative", color: "#6BA539" },
      { name: "OpenAI API", icon: "openai", color: "#ffffff", customUrl: "https://cdn.worldvectorlogo.com/logos/openai-2.svg", invert: true },
      { name: "OAuth2/OIDC", icon: "auth0", color: "#EB5424" },
      { name: "Telemetry", icon: "opentelemetry", color: "#F5A800" },
    ],
  },
];

const currentlyLearning = [
  { name: "Rust", icon: "rust", color: "#ffffff" },
  { name: "Next.js", icon: "nextdotjs", color: "#ffffff" },
  { name: "React", icon: "react", color: "#61DAFB" },
  { name: "Tailwind CSS", icon: "tailwindcss", color: "#06B6D4" },
  { name: "HTML5", icon: "html5", color: "#E34F26" },
  { name: "CSS", icon: "css", color: "#1572B6" },
  { name: "Framer Motion", icon: "framer", color: "#0055FF" },
];

// Custom icon URLs for icons not available on Simple Icons CDN
const customIconUrls: Record<string, string> = {
  aws: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  azure: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
};

function SkillIcon({ name, icon, color, customUrl, invert }: { name: string; icon: string; color: string; customUrl?: string; invert?: boolean }) {
  const iconSrc = customUrl || `https://cdn.simpleicons.org/${icon}/${color.replace('#', '')}`;
  
  return (
    <div className="group relative flex justify-center">
      {/* Tooltip */}
      <div className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 transition-opacity group-hover:opacity-100 z-20">
        <div className="whitespace-nowrap rounded-md bg-background-secondary border border-white/10 px-2 py-1 text-xs text-foreground shadow-lg">
          {name}
        </div>
      </div>
      
      {/* Icon */}
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-background-secondary/80 border border-white/10 transition-all hover:border-opalite-500/50 hover:bg-white/5 cursor-pointer">
        <img
          src={iconSrc}
          alt={name}
          className={`h-6 w-6 ${invert ? 'invert' : ''}`}
          loading="lazy"
        />
      </div>
    </div>
  );
}

function SkillCategory({ title, skills }: { title: string; skills: { name: string; icon: string; color: string; customUrl?: string; invert?: boolean }[] }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-background-secondary/30 p-6">
      <h3 className="mb-4 text-lg font-semibold text-foreground text-shadow">
        {title}
      </h3>
      <div className="grid grid-cols-4 gap-3">
        {skills.map((skill) => (
          <SkillIcon key={skill.name} {...skill} />
        ))}
      </div>
    </div>
  );
}

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

      <div className="mx-auto max-w-4xl text-center">
        {/* Section Header */}
        <FadeUp>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-opalite-400 text-shadow">
            Skills
          </p>
        </FadeUp>
        
        <FadeUp delay={0.1}>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground text-shadow sm:text-4xl md:text-5xl">
            Tech Stack
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="mb-12 text-lg text-foreground-muted text-shadow-sm">
          </p>
        </FadeUp>
      </div>

      {/* Skill Categories Grid */}
      <div className="mx-auto max-w-5xl">
        <FadeUp delay={0.3}>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Backend & Languages - left side */}
            <SkillCategory 
              title={skillCategories[0].title} 
              skills={skillCategories[0].skills} 
            />
            
            {/* DevOps & Infrastructure - right side */}
            <SkillCategory 
              title={skillCategories[1].title} 
              skills={skillCategories[1].skills} 
            />
          </div>
        </FadeUp>

        <FadeUp delay={0.35}>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {/* Technologies - left side */}
            <SkillCategory 
              title={skillCategories[2].title} 
              skills={skillCategories[2].skills} 
            />

            {/* Currently Learning - right side */}
            <div className="rounded-2xl border border-opalite-500/20 bg-opalite-900/10 p-6">
              <p className="mb-4 text-lg font-semibold text-foreground text-shadow">
                Currently Learning
              </p>
              <div className="grid grid-cols-4 gap-3">
                {currentlyLearning.map((skill) => (
                  <SkillIcon key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
