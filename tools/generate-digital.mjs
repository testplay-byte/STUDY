#!/usr/bin/env bun
/**
 * generate-digital.mjs — HTML "Digital" test edition (structure v4).
 *
 *   Reads : Books/Formatted/<Subject>/book.json + <chapter>/chapter.json + page-NNN.md
 *   Writes: Books/Digital/<Subject>/<chapter>/page-NNN.html  (+ index.html at every level)
 *
 * ⚠ TEST PURPOSE ONLY (user directive, 2026-09-03) — the Markdown under Books/Formatted/
 *   remains the single source of truth; never hand-edit generated HTML, re-run this script.
 *
 * Pipeline: run `bun tools/build-metadata.mjs` FIRST (this script consumes book.json/chapter.json).
 * Math: LaTeX segments are extracted before markdown parsing (GitHub-style precedence, protects
 * subscripts from emphasis) and restored as HTML-escaped text; KaTeX auto-renders them client-side
 * via CDN. If offline, math degrades to readable raw LaTeX.
 *
 * Run from repo root:  bun tools/generate-digital.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import { marked } from 'marked';

const ROOT = process.cwd();
if (!fs.existsSync(path.join(ROOT, 'Books', 'Formatted'))) {
  console.error('FATAL: Books/Formatted not found — run from repo root'); process.exit(1);
}

// ---------------------------------------------------------------- template --
const GEN_DATE = new Date().toISOString().slice(0, 10);

const CSS = `
  :root { --ink:#1f2937; --muted:#6b7280; --line:#e5e7eb; --accent:#b45309; --accent-soft:#fef3c7; --bg:#fafaf9; --card:#ffffff; }
  * { box-sizing: border-box; }
  body { margin:0; background:var(--bg); color:var(--ink); font:16px/1.75 Georgia,'Times New Roman',serif; }
  .chrome { font-family: system-ui,-apple-system,'Segoe UI',sans-serif; }
  .banner { background:var(--accent-soft); border-bottom:1px solid var(--line); padding:8px 16px; font-size:13px; color:#92400e; text-align:center; }
  .banner strong { font-weight:700; }
  .meta { background:var(--card); border-bottom:1px solid var(--line); padding:14px 20px; }
  .meta-inner { max-width:880px; margin:0 auto; display:flex; flex-wrap:wrap; gap:8px; align-items:center; }
  .badge { font-size:12px; padding:3px 10px; border-radius:999px; background:#f3f4f6; border:1px solid var(--line); color:var(--muted); white-space:nowrap; }
  .badge.dark { background:var(--ink); color:#fff; border-color:var(--ink); }
  .meta a { color:var(--accent); text-decoration:none; border-bottom:1px dotted var(--accent); font-size:13px; }
  .pagenav { max-width:880px; margin:0 auto; display:flex; justify-content:space-between; gap:12px; padding:10px 20px 0; font-family:system-ui,sans-serif; font-size:14px; }
  .pagenav a { color:var(--accent); text-decoration:none; }
  .pagenav a:hover { text-decoration:underline; }
  main { max-width:880px; margin:24px auto 48px; background:var(--card); border:1px solid var(--line); border-radius:10px; padding:40px 48px; }
  h1 { font-size:1.65em; line-height:1.3; border-bottom:2px solid var(--line); padding-bottom:.4em; }
  h2 { font-size:1.3em; border-bottom:1px solid var(--line); padding-bottom:.3em; margin-top:1.8em; }
  h3 { font-size:1.1em; margin-top:1.5em; }
  blockquote { margin:1em 0; padding:.6em 1em; border-left:4px solid var(--accent); background:#fffbeb; border-radius:0 6px 6px 0; color:#57534e; font-size:.95em; }
  blockquote p { margin:0; }
  table { border-collapse:collapse; width:100%; margin:1.2em 0; font-size:.92em; display:block; overflow-x:auto; }
  th, td { border:1px solid var(--line); padding:6px 10px; text-align:left; vertical-align:top; }
  th { background:#f9fafb; font-family:system-ui,sans-serif; font-size:.85em; text-transform:uppercase; letter-spacing:.03em; }
  tbody tr:nth-child(even) { background:#fafafa; }
  code { font-family:ui-monospace,Menlo,Consolas,monospace; font-size:.88em; background:#f3f4f6; padding:1px 5px; border-radius:4px; }
  pre code { display:block; padding:12px; overflow-x:auto; }
  .katex-display { overflow-x:auto; overflow-y:hidden; padding:4px 0; }
  footer { text-align:center; color:var(--muted); font-family:system-ui,sans-serif; font-size:12px; padding:20px 16px 28px; }
  footer a { color:var(--accent); }
  @media (max-width:640px){ main{ padding:24px 20px; } h1{ font-size:1.35em; } }
  @media print { .banner,.meta,.pagenav,footer{ display:none; } main{ border:none; margin:0; max-width:none; } body{ background:#fff; } }
`;

function pageShell({ title, badgesHtml, navHtml, pageNavHtml, bodyHtml }) {
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
  if (window.renderMathInElement) renderMathInElement(document.querySelector("main"), {
    delimiters: [{left:"$$",right:"$$",display:true},{left:"$",right:"$",display:false}],
    throwOnError: false
  });
});
</script>
<style>${CSS}</style>
</head>
<body>
<div class="banner chrome"><strong>🧪 TEST EDITION — Digital HTML</strong> · auto-generated from the canonical Markdown in <code>Books/Formatted/</code> · not the source of truth · generated ${GEN_DATE}</div>
${metaBar(badgesHtml, navHtml)}
${pageNavHtml ? `<nav class="pagenav chrome" aria-label="Page navigation">${pageNavHtml}</nav>` : ""}
<main>${bodyHtml}</main>
<footer class="chrome">Generated by <code>tools/generate-digital.mjs</code> · Library: <a href="${navHtml.rootLink}">Formatted Markdown</a> · <a href="${navHtml.scanLink}">original scan</a></footer>
</body>
</html>
`;
}

function metaBar(badgesHtml, navHtml) {
  const links = [];
  if (navHtml.up) links.push(`<a href="${navHtml.up}">↑ ${esc(navHtml.upLabel)}</a>`);
  links.push(`<a href="${navHtml.mdLink}">Markdown source</a>`);
  links.push(`<a href="${navHtml.scanLink}">Original scan ↗</a>`);
  return `<header class="meta chrome"><div class="meta-inner">${badgesHtml}<span style="flex:1"></span>${links.join(' ')}</div></header>`;
}

function esc(s) { return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }

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
const DIGITAL = path.join(ROOT, 'Books', 'Digital');
fs.rmSync(DIGITAL, { recursive: true, force: true });   // regenerate from scratch every run
fs.mkdirSync(DIGITAL, { recursive: true });

const bookDirs = fs.readdirSync(path.join(ROOT, 'Books', 'Formatted'))
  .filter(d => fs.statSync(path.join(ROOT, 'Books', 'Formatted', d)).isDirectory()).sort();
const rootEntries = [];

let htmlCount = 0, indexCount = 0;

for (const subjectDir of bookDirs) {
  const bookJson = JSON.parse(fs.readFileSync(path.join(ROOT, 'Books', 'Formatted', subjectDir, 'book.json'), 'utf8'));
  const bookOut = path.join(DIGITAL, subjectDir);
  fs.mkdirSync(bookOut, { recursive: true });
  const chapterEntries = [];

  for (const part of bookJson.parts) {
    const chJson = JSON.parse(fs.readFileSync(path.join(ROOT, 'Books', 'Formatted', subjectDir, part.folder, 'chapter.json'), 'utf8'));
    const chOut = path.join(bookOut, part.folder);
    fs.mkdirSync(chOut, { recursive: true });

    // relative prefixes from any page/chapter-index html in this chapter folder
    const UP4 = '../../../../';                       // → repo root
    const rawRel = UP4 + chJson.raw_folder;           // → Books/Raw/<Subject>/<ChapterName>/
    const fmtRel = `${UP4}Books/Formatted/${subjectDir}/${part.folder}`;

    const pageRows = [];
    const n = chJson.pages.length;
    for (let i = 0; i < n; i++) {
      const p = chJson.pages[i];
      const mdFile = p.file;
      const htmlFile = mdFile.replace(/\.md$/, '.html');
      const mdPath = path.join(ROOT, 'Books', 'Formatted', subjectDir, part.folder, mdFile);
      const text = fs.readFileSync(mdPath, 'utf8');
      const { fm, body } = parseFrontmatter(text);
      const image = p.image ?? unq(fm.page_image);
      const printed = p.printed ?? unq(fm.page_printed);
      const scanFile = (unq(fm.source_image) || '').split('/').pop();

      // markdown → html (math-protected)
      const store = [];
      const prepared = extractMath(body, store);
      let inner = marked.parse(prepared, { gfm: true, async: false });
      inner = restoreMath(inner, store);
      // NOTE: body scan links are written relative to the .md file (3 ups = Books/) and stay
      // valid from the .html file (same depth as the .md within Books/) — no rewrite needed.

      const mdLink = `${fmtRel}/${mdFile}`;
      const scanLink = scanFile ? `${rawRel}/${scanFile}` : `${fmtRel}/${mdFile}`;
      const badges = [
        `<span class="badge dark">${esc(bookJson.book_title)}</span>`,
        `<span class="badge">batch ${esc(chJson.batch)}</span>`,
        `<span class="badge">image ${esc(image)}</span>`,
        printed != null ? `<span class="badge">printed p. ${esc(printed)}</span>` : '',
        `<span class="badge">${esc(p.content_type ?? '—')}</span>`,
        p.exercise ? `<span class="badge">Exercise ${esc(p.exercise)}</span>` : '',
        `<span class="badge">figures: ${esc(p.figures_count ?? 0)}</span>`,
      ].filter(Boolean).join(' ');

      const prevP = i > 0 ? chJson.pages[i - 1] : null;
      const nextP = i < n - 1 ? chJson.pages[i + 1] : null;
      const pageNav = [
        prevP ? `<a href="${prevP.file.replace(/\.md$/, '.html')}">← Page ${prevP.image}</a>` : '<span></span>',
        `<a href="index.html">Chapter index</a>`,
        nextP ? `<a href="${nextP.file.replace(/\.md$/, '.html')}">Page ${nextP.image} →</a>` : '<span></span>',
      ].join(' ');

      const html = pageShell({
        title: `Page ${image} — ${chJson.chapter_label ? chJson.chapter_label + ': ' + (chJson.title ?? '') : 'Front matter'} (${bookJson.book_title})`,
        badgesHtml: badges,
        navHtml: {
          up: '../index.html',
          upLabel: part.kind === 'chapter' ? `${chJson.chapter_label} · ${chJson.title}` : 'Front matter',
          mdLink, scanLink, rootLink: `${UP4}Books/Formatted/${subjectDir}/book.json`,
        },
        pageNavHtml: pageNav,
        bodyHtml: inner,
      });
      fs.writeFileSync(path.join(chOut, htmlFile), html);
      htmlCount++;

      pageRows.push({ image, printed, htmlFile, mdFile, mdLink, row: p, scanFile });
    }

    // ---- chapter index.html ----
    const label = part.kind === 'chapter' ? `${chJson.chapter_label}: ${chJson.title}` : 'Front matter (Chapter 00)';
    let rows = '';
    for (const r of pageRows) {
      rows += `<tr>
        <td style="text-align:right">${esc(r.image)}</td>
        <td style="text-align:right">${r.printed != null ? esc(r.printed) : '—'}</td>
        <td><a href="${r.htmlFile}">page-${String(r.image).padStart(3, '0')}.html</a></td>
        <td>${esc(r.row.content_type ?? '—')}</td>
        <td>${esc(r.row.exercise ?? '—')}</td>
        <td>${esc((r.row.section ?? '—').length > 90 ? r.row.section.slice(0, 89) + '…' : r.row.section ?? '—')}</td>
        <td style="text-align:right">${esc(r.row.figures_count ?? 0)}</td>
        <td><a href="${r.mdLink}">.md</a>${r.scanFile ? ` · <a href="${rawRel}/${r.scanFile}">scan</a>` : ''}</td>
      </tr>\n`;
    }
    const chIndex = `<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(label)} — ${esc(bookJson.book_title)}</title><style>${CSS}</style></head>
<body>
<div class="banner chrome"><strong>🧪 TEST EDITION — Digital HTML</strong> · auto-generated · test purposes only · generated ${GEN_DATE}</div>
<main class="chrome">
<p><a href="../index.html">← ${esc(bookJson.book_title)}</a></p>
<h1>${esc(label)}</h1>
<p style="color:var(--muted)">${esc(chJson.book_title)} · ${chJson.page_count} pages · printed ${chJson.printed_page_range ? chJson.printed_page_range.join('–') : 'n/a'} · offset ${esc(chJson.printed_page_offset ?? 'n/a')} · batch <code>${esc(chJson.batch)}</code></p>
<table style="display:table">
<thead><tr><th>Image</th><th>Printed</th><th>HTML</th><th>Type</th><th>Exercise</th><th>Section(s)</th><th>Fig.</th><th>Source</th></tr></thead>
<tbody>${rows}</tbody></table>
</main>
<footer class="chrome">Generated by <code>tools/generate-digital.mjs</code> · Canonical library: <code>Books/Formatted/</code></footer>
</body></html>
`;
    fs.writeFileSync(path.join(chOut, 'index.html'), chIndex);
    indexCount++;
    chapterEntries.push({ part, chJson, label });
  }

  // ---- book index.html ----
  const UP3 = '../../../';
  let chRows = '';
  for (const { part, chJson, label } of chapterEntries) {
    chRows += `<tr><td><a href="${part.folder}/index.html">${esc(label)}</a></td>
      <td><code>${esc(chJson.batch)}</code></td>
      <td style="text-align:right">${chJson.page_count}</td>
      <td style="text-align:right">${chJson.printed_page_range ? chJson.printed_page_range.join('–') : 'n/a'}</td>
      <td>${esc(chJson.printed_page_offset ?? 'n/a')}</td></tr>\n`;
  }
  const bookIndex = `<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(bookJson.full_title)} — Digital (test)</title><style>${CSS}</style></head>
<body>
<div class="banner chrome"><strong>🧪 TEST EDITION — Digital HTML</strong> · auto-generated · test purposes only · generated ${GEN_DATE}</div>
<main class="chrome">
<p><a href="../index.html">← Digital test edition</a></p>
<h1>${esc(bookJson.full_title)}</h1>
<p style="color:var(--muted)">${esc(bookJson.publisher)} · Grade ${esc(bookJson.grade)} · ${bookJson.total_pages_digitized} digitized pages · structure ${esc(bookJson.structure_version)}</p>
<table style="display:table">
<thead><tr><th>Chapter</th><th>Batch</th><th>Pages</th><th>Printed</th><th>Offset</th></tr></thead>
<tbody>${chRows}</tbody></table>
</main>
<footer class="chrome">Generated by <code>tools/generate-digital.mjs</code> · Canonical library: <code>Books/Formatted/</code></footer>
</body></html>
`;
  fs.writeFileSync(path.join(bookOut, 'index.html'), bookIndex);
  indexCount++;
  rootEntries.push({ subjectDir, bookJson });
}

// ---- root index.html ----
const UP2 = '../../';
let bookRows = '';
for (const { subjectDir, bookJson } of rootEntries) {
  bookRows += `<tr><td><a href="${subjectDir}/index.html">${esc(bookJson.full_title)}</a></td>
    <td style="text-align:right">${bookJson.total_pages_digitized}</td>
    <td>${esc((bookJson.parts ?? []).map(p => p.batch).join(', '))}</td></tr>\n`;
}
const rootIndex = `<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Digital Test Edition — STUDY Library</title><style>${CSS}</style></head>
<body>
<div class="banner chrome"><strong>🧪 TEST EDITION — Digital HTML</strong> · auto-generated from the canonical Markdown · test purposes only · generated ${GEN_DATE}</div>
<main class="chrome">
<h1>Digital Test Edition</h1>
<p style="color:var(--muted)">HTML rendering of the textbook library — <strong>test purposes only</strong>. The canonical source of truth is the Markdown under <code>Books/Formatted/</code>; raw scans live under <code>Books/Raw/</code>. Regenerate with <code>bun tools/generate-digital.mjs</code>.</p>
<table style="display:table">
<thead><tr><th>Book</th><th>Pages</th><th>Batches</th></tr></thead>
<tbody>${bookRows}</tbody></table>
</main>
<footer class="chrome">Generated by <code>tools/generate-digital.mjs</code></footer>
</body></html>
`;
fs.writeFileSync(path.join(DIGITAL, 'index.html'), rootIndex);
indexCount++;

console.log(`=== generate-digital (v4) ===`);
console.log(`  pages: ${htmlCount} HTML · indexes: ${indexCount} (root + ${rootEntries.length} books + chapters)`);
console.log(htmlCount === 112 ? 'OK ✅ (112/112 HTML pages)' : `PROBLEM: expected 112 HTML pages, got ${htmlCount} ❌`);
process.exit(htmlCount === 112 ? 0 : 1);
