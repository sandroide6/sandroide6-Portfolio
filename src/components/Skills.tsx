import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Code, Database, Terminal, Settings } from "lucide-react";
import { skillCategories } from "../config/siteConfig";

const categoryIcons = [Code, Database, Terminal, Settings] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const Skills: React.FC = () => (
  <section className="section-shell">
    <div className="container-xl">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="section-title text-center"
    >
      Habilidades tecnicas
    </motion.h2>

    <motion.div
      className="row g-4 justify-content-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {skillCategories.map((category, catIndex) => {
        const CategoryIcon = categoryIcons[catIndex % categoryIcons.length];
        return (
          <motion.div
            key={category.name}
            variants={itemVariants}
            className="col-12 col-md-6 col-lg-4 d-flex"
          >
            <motion.div
              className="project-card flex-grow-1 p-4 rounded-4 h-100"
              whileHover={{ y: -6 }}
            >
              <div className="d-flex justify-content-center mb-3">
                <CategoryIcon size={42} className="skill-icon" />
              </div>

              <h3 className="h5 fw-bold text-center mb-3">{category.name}</h3>

              <hr className="card-divider" />

              <ul className="list-unstyled mt-3 d-flex flex-wrap gap-2 justify-content-center">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="badge skill-badge p-2 fw-semibold"
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
    </div>
  </section>
);

export default Skills;
