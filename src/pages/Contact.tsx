import { motion } from "framer-motion";
import { Send, Mail, Github, Linkedin, MapPin } from "lucide-react";

const Contact = () => {
    // Nota: La acción 'action' del formulario debe ser reemplazada por un servicio
    // de backend o un servicio de formularios sin servidor (ej. Formspree, Netlify Forms) 
    // para que el envío funcione realmente.

    return (
        <section id="contact" className="container py-5">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="fw-bold text-center mb-4 display-5"
            >
                Contáctame <Send size={36} className="text-primary-light" />
            </motion.h2>

            <p className="text-secondary text-center mb-5 lead">
                ¿Tienes un proyecto, una idea de IoT o una oportunidad de software? ¡Hablemos!
            </p>

            <div className="row justify-content-center">
                <div className="col-12 col-lg-10">
                    
                    {/* Tarjeta de Contácto (Usamos project-card para el estilo oscuro) */}
                    <div className="project-card p-4 p-md-5">
                        
                        <div className="row g-5">
                            {/* Columna 1: Formulario */}
                            <motion.div 
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="col-lg-7"
                            >
                                <h3 className="h4 fw-bold mb-4 text-primary-light">Envíame un mensaje directo</h3>
                                <form 
                                    action="TU_ENLACE_A_FORMULARIOS_SIN_SERVIDOR" // **IMPORTANTE: Reemplazar**
                                    method="POST"
                                >
                                    {/* Nombre */}
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label text-secondary">Nombre Completo</label>
                                        <input type="text" className="form-control" id="name" name="name" required />
                                    </div>
                                    
                                    {/* Email */}
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label text-secondary">Correo Electrónico</label>
                                        <input type="email" className="form-control" id="email" name="_replyto" required />
                                    </div>
                                    
                                    {/* Mensaje */}
                                    <div className="mb-4">
                                        <label htmlFor="message" className="form-label text-secondary">Tu Mensaje</label>
                                        <textarea className="form-control" id="message" name="message" rows={4} required></textarea>
                                    </div>

                                    <button type="submit" className="btn btn-primary btn-lg w-100 fw-bold">
                                        <Send size={20} className="me-2" />
                                        Enviar Mensaje
                                    </button>
                                </form>
                            </motion.div>

                            {/* Columna 2: Info de Contacto y Social */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="col-lg-5 border-start border-secondary-subtle ps-lg-5"
                            >
                                <h3 className="h4 fw-bold mb-4 text-primary-light">Detalles de Contacto</h3>
                                
                                {/* Item: Email */}
                                <div className="d-flex align-items-center mb-4">
                                    <Mail size={24} className="text-primary-base me-3" />
                                    <div>
                                        <p className="mb-0 text-white fw-semibold">Email</p>
                                        <a href="mailto:sandroide.contact@gmail.com" className="text-secondary small">sandroide.contact@gmail.com</a>
                                    </div>
                                </div>
                                
                                {/* Item: Ubicación */}
                                <div className="d-flex align-items-center mb-5">
                                    <MapPin size={24} className="text-primary-base me-3" />
                                    <div>
                                        <p className="mb-0 text-white fw-semibold">Ubicación</p>
                                        <span className="text-secondary small">Medellín, Colombia</span>
                                    </div>
                                </div>
                                
                                {/* Social Media */}
                                <h4 className="h5 fw-bold mb-3 text-white">Sígueme</h4>
                                <div className="d-flex gap-3">
                                    <a href="https://github.com/sandroide6" target="_blank" rel="noreferrer" title="GitHub">
                                        <Github size={30} className="text-light hover-effect" style={{ transition: 'color 0.3s' }} />
                                    </a>
                                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" title="LinkedIn">
                                        <Linkedin size={30} className="text-light hover-effect" style={{ transition: 'color 0.3s' }} />
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;