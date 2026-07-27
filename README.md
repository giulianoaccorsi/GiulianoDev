# Giuliano Accorsi — Portfolio

Personal portfolio for [giuliano.work](https://giuliano.work), focused on native iOS and Android engineering, cross-platform mobile work, and production-ready delivery.

## Stack

- Next.js 16 App Router
- React 19 and TypeScript
- Tailwind CSS 4 and Base UI components
- Framer Motion with `prefers-reduced-motion` support
- Vitest for content, semantics, media-budget, and SEO contracts

## Project structure

```text
app/
  layout.tsx             Global metadata and Person JSON-LD
  page.tsx               Home page composition
  opengraph-image.tsx    Generated 1200×630 social image
  robots.ts              robots.txt metadata route
  sitemap.ts             sitemap.xml metadata route
components/
  sections/              Home page sections
lib/
  data.ts                Project catalog and technology stack
  site.ts                Canonical URL, shared metadata, and JSON-LD data
public/media/             Production images, video, badges, and favicons
source-media/             Ignored source media; never published by Next.js
```

## Local development

Install exactly the dependency graph recorded in `package-lock.json`:

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality gate

Run the complete local gate before deployment:

```bash
npm test
npm run lint
npm run build
```

The tests protect:

- portfolio-ready project data and real media;
- project case-study rendering and accessible alt text;
- hero, bio, navigation, and keyboard bypass semantics;
- lazy video loading, reduced motion, and a 2 MB video budget;
- canonical, Open Graph, Twitter, JSON-LD, and metadata routes.

## Updating projects

1. Update `PROJECTS` in `lib/data.ts`.
2. Use concrete, verifiable facts; do not add unverified metrics.
3. Include a real image or video, descriptive `imageAlt` text where applicable, and at least two engineering highlights.
4. Put web-ready assets in `public/media/`.
5. Keep editable/original media in ignored `source-media/`.
6. Run the complete quality gate.

`PassMalta` intentionally has no public store link while it remains an internal beta. `SplitEasy` links to its App Store listing, and `PokeStudy` links to its public GitHub repository.

## Media optimization

The SplitEasy demo is delivered as a lazy-loaded, viewport-controlled H.264 MP4 with a static poster. The checked-in file is `720×1564`, 30 fps, and must remain below the automated 2 MB budget.

Example transcode from the ignored source file:

```bash
ffmpeg \
  -i source-media/paysplit-demo.mov \
  -vf 'scale=720:-2,fps=30' \
  -c:v libx264 \
  -preset slow \
  -crf 24 \
  -pix_fmt yuv420p \
  -movflags +faststart \
  -an \
  public/media/spliteasy-demo.mp4
```

After changing the video, regenerate `public/media/spliteasy-poster.png` and rerun `npm test`.

## SEO and public routes

The build statically generates:

```text
/
/_not-found
/opengraph-image
/robots.txt
/sitemap.xml
```

Canonical production URL: `https://giuliano.work`.

Budly legal URLs remain redirects configured in `next.config.ts`; Budly is not shown as a portfolio project until it has complete, publishable evidence.
