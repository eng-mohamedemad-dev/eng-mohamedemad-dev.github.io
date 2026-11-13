import type {Metadata} from 'next';
import {EvolvedExperience} from '@/components/EvolvedExperience';
import {StructuredData} from '@/components/StructuredData';
import {portfolioStructuredData} from '@/lib/structured-data';
import {absoluteUrl, SITE_DESCRIPTION} from '@/lib/seo';

export const metadata: Metadata = {
  title: {absolute: 'Mohamed Emad — Full-Stack Software Engineer'},
  description: SITE_DESCRIPTION,
  alternates: {canonical: absoluteUrl('/')},
};

export default function Page() {
  return <><StructuredData data={portfolioStructuredData}/><EvolvedExperience/></>;
}
