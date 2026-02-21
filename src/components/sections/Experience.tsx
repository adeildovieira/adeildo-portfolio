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
    title: "Software Engineer Intern — Full-stack",
    organization: "BTG Pactual Bank",
    location: "São Paulo, Brazil",
    period: "Jun—Aug 2025",
    description: [
      "Improved log in performance toward 1s goal by deploying a new auth flow using industry standard OAuth2/OIDC/PKCE (Subject under NDA).",
      "Expedited end-to-end delivery and prod readiness by defining auth latency target, RFC, feature flagged rollout/rollback plan.",
      "Optimized UAT incident triage time by 20 mins by automating the auth flow with logging/telemetry, API, and Redis state/caching.",
    ],
    current: false,
  },
  {
    type: "work",
    title: "Software Engineer Intern — Full-stack",
    organization: "Duke Code+ Program",
    location: "Durham, NC",
    period: "May—Aug 2024",
    description: [
      "Reduced data request cycles by 2 hours/day by deploying a Docker/Linux containerized REST service with PostgreSQL for live occupancy visualizations.",
      "Predicted room occupancy with 95% precision by training/validating models on 2M+ Wi-Fi logs + CO2 datapoints (Scikit-Learn, GeoPandas).",
      "Drove Facilities Agile loops by translating reqs into acceptance criteria to use outputs for HVAC plans.",
    ],
  },
  {
    type: "work",
    title: "Technical Assistant",
    organization: "Duke OIT Innovation Co-Lab, Bluesmith Lab",
    location: "Durham, NC",
    period: "Jun 2023-Dec 2024",
    description: [
      "Reduced turnaround time from 3+ to 1-2 business days by owning end-to-end 3D printing deliveries for 24 stakeholders, producing 47 custom models for Health research.",
      "Sustained 95% client satisfaction by standardizing intake/delivery workflows and documenting specs/handoffs to improve reliability.",
    ],
  },
  {
    type: "education",
    title: "B.Sc. in Computer Science",
    organization: "Duke University",
    location: "Durham, NC",
    period: "Aug 2022—May 2026",
    description: [
      "Relevant coursework: Data Structures, Design of Algorithms, AI, ML, NLP, IoT, Database Systems.",
      "Full scholarship valued at $427k. First gen student. Active member of tech communities Diversity++, SHPE, and ColorStack on campus. Duke L1FE. BRASA@Duke.",
      "Semester abroad at Danish Institute for Study Abroad (DIS) in Stockholm, Sweden focused on AI and Machine Learning practices.",
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
