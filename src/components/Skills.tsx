import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Code, Database, Terminal, Settings } from "lucide-react";

// Datos de habilidades
const skillCategories = [
  {
    name: "Lenguajes & Frameworks",
    icon: Code,
    skills: ["Python", "Java", "TypeScript / JavaScript", "React (Introductorio)"],
  },
  {
    name: "Bases de Datos & Almacenamiento",
    icon: Database,
    skills: ["MongoDB", "MySQL", "PostgreSQL (Opcional)"],
  },
  {
    name: "Herramientas & DevOps",
    icon: Terminal,
    skills: ["Git & GitHub", "Terminal (Bash/Zsh)", "VS Code"],
  },
  {
    name: "Hardware & Otros",
    icon: Settings,
    skills: ["Arduino & IoT", "Excel con Macros (VBA)", "Principios de Ciberseguridad"],
  },
];

// Variantes de animación
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 120, damping: 15 } },
};

const Skills: React.FC = () => (
  <section className="container py-5">
    {/* Título */}
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="fw-bold text-center mb-5 display-5"
    >
      Habilidades Técnicas 🛠️
    </motion.h2>

    {/* Contenedor de tarjetas */}
    <motion.div
      className="row g-4 justify-content-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {skillCategories.map((category, catIndex) => {
        const CategoryIcon = category.icon;
        return (
          <motion.div
            key={catIndex}
            variants={itemVariants}
            className="col-12 col-md-6 col-lg-4 d-flex"
          >
            {/* Tarjeta de categoría con hover completo */}
            <motion.div
              className="project-card flex-grow-1 p-4 rounded-4 shadow-lg"
              style={{
                backgroundColor: "var(--color-background-secondary)",
                border: "1px solid var(--color-border)",
                cursor: "pointer",
              }}
              whileHover={{ scale: 1.05, boxShadow: "0px 20px 40px rgba(0,0,0,0.3)" }}
            >
              {/* Ícono grande con animación continua */}
              <motion.div
                animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.1, 1, 1.05] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="d-flex justify-content-center mb-3"
              >
                <CategoryIcon
                  size={70}
                  className="text-gradient-dynamic"
                />
              </motion.div>

              {/* Nombre de categoría */}
              <h3 className="h4 fw-bold text-center mb-3">{category.name}</h3>

              <hr style={{ borderColor: "var(--color-border)" }} />

              {/* Lista de habilidades */}
              <ul className="list-unstyled mt-3 d-flex flex-wrap gap-2 justify-content-center">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="badge p-2 fw-semibold"
                    style={{
                      backgroundColor: "var(--color-card-background)",
                      color: "var(--color-primary-light)",
                      border: "1px solid var(--color-border)",
                      cursor: "default",
                    }}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        );
      })}
    </motion.div>
  </section>
);

export default Skills;
