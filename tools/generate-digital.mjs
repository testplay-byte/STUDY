#!/usr/bin/env bun
/**
 * generate-digital.mjs — HTML "Digital" test edition (structure v4).
 *
 * ⚠ TEST PURPOSES ONLY (user directive, 2026-09-03). The canonical library is
 *   Books/Formatted/ — never hand-edit generated HTML; change this script and re-run.
 *
 * SCOPE (user directive, 2026-09-03, refining the v4 directive):
 *   - Do NOT generate HTML for every page and do NOT mirror the chapter folders.
 *   - Books/Digital/<Subject>/ holds page HTML files DIRECTLY (no chapter sub-folders,
 *     no index.html scaffolding) — only the user-selected test pages below, nothing else.
 *   - Each digital page shows the original scan IMAGE directly (split view) next to the
 *     properly formatted transcription.
 *
 * User-selected test pages (the ONLY ones generated):
 *   Mathematics (M-1): images 1, 23, 25
 *   Statistics S-1 (Ch. 8 Set Theory): images 3, 5, 6
 *   Statistics S-2 (Ch. 9 Probability): images 5, 42
 *
 * File naming: page-<BATCH>-<NNN>.html (batch code without the dash, e.g. page-M1-025.html)
 *   — batch codes disambiguate (S-1 p5 vs S-2 p5) and match how the user refers to chapters.
 *
 * Pipeline: run `bun tools/build-metadata.mjs` first (consumes book.json/chapter.json).
 * Math: LaTeX segments are extracted before markdown parsing (GitHub-style precedence) and
 * restored HTML-escaped; KaTeX auto-renders client-side via CDN (raw LaTeX stays readable
 * offline). Run from repo root:  bun tools/generate-digital.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import { marked } from 'marked';

const ROOT = process.cwd();
if (!fs.existsSync(path.join(ROOT, 'Books', 'Formatted'))) {
  console.error('FATAL: Books/Formatted not found — run from repo root'); process.exit(1);
}

/** The ONLY digital pages to generate (user directive — do not extend without asking). */
const TEST_PAGES = [
  { batch: 'M-1', image: 1 },
  { batch: 'M-1', image: 23 },
  { batch: 'M-1', image: 25 },
  { batch: 'S-1', image: 3 },
  { batch: 'S-1', image: 5 },
  { batch: 'S-1', image: 6 },
  { batch: 'S-2', image: 5 },
  { batch: 'S-2', image: 42 },
];

// ---------------------------------------------------------------- template --
const GEN_DATE = new Date().toISOString().slice(0, 10);

