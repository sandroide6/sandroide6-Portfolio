import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="container py-5 vh-100 d-flex align-items-center">
      <div className="row align-items-center">
        {/* Imagen de Perfil */}
        <div className="col-lg-4 text-center mb-4 mb-lg-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <div
              className="rounded-circle overflow-hidden shadow-lg position-relative"
              style={{
                width: "320px",
                height: "320px",
                borderRadius: "50%",
                padding: "4px",
                background: "conic-gradient(from 0deg, #3b82f6, #f15bb5, #3b82f6)",
                transition: "all 0.5s ease",
              }}
            >
              <img
                src="src/assets/img/avatar.png"
                alt="Santiago Echeverri"
                className="w-100 h-100 object-cover rounded-circle"
                style={{
                  display: "block",
                  borderRadius: "50%",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.4)",
                }}
              />
              {/* Glow animado al hover */}
              <motion.div
                className="position-absolute top-0 start-0 w-100 h-100 rounded-circle"
                style={{ zIndex: 1 }}
                whileHover={{ boxShadow: "0 0 30px 8px rgba(241, 91, 181, 0.6)" }}
              />
            </div>
          </motion.div>
        </div>

        {/* Texto y Botones */}
        <div className="col-lg-8 text-center text-lg-start">
          <motion.h1
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="display-3 fw-bolder mb-3"
          >
            Hola, soy <span className="text-primary-base">Santiago Echeverri</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lead text-secondary mb-4"
          >
            Desarrollador de Software | Hardware & IoT | Emprendedor 🛠️ <br />
            Apasionado por la tecnología, la automatización y la innovación.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="d-flex gap-3 flex-wrap justify-content-center justify-content-lg-start mb-4"
          >
            <button
              onClick={() => navigate("/projects")}
              className="btn btn-primary btn-lg shadow-sm fw-bold px-5 py-3"
            >
              Ver Proyectos
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="btn btn-outline-secondary btn-lg fw-bold px-5 py-3"
            >
              Contáctame
            </button>
            <a
              href="/assets/CV_Santiago_Echeverri.pdf"
              download
              className="btn btn-gradient fw-bold px-4 py-3 shadow-lg"
            >
              Descargar CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="d-flex gap-4 mt-3 justify-content-center justify-content-lg-start"
          >
            <a href="https://github.com/sandroide6" target="_blank" rel="noreferrer">
              <Github size={30} className="text-light hover:text-primary transition-colors duration-300" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <Linkedin size={30} className="text-light hover:text-primary transition-colors duration-300" />
            </a>
            <a href="mailto:tuemail@dominio.com">
              <Mail size={30} className="text-light hover:text-primary transition-colors duration-300" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
