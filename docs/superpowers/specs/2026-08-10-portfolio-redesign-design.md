# Portfolio redesign — design spec

**Date:** 2026-08-10
**Status:** approved, ready for implementation
**Supersedes:** the retro-terminal concept (black / monospace / no-scroll)

---

## 1. Purpose

The site's single job is to get Adeildo Vieira hired as a software engineer.

The current site does not do that job. Measured against the live deployment:

- The landing page carries **8 words of copy and zero proof**. A recruiter
  learns a name and "duke alum · software engineer", nothing about what he
  builds.
- The only call to action is `[ view resume ]` at 12px in the lowest-contrast
  colour on the page — the smallest, dimmest element is the only next step.
- **The email address never appears as visible text** on any page. Contact is
  a 16×16 unlabelled icon.
- The substance — what he built and what it did — is rendered in the site's
  lowest-priority grey, while job titles a recruiter already understands get
  the highest contrast. Hierarchy is inverted.

The redesign fixes the job, not the paint.

## 2. Direction

Five decisions, taken with the owner:

| Decision | Choice |
| --- | --- |
| Ground | Warm off-white paper, pastels as washes; dark mode as a real second theme |
| Scope | Rebuild the design layer on the existing Next 16 static export + Cloudflare |
| Structure | One scrolling page with anchor nav; real routes for depth |
| Type | Instrument Serif (display) + Inter (body), self-hosted |
| Carried over | Film grain only |

Explicitly dropped: the `a[de]ildo [v]ieira` accent easter egg, monospace as an
identity element, and the custom crosshair cursor.

**No monospace anywhere.** Dates and metrics use Inter's `tabular-nums`, which
gives column alignment without the terminal signal.

## 3. Colour

Every value measured against the paper ground, not estimated.

```
--paper          #FBFAF7   warm base
--paper-raised   #FFFFFF   cards
--paper-sunken   #F4F2ED   section bands
--rule           #E5E1D8   hairlines

--ink            #1A1917   headings      16.8:1   AAA
--ink-2          #57544E   body           7.2:1   AAA
--ink-3          #736F68   metadata       4.8:1   AA
--accent         #3D6B8A   links, focus   5.5:1   AA
```

Pastels work as **grounds, not objects**. Sections alternate through washes —
sage `#F4F7F2`, clay `#FBF6F1`, blue `#F2F6FA`, lilac `#F7F4FA` — so scrolling
moves through a soft spectrum with no loud element anywhere. Ink stays above
15:1 on every wash.

Tags use a tint background with a darker sibling for text (`#E8EFE6` /
`#3F5A3C`). This is Apple §12's vibrancy rule: colour goes on a solid layer,
the foreground stays legible.

**No opacity modifiers on text, ever.** Tailwind v4 compiles `text-muted/70` to
`oklab(… / 0.7)`, which composites to 2.86:1 on the current site. Contrast is
defined once per token and cannot erode by accident.

## 4. Typography

The tracking curve is the point: strongly negative at display, crossing zero at
body, slightly positive at label. The current site runs it backwards — `+0.04em`
on an 84px wordmark, and a 14px label tracked wider than its 10px sibling.

| Token | Size | Leading | Tracking | Face |
| --- | --- | --- | --- | --- |
| display | `clamp(3rem, 2rem + 5vw, 5.5rem)` | 0.92 | −0.035em | Instrument Serif |
| h1 | `clamp(2.25rem, 1.5rem + 3vw, 3.5rem)` | 1.02 | −0.025em | Instrument Serif |
| h2 | `clamp(1.75rem, 1.25rem + 2vw, 2.25rem)` | 1.12 | −0.02em | Instrument Serif |
| h3 | 1.25rem | 1.30 | −0.01em | Inter 600 |
| lead | 1.375rem | 1.50 | −0.005em | Inter 400 |
| body | 1.0625rem | 1.65 | 0 | Inter 400 |
| small | 0.9375rem | 1.50 | +0.005em | Inter 400 |
| label | 0.75rem | 1.20 | +0.09em caps | Inter 500 |

Eight steps on a ~1.25 ratio, all in `rem` so OS text-size settings work. This
replaces twelve ad-hoc sizes of which seven sat within 8px of each other — below
the just-noticeable difference, so they bought no hierarchy at all.

