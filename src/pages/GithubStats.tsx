import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Code, Users, GitBranch } from "lucide-react";

// Tipado de los datos de GitHub
interface GithubStatsData {
  public_repos: number;
  followers: number;
  following: number;
  public_gists: number;
  login: string;
}

// Tipado para cada estadística
interface StatItem {
  label: string;
  value: number;
  icon: typeof Code; // Componente React
  colorClass: string;
}

const GithubStats: React.FC = () => {
  const [stats, setStats] = useState<GithubStatsData | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Fetch de datos de GitHub
  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const res = await fetch("https://api.github.com/users/sandroide6");
        if (!res.ok) throw new Error(`Error ${res.status}`);
        const data: GithubStatsData = await res.json();
        setStats(data);
      } catch {
        setError(
          "Lo sentimos, no pudimos cargar las estadísticas de GitHub. Inténtalo más tarde."
        );
        setStats(null);
      }
    };
    fetchGithubData();
  }, []);

  if (error) {
    return (
      <section className="container py-5 text-center">
        <p className="alert alert-danger">{error}</p>
      </section>
    );
  }

  if (!stats) {
    return (
      <section className="container py-5 text-center">
        <p className="text-secondary">Cargando estadísticas de GitHub... ⏳</p>
      </section>
    );
  }

  // Definimos los items de estadísticas
  const statItems: StatItem[] = [
    { label: "Repositorios Públicos", value: stats.public_repos, icon: Code, colorClass: "text-info" },
    { label: "Seguidores", value: stats.followers, icon: Users, colorClass: "text-warning" },
    { label: "Gists Públicos", value: stats.public_gists, icon: GitBranch, colorClass: "text-success" },
  ];

  // Variantes de animación
  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 120, damping: 15 } },
  };

  return (
    <section className="container py-5">
      <h2 className="fw-bold text-center mb-5 display-5">
        Mi Perfil en <span className="text-primary-light">GitHub</span>
      </h2>

      <div className="text-center mb-5">
        <a
          href={`https://github.com/${stats.login}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-secondary btn-lg fw-bold"
        >
          Ver Perfil de GitHub
        </a>
      </div>

      <motion.div
        className="row g-4 justify-content-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {statItems.map((item) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              className="col-12 col-md-6 col-lg-4"
              variants={itemVariants}
            >
              <div className="project-card h-100 p-4 text-start d-flex align-items-center">
                <div className={`me-3 ${item.colorClass}`}>
                  <Icon size={36} />
                </div>
                <div>
                  <h3 className="h1 fw-bolder mb-0 text-white" style={{ lineHeight: 1 }}>
                    {item.value}
                  </h3>
                  <p className="text-secondary mb-0">{item.label}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default GithubStats;
