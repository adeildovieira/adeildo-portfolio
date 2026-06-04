# adeildo vieira — portfolio

v0.6.4

My personal site. It's a small, deliberate thing: four screens, no scrolling, black on black, the kind of monospace-leaning layout that feels like a terminal you'd actually want to sit in front of. It lives at [adeildovieira.com](https://adeildovieira.com).

I rebuilt it from scratch in 2026. The version before this was a long, scrolling, glassmorphism affair; handsome enough, but it never really sounded like me. This one is quieter. Every route fills exactly one viewport, the content sits inside bordered "tables," and a live weather readout ticks away in the corner of the footer.

## The idea

No vertical scroll on desktop. Each page — `index`, `experience`, `projects`, `about` — is its own screen, pinned between a fixed nav up top and a fixed footer below. Projects is the centerpiece: a drag-to-pull carousel you can throw with the trackpad or a thumb, and step through with the arrow keys if you'd rather not.

A handful of details I fussed over:

- **Drag-to-pull projects.** Built on embla, so it gets momentum, touch, keyboard control, and the aria roles that drag interfaces usually forget.
- **Live weather.** Fetched once a session from Open-Meteo and printed plainly, like `21°C Clear`. If the request fails, the widget simply isn't there — no spinner, no broken stub.
- **Texture.** A film-grain overlay and a custom crosshair cursor keep the black from going flat.
- **Restraint.** One entrance reveal per screen, a ~160ms crossfade between routes, and `prefers-reduced-motion` honored everywhere.

The blog breaks the rule on purpose. Long writing wants room, so `/blog` scrolls like any normal page.

## Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router) · React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Motion | Framer Motion — reveals and route transitions |
| Carousel | embla-carousel-react |
| Icons | lucide-react |
| Weather | Open-Meteo (no API key) |
| Hosting | Cloudflare Pages |

The whole thing compiles to a static export (`output: "export"`). That keeps it cheap to run, quick to load, and portable to just about any host.

## How the code is laid out

```
src/
├── app/
│   ├── (site)/              # the four no-scroll routes
│   │   ├── layout.tsx       # terminal shell: nav + footer + viewport band
│   │   ├── template.tsx     # the route crossfade
│   │   ├── page.tsx         # index — the hero
│   │   ├── experience/
│   │   ├── projects/
│   │   └── about/
│   ├── blog/                # long-form posts (this part scrolls)
│   ├── layout.tsx           # root: fonts, grain, cursor, metadata, JSON-LD
│   ├── globals.css          # the design system, top to bottom
│   ├── opengraph-image.tsx  # social card, generated at build time
│   ├── sitemap.ts · robots.ts
│   └── icon.svg · apple-icon.tsx
├── components/
│   ├── terminal/            # Nav, Footer, Weather, Crosshair, Grain,
│   │                        # Panel, Reveal, DragRow, AsciiArt
│   └── ui/Animations.tsx    # a leftover the blog still leans on
└── lib/weather.ts           # Open-Meteo client + WMO code map
```

## Running it

```bash
git clone https://github.com/adeildovieira/adeildo-portfolio.git
cd adeildo-portfolio
npm install
npm run dev          # http://localhost:3000
```

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build → static `out/` |
| `npm run lint` | Run ESLint |

## Making it your own

Almost everything you'd want to change sits in two spots. The look — colors, grain, the type, the no-scroll rules — all lives in `src/app/globals.css`. The words — my roles, projects, the bio — are plain arrays at the top of each file under `src/app/(site)/`. Edit an array, and the page rebuilds itself around it.

The one bit of color is a single icy blue: `--opalite`, a milky `#A7CEDC`. It tints three letters of my name so they quietly spell *dev*. Move the variable, move the accent.

## License

MIT. Take whatever's useful.

---

Made by [Adeildo Vieira](https://adeildovieira.com) — Durham, NC.