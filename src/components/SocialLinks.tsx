import {PROFILE} from '@/lib/profile';

export function WhatsAppIcon({size=20}: {size?:number}) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20.2 11.7a8.2 8.2 0 0 1-12.1 7.2L3.7 20l1.2-4.2a8.2 8.2 0 1 1 15.3-4.1Z"/>
    <path d="M9.1 8.2c-.2-.5-.6-.6-.9-.3-.7.6-.6 1.8.2 3.1 1 1.8 2.5 3.1 4.3 3.8 1.4.6 2.5.5 3-.4.3-.4.1-.8-.3-1l-1.7-.7c-.3-.1-.6.1-.8.4l-.4.5a8 8 0 0 1-3.3-3.1l.5-.6c.2-.2.3-.5.1-.8Z"/>
  </svg>;
}
export function FacebookIcon({size=19}: {size?:number}) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.3 21v-7.4h2.5l.4-3h-2.9V8.7c0-.9.3-1.5 1.5-1.5h1.5V4.5c-.3 0-1.2-.1-2.3-.1-2.4 0-4 1.5-4 4.2v2H7.5v3H10V21h3.3Z"/></svg>;
}
export function LinkedInIcon({size=19}: {size?:number}) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5 8a1.8 1.8 0 1 0 0-3.6A1.8 1.8 0 0 0 5 8ZM3.5 9.3h3V20h-3V9.3Zm4.9 0h2.9v1.5h.1a3.2 3.2 0 0 1 2.9-1.7c3.1 0 3.7 2 3.7 4.6V20h-3v-5.5c0-1.3 0-2.9-1.8-2.9s-2.1 1.4-2.1 2.8V20h-3V9.3Z"/></svg>;
}
export function EmailIcon({size=19}: {size?:number}) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 7 8.5 6 8.5-6"/></svg>;
}

/** Shared public channels; WhatsApp gets the most prominent treatment, without an intrusive floating bubble. */
export function SocialLinks({className='',showEmail=true}:{className?:string;showEmail?:boolean}) {
  return <nav className={`contact-channels ${className}`} aria-label="Contact Mohamed Emad">
    <a className="contact-channel contact-channel-whatsapp" href={PROFILE.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat with Mohamed on WhatsApp"><WhatsAppIcon/><span>WhatsApp</span><span className="contact-channel-arrow" aria-hidden="true">↗</span></a>
    <a className="contact-channel" href={PROFILE.facebook} target="_blank" rel="noopener noreferrer" aria-label="Visit Mohamed's Facebook profile"><FacebookIcon/><span>Facebook</span></a>
    <a className="contact-channel" href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Visit Mohamed's LinkedIn profile"><LinkedInIcon/><span>LinkedIn</span></a>
    {showEmail && <a className="contact-channel" href={PROFILE.mailto} aria-label="Send Mohamed an email"><EmailIcon/><span>Email</span></a>}
  </nav>;
}
