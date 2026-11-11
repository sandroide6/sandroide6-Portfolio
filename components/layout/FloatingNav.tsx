'use client';

import { useEffect, useState } from 'react';
import { navLinks } from '@/lib/content';

export default function FloatingNav() {
  const [active, setActive] = useState<string>('#inicio');

  useEffect(() => {
    const ids = navLinks.map((l) => l.href);
    const onScroll = () => {
      let cur = ids[0];
      for (const id of ids) {
        const el = document.querySelector(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.5) cur = id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="float-nav" aria-label="Secciones">
      {navLinks.map((l) => (
        <a key={l.href} href={l.href} aria-current={active === l.href ? 'true' : undefined}>
          {l.label}
          {'plus' in l && l.plus && <span className="plus" aria-hidden="true">+</span>}
        </a>
      ))}
    </nav>
  );
}
