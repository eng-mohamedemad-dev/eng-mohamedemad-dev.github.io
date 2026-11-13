import Link from 'next/link';
import {PROFILE} from '@/lib/profile';
import type {Project} from '@/content/projects';
import type {PortfolioEdition} from '@/config/portfolio';
import {ProjectGallery} from './ProjectGallery';
import JameelaaStory from '@/content/projects/jameelaa.mdx';
const STORIES:Record<string,typeof JameelaaStory>={jameelaa:JameelaaStory};

export function CaseStudy({project,edition}:{project:Project;edition:PortfolioEdition}) {
 const Story=STORIES[project.slug];
 const back='/';
 return <div className={`case-study case-study-${edition}`}>
   <div className="case-topline"/>
   <header className="case-nav container">
    <Link href={back} className="case-brand"><span className="brand-mark">m<span className="brand-dot">.</span></span> Mohamed Emad</Link>
    <nav aria-label="Case study navigation"><Link href={back}>← Back to work</Link></nav>
   </header>
   <main>
     <section className="case-hero container">
       <div className="case-index"><span>CASE STUDY / 001</span><span>{project.category}</span></div>
       <h1>{project.title}<em>.</em></h1>
       <div className="case-intro"><p>{project.lead}</p><div className="case-summary"><span>ROLE / RESPONSIBILITY</span><p>{project.role}</p>{project.externalUrl&&<a href={project.externalUrl} target="_blank" rel="noopener noreferrer">View live product ↗</a>}</div></div>
     </section>
     <section className="case-gallery-section" aria-label="Project visual gallery"><div className="container"><div className="case-label"><span>01 / THE PROJECT, VISUALLY</span><span>Tap to explore · Swipe on mobile</span></div><ProjectGallery images={project.gallery} projectTitle={project.title}/><p className="visual-disclaimer">The visuals above are illustrative concepts and simplified technical diagrams, not captured screenshots of the published product. Replace them with approved assets before final publication.</p></div></section>
     <div className="container case-contents"><aside className="case-contents-side"><span>02 / BEHIND THE WORK</span><p>Built to ship.<br/>Built to last.</p><div className="case-tags">{project.stack.map(x=><span key={x}>{x}</span>)}</div></aside><article className="case-prose">{Story?<Story/>:<p>Editorial story is being prepared.</p>}</article></div>
     <section className="case-next"><div className="container"><span>03 / WHAT'S NEXT</span><h2>Good systems<br/><em>keep evolving.</em></h2><Link href={back}>Explore more work ↗</Link></div></section>
   </main>
   <footer className="case-footer container"><span>© {new Date().getFullYear()} MOHAMED EMAD</span><a href={PROFILE.mailto}>EMAIL ↗</a><a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">LINKEDIN ↗</a><a href={PROFILE.github} target="_blank" rel="noopener noreferrer">GITHUB ↗</a><a href={PROFILE.cv} target="_blank" rel="noopener noreferrer">VIEW CV ↗</a><Link href={back}>BACK TO THE PORTFOLIO ↑</Link></footer>
 </div>;
}
