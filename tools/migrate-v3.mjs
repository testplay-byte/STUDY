#!/usr/bin/env bun
/**
 * migrate-v3.mjs — ONE-OFF migration: repo layout v2 → v3 (2026-09-02).
 *
 * WHY v3 EXISTS (user directives, recorded for every future agent):
 *   1. NO exercise/section sub-folders. Pages live FLAT inside their chapter folder.
 *      The user reviewed the M-1 exercise split (exercise-1.1/1.2/1.3 …) and rejected it:
 *      boundaries were unreliable and folder-per-exercise hurts navigation.
 *      Exercise/section identity is preserved in page frontmatter + chapter.json instead.
 *   2. Raw and digital content live together per book, clearly separated:
 *      books/<subject>/raw/<BATCH>/NNNN.jpg  (immutable scans)
 *      books/<subject>/<part>/page-NNN.md    (digital pages, flat)
 *   3. Frontmatter v3: `book:` renamed → `batch:`, `chapter:` renamed → `chapter_number:`,
 *      new fields `subject:` + `chapter_folder:`. Scan links become short: ../raw/<BATCH>/NNNN.jpg
 *
 * Run from repo root:  bun tools/migrate-v3.mjs
 * Idempotent-safe: refuses to run twice (checks v3 markers).
 */

import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();

const BATCHES = {
  'M-0': { subject: 'mathematics', target: 'books/mathematics/front-matter', chapterFolder: 'front-matter' },
  'M-1': { subject: 'mathematics', target: 'books/mathematics/chapter-01-functions-and-graphs', chapterFolder: 'chapter-01-functions-and-graphs' },
  'S-0': { subject: 'statistics', target: 'books/statistics/front-matter', chapterFolder: 'front-matter' },
  'S-1': { subject: 'statistics', target: 'books/statistics/chapter-08-set-theory', chapterFolder: 'chapter-08-set-theory' },
  'S-2': { subject: 'statistics', target: 'books/statistics/chapter-09-probability', chapterFolder: 'chapter-09-probability' },
};

const EXPECTED = { 'M-0': 7, 'M-1': 36, 'S-0': 9, 'S-1': 10, 'S-2': 50 };

/** Ordered frontmatter schema for v3 (field order is canonical). */
const FIELD_ORDER = [
  'subject', 'book_title', 'batch', 'chapter_folder', 'chapter_number', 'chapter_title',
  'page_image', 'page_printed', 'section', 'exercise', 'content_type',
  'has_figures', 'figures_count', 'source_image', 'converted_at', 'converted_by', 'notes',
];

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p));
    else out.push(p);
  }
  return out;
}

/** Parse flat YAML frontmatter (key: value lines; continuation lines appended). */
function parseFrontmatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!m) throw new Error('no frontmatter');
  const body = text.slice(m[0].length);
  const fields = []; // ordered [key, rawValue]
  for (const line of m[1].split('\n')) {
    const km = line.match(/^([A-Za-z_][A-Za-z0-9_]*):\s?(.*)$/);
    if (km) fields.push([km[1], km[2]]);
    else if (fields.length && line.trim()) fields[fields.length - 1][1] += ' ' + line.trim();
  }
  return { fields, body };
}

