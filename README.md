# Mohamed Emad — Portfolio

Four independent visual editions in **one Next.js + TypeScript repository**, deployed as a static site on GitHub Pages.

## Change the public design (only the owner controls it)

Open **`src/config/portfolio.ts`** and change:

```ts
export const ACTIVE_EDITION: PortfolioEdition = 'dark';
```

Choose one of `dark` (V3, orange/charcoal, current default), `evolved` (V2, interactive lime notebook) `classic` (V1, printed folio), or `fieldnotes` (V4, forest green and ivory). Commit/push to `main`. GitHub Actions will rebuild and **the same `https://eng-mohamedemad-dev.github.io/` URL changes its appearance**. No version switch is shown to visitors.

Unlinked preview routes are retained for review: `/dark/`, `/evolved/`, `/classic/`, `/fieldnotes/`, all tagged `noindex`; only `/` is canonical for SEO.

## Routes

- `/`: official portfolio, resolved from configuration
- `/work/jameelaa/`: canonical case study, colored for the currently selected edition
- `/dark/`, `/evolved/`, `/classic/`, `/fieldnotes/`: unlisted noindex visual previews
- `sitemap.xml` and `robots.txt`: statically exported

## Development

Node.js 22+:

```bash
npm install
npm run typecheck
npm run build
node scripts/verify-export.mjs
node scripts/verify-seo.mjs
```

The GitHub Actions workflow runs all checks and publishes `out/` to GitHub Pages. In repository Settings → Pages → Source use **GitHub Actions**, not "Deploy from a branch".

## Content and ownership

Project content lives in `src/content/projects.ts` and MDX stories in `src/content/projects/`. Every edition consumes the same source. Add approved screenshot assets to `public/projects/<slug>/`. Existing Jameelaa artwork is explicitly labeled editorial **concept art**, not real screenshots. The four editions do **not** claim unaudited projects. Contact links reside in `src/lib/profile.ts`. Future Supabase integration can replace the repository adapter in `src/lib/projects.ts`.

## Security, accessibility and SEO

Only canonical pages are indexed. `schema.org` JSON-LD, Open Graph cards, canonical URLs, sitemap and robots metadata share the same project source. Mobile navigation uses accessible labels, open/close semantics and Escape, and honors reduced-motion settings. No unnecessary runtime backend or secrets.

## Contact and appearance

- Edit `src/lib/profile.ts` for public WhatsApp (`wa.me` in E.164 format), Facebook, LinkedIn, email, CV and GitHub links. WhatsApp and Facebook were explicitly approved by the portfolio owner; **do not** invent personal contact details.
- All four editions include WhatsApp-first contact shortcuts, accessible light/dark buttons and progressive scroll reveals. Each edition has its own saved theme preference (`localStorage`); the default is light for Classic/Evolved/Fieldnotes and dark for Amber Night.
- Dark/light mode is **independent** of the active homepage edition; visitors cannot switch editions from the UI. Only `src/config/portfolio.ts` controls which edition the canonical homepage renders after a rebuild.
- Scroll animations only begin once IntersectionObserver is available and JavaScript has mounted; they are disabled for users with `prefers-reduced-motion` enabled. No content depends on animation to be visible.
