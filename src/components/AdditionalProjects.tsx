import Link from 'next/link';
import {projectRepository} from '@/lib/projects';

/** New approved projects appear in both editions from the shared content repository. */
export function AdditionalProjects({edition}:{edition:'classic'|'evolved'|'dark'}){
 const rest=projectRepository.list().slice(1);
 if(!rest.length)return null;
 return <section className={`auto-projects auto-${edition}`} aria-label="More selected work">
   <div className="auto-projects-inner"><div className="auto-projects-heading"><span>MORE SELECTED WORK</span><h2>The next chapter<em>.</em></h2></div>
   <div className="auto-projects-grid">{rest.map((project,i)=><Link key={project.slug} href={`/work/${project.slug}/`} className="auto-project-card">
    <span>{String(i+2).padStart(3,'0')} / PROJECT</span><h3>{project.title}<em>.</em></h3><p>{project.lead}</p><div className="auto-project-stack">{project.stack.slice(0,3).map(s=><span key={s}>{s}</span>)}</div><b>Explore the case study ↗</b>
   </Link>)}</div></div>
 </section>;
}
