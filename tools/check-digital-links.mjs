#!/usr/bin/env bun
/**
 * check-digital-links.mjs — read-only: verifies every relative href/src in Books/Digital
 * resolves to an existing file, and every page/scan/md link inside Books/Formatted indexes too.
 * Run from repo root:  bun tools/check-digital-links.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
let checked = 0; const broken = [];
const ATTR = /(?:href|src)="([^"]+)"/g;

function checkFile(file) {
  const html = fs.readFileSync(file, 'utf8');
  const dir = path.dirname(file);
  for (const m of html.matchAll(ATTR)) {
    const url = m[1];
    if (/^(https?:|#|mailto:|data:)/.test(url)) continue;
    const target = path.resolve(dir, url);
    checked++;
    if (!fs.existsSync(target)) broken.push(`${path.relative(ROOT, file)}  →  ${url}`);
  }
}

(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (/\.(html)$/.test(e.name)) checkFile(p);
  }
})(path.join(ROOT, 'Books', 'Digital'));

// indexes/*.md relative page links
for (const idx of fs.readdirSync(path.join(ROOT, 'indexes')).filter(f => f.endsWith('.md'))) {
  const md = fs.readFileSync(path.join(ROOT, 'indexes', idx), 'utf8');
  for (const m of md.matchAll(/\]\(([^)]+)\)/g)) {
    const url = m[1];
    if (/^(https?:|#)/.test(url)) continue;
    checked++;
    if (!fs.existsSync(path.resolve(path.join(ROOT, 'indexes'), url))) broken.push(`indexes/${idx}  →  ${url}`);
  }
}

console.log(`relative links checked: ${checked}`);
if (broken.length) { broken.forEach(b => console.log('  ✗ ' + b)); console.log(`BROKEN: ${broken.length} ❌`); process.exit(1); }
console.log('ALL LINKS RESOLVE ✅');
