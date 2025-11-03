import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Briefcase, Code, GraduationCap, Heart, Zap } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const AboutMe: React.FC = () => {
  const highlights = [
    { icon: <GraduationCap size={24} className="text-primary" />, text: "Actualmente estudiante de Desarrollo de Software, buscando aplicar conocimientos en entornos profesionales." },
    { icon: <Code size={24} className="text-primary" />, text: "Sólida base en Python, Java, Arduino, Excel con Macros y principios de Ciberseguridad." },
    { icon: <Zap size={24} className="text-primary" />, text: "Apasionado por la automatización de procesos y la aplicación práctica de la tecnología e IoT." },
    { icon: <Briefcase size={24} className="text-primary" />, text: "Lidero el diseño y gestión de Hikari光, mi propia tienda de joyería con enfoque gótico oriental." },
    { icon: <Heart size={24} className="text-primary" />, text: "Fuera del código, fanático de las motos y practico deportes de contacto para mantenerme activo." },
  ];

  return (
    <section className="container py-5">
      <div className="text-center mb-5">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="fw-bold display-5 text-primary"
        >
          Sobre Mí
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-secondary lead mx-auto"
          style={{ maxWidth: "600px" }}
        >
          Soy Santiago Echeverri, desarrollador de software con pasión por la tecnología, la innovación y la automatización. Busco oportunidades para aplicar y expandir mis habilidades en proyectos reales.
        </motion.p>
      </div>

      <motion.div
        className="row g-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {highlights.map((item, idx) => (
          <motion.div
            key={idx}
            className="col-md-6"
            variants={itemVariants}
          >
            <div className="d-flex align-items-start gap-3 p-4 rounded-3" style={{ backgroundColor: "var(--color-card-background)", borderLeft: "4px solid var(--color-primary-base)" }}>
              <div>{item.icon}</div>
              <p className="mb-0 text-white">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default AboutMe;
