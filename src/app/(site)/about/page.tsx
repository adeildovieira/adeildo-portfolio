import { Reveal } from "@/components/terminal/Reveal";

export default function AboutPage() {
  return (
    // Added mx-auto here to horizontally center the max-w-4xl container
    <section aria-labelledby="about-heading" className="mx-auto w-full max-w-4xl">
      <h1 id="about-heading" className="sr-only">
        about
      </h1>

      <Reveal>
        {/* Using lowercase, generous line-height (leading-relaxed), 
          and gap-8 for that clean, spaced-out editorial look.
        */}
        <div className="flex flex-col gap-7 text-[15px] lowercase leading-[1.8] text-muted sm:text-lg sm:leading-[1.8]">
          <p>
            Hi, I'm a 23-year-old software engineer. I've recently earned a bachelor of science degree in computer science from duke university (blue devil forever!). I am originally from northeast brazil, from a place known as the brazilian caribbean, Alagoas, surrounded by beautiful beaches and rivers.
          </p>

          <p>
            i specialize in full-stack web development and auth systems. i use <span className="text-fg underline decoration-muted/40 underline-offset-4">🐍 python</span>, <span className="text-fg underline decoration-muted/40 underline-offset-4">⚙️ c</span>, and <span className="text-fg underline decoration-muted/40 underline-offset-4">⚛️ react</span> to build everything from iot to analytics platforms. i work across <span className="text-fg underline decoration-muted/40 underline-offset-4">🍎 macos</span> and <span className="text-fg underline decoration-muted/40 underline-offset-4">🐧 linux</span>.
          </p>

          <p>
            for me, functional, maintainable code is a form of craftsmanship and a way to communicate ideas clearly. i care deeply about user experience and building inclusive products that empower users.
          </p>

          <p>
            outside of code, i care deeply about digital literacy and bridging the digital divide in brazil's interior through initiatives like espaço 4.0. when i'm offline, you can find me listening to mpb and regional nordeste music, reading literature, or studying astronomy and film.
          </p>

          <p>
            the weather display provides real-time data from the open-meteo api for durham, nc.
          </p>
        </div>
      </Reveal>
    </section>
  );
}