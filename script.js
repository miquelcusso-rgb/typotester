/* TypoTester · MVP
   Probador y comparador de tipografías (Google Fonts).
   HTML/CSS/JS plano, sin dependencias. */

(function () {
  'use strict';

  document.getElementById('year').textContent = new Date().getFullYear();

  /* ─────────────────────────────────────────────────────────────
     Catálogo de Google Fonts (curado).
     Formato: [nombre, categoría, "pesos,separados,por,comas", tieneItálica]
     Los pesos son los que la familia ofrece realmente en Google Fonts. */
  var RAW_FONTS = [
    // ── Sans ──
    ['Inter', 'sans', '100,200,300,400,500,600,700,800,900', 1],
    ['Roboto', 'sans', '100,300,400,500,700,900', 1],
    ['Open Sans', 'sans', '300,400,500,600,700,800', 1],
    ['Lato', 'sans', '100,300,400,700,900', 1],
    ['Montserrat', 'sans', '100,200,300,400,500,600,700,800,900', 1],
    ['Poppins', 'sans', '100,200,300,400,500,600,700,800,900', 1],
    ['Raleway', 'sans', '100,200,300,400,500,600,700,800,900', 1],
    ['Nunito', 'sans', '200,300,400,500,600,700,800,900,1000', 1],
    ['Nunito Sans', 'sans', '200,300,400,600,700,800,900', 1],
    ['Work Sans', 'sans', '100,200,300,400,500,600,700,800,900', 1],
    ['Source Sans 3', 'sans', '200,300,400,500,600,700,800,900', 1],
    ['Mulish', 'sans', '200,300,400,500,600,700,800,900,1000', 1],
    ['Rubik', 'sans', '300,400,500,600,700,800,900', 1],
    ['Karla', 'sans', '200,300,400,500,600,700,800', 1],
    ['DM Sans', 'sans', '100,200,300,400,500,600,700,800,900,1000', 1],
    ['Manrope', 'sans', '200,300,400,500,600,700,800', 0],
    ['Plus Jakarta Sans', 'sans', '200,300,400,500,600,700,800', 1],
    ['Figtree', 'sans', '300,400,500,600,700,800,900', 1],
    ['Outfit', 'sans', '100,200,300,400,500,600,700,800,900', 0],
    ['Sora', 'sans', '100,200,300,400,500,600,700,800', 0],
    ['Be Vietnam Pro', 'sans', '100,200,300,400,500,600,700,800,900', 1],
    ['IBM Plex Sans', 'sans', '100,200,300,400,500,600,700', 1],
    ['PT Sans', 'sans', '400,700', 1],
    ['Noto Sans', 'sans', '100,200,300,400,500,600,700,800,900', 1],
    ['Oswald', 'sans', '200,300,400,500,600,700', 0],
    ['Barlow', 'sans', '100,200,300,400,500,600,700,800,900', 1],
    ['Archivo', 'sans', '100,200,300,400,500,600,700,800,900', 1],
    ['Cabin', 'sans', '400,500,600,700', 1],
    ['Quicksand', 'sans', '300,400,500,600,700', 0],
    ['Josefin Sans', 'sans', '100,200,300,400,500,600,700', 1],
    ['Heebo', 'sans', '100,200,300,400,500,600,700,800,900', 0],
    ['Assistant', 'sans', '200,300,400,500,600,700,800', 0],
    ['Space Grotesk', 'sans', '300,400,500,600,700', 0],
    ['Bricolage Grotesque', 'sans', '200,300,400,500,600,700,800', 0],
    ['Schibsted Grotesk', 'sans', '400,500,600,700,800,900', 1],
    ['Onest', 'sans', '100,200,300,400,500,600,700,800,900', 0],

    // ── Serif ──
    ['Playfair Display', 'serif', '400,500,600,700,800,900', 1],
    ['Merriweather', 'serif', '300,400,700,900', 1],
    ['Lora', 'serif', '400,500,600,700', 1],
    ['PT Serif', 'serif', '400,700', 1],
    ['Noto Serif', 'serif', '100,200,300,400,500,600,700,800,900', 1],
    ['Roboto Slab', 'serif', '100,200,300,400,500,600,700,800,900', 0],
    ['EB Garamond', 'serif', '400,500,600,700,800', 1],
    ['Cormorant Garamond', 'serif', '300,400,500,600,700', 1],
    ['Source Serif 4', 'serif', '200,300,400,500,600,700,800,900', 1],
    ['Libre Baskerville', 'serif', '400,700', 1],
    ['Bitter', 'serif', '100,200,300,400,500,600,700,800,900', 1],
    ['Crimson Text', 'serif', '400,600,700', 1],
    ['Crimson Pro', 'serif', '200,300,400,500,600,700,800,900', 1],
    ['Spectral', 'serif', '200,300,400,500,600,700,800', 1],
    ['Domine', 'serif', '400,500,600,700', 0],
    ['Zilla Slab', 'serif', '300,400,500,600,700', 1],
    ['DM Serif Display', 'serif', '400', 1],
    ['DM Serif Text', 'serif', '400', 1],
    ['Fraunces', 'serif', '100,200,300,400,500,600,700,800,900', 1],
    ['Newsreader', 'serif', '200,300,400,500,600,700,800', 1],
    ['Cardo', 'serif', '400,700', 1],
    ['Vollkorn', 'serif', '400,500,600,700,800,900', 1],
    ['Bodoni Moda', 'serif', '400,500,600,700,800,900', 1],
    ['Frank Ruhl Libre', 'serif', '300,400,500,600,700,800,900', 0],

    // ── Display ──
    ['Bebas Neue', 'display', '400', 0],
    ['Abril Fatface', 'display', '400', 0],
    ['Anton', 'display', '400', 0],
    ['Lobster', 'display', '400', 0],
    ['Righteous', 'display', '400', 0],
    ['Comfortaa', 'display', '300,400,500,600,700', 0],
    ['Fredoka', 'display', '300,400,500,600,700', 0],
    ['Titan One', 'display', '400', 0],
    ['Bungee', 'display', '400', 0],

    // ── Manuscritas ──
    ['Pacifico', 'hand', '400', 0],
    ['Dancing Script', 'hand', '400,500,600,700', 0],
    ['Caveat', 'hand', '400,500,600,700', 0],
    ['Permanent Marker', 'hand', '400', 0],
    ['Satisfy', 'hand', '400', 0],
    ['Shadows Into Light', 'hand', '400', 0],
    ['Indie Flower', 'hand', '400', 0],
    ['Great Vibes', 'hand', '400', 0],
    ['Sacramento', 'hand', '400', 0],
    ['Kalam', 'hand', '300,400,700', 0],
    ['Patrick Hand', 'hand', '400', 0],

    // ── Monoespaciadas ──
    ['JetBrains Mono', 'mono', '100,200,300,400,500,600,700,800', 1],
    ['Fira Code', 'mono', '300,400,500,600,700', 0],
    ['Source Code Pro', 'mono', '200,300,400,500,600,700,800,900', 1],
    ['IBM Plex Mono', 'mono', '100,200,300,400,500,600,700', 1],
    ['Space Mono', 'mono', '400,700', 1],
    ['Roboto Mono', 'mono', '100,200,300,400,500,600,700', 1],
    ['Inconsolata', 'mono', '200,300,400,500,600,700,800,900', 0],
    ['Ubuntu Mono', 'mono', '400,700', 1],
    ['Courier Prime', 'mono', '400,700', 1],
    ['DM Mono', 'mono', '300,400,500', 1]
  ];

  var CAT_LABEL = {
    sans: 'Sans', serif: 'Serif', display: 'Display', hand: 'Manuscrita', mono: 'Mono'
  };

  var FONTS = RAW_FONTS.map(function (r) {
    return {
      name: r[0],
      cat: r[1],
      weights: r[2].split(',').map(Number),
      ital: !!r[3]
    };
  });
  var FONT_BY_NAME = {};
  FONTS.forEach(function (f) { FONT_BY_NAME[f.name] = f; });

  /* ─────────────────────────────────────────────────────────────
     Estado */
  var DEFAULT_TEXT = 'El veloz murciélago hindú comía feliz cardillo y kiwi. 0123456789';

  var PRESETS = {
    titular: { size: 72, lh: 1.05, ls: -1, text: 'Diseña con carácter' },
    parrafo: {
      size: 19, lh: 1.6, ls: 0,
      text: 'La tipografía es la voz silenciosa del texto. Antes de elegir una fuente, pruébala con tu propio contenido: mira cómo respiran las líneas, cómo se distinguen las letras y si el conjunto invita a leer.'
    }
  };

  var DEFAULTS = {
    text: DEFAULT_TEXT,
    size: 48,
    lh: 1.3,
    ls: 0,
    fg: '#e6e8ec',
    bg: '#0f1115',
    n: 2,
    fonts: [
      { family: 'Playfair Display', weight: 700, style: 'normal' },
      { family: 'Inter', weight: 400, style: 'normal' },
      { family: 'JetBrains Mono', weight: 500, style: 'normal' }
    ]
  };

  var state = null;

  /* ─────────────────────────────────────────────────────────────
     URL <-> estado */
  function clamp(v, min, max) { return Math.min(max, Math.max(min, v)); }

  function readStateFromURL() {
    var p = new URLSearchParams(location.search);
    var s = {
      text: p.has('t') ? p.get('t') : DEFAULTS.text,
      size: p.has('sz') ? clamp(parseInt(p.get('sz'), 10) || DEFAULTS.size, 8, 200) : DEFAULTS.size,
      lh: p.has('lh') ? clamp(parseFloat(p.get('lh')) || DEFAULTS.lh, 0.8, 2.5) : DEFAULTS.lh,
      ls: p.has('ls') ? clamp(parseFloat(p.get('ls')) || 0, -5, 20) : DEFAULTS.ls,
      fg: p.has('fg') ? '#' + p.get('fg').replace(/[^0-9a-fA-F]/g, '').slice(0, 6) : DEFAULTS.fg,
      bg: p.has('bg') ? '#' + p.get('bg').replace(/[^0-9a-fA-F]/g, '').slice(0, 6) : DEFAULTS.bg,
      n: p.has('n') ? clamp(parseInt(p.get('n'), 10) || DEFAULTS.n, 1, 3) : DEFAULTS.n,
      fonts: []
    };
    for (var i = 0; i < 3; i++) {
      var raw = p.get('f' + i);
      if (raw) {
        var parts = raw.split('|');
        var fam = parts[0];
        if (FONT_BY_NAME[fam]) {
          s.fonts[i] = normalizeFont({
            family: fam,
            weight: parseInt(parts[1], 10),
            style: parts[2] === 'italic' ? 'italic' : 'normal'
          });
          continue;
        }
      }
      s.fonts[i] = normalizeFont(Object.assign({}, DEFAULTS.fonts[i]));
    }
    return s;
  }

  function normalizeFont(f) {
    var meta = FONT_BY_NAME[f.family] || FONTS[0];
    var family = meta.name;
    var weight = meta.weights.indexOf(f.weight) >= 0 ? f.weight : nearestWeight(meta.weights, f.weight || 400);
    var style = (f.style === 'italic' && meta.ital) ? 'italic' : 'normal';
    return { family: family, weight: weight, style: style };
  }

  function nearestWeight(weights, target) {
    return weights.reduce(function (best, w) {
      return Math.abs(w - target) < Math.abs(best - target) ? w : best;
    }, weights[0]);
  }

  var urlTimer = null;
  function syncURL() {
    if (urlTimer) clearTimeout(urlTimer);
    urlTimer = setTimeout(function () {
      var p = new URLSearchParams();
      p.set('t', state.text);
      p.set('sz', String(state.size));
      p.set('lh', String(state.lh));
      p.set('ls', String(state.ls));
      p.set('fg', state.fg.replace('#', ''));
      p.set('bg', state.bg.replace('#', ''));
      p.set('n', String(state.n));
      for (var i = 0; i < state.n; i++) {
        var f = state.fonts[i];
        p.set('f' + i, f.family + '|' + f.weight + '|' + f.style);
      }
      history.replaceState(null, '', location.pathname + '?' + p.toString());
    }, 250);
  }

  /* ─────────────────────────────────────────────────────────────
     Carga dinámica de fuentes (un <link> por panel) */
  function fontHref(f) {
    var meta = FONT_BY_NAME[f.family];
    var name = f.family.replace(/ /g, '+');
    var axis;
    if (meta.ital) {
      // carga normal + itálica del peso elegido para alternar al instante
      axis = 'ital,wght@0,' + f.weight + ';1,' + f.weight;
    } else {
      axis = 'wght@' + f.weight;
    }
    return 'https://fonts.googleapis.com/css2?family=' + name + ':' + axis + '&display=swap';
  }

  function loadFontForPanel(i) {
    var id = 'tt-font-' + i;
    var link = document.getElementById(id);
    if (!link) {
      link = document.createElement('link');
      link.id = id;
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
    var href = fontHref(state.fonts[i]);
    if (link.href !== href) link.href = href;
  }

  /* ─────────────────────────────────────────────────────────────
     DOM refs */
  var stage = document.getElementById('stage');
  var elText = document.getElementById('ctl-text');
  var elSize = document.getElementById('ctl-size');
  var elSizeOut = document.getElementById('out-size');
  var elLh = document.getElementById('ctl-lh');
  var elLhOut = document.getElementById('out-lh');
  var elLs = document.getElementById('ctl-ls');
  var elLsOut = document.getElementById('out-ls');
  var elFg = document.getElementById('ctl-fg');
  var elBg = document.getElementById('ctl-bg');
  var elShare = document.getElementById('btn-share');
  var elReset = document.getElementById('btn-reset');
  var toast = document.getElementById('toast');

  /* ─────────────────────────────────────────────────────────────
     Combobox de familia (buscable, accesible) */
  function buildCombo(panelIndex) {
    var wrap = document.createElement('div');
    wrap.className = 'combo';

    var input = document.createElement('input');
    input.type = 'text';
    input.className = 'combo__input';
    input.setAttribute('role', 'combobox');
    input.setAttribute('aria-expanded', 'false');
    input.setAttribute('aria-autocomplete', 'list');
    input.setAttribute('autocomplete', 'off');
    input.setAttribute('spellcheck', 'false');
    var listId = 'combo-list-' + panelIndex;
    input.setAttribute('aria-controls', listId);
    input.setAttribute('aria-label', 'Buscar familia tipográfica del panel ' + tag(panelIndex));
    input.value = state.fonts[panelIndex].family;

    var list = document.createElement('ul');
    list.className = 'combo__list';
    list.id = listId;
    list.setAttribute('role', 'listbox');
    list.hidden = true;

    var activeIdx = -1;
    var filtered = FONTS.slice();

    function render(filter) {
      var q = (filter || '').trim().toLowerCase();
      filtered = FONTS.filter(function (f) {
        return !q || f.name.toLowerCase().indexOf(q) >= 0 || f.cat.indexOf(q) >= 0;
      });
      list.innerHTML = '';
      filtered.forEach(function (f, idx) {
        var li = document.createElement('li');
        li.className = 'combo__opt';
        li.setAttribute('role', 'option');
        li.id = listId + '-opt-' + idx;
        li.dataset.name = f.name;
        if (f.name === state.fonts[panelIndex].family) li.setAttribute('aria-selected', 'true');
        var nm = document.createElement('span');
        nm.textContent = f.name;
        var ct = document.createElement('span');
        ct.className = 'combo__cat';
        ct.textContent = CAT_LABEL[f.cat];
        li.appendChild(nm);
        li.appendChild(ct);
        li.addEventListener('mousedown', function (e) {
          e.preventDefault();
          choose(f.name);
        });
        list.appendChild(li);
      });
      activeIdx = -1;
    }

    function open() {
      if (!list.hidden) return;
      render(input.value === state.fonts[panelIndex].family ? '' : input.value);
      list.hidden = false;
      input.setAttribute('aria-expanded', 'true');
    }
    function close() {
      list.hidden = true;
      input.setAttribute('aria-expanded', 'false');
      input.removeAttribute('aria-activedescendant');
      input.value = state.fonts[panelIndex].family;
    }
    function setActive(idx) {
      var opts = list.querySelectorAll('.combo__opt');
      if (!opts.length) return;
      activeIdx = (idx + opts.length) % opts.length;
      opts.forEach(function (o, k) { o.classList.toggle('is-active', k === activeIdx); });
      var el = opts[activeIdx];
      el.scrollIntoView({ block: 'nearest' });
      input.setAttribute('aria-activedescendant', el.id);
    }
    function choose(name) {
      setFamily(panelIndex, name);
      input.value = name;
      close();
    }

    input.addEventListener('focus', open);
    input.addEventListener('input', function () { open(); render(input.value); });
    input.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') { e.preventDefault(); if (list.hidden) open(); setActive(activeIdx + 1); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); if (list.hidden) open(); setActive(activeIdx - 1); }
      else if (e.key === 'Enter') {
        if (!list.hidden && activeIdx >= 0 && filtered[activeIdx]) { e.preventDefault(); choose(filtered[activeIdx].name); }
        else if (!list.hidden && filtered[0]) { e.preventDefault(); choose(filtered[0].name); }
      } else if (e.key === 'Escape') { if (!list.hidden) { e.preventDefault(); close(); } }
    });
    input.addEventListener('blur', function () { setTimeout(close, 120); });

    wrap.appendChild(input);
    wrap.appendChild(list);
    wrap._setValue = function (name) { input.value = name; };
    return wrap;
  }

  function tag(i) { return ['A', 'B', 'C'][i] || String(i + 1); }

  /* ─────────────────────────────────────────────────────────────
     Selectores de peso y estilo por panel */
  function fillWeightSelect(sel, panelIndex) {
    var meta = FONT_BY_NAME[state.fonts[panelIndex].family];
    sel.innerHTML = '';
    meta.weights.forEach(function (w) {
      var o = document.createElement('option');
      o.value = String(w);
      o.textContent = w + (WEIGHT_NAME[w] ? ' · ' + WEIGHT_NAME[w] : '');
      if (w === state.fonts[panelIndex].weight) o.selected = true;
      sel.appendChild(o);
    });
  }
  var WEIGHT_NAME = {
    100: 'Thin', 200: 'ExtraLight', 300: 'Light', 400: 'Regular', 500: 'Medium',
    600: 'SemiBold', 700: 'Bold', 800: 'ExtraBold', 900: 'Black', 1000: 'ExtraBlack'
  };

  function fillStyleSelect(sel, panelIndex) {
    var meta = FONT_BY_NAME[state.fonts[panelIndex].family];
    sel.innerHTML = '';
    var opts = meta.ital ? [['normal', 'Normal'], ['italic', 'Itálica']] : [['normal', 'Normal']];
    opts.forEach(function (pair) {
      var o = document.createElement('option');
      o.value = pair[0];
      o.textContent = pair[1];
      if (pair[0] === state.fonts[panelIndex].style) o.selected = true;
      sel.appendChild(o);
    });
    sel.disabled = !meta.ital;
  }

  /* ─────────────────────────────────────────────────────────────
     Mutadores de estado */
  function setFamily(i, name) {
    state.fonts[i] = normalizeFont({ family: name, weight: state.fonts[i].weight, style: state.fonts[i].style });
    refreshPanel(i);
    loadFontForPanel(i);
    syncURL();
  }
  function setWeight(i, w) {
    state.fonts[i].weight = w;
    applyPanelStyle(i);
    loadFontForPanel(i);
    syncURL();
  }
  function setStyle(i, st) {
    state.fonts[i].style = st;
    applyPanelStyle(i);
    loadFontForPanel(i);
    syncURL();
  }

  /* ─────────────────────────────────────────────────────────────
     Construcción / refresco de paneles */
  function buildStage() {
    stage.innerHTML = '';
    for (var i = 0; i < state.n; i++) buildPanel(i);
    stage.dataset.n = String(state.n);
    applyGlobalStyle();
  }

  function buildPanel(i) {
    var panel = document.createElement('article');
    panel.className = 'panel';
    panel.dataset.i = String(i);

    var bar = document.createElement('header');
    bar.className = 'panel__bar';

    var tagEl = document.createElement('span');
    tagEl.className = 'panel__tag';
    tagEl.textContent = tag(i);
    bar.appendChild(tagEl);

    var combo = buildCombo(i);
    bar.appendChild(combo);

    var wsel = document.createElement('select');
    wsel.className = 'panel__sel panel__weight';
    wsel.setAttribute('aria-label', 'Peso del panel ' + tag(i));
    fillWeightSelect(wsel, i);
    wsel.addEventListener('change', function () { setWeight(i, parseInt(wsel.value, 10)); });
    bar.appendChild(wsel);

    var ssel = document.createElement('select');
    ssel.className = 'panel__sel panel__style';
    ssel.setAttribute('aria-label', 'Estilo del panel ' + tag(i));
    fillStyleSelect(ssel, i);
    ssel.addEventListener('change', function () { setStyle(i, ssel.value); });
    bar.appendChild(ssel);

    panel.appendChild(bar);

    var preview = document.createElement('div');
    preview.className = 'panel__preview';
    preview.setAttribute('contenteditable', 'true');
    preview.setAttribute('spellcheck', 'false');
    preview.setAttribute('role', 'textbox');
    preview.setAttribute('aria-multiline', 'true');
    preview.setAttribute('aria-label', 'Previsualización editable del panel ' + tag(i));
    preview.textContent = state.text;
    preview.addEventListener('input', function () {
      state.text = preview.textContent;
      elText.value = state.text;
      updateOtherPreviews(i);
      syncURL();
    });
    panel.appendChild(preview);

    panel._combo = combo;
    panel._wsel = wsel;
    panel._ssel = ssel;
    panel._preview = preview;
    stage.appendChild(panel);
    loadFontForPanel(i);
    applyPanelStyle(i);
  }

  function panelAt(i) { return stage.querySelector('.panel[data-i="' + i + '"]'); }

  function refreshPanel(i) {
    var panel = panelAt(i);
    if (!panel) return;
    panel._combo._setValue(state.fonts[i].family);
    fillWeightSelect(panel._wsel, i);
    fillStyleSelect(panel._ssel, i);
    applyPanelStyle(i);
  }

  function applyPanelStyle(i) {
    var panel = panelAt(i);
    if (!panel) return;
    var f = state.fonts[i];
    var meta = FONT_BY_NAME[f.family];
    var stack = '"' + f.family + '", ' + fallbackStack(meta.cat);
    panel._preview.style.fontFamily = stack;
    panel._preview.style.fontWeight = String(f.weight);
    panel._preview.style.fontStyle = f.style;
  }

  function fallbackStack(cat) {
    if (cat === 'serif') return 'Georgia, serif';
    if (cat === 'mono') return 'ui-monospace, monospace';
    if (cat === 'hand' || cat === 'display') return 'cursive, sans-serif';
    return 'system-ui, sans-serif';
  }

  function updateOtherPreviews(except) {
    for (var i = 0; i < state.n; i++) {
      if (i === except) continue;
      var panel = panelAt(i);
      if (panel && panel._preview.textContent !== state.text) panel._preview.textContent = state.text;
    }
  }

  function applyGlobalStyle() {
    stage.style.setProperty('--tt-size', state.size + 'px');
    stage.style.setProperty('--tt-lh', String(state.lh));
    stage.style.setProperty('--tt-ls', state.ls + 'px');
    stage.style.setProperty('--tt-fg', state.fg);
    stage.style.setProperty('--tt-bg', state.bg);
  }

  /* ─────────────────────────────────────────────────────────────
     Controles globales */
  function applyControlsToInputs() {
    elText.value = state.text;
    elSize.value = state.size; elSizeOut.textContent = state.size + ' px';
    elLh.value = state.lh; elLhOut.textContent = state.lh.toFixed(2);
    elLs.value = state.ls; elLsOut.textContent = state.ls + ' px';
    elFg.value = state.fg; elBg.value = state.bg;
    document.querySelectorAll('.seg__btn').forEach(function (b) {
      var on = parseInt(b.dataset.n, 10) === state.n;
      b.classList.toggle('is-on', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
  }

  function wireControls() {
    elText.addEventListener('input', function () {
      state.text = elText.value;
      for (var i = 0; i < state.n; i++) {
        var p = panelAt(i);
        if (p) p._preview.textContent = state.text;
      }
      syncURL();
    });
    elSize.addEventListener('input', function () {
      state.size = parseInt(elSize.value, 10);
      elSizeOut.textContent = state.size + ' px';
      applyGlobalStyle(); syncURL();
    });
    elLh.addEventListener('input', function () {
      state.lh = parseFloat(elLh.value);
      elLhOut.textContent = state.lh.toFixed(2);
      applyGlobalStyle(); syncURL();
    });
    elLs.addEventListener('input', function () {
      state.ls = parseFloat(elLs.value);
      elLsOut.textContent = state.ls + ' px';
      applyGlobalStyle(); syncURL();
    });
    elFg.addEventListener('input', function () { state.fg = elFg.value; applyGlobalStyle(); syncURL(); });
    elBg.addEventListener('input', function () { state.bg = elBg.value; applyGlobalStyle(); syncURL(); });

    document.querySelectorAll('.seg__btn').forEach(function (b) {
      b.addEventListener('click', function () {
        var n = parseInt(b.dataset.n, 10);
        if (n === state.n) return;
        state.n = n;
        buildStage();
        applyControlsToInputs();
        syncURL();
      });
    });

    document.querySelectorAll('.preset__btn').forEach(function (b) {
      b.addEventListener('click', function () {
        var pr = PRESETS[b.dataset.preset];
        if (!pr) return;
        state.size = pr.size; state.lh = pr.lh; state.ls = pr.ls; state.text = pr.text;
        for (var i = 0; i < state.n; i++) {
          var p = panelAt(i);
          if (p) p._preview.textContent = state.text;
        }
        applyGlobalStyle();
        applyControlsToInputs();
        syncURL();
      });
    });

    elShare.addEventListener('click', function () {
      syncURL();
      var url = location.href;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(function () { showToast('Enlace copiado al portapapeles'); },
          function () { showToast('No se pudo copiar; copia la URL manualmente'); });
      } else {
        showToast('Copia la URL de la barra de direcciones');
      }
    });

    elReset.addEventListener('click', function () {
      history.replaceState(null, '', location.pathname);
      state = readStateFromURL();
      buildStage();
      applyControlsToInputs();
      showToast('Restablecido');
    });
  }

  var toastTimer = null;
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add('is-on');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove('is-on'); }, 2200);
  }

  /* ─────────────────────────────────────────────────────────────
     Init */
  function init() {
    state = readStateFromURL();
    buildStage();
    wireControls();
    applyControlsToInputs();
    syncURL();
  }

  init();
})();
