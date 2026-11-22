import Link from 'next/link';
import {PROFILE} from '@/lib/profile';
import {asset} from '@/lib/site';
import {projectRepository} from '@/lib/projects';
import {ThemeToggle} from './ThemeToggle';
import {ScrollReveals} from './ScrollReveals';
import {SocialLinks, WhatsAppIcon} from './SocialLinks';

const notes = [
  {label:'API design', title:'Support the client already in someone’s pocket.', body:'A mobile update takes time to reach people. I keep existing API contracts working and introduce new fields in ways older clients can safely ignore.'},
  {label:'Background work', title:'Design for a second attempt.', body:'A job can run again and payment confirmations can arrive late. I work through those cases when shaping booking states, queues and database updates.'},
  {label:'Release engineering', title:'Plan the way back before the rollout.', body:'I pair automated checks with controlled deployments, monitoring and a rollback path. The work continues after the release goes live.'},
];

export function FieldnotesExperience({workBase='/work'}:{workBase?:string}={}) {
  const projects=projectRepository.list();
  return <div className="edition-fieldnotes" id="top">
    <a className="edition-skip" href="#field-main">Skip to content</a>
    <header className="field-mast field-wrap">
      <a className="field-brand" href="#top"><span className="field-monogram" aria-hidden="true">me</span> Mohamed Emad</a>
      <nav aria-label="Main navigation"><a href="#work">Work</a><a href="#notes">Field notes</a><a href="#contact">Contact</a></nav>
      <ThemeToggle edition="fieldnotes"/>
    </header>
    <main id="field-main">
      <section className="field-cover field-wrap" aria-labelledby="field-title">
        <div className="field-cover-copy">
          <p className="field-label">Full-stack &amp; DevOps engineer</p>
          <h1 id="field-title">Software<br/>in the <em>field.</em></h1>
          <p className="field-lede">I’m Mohamed Emad. I design APIs, build web products and look after the systems they run on.</p>
          <div className="field-actions"><a className="field-button" href="#work">Explore my work</a><a className="field-text" href={PROFILE.cv} target="_blank" rel="noopener noreferrer">View CV</a></div>
        </div>
        <div className="field-art"><img src={asset('/fieldnotes/terrain.webp')} srcSet={asset('/fieldnotes/terrain-small.webp')+' 480w, '+asset('/fieldnotes/terrain.webp')+' 960w'} sizes="(min-width: 1250px) 620px, (min-width: 740px) 50vw, 100vw" width={960} height={960} alt="" fetchPriority="high"/></div>
      </section>
      <section className="field-chapter field-work" id="work" aria-labelledby="field-work-title">
        <div className="field-wrap">
          <div className="field-heading"><p className="field-label">Selected work</p><h2 id="field-work-title">From the <em>portfolio.</em></h2></div>
          {projects.map(project=><article key={project.slug} className="field-case">
            {project.gallery[0] && <Link className="field-case-image" href={`${workBase}/${project.slug}/`} aria-label={'Read the '+project.title+' case study'}><img src={asset(project.gallery[0].src)} alt={project.gallery[0].alt} width={1200} height={720} loading="lazy"/></Link>}
            <div className="field-case-copy"><p className="field-label">{project.status}</p><h3>{project.title}</h3><p>{project.lead}</p><ul aria-label="Project technologies">{project.stack.slice(0,5).map(item=><li key={item}>{item}</li>)}</ul>
              <Link className="field-text" href={`${workBase}/${project.slug}/`}>Read the case study</Link></div>
          </article>)}
        </div>
      </section>
      <section className="field-chapter field-wrap field-notes" id="notes" aria-labelledby="field-notes-title">
        <div className="field-heading"><p className="field-label">Engineering notes</p><h2 id="field-notes-title">Decisions from<br/>the <em>work.</em></h2></div>
        <div className="field-notebook">{notes.map(note=><details key={note.label}><summary><span>{note.label}</span><strong>{note.title}</strong></summary><p>{note.body}</p></details>)}</div>
      </section>
    </main>
    <footer className="field-contact" id="contact"><div className="field-wrap">
      <div className="field-contact-head"><div><p className="field-label">Get in touch</p><h2>What are you<br/><em>building?</em></h2></div><a className="field-button" href={PROFILE.whatsapp} target="_blank" rel="noopener noreferrer"><WhatsAppIcon/> Chat on WhatsApp</a></div>
      <SocialLinks className="field-social"/>
      <div className="field-colophon"><span>© {new Date().getFullYear()} Mohamed Emad</span><a className="field-text" href={PROFILE.github} target="_blank" rel="noopener noreferrer">GitHub</a><a className="field-text" href="#top">Back to top</a></div>
    </div></footer>
    <ScrollReveals edition="fieldnotes"/>
  </div>;
}
