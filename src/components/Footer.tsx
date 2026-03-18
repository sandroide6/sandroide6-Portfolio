import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer mt-auto">
      <div className="container-xl py-4 py-md-5">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
          <div>
            <p className="mb-1 fw-semibold">{siteConfig.fullName}</p>
            <p className="mb-0 footer-muted">{siteConfig.role}</p>
          </div>

          <div className="d-flex align-items-center gap-3">
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil de GitHub"
              className="social-icon-link"
            >
              <Github size={20} />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil de LinkedIn"
              className="social-icon-link"
            >
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${siteConfig.email}`} aria-label="Enviar correo" className="social-icon-link">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <hr className="footer-separator" />

        <p className="mb-0 footer-muted small text-center text-md-start">
          © {year} {siteConfig.fullName}. Desarrollado con React, TypeScript y enfoque profesional.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
