/** Validate core SEO/GEO invariants in the generated Next static export. */
import {readFileSync, existsSync} from 'node:fs';
import {join} from 'node:path';

const output = join(process.cwd(), 'out');
const origin = (process.env.NEXT_PUBLIC_SITE_URL || 'https://eng-mohamedemad-dev.github.io').replace(/\/$/, '');
const prefix = (process.env.NEXT_PUBLIC_BASE_PATH || '').replace(/\/$/, '');
const url = (path) => `${origin}${prefix}${path}`;
function check(condition, message) {
  if (!condition) throw new Error(`[SEO] ${message}`);
  console.log(`✓ ${message}`);
}
function page(path) {
  const file = join(output, path);
  check(existsSync(file), `${path} is exported`);
  return readFileSync(file, 'utf8');
}
const home = page('index.html');
const classic = page('classic/index.html');
const evolved = page('evolved/index.html');
const dark = page('dark/index.html');
const project = page('work/jameelaa/index.html');
const projectClassic = page('classic/work/jameelaa/index.html');
const sitemap = page('sitemap.xml');
const robots = page('robots.txt');
const preview = page('previews/evolved.html');
check(home.includes('rel="canonical"') && home.includes(url('/')), 'home has absolute canonical URL');
check(project.includes('rel="canonical"') && project.includes(url('/work/jameelaa/')), 'case study has absolute canonical URL');
check(classic.includes('noindex') && evolved.includes('noindex') && dark.includes('noindex') && projectClassic.includes('noindex'), 'alternate editions remain noindex');
check(preview.includes('noindex'), 'standalone preview remains noindex');
check(home.includes('application/ld+json') && home.includes('https://schema.org'), 'home emits JSON-LD');
check(project.includes('application/ld+json') && project.includes('BreadcrumbList'), 'case study emits breadcrumb JSON-LD');
check(home.includes('og:image') && home.includes('twitter:card'), 'home has social-sharing metadata');
check(sitemap.includes(url('/work/jameelaa/')) && sitemap.includes(url('/')), 'sitemap includes canonical routes');
check(!sitemap.includes('/classic/') && !sitemap.includes('/evolved/') && !sitemap.includes('/dark/') && !sitemap.includes('/previews/'), 'sitemap excludes alternate/prototype routes');
check(robots.includes(url('/sitemap.xml')), 'robots.txt references sitemap');
check(existsSync(join(output, 'og', 'portfolio.png')), 'portfolio share image exported');
check(existsSync(join(output, 'og', 'jameelaa.png')), 'case-study share image exported');
console.log('[SEO] Static SEO audit complete.');
