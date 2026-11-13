'use client';

import {useEffect,useState} from 'react';
import {PROFILE} from '@/lib/profile';
import {ThemeToggle} from './ThemeToggle';
import {WhatsAppIcon} from './SocialLinks';

const links = [
  {href:'#work',title:'Projects'},
  {href:'#experience',title:'Experience'},
  {href:'#expertise',title:'Expertise'},
  {href:'#about',title:'About'},
  {href:'#contact',title:'Contact'},
] as const;
export function DarkNavigation(){
  const [open,setOpen] = useState(false);
  useEffect(()=>{
    if(!open)return;
    function onKey(e:KeyboardEvent){if(e.key==='Escape')setOpen(false);}
    function onResize(){if(window.innerWidth>760)setOpen(false);}
    document.addEventListener('keydown',onKey);
    window.addEventListener('resize',onResize);
    return ()=>{document.removeEventListener('keydown',onKey);window.removeEventListener('resize',onResize);};
  },[open]);
  return <header className="dark-header" id="top">
    <div className="dark-container dark-nav">
      <a className="dark-brand" href="#top" aria-label="Mohamed Emad homepage"><span className="dark-brand-symbol" aria-hidden="true">&lt;/&gt;</span>Mohamed Emad</a>
      <nav className="dark-desktop-nav" aria-label="Primary navigation">{links.map((l,i)=><a key={l.href} className={i===0?'dark-current':undefined} href={l.href}>{l.title}</a>)}</nav>
      <ThemeToggle edition="dark"/><a className="dark-cv" href={PROFILE.cv} target="_blank" rel="noopener noreferrer">View CV <span aria-hidden="true">↗</span></a>
      <button className={`dark-menu-button${open?' is-open':''}`} type="button" onClick={()=>setOpen(v=>!v)} aria-expanded={open} aria-controls="dark-mobile-menu" aria-label={open?'Close navigation':'Open navigation'}>
        <span/><span/><span/>
      </button>
    </div>
    <nav id="dark-mobile-menu" className={`dark-mobile-nav${open?' is-open':''}`} aria-label="Mobile navigation" inert={!open}>
      <a href={PROFILE.whatsapp} target="_blank" rel="noopener noreferrer" onClick={()=>setOpen(false)} aria-label="Chat on WhatsApp">WhatsApp <WhatsAppIcon/></a>
      {links.map(l=><a key={l.href} href={l.href} onClick={()=>setOpen(false)}>{l.title}<span aria-hidden="true">↗</span></a>)}
      <a href={PROFILE.cv} target="_blank" rel="noopener noreferrer" onClick={()=>setOpen(false)}>View CV <span aria-hidden="true">↗</span></a>
    </nav>
  </header>;
}
