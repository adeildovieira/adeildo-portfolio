"use client";

import { FadeUp } from "@/components/ui/Animations";

/**
 * Experience Section
 * 
 * Timeline-style display of work experience and education.
 * Highlights roles, responsibilities, and achievements.
 */

interface ExperienceItem {
  type: "work" | "education";
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string[];
  current?: boolean;
}

const experiences: ExperienceItem[] = [
  {
    type: "work",
    title: "Software Engineering Intern",
    organization: "Company Name",
    location: "City, State",
    period: "May 2025 — Aug 2025",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation.",
    ],
    current: false,
  },
  {
    type: "work",
    title: "Teaching Assistant",
    organization: "University Name",
    location: "City, State",
    period: "Jan 2024 — May 2025",
    description: [
      "Duis aute irure dolor in reprehenderit in voluptate velit.",
      "Excepteur sint occaecat cupidatat non proident.",
    ],
  },
  {
    type: "education",
    title: "Bachelor of Science in Computer Science",
    organization: "University Name",
    location: "City, State",
    period: "Aug 2022 — May 2026",
    description: [
      "GPA: X.XX/4.00",
      "Relevant coursework: Data Structures, Algorithms, Software Engineering, etc.",
      "Dean's List, Honors, or other achievements.",
    ],
    current: true,
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 px-6 md:py-32"
    >
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <FadeUp>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-opalite-400">
            Experience
          </p>
        </FadeUp>
        
        <FadeUp delay={0.1}>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Where I&apos;ve Been
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="mb-12 max-w-2xl text-lg text-foreground-muted">
            My journey through education and professional experiences that shaped 
            who I am as a software engineer.
          </p>
        </FadeUp>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-opalite-500/50 via-opalite-500/20 to-transparent md:left-1/2 md:-translate-x-1/2" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((item, index) => (
              <FadeUp key={`${item.organization}-${item.title}`} delay={0.2 + index * 0.1}>
                <div
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-0 flex h-4 w-4 -translate-x-1/2 items-center justify-center md:left-1/2">
                    <div
                      className={`h-3 w-3 rounded-full border-2 ${
                        item.current
                          ? "border-opalite-400 bg-opalite-500"
                          : "border-opalite-600 bg-background"
                      }`}
                    />
                    {item.current && (
                      <div className="absolute h-3 w-3 animate-ping rounded-full bg-opalite-500 opacity-50" />
                    )}
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-8 w-full md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}
                  >
                    {/* Type Badge */}
                    <span
                      className={`mb-2 inline-block rounded-full px-3 py-1 text-xs font-medium ${
                        item.type === "work"
                          ? "bg-opalite-900/50 text-opalite-400"
                          : "bg-emerald-900/50 text-emerald-400"
                      }`}
                    >
                      {item.type === "work" ? "Work" : "Education"}
                    </span>

                    <h3 className="text-xl font-semibold text-foreground">
                      {item.title}
                    </h3>
                    
                    <p className="mt-1 font-medium text-opalite-400">
                      {item.organization}
                    </p>
                    
                    <p className="mt-1 text-sm text-foreground-muted">
                      {item.location} • {item.period}
                    </p>

                    <ul
                      className={`mt-4 space-y-2 text-foreground-muted ${
                        index % 2 === 0 ? "md:ml-auto" : ""
                      }`}
                    >
                      {item.description.map((point, i) => (
                        <li
                          key={i}
                          className={`flex items-start gap-2 ${
                            index % 2 === 0 ? "md:flex-row-reverse md:text-right" : ""
                          }`}
                        >
                          <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-opalite-500" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
