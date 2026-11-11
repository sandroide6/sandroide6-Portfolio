'use client';

import { useEffect, useRef } from 'react';
import { featured } from '@/lib/content';
import MediaImage from '@/components/ui/MediaImage';
import PillLink from '@/components/ui/PillLink';
import { gsap, prefersReducedMotion } from '@/lib/gsap';

function ScanFallback() {
  return (
    <svg viewBox="0 0 200 200" fill="none" style={{ width: 'min(280px,70%)', aspectRatio: '1' }} aria-hidden="true">
      <g stroke="#F0577D" strokeWidth="1" opacity=".75">
        <rect x="58" y="44" width="84" height="108" rx="4" />
        <rect x="66" y="36" width="84" height="108" rx="4" opacity=".55" />
        <rect x="74" y="28" width="84" height="108" rx="4" opacity=".3" />
        <path d="M70 66h56M70 78h48M70 90h56M70 102h36M70 114h50M70 126h28" />
      </g>
      <g stroke="#D11F4B" strokeWidth="4" strokeLinecap="round">
        <path d="M30 56V36h20M150 36h20v20M170 144v20h-20M50 164H30v-20" />
      </g>
      <path d="M30 100h140" stroke="#F0577D" strokeWidth="2" opacity=".9">
        <animate attributeName="opacity" values=".2;1;.2" dur="2.4s" repeatCount="indefinite" />
      </path>
    </svg>
  );
}

export default function FeaturedCase() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.from('.case-card', {
        scale: 0.92,
        opacity: 0.4,
        ease: 'none',
        scrollTrigger: { trigger: el, start: 'top 90%', end: 'top 30%', scrub: true },
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section className="case" id="proyectos" ref={root}>
      <div className="wrap">
        <span className="label">[ Caso destacado ]</span>
        <article className="case-card">
          <div className="case-visual">
            <MediaImage file={featured.image} alt="Render holográfico de documentos con marcos de escaneo" fallback={<ScanFallback />} />
          </div>
          <div className="case-meta">
            <span className="date">
              {featured.year} · {featured.kind}
            </span>
            <h3>{featured.name}</h3>
            <p>{featured.summary}</p>
            <div className="chips">
              {featured.stack.map((s) => (
                <span className="chip" key={s}>
                  {s}
                </span>
              ))}
            </div>
            <div className="links">
              {featured.demo && (
                <PillLink href={featured.demo} solid external>
                  Ver sistema
                </PillLink>
              )}
              {featured.repo && (
                <PillLink href={featured.repo} external>
                  Código
                </PillLink>
              )}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
