# Portfolio rebuild — build brief

> Paste this whole file into Claude Code as the project brief (or drop it in the repo as `SPEC.md`).
> Anything wrapped in «» is a placeholder for **me (Ade)** to confirm or swap. Build around them; don't invent facts to fill them.

---

## What we're building

A personal portfolio for **Adeildo "Ade" Vieira** — a 2026 Duke University CS new grad looking for US software-engineering roles. One site, **four sections**, and the hard rule: **no vertical scrolling**. Every section fills exactly one viewport and arranges its content in bordered panels ("tables").

The aesthetic is a **minimal, retro-terminal** look: pure-black canvas, monospace type everywhere, lots of negative space, a couple of ASCII-art flourishes, a live weather readout in the footer, and a horizontal **drag-to-pull** projects carousel. Reference *vibe* (not content): pandadev.net — match the feel; every word, project, and asset below is mine.

This replaces an earlier split-screen concept. Start fresh; don't carry that code over.

---

## Stack (use exactly this unless I say otherwise)

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **embla-carousel-react** for the drag-to-pull carousels (robust drag + momentum + snap) — use **motion** (Framer Motion) only for page transitions / entrance reveals
- **lucide-react** for the footer icons
- **Open-Meteo** for live weather (free, no API key)
- Deploy target: **Vercel**
- **Monospace display font: «Departure Mono»** (retro/pixel, captures the reference) as first choice; fallbacks **JetBrains Mono** / **Geist Mono**. Load via `next/font` (local for Departure Mono, `next/font/google` for the others). Mono is the *only* family — no Inter/Roboto/Arial/system fonts anywhere.

---

## Global shell (every route shares this)

