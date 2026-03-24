# Portfolio Redesign — Giuliano Accorsi

## Overview

Full migration of giuliano.work from static HTML (Ignite/Bootstrap) to a modern Next.js application using shadcn/ui, Tailwind CSS, TypeScript, and Framer Motion. The site is a single-page portfolio for a Mobile Developer showcasing iOS (Swift/SwiftUI) and cross-platform (Flutter/Dart) expertise.

## Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React (UI icons), Simple Icons (technology logos for Tech Stack)
- **Component Source**: 21st.dev Hero Block component as code starting point for Hero section; visual style reference for remaining sections
- **Deploy**: Vercel

## Visual Direction

- Dark theme with subtle grid background pattern
- Clean typography, generous spacing
- shadcn/ui design tokens (zinc color palette, `background`, `foreground`, `muted`, `card`, `border` etc.)
- Framer Motion animations throughout
- Responsive: mobile-first, single column → multi-column on desktop
- Style reference: the shadcn/ui Hero Block component from 21st.dev

## Architecture

- **App Router** (`app/` directory) with a single page (`page.tsx`)
- **Layout** (`layout.tsx`): metadata, fonts, global styles
- **Sections**: Each section is an independent React component in `components/sections/`
- **UI primitives**: shadcn/ui components in `components/ui/`
- **Client Components** only where needed (Framer Motion animations)
- **Static content**: hardcoded in components (no CMS, no MDX)

## Page Structure

Single page with 6 sections, scrollable:

### 1. Hero

- Full viewport height (`min-h-screen`)
- Animated grid background (`linear-gradient` pattern on pseudo-element)
- Circular avatar placeholder (gradient, user replaces with photo later)
- Small label: "Giuliano Accorsi" (uppercase, tracked, muted)
- Main heading: **"Mobile Developer"** (`text-5xl md:text-7xl`, bold, tight tracking)
- Subtitle: "Crafting native iOS and cross-platform mobile experiences with clean architecture and attention to detail."
- 2 buttons (shadcn `Button`):
  - "Get in Touch" (primary) → scrolls to Contact section
  - "View Projects" (outline) → scrolls to Projects section
- 3 social icon buttons (circular, `secondary` bg): GitHub, LinkedIn, Mail (giulianoaccorsi@gmail.com)
- Scroll indicator at bottom: animated `ArrowDown` icon (infinite bounce)
- **Animations**:
  - Staggered fade-in + slide-up for each element (delay 0.1s between)
  - Grid background subtle opacity pulse
  - Social icons: `whileHover` scale 1.1 + y: -2
  - Scroll indicator: `y: [0, 10, 0]` infinite

### 2. About

- Section title: **"About Me"** with subtitle "A little about who I am"
- 2-column layout on desktop (1 column on mobile):
  - Left: bio text about iOS experience and Flutter skills
  - Right: image placeholder (rounded, shadow) — user adds photo later
- Card container with `border` and `card` background
- **Animations**:
  - `whileInView` fade-in + slide-up for the entire section
  - Image hover: subtle scale

### 3. Tech Stack

- Section title: **"Tech Stack"** with subtitle "Technologies I work with daily"
- 3 categories with label headers:
  - **Mobile**: Swift, SwiftUI, Flutter, Dart
  - **Tools & Infra**: Xcode, Git, Firebase, CI/CD
  - **Architecture**: MVVM, Clean Architecture, Unit Testing
- Each tech as a card/badge with Simple Icons logo + name (fallback to text-only badge if no icon available)
- Grid layout: 4 columns desktop, 2 columns mobile
- **Animations**:
  - Staggered card entrance on `whileInView`
  - Hover: border glow + subtle scale

### 4. Projects

