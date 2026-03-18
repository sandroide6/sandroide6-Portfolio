import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Code, Users, GitBranch } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

interface GithubStatsData {
  public_repos: number;
  followers: number;
  following: number;
  public_gists: number;
  login: string;
}

interface StatItem {
  label: string;
  value: number;
  icon: typeof Code;
  colorClass: string;
}

const CACHE_KEY = "github-stats-cache-v1";

const GithubStats: React.FC = () => {
  const [stats, setStats] = useState<GithubStatsData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchGithubData = async () => {
      try {
        const cachedValue = sessionStorage.getItem(CACHE_KEY);
        if (cachedValue) {
          const cachedData: GithubStatsData = JSON.parse(cachedValue);
          setStats(cachedData);
          return;
        }

        const res = await fetch("https://api.github.com/users/sandroide6", {
          signal: controller.signal,
          headers: { Accept: "application/vnd.github+json" },
        });
        if (!res.ok) throw new Error(`Error ${res.status}`);

        const data: GithubStatsData = await res.json();
        setStats(data);
        sessionStorage.setItem(CACHE_KEY, JSON.stringify(data));
      } catch (fetchError) {
        if (fetchError instanceof DOMException && fetchError.name === "AbortError") return;

        setError("No fue posible cargar estadisticas de GitHub en este momento.");
        setStats(null);
      }
    };

    fetchGithubData();

    return () => controller.abort();
  }, []);

  if (error) {
    return (
      <section className="section-shell text-center">
        <p className="alert alert-danger">{error}</p>
      </section>
    );
  }

  if (!stats) {
    return (
      <section className="section-shell text-center">
        <p className="text-secondary">Cargando estadisticas de GitHub...</p>
      </section>
    );
  }

  const statItems: StatItem[] = [
    { label: "Repositorios Públicos", value: stats.public_repos, icon: Code, colorClass: "text-info" },
    { label: "Seguidores", value: stats.followers, icon: Users, colorClass: "text-warning" },
    { label: "Gists Públicos", value: stats.public_gists, icon: GitBranch, colorClass: "text-success" },
  ];

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 120, damping: 15 } },
  };

  return (
    <section className="section-shell" aria-labelledby="github-title">
      <div className="container-xl">
        <h2 id="github-title" className="section-title text-center">
          Actividad en GitHub
        </h2>

        <p className="section-lead text-center mx-auto mb-4">
          Repositorios, colaboraciones y constancia de trabajo publico.
        </p>

        <div className="text-center mb-5">
          <a
            href={`https://github.com/${stats.login}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-secondary btn-lg fw-semibold"
          >
            Ver perfil de {siteConfig.firstName}
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
              <motion.div key={item.label} className="col-12 col-md-6 col-lg-4" variants={itemVariants}>
                <div className="project-card h-100 p-4 text-start d-flex align-items-center">
                  <div className={`me-3 ${item.colorClass}`}>
                    <Icon size={34} />
                  </div>
                  <div>
                    <h3 className="h1 fw-bolder mb-0" style={{ lineHeight: 1 }}>
                      {item.value}
                    </h3>
                    <p className="text-secondary mb-0">{item.label}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default GithubStats;
