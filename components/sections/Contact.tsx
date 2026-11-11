'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import type { FormEvent } from 'react';
import { profile } from '@/lib/content';
import Arrow from '@/components/ui/Arrow';

const ParticleField = dynamic(() => import('@/components/three/ParticleField'), { ssr: false });

const SERVICE = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
const formReady = Boolean(SERVICE && TEMPLATE && KEY);

type Status = { kind: 'idle' | 'sending' | 'ok' | 'err'; msg?: string };

export default function Contact() {
  const [status, setStatus] = useState<Status>({ kind: 'idle' });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!formReady) return;
    setStatus({ kind: 'sending' });
    try {
      const emailjs = (await import('@emailjs/browser')).default;
      await emailjs.sendForm(SERVICE!, TEMPLATE!, form, { publicKey: KEY! });
      form.reset();
      setStatus({ kind: 'ok', msg: 'Mensaje enviado. Te respondo pronto.' });
    } catch {
      setStatus({ kind: 'err', msg: `No se pudo enviar. Escríbeme a ${profile.email}.` });
    }
  };

  return (
    <section className="contact" id="contacto">
      <div className="contact-canvas">
        <ParticleField shape="fingerprint" morphTo="lock" count={4200} scale={1.15} className="hero-canvas" />
      </div>
      <div className="wrap">
        <h2>
          Hablemos <span className="muted">hoy</span>
        </h2>
        <p className="lead">¿Tienes un sistema por construir o un proyecto donde pueda aportar? Cuéntame en qué estás trabajando.</p>

        {formReady ? (
          <form className="contact-form" onSubmit={onSubmit}>
            <div className="row">
              <div className="field">
                <label htmlFor="c-name">Nombre</label>
                <input id="c-name" name="from_name" required autoComplete="name" />
              </div>
              <div className="field">
                <label htmlFor="c-email">Correo</label>
                <input id="c-email" name="reply_to" type="email" required autoComplete="email" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="c-msg">Mensaje</label>
              <textarea id="c-msg" name="message" rows={4} required />
            </div>
            <div className="form-foot">
              <span className={`form-status ${status.kind === 'err' ? 'err' : ''}`} role="status">
                {status.kind === 'sending' ? 'Enviando…' : status.msg}
              </span>
              <button className="pill solid" type="submit" disabled={status.kind === 'sending'}>
                Enviar mensaje
                <span className="dot">
                  <Arrow />
                </span>
              </button>
            </div>
          </form>
        ) : null}
        <p className="email-line">{profile.email}</p>
      </div>
    </section>
  );
}
