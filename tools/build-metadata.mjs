#!/usr/bin/env bun
/**
 * build-metadata.mjs — regenerates ALL derived metadata from page frontmatter:
 *   books/<subject>/book.json            (book registry, machine-readable)
 *   books/<subject>/<part>/chapter.json  (per-part page map, machine-readable)
 *   indexes/<subject>.md                 (human-readable page tables)
 *
 * Run from repo root whenever pages are added/edited:  bun tools/build-metadata.mjs
 * The page .md files are the single source of truth; never hand-edit derived files.
 *
 * NOTE: printed_page_offset values come from page-by-page recon (see docs/CONVENTIONS.md §6):
 *   M-1 printed = image + 6 · S-1 printed = image · S-2 printed = image + 10
 */

import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();

/** Book registry — hand-maintained identity data (titles/publishers from recon). */
const BOOKS = {
  mathematics: {
    book_title: 'Textbook of Mathematics Grade 12',
    full_title: 'Textbook of Mathematics Grade 12 — National Book Foundation as Federal Textbook Board, Islamabad',
    publisher: 'National Book Foundation as Federal Textbook Board, Islamabad',
    curriculum: 'National Curriculum of Pakistan 2022-23',
    grade: '12',
    parts: [
      { folder: 'front-matter', batch: 'M-0', kind: 'front-matter', printed_page_offset: null },
      { folder: 'chapter-01-functions-and-graphs', batch: 'M-1', kind: 'chapter', chapter_number: 1, chapter_label: 'Unit 01', title: 'Functions and Graphs', printed_page_offset: '+6' },
    ],
  },
  statistics: {
    book_title: 'Basic Statistics for Intermediate Classes, Part-II',
    full_title: 'Basic Statistics for Intermediate Classes, Part-II — M. Saleem Akhtar, Majeed Book Depot (Federal Board)',
    publisher: 'Majeed Book Depot (Federal Board)',
    grade: '12 (Intermediate Part-II)',
    parts: [
      { folder: 'front-matter', batch: 'S-0', kind: 'front-matter', printed_page_offset: null },
      { folder: 'chapter-08-set-theory', batch: 'S-1', kind: 'chapter', chapter_number: 8, chapter_label: 'Chapter 8', title: 'Set Theory', printed_page_offset: '0 (printed = image)' },
      { folder: 'chapter-09-probability', batch: 'S-2', kind: 'chapter', chapter_number: 9, chapter_label: 'Chapter 9', title: 'Probability', printed_page_offset: '+10' },
    ],
  },
};

/** Parse flat YAML frontmatter (same rules as migrate-v3.mjs). */
function parseFrontmatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!m) throw new Error('no frontmatter');
  const fields = [];
  for (const line of m[1].split('\n')) {
    const km = line.match(/^([A-Za-z_][A-Za-z0-9_]*):\s?(.*)$/);
    if (km) fields.push([km[1], km[2]]);
    else if (fields.length && line.trim()) fields[fields.length - 1][1] += ' ' + line.trim();
  }
  const out = {};
  for (const [k, v] of fields) out[k] = v;
  return out;
}

function unquote(v) {
  if (v === undefined) return null;
  v = v.trim();
  if (v === 'null' || v === '') return null;
  if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1);
  return v;
}
function intOrNull(v) { const n = parseInt(v, 10); return Number.isInteger(n) ? n : null; }
function boolOrNull(v) { return v === 'true' ? true : v === 'false' ? false : null; }
function trunc(s, n) { s = s ?? ''; return s.length > n ? s.slice(0, n - 1) + '…' : s; }
function pad3(n) { return String(n).padStart(3, '0'); }

let allOk = true;
const summary = [];

