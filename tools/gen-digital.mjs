#!/usr/bin/env node
/**
 * gen-digital.mjs — Books/Formatted markdown → Books/Digital replica pages.
 *
 * Digital Edition v3. The 8 hand-typeset exemplar pages (review rounds 3-4) are
 * NEVER overwritten; every other page of the library is GENERATED here from the
 * faithful Books/Formatted markdown, in the same two design languages:
 *
 *   · math  — "Textbook of Mathematics Grade 12": blue gradient ribbon + orange
 *             wedges, blue section labels, red Key-Facts box with crossed-keys
 *             icon, blue page-foot ribbon.  (M-0, M-1)
 *   · stats — "Basic Statistics Part-II": monochrome black-on-cream page, thin
 *             full-width running-header rule, quiet folio footer.  (S-0, S-1, S-2)
 *
 * Figures: each [Figure Fn] marker in the markdown becomes a figure slot.  If a
 * crop named <BOOK><PPP>-fig-<n>[-<slug>].{png|jpg} exists in the chapter's
 * Digital assets/ folder it is embedded as a base64 data URI (self-contained
 * page — the "no graphs" failure class from review round 3/4 is impossible by
 * construction); otherwise a clearly-marked placeholder with the transcribed
 * figure description is rendered so nothing is ever silently missing.
 *
 * Also emits:
 *   Books/Digital/manifest.json  — machine-readable library map (drives the viewer)
 *   Books/Digital/index.html     — human library home
 *
 * Usage:  node tools/gen-digital.mjs [--only <Book/ChapterFolder/page-NNN> ...]
 *         (paths are "Book/ChapterFolder/page-NNN", e.g.
 *          "Mathematics/Chapter-01-Functions-and-Graphs/page-005")
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, "..");
const BOOKS_DIR = path.join(ROOT, "Books", "Formatted");
const DIGITAL = path.join(ROOT, "Books", "Digital");

const argv = process.argv.slice(2);
const onlyIdx = argv.indexOf("--only");
const ONLY = onlyIdx >= 0 ? argv.slice(onlyIdx + 1).filter((a) => !a.startsWith("--")) : null;

/* ------------------------------------------------------------------ *
 * Library configuration
 * ------------------------------------------------------------------ */

const BOOKS = {
  Mathematics: {
    label: "Mathematics",
    title: "Textbook of Mathematics — Grade 12",
    sub: "National Book Foundation as Federal Textbook Board, Islamabad",
    family: "math",
    chapters: [
      { folder: "Chapter-00-Front-Matter", human: "Front Matter", prefix: "M0", plate: true },
      { folder: "Chapter-01-Functions-and-Graphs", human: "Unit 01 — Functions and Graphs", prefix: "M1", plate: false },
    ],
  },
  Statistics: {
    label: "Statistics",
    title: "Basic Statistics Part-II",
    sub: "Federal Board — running header: “Basic Statistics Part-II (Federal Board)”",
    family: "stats",
    chapters: [
      { folder: "Chapter-00-Front-Matter", human: "Front Matter", prefix: "S0", plate: true },
      { folder: "Chapter-08-Set-Theory", human: "Chapter 8 — Set Theory", prefix: "S1", plate: false },
      { folder: "Chapter-09-Probability", human: "Chapter 9 — Probability", prefix: "S2", plate: false },
    ],
  },
};

/** Hand-typeset exemplars (never regenerated). */
const HAND_TYPESET = new Set([
  "Mathematics/Chapter-01-Functions-and-Graphs/page-001",
  "Mathematics/Chapter-01-Functions-and-Graphs/page-023",
  "Mathematics/Chapter-01-Functions-and-Graphs/page-025",
  "Statistics/Chapter-08-Set-Theory/page-003",
  "Statistics/Chapter-08-Set-Theory/page-005",
  "Statistics/Chapter-08-Set-Theory/page-006",
  "Statistics/Chapter-09-Probability/page-005",
  "Statistics/Chapter-09-Probability/page-042",
]);

const KATEX_HEAD = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/katex.min.css">
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/katex.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/contrib/auto-render.min.js"></script>
<script defer>
document.addEventListener("DOMContentLoaded", () => {
  if (window.renderMathInElement) renderMathInElement(document.body, {
    delimiters: [{left:"$$",right:"$$",display:true},{left:"$",right:"$",display:false}],
    throwOnError: false
  });
});
</script>`;

/* ------------------------------------------------------------------ *
 * Small helpers
 * ------------------------------------------------------------------ */

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Convert **bold** / *italic* / `code` in a text segment (math already protected). */
function fmtText(s) {
  let t = esc(s);
  t = t.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  t = t.replace(/(^|[^*])\*([^*\s][^*]*)\*/g, "$1<em>$2</em>");
  t = t.replace(/`([^`]+)`/g, "<code>$1</code>");
  return t;
}

/** Inline markdown → HTML, protecting $…$ / $$…$$ math from fmtText. */
function inline(s) {
  const parts = String(s).split(/(\$\$[^$]*\$\$|\$[^$]*\$)/g);
  return parts.filter((p) => p !== "").map((p) => (p.startsWith("$") ? p : fmtText(p))).join("")
    .replace(/&lt;br\s*\/?&gt;/gi, "<br>");
}

/** Split a md table row into cells, ignoring `|` that live inside $…$ math. */
function splitCells(row) {
  const out = [];
  let cur = "", inMath = false;
  for (let i = 0; i < row.length; i++) {
    const ch = row[i];
    if (ch === "\\") { cur += ch + (row[i + 1] || ""); i++; continue; }
    if (ch === "$") { inMath = !inMath; cur += ch; continue; }
    if (ch === "|" && !inMath) { out.push(cur.trim()); cur = ""; continue; }
    cur += ch;
  }
  out.push(cur.trim());
  return out;
}

const titleCase = (s) =>
  String(s).toLowerCase().replace(/(^|[\s-])([a-z])/g, (m, a, b) => a + b.toUpperCase());

const pad3 = (n) => String(n).padStart(3, "0");

const MIME = { ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".gif": "image/gif", ".webp": "image/webp" };

/* ------------------------------------------------------------------ *
 * Markdown parsing
 * ------------------------------------------------------------------ */