- Section title: **"Projects"** with subtitle "Some things I've built"
- 3 project cards, stacked vertically:
  - **PaySplit** — Bill splitting iOS app. Tech: SwiftUI, MVVM, Unit Testing. Links: [App Store](https://apps.apple.com/us/app/spliteasy/id6751210761), GitHub
  - **Budly** — Personal finance app. Tech: Swift, SwiftUI. Links: TBD (placeholder card with available info, user fills details later)
  - **PokeStudy** — Pokémon info app. Tech: SwiftUI, MVVM, Combine, Unit Testing. Links: GitHub
- Projects defined as a data array and rendered via `.map()` to avoid JSX duplication
- Each card contains:
  - Demo area (16:9 aspect ratio, `muted` background) — placeholder for screenshot/video/GIF, user adds media later
  - Project name (bold)
  - Short description (1-2 lines)
  - Tech badges (rounded pills, `muted` background)
  - Link buttons (App Store / GitHub as applicable)
- Card container: `card` bg with `border`, inner padding
- **Animations**:
  - Alternating slide-in from left/right on `whileInView`
  - Demo area hover: subtle zoom
  - Tech badges: cascade entrance after card appears

### 5. Contact

- Section title: **"Get in Touch"** with subtitle "Have a project in mind? Let's talk."
- Centered layout
- Primary button: "Send me an Email" → `mailto:giulianoaccorsi@gmail.com`
- 3 social icon buttons (same as Hero): GitHub, LinkedIn, Mail
- Card container with `border` and `card` background
- No form (keeps it simple, no backend needed)
- **Animations**:
  - Scale-in (0.95 → 1) + fade on `whileInView`
  - Email button: periodic subtle glow pulse

### 6. Footer

- Subtle top border or slightly different background (`muted/5`)
- Single row on desktop (stacked centered on mobile):
  - Left: "© 2026 Giuliano Accorsi"
  - Right: small social icons (GitHub, LinkedIn, Mail)
- Compact, minimal

## Global Behaviors

- **Smooth scroll**: `scroll-behavior: smooth` + programmatic scroll on CTA clicks
- **Responsive**: mobile-first with Tailwind breakpoints (`md:`, `lg:`)
- **Dark theme only**: no light/dark toggle (dark is the design direction)
- **SEO**: proper meta tags, Open Graph, canonical URL (giuliano.work)
- **Fonts**: Inter loaded via `next/font/google`, with system font fallback
- **Accessibility**: semantic HTML, alt text on images, aria-labels on icon-only buttons
- **Favicons**: reuse existing favicons from current site

## Project Structure

```
app/
├── layout.tsx          # Root layout, metadata, fonts
├── page.tsx            # Single page composing all sections
└── globals.css         # Tailwind directives + custom CSS vars

components/
├── ui/                 # shadcn/ui primitives (Button, Card, Badge, etc.)
└── sections/
    ├── hero.tsx
    ├── about.tsx
    ├── tech-stack.tsx
    ├── projects.tsx
    ├── contact.tsx
    └── footer.tsx

lib/
└── utils.ts            # cn() helper from shadcn

public/
├── media/              # Project screenshots, avatar (migrated from current site)
└── favicons/           # Existing favicons
```

## Content to Migrate

From the current site:
- Social links:
  - GitHub: https://github.com/giulianoaccorsi
  - LinkedIn: https://linkedin.com/in/giulianoaccorsi/
  - Email: giulianoaccorsi@gmail.com
- Project links:
  - PaySplit App Store: https://apps.apple.com/us/app/spliteasy/id6751210761
  - PokeStudy GitHub: (extract from current site)
- Favicons and web manifest
- SEO metadata: author "Giuliano Accorsi", description "Mobile Developer crafting native iOS and cross-platform experiences", canonical URL https://giuliano.work/. OG image deferred until user provides one.

User will provide later:
- Profile photo for About section
- Demo media (screenshots/videos/GIFs) for each project
- Budly details (description, tech stack, links)
- Updated bio text

## Out of Scope

- Blog / MDX content (existing blog media in `media/blog/` will not be migrated; those URLs will cease to exist)
- Light mode / theme toggle
- Contact form with backend
- CMS integration
- Analytics (can be added later)
- Custom domain setup (already configured)
- OG image (deferred until user provides one)