- Pure black background `#000`. Body text off-white `#e6e6e6`; secondary/muted `#7a7a7a`. Keep it **monochrome** — no accent color unless a single link state needs it. Define these as CSS variables.
- `html, body { height: 100%; overflow: hidden; }`. Each page is a flex column at `h-[100dvh]`. **Never** produce a vertical scrollbar on desktop.
- **Fixed top nav**, centered: `index ✦ experience ✦ projects ✦ about me`. Active route slightly brighter than the rest; the `✦`/`•` separators are decorative and muted.
- **Fixed footer**: left = a small cluster of icon links (GitHub, LinkedIn, email «+ X?»); right = live weather rendered like `13.9°C Rain`.
- Atmosphere over flatness: add a **faint film-grain / noise overlay** and a **custom crosshair cursor** (like the reference's center `+`). Subtle — texture, not noise.
- Route transitions: quick crossfade, 120–180ms. One staggered entrance reveal per section beats scattered micro-animations. Respect `prefers-reduced-motion`.

### Mobile / small-screen caveat (read this)
True "no scroll" only holds on desktop. On phones: keep each section to `100dvh`, turn panel rows into the same horizontal **swipe**, and shrink type. If a section genuinely can't fit, let *that one* scroll internally rather than break the layout or overlap the nav/footer. Don't fight physics.

---

## The four sections

### 1) `index` — `/`
Just the hero. Giant centered wordmark in mono: **«`ade`»** (or `adeildo` — pick one; lowercase reads best at scale). Directly under it, a code-comment tagline: **«`/* new grad · swe · alagoas → world */`»**. Nothing else on the screen. This is the calm landing page.

### 2) `experience` — `/experience`
A row of bordered panels ("tables"), drag-to-pull if they overflow the viewport. Each panel: **role + org** (bold), **dates** «fill», a 1–2 line impact statement, stack tags, optional link. Seed with my real experience:

- **BTG Pactual — Software Engineering Intern** «dates». Built identity & authentication systems in production — OIDC, OAuth 2.0, PKCE.
- **Duke Code+ — Software Engineer** «dates». Containerized, ML-based occupancy-analytics platform.
- «add/trim as needed — keep it to real SWE roles»

### 3) `projects` — `/projects`  *(the signature screen)*
Horizontal **drag-to-pull** carousel of project cards (embla). Each card mirrors the reference's three-zone layout:
- **left:** project **title** + short tagline
- **middle:** a logo / visual tile
- **right:** a longer paragraph + a `GitHub ↗` link

Include a muted `drag to pull` hint and a `view all projects` link (→ my GitHub, or a `/projects/all` grid page). Bleed faint **ASCII-art motifs** off the left and right edges so it reads like there's more to pull into view.

Seed projects (swap for my real ones — I'll send final copy + logos):
- «Project 1 — title, one-line tagline, paragraph, repo URL»
- «Project 2 — …»
- «Project 3 — …»

### 4) `about me` — `/about`
One or two terminal-styled panels. Bio facts (all true, use as-is):
- Duke University, B.S. Computer Science, class of **2026**.
- From **Alagoas, Brazil** — roots in the Nordeste Sertão.
- **Bilingual** Portuguese / English.
- Interests: **MPB** and regional Nordeste music, literature, astronomy, film.
- Cares about **digital literacy and the digital divide** in Brazil's interior (Espaço 4.0).

Optional: a small photo or an **ASCII portrait** to hold the vibe — your call.

---

## Interactions to nail

- **Drag-to-pull carousels** (projects, and experience if it overflows): mouse drag + touch swipe, momentum, optional snap. Add keyboard arrow support and proper `aria` roles/labels — drag UIs are an a11y trap, don't skip this.
- **Live weather:** fetch once on load from Open-Meteo for «my location — Pereiro, CE (≈ -6.04, -38.46)», map the WMO weather code to a short label, render in the footer. Cache for the session; if it errors, **hide the widget silently** — never show a broken/loading stub.
- One subtle entrance reveal per section; honor `prefers-reduced-motion`.

### Weather util — `lib/weather.ts`
```ts
const CODES: Record<number, string> = {
  0: "Clear", 1: "Mainly Clear", 2: "Partly Cloudy", 3: "Overcast",
  45: "Fog", 48: "Fog", 51: "Drizzle", 53: "Drizzle", 55: "Drizzle",
  61: "Rain", 63: "Rain", 65: "Heavy Rain", 71: "Snow", 73: "Snow",
  75: "Snow", 80: "Showers", 81: "Showers", 82: "Showers",
  95: "Storm", 96: "Storm", 99: "Storm",
};

export async function getWeather(lat: number, lon: number) {
  const url =
    `https://api.open-meteo.com/v1/forecast` +
    `?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code`;
  const res = await fetch(url, { next: { revalidate: 1800 } });
  if (!res.ok) return null;
  const d = await res.json();
  return {
    temp: Math.round(d.current.temperature_2m),
    label: CODES[d.current.weather_code] ?? "—",
  };
}
```

### Layout shape (per page)
```tsx
// app/layout.tsx renders <Nav/> + <Footer/> around {children}.
// Each page's content slots into the middle band:
<main className="h-[100dvh] flex flex-col overflow-hidden bg-black text-neutral-200 font-mono">
  <Nav />                                            {/* fixed, centered, top */}
  <section className="flex-1 grid place-items-center px-6">
    {/* hero, or a panel row / carousel */}
  </section>
  <Footer />                                         {/* icons left · weather right */}
</main>
```

---

## Suggested file structure
```
app/
  layout.tsx            // Nav + Footer + grain + cursor
  page.tsx              // index (hero)
  experience/page.tsx
  projects/page.tsx
  about/page.tsx
components/
  Nav.tsx  Footer.tsx  Weather.tsx
  Panel.tsx  ProjectCarousel.tsx  AsciiArt.tsx  Crosshair.tsx
lib/weather.ts
```

---

## What I (Ade) still need to send you
- Final wordmark (`ade` vs `adeildo`) + the tagline line
- Social URLs: GitHub `github.com/adeildovieira`, LinkedIn «», email «», others «»
- Real project list — name, one-line tagline, paragraph, logo/screenshot, repo link (×3+)
- Dates for each experience entry
- A photo, if I want one
- Domain «adeildo.dev? / .net?»

---

## Done when
- **Zero vertical scroll** on desktop across all four routes.
- Nav works, active state is correct, routes crossfade.
- Projects carousel drags smoothly with momentum on trackpad **and** touch; keyboard-navigable.
- Live weather shows in the footer (or hides cleanly on failure).
- Monospace everywhere, pure-black canvas, panels render as crisp bordered "tables," grain + crosshair cursor present.
- No console errors, builds clean on Vercel, Lighthouse accessibility ≥ 95.
- Reads as intentionally *designed* — not generic AI default styling.
