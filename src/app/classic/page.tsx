import type {Metadata} from 'next';
import {ClassicExperience} from '@/components/ClassicExperience';
import {absoluteUrl} from '@/lib/seo';

/** Alternate design: accessible for comparison, not a competing search result. */
export const metadata: Metadata = {
  title: 'Original Edition — Mohamed Emad',
  description: 'The original portfolio design for Mohamed Emad, full-stack software engineer.',
  robots: {index: false, follow: true},
  alternates: {canonical: absoluteUrl('/')},
};
export default function Page() {return <ClassicExperience/>;}
