# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrate giuliano.work from static HTML/Bootstrap to a Next.js + shadcn/ui + Tailwind + Framer Motion single-page portfolio.

**Architecture:** Next.js App Router with a single page (`page.tsx`) composing 6 section components. shadcn/ui provides UI primitives, Framer Motion handles animations. All content is hardcoded (no CMS). Dark theme only.

**Tech Stack:** Next.js, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, Lucide React, Simple Icons

**Spec:** `docs/superpowers/specs/2026-03-20-portfolio-redesign-design.md`

---

## File Structure

```
app/
├── layout.tsx              # Root layout: Inter font, metadata, dark theme
├── page.tsx                # Composes all 6 sections
├── globals.css             # Tailwind directives, shadcn CSS vars, grid bg animation
├── favicon.ico             # Favicon

components/
├── ui/
│   ├── button.tsx          # shadcn Button
│   └── badge.tsx           # shadcn Badge
└── sections/
    ├── hero.tsx            # Hero section with staggered animations
    ├── about.tsx           # About Me section
    ├── tech-stack.tsx      # Tech Stack grid
    ├── projects.tsx        # Projects cards with demo areas
    ├── contact.tsx         # Contact CTA
    └── footer.tsx          # Footer

lib/
├── utils.ts                # cn() helper
└── data.ts                 # Projects array, tech stack data, social links

public/
├── media/
│   └── favicons/           # Migrated favicons from current site
└── (project media added by user later)
```

---

## Task 1: Scaffold Next.js Project with shadcn/ui

**Files:**
- Create: `app/layout.tsx`, `app/page.tsx`, `app/globals.css`, `lib/utils.ts`, `tailwind.config.ts`, `tsconfig.json`, `package.json`, `components.json`, `next.config.ts`, `postcss.config.mjs`
- Create: `components/ui/button.tsx`

- [ ] **Step 1: Create Next.js project**

Run from the repo root. We'll create the Next.js project in a subfolder first, then move files up.

```bash
cd /Users/giulianoaccorsi/Desktop/GiulianoDev
npx create-next-app@latest next-portfolio --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*" --turbopack --yes
```

Expected: New `next-portfolio/` directory with Next.js scaffolding.

- [ ] **Step 2: Move Next.js files to repo root**

```bash
cd /Users/giulianoaccorsi/Desktop/GiulianoDev
# Move all Next.js project files to root (overwrite existing if needed)
cp -r next-portfolio/. .
mv .gitignore .nextgitignore 2>/dev/null || true
rm -rf next-portfolio
```

Manually merge `.nextgitignore` entries into the existing `.gitignore`. Add:
```
# Next.js
/.next/
/out/
/build/
node_modules/
.env*.local
.vercel
```

- [ ] **Step 3: Verify the scaffold runs**

```bash
cd /Users/giulianoaccorsi/Desktop/GiulianoDev
npm run dev
```

Expected: Dev server starts at `http://localhost:3000` with default Next.js page.

- [ ] **Step 4: Initialize shadcn/ui**

```bash
cd /Users/giulianoaccorsi/Desktop/GiulianoDev
npx shadcn@latest init -d
```

This creates `components.json`, updates `globals.css` with CSS variables, creates `lib/utils.ts` with `cn()`.

- [ ] **Step 5: Set dark theme as default**

