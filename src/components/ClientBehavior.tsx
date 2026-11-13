'use client';

import { useEffect } from 'react';

const steps = [
  {kicker:'01 / GOOD PRODUCTS START WITH CLARITY',title:'Build the right thing before building everything.',description:'Understand the problem, map the flows, and choose the smallest system that can do the job properly. Complexity should earn its place.',nodes:['DISCOVER','DESIGN','BUILD','RUN']},
  {kicker:'02 / SYSTEMS THAT CAN CHANGE SAFELY',title:'Design for real use, not just the happy path.',description:'Clear boundaries, reliable APIs, background work, and data models that can evolve without surprising products already in use.',nodes:['CLIENT','API','QUEUE','DATA']},
  {kicker:'03 / EVERY RELEASE IS AN ENGINEERING DECISION',title:'Shipping should be boring. In the best way.',description:'Versioned changes, automated tests, deliberate deployments, and a clear way back if a release does not behave as expected.',nodes:['COMMIT','TEST','DEPLOY','VERIFY']},
  {kicker:'04 / THE JOB DOES NOT END AT DEPLOY',title:'Watch it. Understand it. Keep it healthy.',description:'Observability, security, operational discipline, and incident readiness help keep a product dependable.',nodes:['LOGS','METRICS','ALERTS','IMPROVE']},
] as const;

export function ClientBehavior({ edition }: {edition:'classic'|'evolved'}) {
  useEffect(() => {
    const root=document.querySelector<HTMLElement>(`.edition-${edition}`);
    if(!root) return;
    const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const reveals=Array.from(root.querySelectorAll<HTMLElement>('.reveal'));
    if (reduced || !('IntersectionObserver' in window)) reveals.forEach(el=>el.classList.add('show','is-visible'));
    const observer=(!reduced && 'IntersectionObserver' in window) ? new IntersectionObserver(entries=>{
      for(const entry of entries) if(entry.isIntersecting){entry.target.classList.add('show','is-visible');observer.unobserve(entry.target)}
    },{threshold:.06,rootMargin:'0px 0px 28px 0px'}):null;
    reveals.forEach(el=>observer?.observe(el));

    if(edition==='classic') return () => observer?.disconnect();
    const progress=root.querySelector<HTMLElement>('#scroll-progress');
    const menuButton=root.querySelector<HTMLButtonElement>('#menu-toggle');
    const menu=root.querySelector<HTMLElement>('#mobile-menu');
    const menuLabel=root.querySelector<HTMLElement>('#menu-toggle-text');
    let raf=0;
    const updateScroll=()=>{
      const max=Math.max(1,document.documentElement.scrollHeight-window.innerHeight);
      if(progress)progress.style.width=(window.scrollY/max*100).toFixed(2)+'%';
      raf=0;
    };
    const onScroll=()=>{if(!raf)raf=requestAnimationFrame(updateScroll)};
    window.addEventListener('scroll',onScroll,{passive:true});
    window.addEventListener('resize',onScroll,{passive:true});updateScroll();
    const closeMenu=()=>{
      menu?.classList.remove('open');if(menu)menu.inert=true;
      menuButton?.setAttribute('aria-expanded','false');if(menuLabel)menuLabel.textContent='Menu';
    };
    const toggleMenu=()=>{
      const open=menu?.classList.toggle('open')??false;
      if(menu)menu.inert=!open;
      menuButton?.setAttribute('aria-expanded',String(open));if(menuLabel)menuLabel.textContent=open?'Close':'Menu';
    };
    const onKey=(event:KeyboardEvent)=>{if(event.key==='Escape')closeMenu()};
    const onResize=()=>{if(window.innerWidth>670)closeMenu()};
    const links=Array.from(menu?.querySelectorAll('a')??[]);
    menuButton?.addEventListener('click',toggleMenu);
    links.forEach(a=>a.addEventListener('click',closeMenu));
    window.addEventListener('keydown',onKey);
    window.addEventListener('resize',onResize);
    closeMenu();

    const buttons=Array.from(root.querySelectorAll<HTMLButtonElement>('.system-step'));
    const diagramNodes=Array.from(root.querySelectorAll<HTMLElement>('.process-node'));
    const updateStep=(index:number)=>{
      const step=steps[index];if(!step)return;
      buttons.forEach((btn,i)=>btn.setAttribute('aria-pressed',String(i===index)));
      const kicker=root.querySelector('#panel-kicker');const title=root.querySelector('#panel-title');const desc=root.querySelector('#panel-description');
      if(kicker)kicker.textContent=step.kicker;
      if(title)title.textContent=step.title;
      if(desc)desc.textContent=step.description;
      diagramNodes.forEach((node,i)=>{node.textContent=step.nodes[i];node.classList.toggle('active',i===index)});
    };
    const handlers=buttons.map((button,i)=>{const callback=()=>updateStep(i);button.addEventListener('click',callback);return callback});
    const year=root.querySelector('#current-year');if(year)year.textContent=String(new Date().getFullYear());

    return ()=>{
      observer?.disconnect();cancelAnimationFrame(raf);
      window.removeEventListener('scroll',onScroll);window.removeEventListener('resize',onScroll);
      window.removeEventListener('keydown',onKey);window.removeEventListener('resize',onResize);
      menuButton?.removeEventListener('click',toggleMenu);links.forEach(a=>a.removeEventListener('click',closeMenu));
      buttons.forEach((btn,i)=>btn.removeEventListener('click',handlers[i]));
    };
  },[edition]);
  return null;
}
