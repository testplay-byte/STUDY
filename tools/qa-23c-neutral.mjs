#!/usr/bin/env bun
/**
 * qa-23c-neutral.mjs — neutral (draft-free) vision pass for Pakistan Studies 23-c QA.
 * Asks the vision model to exhaustively inventory + verbatim-transcribe a page,
 * WITHOUT seeing the draft, so nothing the draft missed can anchor the description.
 *
 * Usage: bun tools/qa-23c-neutral.mjs --image <path.jpg> [--focus "extra instructions"]
 */
import ZAI from 'z-ai-web-dev-sdk';
import fs from 'node:fs';

function arg(name, def = undefined) {
  const i = process.argv.indexOf('--' + name);
  return i > -1 ? process.argv[i + 1] : def;
}
const IMAGE = arg('image');
const FOCUS = arg('focus', '');
if (!IMAGE) { console.error('required: --image'); process.exit(1); }

const mimeType = /\.png$/i.test(IMAGE) ? 'image/png' : 'image/jpeg';
const base64Image = fs.readFileSync(IMAGE).toString('base64');

const prompt = `You are transcribing a scanned page of "Textbook of Pakistan Studies Grade 12" (National Book Foundation). Do this INDEPENDENTLY — you are NOT given any draft.

TASK:
1. PAGE FACTS first: the folio number printed in the bottom-center colored circle (read it literally); the footer line text above/below it; any decorative strips (ignore them).
2. LAYOUT MAP: list in reading order every block on the page: colored headings (state their color: maroon/dark-red major vs blue sub-heading), body paragraphs (first 5 words + last 5 words of each), bullet lists (count items), quote/box panels ("Do You Know?", "Key Words", "Expand Your Horizon", "Learning Activities" etc. — quote their full text verbatim), photos/maps/diagrams (position, what they show, caption text verbatim), tables (full cells).
3. VERBATIM TRANSCRIPTION of the complete page text in reading order, including bullets, boxes and captions. Preserve printed spellings EXACTLY — if the book misspells a word, print the misspelling. Preserve italic words as *word*. Mark anything illegible as [illegible].
4. END-OF-PAGE: last printed words; does the page end mid-sentence?

${FOCUS ? 'EXTRA FOCUS INSTRUCTIONS: ' + FOCUS : ''}

FORMAT: use the numbered headings PAGE FACTS / LAYOUT MAP / TRANSCRIPTION / END-OF-PAGE. Be exhaustive and literal.`;

const zai = await ZAI.create();
const messages = [{
  role: 'user',
  content: [
    { type: 'text', text: prompt },
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
    if (attempt === MAX_RETRIES) { console.error('neutral vision failed:', e.message); process.exit(2); }
    const is429 = /429|too many/i.test(e.message || '');
    const wait = is429 ? delayMs + Math.floor(Math.random() * 5000) : 5000;
    console.error(`[neutral] attempt ${attempt} failed (${is429 ? '429' : e.message}); retry in ${wait}ms`);
    await new Promise(r => setTimeout(r, wait));
    delayMs = Math.min(delayMs * 1.6, 90000);
  }
}
const out = resp?.choices?.[0]?.message?.content || '(empty response)';
console.log(out);
