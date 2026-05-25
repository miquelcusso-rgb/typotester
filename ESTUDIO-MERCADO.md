# Estudio de mercado — TypoTester

> Fecha: 2026-05-25 · Rama: `research/market-study` · Estado del proyecto: **EN PAUSA** (PR de MVP `#1` abierto, **no mergear**).
> Encargo: validar si el nicho de "probador de tipografías" tiene recorrido antes de invertir más horas. Veredicto y recomendación accionable al final.

**Nota metodológica.** Investigación hecha con búsqueda web en vivo (mayo 2026). Las cifras de tráfico provienen de páginas públicas de Similarweb/Semrush y son **estimaciones de terceros** (no analítica propia): trátalas como orden de magnitud, no como dato exacto. Donde no hay dato fiable de volumen de búsqueda, lo digo explícitamente en vez de inventarlo.

---

## TL;DR (veredicto en 30 segundos)

- **El nicho "comparar Google Fonts lado a lado" está saturado y comoditizado.** El MVP actual de TypoTester (selector buscable + comparador A/B/C + controles de tamaño/interlineado/color + URL compartible) es funcionalmente **idéntico** a una docena de herramientas gratuitas que ya rankean, más Google Fonts (competidor con autoridad infinita y gratis).
- **La monetización realista como herramienta pura es ~0 €** durante mucho tiempo. La afiliación de fuentes paga calderilla y las fuentes que prueba el usuario (Google Fonts) son gratis, así que no hay nada que vender.
- **No hay un hueco SEO claro** para un dominio nuevo sin autoridad en los términos genéricos. El mercado en español está poco poblado pero también es de bajo volumen y ya lo ocupa una fundición con autoridad (TypeType).
- **Veredicto:** como "otro font tester" genérico, **no vale la pena invertir más**. Solo tiene recorrido si se reposiciona en un **ángulo afilado** (recomendación: ángulo *developer / rendimiento web*) o se acepta como **pieza de portfolio** y se archiva.

---

## 1. Panorama competitivo

### 1.1 Tabla comparativa

| Herramienta | Qué hace (núcleo) | Modelo de negocio | Tráfico est./mes | Fortaleza | Debilidad explotable |
|---|---|---|---|---|---|
| **Google Fonts** (fonts.google.com) | Catálogo + type tester + preview + comparar, todo gratis | Gratis (producto Google, sin monetizar) | Masivo (no medible aquí) | Autoridad infinita, catálogo canónico, confianza | UX genérica; no compara A/B/C cómodo; no exporta CSS "real" ni mide rendimiento |
| **Wordmark.it** | Escribe tu texto y lo ves en TODAS tus fuentes instaladas | Freemium (Premium ~2 $/mes) | ~231K (Dic-2024) | Resuelve un trabajo concreto (mis fuentes locales) muy bien | Solo fuentes locales del usuario; no Google Fonts cloud, no pairing |
| **Fontjoy** | Generador ML de **parejas** de fuentes; slider de contraste; bloquear fuentes | Side-project, monetización mínima/nula | ~129K (Abr-2026) | "Magia" del pairing con un clic; marca reconocida | Caja negra; poco control fino; sin export profesional |
| **Fontpair.co** | 1.000+ **combinaciones** curadas de Google Fonts + generador | Afiliación / proyecto | ~156K (Dic-2024) | Inspiración curada lista para copiar | Es catálogo, no banco de pruebas; poca interacción |
| **Typewolf** | **Curación editorial**: ejemplos reales de webs, listas, guías | Afiliación (MyFonts/Fontspring) + 2 guías de 39 $ + merch | ~350K uniques, 1M+ páginas | Autoridad editorial líder; comunidad; SEO brutal | No es una herramienta interactiva; barrera = años de contenido |
| **Fonts Ninja** | Extensión: **identifica** fuentes en cualquier web; sugerencias IA; boards | Freemium (app de prueba de fuentes de pago) | n/d (extensión) | Resuelve "¿qué fuente es esta?" en el navegador | No es web app de comparación; otro trabajo distinto |
| **TypeType** (font-tester / comparer / viewer / pairs) | Suite de prueba/comparación, **localizada en español** | Fundición: vende sus propias fuentes | n/d (DA alta) | Autoridad de fundición + ya cubre el mercado ES | Sirve para vender SU catálogo; sesgo comercial |
| **Typetester.org** | Probar/comparar 2.800+ fuentes con controles finos + CSS | Veterano del nicho | n/d | Pionero, muy completo en controles | UI anticuada; oportunidad de "lo mismo pero moderno" (ya tomada por los clones) |
| **El "long tail" de clones** · FontsDiff, Simple Font Compare (1.400+), Pair&Compare (800+), TypePeek, FontVS (1.900+, analiza archivos sin subirlos), FontsCompare, VariedTools, FontFabric Font-Tester, Tiff (superpone glifos) | Exactamente lo que hace el MVP de TypoTester: preview/compare Google Fonts con controles + CSS | Ads / portfolio / lead-gen | Bajo c/u | Existen y rankean | Ninguno domina; pero **juntos saturan la SERP** |
| **Nicho fuentes variables** · Axis-Praxis, Font Playground, v-fonts, Samsa | Jugar con ejes de fuentes variables | Proyectos/portfolio | Bajo | Especializados | Nicho técnico pequeño pero menos comoditizado |

