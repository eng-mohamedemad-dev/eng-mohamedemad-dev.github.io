import type {Metadata} from 'next';
import {absoluteUrl, SITE_ORIGIN, SITE_DESCRIPTION, SITE_NAME, SOCIAL_IMAGE} from '@/lib/seo';
import './globals.css';
import '@/styles/classic.css';
import '@/styles/evolved.css';
import '@/styles/case-study.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  applicationName: 'Mohamed Emad — Portfolio',
  title: {default: SITE_NAME, template: '%s | Mohamed Emad'},
  description: SITE_DESCRIPTION,
  creator: 'Mohamed Emad',
  authors: [{name: 'Mohamed Emad', url: absoluteUrl('/')}],
  category: 'technology',
  icons: {icon: absoluteUrl('/favicon.svg')},
  robots: {index: true, follow: true},
  openGraph: {
    type: 'website', locale: 'en_US', siteName: SITE_NAME,
    title: 'Mohamed Emad — From idea to production',
    description: SITE_DESCRIPTION, url: absoluteUrl('/'),
    images: [{url: SOCIAL_IMAGE, width: 1200, height: 630, alt: 'Mohamed Emad — Full-Stack Software Engineer'}]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohamed Emad — Full-Stack Software Engineer',
    description: SITE_DESCRIPTION,
    images: [SOCIAL_IMAGE],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return <html lang="en"><head><link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/><link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet"/></head><body>{children}</body></html>;
}
