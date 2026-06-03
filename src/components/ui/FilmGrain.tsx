/**
 * FilmGrain Component
 *
 * Cinematic grain + atmospheric gradients, the signature texture of the site.
 *
 * The grain is a single fixed overlay backed by an inline SVG fractal-noise
 * texture (zero network cost — it replaces a 2.8MB animated GIF). The drift
 * animation is pure GPU transform and is frozen automatically under
 * `prefers-reduced-motion` via the global stylesheet.
 *
 * This is a server component — no client JS ships for the texture.
 */

/**
 * BackgroundGradient — static opalite radial wash + cinematic vignette.
 */
function BackgroundGradient() {
  return (
    <>
      {/* Grainy gradient background - opalite blue tones */}
      <div
        className="pointer-events-none fixed inset-0 z-[1]"
        style={{
          background: `
            radial-gradient(
              ellipse 80% 50% at 50% 0%,
              rgba(59, 154, 224, 0.12) 0%,
              rgba(10, 35, 64, 0.08) 40%,
              transparent 70%
            ),
            radial-gradient(
              ellipse 60% 40% at 100% 100%,
              rgba(31, 90, 144, 0.08) 0%,
              transparent 50%
            ),
            radial-gradient(
              ellipse 40% 30% at 0% 80%,
              rgba(47, 122, 184, 0.06) 0%,
              transparent 50%
            )
          `,
        }}
        aria-hidden="true"
      />

      {/* Vignette effect for cinematic edge darkening */}
      <div
        className="pointer-events-none fixed inset-0 z-[2]"
        style={{
          background: `
            radial-gradient(
              ellipse 70% 70% at 50% 50%,
              transparent 0%,
              rgba(0, 0, 0, 0.3) 100%
            )
          `,
        }}
        aria-hidden="true"
      />
    </>
  );
}

/**
 * FilmGrain — drifting SVG grain overlay + atmospheric gradients.
 */
export function FilmGrain() {
  return (
    <>
      <div className="film-grain" aria-hidden="true" />
      <BackgroundGradient />
    </>
  );
}
