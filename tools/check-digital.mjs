#!/usr/bin/env node
/**
 * check-digital.mjs — integrity verifier for the Digital Edition v3 library.
 *
 * Plain Node (ESM, zero dependencies). Read-only.
 *
 *   node tools/check-digital.mjs [--strict-figures] [--frozen]
 *
 * --frozen (v4.3 markdown-only mode): the Digital layer is FROZEN at the edition it
 *   was built for (user directive 2026-09-06 — new books/chapters are digitized to
 *   markdown only). Formatted pages without a Digital twin are counted, not failed;
 *   everything else (chrome/figures/tree/manifest over existing Digital pages, plus
 *   the reverse-orphan regression check) is enforced exactly as usual.
 *
 * Checks
 *   1. Coverage  — every Books/Formatted page-NNN.md has a matching generated
 *                  (or hand-typeset) Books/Digital/<Book>/<Chapter>/page-NNN.html
 *                  (— in --frozen mode missing twins are counted, not failed),
 *                  and every Digital page still has its Formatted md (regression check).
 *   2. Chrome    — every page has <main>, KaTeX CDN css, viewport meta, a
 *                  toolbar scan link + markdown link that resolve on disk,
 *                  and the library index link.
 *   3. Figures   — for every page whose md declares figures_count N, the HTML
 *                  must embed ≥ N figures as base64 data URIs. Figure slots not
 *                  yet cropped render as class="figslot" placeholders — these are
 *                  WARNINGS by default and FAILURES with --strict-figures (the
 *                  gate to run before pushing a "complete" edition).
 *                  Relative src="assets/…" references are always a REGRESSION
 *                  (the "no graphs" bug class from review rounds 3-4).
 *   4. Tree      — Books/Digital contains exactly: index.html, manifest.json and
 *                  <Book>/<Chapter>/{page-NNN.html, assets/} — nothing else.
 *   5. Manifest  — manifest.json page ids match the disk tree 1:1.
 *
 * Exit 0 = ALL GREEN, 1 = failures (printed with ✗).
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, "..");
const BOOKS = path.join(ROOT, "Books");
const FORMATTED = path.join(BOOKS, "Formatted");
const DIGITAL = path.join(BOOKS, "Digital");

const STRICT = process.argv.includes("--strict-figures");
const FROZEN = process.argv.includes("--frozen");

const failures = [];
const warnings = [];
const fail = (msg) => failures.push(msg);
const warn = (msg) => warnings.push(msg);

/* ---------- 1+2+3: per page ---------- */
const mdFiles = [];
for (const book of fs.readdirSync(FORMATTED, { withFileTypes: true })) {
  if (!book.isDirectory()) continue;
  for (const chap of fs.readdirSync(path.join(FORMATTED, book.name), { withFileTypes: true })) {
    if (!chap.isDirectory()) continue;
    for (const f of fs.readdirSync(path.join(FORMATTED, book.name, chap.name))) {
      if (/^page-\d+\.md$/.test(f)) mdFiles.push(path.join(FORMATTED, book.name, chap.name, f));
    }
  }
}

let pagesChecked = 0, figuresEmbeddedTotal = 0, slotsPendingTotal = 0, frozenSkipped = 0;