function parseMd(file) {
  const raw = fs.readFileSync(file, "utf8");
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?/);
  const fm = {};
  if (m) {
    for (const line of m[1].split("\n")) {
      const kv = line.match(/^([a-z_]+):\s*(.*)$/);
      if (!kv) continue;
      let v = kv[2].trim();
      if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1);
      fm[kv[1]] = v === "null" ? null : v;
    }
  }
  const body = raw.slice(m ? m[0].length : 0);
  const blocks = parseBody(body);
  return { fm, blocks, raw };
}

/** Line-based body parser producing a flat block list. */
function parseBody(body) {
  const lines = body.replace(/\r/g, "").split("\n");
  const blocks = [];
  let i = 0;
  let h1Seen = false;
  let metaMode = false; // inside "## Figures on this page"
  const figuresMeta = (blocks._figuresMeta = new Map());

  const push = (b) => blocks.push(b);

  while (i < lines.length) {
    const line = lines[i];

    if (line.trim() === "") { i++; continue; }

    /* H1 — first is the page title (skip); later ones are display titles (covers) */
    if (/^# /.test(line)) {
      if (!h1Seen) { h1Seen = true; i++; continue; }
      push({ type: "display-title", text: line.slice(2).trim() });
      i++; continue;
    }

    /* H2 sections */
    const h2 = line.match(/^## (.*)$/);
    if (h2) {
      const t = h2[1].trim();
      if (/^figures on this page/i.test(t)) { metaMode = true; i++; continue; }
      metaMode = false;
      push({ type: "h2", text: t });
      i++; continue;
    }

    if (metaMode) {
      const fm3 = line.match(/^### Figure F(\d+)\s*[—-]\s*(.*)$/);
      if (fm3) {
        const id = Number(fm3[1]);
        const meta = { n: id, caption: fm3[2].trim(), desc: "", type: "", label: "" };
        i++;
        while (i < lines.length && lines[i].startsWith("- ")) {
          const d = lines[i].match(/^-\s*\*\*(.+?):\*\*\s*(.*)$/);
          if (d) {
            if (/^description/i.test(d[1])) meta.desc = d[2] + collectCont(lines, i + 1);
            else if (/^type/i.test(d[1])) meta.type = d[2];
            else if (/^caption/i.test(d[1])) meta.label = d[2];
          }
          i++;
        }
        figuresMeta.set(id, meta);
        continue;
      }
      i++; continue; // any other meta noise
    }

    /* scan-link blockquote — rebuilt as toolbar, skip */
    if (/^>\s*📄/.test(line)) { i++; continue; }

    /* blockquote group (Key Facts / notes) */
    if (/^>/.test(line)) {
      const q = [];
      while (i < lines.length && /^>/.test(lines[i])) { q.push(lines[i].replace(/^>\s?/, "")); i++; }
      const first = q.find((l) => l.trim() !== "") || "";
      if (/\*\*Key Facts\*\*/i.test(first) || /^key facts/i.test(first.replace(/\*/g, ""))) {
        push({ type: "keyfacts", lines: q.filter((l) => !/\*\*Key Facts\*\*/i.test(l) && l.trim() !== "") });
      } else if (q.some((l) => l.trim() !== "")) {
        push({ type: "note", lines: q.filter((l) => l.trim() !== "") });
      }
      continue;
    }

    /* display math on its own line(s) */
    if (/^\s*\$\$.*\$\$/.test(line) && /\$\$[^$]+\$\$/.test(line)) {
      push({ type: "eq", text: line.trim() });
      i++; continue;
    }

    /* table group */
    if (/^\s*\|.*\|\s*$/.test(line)) {
      const rows = [];
      while (i < lines.length && /^\s*\|.*\|\s*$/.test(lines[i])) { rows.push(lines[i].trim()); i++; }
      push({ type: "table", rows });
      continue;
    }

    /* [Figure Fn] marker */
    const fig = line.match(/^\s*\[Figure F(\d+)\]\s*$/);
    if (fig) { push({ type: "figure", n: Number(fig[1]) }); i++; continue; }

    /* MCQ option bullets (possibly after a blank line) — attach back to the question */
    if (/^\s*[-*]\s+\((a|b|c|d)\)/i.test(line)) {
      const opts = [];
      while (i < lines.length && /^\s*[-*]\s+\((a|b|c|d)\)/i.test(lines[i])) {
        opts.push(lines[i].replace(/^\s*[-*]\s+/, ""));
        i++;
      }
      const last = blocks[blocks.length - 1];
      if (last && last.type === "mcq" && last.opts.length === 0) last.opts = opts;
      else push({ type: "ul", items: opts });
      continue;
    }

    /* bullets — group */
    if (/^\s*[-*]\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^\s*[-*]\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\s*[-*]\s+/, ""));
        i++;
      }
      push({ type: "ul", items });
      continue;
    }

    /* MCQ question "101. …" — consume its option bullets */
    const mcq = line.match(/^\s*(\d{1,3})\.\s+(.*)$/);
    if (mcq && !/^\s*\d+\.\s+[*_$]/.test(line)) {
      const opts = [];
      i++;
      while (i < lines.length && /^\s*[-*]\s+\((a|b|c|d)\)/i.test(lines[i])) {
        opts.push(lines[i].replace(/^\s*[-*]\s+/, ""));
        i++;
      }
      push({ type: "mcq", no: mcq[1], text: mcq[2], opts });
      continue;
    }

    /* numbered list "1. item" (non-MCQ contexts are rare; render as list item) */
    if (/^\s*\d{1,2}\.\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^\s*\d{1,2}\.\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\s*/, ""));
        i++;
      }
      push({ type: "ol", items });
      continue;
    }

    /* plain paragraph = ONE physical line (these files keep printed lines as lines) */
    push({ type: "p", text: line.trim() });
    i++;
  }

  return blocks;
}

/** Collect wrapped continuation lines of a "- **Description:**" entry. */
function collectCont(lines, from) {
  let out = "";
  let i = from;
  while (i < lines.length && lines[i].startsWith("    ") && !/^\s*-\s+\*\*/.test(lines[i])) {
    out += " " + lines[i].trim();
    i++;
  }
  return out;
}

