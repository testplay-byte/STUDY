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
  // v4.3 markdown-only batches (2026-09-06): never existed in v3 → no git baseline;
  // page count may trail raw count while conversion waves are in progress.
  { batch: 'M-2', subject: 'mathematics', subjectDir: 'Mathematics', rawName: 'Unit-02-Limit-Continuity-and-Derivative',            oldFolder: null, newFolder: 'Chapter-02-Limit-Continuity-and-Derivative', imgs: 46, markdownOnly: true },
  { batch: 'M-3', subject: 'mathematics', subjectDir: 'Mathematics', rawName: 'Unit-03-Integration',                                 oldFolder: null, newFolder: 'Chapter-03-Integration',                     imgs: 31, markdownOnly: true },
  { batch: 'M-4', subject: 'mathematics', subjectDir: 'Mathematics', rawName: 'Unit-04-Differential-Equations',                      oldFolder: null, newFolder: 'Chapter-04-Differential-Equations',          imgs: 20, markdownOnly: true },
  { batch: 'M-5', subject: 'mathematics', subjectDir: 'Mathematics', rawName: 'Unit-05-Kinematics-of-Motion-in-a-Straight-Line',     oldFolder: null, newFolder: 'Chapter-05-Kinematics-of-Motion-in-a-Straight-Line', imgs: 20, markdownOnly: true },
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
/** Fetch the v3 baseline for an old path: walk the ACTUAL commit history of that path
 *  (newest first) until a rev exists where the file has content — immune to any amount of
 *  new history accumulating on top. Falls back to a shallow window for weird cases. */
function gitShowV3(oldRel) {
  let revs = [];
  try {
    revs = execFileSync('git', ['log', '--format=%H', '--', oldRel], { encoding: 'utf8' })
      .trim().split('\n').filter(Boolean);
  } catch { /* fall through to window */ }
  revs.push('HEAD', 'HEAD~1', 'HEAD~2', 'HEAD~3', 'HEAD~4', 'HEAD~5');
  for (const rev of revs) {
    try { return execFileSync('git', ['show', `${rev}:${oldRel}`], { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 }); }
    catch { /* deleted/renamed at this rev — try older */ }
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
  if (b.markdownOnly) {
    // v4.3 markdown-only batch: conversion may be mid-wave — pages must not EXCEED raws.
    if (pages.length > imgs.length) p(`page count ${pages.length} > raw count ${imgs.length}`);
  } else if (pages.length !== b.imgs) p(`page count ${pages.length} != expected ${b.imgs}`);
  totalImg += imgs.length; totalMd += pages.length;

  for (const f of pages) {
    const newRel = path.posix.join('Books', 'Formatted', b.subjectDir, b.newFolder, f);
    const newText = fs.readFileSync(path.join(fmtDir, f), 'utf8');
    // C: byte integrity vs v3 baseline (legacy batches only — markdown-only batches have no v3 past)
    if (!b.markdownOnly) {
      const oldRel = path.posix.join('books', b.subject, b.oldFolder, f);
      const headText = gitShowV3(oldRel);
      if (headText === null) { p(`${newRel}: no v3 baseline found in git history for ${oldRel}`); continue; }
      if (newText !== rewriteV3toV4(headText, b)) p(`${newRel}: content drift vs HEAD+rewrites`);
    }
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
    if (!b.markdownOnly) totalChecked++;
  }
  ok(`${b.batch}: ${imgs.length} imgs + ${pages.length} pages checked`);
}

console.log('\n== Totals ==');
const legacyImgs = BATCHES.filter(b => !b.markdownOnly).reduce((s, b) => s + b.imgs, 0); // 112
const legacyMdCount = BATCHES.filter(b => !b.markdownOnly).reduce((s, b) => {
  const d = path.join(ROOT, 'Books', 'Formatted', b.subjectDir, b.newFolder);
  return s + (fs.existsSync(d) ? fs.readdirSync(d).filter(f => /^page-\d{3}\.md$/.test(f)).length : 0);
}, 0);
if (legacyMdCount !== legacyImgs) p(`legacy md ${legacyMdCount} != ${legacyImgs}`); else ok(`${legacyImgs}/${legacyImgs} legacy markdown pages`);
if (totalImg !== 229) p(`total images ${totalImg} != 229`); else ok('229/229 raw images (112 legacy + 117 M-2..M-5)');
if (totalChecked !== legacyImgs) p(`byte-verified legacy pages ${totalChecked} != ${legacyImgs}`); else ok(`${legacyImgs} legacy pages byte-verified vs v3 baseline + link-checked`);
const moPages = BATCHES.filter(b => b.markdownOnly).reduce((s, b) => {
  const d = path.join(ROOT, 'Books', 'Formatted', b.subjectDir, b.newFolder);
  return s + (fs.existsSync(d) ? fs.readdirSync(d).filter(f => /^page-\d{3}\.md$/.test(f)).length : 0);
}, 0);
console.log(`  ℹ markdown-only batches (M-2..M-5): ${moPages}/117 pages placed (conversion in progress or complete)`);

console.log('\n=== verify-v4 ===');
if (problems.length) { console.log(`PROBLEMS: ${problems.length} ❌`); process.exit(1); }
console.log('ALL GREEN ✅');
