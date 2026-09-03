#!/usr/bin/env bun
/**
 * verify-v4.mjs — definitive integrity verifier for structure v4. Read-only.
 *
 * Checks:
 *   A. Tree shape: Books/{Raw,Formatted}/<Subject>/... exists; books/ is gone.
 *   B. Counts: each batch has expected images in Raw and expected pages in Formatted; global 112/112.
 *   C. Byte integrity: every page equals git HEAD (v3) content with the exact v3→v4 rewrites applied.
 *   D. Frontmatter coherence: chapter_folder == actual folder; batch == folder mapping; source_image
 *      resolves to an existing image; scan-link line resolves; no stale `../raw/` or `books/` refs.
 *
 * Run from repo root:  bun tools/verify-v4.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const ROOT = process.cwd();
const BATCHES = [
  { batch: 'M-0', subject: 'mathematics', subjectDir: 'Mathematics', rawName: 'Front-Matter',                  oldFolder: 'front-matter',                    newFolder: 'Chapter-00-Front-Matter',         imgs: 7 },
  { batch: 'M-1', subject: 'mathematics', subjectDir: 'Mathematics', rawName: 'Unit-01-Functions-and-Graphs',  oldFolder: 'chapter-01-functions-and-graphs', newFolder: 'Chapter-01-Functions-and-Graphs', imgs: 36 },
  { batch: 'S-0', subject: 'statistics',  subjectDir: 'Statistics',  rawName: 'Front-Matter',                  oldFolder: 'front-matter',                    newFolder: 'Chapter-00-Front-Matter',         imgs: 9 },
  { batch: 'S-1', subject: 'statistics',  subjectDir: 'Statistics',  rawName: 'Chapter-08-Set-Theory',         oldFolder: 'chapter-08-set-theory',           newFolder: 'Chapter-08-Set-Theory',           imgs: 10 },
  { batch: 'S-2', subject: 'statistics',  subjectDir: 'Statistics',  rawName: 'Chapter-09-Probability',        oldFolder: 'chapter-09-probability',          newFolder: 'Chapter-09-Probability',          imgs: 50 },
];

const problems = [];
const p = (m) => { problems.push(m); console.error('  ✗ ' + m); };
const ok = (m) => console.log('  ✓ ' + m);

// --- A. tree shape ---
console.log('== A. Tree shape ==');
for (const d of ['Books/Raw', 'Books/Formatted']) fs.existsSync(path.join(ROOT, d)) ? ok(d + '/ exists') : p(d + '/ missing');
fs.existsSync(path.join(ROOT, 'books')) ? p('old books/ still exists') : ok('old books/ removed');

// --- B + C + D ---
let totalMd = 0, totalImg = 0, totalChecked = 0;
function rewriteV3toV4(text, b) {
  return text
    .split(`chapter_folder: ${b.oldFolder}`).join(`chapter_folder: ${b.newFolder}`)
    .split(`../raw/${b.batch}/`).join(`../../../Raw/${b.subjectDir}/${b.rawName}/`);
}
/** Fetch the v3 baseline for an old path: HEAD when the repo was still v3, else walk back
 *  through history until a commit contains it (lets this verifier run at any future point). */
function gitShowV3(oldRel) {
  const revs = ['HEAD', 'HEAD~1', 'HEAD~2', 'HEAD~3', 'HEAD~4', 'HEAD~5', 'HEAD~6', 'HEAD~7', 'HEAD~8'];
  for (const rev of revs) {
    try { return execFileSync('git', ['show', `${rev}:${oldRel}`], { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 }); }
    catch { /* path not in this rev — try older */ }
  }
  return null;
}
function parseFm(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---\n?/);
  const out = {};
  if (m) for (const line of m[1].split('\n')) { const km = line.match(/^([A-Za-z_][A-Za-z0-9_]*):\s?(.*)$/); if (km) out[km[1]] = km[2]; }
  return out;
}

for (const b of BATCHES) {
  console.log(`\n== Batch ${b.batch} ==`);
  const rawDir = path.join(ROOT, 'Books', 'Raw', b.subjectDir, b.rawName);
  const fmtDir = path.join(ROOT, 'Books', 'Formatted', b.subjectDir, b.newFolder);
  if (!fs.existsSync(rawDir)) { p(`missing ${rawDir}`); continue; }
  if (!fs.existsSync(fmtDir)) { p(`missing ${fmtDir}`); continue; }
  const imgs = fs.readdirSync(rawDir).filter(f => /\.(jpe?g|png)$/i.test(f)).sort();
  const pages = fs.readdirSync(fmtDir).filter(f => /^page-\d{3}\.md$/.test(f)).sort();
  if (imgs.length !== b.imgs) p(`Raw count ${imgs.length} != expected ${b.imgs}`);
  if (pages.length !== b.imgs) p(`page count ${pages.length} != expected ${b.imgs}`);
  totalImg += imgs.length; totalMd += pages.length;

  for (const f of pages) {
    const newRel = path.posix.join('Books', 'Formatted', b.subjectDir, b.newFolder, f);
    const oldRel = path.posix.join('books', b.subject, b.oldFolder, f);
    const newText = fs.readFileSync(path.join(fmtDir, f), 'utf8');
    // C: byte integrity vs v3 baseline (git history walk) with rewrites
    const headText = gitShowV3(oldRel);
    if (headText === null) { p(`${newRel}: no v3 baseline found in git history for ${oldRel}`); continue; }
    if (newText !== rewriteV3toV4(headText, b)) p(`${newRel}: content drift vs HEAD+rewrites`);
    // D: frontmatter + link coherence
    const fm = parseFm(newText);
    if ((fm.chapter_folder || '').trim() !== b.newFolder) p(`${newRel}: chapter_folder="${fm.chapter_folder}" != ${b.newFolder}`);
    if ((fm.batch || '').trim() !== b.batch) p(`${newRel}: batch="${fm.batch}" != ${b.batch}`);
    const srcRel = (fm.source_image || '').trim();
    if (!srcRel || fs.existsSync(path.join(fmtDir, srcRel)) === false) p(`${newRel}: source_image does not resolve: ${srcRel}`);
    else if (!srcRel.startsWith(`../../../Raw/${b.subjectDir}/${b.rawName}/`)) p(`${newRel}: unexpected source_image shape: ${srcRel}`);
    const scan = newText.match(/\]\((\.\.\/\.\.\/\.\.\/Raw\/[^)]+)\)/);
    if (!scan) p(`${newRel}: scan-link line missing`);
    else if (fs.existsSync(path.join(fmtDir, scan[1])) === false) p(`${newRel}: scan link does not resolve: ${scan[1]}`);
    if (/\.\.\/raw\//.test(newText)) p(`${newRel}: stale ../raw/ reference`);
    if (/(^|[^A-Za-z])books\//.test(newText)) p(`${newRel}: stale books/ reference`);
    totalChecked++;
  }
  ok(`${b.batch}: ${imgs.length} imgs + ${pages.length} pages checked`);
}

console.log('\n== Totals ==');
if (totalMd !== 112) p(`total md ${totalMd} != 112`); else ok('112/112 markdown pages');
if (totalImg !== 112) p(`total images ${totalImg} != 112`); else ok('112/112 raw images');
if (totalChecked !== 112) p(`fully verified pages ${totalChecked} != 112`); else ok('112/112 pages byte-verified vs git HEAD (v3) + link-checked');

console.log('\n=== verify-v4 ===');
if (problems.length) { console.log(`PROBLEMS: ${problems.length} ❌`); process.exit(1); }
console.log('ALL GREEN ✅');
