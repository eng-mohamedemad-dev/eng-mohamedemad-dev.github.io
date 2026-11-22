import type {Metadata} from 'next';
import {EvolvedExperience} from '@/components/EvolvedExperience';
import {absoluteUrl} from '@/lib/seo';
/** Unlinked preview; not indexed; root is the only official portfolio URL. */
export const metadata:Metadata={
 title:'Evolved',description:'Unlisted design preview for Mohamed Emad’s portfolio.',
 robots:{index:false,follow:true},alternates:{canonical:absoluteUrl('/')},
};
export default function Page(){return <EvolvedExperience workBase="/evolved/work"/>;}
