import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  { title: "Sistema de Biblioteca", description: "Gestión completa de préstamos y libros.", image: "/images/biblioteca.png", tech: ["Java","MySQL","JavaFX"], github: "https://github.com/usuario/sistema-biblioteca", featured: true },
  { title: "Inventario Tecnología", description: "Control de inventario y ventas.", image: "/images/inventario.png", tech: ["React","TypeScript","Node.js"], github: "https://github.com/usuario/inventario-tecnologia" },
  { title: "Analizador Aritmético", description: "Interpretador de expresiones matemáticas.", image: "/images/analizador.png", tech: ["Python","Tkinter"], github: "https://github.com/usuario/analizador-aritmetico", liveDemo: "https://demo-analizador.com" },
  { title: "Videojuego Bichos", description: "Juego educativo hecho en Java.", image: "/images/videojuego.png", tech: ["Java","LibGDX"], github: "https://github.com/usuario/videojuego-bichos" }
];

const Projects: React.FC = () => (
  <section id="projects" className="my-5">
    <h2 className="fw-bold text-center mb-4">Proyectos Destacados</h2>
    <div className="row g-4 justify-content-center">
      {projects.map((p) => (
        <div className={`col-sm-6 ${p.featured ? "col-lg-8" : "col-lg-4"}`} key={p.title}>
          <ProjectCard {...p} />
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
