# METAFLORA* XProject

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat-square&logo=tailwindcss)
![motion](https://img.shields.io/badge/motion-12-FF4D4D?style=flat-square)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=flat-square&logo=vercel)

A minimal, animated showcase platform for pet projects and micro SaaS ideas — built with organic aesthetics, precise motion design, and strict architecture discipline.

**Live:** [https://metaflora-xproject.ru](https://metaflora-xproject.ru)

---

## What is this?

METAFLORA* XProject is a personal showcase platform for presenting early-stage products — pet projects, micro SaaS concepts, and experiments. Each project gets a dedicated page with a full positioning writeup: what it is, why it exists, how it works, and what is planned next.

The platform itself is designed as a reference implementation: clean App Router architecture, Tailwind CSS v4 theming, and motion.dev animations that follow intentional easing principles rather than decoration.

---

## Features

- **Animated hero section** with full-bleed video background (color / black-and-white variants)
- **Cursor droplet effect** — organic fluid animation tracking pointer movement
- **Featured vitrine** on the home page with staggered entrance animations
- **All projects grid** with category filter and AnimatePresence transitions
- **Individual project pages** with scroll-triggered content reveals
- **Page transition system** with PageTransition and PageTransitionWrapper components
- **Scroll progress bar** visible on project detail pages
- **Outline button** component with hover animation states
- **Security headers** configured globally via `next.config.ts`
- **Self-hosted fonts** via `next/font` (Google Fonts loaded at build time, no external requests at runtime)
- **Strict TypeScript** — no `any`, explicit types throughout
- **Server Components by default** — `use client` only where interaction is required

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.1.6 (App Router, Turbopack) |
| Language | TypeScript 5 (strict mode) |
| Styling | Tailwind CSS v4 (`@theme inline`) |
| Animation | motion 12 (`motion/react`) |
| React | React 19 |
| Deployment | Vercel |

---

## Project Structure

```
metaflora-xproject/
├── app/
│   ├── layout.tsx              # Root layout: Header + CursorDroplet
│   ├── page.tsx                # Home page: HeroSection + VitrineSection
│   ├── globals.css             # Tailwind v4 @theme, CSS vars, font imports
│   ├── home/                   # Home route segment
│   └── projects/
│       ├── page.tsx            # All projects (Server Component)
│       ├── ProjectsClient.tsx  # Filter + AnimatePresence grid (Client)
│       └── [slug]/
│           └── page.tsx        # Individual project detail (static params)
├── components/
│   ├── layout/
│   │   └── Header.tsx
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   └── VitrineSection.tsx
│   ├── projects/
│   │   ├── ProjectCard.tsx
│   │   └── CategoryFilter.tsx
│   ├── project-detail/
│   │   └── ProjectDetail.tsx
│   ├── motion/
│   │   ├── CursorDroplet.tsx
│   │   ├── OutlineButton.tsx
│   │   ├── PageTransition.tsx
│   │   ├── PageTransitionWrapper.tsx
│   │   ├── ScrollProgressBar.tsx
│   │   ├── index.ts            # Barrel export
│   │   └── variants/
│   │       └── index.ts        # All Framer Motion variants
│   └── ui/
│       ├── VideoBackground.tsx
│       └── index.ts
├── lib/
│   └── projects.ts             # Static project data (4 projects)
├── types/
│   └── index.ts                # Shared TypeScript interfaces
├── public/
│   ├── fonts/
│   ├── images/
│   └── projects/               # Project cover images
├── next.config.ts              # Security headers, Next.js config
├── tsconfig.json
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm (or yarn / pnpm / bun)

### Installation

```bash
git clone https://github.com/metaflora-app/xproject.git
cd xproject
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The dev server runs with Turbopack for fast refresh.

### Production Build

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

---

## Projects in the Showcase

### terraloop — pet project
> Procedural closed-world terrain generator for indie developers.

Generates seamless looping terrain maps with configurable biomes, erosion simulation, and heightmap export for Unity and Unreal Engine. Reduces early-stage worldbuilding iteration from days to minutes.

**Status:** Prototype

---

### nodeveil — micro saas
> Self-hosted encrypted VPN infrastructure with custom tunneling.

Targets the gap between commercial VPN providers and building everything from scratch. Deploy on your own server, manage client profiles from a dashboard, rotate keys, and monitor uptime — without deep network engineering knowledge.

**Status:** Private Beta

---

### archimap — pet project
> Projection mapping simulation on real-world architecture.

A workflow tool for projection mapping artists. Browse a library of architectural objects and environments, upload visual textures, and preview how a mapping concept lands on a surface — before ever visiting the physical location.

**Status:** Concept Prototype

---

### saascope ai — micro saas
> Agent that audits your pet project or micro SaaS in minutes.

Accepts a product URL or short description and generates a structured audit: positioning summary, competitor snapshot, landing copy critique, monetization notes, and a prioritized list of next steps.

**Status:** MVP Concept

---

## Design System

### Typography

| Role | Font | Source |
|---|---|---|
| Headings | Bebas Neue | Google Fonts (self-hosted via next/font) |
| Body | Inter | Google Fonts (self-hosted via next/font) |

### Colors

| Token | Value | Usage |
|---|---|---|
| `mf-black` | `#0a0a0a` | Background, primary text on light |
| `mf-white` | `#f5f5f0` | Surface, primary text on dark |

Colors are defined as CSS custom properties inside `@theme inline {}` in `globals.css` and consumed exclusively through Tailwind tokens. No hardcoded color values in components.

### Grid & Spacing

| Parameter | Value |
|---|---|
| Viewport reference | 1280px |
| Content width | 1160px |
| Horizontal padding | 60px |
| Grid columns | 12 |
| Column width | 76px |
| Gutter | 24px |

### Button Specification

| Property | Value |
|---|---|
| Height | 48px |
| Horizontal padding | 24px |
| Border | 1px solid |
| Border radius | 999px (pill) |

### Animation Principles

- Appearance: `easeOut`, duration 0.3s–0.8s
- Transitions: `easeInOut`, duration 0.3s–0.8s
- Hero animations: up to 1.5s
- List stagger: 0.05s–0.1s between items
- Scroll-triggered via `whileInView`
- All variants are centralised in `/components/motion/variants/index.ts` — no inline animation objects in JSX

---

## Security

Security headers are applied globally to all routes in `next.config.ts`:

| Header | Value |
|---|---|
| `X-Frame-Options` | `DENY` |
| `X-Content-Type-Options` | `nosniff` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` |
| `Content-Security-Policy` | `default-src 'self'`, restricted to self-origin for all resource types |

Fonts are loaded at build time using `next/font` and self-hosted — no runtime requests to external font CDNs, which satisfies the `font-src 'self'` CSP directive.

---

## License

MIT
