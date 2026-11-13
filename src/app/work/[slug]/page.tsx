import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {projectRepository} from '@/lib/projects';
import {CaseStudy} from '@/components/CaseStudy';
import {ACTIVE_EDITION} from '@/config/portfolio';
import {StructuredData} from '@/components/StructuredData';
import {projectStructuredData} from '@/lib/structured-data';
import {absoluteUrl, JAMEELAA_IMAGE, SOCIAL_IMAGE} from '@/lib/seo';

export const dynamicParams = false;
export function generateStaticParams() {return projectRepository.list().map(p => ({slug: p.slug}));}
export async function generateMetadata({params}: {params: Promise<{slug: string}>}): Promise<Metadata> {
  const {slug} = await params;
  const p = projectRepository.findBySlug(slug);
  if (!p) return {title: 'Project not found', robots: {index: false, follow: false}};
  const url = absoluteUrl(`/work/${p.slug}/`);
  const image = p.slug === 'jameelaa' ? JAMEELAA_IMAGE : SOCIAL_IMAGE;
  return {
    title: `${p.title} — Full-Stack Engineering Case Study`,
    description: p.overview,
    alternates: {canonical: url},
    openGraph: {type: 'article', title: `${p.title} — Engineering Case Study`, description: p.overview,
      url, images: [{url: image, width: 1200, height: 630, alt: `${p.title} engineering case study`}]},
    twitter: {card: 'summary_large_image', images: [image]},
  };
}
export default async function ProjectPage({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;
  const project = projectRepository.findBySlug(slug);
  if (!project) notFound();
  return <><StructuredData data={projectStructuredData(project)}/><CaseStudy project={project} edition={ACTIVE_EDITION}/></>;
}
