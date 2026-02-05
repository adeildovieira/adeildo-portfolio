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
    title: "Software Engineer Intern — Full Stack",
    organization: "BTG Pactual Bank",
    location: "São Paulo, Brazil",
    period: "Jun—Aug 2025",
    description: [
      "Shipped an authentication system flow using industry standard OAuth2/OIDC/PKCE (Subject under NDA).",
      "Led end-to-end development of key features by aligning requirements with stakeholders and business.",
      "Conducted unit and integration testing gated in CI/CD to ensure reliability and performance.",
    ],
    current: false,
  },
  {
    type: "work",
    title: "Software Engineering Intern — Full Stack",
    organization: "Duke Code+ Program",
    location: "Durham, NC",
    period: "May 2024 — Aug 2024",
    description: [
      "Used 2M+ Wi-Fi and CO2 sensor data to predict room occupancy with R^2 = 0.72 and 95% accuracy (high/low/no occupation) by training and validating regression models.",
      "Drove an Agile stakeholder loop to design HVAC scheduling best practices.",
      "Optimized their work day by 2 hours by shipping a REST web service with PostgreSQL backend, providing a live occupancy dashboard in React.js.",
    ],
  },
  {
    type: "education",
    title: "B.Sc. in Computer Science",
    organization: "Duke University",
    location: "Durham, NC",
    period: "Aug 2022 — May 2026",
    description: [
      "Relevant coursework: Data Structures, Design of Algorithms, AI, Machine Learning, NLP, Technical and Social Analysis of the Internet, Product Management.",
      "First gen student. Active member of tech communities Diversity++, SHPE, and ColorStack on campus. Duke L1FE. BRASA@Duke.",
    ],
    current: true,
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="relative z-10 py-24 px-6 md:py-32"
    >
      <div className="mx-auto max-w-4xl text-center">
        {/* Section Header */}
        <FadeUp>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-opalite-400 text-shadow">
            Experience
          </p>
        </FadeUp>
        
        <FadeUp delay={0.1}>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground text-shadow sm:text-4xl md:text-5xl">
            Where I&apos;ve Been
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="mb-12 text-lg text-foreground-muted text-shadow-sm">
            My journey through education and professional experiences that shaped 
            who I am as a software engineer.
          </p>
        </FadeUp>
      </div>

      {/* Timeline */}
      <div className="mx-auto max-w-4xl">
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

                    <h3 className="text-xl font-semibold text-foreground text-shadow">
                      {item.title}
                    </h3>
                    
                    <p className="mt-1 font-medium text-opalite-400 text-shadow">
                      {item.organization}
                    </p>
                    
                    <p className="mt-1 text-sm text-foreground-muted text-shadow-sm">
                      {item.location} • {item.period}
                    </p>

                    <ul
                      className={`mt-4 space-y-2 text-foreground-muted text-shadow-sm ${
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
