# Brian Chirchir Portfolio

Personal product-builder portfolio for Brian Chirchir, designed as a content-first editorial site rather than a traditional CV. The site presents Brian's positioning, product work, thinking, background, and contact paths with a restrained design system and accessible responsive layouts.

## Live Site

Canonical domain: `https://civanta.io`

## Stack

- Astro 6 with `output: 'server'`
- Vercel SSR adapter
- Tailwind CSS
- Astro Fonts API for Newsreader and Manrope
- MDX content collections
- React only where an interactive island is needed
- Plausible analytics

## Routes

- `/` - Homepage with hero, proof points, product previews, thinking teaser, and CTA
- `/work` - Products page with product cards, status tags, evidence panels, and disclosure sections
- `/work/[slug]` - Product detail route support
- `/thinking` - Writing-in-progress page with topic teasers
- `/thinking/[slug]` - Published article route support
- `/about` - Bio, principles, value propositions, credentials, experience, and education

Legacy redirects are handled by `src/middleware.ts`:

- `/building/*` redirects to `/work/*`
- `/writing/*` redirects to `/thinking/*`

## Getting Started

Requires Node `>=22.12.0`.

```sh
npm install
npm run dev
```

The local dev server will print the preview URL in the terminal.

## Commands

```sh
npm run dev      # Start local development server
npm run check    # Run Astro diagnostics and type checks
npm run build    # Build production output
npm run preview  # Preview the production build locally
```

## Project Structure

```txt
src/
  components/        Reusable Astro UI components
  content/           MDX content collections
  data/              Structured site, home, about, and product data
  islands/           Client-side React islands
  layouts/           Shared page layout
  lib/               Small utilities
  pages/             Astro routes
  styles/            Global CSS and design-system rules
public/
  brian.png          Portrait image used on Home and About
  favicon.svg
  og-image.svg
```

## Content Editing

Primary product data currently lives in `src/data/products.ts`. This keeps the Products page stable and avoids runtime collection-loading regressions.

Article drafts live in `src/content/articles/`. Publication is controlled by the frontmatter `status` field:

```yaml
status: coming-soon
```

or:

```yaml
status: published
```

Case-study MDX content is still available under `src/content/case-studies/` for deeper route support and future expansion.

## Design System

The visual source of truth is `Portfolio_Design_Standards.md`.

Current direction:

- Dark editorial theme
- Typography-led hierarchy
- Warm near-black backgrounds
- Soft ivory text
- Muted terracotta accent
- Newsreader for display type
- Manrope for body and interface text
- Editorial motion only: hover states, disclosure open/close, page transitions

Avoid:

- Gradient backgrounds
- Decorative imagery without content value
- Neon accents
- Carousels
- Popups
- Scroll-triggered text animation
- Justified body text

## Accessibility Notes

The implementation aims for WCAG AA:

- Semantic headings and landmarks
- Visible focus styles
- Keyboard-accessible links, buttons, and disclosure controls
- Minimum 44px touch targets where practical
- Reduced motion support via `prefers-reduced-motion`
- Left-aligned body copy for readability

## Deployment

The site is configured for Vercel:

```js
output: 'server'
adapter: vercel()
site: 'https://civanta.io'
```

Before deploying, run:

```sh
npm run check
npm run build
```

## QA Checklist

- Home, Products, Thinking, and About render correctly
- Products page shows all 7 products
- Product name is consistently `PayGo Solutions`
- Status tags are visually distinct
- About bio text is left-aligned
- Education rows keep institution names in one cell
- Navigation works at mobile and desktop widths
- `npm run check` passes with zero diagnostics
- `npm run build` completes successfully

