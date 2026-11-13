import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {projectRepository} from '@/lib/projects';
import {CaseStudy} from '@/components/CaseStudy';
import {absoluteUrl} from '@/lib/seo';

export const dynamicParams = false;
export function generateStaticParams() {return projectRepository.list().map(p => ({slug: p.slug}));}
export async function generateMetadata({params}: {params: Promise<{slug: string}>}): Promise<Metadata> {
  const {slug} = await params;
  const p = projectRepository.findBySlug(slug);
  if (!p) return {title: 'Project not found', robots: {index: false, follow: false}};
  return {
    title: `${p.title} — Original Edition`,
    description: p.overview,
    robots: {index: false, follow: true},
    alternates: {canonical: absoluteUrl(`/work/${p.slug}/`)},
  };
}
export default async function ProjectPage({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;
  const project = projectRepository.findBySlug(slug);
  if (!project) notFound();
  return <CaseStudy project={project} edition="classic"/>;
}
