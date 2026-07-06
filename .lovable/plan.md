# Plan: Clon visual de FlowFest

Voy a recrear la estructura, layout, paleta y estilo visual de flowfest.co.uk como una landing one-page. El contenido será placeholder (texto similar al original, nombres genéricos) y lo reemplazaremos al final con la información real de tu empresa.

## Estilo visual

- **Paleta retro/cálida**: fondo crema (#F3E9D0 aprox), naranjas vibrantes, rosas, amarillos mostaza, negro para contornos.
- **Tipografía**: display bold con cierto carácter retro para titulares + sans-serif limpia para cuerpo.
- **Estética**: ilustraciones planas tipo sticker con contorno negro, formas geométricas decorativas (rayas de colores en esquinas), burbujas de diálogo, sensación de festival/playful.
- **Bordes redondeados, sombras suaves, mucho aire.**

## Estructura de secciones (en orden, una sola página)

1. **Nav** — logo a la izquierda, links centrales (About, Speakers, FAQs), CTA "Buy Tickets" a la derecha.
2. **Hero** — saludo "Hi Friends!" en burbuja, titular grande tipo "Webflow chat, festival vibes, good times.", subtítulo "FlowFest is back.", elementos decorativos (sol, rayas de colores).
3. **Galería de imágenes del evento** — 5 fotos en collage con botón "Shuffle".
4. **Marquee de sponsors** — banda horizontal infinita con logos placeholder "Sponsored by".
5. **Sobre el evento** — collage de fotos a la izquierda + "What is FlowFest? / The No.1 Fest for Web Designers & Devs" + descripción + botón "Watch the 2024 Recap".
6. **Speaker Lineup** — grid de 5 tarjetas (Keynote, Development, Animation, Design, Animation) con foto, nombre y bio corta. Tarjetas con colores alternados.
7. **What to Expect** — 5 cards horizontales: Expert Talks, Fun + Games, Food + Drink, Live Music, Community.
8. **Community / Volunteers** — texto "An Event Ran by The Community, For The Community" + 6 avatares circulares de voluntarios + CTA.
9. **FlowfestLove** — carrusel/grid de 5 "tweets" estilo tarjeta.
10. **FAQs** — accordion con 5 preguntas (precio, cómo llegar, comida, qué traer, afterparty) + imagen lateral.
11. **CTA final** — "Get Your Ticket for the Community-Led Event of the Year" + descripción + botón grande.
12. **Footer** — minimal con redes sociales y créditos.

## Detalles técnicos

- TanStack Start route en `src/routes/index.tsx`.
- Design tokens en `src/styles.css` (paleta crema/naranja/rosa, fuentes, sombras, radios).
- Componentes separados por sección en `src/components/sections/`.
- Imágenes: generaré ilustraciones originales en estilo sticker (sol con cara, frutas, elementos festival) e imágenes placeholder para fotos del evento y speakers, todas con look cohesivo retro.
- Animaciones suaves con Tailwind/Motion: marquee de sponsors, hover en cards, fade-in al scroll.
- SEO básico en `head()` (title, description, og).
- Responsive (mobile-first).

## Qué NO incluiré (para evitar problemas de propiedad intelectual)

- Logo exacto de FlowFest, fotos reales de los speakers o copy textual largo. Usaré nombres/textos similares pero genéricos como placeholder, y los reemplazaremos por los tuyos al final.

¿Le doy a "Implement plan"?
