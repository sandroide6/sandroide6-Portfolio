import React from "react";
import { Github, Linkedin, Twitter, Mail, Palette } from "lucide-react";

interface SocialLinksProps {
  iconSize?: number;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ iconSize = 24 }) => {
  const defaultColor = "var(--bs-white)";
  const primaryColor = "var(--color-primary-light)";

  const socialMedia = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/sandroide6",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/tu-perfil",
    },
    {
      name: "Behance",
      icon: Palette,
      url: "https://www.behance.net/tu-perfil",
    },
    {
      name: "Twitter/X",
      icon: Twitter,
      url: "https://twitter.com/tu-usuario",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:sandroide.contact@gmail.com",
    },
  ];

  return (
    <div className="d-flex gap-4">
      {socialMedia.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Enlace a mi perfil de ${link.name}`}
          className="text-decoration-none"
          style={{
            transition: "color 0.3s ease, opacity 0.3s ease",
            opacity: "0.8", // debe ser string para TS
            color: defaultColor,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.setProperty("opacity", "1");
            e.currentTarget.style.setProperty("color", primaryColor);
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.setProperty("opacity", "0.8");
            e.currentTarget.style.setProperty("color", defaultColor);
          }}
        >
          <link.icon size={iconSize} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
