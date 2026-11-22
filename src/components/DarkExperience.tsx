import Link from 'next/link';
import {PROFILE} from '@/lib/profile';
import {PROJECTS} from '@/content/projects';
import {asset} from '@/lib/site';
import {AdditionalProjects} from './AdditionalProjects';
import {DarkNavigation} from './DarkNavigation';
import {SocialLinks,WhatsAppIcon} from './SocialLinks';
import {ScrollReveals} from './ScrollReveals';

const expertise = [
  {num:'01',icon:'⌘',title:'Full-stack development',detail:'Responsive products, thoughtful interfaces and resilient backend systems.',stack:'React · Vue · Laravel · Node.js'},
  {num:'02',icon:'⌁',title:'APIs & architecture',detail:'Clear boundaries, maintainable contracts and systems built to evolve.',stack:'REST APIs · PostgreSQL · Redis'},
  {num:'03',icon:'↗',title:'DevOps & delivery',detail:'Reliable releases, observable services and practical infrastructure.',stack:'Docker · CI/CD · Linux · Cloudflare'},
  {num:'04',icon:'◇',title:'System design',detail:'From the first requirement to the production-ready product.',stack:'Scalability · Reliability · Security'},
];
const toolbox = [
  {area:'Web interfaces', tools:'React · Vue · TypeScript'},
  {area:'APIs and data', tools:'Laravel · Node.js · PostgreSQL · Redis'},
  {area:'Delivery and operations', tools:'Docker · GitHub Actions · Linux · Cloudflare'},
];
export function DarkExperience({workBase='/work'}:{workBase?:string}={}){
  const featured=PROJECTS[0];
  return <div className="edition-dark">
    <a className="dark-skip" href="#main">Skip to content</a>
    <DarkNavigation/>
    <main id="main">
      <section className="amber-hero dark-container" aria-labelledby="dark-hero-title">
        <div className="amber-intro">
          <p className="amber-credit">Mohamed Emad <span>/</span> Software engineer</p>
          <h1 id="dark-hero-title">From first<br/>commit to<br/><em>production.</em></h1>
          <p className="amber-lede">I build full-stack products and run the infrastructure behind them. My work spans Laravel APIs, web interfaces and production releases.</p>
          <div className="dark-hero-cta">
            <a href="#work" className="dark-button dark-button-primary">Explore my work</a>
            <a href={PROFILE.whatsapp} target="_blank" rel="noopener noreferrer" className="dark-button dark-button-outline"><WhatsAppIcon/> WhatsApp</a>
          </div>
        </div>
        <figure className="amber-frame">
          <img src={asset('/dark/workspace.webp')} alt="Warmly lit development workstation" width={900} height={660} fetchPriority="high"/>
          <figcaption>
            <span>Project spotlight</span>
            <Link href={`${workBase}/${featured.slug}/`}>{featured.title} <small>Engineering case study</small></Link>
          </figcaption>
        </figure>
      </section>
      <section id="work" className="dark-work dark-section dark-container" aria-labelledby="dark-work-title">
        <div className="dark-section-heading"><div><span className="dark-section-label"><i/>01 — SELECTED WORK</span><h2 id="dark-work-title">Inside <em>{featured.title}.</em></h2></div></div>
        <article className="dark-feature">
          <Link href={`${workBase}/${featured.slug}/`} className="dark-feature-image" aria-label="Read Jameelaa engineering case study"><img src={asset(featured.gallery[0].src)} alt={featured.gallery[0].alt} loading="lazy"/><span className="dark-image-label">EDITORIAL CONCEPT · NOT A PRODUCT SCREENSHOT</span></Link>
          <div className="dark-feature-info"><span className="dark-feature-overline"><span className="dark-feature-spot"/>BOOKING PLATFORM</span><h3>{featured.title}<span>.</span></h3><p>{featured.overview}</p>
            <div className="dark-feature-tags">{featured.stack.slice(0,5).map(t=><span key={t}>{t}</span>)}</div>
            <div className="dark-feature-links"><Link href={`${workBase}/${featured.slug}/`}>Explore the case study <span aria-hidden="true">↗</span></Link><a href={featured.externalUrl} target="_blank" rel="noopener noreferrer">Live product ↗</a></div>
          </div>
        </article>
        <p className="dark-work-note">My role covered full-stack engineering, backend architecture, release pipelines and production operations. I worked alongside the Flutter developer on the mobile product.</p>
      </section>
      <AdditionalProjects edition="dark" workBase={workBase}/>
      <section id="experience" className="dark-experience dark-section">
        <div className="dark-container">
          <div className="dark-section-heading"><div><span className="dark-section-label"><i/>02 — EXPERIENCE</span><h2>More than <em>code.</em></h2></div></div>
          <div className="dark-journey">
            <div className="dark-journey-item"><span className="dark-journey-dot"/><span className="dark-journey-key">PRODUCT ENGINEERING</span><div><h3>Full-stack engineering & production delivery</h3><p>Building and operating real products, including Jameelaa, across frontend, backend and infrastructure.</p></div><span className="dark-journey-side">END TO END ↗</span></div>
            <div className="dark-journey-item"><span className="dark-journey-dot"/><span className="dark-journey-key">CLIENT & TEAM WORK</span><div><h3>Software projects across multiple domains</h3><p>Experience with business systems, commerce, education, booking products and tailored client requirements.</p></div><span className="dark-journey-side">MULTI-DOMAIN ↗</span></div>
          </div>
        </div>
      </section>
      <section id="expertise" className="dark-expertise dark-section dark-container">
        <div className="dark-section-heading"><div><span className="dark-section-label"><i/>03 — CAPABILITIES</span><h2>What I bring <em>to the build.</em></h2></div></div>
        <div className="dark-expertise-grid">{expertise.map(item=><article key={item.num} className="dark-expertise-card"><div className="dark-expertise-top"><span className="dark-expertise-icon">{item.icon}</span><span>{item.num} / 04</span></div><h3>{item.title}</h3><p>{item.detail}</p><div className="dark-expertise-stack">{item.stack}</div></article>)}</div>
      </section>
      <section className="dark-technology dark-section">
        <div className="dark-container"><div className="dark-section-heading"><div><span className="dark-section-label"><i/>04 — TOOLBOX</span><h2>My working <em>stack.</em></h2></div></div>
          <dl className="amber-stack">{toolbox.map(group=><div key={group.area}><dt>{group.area}</dt><dd>{group.tools}</dd></div>)}</dl>
        </div>
      </section>
      <section id="about" className="dark-about dark-container dark-section">
        <div className="dark-about-grid"><div><span className="dark-section-label"><i/>05 — ABOUT</span><h2>Build it well.<br/><em>Keep it running.</em></h2></div><div><p>Good engineering takes more than choosing a framework. It means understanding the problem, protecting existing users, shipping deliberately and taking responsibility for what runs in production.</p><p>That end-to-end mindset shapes how I approach projects, whether I&apos;m building a new feature or improving the system behind it.</p><a href={PROFILE.cv} target="_blank" rel="noopener noreferrer" className="dark-about-link">View my CV ↗</a></div></div>
      </section>
      <section id="contact" className="dark-contact dark-container">
        <div className="dark-contact-inner"><div><span className="dark-section-label"><i/>06 — HAVE SOMETHING IN MIND?</span><h2>Let&apos;s make it <em>work.</em></h2><p>Have a product to build or a technical problem to solve? Let&apos;s talk.</p><SocialLinks className="dark-contact-channels"/></div><a href={PROFILE.whatsapp} target="_blank" rel="noopener noreferrer" className="dark-button dark-button-primary">Chat on WhatsApp <WhatsAppIcon/></a></div>
      </section>
    </main>
    <footer className="dark-footer"><div className="dark-container dark-footer-inner"><span>© {new Date().getFullYear()} Mohamed Emad</span><div><a href={PROFILE.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp ↗</a><a href={PROFILE.facebook} target="_blank" rel="noopener noreferrer">Facebook ↗</a><a href={PROFILE.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href={PROFILE.mailto}>Email ↗</a></div><a href="#top">Back to top ↑</a></div></footer>
    <ScrollReveals edition="dark"/>
  </div>;
}
