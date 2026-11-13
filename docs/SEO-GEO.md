# SEO + GEO implementation and launch checks

## Scope

- **Canonical, indexed pages**: `/` and `/work/<slug>/` on the official portfolio hostname.
- **Alternate designs**: `/classic/` and `/classic/work/<slug>/` remain publicly accessible but emit `noindex,follow`, and canonical hints to the main design.
- **Review-only HTML previews**: `/previews/*.html` include `noindex,follow`.
- **Sitemap**: `/sitemap.xml` lists only the indexed design and published project pages; updates automatically from `src/content/projects.ts` on build.
- **Robots**: `/robots.txt` allows crawling and lists the sitemap. Robots does not block alternate pages because crawlers must read their noindex tags.
- **Metadata**: each indexable route includes an absolute canonical URL, distinct title and description, Open Graph image, and Twitter card. Share assets are in `public/og/`.
- **Structured data**: `Person`, `WebSite`, `ProfilePage` on `/`, plus `CreativeWork` and `BreadcrumbList` for each canonical project. Verify that statements match real visible portfolio content; we do not fabricate testimonials, client counts, scores, or performance statistics.
- **GEO**: the useful work is first-person, verifiable technical context, public professional identity, accessible text, source links, and fresh genuine case studies. No indexing or AI citation guarantees.

## After GitHub Pages goes live

1. In **Settings → Pages**, select **GitHub Actions** as the publishing source; verify Actions succeeded.
2. Open the live domain, `/classic/`, `/work/jameelaa/`, `/sitemap.xml`, and `/robots.txt`.
3. In [Google Search Console](https://search.google.com/search-console/), verify ownership (URL-prefix property works without a custom domain), then submit `https://eng-mohamedemad-dev.github.io/sitemap.xml`. Don't invent a verification token in source code.
4. Use Google Search Console URL Inspection to check the canonical `/` and `/work/jameelaa/` pages; verify `classic` is not indexed.
5. Test JSON-LD with [Rich Results Test](https://search.google.com/test/rich-results) and [Schema Validator](https://validator.schema.org/). Some valid types don't create rich results; structured data isn't a ranking guarantee.
6. Test share images using social-media debuggers. Validate image URLs return 200 and the social images are 1200 × 630.
7. Replace all *concept* illustrations with explicitly approved real project screenshots. Get approvals for claims and confidential system details.
8. After a custom domain is added, change `NEXT_PUBLIC_SITE_URL` and regenerate metadata/sitemap; verify redirects and Search Console ownership.

## Content quality before public promotion

- Confirm CV sharing and role descriptions.
- Publish original Jameelaa engineering decisions, user-facing outcomes you can substantiate, implementation details that are safe to disclose, and product screenshots.
- Keep both edition URLs in site navigation, but link externally to the canonical one.
- Prefer useful content over keyword stuffing or unsupported GEO hacks, `llms.txt` is not required for Google's AI search.

## Automated post-build checks

`npm run build && node scripts/verify-seo.mjs` checks canonical URLs, generated metadata/JSON-LD, route policy, and sitemap output.