### 1.2 Lectura del panorama

**¿Saturado o con hueco?** Saturado en el centro, hueco solo en los bordes. El mapa por intención:

- **Inspiración / pairing** (diseñador busca ideas) → lo dominan **Fontjoy, Fontpair, Typewolf, Monotype**.
- **Preview/compare de webfont** (el trabajo exacto del MVP) → **Google Fonts + una docena de clones gratuitos**. Cero diferenciación posible aquí.
- **Identificar una fuente** ("¿qué fuente es esta?") → **WhatTheFont, Fonts Ninja**.
- **Mis fuentes locales** → **Wordmark.it**.
- **Comprar fuente premium** → fundiciones (**TypeType**, MyFonts, etc.), que tienen su propio tester para vender.
- **Fuentes variables / inspección técnica** → **Axis-Praxis, Font Playground, Samsa** (nicho pequeño, menos comoditizado).

El MVP de TypoTester cae exactamente en la casilla más competida y con menos defensa posible.

---

## 2. Demanda y keywords

**Limitación honesta:** las herramientas de keywords no exponen volúmenes exactos sin login de pago, así que no puedo darte números de volumen verificados. Lo que sí puedo afirmar con confianza media-alta es la **intención** detrás de cada cluster (inspeccionando qué rankea en la SERP) y quién ocupa el page 1.

| Cluster (EN / ES) | Intención real | Quién rankea (fuerte) | Hueco para sitio nuevo |
|---|---|---|---|
| `font tester` / `probar tipografías` | Herramienta (medio) | Google Fonts + clones + TypeType (ES) | **Bajo** — SERP saturada de gratuitos |
| `font pairing` / `combinar tipografías` | Inspiración | Fontjoy, Fontpair, Typewolf, Monotype | **Muy bajo** — marcas con autoridad |
| `compare fonts` / `comparar fuentes` | Herramienta | Docena de clones + TypeType | **Bajo** |
| `what font is this` / `qué tipografía es esta` | Identificación | WhatTheFont, Fonts Ninja | **Nulo** (otra herramienta) |
| `font generator` / `tipografías gratis`, `fuentes gratis` | **Otra intención**: generador de texto estilizado o **descarga** de fuentes (DaFont…) | Generadores + repositorios de descarga | **Trampa**: alto volumen pero NO es lo que hace TypoTester |

**Conclusiones clave:**

1. **Mucho del volumen "tipográfico" es intención equivocada.** "Font generator" y "tipografías/fuentes gratis" tienen volumen alto pero buscan *generadores de texto bonito* o *descargar* fuentes — no un banco de pruebas. Perseguir ese tráfico es perseguir un público que rebotará.
2. **Los términos correctos (tool-intent) están saturados** por gratuitos + Google Fonts. Un dominio nuevo sin autoridad no tiene un camino realista a page 1 a corto/medio plazo.
3. **El mercado español está poco poblado pero es bajo volumen y ya ocupado** por TypeType (fundición con DA) y referencias como Tiff (vía Domestika). Es "whitespace fino", no un vacío explotable: no hay suficiente volumen para sostener un proyecto con solo eso.

---

## 3. Monetización

