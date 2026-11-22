import type {Metadata} from 'next';
import {FieldnotesExperience} from '@/components/FieldnotesExperience';
import {absoluteUrl} from '@/lib/seo';

export const metadata:Metadata={
  title:'Fieldnotes',
  description:'An engineering portfolio and field notes by Mohamed Emad.',
  robots:{index:false,follow:true},
  alternates:{canonical:absoluteUrl('/')},
};

export default function Page() {
  return <FieldnotesExperience workBase="/fieldnotes/work"/>;
}
