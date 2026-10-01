// qa.mjs — vision QA helper with converter-style exponential backoff (429-safe)
// usage: bun qa.mjs --prompt "..." --out out.json --image img1.png [--image img2.png]
import ZAI from 'z-ai-web-dev-sdk';
import fs from 'node:fs';

function arg(name, def = undefined) {
  const i = process.argv.indexOf('--' + name);
  return i > -1 ? process.argv[i + 1] : def;
}
const PROMPT = arg('prompt');
const OUT = arg('out');
const imgs = [];
{
  const argv = process.argv.slice(2);
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--image') imgs.push(argv[i + 1]);
  }
}
if (!PROMPT || !OUT || imgs.length === 0) {
  console.error('usage: bun qa.mjs --prompt "..." --out out.json --image f.png [--image f2.png]');
  process.exit(1);
}
const content = [{ type: 'text', text: PROMPT }];
for (const p of imgs) {
  const b64 = fs.readFileSync(p).toString('base64');
  const mime = /\.png$/i.test(p) ? 'image/png' : 'image/jpeg';
  content.push({ type: 'image_url', image_url: { url: `data:${mime};base64,${b64}` } });
}
const zai = await ZAI.create();
let delay = 15000;
for (let attempt = 1; attempt <= 10; attempt++) {
  try {
    const resp = await zai.chat.completions.createVision({
      messages: [{ role: 'user', content }],
      thinking: { type: 'disabled' },
    });
    fs.writeFileSync(OUT, JSON.stringify(resp, null, 2));
    console.log('OK ->', OUT);
    process.exit(0);
  } catch (e) {
    const is429 = /429|too many/i.test(e.message || '');
    if (attempt === 10) { console.error('FAILED after 10 attempts:', e.message); process.exit(1); }
    const wait = is429 ? delay + Math.floor(Math.random() * 5000) : 8000;
    console.error(`attempt ${attempt} failed (${is429 ? '429' : e.message}); retry in ${wait}ms`);
    await new Promise(r => setTimeout(r, wait));
    delay = Math.min(delay * 1.6, 90000);
  }
}
