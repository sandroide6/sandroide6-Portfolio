'use client';

import { useEffect, useRef } from 'react';
import { archive, projects } from '@/lib/content';
import MediaImage from '@/components/ui/MediaImage';
import PillLink from '@/components/ui/PillLink';
import { gsap, prefersReducedMotion } from '@/lib/gsap';

const STEP = 34; // grados entre tarjetas
const RADIUS = 620; // px

function initials(name: string) {
  return name
    .split(/[\s.]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();
}

export default function ProjectsCarousel() {
  const root = useRef<HTMLElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    const r = ring.current;
    if (!el || !r) return;
    const cards = Array.from(r.querySelectorAll<HTMLElement>('.p-card'));
    const mm = gsap.matchMedia();

    mm.add('(min-width: 900px)', () => {
      const place = (rot: number) => {
        cards.forEach((c, i) => {
          const a = i * STEP - rot;
          const rad = (a * Math.PI) / 180;
          const x = Math.sin(rad) * RADIUS;
          const z = Math.cos(rad) * RADIUS - RADIUS;
          c.style.transform = `translate3d(${x}px,0,${z}px) rotateY(${a}deg)`;
          c.style.opacity = String(Math.max(0, 1 - Math.abs(a) / 95));
          c.style.zIndex = String(100 - Math.round(Math.abs(a)));
          c.style.pointerEvents = Math.abs(a) < STEP / 2 ? 'auto' : 'none';
        });
      };
      place(0);
      if (prefersReducedMotion()) return;
      const total = (cards.length - 1) * STEP;
      const st = { rot: 0 };
      const tween = gsap.to(st, {
        rot: total,
        ease: 'none',
        onUpdate: () => place(st.rot),
        scrollTrigger: {
          trigger: el,
          start: 'top top',
          end: () => `+=${cards.length * 70}%`,
          pin: '.projects-pin',
          scrub: 0.6,
          snap: { snapTo: 1 / (cards.length - 1), duration: 0.4, ease: 'power2.out' },
        },
      });
      return () => tween.kill();
    });
    return () => mm.revert();
  }, []);

  return (
    <section className="projects" ref={root} aria-labelledby="proyectos-titulo">
      <div className="projects-pin">
        <div className="wrap">
          <div className="projects-head">
            <h2 id="proyectos-titulo">Proyectos</h2>
            <span className="count">[ {String(projects.length).padStart(2, '0')} ]</span>
          </div>
          <div className="projects-stage">
            <div className="projects-ring" ref={ring}>
              {projects.map((p, i) => (
                <article className="p-card" key={p.slug}>
                  <div className="idx">
                    <span>[ {String(i + 1).padStart(2, '0')} ]</span>
                    <span>
                      {p.year} · {p.kind}
                    </span>
                  </div>
                  <h3>{p.name}</h3>
                  <p>{p.summary}</p>
                  <div className="chips">
                    {p.stack.map((s) => (
                      <span className="chip" key={s}>
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="links">
                    {p.demo && (
                      <PillLink href={p.demo} solid external>
                        Demo
                      </PillLink>
                    )}
                    {p.repo && (
                      <PillLink href={p.repo} external>
                        Código
                      </PillLink>
                    )}
                  </div>
                  <div className="visual">
                    <MediaImage
                      file={p.image}
                      alt={`Render de ${p.name}`}
                      fallback={<span className="mono">{initials(p.name)}</span>}
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
          <p className="archive">
            <span>Archivo de cursos:</span>
            {archive.map((a) => (
              <a key={a.name} href={a.repo} target="_blank" rel="noopener noreferrer">
                {a.name} · {a.stack}
              </a>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