/* ------------------------------------------------------------------ *
 * Figure asset lookup + embedding
 * ------------------------------------------------------------------ */

function findFigureAsset(assetsDir, prefix, pageImage, n) {
  if (!fs.existsSync(assetsDir)) return null;
  // Accept BOTH documented naming styles:
  //   <PREFIX>-<PPP>-fig-<n>[-<slug>]  (e.g. M1-002-fig-1-mapping.png — pattern used
  //                                    by every existing asset + the Task-11 brief)
  //   <PREFIX><PPP>-fig-<n>[-<slug>]   (e.g. M1002-fig-1 — legacy stem from before
  //                                    the dash fix; kept for backward compatibility)
  const ppp = pad3(pageImage);
  const stems = [`${prefix}-${ppp}-fig-${n}`, `${prefix}${ppp}-fig-${n}`];
  const names = fs.readdirSync(assetsDir);
  const hit =
    names.find((f) => {
      const b = f.replace(/\.(png|jpe?g|gif|webp)$/i, "");
      return stems.some((stem) => b === stem || b.startsWith(stem + "-")) && /\.(png|jpe?g|gif|webp)$/i.test(f);
    }) || null;
  return hit ? path.join(assetsDir, hit) : null;
}

function dataUri(file) {
  const ext = path.extname(file).toLowerCase();
  return `data:${MIME[ext] || "application/octet-stream"};base64,${fs.readFileSync(file).toString("base64")}`;
}

/** Crossed-keys icon, lifted from the hand-typeset M1 page-023 exemplar. */
let KF_ICON = null;
function keyfactsIcon() {
  if (KF_ICON !== null) return KF_ICON;
  try {
    const ex = fs.readFileSync(
      path.join(DIGITAL, "Mathematics", "Chapter-01-Functions-and-Graphs", "page-023.html"), "utf8");
    const m = ex.match(/class="icon"\s+src="(data:image\/png;base64,[^"]+)"/);
    KF_ICON = m ? m[1] : false;
  } catch { KF_ICON = false; }
  return KF_ICON;
}

/* ------------------------------------------------------------------ *
 * CSS — two families (extracted from the hand-typeset exemplars)
 * ------------------------------------------------------------------ */

const BASE_CSS = `
  *{ box-sizing:border-box; }
  html{ -webkit-text-size-adjust:100%; }
  .sr-only{ position:absolute; width:1px; height:1px; padding:0; margin:-1px;
            overflow:hidden; clip:rect(0 0 0 0); white-space:nowrap; border:0; }
  .toolbar{ font:12.5px/1.4 system-ui,-apple-system,'Segoe UI',sans-serif; color:#8a8377;
            text-align:center; padding:8px 12px 10px; }
  .toolbar a{ color:#8a8377; text-decoration:underline; text-underline-offset:2px; }
  .toolbar .sep{ margin:0 8px; color:#c9c2b4; }
  .book-page{ max-width:880px; margin:0 auto 14px; background:var(--paper);
              box-shadow:0 2px 6px rgba(60,50,30,.14), 0 12px 34px rgba(60,50,30,.10); }
  p{ margin:0 0 14px; text-align:justify; }
  .fig{ margin:16px auto 20px; text-align:center; }
  .fig img{ max-width:100%; height:auto; }
  .fig figcaption{ font:12.5px/1.5 system-ui,sans-serif; color:#7a7368; margin-top:7px; }
  table.tbl{ border-collapse:collapse; margin:16px auto 20px; font-size:15.5px; line-height:1.55; }
  table.tbl th, table.tbl td{ border:1.4px solid var(--rule); padding:6px 12px; text-align:center; }
  table.tbl th{ font-weight:700; }
  .colophon{ max-width:880px; margin:0 auto; padding:2px 18px 30px; text-align:center;
             font:12px/1.6 system-ui,sans-serif; color:#98917f; }
  .colophon code{ font-family:ui-monospace,Menlo,Consolas,monospace; font-size:11px; }
  @media print{ .toolbar,.colophon{ display:none; } body{ background:#fff; }
                .book-page{ box-shadow:none; max-width:none; } }
`;

