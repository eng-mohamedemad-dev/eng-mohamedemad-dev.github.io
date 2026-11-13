# Mohamed Emad — Portfolio

Three fully separate visual editions in **one Next.js + TypeScript repository**, deployed as a static site on GitHub Pages.

## Change the public design (only the owner controls it)

Open **`src/config/portfolio.ts`** and change:

```ts
export const ACTIVE_EDITION: PortfolioEdition = 'dark';
```

Choose one of `dark` (V3, orange/charcoal, current default), `evolved` (V2, cream/lime) or `classic` (V1, minimal cream). Commit/push to `main`. GitHub Actions will rebuild and **the same `https://eng-mohamedemad-dev.github.io/` URL changes its appearance**. No version switch is shown to visitors.

Unlinked preview routes are retained for review: `/dark/`, `/evolved/`, `/classic/`, all tagged `noindex`; only `/` is canonical for SEO.

## Routes

- `/`: official portfolio, resolved from configuration
- `/work/jameelaa/`: canonical case study, colored for the currently selected edition
- `/dark/`, `/evolved/`, `/classic/`: unlisted noindex visual previews
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

Project content lives in `src/content/projects.ts` and MDX stories in `src/content/projects/`. Every edition consumes the same source. Add approved screenshot assets to `public/projects/<slug>/`. Existing Jameelaa artwork is explicitly labeled editorial **concept art**, not real screenshots. The three editions do **not** claim unaudited projects. Contact links reside in `src/lib/profile.ts`. Future Supabase integration can replace the repository adapter in `src/lib/projects.ts`.

## Security, accessibility and SEO

Only canonical pages are indexed. `schema.org` JSON-LD, Open Graph cards, canonical URLs, sitemap and robots metadata share the same project source. Mobile navigation uses accessible labels, open/close semantics and Escape, and honors reduced-motion settings. No unnecessary runtime backend or secrets.
