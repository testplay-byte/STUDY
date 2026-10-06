import ZAI from 'z-ai-web-dev-sdk';
import fs from 'node:fs';
const IMAGE = process.argv[2];
const Q = process.argv[3];
const base64Image = fs.readFileSync(IMAGE).toString('base64');
const zai = await ZAI.create();
const messages = [{ role: 'user', content: [
  { type: 'text', text: Q },
  { type: 'image_url', image_url: { url: `data:image/jpeg;base64,${base64Image}` } },
]}];
let resp; let delayMs = 30000;
for (let attempt = 1; attempt <= 8; attempt++) {
  try { resp = await zai.chat.completions.createVision({ messages, thinking: { type: 'enabled' } }); break; }
  catch (e) {
    if (attempt === 8) { console.error('fail', e.message); process.exit(2); }
    const is429 = /429|too many/i.test(e.message || '');
    const wait = is429 ? delayMs + Math.floor(Math.random()*5000) : 8000;
    console.error(`attempt ${attempt} failed (${is429?'429':e.message}); wait ${wait}ms`);
    await new Promise(r=>setTimeout(r,wait));
    delayMs = Math.min(delayMs*1.5, 120000);
  }
}
console.log(resp?.choices?.[0]?.message?.content || '(empty)');