const MATH_CSS = `
  :root{
    --rib-a:#2293fb; --rib-b:#0167ef; --rib-c:#0153d6;
    --orange:#f26a0a; --orange-2:#f7a233;
    --lbl:#1560d0; --maroon:#5e0000; --rust:#761600; --kf:#ac0000;
    --ink:#16130f; --muted:#6d675e; --paper:#ffffff; --back:#e8e4dc; --rule:#2b2723;
  }
  ${BASE_CSS}
  body{ margin:0; background:var(--back); color:var(--ink);
        font:16.5px/1.85 Georgia,'Times New Roman',serif; }
  .page-ribbon{ position:relative; margin:0; background:linear-gradient(180deg,var(--rib-a) 0%,var(--rib-b) 58%,var(--rib-c) 100%);
                color:#fff; text-align:center; padding:12px 64px 11px;
                font:700 15px/1.2 'Trebuchet MS','Arial Narrow',system-ui,sans-serif;
                letter-spacing:.14em; text-transform:uppercase;
                box-shadow:inset 0 -4px 0 rgba(0,20,60,.22); }
  .page-ribbon::before,.page-ribbon::after{ content:""; position:absolute; top:0; bottom:0; width:58px;
                background:linear-gradient(180deg,var(--orange-2),var(--orange)); }
  .page-ribbon::before{ left:0; clip-path:polygon(0 0,100% 0,26% 100%,0 100%); }
  .page-ribbon::after{ right:0; clip-path:polygon(0 0,100% 0,100% 100%,74% 100%); }
  .page-body{ padding:34px 52px 30px; }
  .lbl{ font-weight:700; color:var(--lbl); }
  .lbl-line{ font-weight:700; color:var(--lbl); margin:2px 0 8px; }
  h2.sec{ font:700 17px/1.5 'Trebuchet MS','Arial Narrow',Arial,sans-serif; color:var(--lbl);
          letter-spacing:.03em; margin:24px 0 10px; border-bottom:2px solid var(--rib-b);
          padding-bottom:3px; }
  ul.plain{ margin:0 0 14px; padding-left:2.05em; }
  ul.plain li{ margin-bottom:8px; padding-left:.35em; text-align:justify; }
  ol.plain{ margin:0 0 14px; padding-left:2.05em; }
  ol.plain li{ margin-bottom:8px; text-align:justify; }
  .it{ padding-left:2.3em; text-indent:0; margin:0 0 10px; text-align:justify; }
  .it .ro{ display:inline-block; width:2.3em; margin-left:-2.3em; font-style:normal; }
  .cont{ margin:0 0 10px 2.3em; text-align:justify; }
  .eq{ margin:2px 0 8px 2.6em; overflow-x:auto; }
  .eq .katex-display{ margin:0; text-align:left; }
  .eq .katex-display>.katex{ text-align:left; }
  p.q{ padding-left:2.9em; }
  p.q .qno{ display:inline-block; width:2.9em; margin-left:-2.9em; font-weight:700; }
  .opts{ display:grid; gap:2px 16px; margin:0 0 13px 2.9em; text-align:left; }
  p.ans{ margin:0 0 12px; }
  .keyfacts{ width:100%; margin:16px 0 18px; border:2.5px solid var(--kf); background:#fff;
             padding:18px 16px 10px 58px; position:relative; }
  .keyfacts .tab{ position:absolute; top:-13px; right:12px; background:var(--kf); color:#fff;
                  font:700 12.5px/1.6 system-ui,sans-serif; letter-spacing:.03em; padding:1px 12px; }
  .keyfacts .icon{ position:absolute; left:-17px; top:50%; transform:translateY(-50%);
                   width:47px; height:auto; }
  .keyfacts p{ margin:0 0 8px; font-size:15.5px; line-height:1.8; }
  .keyfacts table.tbl{ margin:8px auto 4px; font-size:14.5px; }
  .keyfacts table.tbl td{ text-align:left; }
  .page-foot{ position:relative; margin-top:26px; background:linear-gradient(180deg,var(--rib-a) 0%,var(--rib-b) 62%,var(--rib-c) 100%);
              color:#fff; display:flex; align-items:center; justify-content:space-between;
              padding:9px 74px; font:700 12.5px/1.4 system-ui,-apple-system,'Segoe UI',sans-serif;
              letter-spacing:.06em; box-shadow:inset 0 3px 0 rgba(0,20,60,.16); }
  .page-foot::before,.page-foot::after{ content:""; position:absolute; top:0; bottom:0; width:64px;
              background:linear-gradient(180deg,var(--orange-2),var(--orange)); }
  .page-foot::before{ left:0; clip-path:polygon(0 0,100% 0,26% 100%,0 100%); }
  .page-foot::after{ right:0; clip-path:polygon(0 0,100% 0,100% 100%,74% 100%); }
  .page-foot .no{ font-size:17px; letter-spacing:0; }
  .figslot{ margin:16px auto 20px; border:2px dashed #d8a24a; background:#fffaf0;
            padding:14px 18px; max-width:640px; }
  .figslot .tag{ display:inline-block; font:700 12px/1.5 system-ui,sans-serif; color:#8a5a00;
                 background:#f7e2b8; padding:1px 10px; margin-bottom:8px; letter-spacing:.04em; }
  .figslot p{ font:13.5px/1.65 system-ui,sans-serif; color:#6d5a33; margin:0; text-align:left; }
  .figstrip{ margin-top:22px; border-top:1px solid #e3dbc8; padding-top:6px; }
  .figcellslot{ display:inline-block; border:2px dashed #b3a262; background:#fdf8ea; color:#7a6420;
                font:700 12px/1.4 system-ui,sans-serif; padding:10px 14px; min-width:96px; }
  @media (max-width:720px){
    .page-body{ padding:22px 18px 20px; }
    .page-ribbon{ padding:10px 44px; font-size:12px; letter-spacing:.09em; }
    .page-ribbon::before,.page-ribbon::after{ width:34px; }
    .page-foot{ padding:8px 44px; }
    .page-foot::before,.page-foot::after{ width:36px; }
    .eq{ margin-left:1em; }
    body{ font-size:15.5px; }
    .opts{ grid-template-columns:repeat(2,1fr) !important; }
    .page-body table.tbl{ display:block; overflow-x:auto; }
  }
`;

