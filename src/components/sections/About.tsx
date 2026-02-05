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
    { value: "2+", label: "Years Learning" },
    { value: "10+", label: "Projects Built" },
    { value: "5+", label: "Technologies" },
  ];

  return (
    <section
      id="about"
      className="relative py-24 px-6 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <FadeUp>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-opalite-400">
            About Me
          </p>
        </FadeUp>
        
        <FadeUp delay={0.1}>
          <h2 className="mb-12 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Building the future,<br />
            <span className="text-foreground-muted">one line at a time.</span>
          </h2>
        </FadeUp>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Bio Text */}
          <div className="space-y-6">
            <FadeUp delay={0.2}>
              <p className="text-lg leading-relaxed text-foreground-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do 
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
                ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </FadeUp>
            
            <FadeUp delay={0.3}>
              <p className="text-lg leading-relaxed text-foreground-muted">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </FadeUp>

            <FadeUp delay={0.4}>
              <p className="text-lg leading-relaxed text-foreground-muted">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
            </FadeUp>
          </div>

          {/* Stats */}
          <div className="flex flex-col justify-center">
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <FadeUp key={stat.label} delay={0.3 + index * 0.1}>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-opalite-400 md:text-5xl">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm text-foreground-muted">
                      {stat.label}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>

            {/* Quick Info Card */}
            <FadeUp delay={0.6}>
              <div className="mt-10 rounded-2xl border border-white/5 bg-background-secondary p-6">
                <h3 className="mb-4 text-sm font-medium uppercase tracking-widest text-opalite-400">
                  Quick Facts
                </h3>
                <ul className="space-y-3 text-foreground-muted">
                  <li className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-opalite-500" />
                    Based in [Your Location]
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-opalite-500" />
                    New Grad — [Your University]
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-opalite-500" />
                    Open to opportunities
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
