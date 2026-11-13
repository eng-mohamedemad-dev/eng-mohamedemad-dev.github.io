import type {Metadata} from 'next';
import {ClassicExperience} from '@/components/ClassicExperience';
import {EvolvedExperience} from '@/components/EvolvedExperience';
import {DarkExperience} from '@/components/DarkExperience';
import {ACTIVE_EDITION} from '@/config/portfolio';
import {StructuredData} from '@/components/StructuredData';
import {portfolioStructuredData} from '@/lib/structured-data';
import {absoluteUrl,SITE_DESCRIPTION} from '@/lib/seo';

export const metadata:Metadata={
  title:{absolute:'Mohamed Emad — Full-Stack Software Engineer'},
  description:SITE_DESCRIPTION,
  alternates:{canonical:absoluteUrl('/')},
};
const editions={classic:ClassicExperience,evolved:EvolvedExperience,dark:DarkExperience};
export default function Page(){const Active=editions[ACTIVE_EDITION];return <><StructuredData data={portfolioStructuredData}/><Active/></>;}