const CSS = `
  :root {
    --ink:#24292f; --muted:#6e7278; --line:#e6e2da; --accent:#b45309; --accent-ink:#92400e;
    --accent-soft:#fdf3e0; --bg:#f7f5f1; --card:#fffdf9; --scanbg:#efece6;
  }
  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin:0; background:var(--bg); color:var(--ink); font:16px/1.75 Georgia,'Times New Roman',serif; }
  .chrome { font-family: system-ui,-apple-system,'Segoe UI',sans-serif; }

  /* ---- top bar ---- */
  .topbar { position:sticky; top:0; z-index:20; background:rgba(255,253,249,.94); backdrop-filter:blur(6px);
            border-bottom:1px solid var(--line); }
  .topbar-inner { max-width:1400px; margin:0 auto; padding:10px 20px; display:flex; align-items:center; gap:14px; flex-wrap:wrap; }
  .brand { font-weight:700; font-size:14px; letter-spacing:.02em; color:var(--accent-ink); }
  .brand .dot { color:var(--muted); font-weight:400; }
  .viewtoggle { display:inline-flex; border:1px solid var(--line); border-radius:999px; overflow:hidden; background:#fff; }
  .viewtoggle button { border:0; background:transparent; padding:6px 14px; font-size:12.5px; cursor:pointer; color:var(--muted); font-family:inherit; }
  .viewtoggle button[aria-pressed="true"] { background:var(--accent); color:#fff; }
  .topbar-links { margin-left:auto; display:flex; gap:14px; }
  .topbar a { color:var(--accent); text-decoration:none; font-size:13px; border-bottom:1px dotted var(--accent); }
  .banner { background:var(--accent-soft); border-bottom:1px solid var(--line); padding:6px 16px; font-size:12.5px;
            color:var(--accent-ink); text-align:center; }

  /* ---- header band ---- */
  .band { max-width:1400px; margin:0 auto; padding:26px 20px 8px; }
  .band .book { font-size:13px; text-transform:uppercase; letter-spacing:.08em; color:var(--muted); }
  .band h1 { margin:.15em 0 .2em; font-size:clamp(22px,3vw,32px); line-height:1.25; }
  .badges { display:flex; flex-wrap:wrap; gap:8px; align-items:center; padding-bottom:14px; }
  .badge { font-size:12px; padding:3px 11px; border-radius:999px; background:#f1ede5; border:1px solid var(--line); color:#57534e; white-space:nowrap; }
  .badge.dark { background:var(--ink); color:#fff; border-color:var(--ink); }
  .badge.accent { background:var(--accent); color:#fff; border-color:var(--accent); }

  /* ---- stage: scan + text ---- */
  .stage { max-width:1400px; margin:0 auto; padding:8px 20px 40px; display:grid; grid-template-columns:minmax(320px,44%) 1fr; gap:28px; align-items:start; }
  .scanpane { position:sticky; top:64px; }
  .scanframe { background:var(--scanbg); border:1px solid var(--line); border-radius:10px; padding:12px; box-shadow:0 1px 3px rgba(0,0,0,.05); }
  .scanframe img { display:block; width:100%; height:auto; border-radius:4px; }
  .scanhint { font-size:12px; color:var(--muted); text-align:center; padding:8px 4px 2px; }
  .textpane { min-width:0; }
  .textcard { background:var(--card); border:1px solid var(--line); border-radius:10px; padding:36px 44px; box-shadow:0 1px 3px rgba(0,0,0,.05); }

  /* view states */
  body[data-view="scan"] .textpane { display:none; }
  body[data-view="scan"] .stage { grid-template-columns:1fr; }
  body[data-view="scan"] .scanframe { max-width:820px; margin:0 auto; }
  body[data-view="text"] .scanpane { display:none; }
  body[data-view="text"] .stage { grid-template-columns:1fr; }

  /* ---- rendered content ---- */
  .textcard h1 { font-size:1.6em; line-height:1.3; border-bottom:2px solid var(--line); padding-bottom:.4em; margin-top:0; }
  .textcard h2 { font-size:1.28em; border-bottom:1px solid var(--line); padding-bottom:.3em; margin-top:1.8em; }
  .textcard h3 { font-size:1.08em; margin-top:1.5em; }
  .textcard blockquote { margin:1em 0; padding:.6em 1em; border-left:4px solid var(--accent); background:#fdf8ec; border-radius:0 6px 6px 0; color:#57534e; font-size:.95em; }
  .textcard blockquote p { margin:0; }
  .textcard table { border-collapse:collapse; width:100%; margin:1.2em 0; font-size:.92em; display:block; overflow-x:auto; }
  .textcard th, .textcard td { border:1px solid var(--line); padding:6px 10px; text-align:left; vertical-align:top; }
  .textcard th { background:#f5f1e8; font-family:system-ui,sans-serif; font-size:.85em; text-transform:uppercase; letter-spacing:.03em; }
  .textcard tbody tr:nth-child(even) { background:#faf7f1; }
  .textcard code { font-family:ui-monospace,Menlo,Consolas,monospace; font-size:.88em; background:#f1ede5; padding:1px 5px; border-radius:4px; }
  .textcard .katex-display { overflow-x:auto; overflow-y:hidden; padding:4px 0; }

  /* ---- footer ---- */
  footer { text-align:center; color:var(--muted); font-size:12px; padding:18px 16px 30px; }
  footer a { color:var(--accent); }

  @media (max-width:980px) {
    .stage { grid-template-columns:1fr; }
    .scanpane { position:static; }
    .scanframe img { max-height:78vh; object-fit:contain; margin:0 auto; }
    .textcard { padding:24px 20px; }
  }
  @media print {
    .topbar, .banner, footer, .scanpane, .scanhint { display:none !important; }
    .stage { display:block; padding:0; } .textcard { border:none; box-shadow:none; padding:0; }
    body { background:#fff; }
  }
`;

const VIEW_JS = `
(function () {
  var body = document.body;
  var buttons = document.querySelectorAll('.viewtoggle button');
  function setView(v) {
    body.dataset.view = v;
    buttons.forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.view === v)); });
  }
  buttons.forEach(function (b) { b.addEventListener('click', function () { setView(b.dataset.view); }); });
  setView('split'); // split everywhere: on mobile it stacks (scan on top, text below), keeping the scan directly visible
})();
`;

function esc(s) { return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }

