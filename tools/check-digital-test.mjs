#!/usr/bin/env node
/**
 * check-digital-test.mjs — integrity verifier for the Books/Digital replica pages.
 *
 * Plain Node (ESM, zero dependencies) — runs with `node tools/check-digital-test.mjs`
 * or `bun tools/check-digital-test.mjs` from anywhere (repo root is derived from this
 * file's location). Read-only: never writes anything.
 *
 * The Digital edition is a CURATED set of 8 HAND-TYPESET replica pages (CONVENTIONS §1.5):
 * there is no generator script anymore, so this checker is what keeps the folder honest.
 *
 * Checks
 *   1. Layout  — Books/Digital/ holds EXACTLY the whitelisted .html files + assets/,
 *                nothing else (no extra .html, no index.html, no stray dirs/files).
 *   2. Self-contained figures — every figure must be embedded as a base64 data URI
 *                (src="data:image/...") matching the page's expected figure count;
 *                relative src="assets/..." references are a REGRESSION (they break
 *                whenever a page is viewed without the assets folder — exactly the
 *                'no graphs' bug reported in user review round 3) and fail the run.
 *                Optimized canonical crops still live in Books/Digital/assets/
 *                (source of truth, produced by tools/embed-figures.py).
 *   3. Links   — every remaining href/src is either external (http(s)/#/mailto:/
 *                data:/javascript: — ignored) or resolves to an existing file on disk
 *                when resolved against the page's own directory (toolbar links →
 *                ../Raw scan + ../Formatted markdown).
 *   4. Chrome  — each page carries a KaTeX CDN stylesheet link and a `<main` element.
 *   5. Assets/ — contains only .png (line art) / .jpg (photos) figure crops;
 *                count must match the expected total; unreferenced assets are
 *                reported as a warning (does not fail the run).
 *
 * Exit code 0 = ALL GREEN, 1 = one or more ✗ failures (each printed with details).
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, "..");
const DIGITAL = path.join(ROOT, "Books", "Digital");
const ASSETS = path.join(DIGITAL, "assets");

/** The 8-page whitelist (user-approved scope; extending it needs the user's OK). */
const WHITELIST = [
  "M1-page-001.html",
  "M1-page-023.html",
  "M1-page-025.html",
  "S1-page-003.html",
  "S1-page-005.html",
  "S1-page-006.html",
  "S2-page-005.html",
  "S2-page-042.html",
];

/** Inline figure count expected per page (data-URI embeds; from the scans). */
const EXPECTED_FIGURES = {
  "M1-page-001.html": 2, // unit banner + telecom tower photo
  "M1-page-023.html": 1, // Key-Facts crossed-keys icon
  "M1-page-025.html": 2, // springs illustration + sin/cos graph
  "S1-page-003.html": 4, // Venn: intersection, difference, complement, disjoint
  "S1-page-005.html": 1, // A/B/C tree diagram
  "S1-page-006.html": 1, // coin+die tree diagram
  "S2-page-005.html": 3, // Figures 2, 3, 4
  "S2-page-042.html": 0, // MCQ text + answers grid — no figures on this page
};
const EXPECTED_ASSET_COUNT = Object.values(EXPECTED_FIGURES).reduce((a, b) => a + b, 0);

const SKIPPED_PREFIXES = ["http://", "https://", "#", "mailto:", "data:", "javascript:"];

const failures = [];
const ok = (msg) => console.log(`  ✓ ${msg}`);
const fail = (msg) => {
  console.log(`  ✗ ${msg}`);
  failures.push(msg);
};

function extractRefs(html) {
  const refs = [];
  const re = /\b(href|src)\s*=\s*(?:"([^"]*)"|'([^']*)')/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    const attr = m[1].toLowerCase();
    const value = m[2] !== undefined ? m[2] : m[3];
    if (value !== "") refs.push({ attr, value });
  }
  return refs;
}

function isInsideAssets(resolved) {
  const rel = path.relative(ASSETS, resolved);
  return rel !== "" && !rel.startsWith("..") && !path.isAbsolute(rel);
}

/* ---------- 1. Layout: exact directory content ---------- */
console.log("== Layout ==");
if (!fs.existsSync(DIGITAL)) {
  fail(`Books/Digital/ does not exist (expected at ${DIGITAL})`);
} else {
  const entries = fs.readdirSync(DIGITAL, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name));
  const htmlFiles = entries.filter((e) => e.isFile() && e.name.endsWith(".html")).map((e) => e.name);
  const others = entries.filter((e) => !(e.isFile() && e.name.endsWith(".html")) && !(e.isDirectory() && e.name === "assets"));

  const missing = WHITELIST.filter((f) => !htmlFiles.includes(f));
  const extra = htmlFiles.filter((f) => !WHITELIST.includes(f));
  if (missing.length) fail(`missing whitelisted page(s): ${missing.join(", ")}`);
  if (extra.length) fail(`non-whitelisted .html file(s) present: ${extra.join(", ")} (whitelist is 8; adding pages needs user approval)`);
  for (const o of others) {
    fail(`unexpected entry in Books/Digital/: ${o.name}${o.isDirectory() ? "/" : ""} (only the 8 whitelisted .html files + assets/ are allowed)`);
  }
  if (htmlFiles.length === WHITELIST.length && !missing.length && !extra.length && !others.length) {
    ok(`Books/Digital/ = exactly the ${WHITELIST.length} whitelisted pages + assets/ (no index.html, no strays)`);
  }
}

