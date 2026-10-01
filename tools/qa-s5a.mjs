#!/usr/bin/env bun
/**
 * qa-s5a.mjs — independent QA vision pass for task 20-b11 (agent-S5a).
 * Sends the page image + the draft markdown to the vision model and asks for a
 * line-by-line discrepancy report. Prints the report to stdout.
 *
 * Usage: bun tools/qa-s5a.mjs --image <path.jpg> --draft <draft.md> [--focus "extra instructions"]
 */
import ZAI from 'z-ai-web-dev-sdk';
import fs from 'node:fs';

function arg(name, def = undefined) {
  const i = process.argv.indexOf('--' + name);
  return i > -1 ? process.argv[i + 1] : def;
}
const IMAGE = arg('image');
const DRAFT = arg('draft');
const FOCUS = arg('focus', '');
if (!IMAGE || !DRAFT) { console.error('required: --image --draft'); process.exit(1); }

const draft = fs.readFileSync(DRAFT, 'utf8');
const mimeType = /\.png$/i.test(IMAGE) ? 'image/png' : 'image/jpeg';
const base64Image = fs.readFileSync(IMAGE).toString('base64');

const prompt = `You are a meticulous QA verifier for textbook digitization. You will be given (1) a scanned textbook page image and (2) a Markdown draft that claims to transcribe it.

TASK: Study the ENTIRE image carefully first (running header, folio, all body text in reading order, every formula, every table cell, every figure/diagram, footnotes, page-end state). Then compare the draft against the image LINE BY LINE and report every discrepancy.

Report these classes of problems, each with exact quotes from BOTH the image (what is actually printed) and the draft:
A. Missing text: anything printed on the page but absent from the draft (including running headers if wrongly included, exercise numbering, "Ans." lines, equation numbers like (1), punctuation like trailing dots).
B. Added/invented text: anything in the draft not printed on the page.
C. Wrong characters/numbers/symbols: digit-by-digit check of ALL numbers (including table values, decimals, percentages, subscripts/superscripts, fractions), wrong Greek letters, wrong math operators, wrong word spellings THAT ARE ACTUALLY PRINTED THAT WAY (book typos must be PRESERVED in the draft — if the book misspells a word and the draft "corrected" it, that is a discrepancy; report the printed misspelling).
D. Math formatting: formula printed but not in $...$/$$...$$, unbalanced $ counts per line, missing \\frac/\\mu/\\sigma etc., lost equation labels.
E. Tables: missing rows/columns, wrong cell values, wrong header cells — check EVERY cell against the image.
F. Figures: every printed figure/diagram/graph must have an inline [Figure Fk] marker at its position AND a "### Figure Fk" block; the Description must be exhaustive (axes, labels, ticks, scales, curve shapes, shaded/stippled regions, arrows, annotations, legends). Report anything missing or wrong in figure descriptions, and whether the printed caption (e.g. "Figure-1") is reported in the block.
G. Frontmatter/H1: page_printed must equal the folio digit ACTUALLY printed in the running header (odd printed page top-right, even top-left) — read it from the image and compare. section: must list ALL printed section headings with numbers, CAPS as printed, no trailing dots. H1 must be "# Page <image number> — <chapter title> (Chapter <chapter number>)". figures_count must equal number of [Figure Fk] markers.
H. Structure: heading text/caps/dots as printed; page furniture (running header text, folio, navigation chips) must NOT appear in the body; page ends mid-sentence → file just ends.

Also answer at the end in a short "PAGE FACTS" block:
- running header text as printed; folio digit(s) as printed and their corner position
- all printed section headings exactly as printed (with dots/caps)
- figures present (count + captions printed)
- does the page end mid-sentence/mid-table? what are the last printed words?
- any illegible or edge-cut spots
- any obvious book misprints/typos (quote them exactly)

${FOCUS ? 'EXTRA FOCUS INSTRUCTIONS: ' + FOCUS : ''}

FORMAT: a numbered list "D1, D2, ..." of concrete discrepancies (or "NO DISCREPANCIES FOUND" if truly none), then the PAGE FACTS block. Be exhaustive and literal; do not speculate beyond the image.`;

const zai = await ZAI.create();
const messages = [{
  role: 'user',
  content: [
    { type: 'text', text: prompt + '\n\n===== DRAFT MARKDOWN =====\n' + draft },
    { type: 'image_url', image_url: { url: `data:${mimeType};base64,${base64Image}` } },
  ],
}];

const MAX_RETRIES = 6;
let delayMs = 15000;
let resp;
for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
  try {
    resp = await zai.chat.completions.createVision({ messages, thinking: { type: 'enabled' } });
    break;
  } catch (e) {
    if (attempt === MAX_RETRIES) { console.error('QA vision failed:', e.message); process.exit(2); }
    const is429 = /429|too many/i.test(e.message || '');
    const wait = is429 ? delayMs + Math.floor(Math.random() * 5000) : 5000;
    console.error(`[qa] attempt ${attempt} failed (${is429 ? '429' : e.message}); retry in ${wait}ms`);
    await new Promise(r => setTimeout(r, wait));
    delayMs = Math.min(delayMs * 1.6, 90000);
  }
}
const out = resp?.choices?.[0]?.message?.content || '(empty response)';
console.log(out);