const STATS_CSS = `
  :root{
    --rib-a:#fffdf9; --rib-b:#fffdf9; --rib-c:#f8f3e9;
    --ink:#1c1914; --rule:#2a251f; --hairline:#d9d2c2;
    --lbl:#1c1914; --muted:#6d675e; --paper:#fffdf9; --back:#e8e4dc;
  }
  ${BASE_CSS}
  body{ margin:0; background:var(--back); color:var(--ink);
        font:16.5px/1.85 Georgia,'Times New Roman',serif; }
  .page-ribbon{ display:flex; align-items:baseline; justify-content:space-between; gap:18px;
                background:linear-gradient(180deg,var(--rib-a) 0%,var(--rib-b) 70%,var(--rib-c) 100%);
                color:var(--ink); padding:14px 52px 10px;
                border-bottom:2.5px solid var(--rule);
                font:700 15px/1.3 'Trebuchet MS','Arial Narrow',Arial,sans-serif;
                letter-spacing:.04em; }
  .page-ribbon .no{ font-size:16px; letter-spacing:.02em; }
  .page-body{ padding:26px 52px 22px; }
  .lbl{ font-weight:700; color:var(--lbl); }
  .lbl-line{ font-weight:700; color:var(--lbl); margin:2px 0 8px; }
  h2.sec{ font:700 16.5px/1.5 Georgia,'Times New Roman',serif; letter-spacing:.03em;
          margin:20px 0 10px; }
  ul.plain{ margin:0 0 14px; padding-left:2.05em; }
  ul.plain li{ margin-bottom:8px; padding-left:.35em; text-align:justify; }
  ol.plain{ margin:0 0 14px; padding-left:2.05em; }
  ol.plain li{ margin-bottom:8px; text-align:justify; }
  .it{ padding-left:2.3em; text-indent:0; margin:0 0 10px; text-align:justify; }
  .it .ro{ display:inline-block; width:2.3em; margin-left:-2.3em; font-style:normal; }
  .cont{ margin:0 0 10px 2.3em; text-align:justify; }
  .eq{ margin:2px 0 12px 2.2em; overflow-x:auto; }
  .eq .katex-display{ margin:0; text-align:left; }
  .eq .katex-display>.katex{ text-align:left; }
  p.q{ padding-left:2.9em; }
  p.q .qno{ display:inline-block; width:2.9em; margin-left:-2.9em; font-weight:700; }
  .opts{ display:grid; gap:2px 16px; margin:0 0 13px 2.9em; text-align:left; }
  p.ans{ margin:0 0 12px; }
  .note{ border-left:3px solid var(--rule); background:#f6f1e5; padding:10px 16px;
         margin:0 0 14px; font-size:15px; }
  .note p{ margin:0 0 6px; }
  .keyfacts{ width:100%; margin:16px 0 18px; border:2.5px solid var(--rule); background:var(--paper);
             padding:16px 16px 10px; position:relative; }
  .keyfacts .tab{ position:absolute; top:-13px; right:12px; background:var(--rule); color:#fff;
                  font:700 12.5px/1.6 system-ui,sans-serif; letter-spacing:.03em; padding:1px 12px; }
  .keyfacts p{ margin:0 0 8px; font-size:15.5px; line-height:1.8; }
  .keyfacts table.tbl{ margin:8px auto 4px; font-size:14.5px; }
  .keyfacts table.tbl td{ text-align:left; }
  .ansbox{ display:table; margin:20px auto 16px; border:2.5px solid var(--rule);
           padding:2px 30px; font:700 17px/1.7 Georgia,'Times New Roman',serif;
           letter-spacing:.08em; }
  table.ans{ width:100%; border-collapse:collapse; font-size:14.5px; line-height:1.5; }
  table.ans td{ border:1px solid #3a342c; padding:2px 9px; text-align:left; white-space:nowrap; }
  table.ans td.nb{ border:none; }
  .page-foot{ border-top:1px solid var(--hairline); background:var(--paper);
              color:var(--muted); display:flex; align-items:center; justify-content:center;
              padding:8px 52px; font:12.5px/1.4 Georgia,serif; letter-spacing:.14em; }
  .figslot{ margin:16px auto 20px; border:2px dashed #a89a78; background:#fbf7ec;
            padding:14px 18px; max-width:640px; }
  .figslot .tag{ display:inline-block; font:700 12px/1.5 system-ui,sans-serif; color:#6d5a1e;
                 background:#efe4c4; padding:1px 10px; margin-bottom:8px; letter-spacing:.04em; }
  .figslot p{ font:13.5px/1.65 system-ui,sans-serif; color:#6d6248; margin:0; text-align:left; }
  .figstrip{ margin-top:22px; border-top:1px solid #e3dbc8; padding-top:6px; }
  .figcellslot{ display:inline-block; border:2px dashed #b3a262; background:#fdf8ea; color:#7a6420;
                font:700 12px/1.4 system-ui,sans-serif; padding:10px 14px; min-width:96px; }
  @media (max-width:720px){
    .page-body{ padding:18px 16px 14px; }
    .page-ribbon{ padding:10px 16px 8px; font-size:12px; }
    .page-foot{ padding:7px 16px; }
    .eq{ margin-left:1em; }
    body{ font-size:15px; }
    .opts{ grid-template-columns:repeat(2,1fr) !important; }
    .page-body table.tbl{ display:block; overflow-x:auto; }
    table.ans{ display:block; overflow-x:auto; }
  }
`;

/* plate (front-matter) additions, both families */
const PLATE_CSS = `
  .page-body.plate{ text-align:center; padding:38px 56px 30px; }
  .plate p{ text-align:center; }
  .plate .display-title{ font:700 34px/1.3 Georgia,'Times New Roman',serif; letter-spacing:.06em;
                         margin:10px 0 18px; }
  .plate .small{ font-size:14px; color:var(--muted); }
  .plate .fig{ margin:20px auto; }
  .plate .fig.wide img{ max-width:100%; }
`;

/* ------------------------------------------------------------------ *
 * Renderers
 * ------------------------------------------------------------------ */

const ROMAN = /^(\((?:i{1,3}|iv|vi{0,3}|ix|x|[a-z]|\d{1,2})\))\s+(.*)$/i;

function renderParagraph(line, family) {
  const bold = line.match(/^\*\*(.+?)\*\*\s*(.*)$/);
  if (bold) {
    const lead = bold[1];
    const rest = bold[2];
    if (/^Q\.\s*\d/.test(lead)) {
      return `<p class="q"><span class="qno">${inline(lead)}</span>${inline(rest)}</p>`;
    }
    if (/^Ans/i.test(lead)) return `<p class="ans">${inline(line)}</p>`;
    if (/^Example/i.test(lead)) return `<p class="lbl-line" style="margin-top:16px">${inline(line)}</p>`;
    if (/^Solution/i.test(lead) && rest === "") return `<p class="lbl-line">${inline(line)}</p>`;
  }
  const rom = line.match(ROMAN);
  if (rom) return `<p class="it"><span class="ro">${esc(rom[1])}</span>${inline(rom[2])}</p>`;
  if (/^\(?\d+\)?\.\s+/.test(line) && line.length < 200) {
    const m2 = line.match(/^(\(?\d+\)?\.)\s+(.*)$/);
    if (m2) return `<p class="it"><span class="ro">${esc(m2[1])}</span>${inline(m2[2])}</p>`;
  }
  return `<p>${inline(line)}</p>`;
}

