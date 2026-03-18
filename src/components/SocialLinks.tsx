import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

interface SocialLinksProps {
  iconSize?: number;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ iconSize = 24 }) => {
  const socialMedia = [
    {
      name: "GitHub",
      icon: Github,
      url: siteConfig.social.github,
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: siteConfig.social.linkedin,
    },
    {
      name: "Email",
      icon: Mail,
      url: `mailto:${siteConfig.email}`,
    },
  ];

  return (
    <div className="d-flex gap-3">
      {socialMedia.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target={link.name === "Email" ? undefined : "_blank"}
          rel="noopener noreferrer"
          aria-label={`Enlace a mi perfil de ${link.name}`}
          className="social-icon-link"
        >
          <link.icon size={iconSize} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
