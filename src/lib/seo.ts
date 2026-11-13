/** All production URLs resolve to the official GitHub Pages address (or a future custom domain). */
import {siteBasePath} from './site';

export const SITE_ORIGIN = (process.env.NEXT_PUBLIC_SITE_URL || 'https://eng-mohamedemad-dev.github.io').replace(/\/$/, '');
export const SITE_NAME = 'Mohamed Emad | Full-Stack Software Engineer';
export const SITE_DESCRIPTION = 'Mohamed Emad is a full-stack software engineer building web products, backend APIs and production infrastructure with Laravel, React, PostgreSQL, Docker and CI/CD.';

/** Absolute, canonical URL; uses the configured base path for non-user Pages repos. */
export function absoluteUrl(path: string = '/') {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_ORIGIN}${siteBasePath}${cleanPath}`;
}
export const SOCIAL_IMAGE = absoluteUrl('/og/portfolio.png');
export const JAMEELAA_IMAGE = absoluteUrl('/og/jameelaa.png');
