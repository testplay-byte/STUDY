#!/usr/bin/env bun
/**
 * fix-v4-casing.mjs — one-off follow-up to migrate-v4.mjs.
 * migrate-v4.mjs created Books/{Raw,Formatted}/<lowercase-subject>/; the v4 spec
 * requires TitleCase book folders (Books/Raw, Books/Formatted, Books/Digital are
 * TitleCase, so book folders mirror that: Mathematics, Statistics).
 * Renames the folders and rewrites the subject segment inside all raw paths
 * (frontmatter source_image + scan-link line).
 * Run from repo root:  bun tools/fix-v4-casing.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
if (!fs.existsSync(path.join(ROOT, 'Books'))) { console.error('FATAL: Books/ not found'); process.exit(1); }

const renames = [
  ['Books/Raw/mathematics', 'Books/Raw/Mathematics'],
  ['Books/Raw/statistics', 'Books/Raw/Statistics'],
  ['Books/Formatted/mathematics', 'Books/Formatted/Mathematics'],
  ['Books/Formatted/statistics', 'Books/Formatted/Statistics'],
];
for (const [a, b] of renames) {
  if (fs.existsSync(path.join(ROOT, a))) {
    if (fs.existsSync(path.join(ROOT, b))) { console.error(`FATAL: both ${a} and ${b} exist`); process.exit(1); }
    fs.renameSync(path.join(ROOT, a), path.join(ROOT, b));
    console.log(`renamed ${a} → ${b}`);
  } else if (!fs.existsSync(path.join(ROOT, b))) {
    console.error(`FATAL: neither ${a} nor ${b} exists`); process.exit(1);
  } else {
    console.log(`already renamed: ${b}`);
  }
}

let files = 0, fixes = 0;
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (/\.md$/.test(e.name)) {
      files++;
      const t0 = fs.readFileSync(p, 'utf8');
      const t1 = t0
        .split('../../../Raw/mathematics/').join('../../../Raw/Mathematics/')
        .split('../../../Raw/statistics/').join('../../../Raw/Statistics/');
      if (t1 !== t0) { fs.writeFileSync(p, t1); fixes++; }
    }
  }
})(path.join(ROOT, 'Books'));
console.log(`scanned ${files} md files, fixed subject casing in ${fixes}`);
const bad = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (/\.md$/.test(e.name) && /Raw\/(mathematics|statistics)\//.test(fs.readFileSync(p, 'utf8'))) bad.push(p);
  }
})(path.join(ROOT, 'Books'));
if (bad.length) { console.error('STILL BAD:', bad); process.exit(1); }
console.log('OK ✅');