function renderTable(rows, cls, figCtx) {
  const cells = rows.map((r) => splitCells(r.replace(/^\s*\|/, "").replace(/\|\s*$/, "")));
  const isSep = (row) => row.every((c) => /^:?-{2,}:?$/.test(c) || c === "");
  const header = isSep(cells[0]) ? null : cells[0];
  const bodyRows = cells.filter((r, idx) => idx !== 0 && !isSep(r));
  const tag = (c) => (cls === "ans" || c === "" ? "td" : "td");
  const figCell = (n, asTh) => {
    if (figCtx) figCtx.consumed.add(n);
    const asset = figCtx ? findFigureAsset(figCtx.assetsDir, figCtx.prefix, figCtx.pageImage, n) : null;
    if (asset) return `<img src="${dataUri(asset)}" alt="Figure ${n}" style="max-width:100%;height:auto">`;
    return `<span class="figcellslot">FIGURE ${n}</span>`;
  };
  const cellHtml = (c) => {
    const fm = c.match(/^\[Figure F(\d+)\]$/);
    if (fm) return figCell(Number(fm[1]), false);
    return c === "" ? "&nbsp;" : inline(c);
  };
  let html = `<table class="tbl${cls ? " " + cls : ""}">`;
  if (header) {
    html += "<thead><tr>" + header.map((c) => {
      const fm = c.match(/^\[Figure F(\d+)\]$/);
      if (fm) return `<th>${figCell(Number(fm[1]), true)}</th>`;
      return `<th>${inline(c)}</th>`;
    }).join("") + "</tr></thead>";
  }
  html += "<tbody>" + bodyRows.map((r) =>
    "<tr>" + r.map((c) => `<${tag(c)}>${cellHtml(c)}</${tag(c)}>`).join("") + "</tr>").join("") + "</tbody></table>";
  return html;
}

function renderFigure(block, meta, assetsDir, prefix, pageImage) {
  const m = meta || { n: block.n, caption: "", desc: "", type: "", label: "" };
  const asset = findFigureAsset(assetsDir, prefix, pageImage, block.n);
  const cap = m.label && m.label !== "(none printed)" ? m.label : m.caption;
  if (asset) {
    const big = m.type === "photo" || /cover|photo/i.test(m.caption || "");
    return `<figure class="fig${big ? " wide" : ""}"><img src="${dataUri(asset)}" alt="${esc(cap || `Figure ${block.n}`)}">` +
           (cap ? `<figcaption>${esc(cap)}</figcaption>` : "") + `</figure>`;
  }
  const desc = (m.desc || m.caption || "figure").replace(/\*\*/g, "").slice(0, 460);
  return `<figure class="figslot"><span class="tag">FIGURE ${block.n} · CROP PENDING</span>` +
         `<p>${esc(desc)}${desc.length >= 460 ? "…" : ""}</p></figure>`;
}

function renderKeyFacts(block, family, ctx) {
  const body = [];
  const tableLines = [];
  const paras = [];
  for (const l of block.lines) {
    if (/^\|/.test(l.trim())) tableLines.push(l.trim());
    else paras.push(l);
  }
  let html = `<aside class="keyfacts" aria-label="Key Facts"><span class="tab">Key Facts</span>`;
  if (family === "math") {
    const icon = keyfactsIcon();
    if (icon) html += `<img class="icon" src="${icon}" alt="Crossed keys icon">`;
  }
  let pending = [];
  for (const p of paras) {
    if (p.trim() === "") continue;
    pending.push(inline(p));
  }
  html += pending.map((t) => `<p>${t}</p>`).join("");
  if (tableLines.length) html += renderTable(tableLines, "kftable");
  html += `</aside>`;
  return html;
}

/* ------------------------------------------------------------------ *
 * Page assembly
 * ------------------------------------------------------------------ */

