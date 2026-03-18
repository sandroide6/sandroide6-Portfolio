import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

interface ContactFormState {
    name: string;
    email: string;
    message: string;
}

const initialFormState: ContactFormState = {
    name: "",
    email: "",
    message: "",
};

const Contact = () => {
    const [form, setForm] = useState<ContactFormState>(initialFormState);
    const [submitted, setSubmitted] = useState(false);

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const subject = encodeURIComponent(`Contacto portfolio - ${form.name}`);
        const body = encodeURIComponent(
            `Nombre: ${form.name}\nEmail: ${form.email}\n\nMensaje:\n${form.message}`
        );

        window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
        setSubmitted(true);
    };

    return (
        <section className="section-shell" aria-labelledby="contact-title">
            <div className="container-xl">
                <motion.h2
                    id="contact-title"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title text-center"
                >
                    Contacto
                </motion.h2>

                <p className="section-lead text-center mx-auto mb-5">
                    Si tienes una oportunidad, proyecto o colaboracion tecnica, estoy listo para conversar.
                </p>

                <div className="row justify-content-center">
                    <div className="col-12 col-xl-11">
                        <div className="project-card p-4 p-md-5 rounded-4">
                            <div className="row g-5">
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.45 }}
                                    className="col-lg-7"
                                >
                                    <h3 className="h4 fw-bold mb-3">Escribeme un mensaje</h3>
                                    <p className="text-secondary mb-4">
                                        El formulario abre tu cliente de correo con el mensaje listo para enviar.
                                    </p>

                                    <form onSubmit={onSubmit} className="contact-form">
                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label">
                                                Nombre
                                            </label>
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                required
                                                className="form-control"
                                                value={form.name}
                                                onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">
                                                Correo
                                            </label>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                className="form-control"
                                                value={form.email}
                                                onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="message" className="form-label">
                                                Mensaje
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={5}
                                                required
                                                className="form-control"
                                                value={form.message}
                                                onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
                                            />
                                        </div>

                                        <button type="submit" className="btn btn-primary btn-lg w-100 fw-semibold">
                                            <Send size={18} className="me-2" />
                                            Preparar correo
                                        </button>

                                        {submitted ? (
                                            <p className="mt-3 mb-0 d-flex align-items-center gap-2 text-success">
                                                <CheckCircle2 size={18} /> Cliente de correo abierto correctamente.
                                            </p>
                                        ) : null}
                                    </form>
                                </motion.div>

                                <motion.aside
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.45, delay: 0.05 }}
                                    className="col-lg-5 contact-side"
                                >
                                    <h3 className="h4 fw-bold mb-4">Canales directos</h3>

                                    <div className="d-flex align-items-center mb-4 gap-3">
                                        <Mail size={20} className="contact-icon" />
                                        <a href={`mailto:${siteConfig.email}`} className="contact-link">
                                            {siteConfig.email}
                                        </a>
                                    </div>

                                    <div className="d-flex align-items-center mb-4 gap-3">
                                        <MapPin size={20} className="contact-icon" />
                                        <span>{siteConfig.location}</span>
                                    </div>

                                    <div className="d-flex align-items-center gap-3 mt-4">
                                        <a
                                            href={siteConfig.social.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="social-icon-link"
                                            aria-label="GitHub"
                                        >
                                            <Github size={20} />
                                        </a>
                                        <a
                                            href={siteConfig.social.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="social-icon-link"
                                            aria-label="LinkedIn"
                                        >
                                            <Linkedin size={20} />
                                        </a>
                                    </div>
                                </motion.aside>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;