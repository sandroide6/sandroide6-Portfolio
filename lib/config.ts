export const siteConfig = {
  firstName: 'Santiago',
  lastName: 'Echeverri',
  fullName: 'Santiago Echeverri',
  handle: 'sandroide6',
  role: 'Full Stack Developer & AI Systems',
  tagline: 'Construyo automatizaciones, sistemas inteligentes y experiencias digitales del futuro.',
  subTagline: 'Programación avanzada, IA y automatización para negocios y proyectos escalables.',
  email: 'sandroide.contact@gmail.com',
  location: 'Medellín, Colombia',
  summary:
    'Desarrollador enfocado en software, automatización, IA y sistemas escalables. Construyo soluciones de alto impacto con precisión técnica y enfoque en resultados reales.',
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
  { label: 'Stack', href: '#stack' },
  { label: 'Contacto', href: '#contact' },
] as const;

export const aboutStats = [
  { value: '5+', label: 'Proyectos' },
  { value: 'IA', label: 'Integrado' },
  { value: '∞', label: 'Escalable' },
];

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
    icon: 'GitBranch',
    title: 'Infraestructura',
    text: 'Experiencia con Docker, PostgreSQL, Supabase y arquitecturas de microservicios.',
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
    description:
      'Flujos inteligentes con LangChain, OpenAI y APIs personalizadas que automatizan procesos complejos.',
    tags: ['LangChain', 'OpenAI', 'Python'],
  },
  {
    icon: 'Globe',
    title: 'Desarrollo Web Full Stack',
    description:
      'Aplicaciones web modernas y responsivas con Next.js, React y arquitectura serverless optimizada.',
    tags: ['Next.js', 'React', 'TypeScript'],
  },
  {
    icon: 'Plug',
    title: 'Integraciones API',
    description:
      'Diseño e integración de REST APIs, webhooks y servicios de terceros para ecosistemas conectados.',
    tags: ['REST', 'GraphQL', 'Node.js'],
  },
  {
    icon: 'MessageSquare',
    title: 'Bots Inteligentes',
    description:
      'Bots para Telegram, WhatsApp, Discord y plataformas empresariales con procesamiento de lenguaje natural.',
    tags: ['Telegram API', 'NLP', 'Python'],
  },
  {
    icon: 'Settings2',
    title: 'Sistemas Personalizados',
    description:
      'Arquitecturas a medida: gestión de inventarios, CRMs, ERPs y dashboards operativos escalables.',
    tags: ['PostgreSQL', 'Docker', 'Supabase'],
  },
  {
    icon: 'BarChart3',
    title: 'Dashboards & Analytics',
    description:
      'Paneles en tiempo real con visualización de datos, métricas de negocio y reportes automatizados.',
    tags: ['React', 'Supabase', 'Realtime'],
  },
];

export const projects = [
  {
    title: 'Sistema Biblioteca',
    description:
      'Sistema de gestión bibliotecaria completo: control de préstamos, devoluciones, catálogo digital y reportes automatizados.',
    image: '/assets/img/ProyectoBiblioteca.png',
    tech: ['Java', 'MySQL', 'JavaFX'],
    github: 'https://github.com/sandroide6/Sistema-Biblioteca',
    featured: true,
  },
  {
    title: 'Inventario Tecnología',
    description:
      'Plataforma de gestión de activos tecnológicos con control de inventario, tracking y automatización de procesos operativos.',
    image: '/assets/img/ProyectoInventario.jpg',
    tech: ['Python', 'SQLite', 'Automatización'],
    github: 'https://github.com/sandroide6/InventarioTecnologia',
    featured: false,
  },
  {
    title: 'Analizador de Expresiones',
    description:
      'Analizador léxico y sintáctico para expresiones aritméticas: implementación de fundamentos de compiladores.',
    image: '/assets/img/ProyectoInventario.jpg',
    tech: ['C++', 'Algoritmos', 'Compiladores'],
    github: 'https://github.com/sandroide6/Analizador-de-Expresiones-Aritmeticas',
    featured: false,
  },
  {
    title: 'Videojuego Bichos',
    description:
      'Videojuego en Java con lógica de juego avanzada, física modular y arquitectura orientada a objetos.',
    image: '/assets/img/WarBichos.jpg',
    tech: ['Java', 'Game Dev', 'POO'],
    github: 'https://github.com/sandroide6/Videojuego-Bichos',
    featured: false,
  },
  {
    title: 'Proyectos IoT & Arduino',
    description:
      'Prototipos de hardware con sensores, microcontroladores y conectividad para automatización de entornos físicos.',
    image: '/assets/img/avatar.png',
    tech: ['Arduino', 'IoT', 'Electrónica'],
    github: 'https://github.com/sandroide6',
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
