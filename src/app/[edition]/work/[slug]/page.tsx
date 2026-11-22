import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {EDITIONS} from '@/config/portfolio';
import {CaseStudy} from '@/components/CaseStudy';
import {projectRepository} from '@/lib/projects';
import {absoluteUrl} from '@/lib/seo';

type Params = {edition:string; slug:string};
type PageProps = {params:Promise<Params>};

export const dynamicParams = false;
export function generateStaticParams():Params[] {
  return EDITIONS.flatMap(edition=>projectRepository.list().map(({slug})=>({edition,slug})));
}
export async function generateMetadata({params}:PageProps):Promise<Metadata> {
  const {slug}=await params;
  const project=projectRepository.findBySlug(slug);
  if(!project) notFound();
  return {title:project.title+' — Engineering case study',description:project.overview,
    robots:{index:false,follow:true},alternates:{canonical:absoluteUrl('/work/'+slug+'/')}};
}
export default async function Page({params}:PageProps) {
  const {edition,slug}=await params;
  const selected=EDITIONS.find(value=>value===edition);
  const project=projectRepository.findBySlug(slug);
  if(!project || !selected) notFound();
  return <CaseStudy project={project} edition={selected} home={'/'+selected+'/'}/>;
}
