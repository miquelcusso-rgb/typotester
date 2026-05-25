# TypoTester · CLAUDE.md

> Memoria específica de este repo. Convenciones globales en `~/Documents/sites-system/CLAUDE.md`.

## Qué es

- **Marca**: TypoTester
- **Tipo**: Herramienta
- **Dominio candidato**: probatipo.example.com (⚠ placeholder, actualizar al comprar dominio definitivo)
- **Repo en disco**: `~/Documents/sites-system/sites/typotester/`
- **Objetivo**: ver PROJECTS.md

## SEO

- **Keyword principal**: probar tipografías online
- **Title actual**: TypoTester · Probar tipografías online en español
- **Description actual**: Prueba cualquier tipografía (Google Fonts o archivo local) antes de usarla. Comparador A/B, presets de titular y párrafo, compartir por URL.
- **Idioma principal**: es-ES
- **JSON-LD usado**: WebApplication

## Estado actual

⛔ **CANCELADO (2026-05-25)** tras estudio de mercado (`ESTUDIO-MERCADO.md`). El nicho "comparar Google Fonts lado a lado" está comoditizado (Google Fonts + docena de clones gratuitos), sin hueco SEO para un dominio nuevo ni monetización viable como herramienta pura. El MVP queda como pieza de portfolio; el PR `feature/mvp` se cerró sin mergear. Único ángulo que lo habría justificado: developer/rendimiento web (descartado por ahora).

MVP (rama `feature/mvp`, no mergeada): selector buscable de Google Fonts, comparador A/B/C, controles de tamaño/interlineado/espaciado/color, estado compartible por URL y presets titular/párrafo. `design-tokens.css` vendado en el repo para que sea autónomo en GitHub Pages.

## Arquitectura del MVP

- `script.js`: catálogo curado de ~90 familias (nombre, categoría, pesos, itálica), estado en memoria, carga dinámica de fuentes vía `<link>` a `fonts.googleapis.com/css2` (uno por panel), combobox accesible y sincronización con la query string (debounced `history.replaceState`).
- Paneles `contenteditable` sincronizados con el textarea global. Controles globales aplicados con CSS custom props (`--tt-*`) en `#stage`; familia/peso/estilo por panel vía estilo inline.
- Sin build ni dependencias. UI en system-sans + mono; las Google Fonts solo se cargan para la previsualización.

## Tareas pendientes

- [ ] Confirmar dominio definitivo (ahora: `probatipo.example.com`).
- [x] Crear repo en GitHub y conectar como remote.
- [x] Implementar lógica del MVP.
- [ ] Generar favicons (realfavicongenerator.net).
- [ ] og-image.png 1200×630.
- [ ] Dar de alta Plausible/Umami y añadir snippet.
- [ ] `/seo-audit` antes del primer deploy.
- [ ] Search Console + sitemap submit.

## Antes de pedir cambios

- Si toca diseño UI, usa la skill `ui-ux-pro-max-skill` si está disponible.
- Para añadir páginas/subherramientas: `/new-tool`.
- Antes de push: `/seo-audit` + `/deploy-check`.
