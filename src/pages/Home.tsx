import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

import Hero from "../components/Hero";
import AboutMe from "./AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/ProjectsCard";
import GithubStats from "../pages/GithubStats";

// Variantes para la animación de cada sección
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring" as const, stiffness: 120, damping: 20 } 
  },
};

const Home: React.FC = () => {
  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <motion.section
        id="hero"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <Hero />
      </motion.section>

      {/* About Me */}
      <motion.section
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <AboutMe />
      </motion.section>

      {/* Skills */}
      <motion.section
        id="skills"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <Skills />
      </motion.section>

      {/* Projects */}
      <motion.section
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <Projects />
      </motion.section>

      {/* Github Stats */}
      <motion.section
        id="github-stats"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <GithubStats />
      </motion.section>
    </main>
  );
};

export default Home;