Measure capped at `68ch` body / `58ch` lead, down from 112 characters today.

Fonts are self-hosted woff2 via `next/font/google` (which downloads and serves
them from our own origin at build time — no CDN request, CSP-clean).

## 5. Structure

```
/                          designed vertical sequence
├─ hero        name · one line on what he builds · 2 CTAs
├─ #work       featured projects, each linking to a case study
├─ #experience compact timeline, impact-first
├─ #about      short, human
└─ #contact    email as VISIBLE TEXT + socials + resume

/work/[slug]   case studies
/writing       + /writing/[slug]
/404           in-voice, with the full nav
```

Click cost against the "few clicks" brief:

| Destination | Today | Target |
| --- | --- | --- |
| Resume | 1 | **0** — visible CTA, in view on load |
| A project's code | 2 | **1** |
| Email | ∞ — never appears as text | **0** — readable |
| A blog post | unreachable from the nav | **1** |

**Old URLs must keep working.** `/experience`, `/projects` and `/about` are in
the sitemap and indexed. They become redirect stubs to the corresponding home
anchor, so no inbound link 404s.

## 6. Materials

Nav is a sticky translucent bar: `backdrop-filter: blur(20px) saturate(180%)`
over `rgba(251,250,247,0.72)`, with scrollspy for the active section and 44px
targets.

Content passes **under** it behind a `mask-image: linear-gradient(to bottom,
transparent, black 24px)` — Apple §12's scroll edge effect. The absence of
exactly this is what makes the current site's footer overprint body text.

Cards sit on `--paper-raised` with a 1px `--rule` border and a two-stop shadow:
`0 1px 2px rgba(26,25,23,.04), 0 8px 24px rgba(26,25,23,.06)`.

Grain is the inline-SVG fractal noise at ~2.5% opacity, `mix-blend-mode:
multiply` so it reads as paper tooth on a light ground.

## 7. Motion

Every value defensible against Apple §4's table.

- **Default UI spring** — `bounce: 0, duration: 0.4` (critically damped)
- **Momentum, only after a real gesture** — `bounce: 0.2, duration: 0.4`
- **Press feedback** — `scale(0.98)` on `pointerdown`, 100ms. On pointer-*down*,
  not click (§1)
- **Section reveals** — opacity + 12px, IntersectionObserver at 15%, fires once
- **Card → case study** — FLIP from the card's own rect, `transform-origin`
  anchored to the trigger (§7)
- **Anchor scroll** — native `scroll-behavior: smooth`, which yields to user
  input immediately (§3). No custom scroll driver.
- **No scroll hijacking. No input lockout.** The current `LOCK_MS = 900` freezes
  input for nearly a second mid-read — the most direct §3 violation in the
  codebase.

Reduced motion: every transform becomes a ≤200ms opacity cross-fade, grain
freezes. `prefers-reduced-transparency` makes the nav solid.
`prefers-contrast: more` adds borders.

## 8. Content model

Data moves out of page components into `src/content/`:

- `projects.ts` — featured flag, case-study body, links
- `roles.ts` — impact-first bullets
- `posts.ts` — shared by the writing index, the post pages, the sitemap's
  `lastmod`, and the `BlogPosting` schema

Today the same three concerns use three different patterns and the sitemap
stamps every URL with build time, so the freshness signal is noise.

Copy rules:

- Impact bullets lead with **what was built**, then the measured result. Every
  entry currently opens with the identical three words "Direct impact on".
- No claim the code cannot support. The consent notice claimed analytics that
  does not exist — already fixed in `058180a`, and the rule stands.
- The most recent role needs a description or it comes off the page.

## 9. Non-goals

- No CMS. Content is typed TypeScript modules.
- No animation library beyond the framer-motion already present.
- No redesign of the Cloudflare deployment, `_headers`, or the branch strategy.
- No dark-mode toggle in v1 — `prefers-color-scheme` only.

## 10. Verification

The rebuild is done when, measured in-browser and not by eye:

- Zero WCAG AA contrast failures across every route, canvas-resolved
- Zero interactive targets under 44×44
- Distinct `<title>`, description, canonical and `og:url` per route
- `tsc --noEmit`, `next build` and `eslint` clean
- Reduced-motion path verified with the media query forced on
- Old URLs `/experience`, `/projects`, `/about` still resolve
