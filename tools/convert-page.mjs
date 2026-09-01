#!/usr/bin/env bun
/**
 * convert-page.mjs — Study digitization pipeline: one page image → one Markdown file.
 *
 * Usage:
 *   bun tools/convert-page.mjs --image data/raw/M-1/0025.jpg \
 *        --book M-1 --page 25 --image-filename 0025.jpg \
 *        --out data/processed/M-1/unit-01/00-intro/page-025.md \
 *        --agent agent-A1 \
 *        --source-image-rel "../../../data/raw/M-1/0025.jpg"
 *
 * Engine: z-ai-web-dev-sdk (server-side vision model). Prompt: tools/prompt.txt (canonical).
 * Auto-continues when output is truncated. Never place files directly — coordinator/agents
 * review output against the image before accepting it (see docs/CONVENTIONS.md §4).
 */

import ZAI from 'z-ai-web-dev-sdk';
import fs from 'node:fs';
import path from 'node:path';

function arg(name, def = undefined) {
  const i = process.argv.indexOf('--' + name);
  return i > -1 ? process.argv[i + 1] : def;
}

const IMAGE = arg('image');
const BOOK = arg('book');
const PAGE = arg('page');
const IMAGE_FILENAME = arg('image-filename') || path.basename(IMAGE || '');
const OUT = arg('out');
const AGENT = arg('agent', 'coordinator');
const SOURCE_REL = arg('source-image-rel', '');
const THINKING = process.argv.includes('--thinking');

function die(msg) { console.error('ERROR:', msg); process.exit(1); }
if (!IMAGE || !BOOK || !PAGE || !OUT) {
  die('required: --image, --book, --page, --out  (also good: --image-filename, --agent, --source-image-rel)');
}

const promptTemplate = fs.readFileSync(path.join(process.cwd(), 'tools/prompt.txt'), 'utf8');
const today = new Date().toISOString().slice(0, 10);

const injections = [
  `CONTEXT VALUES FOR FRONTMATTER (use exactly):`,
  `book: ${BOOK}`,
  `page_image: ${PAGE}`,
  `image filename: ${IMAGE_FILENAME}`,
  `source_image: ${SOURCE_REL}`,
  `converted_at: "${today}"`,
  `converted_by: "${AGENT} (glm-vision)"`
].join('\n');

const userPrompt = promptTemplate + '\n\n============================================================\n' + injections;

const mimeType = /\.(png)$/i.test(IMAGE) ? 'image/png' : 'image/jpeg';
const base64Image = fs.readFileSync(IMAGE).toString('base64');
const imageContent = { type: 'image_url', image_url: { url: `data:${mimeType};base64,${base64Image}` } };

const zai = await ZAI.create();

let messages = [{ role: 'user', content: [{ type: 'text', text: userPrompt }, imageContent] }];

let full = '';
let round = 0;
const ROUND_LIMIT = 6;

while (round < ROUND_LIMIT) {
  round++;
  let resp;
  try {
    resp = await zai.chat.completions.createVision({
      messages,
      thinking: { type: THINKING ? 'enabled' : 'disabled' },
    });
  } catch (e) {
    die(`vision API call failed (round ${round}): ${e.message}`);
  }
  const choice = resp?.choices?.[0];
  const chunk = choice?.message?.content || '';
  const finish = choice?.finish_reason || '';
  full += chunk;
  console.error(`[convert] round ${round}: +${chunk.length} chars (finish=${finish})`);
  if (finish === 'length' || (finish === 'stop' && round === 1 && chunk.trim() === '')) {
    if (finish === 'length') {
      messages = [
        ...messages,
        { role: 'assistant', content: chunk },
        { role: 'user', content: [{ type: 'text', text: 'Continue the EXACT same Markdown document from the precise character where you stopped. Do not repeat any earlier text, do not add commentary, do not re-begin. If the document is complete, output the single line: __DONE__' }] },
      ];
      continue;
    }
  }
  break;
}

if (full.includes('__DONE__')) full = full.replace('__DONE__', '').trimEnd();

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, full.trimStart() + '\n', 'utf8');
console.log(`WROTE ${OUT} (${full.length} chars, ${round} API round(s))`);