function batchOfPageFile(relPath) {
  const mm = relPath.match(/data\/processed\/[^/]+\/(M-0|M-1|S-0|S-1|S-2)\//);
  if (!mm) throw new Error('cannot determine batch for ' + relPath);
  return mm[1];
}

function pad3(n) { return String(n).padStart(3, '0'); }
function pad4(n) { return String(n).padStart(4, '0'); }

// ---------- pre-flight ----------
if (fs.existsSync(path.join(ROOT, 'books'))) {
  console.error('REFUSING: books/ already exists — migration already applied.');
  process.exit(1);
}
const allMd = walk(path.join(ROOT, 'data/processed')).filter(f => f.endsWith('.md'));
const counts = {};
for (const f of allMd) {
  const b = batchOfPageFile(f);
  counts[b] = (counts[b] || 0) + 1;
}
console.log('Pre-flight page counts:', counts);
for (const [b, n] of Object.entries(EXPECTED)) {
  if (counts[b] !== n) { console.error(`REFUSING: ${b} has ${counts[b]} pages, expected ${n}`); process.exit(1); }
}

// ---------- migrate raw images ----------
for (const [subject, batches] of [
  ['mathematics', ['M-0', 'M-1']],
  ['statistics', ['S-0', 'S-1', 'S-2']],
]) {
  for (const b of batches) {
    const src = path.join(ROOT, 'data/raw', subject, b);
    const dst = path.join(ROOT, 'books', subject, 'raw', b);
    fs.mkdirSync(path.dirname(dst), { recursive: true });
    fs.renameSync(src, dst);
    console.log(`raw: data/raw/${subject}/${b} → books/${subject}/raw/${b} (${fs.readdirSync(dst).length} imgs)`);
  }
}

// ---------- migrate + rewrite processed pages ----------
let moved = 0, rewritten = 0;
const problems = [];
for (const file of allMd) {
  const rel = path.relative(ROOT, file);
  const batch = batchOfPageFile(rel);
  const cfg = BATCHES[batch];
  const text = fs.readFileSync(file, 'utf8');
  const { fields, body } = parseFrontmatter(text);

  const map = new Map(fields);
  const img = parseInt(map.get('page_image'), 10);
  if (!Number.isInteger(img)) { problems.push(`${rel}: bad page_image`); continue; }

  // renames + additions
  const chapterNumber = map.get('chapter');
  map.delete('book'); map.delete('chapter');
  map.set('subject', cfg.subject);
  map.set('batch', batch);
  map.set('chapter_folder', cfg.chapterFolder);
  if (chapterNumber !== undefined) map.set('chapter_number', chapterNumber);
  map.set('source_image', `../raw/${batch}/${pad4(img)}.jpg`);

  // rebuild frontmatter in canonical order (unknown fields appended at end)
  const ordered = [];
  for (const k of FIELD_ORDER) if (map.has(k)) ordered.push([k, map.get(k)]);
  for (const [k, v] of map) if (!FIELD_ORDER.includes(k)) ordered.push([k, v]);
  const fm = ordered.map(([k, v]) => `${k}: ${v}`).join('\n');

  // rewrite the scan-link blockquote in the body
  const newRel = `../raw/${batch}/${pad4(img)}.jpg`;
  const scanRe = /^(> 📄 Original scan: \[)([^\]]+)(\]\()[^)]*(\).*)$/m;
  let newBody = body;
  if (scanRe.test(newBody)) {
    newBody = body.replace(scanRe, (_m, a, label, c, tail) => `${a}${pad4(img)}.jpg${c}${newRel}${tail}`);
  } else {
    problems.push(`${rel}: scan-link line not found`);
  }

  const dst = path.join(ROOT, cfg.target, `page-${pad3(img)}.md`);
  fs.mkdirSync(path.dirname(dst), { recursive: true });
  fs.writeFileSync(dst, `---\n${fm}\n---\n${newBody}`);
  fs.unlinkSync(file);
  moved++; rewritten++;
}
console.log(`pages migrated+rewritten: ${moved} (problems: ${problems.length})`);
problems.forEach(p => console.log('  ⚠ ' + p));

// ---------- clean empty v2 dirs ----------
for (const d of ['data/processed/mathematics', 'data/processed/statistics', 'data/processed',
                 'data/raw/mathematics', 'data/raw/statistics', 'data/raw', 'data']) {
  const p = path.join(ROOT, d);
  if (fs.existsSync(p) && fs.readdirSync(p).length === 0) fs.rmdirSync(p);
}
if (fs.existsSync(path.join(ROOT, 'data'))) {
  console.error('WARNING: data/ not empty after migration:'); 
  walk(path.join(ROOT, 'data')).forEach(f => console.log('   leftover:', f));
}

// ---------- verify ----------
console.log('\n=== VERIFICATION ===');
let ok = true;
for (const [batch, cfg] of Object.entries(BATCHES)) {
  const files = fs.readdirSync(path.join(ROOT, cfg.target)).filter(f => f.endsWith('.md'));
  const match = files.length === EXPECTED[batch];
  if (!match) ok = false;
  console.log(`${batch}: ${files.length}/${EXPECTED[batch]} pages ${match ? '✓' : '✗ MISMATCH'}`);
  // link check
  for (const f of files) {
    const t = fs.readFileSync(path.join(ROOT, cfg.target, f), 'utf8');
    const m = t.match(/^---\n[\s\S]*?\nsource_image: (\S+)\n/m);
    const resolved = path.resolve(path.join(ROOT, cfg.target), m?.[1] || '');
    if (!m || !fs.existsSync(resolved)) { ok = false; console.log(`  ✗ ${f}: source_image broken (${m?.[1]})`); }
  }
}
console.log(ok ? '\nMIGRATION OK ✅' : '\nMIGRATION HAS PROBLEMS ❌');
process.exit(ok ? 0 : 1);
