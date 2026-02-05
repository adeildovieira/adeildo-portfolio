"use client";

import { FadeUp } from "@/components/ui/Animations";

/**
 * About Section
 * 
 * Personal introduction with:
 * - Brief bio
 * - Key stats or highlights
 * - Personal touch to connect with recruiters
 */
export function About() {
  const stats = [
    { value: "5+", label: "Years Learning Tech" },
    { value: "2+", label: "Tech Internships" },
    { value: "10+", label: "Projects" },
  ];

  return (
    <section
      id="about"
      className="relative z-10 py-24 px-6 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <FadeUp>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-opalite-400 text-shadow">
            About Me
          </p>
        </FadeUp>
        
        <FadeUp delay={0.1}>
          <h2 className="mb-12 text-3xl font-bold tracking-tight text-foreground text-shadow sm:text-4xl md:text-5xl">
            People first,<br />
            <span className="text-foreground-muted">code second.</span>
          </h2>
        </FadeUp>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Bio Text */}
          <div className="space-y-6">
            <FadeUp delay={0.2}>
              <p className="text-lg leading-relaxed text-foreground-muted text-shadow-sm">
                My experience has been based on listening and understanding the needs, actively talking to people to create meaningful solutions.
                I am at my best when listening to high level ideas, engaging with them to extract insights, and translating them into tech.
              </p>
            </FadeUp>
            
            <FadeUp delay={0.3}>
              <p className="text-lg leading-relaxed text-foreground-muted text-shadow-sm">
                At Duke, I could engage with Computer Science through a human-centric lens.
                With an arts and sciences education, I gave myself time to explore the technical and social implications of technology.
                I want to create technology that serves a purpose and scales as a difference to someone's daily life.
                
              </p>
            </FadeUp>

            <FadeUp delay={0.4}>
              <p className="text-lg leading-relaxed text-foreground-muted text-shadow-sm">
                My internships at BTG Pactual and Duke Code+ reinforced this. 
                Whether shaping the auth of the bank for small and medium businesses,
                or collaborating with the Facilities Department of my University,
                I found purpose in the work I did through stakeholder vision and technical execution.
              </p>
            </FadeUp>
          </div>

          {/* Stats */}
          <div className="flex flex-col justify-center">
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <FadeUp key={stat.label} delay={0.3 + index * 0.1}>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-opalite-400 text-shadow md:text-5xl">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm text-foreground-muted text-shadow-sm">
                      {stat.label}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>

            {/* Quick Info Card */}
            <FadeUp delay={0.6}>
              <div className="mt-10 rounded-2xl border border-white/5 bg-background-secondary p-6">
                <h3 className="mb-4 text-sm font-medium uppercase tracking-widest text-opalite-400 text-shadow">
                  Quick Facts
                </h3>
                <ul className="space-y-3 text-foreground-muted text-shadow-sm">
                  <li className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-opalite-500" />
                    Based in Durham, North Carolina, USA.
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-opalite-500" />
                    Duke University, Class of 2026.
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-opalite-500" />
                    Looking for my next challenge in full-stack development and DevOps.
                  </li>
                </ul>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
