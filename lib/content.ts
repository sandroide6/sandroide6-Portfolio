// Todo el texto del sitio vive aquí. Cada proyecto indica de dónde sale su descripción.

export const profile = {
  brand: 'Sr.cherry',
  brandUpper: 'SR.CHERRY',
  role: 'Desarrollador de software',
  studies: 'Tecnología en Desarrollo de Software',
  school: 'Instituto Tecnológico Metropolitano (ITM), Medellín',
  intro:
    'Estudiante de Tecnología en Desarrollo de Software en el ITM. Construyo sistemas web full-stack para organizaciones reales, con la seguridad pensada desde el diseño.',
  location: 'Medellín, Colombia',
  email: 'sandroide.contact@gmail.com',
  social: {
    github: 'https://github.com/sandroide6',
    instagram: 'https://www.instagram.com/sr.cherrym/',
    linkedin: 'https://www.linkedin.com/in/sandroide6',
  },
  seo: {
    title: 'Sr.cherry | Desarrollo de software',
    description:
      'Portafolio de Sr.cherry: sistemas web full-stack para organizaciones reales en Medellín, con la seguridad pensada desde el diseño.',
    siteUrl: 'https://sandroide6.github.io/sandroide6-Portfolio',
  },
} as const;

export const hero = {
  label: '[ Desarrollo de software · Seguridad ]',
  lineA: ['Construyo', 'software'],
  lineB: ['que', 'resiste.'],
};

export const manifesto = {
  text: 'Diseño, construyo y aseguro sistemas. Del requisito al despliegue, en un solo lugar.',
  // palabra tras la cual se inserta el icono en línea
  iconAfter: 'requisito',
  sub: 'SRS y modelos C4 antes de escribir código, desarrollo full-stack en React, Node y .NET, y despliegue en Vercel, Render y Firebase.',
};

export type Project = {
  slug: string;
  name: string;
  kind: string;
  year: string;
  summary: string;
  stack: string[];
  repo?: string;
  demo?: string;
  image?: string; // ruta dentro de /public/media
  source: string; // de dónde sale la información
};

export const featured: Project = {
  slug: 'gestor-jal',
  name: 'Gestor JAL',
  kind: 'Gestión documental',
  year: '2026',
  summary:
    'Sistema de gestión documental para la Junta Administradora Local de Medellín: genera documentos oficiales DOCX y PDF, maneja roles y auditoría, reportes con gráficas, respaldo en Google Drive y acceso remoto. Hecho dentro del acompañamiento tecnológico con la I.U. Pascual Bravo.',
  stack: ['React', 'Node + Express', 'PostgreSQL / Supabase', 'PWA', 'Vercel'],
  repo: 'https://github.com/sandroide6/gestor-jal-hibrido',
  demo: 'https://gestor-jal-frontend.vercel.app',
  image: 'h3-gestor-jal.webp',
  source: 'README de gestor-jal-hibrido',
};

export const projects: Project[] = [
  {
    slug: 'lama',
    name: 'L.A.M.A Medellín',
    kind: 'Gestión de miembros',
    year: '2025',
    summary:
      'Registro de miembros y motos de un club de motociclistas, estadísticas y reportes PDF y CSV.',
    stack: ['React 19', 'TypeScript', 'Firebase', 'ASP.NET Core 9'],
    repo: 'https://github.com/sandroide6/L.A.M.A-Medellin_Members-Management-System',
    demo: 'https://lama-medellin.web.app',
    image: 'h5a-lama.webp',
    source: 'README del repo',
  },
  {
    slug: 'pymes360',
    name: 'Pymes360',
    kind: 'ERP offline-first',
    year: '2026',
    summary: 'ERP offline-first para pymes colombianas que sincroniza con la nube cuando hay conexión.',
    stack: ['React', 'Dexie', 'Supabase', 'PWA'],
    repo: 'https://github.com/sandroide6/pymes360',
    source: 'Descripción del repo',
  },
  {
    slug: 'vlsm',
    name: 'Calculadora VLSM',
    kind: 'Redes',
    year: '2026',
    summary:
      'Planes de direccionamiento IP con árbol binario, configuración Cisco IOS, detector de solapamiento y exportación a CSV y PDF.',
    stack: ['React 18', 'Vite'],
    repo: 'https://github.com/sandroide6/vlsm-calculator',
    source: 'README del repo',
  },
  {
    slug: 'sportpyramid',
    name: 'SportPyramid',
    kind: 'Torneos',
    year: '2025',
    summary: 'Llaves de eliminación para más de 30 deportes, con modo árbitro, modo público y funcionamiento sin conexión.',
    stack: ['TypeScript', 'React', 'Radix UI', 'IndexedDB'],
    repo: 'https://github.com/sandroide6/Web_SportPyramid',
    source: 'README del repo',
  },
  {
    slug: 'innovacion',
    name: 'Innovación Curricular',
    kind: 'CRUD genérico',
    year: '2026',
    summary: 'Sitio con API REST genérica por capas, frontend en Blazor Server y base de datos SQL Server.',
    stack: ['C#', 'ASP.NET Core 9', 'Blazor', 'SQL Server'],
    repo: 'https://github.com/sandroide6/SISTEMA-DE-GESTION-DE-INFORMACION-DEL-CONOCIMIENTO-UNIVERSITARIO',
    source: 'README del repo',
  },
  {
    slug: 'biblioteca',
    name: 'Biblioteca .NET',
    kind: 'Arquitectura por capas',
    year: '2025',
    summary: 'Préstamo de libros en consola con dominio, aplicación e infraestructura separados y pruebas con xUnit.',
    stack: ['C#', '.NET 8', 'xUnit'],
    repo: 'https://github.com/sandroide6/Library_Management_System',
    source: 'README del repo',
  },
];

export const archive = [
  { name: 'WarBichos', stack: 'Java', repo: 'https://github.com/sandroide6/WarBichos-Game' },
  { name: 'Analizador de expresiones', stack: 'C++', repo: 'https://github.com/sandroide6/Arithmetic_Expression_Analyzer' },
];

export const thesis = {
  label: '[ Trabajo de grado · En desarrollo ]',
  title: 'Plataforma experimental de funciones hash',
  text: 'Rendimiento, colisiones y efecto avalancha en SHA-2, SHA-3 y BLAKE2/3. Responsable del modelo del núcleo criptográfico y de la telemetría.',
  image: 'h5e-hash.webp',
};

// Porcentaje del código público según GitHub
export const languages = [
  { name: 'JavaScript', pct: 33 },
  { name: 'C#', pct: 20 },
  { name: 'HTML', pct: 19 },
  { name: 'TypeScript', pct: 14 },
  { name: 'Python', pct: 4 },
];

export const stats = { publicRepos: 20 };

export const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Proyectos', href: '#proyectos', plus: true },
  { label: 'Stack', href: '#stack' },
  { label: 'Sobre mí', href: '#sobre-mi' },
] as const;
