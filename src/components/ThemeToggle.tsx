'use client';

import {useLayoutEffect,useState} from 'react';
import type {PortfolioEdition} from '@/config/portfolio';

const DEFAULT_THEME:Record<PortfolioEdition,'light'|'dark'>={classic:'light',evolved:'light',dark:'dark',fieldnotes:'light'};
function Icon({theme}:{theme:'light'|'dark'}) {
  return theme==='dark'
    ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.9 13A9 9 0 0 1 11 3.1a9 9 0 1 0 9.9 9.9Z"/></svg>
    : <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>;
}

/** Visual preferences are local to the visitor and saved per edition, not an edition switcher. */
export function ThemeToggle({edition}:{edition:PortfolioEdition}) {
  const [theme,setTheme]=useState<'light'|'dark'>(DEFAULT_THEME[edition]);
  useLayoutEffect(()=>{
    const el=document.querySelector<HTMLElement>(`.edition-${edition}`) ?? document.querySelector<HTMLElement>(`.case-study-${edition}`);
    let saved:string|null=null;
    try{saved=window.localStorage.getItem(`mohamed-emad:theme:${edition}`)}catch{/* storage can be disabled */}
    const selected=saved==='light'||saved==='dark'?saved:DEFAULT_THEME[edition];
    el?.setAttribute('data-theme',selected);
    setTheme(selected);
  },[edition]);
  function toggle(){
    const selected=theme==='dark'?'light':'dark';
    document.querySelector<HTMLElement>(`.edition-${edition}`)?.setAttribute('data-theme',selected);
    document.querySelector<HTMLElement>(`.case-study-${edition}`)?.setAttribute('data-theme',selected);
    try{window.localStorage.setItem(`mohamed-emad:theme:${edition}`,selected)}catch{/* storage can be disabled */}
    setTheme(selected);
  }
  return <button type="button" className="portfolio-theme-toggle" data-current-theme={theme} onClick={toggle} aria-label={`Switch to ${theme==='dark'?'light':'dark'} mode`} title={`Switch to ${theme==='dark'?'light':'dark'} mode`} aria-pressed={theme==='dark'}>
    <Icon theme={theme}/><span className="sr-theme-label">{theme==='dark'?'Dark mode':'Light mode'}</span>
  </button>;
}
