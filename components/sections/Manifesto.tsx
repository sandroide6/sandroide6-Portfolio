'use client';

import { useEffect, useRef } from 'react';
import { manifesto } from '@/lib/content';
import { gsap, prefersReducedMotion } from '@/lib/gsap';

export default function Manifesto() {
  const root = useRef<HTMLElement>(null);
  const words = manifesto.text.split(' ');

  useEffect(() => {
    const el = root.current;
    if (!el || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.to('.w', {
        color: '#ffffff',
        stagger: 0.1,
        ease: 'none',
        scrollTrigger: { trigger: el, start: 'top 75%', end: 'bottom 70%', scrub: true },
      });
      gsap.to('.beam', {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: { trigger: el, start: 'top 80%', end: 'center 40%', scrub: true },
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section className="manifesto" id="manifiesto" ref={root}>
      <div className="beam" aria-hidden="true" />
      <div className="wrap">
        <h2 aria-label={manifesto.text}>
          {words.map((w, i) => (
            <span key={i} aria-hidden="true">
              <span className="w">{w}</span>
              {w === manifesto.iconAfter && (
                <>
                  {' '}
                  <svg className="ico" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="8.5" stroke="#F0577D" />
                    <circle cx="10" cy="10" r="3" fill="#D11F4B" />
                  </svg>
                </>
              )}
              {i < words.length - 1 ? ' ' : ''}
            </span>
          ))}
        </h2>
        <p className="sub">{manifesto.sub}</p>
      </div>
    </section>
  );
}
