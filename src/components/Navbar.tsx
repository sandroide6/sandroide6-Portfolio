import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Send } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { label: "Inicio", id: "hero" },
  { label: "Sobre mí", id: "about" },
  { label: "Habilidades", id: "skills" },
  { label: "Proyectos", id: "projects" },
];

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsDark(document.body.classList.contains("dark-theme"));
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    document.body.classList.toggle("dark-theme");
    setIsDark(prev => !prev);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = document.querySelector('.navbar')?.clientHeight || 0;
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - offset - 10,
      behavior: "smooth"
    });
    setIsMenuOpen(false);
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.3 } }),
  };

  return (
    <nav
      className="navbar navbar-expand-md fixed-top transition-all"
      style={{
        backgroundColor: isScrolled ? 'rgba(11,11,15,0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(6px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(6px)' : 'none',
        zIndex: 1000,
      }}
    >
      <div className="container d-flex align-items-center py-2">
        <button
          className="navbar-brand fw-bold fs-4 text-white border-0 bg-transparent"
          onClick={() => scrollToSection("hero")}
        >
          S<span className="text-primary-base">E</span>
        </button>

        <button
          className="navbar-toggler border-0 ms-auto"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} color="white"/> : <Menu size={24} color="white"/>}
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto align-items-center gap-2">
            {navItems.map((item, i) => (
              <motion.li
                className="nav-item"
                key={item.id}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={linkVariants}
              >
                <button
                  className="btn btn-link nav-link px-3 text-secondary fw-medium"
                  onClick={() => scrollToSection(item.id)}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--color-primary-base)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-secondary)'}
                >
                  {item.label}
                </button>
              </motion.li>
            ))}

            <motion.li
              className="nav-item d-none d-md-block ms-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <button 
                className="btn btn-gradient fw-bold px-4 py-2 shadow-lg"
                onClick={() => scrollToSection("contact")}
              >
                <Send size={16} className="me-2" />
                Contáctame
              </button>
            </motion.li>
          </ul>
        </div>

        <button 
          className="btn btn-sm btn-outline-light ms-3"
          onClick={toggleTheme}
          title="Cambiar tema"
        >
          {isDark ? <Sun size={18}/> : <Moon size={18}/>}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