/* ---------- 2. Assets/ directory ---------- */
console.log("== assets/ ==");
const assetFiles = fs.existsSync(ASSETS) && fs.statSync(ASSETS).isDirectory()
  ? fs.readdirSync(ASSETS, { withFileTypes: true }).filter((e) => e.isFile()).map((e) => e.name).sort()
  : [];
if (!fs.existsSync(ASSETS) || !fs.statSync(ASSETS).isDirectory()) {
  fail("Books/Digital/assets/ directory is missing");
} else {
  const badType = assetFiles.filter((f) => !/\.(png|jpg)$/i.test(f));
  if (badType.length) fail(`assets/ contains unexpected file type(s): ${badType.join(", ")} (only .png line-art / .jpg photo crops belong here)`);
  if (!badType.length && assetFiles.length === EXPECTED_ASSET_COUNT) {
    ok(`${assetFiles.length} figure crops in assets/ (${assetFiles.filter((f) => f.endsWith(".jpg")).length} photo .jpg + ${assetFiles.filter((f) => f.endsWith(".png")).length} line-art .png)`);
  } else if (!badType.length) {
    fail(`assets/ holds ${assetFiles.length} files, expected ${EXPECTED_ASSET_COUNT}`);
  }
}

/* ---------- 3. Per-page checks ---------- */
console.log("== Pages ==");
const referencedAssets = new Set();
let linksChecked = 0;
let pagesPassed = 0;

for (const name of WHITELIST) {
  const file = path.join(DIGITAL, name);
  if (!fs.existsSync(file)) continue; // already reported as missing

  const html = fs.readFileSync(file, "utf8");
  const problems = [];
  let localLinks = 0;
  let resolvedOk = 0;

  // --- self-contained figures: data URIs in, relative asset refs out ---
  const inlineFigs = (html.match(/src="data:image\/(?:png|jpeg);base64,/g) || []).length;
  const want = EXPECTED_FIGURES[name] ?? 0;
  if (inlineFigs !== want) {
    problems.push(`self-containment: ${inlineFigs} inline data-URI figure(s) but expected ${want} (run tools/embed-figures.py)`);
  }
  if (/src="assets\//.test(html)) {
    problems.push(`regression: relative src="assets/..." reference(s) present — figures must be embedded as data URIs (user review round 3: 'no graphs')`);
  }

  for (const { attr, value } of extractRefs(html)) {
    if (SKIPPED_PREFIXES.some((p) => value.toLowerCase().startsWith(p))) continue;
    if (value.startsWith("/") || value.startsWith("\\")) {
      problems.push(`${attr}="${value}" is an absolute path (page links must be relative)`);
      continue;
    }
    localLinks += 1;
    const resolved = path.resolve(path.dirname(file), value.split("#")[0]);
    let exists = false;
    try {
      exists = fs.statSync(resolved).isFile();
    } catch {
      exists = false;
    }
    if (!exists) {
      problems.push(`${attr}="${value}" does not resolve (${path.relative(ROOT, resolved)} not found)`);
      continue;
    }
    resolvedOk += 1;
    if (attr === "src") {
      if (!isInsideAssets(resolved)) {
        problems.push(`src="${value}" points outside Books/Digital/assets/ (embedded images must be asset crops)`);
      } else {
        referencedAssets.add(path.basename(resolved));
      }
    }
  }
  linksChecked += localLinks;

  if (problems.length) {
    for (const p of problems) fail(`${name}: ${p}`);
  } else {
    ok(`${name}  · ${inlineFigs} figure${inlineFigs === 1 ? "" : "s"} embedded · ${resolvedOk}/${localLinks} local links resolve`);
  }

  if (!/https:\/\/[^\s"']*katex[^\s"']*\.css/i.test(html)) {
    fail(`${name}: no KaTeX CDN stylesheet link found`);
  }
  if (!/<main[\s>]/i.test(html)) {
    fail(`${name}: no <main> element`);
  }
  if (!problems.length && /https:\/\/[^\s"']*katex[^\s"']*\.css/i.test(html) && /<main[\s>]/i.test(html)) {
    pagesPassed += 1;
  }
}

/* ---------- 4. Hygiene (warnings only) ---------- */
console.log("== Hygiene ==");
const unreferenced = assetFiles.filter((f) => !referencedAssets.has(f));
if (unreferenced.length) {
  console.log(`  ⚠ asset file(s) not directly referenced by any page (figures are embedded as data URIs; assets/ is the canonical source): ${unreferenced.join(", ")}`);
} else if (assetFiles.length) {
  ok(`assets/ consistent with embedded figures`);
}

/* ---------- 5. Summary ---------- */
console.log("== Totals ==");
const totalFigs = Object.values(EXPECTED_FIGURES).reduce((a, b) => a + b, 0);
const total = `  ${pagesPassed}/${WHITELIST.length} pages pass · ${totalFigs} figures embedded · ${linksChecked} local link${linksChecked === 1 ? "" : "s"} checked · ${assetFiles.length} asset${assetFiles.length === 1 ? "" : "s"}`;
console.log(total);

if (failures.length) {
  console.error(`\n=== check-digital-test ===`);
  console.error(`FAILURES: ${failures.length} — see ✗ lines above`);
  process.exit(1);
}
console.log(`\n=== check-digital-test ===`);
console.log("ALL GREEN ✅");
