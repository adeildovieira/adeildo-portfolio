import { Reveal } from "@/components/terminal/Reveal";
import { AsciiArt, STARFIELD } from "@/components/terminal/AsciiArt";

/**
 * revamped as a sleek, terminal-inspired landing page with a starfield background, oversized monospaced name, and a subtle developer-style
 * reason: matches more my vibe
 */

export default function IndexPage() {
  return (
    <div className="flex flex-col items-center text-center">
      <AsciiArt art={STARFIELD} className="mb-7 text-[10px] sm:mb-9 sm:text-xs" />

      <Reveal>
        <h1 className="text-left text-[clamp(2.5rem,7vw,5.5rem)] font-bold lowercase leading-[0.95] tracking-[0.04em]">
          a<span className="dev">de</span>ildo
          <br />
          <span className="inline-block pl-[1.5ch] sm:pl-[2.5ch]">
            <span className="dev">v</span>ieira
          </span>
          {/* <span className="caret font-normal text-fg">_</span> */}
        </h1>
      </Reveal>

      <Reveal delay={0.12}>
        <p className="mt-6 text-xs text-muted sm:mt-9 sm:text-sm md:text-base">
          {"/* cs @ duke · software engineer */"}
        </p>
      </Reveal>

      <Reveal delay={0.24}>
        <a
          href="/Adeildo_Vieira_Silva_Neto_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block text-xs text-muted transition-colors duration-200 hover:text-fg hover:underline underline-offset-4 sm:mt-8"
        >
          [ view resume ]
        </a>
      </Reveal>
    </div>
  );
}