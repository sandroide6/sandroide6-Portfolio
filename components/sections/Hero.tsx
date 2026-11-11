'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef } from 'react';
import { hero, profile } from '@/lib/content';
import PillLink from '@/components/ui/PillLink';
import { gsap, prefersReducedMotion } from '@/lib/gsap';
import type { ParticleControls } from '@/components/three/ParticleField';

const ParticleField = dynamic(() => import('@/components/three/ParticleField'), { ssr: false });

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const controls = useRef<ParticleControls>({ disperse: 0 });

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduce = prefersReducedMotion();
    const ctx = gsap.context(() => {
      if (!reduce) {
        gsap.from('.line-mask > span', { yPercent: 105, duration: 1.2, ease: 'expo.out', stagger: 0.08, delay: 0.15 });
        gsap.from('.hero-fade', { opacity: 0, y: 16, duration: 1, ease: 'expo.out', stagger: 0.1, delay: 0.5 });
      }
      gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
          onUpdate: (st) => (controls.current.disperse = reduce ? 0 : st.progress),
        },
      })
        .to('.hero-left', { xPercent: reduce ? 0 : -40, opacity: 0, ease: 'none' }, 0)
        .to('.hero-right', { xPercent: reduce ? 0 : 40, opacity: 0, ease: 'none' }, 0);
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="inicio" ref={root}>
      <div className="hero-light" aria-hidden="true" />
      <div className="hero-poster" aria-hidden="true" />
      <ParticleField className="hero-canvas" shape="core" offsetX={0.04} offsetXMobile={0} controls={controls} eventSource={root} />
      <div className="hero-vignette" aria-hidden="true" />
      <h1 className="sr-only">
        {profile.brand}: {hero.lineA.join(' ')} {hero.lineB.join(' ')}
      </h1>
      <div className="wrap hero-grid">
        <div className="hero-left">
          <span className="label hero-fade">{hero.label}</span>
          <p className="hero-title" aria-hidden="true">
            {hero.lineA.map((w) => (
              <span className="line-mask" key={w}>
                <span>{w}</span>
              </span>
            ))}
          </p>
          <div className="hero-fade">
            <PillLink href="#contacto" solid>
              Hablemos
            </PillLink>
          </div>
        </div>
        <div className="hero-right">
          <p className="hero-intro hero-fade">{profile.intro}</p>
          <p className="hero-title" aria-hidden="true">
            {hero.lineB.map((w) => (
              <span className="line-mask" key={w}>
                <span className="muted">{w}</span>
              </span>
            ))}
          </p>
        </div>
      </div>
      <div className="scroll-hint" aria-hidden="true">
        <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
          <path d="M5 1v10M1 7l4 4 4-4" stroke="currentColor" />
        </svg>
        Scroll para explorar
      </div>
    </section>
  );
}