| Vía | Realidad para una herramienta nueva de bajo tráfico |
|---|---|
| **Afiliación de fuentes** | MyFonts ~10 %, Creative Market 10–30 %, Envato 30 % (solo 1ª compra), Adobe 85 % de 1 mes de CC (pero Adobe Fonts va incluido, sin afiliación por fuente). Las fuentes son de **bajo ticket e impulso**; un tester que prueba *Google Fonts gratis* casi no genera clics de compra. **Calderilla.** |
| **Display ads** | AdSense (sin mínimo, RPM ~2–8 $ diseño), Ezoic (sin mínimo, ~5–15 $), Raptive (bajó a **25k páginas/mes** en oct-2025, exige 50 % tráfico tier-1), Mediavine (**50k sesiones + 5.000 $/año** de ingresos demostrados). Una herramienta tiene **sesiones cortas y baja densidad de anuncios** → extremo bajo del RPM. Llegar a **100 €/mes ≈ 30k–80k visitas/mes**, mucho para un tool nuevo. |
| **Suscripción / freemium** | Wordmark cobra ~2 $/mes; Fonts Ninja Pro gatea instalar fuentes de prueba. Difícil gatear un "probar antes de comprar": el valor está en que sea gratis e instantáneo. |
| **B2B / fundición / API** | El dinero de verdad está **aguas arriba**: vender tu propia tipografía (modelo TypeType) o licenciar/embed. Un sitio estático en solitario tiene poca palanca aquí sin construir un activo único. |

**Cómo sobreviven los gratuitos famosos:** Fontjoy y Wordmark son *side-projects* sin apenas monetización; Fontpair tira de afiliación ligera; **Typewolf es la excepción** y lo logra con **contenido editorial durante años** (guías de 39 $ que rinden más que la afiliación), no con una herramienta. Su fundador admite que está monetizado "sin agresividad" y que **no le da para vivir a tiempo completo**.

> El camino *menos irreal* a los primeros 100 €/mes es el modelo Typewolf-lite (contenido + SEO en EN+ES → afiliación + ads ligeros), un esfuerzo de **12–24 meses de contenido**. Como herramienta pura: **ingresos esperados ≈ 0 €**.

---

## 4. Diferenciación: 3 posicionamientos posibles

Ser "otro font tester" es un callejón sin salida. Si se continúa, hay que elegir **un solo trabajo concreto** y ser el mejor del mundo en él:

### A) Ángulo *developer / rendimiento web* — **RECOMENDADO**
"No solo veas cómo se ve la fuente: mira lo que **le cuesta a tu web**."
- Peso del archivo de la fuente y del subset, número de pesos cargados, vista previa de **FOUT/CLS**, generación de `@font-face` + `<link rel=preload>` correctos, salida de **CSS real** (incluido `font-variation-settings` para fuentes variables), y **comprobador de contraste WCAG** del texto sobre el fondo elegido.
- **Por qué gana:** intención técnica menos saturada que el "pairing" de diseñadores; encaja con un público (devs/maquetadores) que comparte herramientas y enlaza; aporta algo que Google Fonts **no** da bien (rendimiento + accesibilidad + export listo para producción).

### B) *Spanish-first typography hub* (modelo Typewolf en español)
- Herramienta + **contenido educativo** en español ("mejores tipografías para X", guías de pairing, ejemplos de webs en español).
- **Por qué es arriesgado:** es un proyecto de **contenido**, no de herramienta; 12–24 meses de escritura; choca con el presupuesto de ~10 h/semana y con la premisa "herramienta, no blog". Viable solo si al dueño le apetece escribir, no programar.

### C) Nicho *fuentes variables / inspección técnica*
- Banco de pruebas serio de ejes de fuentes variables + inspector de glifos/OpenType.
- **Por qué es secundario:** menos comoditizado, pero mercado **muy pequeño** y ya hay buenos jugadores (Axis-Praxis, Font Playground, Samsa).

**Recomendación de ángulo: A.** Es el único que (1) es defendible frente a Google Fonts, (2) ataca una SERP menos saturada, (3) encaja con las fortalezas de un maker técnico y el formato sitio estático, y (4) no exige convertirse en redactor a tiempo parcial.

---

## 5. Dirección de diseño / UX (skill `ui-ux-pro-max`)

Principio rector de un *type tool*: **la interfaz no debe tener voz tipográfica propia**. Las únicas fuentes "ruidosas" deben ser las que el usuario está probando. Por eso el chrome va en tipografía neutra de sistema/UI.