function buildPage({ bookId, book, chap, chapFolder, mdPath, pageMdNo }) {
  const { fm, blocks } = parseMd(mdPath);
  const pageImage = Number(fm.page_image || pageMdNo);
  const printed = fm.page_printed ? Number(fm.page_printed) : null;
  const family = book.family;
  const plate = chap.plate || fm.content_type === "front-matter";
  const isMath = family === "math";
  const pageDir = path.join(DIGITAL, bookId, chap.folder);
  const assetsDir = path.join(pageDir, "assets");

  const scanAbs = fm.source_image ? path.resolve(path.dirname(mdPath), fm.source_image) : null;
  const scanRel = scanAbs ? path.relative(pageDir, scanAbs) : null;
  const mdRel = path.relative(pageDir, mdPath);
  const idxRel = path.relative(pageDir, path.join(DIGITAL, "index.html"));
  const scanFromBooks = scanAbs ? path.relative(path.join(ROOT, "Books"), scanAbs) : null;
  const mdFromBooks = path.relative(path.join(ROOT, "Books"), mdPath);

  const printedTxt = printed != null ? `${printed}` : "n/a";
  const titleTag = `${book.title} · ${chap.human} · page ${pageImage} (printed ${printedTxt}) — Digital Edition`;

  /* toolbar */
  const toolbar = `<p class="toolbar"><strong>STUDY · Digital edition</strong><span class="sep">|</span>` +
    `${esc(book.title)} — ${esc(chap.human)}<span class="sep">|</span>page ${pageImage} (printed ${printedTxt})` +
    (scanRel ? `<span class="sep">|</span><a href="${esc(scanRel)}">original scan ↗</a>` : "") +
    `<span class="sep">|</span><a href="${esc(mdRel)}">markdown source ↗</a>` +
    `<span class="sep">|</span><a href="${esc(idxRel)}">library ↗</a></p>`;

  /* header */
  let header;
  if (isMath && !plate) {
    const unitName = chap.folder.match(/^Chapter-(\d+)/)
      ? `Unit-${pad3(Number(chap.folder.match(/^Chapter-(\d+)/)[1])).slice(-2)}: ${titleCase((fm.chapter_title || chap.human).replace(/FUNCTIONS AND GRAPHS/i, "Functions and Graphs"))}`
      : titleCase(chap.human);
    header = `<header class="page-ribbon">${esc(unitName)}</header>`;
  } else if (isMath && plate) {
    header = `<header class="page-ribbon">${esc(book.title)}</header>`;
  } else {
    const bt = "Basic Statistics Part-II (Federal Board)";
    if (printed == null) header = `<header class="page-ribbon"><span>${esc(bt)}</span></header>`;
    else if (printed % 2 === 0) header = `<header class="page-ribbon"><span class="no">${printed}</span><span>${esc(bt)}</span></header>`;
    else header = `<header class="page-ribbon"><span>${esc(bt)}</span><span class="no">${printed}</span></header>`;
  }

  /* body blocks */
  let out = [];
  let nextTableCls = null;
  let inAnswers = false;
  const consumedFigs = new Set();
  for (const b of blocks) {
    if (nextTableCls && b.type !== "table") nextTableCls = null;
    switch (b.type) {
      case "display-title":
        out.push(`<div class="display-title">${inline(b.text.replace(/^\*\*|\*\*$/g, ""))}</div>`); break;
      case "h2": {
        if (/^answers$/i.test(b.text)) { out.push(`<p class="ansbox">ANSWERS</p>`); inAnswers = true; nextTableCls = "ans"; break; }
        inAnswers = false;
        const sec = b.text.replace(/\s+/g, " ").trim();
        const looksNumbered = /^[\d.]+/.test(sec) || /^9\.\d/i.test(sec) || /^8\.\d/i.test(sec);
        out.push(`<h2 class="sec">${inline(sec)}</h2>`); break;
      }
      case "p":
        if (inAnswers) { out.push(renderParagraph(b.text, family)); break; }
        out.push(renderParagraph(b.text, family)); break;
      case "eq":
        out.push(`<div class="eq">${b.text}</div>`); break;
      case "ul":
        out.push(`<ul class="plain">` + b.items.map((t) => `<li>${inline(t)}</li>`).join("") + `</ul>`); break;
      case "ol":
        out.push(`<ol class="plain">` + b.items.map((t) => `<li>${inline(t.replace(/^\d{1,2}\.\s+/, ""))}</li>`).join("") + `</ol>`); break;
      case "mcq": {
        let html = `<p class="q"><span class="qno">${b.no}.</span>${inline(b.text)}</p>`;
        if (b.opts.length) {
          const maxLen = Math.max(...b.opts.map((o) => o.length));
          const cols = b.opts.length === 2 ? 2 : maxLen > 26 ? 2 : b.opts.length === 3 ? 3 : 4;
          html += `<div class="opts" style="grid-template-columns:repeat(${cols},1fr)">` +
                  b.opts.map((o) => `<span>${inline(o)}</span>`).join("") + `</div>`;
        }
        out.push(html); break;
      }
      case "table":
        out.push(renderTable(b.rows, nextTableCls, { consumed: consumedFigs, assetsDir, prefix: chap.prefix, pageImage }));
        nextTableCls = null; break;
      case "figure":
        consumedFigs.add(b.n);
        out.push(renderFigure(b, blocks._figuresMeta.get(b.n), assetsDir, chap.prefix, pageImage)); break;
      case "keyfacts":
        out.push(renderKeyFacts(b, family)); break;
      case "note":
        out.push(`<div class="note">` + b.lines.map((l) => `<p>${inline(l)}</p>`).join("") + `</div>`); break;
    }
  }

  /* figures described in the md but without an inline [Figure Fn] marker:
     render them in an end-of-page strip so they are never silently lost */
  const stray = [...blocks._figuresMeta.values()].filter((m) => !consumedFigs.has(m.n));
  if (stray.length) {
    out.push(`<div class="figstrip">` + stray.map((m) =>
      renderFigure({ n: m.n }, m, assetsDir, chap.prefix, pageImage)).join("") + `</div>`);
  }

  /* footer */
  let footer;
  if (isMath && !plate) {
    footer = `<footer class="page-foot"><span>GRADE 12</span><span class="no">${printedTxt}</span><span>National Book Foundation</span></footer>`;
  } else if (!isMath && printed != null) {
    footer = `<footer class="page-foot">· ${printed} ·</footer>`;
  } else {
    footer = `<footer class="page-foot">${esc(book.sub)}</footer>`;
  }

  const css = (isMath ? MATH_CSS : STATS_CSS) + (plate ? PLATE_CSS : "");
  const bodyCls = plate ? "page-body plate" : "page-body";

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(titleTag)}</title>
${KATEX_HEAD}
<style>${css}</style>
</head>
<body>
${toolbar}
<div class="book-page">
  ${header}
  <main class="${bodyCls}">
    <h1 class="sr-only">${esc(book.title)} · ${esc(chap.human)} — page ${pageImage} (printed ${printedTxt})</h1>
    ${out.join("\n    ")}
  </main>
  ${footer}
