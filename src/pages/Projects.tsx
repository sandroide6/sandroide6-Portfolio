import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Github, ExternalLink, Zap } from "lucide-react";

// ✅ Importa todas tus imágenes desde src/assets
import javaProject from "../assets/img/ProyectoBiblioteca.png";
import pythonProject from "../assets/img/ProyectoInventario.jpg";
import arduinoProject from "../assets/img/Arduino_IoT_hardware_project.png";
import videojuegoProject from "../assets/img/VideojuegoBichos.jpg";
import analizadorProject from "../assets/img/AnalizadorExpresiones.jpg";

// ✅ Datos de proyectos
const ALL_PROJECTS = [
  {
    title: "Sistema Biblioteca",
    description: "Sistema de gestión bibliotecaria completo con interfaz gráfica desarrollado en Java para administrar préstamos, devoluciones y catálogo de libros.",
    image: javaProject,
    tech: ["Java", "GUI", "Database"],
    github: "https://github.com/sandroide6/Sistema-Biblioteca",
    featured: true
  },
  {
    title: "Inventario Tecnología",
    description: "Sistema de gestión de inventario tecnológico con base de datos para control de equipos y dispositivos electrónicos.",
    image: pythonProject,
    tech: ["Python", "Database", "Automation"],
    github: "https://github.com/sandroide6/InventarioTecnologia"
  },
  {
    title: "Analizador de Expresiones",
    description: "Analizador léxico y sintáctico de expresiones aritméticas con evaluación de operadores y precedencia.",
    image: analizadorProject,
    tech: ["C++", "Algorithms"],
    github: "https://github.com/sandroide6/Analizador-de-Expresiones-Aritmeticas"
  },
  {
    title: "Videojuego Bichos",
    description: "Juego interactivo desarrollado en Java con mecánicas de estrategia y sistema de puntuación.",
    image: videojuegoProject,
    tech: ["Java", "Game Dev"],
    github: "https://github.com/sandroide6/Videojuego-Bichos"
  },
  {
    title: "Proyectos Arduino & IoT",
    description: "Múltiples proyectos de hardware con microcontroladores Arduino, sensores y automatización de sistemas IoT.",
    image: arduinoProject,
    tech: ["Arduino", "IoT", "C++"],
    github: "https://github.com/sandroide6"
  },
];

// ✅ Tecnologías únicas para filtros
const allTechs = Array.from(new Set(ALL_PROJECTS.flatMap(p => p.tech)));
const techFilters = ["Todos", ...allTechs].sort();

// ✅ Variantes para animaciones
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring" as const, stiffness: 120, damping: 20 } 
  },
};

const badgeVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
};

// ✅ Componente Projects
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "Todos") return ALL_PROJECTS;
    return ALL_PROJECTS.filter(project => project.tech.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section id="projects" className="py-5 container">
      <h2 className="fw-bold text-center mb-4 display-5">
        Proyectos <span className="text-primary-light">Destacados</span> 💡
      </h2>
      <p className="text-secondary text-center mb-5 lead">
        Explora mi trabajo y las tecnologías que utilizo.
      </p>

      {/* Filtros */}
      <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
        {techFilters.map(tech => (
          <button
            key={tech}
            className={`btn btn-sm rounded-pill px-3 fw-semibold ${activeFilter === tech ? 'btn-primary' : 'btn-outline-secondary'}`}
            onClick={() => setActiveFilter(tech)}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="row g-4 justify-content-center">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            className={`col-12 col-md-6 ${project.featured ? 'col-lg-8' : 'col-lg-4'}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            transition={{ delay: index * 0.1 }}
          >
            <div className="project-card h-100 d-flex flex-column overflow-hidden border rounded-3 shadow-lg" style={{ backgroundColor: 'var(--color-card-background)' }}>
              
              {/* Imagen */}
              <motion.div 
                className="card-img-top position-relative overflow-hidden" 
                style={{ height: '200px' }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-100 h-100 object-fit-cover"
                />
                {project.featured && (
                  <span className="badge text-bg-primary position-absolute top-0 end-0 m-3 p-2 fw-bold d-flex align-items-center gap-1">
                    <Zap size={16} /> Destacado
                  </span>
                )}
              </motion.div>

              {/* Contenido */}
              <div className="p-4 flex-grow-1 d-flex flex-column">
                <h3 className="h5 fw-bold mb-2 text-primary-light">{project.title}</h3>
                <p className="text-secondary small flex-grow-1">{project.description}</p>

                {/* Tech badges */}
                <motion.div
                  className="d-flex flex-wrap gap-2 mt-3"
                  initial="hidden"
                  animate="visible"
                  transition={{ staggerChildren: 0.08 }}
                >
                  {project.tech.map((tech) => (
                    <motion.span
                      key={tech}
                      className="badge rounded-pill text-light border border-secondary cursor-pointer"
                      style={{ backgroundColor: 'var(--color-card-background)' }}
                      onClick={() => setActiveFilter(tech)}
                      variants={badgeVariants}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </div>

              {/* Footer */}
              <div className="p-4 pt-0 d-flex gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center fw-bold"
                  style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-secondary)' }}
                >
                  <Github size={18} className="me-2" /> GitHub
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-secondary"
                  title="Ver Proyecto"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
