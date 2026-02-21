# Adeildo Vieira — Personal Portfolio

Ade's Portfolio - v0.5.2 - 02/20/2026

> Hey! This is my portfolio carefully made to portray my skills and personality!
> I am giving this portfolio to myself as a birthday gift (It's February 20, btw :)

> A modern, cinematic portfolio website built to showcase my journey as a Software Engineer.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8?style=flat-square&logo=tailwindcss)

## What Makes This Special:

I wanted something that reflects **who I am** — creative, detail-oriented, and unafraid to push boundaries. Here's what sets it apart:

- **Cinematic Film Grain Overlay** — A subtle animated grain effect with gate weave, reminiscent of vintage film projectors. It adds texture and personality without being distracting.

- **Apple-Style Scroll Animations** — Elements fade up smoothly as you scroll, creating that premium feel you see on Apple's website. Powered by Framer Motion.

- **Dark Mode by Default** — Because we all know dark mode is superior. The color palette features deep blacks with opalite blue accents — ethereal, modern, and easy on the eyes.

- **Performance First** — Built with Next.js 14 App Router, optimized for speed. Fast websites make good first impressions.

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | [Next.js 14](https://nextjs.org/) (App Router) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Deployment | [Cloudflare Pages](https://pages.cloudflare.com/) |

## 📂 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── globals.css         # Global styles & color palette
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Home page assembling all sections
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── Animations.tsx  # FadeUp, FadeIn, Stagger components
│   │   ├── FilmGrain.tsx   # Cinematic grain overlay effect
│   │   └── Navigation.tsx  # Sticky navigation bar
│   └── sections/           # Page section components
│       ├── Hero.tsx        # Landing hero section
│       ├── About.tsx       # Personal introduction
│       ├── Projects.tsx    # Project showcase grid
│       ├── Skills.tsx      # Technical skills display
│       ├── Experience.tsx  # Work & education timeline
│       ├── Blog.tsx        # Blog post previews
│       ├── Contact.tsx     # Contact form & social links
│       └── Footer.tsx      # Site footer
└── hooks/                  # Custom React hooks (as needed)
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/adeildovieira/adeildo-portfolio.git
cd adeildo-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see it in action.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## 🎨 Customization

### Colors

The color palette is defined in `src/app/globals.css`. The main accent color is **opalite blue** — adjust the `--opalite-*` variables to match your preference.

### Content

All content is currently placeholder (lorem ipsum). Update the following files with your actual information:

- `src/components/sections/Hero.tsx` — Your name and tagline
- `src/components/sections/About.tsx` — Your bio and quick facts
- `src/components/sections/Projects.tsx` — Your projects
- `src/components/sections/Skills.tsx` — Your tech stack
- `src/components/sections/Experience.tsx` — Work and education history
- `src/components/sections/Blog.tsx` — Your blog posts
- `src/components/sections/Contact.tsx` — Your contact info

### Metadata

Update SEO metadata in `src/app/layout.tsx` with your actual information.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with care by [Adeildo Vieira](https://adeildovieira.com)** 💙