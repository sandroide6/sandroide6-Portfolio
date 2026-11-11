# Sr.cherry · Portafolio

Portafolio personal de desarrollo de software: escenas a pantalla completa con un núcleo de partículas en Three.js, revelado de texto por scroll, carrusel 3D de proyectos y bento con datos reales. Paleta Night `#151515` y Burgundy `#93032E`.

## Stack

- Next.js 15 (App Router, exportación estática) y React 19
- three + @react-three/fiber 9 (partículas con shader propio)
- GSAP + ScrollTrigger (animaciones ligadas al scroll) y Lenis (scroll suave)
- EmailJS para el formulario de contacto (opcional)
- Fuentes Geist y Geist Mono con `next/font`

## Scripts

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # genera out/
npm run deploy   # build + publica out/ en la rama gh-pages
```

Requiere Node.js 20 o superior.

## Estructura

- `lib/content.ts`: todo el texto (perfil, proyectos, estadísticas). Cambiar un proyecto no toca componentes.
- `components/sections/`: Hero, Manifesto, FeaturedCase, Bridge, ProjectsCarousel, AboutBento, Contact.
- `components/three/ParticleField.tsx`: nube de partículas (núcleo, huella, candado, polvo) con interacción de cursor.
- `lib/shapes.ts`: generadores de las formas de partículas.
- `app/globals.css`: tokens de color, tipografía y estilos.
- `public/media/`: imágenes generadas con Higgsfield.

## Imágenes

Los componentes buscan estos archivos en `public/media/`. Si un archivo no existe, se muestra un respaldo dibujado en código.

| Archivo | Dónde se usa |
| --- | --- |
| `h1-core.webp` | Fondo del hero (y `public/og.jpg` para redes) |
| `h5a-lama.webp` | Tarjeta de L.A.M.A Medellín |
| `h5e-hash.webp` | Bento, trabajo de grado |

## Formulario de contacto

Sin variables de entorno, la sección de contacto muestra solo el correo. Para activar el formulario, crea `.env.local`:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=...
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=...
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=...
```

La plantilla de EmailJS debe usar los campos `from_name`, `reply_to` y `message`.

## Accesibilidad y rendimiento

- Con `prefers-reduced-motion` se desactivan las partículas animadas, el carrusel fijado y Lenis.
- Sin WebGL, las secciones muestran su fondo en CSS.
- El render 3D se pausa cuando la sección no está en pantalla y la densidad de píxeles se limita a 1,5.

## Derechos de uso

Este repositorio está bajo un esquema de "All rights reserved". No se autoriza copia, modificación, redistribución ni uso derivado sin permiso escrito del autor.
