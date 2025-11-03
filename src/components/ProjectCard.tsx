import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  liveDemo?: string;
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, tech, github, liveDemo, featured }) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className={`project-card position-relative overflow-hidden border rounded-3 p-4 shadow-lg`}
      style={{
        background: featured 
          ? "linear-gradient(135deg, #9b5de5, #f15bb5)" 
          : "var(--color-card-background)",
        border: featured ? "none" : "1px solid var(--color-border)",
        color: featured ? "white" : "var(--color-text-primary)",
      }}
    >
      {/* Imagen */}
      <img 
        src={image} 
        alt={title} 
        className="img-fluid rounded mb-3"
        style={{ maxHeight: '200px', objectFit: 'cover', width: '100%' }}
      />

      {/* Título */}
      <h3 className={`fw-bold ${featured ? 'text-white' : 'text-primary-light'}`}>{title}</h3>

      {/* Descripción */}
      <p className={featured ? 'text-white-75' : 'text-secondary'}>{description}</p>

      {/* Tecnologías */}
      <div className="d-flex flex-wrap gap-2 mb-3">
        {tech.map((t) => (
          <span key={t} className={`badge ${featured ? 'bg-white text-dark' : 'bg-secondary text-light'}`}>
            {t}
          </span>
        ))}
      </div>

      {/* Botones GitHub / Live Demo */}
      <div className="d-flex gap-3">
        <a 
          href={github} 
          target="_blank" 
          rel="noreferrer" 
          className={`btn btn-sm ${featured ? 'btn-light text-dark' : 'btn-outline-primary'}`}
        >
          <Github size={16} className="me-1" />
          GitHub
        </a>

        {liveDemo && (
          <a 
            href={liveDemo} 
            target="_blank" 
            rel="noreferrer" 
            className={`btn btn-sm ${featured ? 'btn-light text-dark' : 'btn-outline-primary'}`}
          >
            <ExternalLink size={16} className="me-1" />
            Demo
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