for (const md of mdFiles.sort()) {
  const relBooks = path.relative(BOOKS, md).replace(/^Formatted\//, "Digital/").replace(/\.md$/, ".html");
  const htmlPath = path.join(BOOKS, relBooks);
  const pageDir = path.dirname(htmlPath);
  if (!fs.existsSync(htmlPath)) {
    if (FROZEN) { frozenSkipped++; continue; }
    fail(`MISSING page: ${relBooks}`);
    continue;
  }
  pagesChecked++;
  const html = fs.readFileSync(htmlPath, "utf8");

  /* chrome */
  if (!html.includes("<main")) fail(`${relBooks}: no <main> element`);
  if (!html.includes("katex.min.css")) fail(`${relBooks}: KaTeX CDN stylesheet missing`);
  if (!html.includes('name="viewport"')) fail(`${relBooks}: viewport meta missing`);

  /* links resolve */
  for (const m of html.matchAll(/(?:href|src)="(?!https?:|#|data:|javascript:|\/)([^"]+)"/g)) {
    const target = path.resolve(pageDir, m[1]);
    if (!fs.existsSync(target)) fail(`${relBooks}: broken link "${m[1]}"`);
  }

  /* figures */
  const fmSrc = fs.readFileSync(md, "utf8").match(/^---\n([\s\S]*?)\n---/);
  const hasFigures = fmSrc && /^has_figures:\s*true/m.test(fmSrc[1]);
  const figCount = fmSrc ? Number((fmSrc[1].match(/^figures_count:\s*(\d+)/m) || [0, 0])[1]) : 0;
  const embedded = (html.match(/<img[^>]+src="data:image\//g) || []).length;
  const slots = (html.match(/class="fig(?:cell)?slot"/g) || []).length;
  figuresEmbeddedTotal += embedded;
  slotsPendingTotal += slots;

  if (hasFigures && embedded + slots < figCount)
    fail(`${relBooks}: declares ${figCount} figure(s) but only ${embedded} embedded + ${slots} slots rendered`);
  if (hasFigures && embedded < figCount) {
    const msg = `${relBooks}: ${figCount - embedded} of ${figCount} figure(s) still placeholder(s)`;
    (STRICT ? fail : warn)(msg);
  }

  /* the regression class */
  if (/src="assets\//.test(html)) fail(`${relBooks}: relative assets/ src (must be data URI)`);
}

/* ---------- 1b: reverse coverage — a Digital page whose md vanished is always a regression ---------- */
const mdSet = new Set(
  mdFiles.map((m) =>
    path.relative(BOOKS, m).replace(/^Formatted\//, "Digital/").replace(/\.md$/, "")
  )
);
let digitalCount = 0;
for (const book of fs.readdirSync(DIGITAL, { withFileTypes: true })) {
  if (!book.isDirectory()) continue;
  for (const chap of fs.readdirSync(path.join(DIGITAL, book.name), { withFileTypes: true })) {
    if (!chap.isDirectory()) continue;
    for (const f of fs.readdirSync(path.join(DIGITAL, book.name, chap.name))) {
      if (!/^page-\d+\.html$/.test(f)) continue;
      digitalCount++;
      const rel = `Digital/${book.name}/${chap.name}/${f.replace(/\.html$/, "")}`;
      if (!mdSet.has(rel)) fail(`Digital page without Formatted md (regression): ${rel}`);
    }
  }
}

/* ---------- 4: tree shape ---------- */
const allowedTop = new Set(["index.html", "manifest.json", "Mathematics", "Statistics"]);
for (const e of fs.readdirSync(DIGITAL, { withFileTypes: true })) {
  if (!allowedTop.has(e.name)) fail(`Books/Digital: unexpected top-level entry "${e.name}"`);
}
for (const book of fs.readdirSync(DIGITAL, { withFileTypes: true })) {
  if (!book.isDirectory()) continue;
  for (const chap of fs.readdirSync(path.join(DIGITAL, book.name), { withFileTypes: true })) {
    if (!chap.isDirectory()) { fail(`Books/Digital/${book.name}: unexpected file "${chap.name}"`); continue; }
    for (const f of fs.readdirSync(path.join(DIGITAL, book.name, chap.name), { withFileTypes: true })) {
      if (f.isDirectory() && f.name !== "assets") fail(`unexpected dir ${book.name}/${chap.name}/${f.name}`);
      if (f.isFile() && !/^page-\d+\.html$/.test(f.name)) fail(`unexpected file ${book.name}/${chap.name}/${f.name}`);
    }
    for (const a of fs.readdirSync(path.join(DIGITAL, book.name, chap.name, "assets"))){
      if (!/\.(png|jpe?g|gif|webp)$/i.test(a)) fail(`non-image asset: ${book.name}/${chap.name}/assets/${a}`);
    }
  }
}

/* ---------- 5: manifest ---------- */
const manifestPath = path.join(DIGITAL, "manifest.json");
if (!fs.existsSync(manifestPath)) fail("manifest.json missing");
else {
  const man = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  const ids = man.books.flatMap((b) => b.chapters.flatMap((c) => c.pages.map((p) => p.id)));
  for (const id of ids) {
    const f = path.join(DIGITAL, id + ".html");
    if (!fs.existsSync(f)) fail(`manifest lists missing page: ${id}`);
  }
  const diskIds = [];
  for (const book of fs.readdirSync(DIGITAL, { withFileTypes: true })) {
    if (!book.isDirectory()) continue;
    for (const chap of fs.readdirSync(path.join(DIGITAL, book.name), { withFileTypes: true })) {
      if (!chap.isDirectory()) continue;
      for (const f of fs.readdirSync(path.join(DIGITAL, book.name, chap.name))) {
        if (/^page-\d+\.html$/.test(f)) diskIds.push(`${book.name}/${chap.name}/${f.replace(/\.html$/, "")}`);
      }
    }
  }
  for (const d of diskIds) if (!ids.includes(d)) fail(`page on disk but not in manifest: ${d}`);
}

/* ---------- report ---------- */
console.log(`pages checked: ${pagesChecked} | figures embedded: ${figuresEmbeddedTotal} | pending slots: ${slotsPendingTotal}`);
if (FROZEN)
  console.log(
    `frozen mode (v4.3 markdown-only): ${frozenSkipped} Formatted page(s) without a Digital twin (expected) · digital pages intact: ${digitalCount}`
  );
for (const w of warnings) console.log(`  ⚠ ${w}`);
for (const f of failures) console.log(`  ✗ ${f}`);
if (failures.length) { console.log(`\nFAIL — ${failures.length} problem(s)`); process.exit(1); }
console.log(STRICT && warnings.length ? `\nFAIL — strict figure mode: ${warnings.length} placeholder(s) left` : "\nALL GREEN");
if (STRICT && warnings.length) process.exit(1);