</div>
<p class="colophon">Digital replica · typeset from <code>${esc(mdRel ? "Books/Formatted/" + path.relative(BOOKS_DIR, mdPath) : "")}</code> · figure crops embedded from the original scans${HAND_TYPESET.has(`${bookId}/${chap.folder}/page-${pad3(pageMdNo)}`) ? "" : ""}</p>
</body>
</html>
`;
}

/* ------------------------------------------------------------------ *
 * Library walk + manifest + index
 * ------------------------------------------------------------------ */

function chapterJsonTitle(chapFolderAbs) {
  try {
    const j = JSON.parse(fs.readFileSync(path.join(chapFolderAbs, "chapter.json"), "utf8"));
    return j.title || j.chapter_title || null;
  } catch { return null; }
}

function main() {
  const manifest = { generated_at: new Date().toISOString(), generator: "tools/gen-digital.mjs", books: [] };
  let made = 0, skipped = 0, placeholders = 0, figuresEmbedded = 0;

  for (const [bookId, book] of Object.entries(BOOKS)) {
    const mBook = { id: bookId, title: book.title, sub: book.sub, family: book.family, chapters: [] };
    for (const chap of book.chapters) {
      const fmtDir = path.join(BOOKS_DIR, bookId, chap.folder);
      const pageFiles = fs.readdirSync(fmtDir).filter((f) => /^page-\d+\.md$/.test(f)).sort();
      const mChap = {
        folder: chap.folder, human: chap.human, prefix: chap.prefix,
        chapter_title: chapterJsonTitle(fmtDir) || chap.human, pages: [],
      };
      for (const pf of pageFiles) {
        const no = Number(pf.match(/page-(\d+)\.md/)[1]);
        const id = `${bookId}/${chap.folder}/page-${pad3(no)}`;
        const outDir = path.join(DIGITAL, bookId, chap.folder);
        const outFile = path.join(outDir, `page-${pad3(no)}.html`);
        const mdPath = path.join(fmtDir, pf);
        const { fm } = parseMd(mdPath);
        const scanAbs = fm.source_image ? path.resolve(fmtDir, fm.source_image) : null;
        const scanFromBooks = scanAbs ? path.relative(path.join(ROOT, "Books"), scanAbs) : null;
        const mdFromBooks = path.relative(path.join(ROOT, "Books"), mdPath);

        let embedded = 0, pending = 0;
        if (HAND_TYPESET.has(id)) {
          skipped++;
        } else {
          const want = ONLY;
          if (!want || want.some((w) => w === `${bookId}/${chap.folder}/page-${pad3(no)}`)) {
            fs.mkdirSync(outDir, { recursive: true });
            const html = buildPage({ bookId, book, chap, chapFolder: fmtDir, mdPath, pageMdNo: no });
            fs.writeFileSync(outFile, html);
            made++;
          } else { skipped++; }
        }
        { /* count from disk so --only runs keep the whole manifest accurate */
          if (fs.existsSync(outFile)) {
            const htmlDisk = fs.readFileSync(outFile, "utf8");
            pending = (htmlDisk.match(/class="fig(?:cell)?slot"/g) || []).length;
            embedded = (htmlDisk.match(/<figure class="fig[" ][^]*?<\/figure>/g) || []).length;
          }
        }
        mChap.pages.push({
          image: pageImageNo(fm, no), printed: fm.page_printed ? Number(fm.page_printed) : null,
          file: `page-${pad3(no)}.html`, id,
          section: fm.section || null, exercise: fm.exercise || null,
          content_type: fm.content_type || null,
          scan: scanFromBooks, md: mdFromBooks,
          has_figures: fm.has_figures === "true", figures_count: Number(fm.figures_count || 0),
          figures_embedded: embedded, figures_pending: pending,
          hand_typeset: HAND_TYPESET.has(id),
        });
      }
      mBook.chapters.push(mChap);
    }
    manifest.books.push(mBook);
  }

  fs.writeFileSync(path.join(DIGITAL, "manifest.json"), JSON.stringify(manifest, null, 2));
  writeIndex(manifest);
  console.log(`gen-digital: ${made} pages written, ${skipped} untouched (hand-typeset/filtered), ` +
              `${figuresEmbedded} figures embedded, ${placeholders} figure slots pending crops.`);
}

function pageImageNo(fm, fallback) {
  return fm.page_image ? Number(fm.page_image) : fallback;
}

function writeIndex(manifest) {
  const cards = [];
  for (const b of manifest.books) {
    cards.push(`<section class="book"><h2>${esc(b.title)}</h2><p class="sub">${esc(b.sub)}</p>`);
    for (const c of b.chapters) {
      cards.push(`<h3>${esc(c.human)}</h3><div class="chips">`);
      for (const p of c.pages) {
        const href = `${b.id}/${c.folder}/${p.file}`;
        const flag = p.hand_typeset ? " ★" : p.figures_pending ? " ◦" : "";
        const title = p.section || p.content_type || "";
        cards.push(`<a class="chip${p.hand_typeset ? " ht" : ""}${p.figures_pending ? " pend" : ""}" href="${esc(href)}" title="${esc(title)}">${p.image}${flag}</a>`);
      }
      cards.push(`</div>`);
    }
    cards.push(`</section>`);
  }
  const total = manifest.books.reduce((s, b) => s + b.chapters.reduce((t, c) => t + c.pages.length, 0), 0);
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>STUDY · Digital Edition — Library</title>
<style>
  body{ margin:0; background:#e8e4dc; color:#16130f; font:15px/1.6 system-ui,-apple-system,'Segoe UI',sans-serif; }
  header{ background:linear-gradient(180deg,#2293fb,#0167ef 58%,#0153d6); color:#fff; padding:26px 20px 22px; text-align:center; }
  header h1{ margin:0; font:700 24px/1.3 'Trebuchet MS',sans-serif; letter-spacing:.1em; text-transform:uppercase; }
  header p{ margin:6px 0 0; font-size:13px; opacity:.92; }
  main{ max-width:960px; margin:0 auto; padding:26px 18px 40px; }
  .book{ background:#fffdf9; border-radius:10px; padding:20px 22px 8px; margin:0 0 22px;
         box-shadow:0 2px 6px rgba(60,50,30,.12); }
  .book h2{ margin:0; font-size:19px; }
  .book .sub{ margin:2px 0 14px; color:#6d675e; font-size:13px; }
  .book h3{ margin:16px 0 8px; font-size:14.5px; color:#5e0000; border-bottom:1px solid #e3dbc8; padding-bottom:5px; }
  .chips{ display:flex; flex-wrap:wrap; gap:7px; padding-bottom:14px; }
  .chip{ display:inline-flex; align-items:center; justify-content:center; min-width:44px; height:30px;
         padding:0 8px; border:1px solid #d8d0bd; border-radius:6px; background:#fff; color:#333;
         text-decoration:none; font-size:12.5px; }
  .chip:hover{ border-color:#0167ef; color:#0153d6; }
  .chip.ht{ border-color:#ac0000; color:#ac0000; font-weight:700; }
  .chip.pend{ border-style:dashed; color:#8a5a00; }
  footer{ text-align:center; color:#98917f; font-size:12px; padding:0 16px 26px; }
  footer code{ font-family:ui-monospace,Menlo,Consolas,monospace; font-size:11px; }
</style>
</head>
<body>
<header><h1>STUDY · Digital Edition</h1><p>${total} replica pages · Mathematics + Statistics · Books/{Raw → Formatted → Digital}</p></header>
<main>
${cards.join("\n")}
<p style="margin-top:4px">★ hand-typeset exemplar &nbsp;·&nbsp; ◦ figure crop pending &nbsp;·&nbsp; plain = generated replica with embedded figures</p>
</main>
<footer>typeset from <code>Books/Formatted/**</code> · figure crops in per-chapter <code>assets/</code> · regenerate with <code>node tools/gen-digital.mjs</code></footer>
</body>
</html>
`;
  fs.writeFileSync(path.join(DIGITAL, "index.html"), html);
}

main();
