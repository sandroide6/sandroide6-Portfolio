import React, { useEffect } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useLocation } from "react-router-dom";

import Hero from "../components/Hero";
import AboutMe from "./AboutMe";
import Skills from "../components/Skills";
import Projects from "./Projects";
import GithubStats from "../pages/GithubStats";
import Contact from "./Contact";

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
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.hash.replace("#", "").trim();
    if (!sectionId) return;

    const timeout = window.setTimeout(() => {
      const target = document.getElementById(sectionId);
      if (!target) return;

      const navbarHeight = document.querySelector(".main-navbar")?.clientHeight ?? 86;
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - navbarHeight - 10,
        behavior: "smooth",
      });
    }, 120);

    return () => window.clearTimeout(timeout);
  }, [location.hash]);

  return (
    <main className="overflow-hidden">
      <motion.section
        id="hero"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <Hero />
      </motion.section>

      <motion.section
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <AboutMe />
      </motion.section>

      <motion.section
        id="skills"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <Skills />
      </motion.section>

      <motion.section
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <Projects limit={4} showFilters={false} />
      </motion.section>

      <motion.section
        id="github-stats"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <GithubStats />
      </motion.section>

      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <Contact />
      </motion.section>
    </main>
  );
};

export default Home;
