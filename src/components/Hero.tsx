import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="section-shell hero-section d-flex align-items-center" aria-labelledby="hero-title">
      <div className="container-xl">
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-lg-5 text-center text-lg-start">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="hero-kicker"
            >
              Portafolio profesional
            </motion.p>

            <motion.h1
              id="hero-title"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="hero-title"
            >
              {siteConfig.fullName}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="hero-subtitle"
            >
              {siteConfig.role}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="hero-summary"
            >
              {siteConfig.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="d-flex gap-3 flex-wrap justify-content-center justify-content-lg-start"
            >
              <button type="button" onClick={() => navigate("/projects")} className="btn btn-primary btn-lg px-4">
                {siteConfig.hero.ctaPrimary}
                <ArrowRight size={17} />
              </button>
              <button
                type="button"
                onClick={() => navigate("/#contact")}
                className="btn btn-outline-secondary btn-lg px-4"
              >
                {siteConfig.hero.ctaSecondary}
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="hero-meta mt-4"
            >
              <p className="d-flex align-items-center justify-content-center justify-content-lg-start gap-2 mb-2">
                <MapPin size={16} />
                {siteConfig.location}
              </p>
              <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
                <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github size={22} />
                </a>
                <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin size={22} />
                </a>
                <a href={`mailto:${siteConfig.email}`} aria-label="Email">
                  <Mail size={22} />
                </a>
              </div>
            </motion.div>
          </div>

          <div className="col-lg-7 d-flex justify-content-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65 }}
              whileHover={{ scale: 1.05 }}
              className="hero-avatar-frame"
            >
              <img src={siteConfig.hero.avatar} alt={siteConfig.fullName} className="hero-avatar" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
