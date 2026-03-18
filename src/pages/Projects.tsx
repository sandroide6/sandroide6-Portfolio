import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Github, ExternalLink, Zap } from "lucide-react";
import { projects } from "../config/siteConfig";

interface ProjectsProps {
  limit?: number;
  showFilters?: boolean;
}

const allTechs = Array.from(new Set(projects.flatMap((project) => project.tech))).sort();
const techFilters = ["Todos", ...allTechs];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 120, damping: 20 },
  },
};

const badgeVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function Projects({ limit, showFilters = true }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filteredProjects = useMemo(() => {
    const byTech =
      activeFilter === "Todos" ? projects : projects.filter((project) => project.tech.includes(activeFilter));
    return typeof limit === "number" ? byTech.slice(0, limit) : byTech;
  }, [activeFilter, limit]);

  return (
    <section className="section-shell" aria-labelledby="projects-title">
      <div className="container-xl">
        <h2 id="projects-title" className="section-title text-center">
          Proyectos destacados
        </h2>
        <p className="section-lead text-center mx-auto">
          Seleccion de proyectos enfocados en desarrollo de software, automatizacion e integracion IoT.
        </p>

        {showFilters ? (
          <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
            {techFilters.map((tech) => (
              <button
                key={tech}
                className={`btn btn-sm rounded-pill px-3 fw-semibold ${
                  activeFilter === tech ? "btn-primary" : "btn-outline-secondary"
                }`}
                onClick={() => setActiveFilter(tech)}
                type="button"
              >
                {tech}
              </button>
            ))}
          </div>
        ) : null}

        <div className="row g-4 justify-content-center">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              className={`col-12 col-md-6 ${project.featured ? "col-lg-8" : "col-lg-4"}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              transition={{ delay: index * 0.08 }}
            >
              <div className="project-card h-100 d-flex flex-column overflow-hidden rounded-4">
                <div className="project-media position-relative">
                  <img src={project.image} alt={project.title} className="w-100 h-100 object-fit-cover" loading="lazy" />
                  {project.featured ? (
                    <span className="badge featured-badge position-absolute top-0 end-0 m-3 p-2 fw-bold d-flex align-items-center gap-1">
                      <Zap size={14} /> Destacado
                    </span>
                  ) : null}
                </div>

                <div className="p-4 flex-grow-1 d-flex flex-column">
                  <h3 className="h5 fw-bold mb-2">{project.title}</h3>
                  <p className="project-description flex-grow-1">{project.description}</p>

                  <motion.div className="d-flex flex-wrap gap-2 mt-3" initial="hidden" animate="visible" transition={{ staggerChildren: 0.06 }}>
                    {project.tech.map((tech) => (
                      <motion.button
                        key={tech}
                        type="button"
                        className="badge tech-badge rounded-pill"
                        onClick={() => setActiveFilter(tech)}
                        variants={badgeVariants}
                      >
                        {tech}
                      </motion.button>
                    ))}
                  </motion.div>
                </div>

                <div className="p-4 pt-0 d-flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center fw-semibold"
                  >
                    <Github size={18} className="me-2" /> GitHub
                  </a>
                  <a
                    href={project.liveDemo ?? project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-secondary d-flex align-items-center justify-content-center"
                    aria-label={`Abrir ${project.title}`}
                    title="Abrir proyecto"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
