# Bookmark — Landing Page (Sprint 1)

## Iteración 2 — Refactorización con SASS

**Estado:** completada

### Objetivo
Refactorizar los estilos CSS usando SASS para mejorar la organización, reutilización y mantenibilidad del código.

### Estructura de SASS implementada
- `scss/main.scss` — archivo principal que importa parciales.
- `scss/_variables.scss` — variables (colores, tipografías, espacios).
- `scss/_mixins.scss` — mixins reutilizables (p. ej. mixin para botones).
- `scss/_layout.scss` — reset y estilos globales (body, contenedores).
- `scss/_components.scss` — estilos por componente (navbar, hero, features, download, faq, footer).
- `css/style.css` — CSS compilado automáticamente desde SASS (incluido en el repo para despliegue).

### Qué se ha hecho en esta iteración
- Todas las reglas de `css/style.css` fueron migradas a parciales SASS.
- Variables para colores y tipografías definidas y usadas.
- Mixins implementados para botones y elementos repetidos.
- Mobile-first y media queries colocadas en los parciales correspondientes.
- Compilación SASS: `sass scss/main.scss css/style.css` (se usa `--watch` durante el desarrollo).


**Estado:** Iteración 1 (Vanilla)

## Descripción
Landing page  "Bookmark" del bootcamp IT Academy.  
Esta rama contiene la versión *vanilla* (HTML + CSS + assets) de la página de inicio.

## Lo que incluye (hasta ahora)
- Estructura semántica con `<header>`, `<main>`, `<footer>`.
- Barra de navegación (HTML/CSS).
- Sección hero con grid responsive (dos columnas: texto + imagen).
- Recursos en `images/`.
- Archivo CSS compilado (móvil-first).
- README con instrucciones.

## Cómo ver el proyecto localmente
1. Clona o descarga el repo y cambia a la rama `feature/vanilla-implementation`.
2. Abre `index.html` en tu navegador (doble clic) o usa Live Server en VS Code.

## Estructura del proyecto

BOOKMARK-LANDING-PAGE/
|-css/
    -style.css
|-images/
|-js/
    main.js
|-index.html
|-README


## Notas para el revisor
- Esta rama corresponde a la entrega de la **Iteración 1**.
- Validaciones realizadas: estructura semántica, `alt` en imágenes, diseño móvil-first.
- Pendiente: mejorar accesibilidad (focus states), añadir form validation y optimizar imágenes.

## Próximos pasos
- Iteración 2: refactorizar CSS con SASS (rama `feature/sass-implementation`).
- Iteración 3: integración con Bootstrap y personalización SASS (rama `feature/bootstrap-implementation`).

