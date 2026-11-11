import { featured, profile, projects } from '@/lib/content';

export default function Footer() {
  const list = [featured, ...projects.slice(0, 3)];
  return (
    <footer className="site-footer">
      <div className="wrap">
        <p className="brand">
          {profile.brandUpper} —<br />
          <span>
            software a la medida,
            <br />
            seguro desde el diseño.
          </span>
        </p>
        <div className="cols">
          <div>
            <span className="label">[ Proyectos ]</span>
            <ul>
              {list.map((p) => (
                <li key={p.slug}>
                  <a href={p.demo ?? p.repo} target="_blank" rel="noopener noreferrer">
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="label">[ Sobre mí ]</span>
            <ul>
              <li><a href="#sobre-mi">Estudios</a></li>
              <li><a href="#stack">Stack</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
          <div>
            <span className="label">[ Conectar ]</span>
            <ul>
              <li><a href={profile.social.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href={profile.social.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="legal">
          <span>© {new Date().getFullYear()} {profile.brand}</span>
          <span>{profile.location}</span>
        </div>
      </div>
    </footer>
  );
}
