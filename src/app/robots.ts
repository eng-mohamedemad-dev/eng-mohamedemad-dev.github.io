import type {MetadataRoute} from 'next';

// Metadata routes must opt into static output for GitHub Pages.
export const dynamic = 'force-static';
import {SITE_ORIGIN, absoluteUrl} from '@/lib/seo';

/** Alternate pages have HTML noindex. Allow crawling so that directive is visible. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{userAgent: '*', allow: '/'}],
    host: SITE_ORIGIN,
    sitemap: absoluteUrl('/sitemap.xml'),
  };
}
