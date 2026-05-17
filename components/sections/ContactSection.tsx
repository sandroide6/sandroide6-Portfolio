'use client';

import { useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, CheckCircle2, Mail, MapPin, Github, Linkedin, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/lib/config';

interface FormState {
  name: string;
  email: string;
  message: string;
}

const initialForm: FormState = { name: '', email: '', message: '' };

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm] = useState<FormState>(initialForm);
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio — ${form.name}`);
    const body = encodeURIComponent(`Nombre: ${form.name}\nEmail: ${form.email}\n\nMensaje:\n${form.message}`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const setField = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  return (
    <section ref={ref} id="contact" className="relative py-32 overflow-hidden">
      {/* Ambient top */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top right, rgba(122,0,0,0.1) 0%, transparent 60%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-xl"
        >
          <p className="section-label mb-4">Contacto</p>
          <h2 className="font-heading font-black text-4xl lg:text-5xl text-white leading-tight mb-4">
            Hablemos sobre<br />
            <span className="gradient-text">tu próximo proyecto.</span>
          </h2>
          <p className="text-white/40 leading-relaxed">
            Tengo una oportunidad, idea o colaboración? Estoy disponible para conversar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Form — 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div
              className="rounded-2xl p-8"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(193,18,31,0.1)',
                backdropFilter: 'blur(16px)',
              }}
            >
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-mono text-[10px] text-white/30 uppercase tracking-widest mb-2 block">
                      Nombre
                    </label>
                    <input
                      type="text"
                      required
                      className="glass-input"
                      placeholder="Tu nombre"
                      value={form.name}
                      onChange={setField('name')}
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[10px] text-white/30 uppercase tracking-widest mb-2 block">
                      Correo
                    </label>
                    <input
                      type="email"
                      required
                      className="glass-input"
                      placeholder="tu@email.com"
                      value={form.email}
                      onChange={setField('email')}
                    />
                  </div>
                </div>
                <div>
                  <label className="font-mono text-[10px] text-white/30 uppercase tracking-widest mb-2 block">
                    Mensaje
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="glass-input resize-none"
                    placeholder="Cuéntame sobre tu proyecto..."
                    value={form.message}
                    onChange={setField('message')}
                  />
                </div>

                <button type="submit" className="btn-red w-full justify-center">
                  <Send size={14} /> Enviar mensaje
                  <ArrowRight size={14} className="ml-auto" />
                </button>

                {sent && (
                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-sm font-mono text-emerald-400/80"
                  >
                    <CheckCircle2 size={14} /> Cliente de correo abierto correctamente.
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>

          {/* Info — 2 cols */}
          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact items */}
            {[
              {
                icon: <Mail size={16} />,
                label: 'Email',
                value: siteConfig.email,
                href: `mailto:${siteConfig.email}`,
              },
              {
                icon: <MapPin size={16} />,
                label: 'Ubicación',
                value: siteConfig.location,
                href: undefined,
              },
            ].map(({ icon, label, value, href }) => (
              <div
                key={label}
                className="flex items-start gap-4 p-5 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
              >
                <div
                  className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-red-neon"
                  style={{ background: 'rgba(193,18,31,0.08)', border: '1px solid rgba(193,18,31,0.15)' }}
                >
                  {icon}
                </div>
                <div>
                  <p className="font-mono text-[10px] text-white/25 uppercase tracking-widest mb-0.5">{label}</p>
                  {href ? (
                    <a href={href} className="text-sm text-white/70 hover:text-white transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm text-white/70">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social links */}
            <div
              className="p-5 rounded-xl"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
            >
              <p className="font-mono text-[10px] text-white/25 uppercase tracking-widest mb-4">Redes</p>
              <div className="flex gap-3">
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/50 hover:text-white px-3 py-2 rounded-lg transition-all hover:bg-white/5"
                >
                  <Github size={15} /> GitHub
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/50 hover:text-red-neon px-3 py-2 rounded-lg transition-all hover:bg-red-dark/10"
                >
                  <Linkedin size={15} /> LinkedIn
                </a>
              </div>
            </div>

            {/* Availability indicator */}
            <div
              className="p-5 rounded-xl"
              style={{ background: 'rgba(193,18,31,0.04)', border: '1px solid rgba(193,18,31,0.12)' }}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-[10px] text-emerald-400/70 uppercase tracking-widest">Disponible</span>
              </div>
              <p className="text-sm text-white/40">
                Abierto a proyectos freelance y colaboraciones remotas.
              </p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
