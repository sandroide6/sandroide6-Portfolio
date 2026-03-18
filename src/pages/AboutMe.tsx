import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Briefcase, Code, GraduationCap, Heart, Zap } from "lucide-react";
import { aboutHighlights, siteConfig } from "../config/siteConfig";

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
    { icon: <GraduationCap size={22} className="about-icon" />, text: aboutHighlights[0] },
    { icon: <Code size={22} className="about-icon" />, text: aboutHighlights[1] },
    { icon: <Zap size={22} className="about-icon" />, text: aboutHighlights[2] },
    { icon: <Briefcase size={22} className="about-icon" />, text: aboutHighlights[3] },
    { icon: <Heart size={22} className="about-icon" />, text: "Compromiso con disciplina personal, aprendizaje continuo y trabajo en equipo." },
  ];

  return (
    <section className="section-shell" id="about">
      <div className="container-xl">
      <div className="text-center mb-5">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Sobre mi
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-lead mx-auto"
        >
          Soy {siteConfig.fullName}, {siteConfig.role}. Trabajo con una mentalidad orientada a impacto,
          cuidando tanto la calidad tecnica como la experiencia de quien usa cada producto.
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
            <div className="about-highlight-card d-flex align-items-start gap-3 p-4 rounded-3 h-100">
              <div>{item.icon}</div>
              <p className="mb-0">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