for (const [subject, meta] of Object.entries(BOOKS)) {
  const bookDir = path.join(ROOT, 'books', subject);
  const partsOut = [];
  const rawBatches = [];

  // raw batches (immutable scans)
  const rawDir = path.join(bookDir, 'raw');
  for (const b of fs.readdirSync(rawDir).sort()) {
    const imgs = fs.readdirSync(path.join(rawDir, b)).filter(f => /\.(jpe?g|png)$/i.test(f)).length;
    rawBatches.push({ batch: b, folder: `raw/${b}`, images: imgs });
  }

  for (const part of meta.parts) {
    const partDir = path.join(bookDir, part.folder);
    const pageFiles = fs.readdirSync(partDir).filter(f => /^page-\d{3}\.md$/.test(f)).sort();
    const pages = [];
    for (const f of pageFiles) {
      const fm = parseFrontmatter(fs.readFileSync(path.join(partDir, f), 'utf8'));
      pages.push({
        image: intOrNull(fm.page_image),
        printed: intOrNull(fm.page_printed),
        file: f,
        content_type: unquote(fm.content_type),
        section: unquote(fm.section),
        exercise: unquote(fm.exercise),
        has_figures: boolOrNull(fm.has_figures),
        figures_count: intOrNull(fm.figures_count),
      });
    }
    pages.sort((a, b) => a.image - b.image);

    const printedVals = pages.map(p => p.printed).filter(v => v !== null);
    const printedRange = printedVals.length ? [Math.min(...printedVals), Math.max(...printedVals)] : null;

    // ---- chapter.json ----
    const chapterJson = {
      subject,
      batch: part.batch,
      folder: part.folder,
      kind: part.kind,
      ...(part.kind === 'chapter' ? {
        chapter_number: part.chapter_number,
        chapter_label: part.chapter_label,
        title: part.title,
      } : {}),
      book_title: meta.full_title,
      page_count: pages.length,
      digitized_page_count: pages.length,          // == page_count (v3 rule: no gaps allowed)
      printed_page_offset: part.printed_page_offset,
      printed_page_range: printedRange,
      note: 'Generated by tools/build-metadata.mjs from page frontmatter — do not hand-edit. Pages are FLAT (no exercise sub-folders, user directive v3).',
      pages,
    };
    fs.writeFileSync(path.join(partDir, 'chapter.json'), JSON.stringify(chapterJson, null, 2) + '\n');

    partsOut.push({
      folder: part.folder,
      batch: part.batch,
      kind: part.kind,
      ...(part.kind === 'chapter' ? {
        chapter_number: part.chapter_number,
        chapter_label: part.chapter_label,
        title: part.title,
      } : {}),
      page_count: pages.length,
      printed_page_range: printedRange,
      printed_page_offset: part.printed_page_offset,
    });

    summary.push(`${part.batch} (${part.folder}): ${pages.length} pages, printed ${printedRange ? printedRange.join('–') : 'n/a'}`);
  }

  // ---- book.json ----
  const total = partsOut.reduce((s, p) => s + p.page_count, 0);
  const bookJson = {
    subject,
    book_title: meta.book_title,
    full_title: meta.full_title,
    publisher: meta.publisher,
    ...(meta.curriculum ? { curriculum: meta.curriculum } : {}),
    grade: meta.grade,
    language: 'en',
    structure_version: 'v3',
    parts: partsOut,
    raw_batches: rawBatches,
    total_pages_digitized: total,
    note: 'Generated by tools/build-metadata.mjs — do not hand-edit. Machine-readable registry for tooling & the future web dashboard.',
  };
  fs.writeFileSync(path.join(bookDir, 'book.json'), JSON.stringify(bookJson, null, 2) + '\n');

  // ---- indexes/<subject>.md ----
  let idx = `# Index — ${subject}\n\n`;
  idx += `**Book:** ${meta.full_title}  \n`;
  idx += `**Digitized pages:** ${total} · **Raw images:** ${rawBatches.reduce((s, r) => s + r.images, 0)} · Structure **v3** (flat chapter pages)\n\n`;
  idx += `> Machine-readable equivalents: \`books/${subject}/book.json\` + \`chapter.json\` in every part folder.\n`;
  for (const part of meta.parts) {
    const cj = JSON.parse(fs.readFileSync(path.join(bookDir, part.folder, 'chapter.json'), 'utf8'));
    const label = part.kind === 'chapter' ? `${part.chapter_label}: ${part.title}` : 'Front matter ("zero chapter")';
    idx += `\n---\n\n## ${part.batch} — ${label}\n\n`;
    idx += `- Folder: \`books/${subject}/${part.folder}/\` · Raw: \`books/${subject}/raw/${part.batch}/\`\n`;
    idx += `- Pages: ${cj.page_count} · Printed range: ${cj.printed_page_range ? cj.printed_page_range.join('–') : 'n/a'} · Offset: ${cj.printed_page_offset ?? 'n/a'}\n\n`;
    idx += `| Image | Printed | File | Type | Exercise | Section(s) | Fig. |\n`;
    idx += `|------:|--------:|------|------|----------|------------|-----:|\n`;
    for (const p of cj.pages) {
      const link = `../books/${subject}/${part.folder}/${p.file}`;
      idx += `| ${p.image} | ${p.printed ?? '—'} | [${p.file}](${link}) | ${p.content_type ?? '—'} | ${p.exercise ?? '—'} | ${trunc(p.section, 60) ?? '—'} | ${p.figures_count ?? 0} |\n`;
    }
  }
  idx += `\n---\n*Auto-generated by \`tools/build-metadata.mjs\` — do not hand-edit.*\n`;
  fs.writeFileSync(path.join(ROOT, 'indexes', `${subject}.md`), idx);
}

// stale per-batch indexes from v2 must not linger
for (const old of ['M-0.md', 'M-1.md', 'S-0.md', 'S-1.md', 'S-2.md']) {
  const p = path.join(ROOT, 'indexes', old);
  if (fs.existsSync(p)) { fs.unlinkSync(p); console.log('removed stale index:', old); }
}

console.log('\n=== build-metadata summary ===');
summary.forEach(s => console.log(' ' + s));
console.log(allOk ? 'OK ✅' : 'PROBLEMS ❌');
