import avatarImage from "../assets/img/avatar.png";
import inventoryImage from "../assets/img/ProyectoInventario.jpg";
import profileMainImage from "../assets/img/profile-main.jpeg";
import warBichosImage from "../assets/img/WarBichos.jpg";

export interface SocialLink {
	label: string;
	href: string;
}

export interface SkillCategory {
	name: string;
	skills: string[];
}

export interface ProjectItem {
	title: string;
	description: string;
	image: string;
	tech: string[];
	github: string;
	liveDemo?: string;
	featured?: boolean;
}

export const siteConfig = {
	firstName: "Santiago",
	lastName: "Echeverri",
	fullName: "Santiago Echeverri",
	role: "Desarrollador de Software e IoT",
	email: "sandroide.contact@gmail.com",
	location: "Medellin, Colombia",
	summary:
		"Desarrollador enfocado en software, automatizacion y proyectos IoT. Construyo soluciones utiles con enfoque en calidad, experiencia de usuario y resultados reales.",
	social: {
		github: "https://github.com/sandroide6",
		linkedin: "https://www.linkedin.com/in/sandroide6",
	},
	hero: {
		avatar: profileMainImage,
		ctaPrimary: "Ver proyectos",
		ctaSecondary: "Contactar",
	},
	seo: {
		title: "Santiago Echeverri | Portafolio de Software e IoT",
		description:
			"Portafolio profesional de Santiago Echeverri: desarrollo de software, automatizacion, proyectos IoT y soluciones tecnologicas.",
		siteUrl: "https://sandroide6.github.io/sandroide6-Portfolio",
		ogImage: "/assets/img/ProyectoBiblioteca.png",
	},
} as const;

export const navSections = [
	{ label: "Inicio", id: "hero" },
	{ label: "Sobre mi", id: "about" },
	{ label: "Habilidades", id: "skills" },
	{ label: "Proyectos", id: "projects" },
	{ label: "Contacto", id: "contact" },
] as const;

export const aboutHighlights = [
	"Estudiante de Desarrollo de Software con orientacion a proyectos reales y escalables.",
	"Experiencia practica en Python, Java, TypeScript y automatizacion con IoT.",
	"Interes fuerte en optimizacion de procesos, integracion hardware-software y producto digital.",
	"Capacidad para convertir ideas tecnicas en soluciones funcionales con enfoque profesional.",
] as const;

export const skillCategories: SkillCategory[] = [
	{
		name: "Lenguajes y Frameworks",
		skills: ["TypeScript", "JavaScript", "React", "Python", "Java"],
	},
	{
		name: "Backend y Datos",
		skills: ["Node.js", "MySQL", "MongoDB", "APIs REST"],
	},
	{
		name: "Herramientas",
		skills: ["Git", "GitHub", "VS Code", "Postman"],
	},
	{
		name: "Hardware e IoT",
		skills: ["Arduino", "Sensores", "Automatizacion", "Prototipado"],
	},
];

export const socialLinks: SocialLink[] = [
	{ label: "GitHub", href: siteConfig.social.github },
	{ label: "LinkedIn", href: siteConfig.social.linkedin },
	{ label: "Email", href: `mailto:${siteConfig.email}` },
];

export const projects: ProjectItem[] = [
	{
		title: "Sistema Biblioteca",
		description:
			"Sistema de gestion bibliotecaria para controlar prestamos, devoluciones y catalogo de libros.",
		image: "/assets/img/ProyectoBiblioteca.png",
		tech: ["Java", "MySQL", "JavaFX"],
		github: "https://github.com/sandroide6/Sistema-Biblioteca",
		featured: true,
	},
	{
		title: "Inventario Tecnologia",
		description:
			"Aplicacion para gestion de inventario tecnologico con control de activos y procesos operativos.",
		image: inventoryImage,
		tech: ["Python", "SQLite", "Automatizacion"],
		github: "https://github.com/sandroide6/InventarioTecnologia",
	},
	{
		title: "Analizador de Expresiones",
		description:
			"Analizador lexico y sintactico para evaluar expresiones aritmeticas y reforzar fundamentos de compiladores.",
		image: inventoryImage,
		tech: ["C++", "Algoritmos", "Compiladores"],
		github: "https://github.com/sandroide6/Analizador-de-Expresiones-Aritmeticas",
	},
	{
		title: "Videojuego Bichos",
		description:
			"Videojuego desarrollado en Java con enfoque en logica de juego, interaccion y arquitectura modular.",
		image: warBichosImage,
		tech: ["Java", "Game Dev", "POO"],
		github: "https://github.com/sandroide6/Videojuego-Bichos",
	},
	{
		title: "Proyectos Arduino e IoT",
		description:
			"Prototipos de hardware y automatizacion con sensores, microcontroladores y conectividad para casos reales.",
		image: avatarImage,
		tech: ["Arduino", "IoT", "Electronica"],
		github: "https://github.com/sandroide6",
	},
];
