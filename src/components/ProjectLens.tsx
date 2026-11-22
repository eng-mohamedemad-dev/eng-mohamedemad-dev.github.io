'use client';

import {useState} from 'react';
import {asset} from '@/lib/site';
import type {Project} from '@/content/projects';

/** Each view pairs an existing case-study illustration with the engineering decision it depicts. */
const lenses = [
  {file:'02-workflows.svg', name:'Bookings', note:'Booking and payment states have to agree, even when a confirmation arrives later.'},
  {file:'03-jobs.svg', name:'Queues', note:'Background workers handle tasks outside the request so product flows can keep moving.'},
  {file:'04-delivery.svg', name:'Delivery', note:'Automated checks and a rollback path make releases repeatable.'},
];

export function ProjectLens({project}:{project:Project}) {
  const views=lenses.flatMap(lens=>{
    const image=project.gallery.find(item=>item.src.endsWith('/'+lens.file));
    return image ? [{...lens,image}] : [];
  });
  const [selected,setSelected]=useState(0);
  const view=views[selected] ?? views[0];
  if(!view) return null;
  return <aside className="project-lens" aria-label={project.title+' engineering views'}>
    <div className="lens-heading"><span>Engineering notebook</span><strong>{project.title}</strong></div>
    <div className="lens-image"><img key={view.file} src={asset(view.image.src)} width={1200} height={720} alt={view.image.alt}/></div>
    <div className="lens-controls" role="group" aria-label="Explore the project">
      {views.map((item,i)=><button key={item.file} type="button" aria-pressed={i===selected} onClick={()=>setSelected(i)}>{item.name}</button>)}
    </div>
    <p className="lens-note" aria-live="polite">{view.note}</p>
  </aside>;
}
