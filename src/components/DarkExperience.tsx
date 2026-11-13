import Link from 'next/link';
import {PROFILE} from '@/lib/profile';
import {PROJECTS} from '@/content/projects';
import {asset} from '@/lib/site';
import {AdditionalProjects} from './AdditionalProjects';
import {DarkNavigation} from './DarkNavigation';

const expertise = [
  {num:'01',icon:'⌘',title:'Full-stack development',detail:'Responsive products, thoughtful interfaces and resilient backend systems.',stack:'React · Vue · Laravel · Node.js'},
  {num:'02',icon:'⌁',title:'APIs & architecture',detail:'Clear boundaries, maintainable contracts and systems built to evolve.',stack:'REST APIs · PostgreSQL · Redis'},
  {num:'03',icon:'↗',title:'DevOps & delivery',detail:'Reliable releases, observable services and practical infrastructure.',stack:'Docker · CI/CD · Linux · Cloudflare'},
  {num:'04',icon:'◇',title:'System design',detail:'From the first requirement to the production-ready product.',stack:'Scalability · Reliability · Security'},
];
const technologies = [
  {name:'Laravel',mark:'L',tone:'red'}, {name:'React',mark:'⚛',tone:'cyan'}, {name:'Vue',mark:'V',tone:'green'},
  {name:'Node.js',mark:'N',tone:'green'}, {name:'PostgreSQL',mark:'Pg',tone:'blue'}, {name:'Redis',mark:'R',tone:'red'},
  {name:'Docker',mark:'D',tone:'cyan'}, {name:'GitHub Actions',mark:'GH',tone:'muted'}, {name:'Linux',mark:'>',tone:'orange'},
];
export function DarkExperience(){
  const featured=PROJECTS[0];
  return <div className="edition-dark">
    <a className="dark-skip" href="#main">Skip to content</a>
    <DarkNavigation/>
    <main id="main">
      <section className="dark-hero" aria-labelledby="dark-hero-title">
        <div className="dark-hero-photo" style={{backgroundImage:`url(${asset('/dark/workspace.webp')})`}} role="img" aria-label="Warmly lit software development workspace with laptop"/>
        <div className="dark-hero-shade"/>
        <div className="dark-container dark-hero-content">
          <span className="dark-eyebrow"><span className="dark-pulse"/>FULL-STACK · BACKEND · DEVOPS</span>
          <p className="dark-kicker">Hi, I’m Mohamed Emad.</p>
          <h1 id="dark-hero-title">Engineering<br/><span>what&apos;s next.</span></h1>
          <p className="dark-hero-description">I build digital products from first idea to production — thoughtful interfaces, reliable backends, and infrastructure that keeps them running.</p>
          <div className="dark-hero-cta">
            <a href="#work" className="dark-button dark-button-primary">Explore my work <span aria-hidden="true">↗</span></a>
            <a href={PROFILE.mailto} className="dark-button dark-button-outline">Get in touch <span aria-hidden="true">✉</span></a>
          </div>
          <div className="dark-social" aria-label="Professional profiles">
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          </div>
        </div>
        <div className="dark-hero-scroll"><span>SCROLL TO EXPLORE</span><span aria-hidden="true">↓</span></div>
      </section>
      <section id="work" className="dark-work dark-section dark-container" aria-labelledby="dark-work-title">
        <div className="dark-section-heading"><div><span className="dark-section-label"><i/>01 — SELECTED WORK</span><h2 id="dark-work-title">Real work. <em>Real impact.</em></h2></div><span className="dark-subtle">BUILDING BEYOND THE INTERFACE</span></div>
        <article className="dark-feature">
          <Link href="/work/jameelaa/" className="dark-feature-image" aria-label="Read Jameelaa engineering case study"><img src={asset(featured.gallery[0].src)} alt={featured.gallery[0].alt} loading="lazy"/><span className="dark-image-label">EDITORIAL CONCEPT · NOT A PRODUCT SCREENSHOT</span></Link>
          <div className="dark-feature-info"><span className="dark-feature-overline"><span className="dark-feature-spot"/>FEATURED CASE STUDY · 001</span><h3>{featured.title}<span>.</span></h3><p>{featured.overview}</p>
            <div className="dark-feature-tags">{featured.stack.slice(0,5).map(t=><span key={t}>{t}</span>)}</div>
            <div className="dark-feature-links"><Link href="/work/jameelaa/">Explore the case study <span aria-hidden="true">↗</span></Link><a href={featured.externalUrl} target="_blank" rel="noopener noreferrer">Live product ↗</a></div>
          </div>
        </article>
        <p className="dark-work-note">Selected work spans product engineering, backend systems, deployment and ongoing operations — not just the screens.</p>
      </section>
      <AdditionalProjects edition="dark"/>
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
        <div className="dark-container"><div className="dark-section-heading"><div><span className="dark-section-label"><i/>04 — TOOLBOX</span><h2>Tools are a means. <em>Outcomes matter.</em></h2></div></div>
          <div className="dark-tech-grid">{technologies.map(t=><div key={t.name} className="dark-tech-item"><span className={`dark-tech-icon tone-${t.tone}`}>{t.mark}</span><span>{t.name}</span></div>)}</div></div>
      </section>
      <section id="about" className="dark-about dark-container dark-section">
        <div className="dark-about-grid"><div><span className="dark-section-label"><i/>05 — ABOUT</span><h2>Build it well.<br/><em>Keep it running.</em></h2></div><div><p>Good engineering takes more than choosing a framework. It means understanding the problem, protecting existing users, shipping deliberately and taking responsibility for what runs in production.</p><p>That end-to-end mindset shapes how I approach projects, whether I&apos;m building a new feature or improving the system behind it.</p><a href={PROFILE.cv} target="_blank" rel="noopener noreferrer" className="dark-about-link">View my CV ↗</a></div></div>
      </section>
      <section id="contact" className="dark-contact dark-container">
        <div className="dark-contact-inner"><div><span className="dark-section-label"><i/>06 — HAVE SOMETHING IN MIND?</span><h2>Let&apos;s make it <em>work.</em></h2><p>Have a product to build or a technical problem to solve? Let&apos;s talk.</p></div><a href={PROFILE.mailto} className="dark-button dark-button-primary">Start a conversation <span aria-hidden="true">↗</span></a></div>
      </section>
    </main>
    <footer className="dark-footer"><div className="dark-container dark-footer-inner"><span>© {new Date().getFullYear()} Mohamed Emad</span><div><a href={PROFILE.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href={PROFILE.mailto}>Email ↗</a></div><a href="#top">Back to top ↑</a></div></footer>
  </div>;
}
