'use client';
import {useLayoutEffect} from 'react';
import type {PortfolioEdition} from '@/config/portfolio';

const SELECTORS:Record<PortfolioEdition,string>={
  classic:'.reveal, .auto-project-card, .section-top, .detail, .approach-wrap > *, .footer-top, .contact-channels, .footer-bottom',
  evolved:'.reveal, .auto-project-card, .section-head, .secondary-card, .story-grid > div, .system-layout, .about-layout > div, .footer-lead, .contact-channels, .footer-bottom',
  dark:'.dark-section-heading, .dark-feature, .dark-work-note, .auto-project-card, .dark-journey-item, .dark-expertise-card, .dark-tech-item, .dark-about-grid > div, .dark-contact-inner, .dark-footer-inner',
};

/** Motion is progressive: content stays visible without JS, IntersectionObserver, or when reduced motion is requested. */
export function ScrollReveals({edition}:{edition:PortfolioEdition}) {
  useLayoutEffect(()=>{
    const root=document.querySelector<HTMLElement>(`.edition-${edition}`) ?? document.querySelector<HTMLElement>(`.case-study-${edition}`);
    if(!root)return;
    const targetSelector=root.classList.contains('case-study')
      ? '.case-hero, .gallery-tile, .case-contents-side, .case-prose > *, .case-next .container > *, .case-contact-channels'
      : SELECTORS[edition];
    const targets=Array.from(root.querySelectorAll<HTMLElement>(targetSelector));
    const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(reduced||!('IntersectionObserver' in window)){
      targets.forEach(el=>el.classList.add('is-visible'));
      return;
    }
    const observer=new IntersectionObserver((entries,currentObserver)=>{
      for(const entry of entries){
        if(entry.isIntersecting){entry.target.classList.add('is-visible');currentObserver.unobserve(entry.target);}
      }
    },{rootMargin:'0px 0px -25px 0px',threshold:0.06});
    targets.forEach((el,i)=>{
      el.classList.add('motion-target');
      const siblings=el.parentElement ? Array.from(el.parentElement.children).filter(node=>node.matches(targetSelector)) : [];
      const idx=siblings.indexOf(el);
      el.style.setProperty('--motion-delay',`${Math.min(idx<0?i%3:idx%4,3)*90}ms`);
      observer.observe(el);
    });
    root.classList.add('motion-ready');
    return()=>{
      observer.disconnect();
      root.classList.remove('motion-ready');
      targets.forEach(el=>{el.classList.remove('motion-target');el.style.removeProperty('--motion-delay');});
    };
  },[edition]);
  return null;
}