- **Estilo:** *Swiss Modernism 2.0* — rejilla estricta de 12 columnas, base de 8 px, un **único color de acento**, cero decoración, jerarquía matemática. Rinde excelente y llega a **WCAG AAA** (coherente con la regla global Lighthouse > 90). Tema claro/oscuro con conmutador (el oscuro tipo OLED suave para sesiones largas).
- **Tipografía del chrome:** *Developer Mono* → **IBM Plex Sans** para UI/etiquetas + **JetBrains Mono** para controles numéricos y la **salida de CSS**. Refuerza el posicionamiento "tool para gente que toca código" del ángulo A.
- **Paleta (acento único sobre neutros):**
  | Rol | Hex |
  |---|---|
  | Fondo (oscuro) | `#0F172A` |
  | Superficie | `#1E293B` / `#334155` |
  | Texto | `#F8FAFC` |
  | Acento / CTA | `#22C55E` (verde "run/ok", guiño a editor de código) |

  Verificar contraste ≥ 4.5:1 en todos los pares; el acento solo para acción primaria y estados de foco.
- **Layout del workspace ("stage-first"):**
  1. **Lienzo de previsualización arriba/central** ocupando la mayor superficie (el contenido es el rey).
  2. **Controles en panel lateral** (desktop) que colapsa a **acordeón inferior** en móvil (mobile-first, probar a 360 px).
  3. Paneles A/B/C en columnas iguales en desktop → **apiladas** en móvil.
  4. **Barra de export** persistente (copiar CSS / `@font-face` / preload / URL compartible) — es el momento de mayor valor del ángulo A.
  5. Hit targets ≥ 44 px, foco visible, `prefers-reduced-motion` respetado, transiciones 150–300 ms.
- **Evitar:** iconos emoji (usar SVG, p. ej. Lucide), estilos "vibrant/playful" de generador de texto bonito, y cualquier tipografía decorativa en el chrome.

---

## 6. Veredicto y recomendación accionable

**¿Vale la pena?**

- **Como "otro font tester" genérico: NO.** Nicho saturado, sin hueco SEO para un dominio nuevo, ingresos esperados ≈ 0 €, y Google Fonts + una docena de clones ya hacen exactamente lo mismo gratis. El MVP actual, tal cual, es una **pieza de portfolio**, no un negocio.
- **Con un ángulo afilado: QUIZÁS**, y solo el ángulo A (developer/rendimiento) lo justifica — y aun así como proyecto de bajo retorno económico y alto valor de aprendizaje/portfolio.

**Qué hacer (en orden):**

1. **No mergear el PR `#1`.** Coincide con la decisión de pausa. El MVP valida que sabes construirlo, no que haya mercado.
2. **Decisión del dueño primero (pregunta de validación, no de código):** ¿esto es (a) un negocio que busca ingresos, o (b) una pieza de portfolio/aprendizaje?
   - Si **(b) portfolio** → pulir el MVP lo mínimo, publicarlo bajo un subdominio barato, enlazarlo desde el portfolio y **archivar**. No comprar dominio premium ni invertir más horas.
   - Si **(a) negocio** → **pivotar al ángulo A** antes de escribir más código: redefinir el MVP en torno a *export de CSS de producción + preload/peso + WCAG + ejes variables*. Lanzar una landing mínima y medir interés real (búsquedas, enlaces, comentarios) **antes** de construir el tool completo.
3. **Validación barata sugerida (1–2 semanas):** una landing de una página describiendo el ángulo A + lista de espera/feedback, compartida en comunidades de frontend/diseño (no construir el producto entero a ciegas). Si no hay señal, archivar sin culpa.
4. **Dominio:** no comprar `probatipo.example.com` ni nada definitivo hasta cerrar el posicionamiento. Si gana el ángulo A, el naming debería apuntar a "fuentes + web/dev", no a "probar tipografías" genérico.

**Resumen honesto:** el instinto del dueño de dudar es correcto. El mercado dice que el font tester genérico es un commodity sin ingresos. Hay una salida digna (ángulo developer/rendimiento) y una salida limpia (portfolio), pero **no hay un negocio fácil aquí**. Recomiendo validar el ángulo A con una landing antes de invertir una sola hora más de desarrollo, o archivar como portfolio.
