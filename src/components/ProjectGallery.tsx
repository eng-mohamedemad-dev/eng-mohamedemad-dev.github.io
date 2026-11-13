'use client';

import {useEffect,useRef,useState} from 'react';
import type {GalleryImage} from '@/content/projects';
import {asset} from '@/lib/site';

export function ProjectGallery({images,projectTitle}: {images:readonly GalleryImage[];projectTitle:string}){
 const [index,setIndex]=useState<number|null>(null);
 const ref=useRef<HTMLButtonElement>(null);
 const touchStart=useRef<number|null>(null);
 const total=images.length;
 useEffect(()=>{
  if(index===null)return;
  const previousOverflow=document.body.style.overflow;
  document.body.style.overflow='hidden';
  const onKey=(event:KeyboardEvent)=>{
   if(event.key==='Escape')setIndex(null);
   else if(event.key==='ArrowRight')setIndex(i=>i===null?i:(i+1)%total);
   else if(event.key==='ArrowLeft')setIndex(i=>i===null?i:(i-1+total)%total);
  };
  window.addEventListener('keydown',onKey);
  return ()=>{document.body.style.overflow=previousOverflow;window.removeEventListener('keydown',onKey);ref.current?.focus()};
 },[index,total]);
 return <>
  <div className="gallery-grid" aria-label="Project gallery">
   {images.map((img,i)=><button key={img.src} className={`gallery-tile gallery-tile-${i}`} onClick={()=>setIndex(i)} aria-label={`Open gallery image ${i+1}: ${img.alt}`}>
     <img src={asset(img.src)} alt={img.alt} loading={i<2?'eager':'lazy'} decoding="async"/>
     <span className="gallery-tile-caption"><span>{String(i+1).padStart(2,'0')} / {String(total).padStart(2,'0')}</span><span>{img.caption}</span><span aria-hidden>↗</span></span>
   </button>)}
  </div>
  {index!==null && <div className="lightbox" role="presentation" onClick={()=>setIndex(null)}>
   <div className="lightbox-panel" role="dialog" aria-modal="true" aria-label="Project image gallery" onClick={e=>e.stopPropagation()}
      onTouchStart={e=>{touchStart.current=e.touches[0]?.clientX??null}}
      onTouchEnd={e=>{const start=touchStart.current;touchStart.current=null;if(start===null)return;const delta=e.changedTouches[0]?.clientX-start;if(Math.abs(delta)>45)setIndex(i=>i===null?i:(i+(delta<0?1:-1)+total)%total)}}>
    <div className="lightbox-header"><span>{String(index+1).padStart(2,'0')} / {String(total).padStart(2,'0')} &nbsp;—&nbsp; {projectTitle.toUpperCase()}</span><button ref={ref} autoFocus onClick={()=>setIndex(null)} aria-label="Close gallery">Close ×</button></div>
    <div className="lightbox-image"><button onClick={()=>setIndex((index-1+total)%total)} aria-label="Previous image" className="lightbox-arrow">←</button><img src={asset(images[index].src)} alt={images[index].alt}/><button onClick={()=>setIndex((index+1)%total)} aria-label="Next image" className="lightbox-arrow">→</button></div>
    <p>{images[index].caption}</p>
   </div>
  </div>}
 </>;
}
