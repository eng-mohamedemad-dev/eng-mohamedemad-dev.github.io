/** Project data stays separate from the two visual editions and from the repository layer. */
export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  kind: 'editorial' | 'screenshot';
};
export type Project = {
  slug: string;
  title: string;
  category: string;
  lead: string;
  overview: string;
  role: string;
  status: string;
  stack: readonly string[];
  externalUrl?: string;
  gallery: readonly GalleryImage[];
};
export const PROJECTS: readonly Project[] = [
  {
    slug:'jameelaa',
    title:'Jameelaa',
    category:'Booking platform · Real-world product',
    lead:'A service-booking experience backed by real operational systems.',
    overview:'From application workflows and business rules to background jobs, delivery and production operations. A product that continues to evolve after launch.',
    role:'Full-stack, backend, production infrastructure and release engineering. The separate Flutter client work is not presented as solely mine.',
    status:'Live on Google Play',
    stack:['Laravel','React','PostgreSQL','Redis','Docker','GitHub Actions','Cloudflare'],
    externalUrl:'https://play.google.com/store/apps/details?id=com.jameelaa.app',
    gallery:[
      {src:'/projects/jameelaa/01-product.svg',alt:'Editorial concept illustration of Jameelaa on a mobile device',caption:'Product experience · editorial concept, not an actual app screenshot',kind:'editorial'},
      {src:'/projects/jameelaa/02-workflows.svg',alt:'Architecture diagram of booking flow and application services',caption:'Booking & workflow structure · simplified editorial diagram',kind:'editorial'},
      {src:'/projects/jameelaa/03-jobs.svg',alt:'System illustration showing workers queues and PostgreSQL',caption:'Background processing & data · conceptual diagram',kind:'editorial'},
      {src:'/projects/jameelaa/04-delivery.svg',alt:'Development deployment and observability pipeline illustration',caption:'Delivery and operations · simplified editorial diagram',kind:'editorial'},
    ],
  },
];