function pageShell({ title, book, chapterLabel, pageLine, badgesHtml, scanRel, mdRel, bodyHtml }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/katex.min.css">
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/katex.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/contrib/auto-render.min.js"></script>
<script defer>
document.addEventListener("DOMContentLoaded", () => {
  if (window.renderMathInElement) renderMathInElement(document.querySelector(".textcard"), {
    delimiters: [{left:"$$",right:"$$",display:true},{left:"$",right:"$",display:false}],
    throwOnError: false
  });
});
window.addEventListener("DOMContentLoaded", () => { ${VIEW_JS} });
</script>
<style>${CSS}</style>
</head>
<body data-view="split">
<div class="banner chrome"><strong>🧪 Digital format test</strong> · one of ${TEST_PAGES.length} curated test pages · generated from the canonical Markdown in <code>Books/Formatted/</code> · generated ${GEN_DATE}</div>
<header class="topbar chrome">
  <div class="topbar-inner">
    <span class="brand">STUDY <span class="dot">·</span> Digital</span>
    <span class="viewtoggle" role="group" aria-label="View mode">
      <button type="button" data-view="split" aria-pressed="true">Split</button>
      <button type="button" data-view="scan" aria-pressed="false">Scan</button>
      <button type="button" data-view="text" aria-pressed="false">Text</button>
    </span>
    <span class="topbar-links">
      <a href="${esc(mdRel)}">Markdown source</a>
      <a href="${esc(scanRel)}">Full scan ↗</a>
    </span>
  </div>
</header>
<section class="band chrome">
  <div class="book">${esc(book)}</div>
  <h1>${esc(chapterLabel)}</h1>
  <div class="badges">${badgesHtml}</div>
</section>
<main class="stage">
  <aside class="scanpane" aria-label="Original scanned page">
    <div class="scanframe">
      <a href="${esc(scanRel)}" target="_blank" rel="noopener" title="Open the full-resolution scan">
        <img src="${esc(scanRel)}" alt="Scanned textbook page — ${esc(pageLine)}" loading="lazy">
      </a>
      <div class="scanhint">Original page scan · click to open full resolution</div>
    </div>
  </aside>
  <article class="textpane">
    <div class="textcard">${bodyHtml}</div>
  </article>
</main>
<footer class="chrome">Digital format <strong>test page</strong> — not the canonical library · <code>tools/generate-digital.mjs</code> · <a href="${esc(mdRel)}">Markdown source</a> · <a href="${esc(scanRel)}">Original scan</a></footer>
</body>
</html>
`;
}

// ------------------------------------------------------------------- math --
// Extract LaTeX before markdown parsing so `_`, `*`, `\` etc. are not mangled
// by the emphasis/escape rules (mirrors GitHub's math-first precedence).
function extractMath(src, store) {
  let out = src.replace(/\$\$([\s\S]+?)\$\$/g, (_, inner) => { store.push({ inner, display: true }); return `ZZMATH${store.length - 1}ZZ`; });
  out = out.replace(/\$([^$\n]+?)\$/g, (_, inner) => { store.push({ inner, display: false }); return `ZZMATH${store.length - 1}ZZ`; });
  return out;
}
function restoreMath(html, store) {
  return html.replace(/ZZMATH(\d+)ZZ/g, (_, i) => {
    const m = store[Number(i)];
    return m.display ? `$$${esc(m.inner)}$$` : `$${esc(m.inner)}$`;
  });
}

// ------------------------------------------------------------------ parse --
function parseFrontmatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---\n?/);
  const out = {};
  if (m) for (const line of m[1].split('\n')) { const km = line.match(/^([A-Za-z_][A-Za-z0-9_]*):\s?(.*)$/); if (km) out[km[1]] = km[2]; }
  return { fm: out, body: text.replace(/^---\n[\s\S]*?\n---\n?/, '') };
}
function unq(v) { if (v === undefined) return null; v = v.trim(); if (v === 'null' || v === '') return null; if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1); return v; }

// ------------------------------------------------------------------- main --
// Load book registries to resolve batch → chapter metadata
const REGISTRY = {};
for (const d of fs.readdirSync(path.join(ROOT, 'Books', 'Formatted'))
  .filter(d => fs.statSync(path.join(ROOT, 'Books', 'Formatted', d)).isDirectory())) {
  const bj = JSON.parse(fs.readFileSync(path.join(ROOT, 'Books', 'Formatted', d, 'book.json'), 'utf8'));
  for (const part of bj.parts) REGISTRY[part.batch] = { subjectDir: d, book: bj, part };
}

const DIGITAL = path.join(ROOT, 'Books', 'Digital');
fs.rmSync(DIGITAL, { recursive: true, force: true });   // regenerate from scratch every run
fs.mkdirSync(DIGITAL, { recursive: true });

const written = [];

for (const t of TEST_PAGES) {
  const reg = REGISTRY[t.batch];
  if (!reg) die(`unknown batch ${t.batch}`);
  const { subjectDir, book, part } = reg;
  const chDir = path.join(ROOT, 'Books', 'Formatted', subjectDir, part.folder);
  const chJson = JSON.parse(fs.readFileSync(path.join(chDir, 'chapter.json'), 'utf8'));
  const mdFile = `page-${String(t.image).padStart(3, '0')}.md`;
  const mdPath = path.join(chDir, mdFile);
  if (!fs.existsSync(mdPath)) die(`missing page ${mdPath}`);
  const text = fs.readFileSync(mdPath, 'utf8');
  const { fm, body } = parseFrontmatter(text);
  const printed = unq(fm.page_printed);
  const contentType = unq(fm.content_type) ?? '—';
  const figures = unq(fm.figures_count) ?? '0';
  const posInChapter = chJson.pages.findIndex(p => p.image === t.image) + 1;

  // relative links (2 ups: Digital/<Subject>/ → Books/); book.json stores raw_folder as "Books/Raw/…"
  const rawUnderBooks = part.raw_folder.replace(/^Books\//, '');          // e.g. Raw/Mathematics/Front-Matter
  const scanRel = `../../${rawUnderBooks}/${String(t.image).padStart(4, '0')}.jpg`;
  const mdRel = `../../Formatted/${subjectDir}/${part.folder}/${mdFile}`;
  if (!fs.existsSync(path.join(ROOT, part.raw_folder, String(t.image).padStart(4, '0') + '.jpg'))) {
    die(`scan image missing for ${t.batch} img ${t.image}`);
  }

  // markdown → html (math-protected)
  const store = [];
  let inner = marked.parse(extractMath(body, store), { gfm: true, async: false });
  inner = restoreMath(inner, store);
  // The body's scan-link line was written relative to the .md (3 ups from
  // Books/Formatted/<Subject>/<Chapter>/ = Books/). Digital pages sit at
  // Books/Digital/<Subject>/ (2 ups = Books/) → adjust the embedded link.
  inner = inner.split('href="../../../Raw/').join('href="../../Raw/');

  const chapterLabel = part.kind === 'chapter'
    ? `${chJson.chapter_label}: ${chJson.title}`
    : 'Front matter (Chapter 00)';
  const pageLine = `image ${t.image}${printed ? ` · printed page ${printed}` : ''} · ${chapterLabel}`;
  const badges = [
    `<span class="badge dark">batch ${esc(t.batch)}</span>`,
    `<span class="badge accent">${esc(contentType)}</span>`,
    `<span class="badge">page image ${t.image} / ${chJson.page_count}</span>`,
    printed ? `<span class="badge">printed p. ${esc(printed)}</span>` : '',
    posInChapter ? `<span class="badge">№ ${posInChapter} in chapter</span>` : '',
    `<span class="badge">figures: ${esc(figures)}</span>`,
  ].filter(Boolean).join(' ');

  const fileName = `page-${t.batch.replace('-', '')}-${String(t.image).padStart(3, '0')}.html`;
  const outPath = path.join(DIGITAL, subjectDir, fileName);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, pageShell({
    title: `Page ${t.image} — ${chapterLabel} · ${book.book_title}`,
    book: book.book_title,
    chapterLabel,
    pageLine,
    badgesHtml: badges,
    scanRel, mdRel,
    bodyHtml: inner,
  }));
  written.push(path.posix.join('Books', 'Digital', subjectDir, fileName));
}

function die(msg) { console.error('FATAL:', msg); process.exit(1); }

console.log(`=== generate-digital (v4, curated test pages) ===`);
written.forEach(w => console.log('  + ' + w));

// verify: EXACTLY the expected set, nothing else
const expected = new Set(TEST_PAGES.map(t =>
  path.posix.join('Books', 'Digital',
    (t.batch.startsWith('M') ? 'Mathematics' : 'Statistics'),
    `page-${t.batch.replace('-', '')}-${String(t.image).padStart(3, '0')}.html`)));
const actual = new Set(written);
const same = expected.size === actual.size && [...expected].every(f => actual.has(f));
if (!same) { console.error('PROBLEM: written set != expected set ❌'); process.exit(1); }
console.log(`OK ✅ — exactly ${written.length} curated digital test pages (no chapter folders, no indexes)`);
