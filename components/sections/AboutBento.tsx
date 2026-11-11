'use client';

import { useEffect, useRef } from 'react';
import { languages, profile, stats, thesis } from '@/lib/content';
import MediaImage from '@/components/ui/MediaImage';
import { gsap, prefersReducedMotion } from '@/lib/gsap';

export default function AboutBento() {
  const root = useRef<HTMLElement>(null);
  const num = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.from('.tile', {
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: 'expo.out',
        stagger: 0.08,
        scrollTrigger: { trigger: '.bento', start: 'top 85%', once: true },
      });
      gsap.from('.bar .t i', {
        scaleX: 0,
        duration: 1,
        ease: 'expo.out',
        stagger: 0.06,
        scrollTrigger: { trigger: '.bars', start: 'top 90%', once: true },
      });
      const o = { v: 0 };
      gsap.to(o, {
        v: stats.publicRepos,
        duration: 1.4,
        ease: 'power2.out',
        onUpdate: () => {
          if (num.current) num.current.textContent = String(Math.round(o.v));
        },
        scrollTrigger: { trigger: num.current, start: 'top 90%', once: true },
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section className="about" id="sobre-mi" ref={root}>
      <div className="wrap">
        <h2>
          Soy{' '}
          <svg className="pulse" viewBox="0 0 36 18" fill="none" aria-hidden="true">
            <path d="M1 9h8l3-7 5 14 4-10 3 3h11" stroke="#F0577D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>{' '}
          desarrollador full-stack con foco en seguridad
        </h2>
        <p className="lead">
          Construyo sistemas que usan organizaciones reales de Medellín, desde un club de motociclistas hasta una Junta
          Administradora Local, y llevo ese mismo rigor a mi trabajo de grado en criptografía.
        </p>

        <div className="bento">
          <article className="tile red">
            <span className="idx">[ Estudios ]</span>
            <h4>{profile.studies}</h4>
            <p>{profile.school}</p>
          </article>

          <article className="tile">
            <span className="idx">[ GitHub ]</span>
            <div className="big" ref={num}>
              {stats.publicRepos}
            </div>
            <p>
              repositorios públicos en{' '}
              <a href={profile.social.github} target="_blank" rel="noopener noreferrer" style={{ borderBottom: '1px solid var(--line)' }}>
                github.com/sandroide6
              </a>
            </p>
          </article>

          <article className="tile glow t-span2 t-tall">
            <span className="idx">{thesis.label}</span>
            <h4>{thesis.title}</h4>
            <p>{thesis.text}</p>
            <div className="hashviz" aria-label="Ejemplo real de efecto avalancha con SHA-256">
              sha256(&quot;cherry&quot;) →<br />
              <b>2daf0e6c</b>79009f92…
              <br />
              sha256(&quot;cherrz&quot;) →<br />
              <b>91696c0b</b>365d1c92…
            </div>
            <div className="img">
              <MediaImage file={thesis.image} alt="Candado de vidrio burdeos con patrón de hash" />
            </div>
          </article>

          <article className="tile">
            <span className="idx">[ Experiencia ]</span>
            <h4>Acompañamiento tecnológico a la JAL</h4>
            <p>I.U. Pascual Bravo y Alcaldía de Medellín, desde agosto de 2026.</p>
          </article>

          <article className="tile">
            <span className="idx">[ Seguridad ]</span>
            <h4>Informe de vulnerabilidades web</h4>
            <p>Informe propio sobre vulnerabilidades en aplicaciones web.</p>
          </article>

          <article className="tile t-span2" id="stack">
            <span className="idx">[ Stack · % del código público ]</span>
            <h4>Lenguajes</h4>
            <div className="bars">
              {languages.map((l) => (
                <div className="bar" key={l.name}>
                  <span>{l.name}</span>
                  <span className="t">
                    <i style={{ width: `${l.pct}%` }} />
                  </span>
                  <span>{l.pct} %</span>
                </div>
              ))}
            </div>
          </article>

          <article className="tile t-span2">
            <span className="idx">[ Cómo trabajo ]</span>
            <h4>Del requisito al despliegue</h4>
            <p>SRS ligero y modelo C4 antes de programar, arquitectura por capas, pruebas y despliegue en Vercel, Render o Firebase.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
