# Mohamed Emad — Personal portfolio (two editions)

A deliberately handcrafted dual-edition portfolio, built for static GitHub Pages hosting and ready for a future Supabase content adapter.

## Experiences

| URL | Design | Project detail |
|---|---|---|
| `/` | **Edition 02 — Evolved** (cream / charcoal / lime, expressive editorial layout, interactive engineering section) | `/work/jameelaa/` |
| `/classic/` | **Edition 01 — Original** (quiet, strong typography, highly restrained editorial layout) | `/classic/work/jameelaa/` |

Both versions share the same project data and gallery imagery. A design switch is available in the header. The existing hand-built visual identities were retained and converted to JSX; they are not generic premade templates.

## Getting started

Node.js 22+ recommended:

```bash
npm install
npm run dev
npm run typecheck
npm run build
```

Visit `http://localhost:3000/` and `http://localhost:3000/classic/`.

If you want to examine the visuals without installing Node dependencies, `public/previews/classic.html`, `evolved.html`, and `jameelaa.html` are standalone review pages (the last one contains the gallery artwork inline).

## Deploy to GitHub Pages

1. Create or choose **a repository under the correct personal GitHub account**. Do not push to a shared account's project until ownership is confirmed.
2. Upload/commit these files to `main` (keep `.github/workflows/pages.yml`).
3. In repository **Settings → Pages → Build and deployment → Source**, choose **GitHub Actions**.
4. A push to `main` builds and deploys both editions. Pull requests only run checks.
5. For project repositories, the workflow computes `/repo-name` as the `basePath`. For `<username>.github.io`, it uses an empty basePath.

Deployment address: `https://<username>.github.io/<repo-name>/` (or `https://<username>.github.io/` for user-site repository).

**CI note:** The environment used to prepare this delivery did not have npm registry connectivity, so package installation, typecheck and production Next build could not be executed locally. The GitHub workflow is configured to perform them; inspect Actions for final confirmation before announcing a live deployment. Dependency installation uses `npm install` because no lockfile could be generated offline; after your first successful install, commit the resulting `package-lock.json` and switch the workflow to `npm ci`.

## Adding a project

1. Add an entry to `src/content/projects.ts` (slug, summary, role, stack, gallery).
2. Add artwork to `public/projects/<slug>/`.
3. Add a `<slug>.mdx` story under `src/content/projects/`.
4. Register that MDX story in the CaseStudy component as new entries are created. The current case-study renderer imports Jameelaa's MDX explicitly to avoid pretending that other unapproved projects exist.
5. For the fully static build, new slugs must be included in `generateStaticParams` via `projectRepository.list()`, which is already done.
6. Once added to `src/content/projects.ts`, the shared `AdditionalProjects` component lists the new approved work in **both editions** automatically; the hand-crafted featured hero remains Jameelaa until you deliberately change it.


## Search visibility (SEO / GEO)

The canonical public home is `/`; `/classic/` remains a noindex preview of Edition 01, not a second indexed portfolio. Public case studies are published under `/work/<slug>/`; classic equivalents also have noindex. The project registry powers the canonical sitemap.

Implemented: per-route metadata, canonical links, Open Graph and X/Twitter cards, two bespoke 1200×630 social assets, `robots.txt`, `sitemap.xml`, `Person`/`WebSite`/`ProfilePage` JSON-LD, and `CreativeWork`/`BreadcrumbList` JSON-LD. Standalone prototype HTML is `noindex`. The deployment workflow audits the generated HTML and XML before publishing.

See **`docs/SEO-GEO.md`** for post-launch Search Console setup, schema testing, updating metadata for a custom domain, and content guidelines. No AI-search ranking guarantees are claimed.

## Supabase later

The shared data contract is `src/content/projects.ts`; the data-access interface is in `src/lib/projects.ts`. A later Supabase adapter can implement the same interface. **GitHub Pages is static:** dashboard-created new routes cannot appear without a fresh static build. If you need instant CMS additions, publish previews by client-side queries or move the public site to a platform that runs server code. No database or secret keys are required today.

## Public contact

- Email: `mohamedelghool671@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/mohamedemaddev/`
- GitHub: `https://github.com/eng-mohamedemad-dev`
- CV: linked to the supplied Google Drive share URL; document contents and sharing permissions not yet verified.
- Centralised public profile metadata: `src/lib/profile.ts`.

## Publication checklist

- [x] Confirm GitHub identity: `eng-mohamedemad-dev`.
- [ ] Replace **editorial concept visuals** with verified approved Jameelaa screenshots. They are clearly labelled and not presented as screenshots.
- [x] Connect the approved email, LinkedIn, GitHub, and Drive CV link in both editions and the case study.
- [ ] Confirm the Google Drive CV has **Anyone with the link → Viewer** permissions; it is currently an external **View CV** link, not a bundled PDF download.
- [ ] Review project credits and client confidentiality before publishing.
- [ ] Run the CI build, check `Pages` deployment, test mobile and desktop routes on the public URL.
- [ ] Configure custom domain and analytics later if desired.

## Notes

- The two editions are production-oriented source, but review previews are convenience artifacts only.
- Motion has reduced-motion fallbacks; galleries support keyboard navigation, Escape and touch gestures.
- No API routes, server-only runtime functions or Supabase credentials are included.
