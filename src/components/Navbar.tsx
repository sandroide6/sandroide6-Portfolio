import { useEffect, useState } from "react";
import { ExternalLink, Menu, Moon, Sun, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { navSections, siteConfig } from "../config/siteConfig";

type Theme = "light" | "dark";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [theme, setTheme] = useState<Theme>("dark");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const nextTheme: Theme = savedTheme === "light" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  }, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname, location.hash]);

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }

    const target = document.getElementById(id);
    if (!target) return;

    const navbarHeight = document.querySelector(".main-navbar")?.clientHeight ?? 86;
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - navbarHeight - 10,
      behavior: "smooth",
    });
  };

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  return (
    <header className={`main-navbar ${isScrolled ? "is-scrolled" : ""}`}>
      <div className="container-xl nav-inner">
        <button
          type="button"
          className="brand-mark"
          onClick={() => scrollToSection("hero")}
          aria-label="Ir al inicio"
        >
          {siteConfig.firstName[0]}
          <span>{siteConfig.lastName[0]}</span>
        </button>

        <button
          type="button"
          className="menu-toggle d-md-none"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <div className={`nav-panel ${isMenuOpen ? "open" : ""}`}>
          <ul className="nav-links-list" role="list">
            {navSections.map((item) => (
              <li key={item.id}>
                <button type="button" className="nav-link-button" onClick={() => scrollToSection(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <button type="button" className="btn btn-primary nav-cta" onClick={() => navigate("/projects")}> 
              Portfolio completo
              <ExternalLink size={15} />
            </button>
            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Activar tema claro" : "Activar tema oscuro"}
              title={theme === "dark" ? "Tema claro" : "Tema oscuro"}
            >
              {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
