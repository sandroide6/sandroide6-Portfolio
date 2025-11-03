import { Github, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="bg-dark text-white text-center py-5 mt-auto"
      style={{ borderTop: "2px solid var(--color-primary-base)" }}
    >
      <p className="mb-3">© 2025 Santiago Echeverri. Todos los derechos reservados.</p>

      <div className="d-flex justify-content-center gap-4 mb-3">
        <a href="https://github.com/sandroide6" target="_blank" rel="noreferrer" title="GitHub" className="text-white hover:text-primary transition-colors">
          <Github size={24} />
        </a>
        <a href="https://www.linkedin.com/in/tu-linkedin" target="_blank" rel="noreferrer" title="LinkedIn" className="text-white hover:text-primary transition-colors">
          <Linkedin size={24} />
        </a>
        <a href="https://www.instagram.com/tu-instagram" target="_blank" rel="noreferrer" title="Instagram" className="text-white hover:text-primary transition-colors">
          <Instagram size={24} />
        </a>
      </div>

      <p className="small text-white-50">
  Diseñado y desarrollado por Santiago Echeverri con ❤️
</p>
    </footer>
  );
};

export default Footer;
