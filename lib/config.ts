export const siteConfig = {
  firstName: 'Santiago',
  lastName: 'Echeverri',
  fullName: 'Santiago Echeverri',
  handle: 'sandroide6',
  role: 'Full Stack Developer & AI Systems',
  tagline: 'Construyo automatizaciones, sistemas inteligentes y experiencias digitales.',
  email: 'sandroide.contact@gmail.com',
  location: 'Medellín, Colombia',
  social: {
    github: 'https://github.com/sandroide6',
    linkedin: 'https://www.linkedin.com/in/sandroide6',
  },
  seo: {
    title: 'Santiago Echeverri | Full Stack Dev & AI Systems',
    description:
      'Portfolio de Santiago Echeverri: desarrollo de software avanzado, automatización con IA, APIs, bots y sistemas escalables.',
    siteUrl: 'https://sandroide6.github.io/sandroide6-Portfolio',
  },
} as const;

export const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Sobre mí', href: '#about' },
  { label: 'Servicios', href: '#services' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Contacto', href: '#contact' },
] as const;

export const aboutHighlights = [
  {
    icon: 'GraduationCap',
    title: 'Formación técnica',
    text: 'Desarrollador de Software con enfoque en proyectos reales y sistemas escalables.',
  },
  {
    icon: 'Code2',
    title: 'Stack moderno',
    text: 'Python, TypeScript, React, Next.js, Node.js, Docker y herramientas de IA avanzadas.',
  },
  {
    icon: 'Zap',
    title: 'Automatización',
    text: 'Diseño de flujos inteligentes, bots y pipelines que eliminan trabajo manual repetitivo.',
  },
  {
    icon: 'Cpu',
    title: 'Sistemas inteligentes',
    text: 'Integración de modelos de lenguaje (OpenAI, LangChain) en productos reales y escalables.',
  },
  {
    icon: 'Heart',
    title: 'Compromiso',
    text: 'Disciplina personal, aprendizaje continuo y enfoque en calidad de entregables.',
  },
];

export const services = [
  {
    icon: 'Bot',
    title: 'Automatización IA',
    description: 'Flujos y APIs con LangChain y OpenAI que automatizan procesos.',
    tags: ['LangChain', 'OpenAI', 'Python'],
  },
  {
    icon: 'Globe',
    title: 'Desarrollo Web Full Stack',
    description: 'Aplicaciones web con Next.js, React y arquitectura serverless.',
    tags: ['Next.js', 'React', 'TypeScript'],
  },
  {
    icon: 'Plug',
    title: 'Integraciones API',
    description: 'Diseño e integración de REST APIs, webhooks y servicios de terceros.',
    tags: ['REST', 'GraphQL', 'Node.js'],
  },
  {
    icon: 'MessageSquare',
    title: 'Bots Inteligentes',
    description: 'Bots para Telegram, WhatsApp y Discord con procesamiento de lenguaje natural.',
    tags: ['Telegram API', 'NLP', 'Python'],
  },
  {
    icon: 'Settings2',
    title: 'Sistemas Personalizados',
    description: 'Arquitecturas a medida: inventarios, CRMs, ERPs y dashboards operativos.',
    tags: ['PostgreSQL', 'Docker', 'Supabase'],
  },
  {
    icon: 'BarChart3',
    title: 'Dashboards & Analytics',
    description: 'Paneles en tiempo real con métricas de negocio y reportes automatizados.',
    tags: ['React', 'Supabase', 'Realtime'],
  },
];

export const projects = [
  {
    title: 'L.A.M.A. Medellín — Gestión de Miembros',
    description: 'Sistema de gestión de miembros con React, Firebase y ASP.NET Core 9 Web API.',
    tech: ['React', 'Firebase', 'ASP.NET Core'],
    github: 'https://github.com/sandroide6/L.A.M.A-Medellin_Members-Management-System',
    featured: true,
  },
  {
    title: 'Transcriptor de Audio IA',
    description: 'Transcripción local de audio con Whisper: pipeline FFmpeg, Demucs, faster-whisper y pyannote.',
    tech: ['Python', 'Whisper', 'Flask'],
    github: 'https://github.com/sandroide6/audio-transcriptor-whisper-ollama',
    featured: false,
  },
  {
    title: 'SportPyramid',
    description: 'PWA offline-first para gestionar brackets de torneo en más de 30 disciplinas deportivas.',
    tech: ['TypeScript', 'PWA', 'Offline-first'],
    github: 'https://github.com/sandroide6/Web_SportPyramid',
    featured: false,
  },
  {
    title: 'Gestión Innovación Curricular',
    description: 'Sitio corporativo con operaciones CRUD para información de innovación curricular universitaria.',
    tech: ['C#', 'ASP.NET Core', 'Blazor'],
    github: 'https://github.com/sandroide6/SISTEMA-DE-GESTION-DE-INFORMACION-DEL-CONOCIMIENTO-UNIVERSITARIO',
    featured: false,
  },
  {
    title: 'Sistema Biblioteca',
    description: 'Consola en .NET 8 para préstamo de libros aplicando los 4 pilares de POO.',
    tech: ['C#', '.NET 8', 'POO'],
    github: 'https://github.com/sandroide6/Library_Management_System',
    featured: false,
  },
  {
    title: 'WarBichos',
    description: 'Juego de estrategia por turnos en cuadrícula, para ejecución en consola.',
    tech: ['Java', 'Game Dev', 'Consola'],
    github: 'https://github.com/sandroide6/WarBichos-Game',
    featured: false,
  },
  {
    title: 'Calculadora VLSM',
    description: 'Calculadora VLSM interactiva para diseño de planes de direccionamiento IP.',
    tech: ['JavaScript', 'Redes', 'VLSM'],
    github: 'https://github.com/sandroide6/vlsm-calculator',
    featured: false,
  },
  {
    title: 'Analizador de Expresiones',
    description: 'Analizador de expresiones aritméticas con POO y estructura de árbol binario.',
    tech: ['C++', 'Algoritmos', 'POO'],
    github: 'https://github.com/sandroide6/Arithmetic_Expression_Analyzer',
    featured: false,
  },
];

export const techStack = [
  { name: 'Python', category: 'Languages', level: 90 },
  { name: 'TypeScript', category: 'Languages', level: 85 },
  { name: 'Java', category: 'Languages', level: 80 },
  { name: 'C++', category: 'Languages', level: 65 },
  { name: 'React', category: 'Frontend', level: 88 },
  { name: 'Next.js', category: 'Frontend', level: 82 },
  { name: 'Node.js', category: 'Backend', level: 78 },
  { name: 'OpenAI API', category: 'AI/ML', level: 85 },
  { name: 'LangChain', category: 'AI/ML', level: 75 },
  { name: 'Docker', category: 'DevOps', level: 72 },
  { name: 'PostgreSQL', category: 'Database', level: 80 },
  { name: 'MySQL', category: 'Database', level: 82 },
  { name: 'Supabase', category: 'Database', level: 78 },
  { name: 'MongoDB', category: 'Database', level: 70 },
  { name: 'Arduino', category: 'IoT', level: 85 },
  { name: 'Git', category: 'Tools', level: 88 },
];
