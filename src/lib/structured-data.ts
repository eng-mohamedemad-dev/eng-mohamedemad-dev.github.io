import {PROFILE} from '@/lib/profile';
import {absoluteUrl, SITE_DESCRIPTION, SITE_NAME} from '@/lib/seo';
import type {Project} from '@/content/projects';

const personId = absoluteUrl('/#person');
const siteId = absoluteUrl('/#website');
export const portfolioStructuredData: Record<string, unknown> = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person', '@id': personId,
      name: PROFILE.name,
      url: absoluteUrl('/'),
      jobTitle: 'Full-Stack Software Engineer',
      description: SITE_DESCRIPTION,
      sameAs: [PROFILE.github, PROFILE.linkedin],
      email: PROFILE.email,
      knowsAbout: [
        'Full-stack software engineering', 'Laravel', 'React', 'Vue.js',
        'Node.js', 'PostgreSQL', 'Redis', 'Docker',
        'CI/CD', 'Production infrastructure', 'Web application development'
      ],
    },
    {
      '@type': 'WebSite', '@id': siteId,
      name: SITE_NAME, url: absoluteUrl('/'),
      description: SITE_DESCRIPTION, inLanguage: 'en',
      publisher: {'@id': personId},
    },
    {
      '@type': 'ProfilePage', '@id': absoluteUrl('/#profile'),
      url: absoluteUrl('/'), name: 'Mohamed Emad — Software Engineer',
      about: {'@id': personId}, mainEntity: {'@id': personId},
      isPartOf: {'@id': siteId}, inLanguage: 'en',
    },
  ],
};

export function projectStructuredData(project: Project): Record<string, unknown> {
  const url = absoluteUrl(`/work/${project.slug}/`);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CreativeWork', '@id': `${url}#case-study`,
        name: `${project.title} — Engineering Case Study`,
        headline: `${project.title} — Engineering Case Study`,
        description: project.overview,
        url, inLanguage: 'en',
        author: {'@id': personId},
        about: project.stack.map(name => ({'@type': 'Thing', name})),
        ...(project.externalUrl ? {sameAs: project.externalUrl} : {}),
      },
      {
        '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`,
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: 'Mohamed Emad', item: absoluteUrl('/')},
          {'@type': 'ListItem', position: 2, name: project.title, item: url},
        ],
      },
    ],
  };
}