Edit `app/layout.tsx`: add `className="dark"` to the `<html>` tag. Configure Inter font via `next/font/google`.

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Giuliano Accorsi — Mobile Developer",
  description: "Mobile Developer crafting native iOS and cross-platform experiences",
  metadataBase: new URL("https://giuliano.work"),
  authors: [{ name: "Giuliano Accorsi" }],
  openGraph: {
    title: "Giuliano Accorsi — Mobile Developer",
    description: "Mobile Developer crafting native iOS and cross-platform experiences",
    url: "https://giuliano.work",
    siteName: "Giuliano Accorsi",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
```

- [ ] **Step 6: Update globals.css for dark-only theme**

Replace `globals.css` content with Tailwind directives and shadcn dark theme CSS variables. Add the grid background animation and smooth scroll:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 3.9%;
    --foreground: 0 0% 98%;
    --card: 0 0% 3.9%;
    --card-foreground: 0 0% 98%;
    --popover: 0 0% 3.9%;
    --popover-foreground: 0 0% 98%;
    --primary: 0 0% 98%;
    --primary-foreground: 0 0% 9%;
    --secondary: 0 0% 14.9%;
    --secondary-foreground: 0 0% 98%;
    --muted: 0 0% 14.9%;
    --muted-foreground: 0 0% 63.9%;
    --accent: 0 0% 14.9%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 14.9%;
    --input: 0 0% 14.9%;
    --ring: 0 0% 83.1%;
    --radius: 0.5rem;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
  html {
    scroll-behavior: smooth;
  }
}

/* Grid background pulse animation */
@keyframes grid-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.animate-grid-pulse {
  animation: grid-pulse 4s ease-in-out infinite;
}

/* Email button glow pulse */
@keyframes glow-pulse {
  0%, 100% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.1); }
  50% { box-shadow: 0 0 30px rgba(255, 255, 255, 0.25); }
}

.animate-glow-pulse {
  animation: glow-pulse 2s ease-in-out infinite;
}
```

- [ ] **Step 7: Add shadcn Button component**

```bash
npx shadcn@latest add button
```

- [ ] **Step 8: Create minimal page.tsx**

```tsx
export default function Home() {
  return (
    <main>
      <h1 className="text-4xl font-bold text-center py-20">
        Coming soon...
      </h1>
    </main>
  );
}
```

- [ ] **Step 9: Verify dark theme renders correctly**

```bash
npm run dev
```

Open `http://localhost:3000`. Expected: dark background, white text "Coming soon...", Inter font.

- [ ] **Step 10: Commit**

```bash
git add -A
git commit -m "feat: scaffold Next.js project with shadcn/ui and dark theme"
```

---

## Task 2: Create Data Layer and Shared Constants

**Files:**
- Create: `lib/data.ts`

- [ ] **Step 1: Create data file with all content**

```tsx
// lib/data.ts

export const SOCIAL_LINKS = {
  github: "https://github.com/giulianoaccorsi",
  linkedin: "https://linkedin.com/in/giulianoaccorsi/",
  email: "giulianoaccorsi@gmail.com",
} as const;

export type Project = {
  name: string;
  description: string;
  tech: string[];
  appStoreUrl?: string;
  githubUrl?: string;
  image?: string; // path to screenshot/video, user adds later
};

export const PROJECTS: Project[] = [
  {
    name: "PaySplit",
    description: "Bill splitting app for iOS — easily divide expenses with friends.",
    tech: ["SwiftUI", "MVVM", "Unit Testing"],
    appStoreUrl: "https://apps.apple.com/us/app/spliteasy/id6751210761",
    githubUrl: "https://github.com/giulianoaccorsi",
  },
  {
    name: "Budly",
    description: "Personal finance app to track spending and budgets.",
    tech: ["Swift", "SwiftUI"],
    // Links TBD — user fills in later
  },
  {
    name: "PokeStudy",
    description: "Pokémon info app — browse and study Pokémon data.",
    tech: ["SwiftUI", "MVVM", "Combine", "Unit Testing"],
    githubUrl: "https://github.com/giulianoaccorsi/PokeStudyApp",
  },
];

export type TechCategory = {
  label: string;
  items: string[];
};

export const TECH_STACK: TechCategory[] = [
  {
    label: "Mobile",
    items: ["Swift", "SwiftUI", "Flutter", "Dart"],
  },
  {
    label: "Tools & Infra",
    items: ["Xcode", "Git", "Firebase", "CI/CD"],
  },
  {
    label: "Architecture",
    items: ["MVVM", "Clean Architecture", "Unit Testing"],
  },
];
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add lib/data.ts
git commit -m "feat: add data layer with projects, tech stack, and social links"
```

---

## Task 3: Install Dependencies (Framer Motion, Simple Icons, Badge)

**Files:**
- Modify: `package.json`
- Create: `components/ui/badge.tsx`

- [ ] **Step 1: Install framer-motion and simple-icons**

```bash
npm install framer-motion simple-icons
```

- [ ] **Step 2: Add shadcn Badge component**

```bash
npx shadcn@latest add badge
```

- [ ] **Step 3: Verify install**

```bash
npm run dev
```

Expected: Dev server starts without errors.

- [ ] **Step 4: Commit**

```bash
git add package.json package-lock.json components/ui/badge.tsx
git commit -m "feat: add framer-motion, simple-icons, and shadcn badge"
```

---

## Task 4: Hero Section

**Files:**
- Create: `components/sections/hero.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create Hero component**

Create `components/sections/hero.tsx` as a Client Component (`"use client"`).

Implement per spec:
- Full viewport height, grid background pattern via CSS pseudo-element
- Avatar placeholder (gradient circle, 96px)
- "Giuliano Accorsi" label (uppercase, tracking-widest, text-muted-foreground)
- "Mobile Developer" heading (text-5xl md:text-7xl, font-bold, tracking-tighter)
- Subtitle paragraph
- Two shadcn Buttons: "Get in Touch" (default, with Mail icon) and "View Projects" (outline, with ArrowDown icon)
- Both buttons use `onClick` with `document.getElementById('section-id')?.scrollIntoView({ behavior: 'smooth' })`
- Three social icon links (GitHub, LinkedIn, Mail) as circular buttons with `whileHover={{ scale: 1.1, y: -2 }}` and `whileTap={{ scale: 0.95 }}`
- ArrowDown scroll indicator at bottom with infinite bounce animation
- All elements wrapped in staggered `motion.div` with fade-in + slide-up (initial: opacity 0, y: 20; animate: opacity 1, y: 0; stagger delay 0.1s)

```tsx
"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/data";

export function Hero() {
  const socials = [
    { icon: Github, href: SOCIAL_LINKS.github, label: "GitHub" },
    { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${SOCIAL_LINKS.email}`, label: "Email" },
  ];

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background"
    >
      {/* Grid background with pulse */}
      <div className="animate-grid-pulse absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Avatar placeholder */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-6 inline-block"
          >
            <div className="mx-auto h-24 w-24 rounded-full border-4 border-background bg-gradient-to-br from-muted-foreground to-secondary shadow-lg" />
          </motion.div>

          {/* Name label */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground"
          >
            Giuliano Accorsi
          </motion.p>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-6 text-5xl font-bold tracking-tighter text-foreground md:text-7xl"
          >
            Mobile Developer
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mx-auto mb-8 max-w-3xl text-xl text-muted-foreground md:text-2xl"
          >
            Crafting native iOS and cross-platform mobile experiences with clean
            architecture and attention to detail.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-12 flex flex-wrap justify-center gap-4"
          >
            <Button
              size="lg"
              className="gap-2"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Mail className="h-4 w-4" />
              Get in Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Projects
              <ArrowDown className="h-4 w-4" />
            </Button>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex justify-center gap-4"
          >
            {socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.icon !== Mail ? "_blank" : undefined}
                rel={social.icon !== Mail ? "noopener noreferrer" : undefined}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.6 },
          y: { delay: 1.5, duration: 1.5, repeat: Infinity },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 2: Wire Hero into page.tsx**

```tsx
import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}
```

- [ ] **Step 3: Verify Hero renders**

```bash
npm run dev
```

Open `http://localhost:3000`. Expected: Full-height dark hero section with grid, avatar, title, buttons, social icons, and scroll indicator. Animations play on load.

- [ ] **Step 4: Commit**

```bash
git add components/sections/hero.tsx app/page.tsx
git commit -m "feat: add Hero section with staggered animations"
```

---

## Task 5: About Section

**Files:**
- Create: `components/sections/about.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create About component**

Create `components/sections/about.tsx` as a Client Component.

Implement per spec:
- Section id="about"
- Title "About Me" + subtitle
- 2-column layout on desktop (`md:flex-row`), 1 column on mobile
- Left: bio text about iOS experience and Flutter
- Right: image placeholder (rounded-lg, bg-muted, aspect-square, with "Photo" text center)
- Wrapped in a card-style container (bg-card, border, rounded-xl, p-8)
- `whileInView` fade-in + slide-up animation (viewport once: true, amount: 0.3)

```tsx
"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto max-w-4xl rounded-xl border bg-card p-8 md:p-12"
      >
        <h2 className="mb-2 text-3xl font-bold tracking-tight">About Me</h2>
        <p className="mb-8 text-sm text-muted-foreground">
          A little about who I am
        </p>

        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          <div className="flex-1">
            <p className="text-lg leading-relaxed text-muted-foreground">
              iOS engineer with experience building native apps in Swift and
              SwiftUI, as well as cross-platform solutions with Flutter. Passionate
              about clean architecture, great user experiences, and writing code
              that scales. Always learning, always building.
            </p>
          </div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="flex aspect-square w-full items-center justify-center rounded-lg bg-muted shadow-lg md:w-48 md:shrink-0"
          >
            <span className="text-sm text-muted-foreground">Photo</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 2: Add About to page.tsx**

```tsx
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
    </main>
  );
}
```

- [ ] **Step 3: Verify About renders**

```bash
npm run dev
```

Scroll down past Hero. Expected: About section with card container, 2-column layout on desktop, fade-in animation on scroll.

- [ ] **Step 4: Commit**

```bash
git add components/sections/about.tsx app/page.tsx
git commit -m "feat: add About section with scroll animation"
```

---

## Task 6: Tech Stack Section

**Files:**
- Create: `components/sections/tech-stack.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create TechStack component**

Create `components/sections/tech-stack.tsx` as a Client Component.

Implement per spec:
- Section id="tech-stack"
- Title "Tech Stack" + subtitle
- Loop over `TECH_STACK` from `lib/data.ts`
- Each category: label header (uppercase, tracking-widest, text-xs, text-muted-foreground)
- Each tech item: card with Simple Icons SVG + name. Use `simple-icons` package to get SVG paths. Fallback to text-only badge if icon not found.
- Grid: `grid-cols-2 md:grid-cols-4`
- Staggered entrance via `whileInView` with delay per card
- Hover: scale 1.05 + border color change

```tsx
"use client";

import { motion } from "framer-motion";
import { TECH_STACK } from "@/lib/data";
import {
  siSwift,
  siFlutter,
  siDart,
  siXcode,
  siGit,
  siFirebase,
} from "simple-icons";

const ICON_MAP: Record<string, { path: string; hex: string }> = {
  Swift: siSwift,
  SwiftUI: siSwift,
  Flutter: siFlutter,
  Dart: siDart,
  Xcode: siXcode,
  Git: siGit,
  Firebase: siFirebase,
};

function getSimpleIcon(name: string) {
  return ICON_MAP[name] || null;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function TechStack() {
  return (
    <section id="tech-stack" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="mb-2 text-3xl font-bold tracking-tight">
            Tech Stack
          </h2>
          <p className="mb-12 text-sm text-muted-foreground">
            Technologies I work with daily
          </p>
        </motion.div>

        {TECH_STACK.map((category) => (
          <div key={category.label} className="mb-10">
            <p className="mb-4 text-xs uppercase tracking-[0.15em] text-muted-foreground">
              {category.label}
            </p>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-2 gap-3 md:grid-cols-4"
            >
              {category.items.map((tech) => {
                const icon = getSimpleIcon(tech);
                return (
                  <motion.div
                    key={tech}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      borderColor: "hsl(var(--foreground))",
                    }}
                    className="flex items-center gap-3 rounded-lg border bg-card p-4 transition-colors"
                  >
                    {icon ? (
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5 shrink-0 fill-foreground"
                      >
                        <path d={icon.path} />
                      </svg>
                    ) : null}
                    <span className="text-sm font-medium">{tech}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add TechStack to page.tsx**

```tsx
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { TechStack } from "@/components/sections/tech-stack";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <TechStack />
    </main>
  );
}
```

- [ ] **Step 3: Verify Tech Stack renders**

```bash
npm run dev
```

Scroll to Tech Stack. Expected: 3 category groups, each with a grid of tech cards. Icons appear for Swift, Flutter, Dart, Xcode, Git, Firebase. Text-only badges for CI/CD, MVVM, Clean Architecture, Unit Testing. Staggered entrance animation on scroll.

- [ ] **Step 4: Commit**

```bash
git add components/sections/tech-stack.tsx app/page.tsx
git commit -m "feat: add Tech Stack section with icons and staggered animation"
```

---

## Task 7: Projects Section

**Files:**
- Create: `components/sections/projects.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create Projects component**

Create `components/sections/projects.tsx` as a Client Component.

Implement per spec:
- Section id="projects"
- Title "Projects" + subtitle
- Map over `PROJECTS` from `lib/data.ts`
- Each card: demo area placeholder (aspect-video, bg-muted, rounded-lg), name, description, tech badges (shadcn Badge), link buttons
- Alternating slide direction: even index slides from left, odd from right
- Demo area hover: subtle zoom via `whileHover={{ scale: 1.02 }}`
- Tech badges cascade entrance

```tsx
"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PROJECTS } from "@/lib/data";

const cardVariants = (index: number) => ({
  hidden: { opacity: 0, x: index % 2 === 0 ? -60 : 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
});

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="mb-2 text-3xl font-bold tracking-tight">Projects</h2>
          <p className="mb-12 text-sm text-muted-foreground">
            Some things I&apos;ve built
          </p>
        </motion.div>

        <div className="space-y-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.name}
              variants={cardVariants(index)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="overflow-hidden rounded-xl border bg-card"
            >
              {/* Demo area placeholder */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="flex aspect-video items-center justify-center bg-muted"
              >
                <span className="text-sm text-muted-foreground">
                  Screenshot / Video / GIF
                </span>
              </motion.div>

              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">{project.name}</h3>
                <p className="mb-4 text-muted-foreground">
                  {project.description}
                </p>

                {/* Tech badges */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.05 } },
                  }}
                  className="mb-6 flex flex-wrap gap-2"
                >
                  {project.tech.map((t) => (
                    <motion.div
                      key={t}
                      variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 },
                      }}
                    >
                      <Badge variant="secondary">{t}</Badge>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.appStoreUrl && (
                    <Button size="sm" variant="outline" className="gap-2" asChild>
                      <a
                        href={project.appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        App Store
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button size="sm" variant="outline" className="gap-2" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add Projects to page.tsx**

```tsx
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { TechStack } from "@/components/sections/tech-stack";
import { Projects } from "@/components/sections/projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <TechStack />
      <Projects />
    </main>
  );
}
```

- [ ] **Step 3: Verify Projects renders**

```bash
npm run dev
```

Scroll to Projects. Expected: 3 project cards with demo placeholders, descriptions, tech badges, and link buttons. Cards slide in alternately from left/right. Badges cascade in.

- [ ] **Step 4: Commit**

```bash
git add components/sections/projects.tsx app/page.tsx
git commit -m "feat: add Projects section with alternating slide-in animations"
```

---

## Task 8: Contact Section

**Files:**
- Create: `components/sections/contact.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create Contact component**

Create `components/sections/contact.tsx` as a Client Component.

Implement per spec:
- Section id="contact"
- Title "Get in Touch" + subtitle
- Centered layout
- Primary button "Send me an Email" linking to `mailto:giulianoaccorsi@gmail.com`
- 3 social icons (same as Hero)
- Scale-in animation (0.95 → 1 + fade)
- Email button glow pulse via CSS animation

```tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/data";

export function Contact() {
  const socials = [
    { icon: Github, href: SOCIAL_LINKS.github, label: "GitHub" },
    { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${SOCIAL_LINKS.email}`, label: "Email" },
  ];

  return (
    <section id="contact" className="px-6 py-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto max-w-2xl rounded-xl border bg-card p-8 text-center md:p-12"
      >
        <h2 className="mb-2 text-3xl font-bold tracking-tight">
          Get in Touch
        </h2>
        <p className="mb-8 text-muted-foreground">
          Have a project in mind? Let&apos;s talk.
        </p>

        <Button
          size="lg"
          className="animate-glow-pulse mb-8 gap-2"
          asChild
        >
          <a href={`mailto:${SOCIAL_LINKS.email}`}>
            <Mail className="h-4 w-4" />
            Send me an Email
          </a>
        </Button>

        <div className="flex justify-center gap-4">
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target={social.icon !== Mail ? "_blank" : undefined}
              rel={social.icon !== Mail ? "noopener noreferrer" : undefined}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              aria-label={social.label}
            >
              <social.icon className="h-4 w-4" />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 2: Add Contact to page.tsx**

```tsx
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { TechStack } from "@/components/sections/tech-stack";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />
    </main>
  );
}
```

- [ ] **Step 3: Verify Contact renders**

```bash
npm run dev
```

Scroll to Contact. Expected: Centered card with title, email button with subtle glow, social icons. Scale-in animation on scroll.

- [ ] **Step 4: Commit**

```bash
git add components/sections/contact.tsx app/page.tsx
git commit -m "feat: add Contact section with glow button and scale-in animation"
```

---

## Task 9: Footer Section

**Files:**
- Create: `components/sections/footer.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create Footer component**

Create `components/sections/footer.tsx`. This can be a Server Component (no animations needed).

```tsx
import { Github, Linkedin, Mail } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/data";

export function Footer() {
  const socials = [
    { icon: Github, href: SOCIAL_LINKS.github, label: "GitHub" },
    { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${SOCIAL_LINKS.email}`, label: "Email" },
  ];

  return (
    <footer className="border-t px-6 py-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Giuliano Accorsi
        </p>
        <div className="flex gap-4">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target={social.icon !== Mail ? "_blank" : undefined}
              rel={social.icon !== Mail ? "noopener noreferrer" : undefined}
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label={social.label}
            >
              <social.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Add Footer to page.tsx (final composition)**

```tsx
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { TechStack } from "@/components/sections/tech-stack";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
```

- [ ] **Step 3: Verify Footer renders and full page works end-to-end**

```bash
npm run dev
```

Scroll through entire page. Expected: All 6 sections render correctly. Hero buttons scroll to correct sections. Footer shows copyright with dynamic year and social icons.

- [ ] **Step 4: Commit**

```bash
git add components/sections/footer.tsx app/page.tsx
git commit -m "feat: add Footer section, complete page composition"
```

---

## Task 10: Migrate Favicons and Final Polish

**Files:**
- Modify: `app/layout.tsx`
- Create: `public/media/favicons/` (copy from current site)
- Modify: `app/globals.css` (if any final tweaks)

- [ ] **Step 1: Copy favicons from current site**

```bash
cp -r /Users/giulianoaccorsi/Desktop/GiulianoDev/media/favicons /Users/giulianoaccorsi/Desktop/GiulianoDev/public/media/favicons
```

- [ ] **Step 2: Add favicon references to layout.tsx**

Add `icons` and `manifest` to the metadata export in `app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: "Giuliano Accorsi — Mobile Developer",
  description: "Mobile Developer crafting native iOS and cross-platform experiences",
  metadataBase: new URL("https://giuliano.work"),
  authors: [{ name: "Giuliano Accorsi" }],
  icons: {
    icon: "/media/favicons/favicon.png",
    apple: "/media/favicons/apple-touch-icon.png",
  },
  manifest: "/media/favicons/site.webmanifest",
  openGraph: {
    title: "Giuliano Accorsi — Mobile Developer",
    description: "Mobile Developer crafting native iOS and cross-platform experiences",
    url: "https://giuliano.work",
    siteName: "Giuliano Accorsi",
    type: "website",
  },
};
```

Also verify that paths inside `public/media/favicons/site.webmanifest` point to the correct location (e.g., `/media/favicons/web-app-manifest-192x192.png`). Update paths if needed.

- [ ] **Step 3: Verify build succeeds**

```bash
npm run build
```

Expected: Build completes with no errors.

- [ ] **Step 4: Run production preview**

```bash
npm run start
```

Open `http://localhost:3000`. Verify: all sections, animations, links, scroll behavior, favicon, responsive layout (resize browser).

- [ ] **Step 5: Commit**

```bash
git add public/media/favicons app/layout.tsx
git commit -m "feat: migrate favicons and finalize metadata"
```

---

## Task 11: Update .gitignore and Clean Up

**Files:**
- Modify: `.gitignore`

- [ ] **Step 1: Update .gitignore**

Ensure `.gitignore` includes Next.js and Node entries:

```
# Next.js
/.next/
/out/
/build/

# Dependencies
node_modules/

# Env
.env*.local

# Vercel
.vercel

# Superpowers
.superpowers/
```

- [ ] **Step 2: Verify git status is clean**

```bash
git status
```

Expected: Only tracked, committed files. No stray untracked files.

- [ ] **Step 3: Final commit if needed**

```bash
git add .gitignore
git commit -m "chore: update gitignore for Next.js project"
```

- [ ] **Step 4: Run final build verification**

```bash
npm run build && echo "BUILD SUCCESS"
```

Expected: "BUILD SUCCESS"
