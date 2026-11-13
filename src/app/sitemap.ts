import type {MetadataRoute} from 'next';
import {projectRepository} from '@/lib/projects';
import {absoluteUrl} from '@/lib/seo';

/** Only canonical public URLs; alternate edition and prototype previews are intentionally omitted. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {url: absoluteUrl('/')},
    ...projectRepository.list().map(project => ({url: absoluteUrl(`/work/${project.slug}/`)})),
  ];
}
