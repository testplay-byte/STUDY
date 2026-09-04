# tools/ — Digitization Tooling (structure v4 + Digital replica edition)

Tool scripts for the STUDY library. Layout v4 (user directive, 2026-09-03):

```
Books/
├── Raw/<Subject>/<Original-Chapter-Name>/NNNN.jpg       # immutable scans
├── Formatted/<Subject>/Chapter-NN-<Title>/page-NNN.md   # canonical markdown (source of truth)
└── Digital/                                             # HAND-TYPESET replica pages (test edition)
    ├── <BATCH>-page-NNN.html                            # 8 curated pages, FLAT — no subfolders, no index
    └── assets/<BATCH>-<NNN>-fig-<slug>.png              # figure crops from the raw scans
```

`<Subject>` folders are TitleCase (`Mathematics`, `Statistics`); the frontmatter `subject:`
field stays a lowercase identifier. The batch code (`M-0`, `M-1`, `S-0`, `S-1`, `S-2`) is the
permanent join key across Raw / Formatted / Digital.

All scripts are **zero-dependency** (Node/Bun stdlib + Python stdlib/PIL) — no install step.

## Tool inventory

| Tool | Purpose | Run |
|------|---------|-----|
| `convert-page.mjs` | one scan → Markdown draft via the vision model (draft generator; agent QA still required) | `bun tools/convert-page.mjs …` |
| `build-metadata.mjs` | regenerate `book.json` / `chapter.json` / `indexes/` from page frontmatter | `bun tools/build-metadata.mjs` |
| `verify-v4.mjs` | integrity gate: tree shape, 112/112 counts, byte-verify pages vs git history, frontmatter/link coherence | `bun tools/verify-v4.mjs` |
| `check-digital-test.mjs` | integrity gate for `Books/Digital/`: 8-page whitelist, figure self-containment (data-URI counts), link resolution, asset counts, KaTeX/`<main>` chrome | `bun tools/check-digital-test.mjs` |
| `crop-figure.py` | crop figure images out of raw scans (fractional boxes), probe brand colors, render coordinate grids | `python3 tools/crop-figure.py …` |
| `embed-figures.py` | optimize Digital figure assets (photo→JPEG, line-art→palette PNG) and embed them into the pages as base64 data URIs | `python3 tools/embed-figures.py` |
| `prompt.txt` | canonical VLM conversion prompt (read directly by `convert-page.mjs`) | — |

Retired one-off migrations, kept for the audit trail (never run again):
`migrate-v3.mjs` (v2→v3), `migrate-v4.mjs` (v3→v4), `fix-v4-casing.mjs` (TitleCase follow-up).
`generate-digital.mjs` + `check-digital-links.mjs` were **deleted** (2026-09-03): they built
and checked the rejected generated Digital design — see "The Digital edition" below.

## convert-page.mjs

Converts **one** page image to a Markdown draft using the vision model.
This is a *draft generator*: the converting agent must still run the CONVENTIONS §4 QA
checklist (side-by-side review against the image) and fix issues before accepting the file.

### Usage (v4 layout)

```bash
cd <repo root>   # e.g. study-workspace/STUDY

bun tools/convert-page.mjs \
  --image Books/Raw/Mathematics/Unit-01-Functions-and-Graphs/0025.jpg \
  --batch M-1 --page 25 --image-filename 0025.jpg \
  --out /tmp/drafts/page-025.md \
  --agent agent-A1 \
  --source-image-rel "../../../Raw/Mathematics/Unit-01-Functions-and-Graphs/0025.jpg"
```

Workflow used by agents: **draft to a scratch dir first** (e.g. `/tmp/drafts/`), review, fix,
then save to the final conventioned path
`Books/Formatted/<Subject>/Chapter-NN-<Title>/page-NNN.md`. (Scratch dirs are outside the
repo / gitignored.)

### Flags
| Flag | Meaning |
|------|---------|
| `--image` | raw scan path (input) |
| `--batch` | batch code (`M-0`/`M-1`/… ; `--book` still accepted as a v2 alias) |
| `--subject` | optional; auto-resolved from the batch prefix (`M-*`→mathematics, `S-*`→statistics) when omitted |
| `--page` | integer image number |
| `--image-filename` | filename used in the scan-link line |
| `--out` | draft output path |
| `--agent` | agent id for `converted_by` |
| `--source-image-rel` | relative path from the final .md location to the raw scan — always `../../../Raw/<Subject>/<Chapter-Name>/NNNN.jpg` (3 ups: page → chapter → Formatted/<Subject> → Books) |
| `--thinking` | optional: enable chain-of-thought (slower; use for very dense math pages) |

Truncated responses are auto-continued (up to 6 API rounds); 429 rate-limits get exponential
backoff + jitter.

## build-metadata.mjs

Regenerates **all derived metadata** from the page frontmatter (pages are the single source of
truth):

- `Books/Formatted/<Subject>/book.json` — machine-readable book registry
- `Books/Formatted/<Subject>/<Chapter>/chapter.json` — per-chapter page map (consumed by tooling + future web dashboard)
- `indexes/<subject>.md` — human-readable page tables

```bash
bun tools/build-metadata.mjs   # run from repo root after ANY page add/edit
```

Never hand-edit those files. The book identity data (titles, publishers, chapter folder names,
raw folder names, printed page offsets) is maintained in the `BOOKS` constant at the top of the
script — update it there when registering a new chapter (see `docs/PIPELINE.md` §3).

## The Digital edition — hand-typeset replica pages

> **⚠️ SUPERSEDED (2026-09-04, Digital Edition v3):** the 8-page hand-typeset test edition
> grew into the full 112-page generated library — see the final section of this file and
> `docs/CONVENTIONS.md` §1.6. The 8 exemplar pages remain in place, never regenerated.

> User directive (2026-09-03, after rejecting the generated "scan pane + transcription"
> design of commit 26bc1c0): each Digital page must look like an **actual digital version of
> the original textbook page** — a hand-typeset replica with real text, KaTeX math, data
> tables and figure IMAGES cropped from the raw scans embedded where they sit on the printed
> page. Full policy: `docs/CONVENTIONS.md` §1.5.

- **Curated whitelist ONLY (8 pages):** `M1-page-001/023/025.html` (Mathematics, Unit-01,
  printed = image + 6) · `S1-page-003/005/006.html` (Statistics Ch. 8 Set Theory, printed =
  image) · `S2-page-005/042.html` (Statistics Ch. 9 Probability, printed = image + 10). The
  whitelist is enforced by `check-digital-test.mjs`; adding pages requires the user's OK and a
  whitelist edit in that script.
- **Flat layout, batch-coded filenames:** `Books/Digital/<BATCH>-page-NNN.html` — batch codes
  disambiguate same-numbered pages (S-1 p5 vs S-2 p5) and match the user's own chapter naming.
  No subject/chapter subfolders, no `index.html`.
- **Hand-typeset, never generated.** Each page is written by hand (agent-typeset) from the
  canonical markdown + the raw scan: self-contained HTML with inline CSS, KaTeX via CDN
  (auto-render, `$` inline / `$$` display), real `<table>`s, and figure crops from the scan
  placed where they sit on the printed page. Page furniture (ribbons, running headers,
  footers, folios) is replicated per book. Content is verbatim — **including the book's own
  typos and misprints** (e.g. the S-2 odd-page running header prints "[Chapter 7]"; the
  chapter is 9 — keep it verbatim).
- **Figure crops (canonical sources)** live in `Books/Digital/assets/` as
  `<BATCH>-<NNN>-fig-<slug>.png` (line art; photos like `M1-001-unit-banner.jpg` as `.jpg`),
  produced with `crop-figure.py` and optimizer-compressed by `embed-figures.py`.
- **Figures are embedded in the pages as base64 data URIs** (`tools/embed-figures.py`) so
  every HTML file renders its graphs standalone — file://, lone downloads, any static host.
  A relative `src="assets/…"` in a Digital page is a regression (it caused user review
  round 3's "no graphs" when pages were viewed without the folder) and fails the checker.

### Digital workflow (per page)

1. **Crop the figures.** `python3 tools/crop-figure.py grid <scan.jpg>` renders a coordinate
   grid overlay to eyeball positions; `probe <scan.jpg>` prints size + dominant colors of
   top/mid/bottom strips (use it to sample each book's brand colors); then
   `crop <scan.jpg> Books/Digital/assets/<BATCH>-<NNN>-fig-<slug>.png L T R B` with
   **fractional** coordinates (0..1, left/top/right/bottom) so boxes survive rescaling.
2. **Hand-typeset the page** (self-contained HTML: inline CSS + KaTeX CDN auto-render; slim
   toolbar; colophon linking `../Raw/<Subject>/<Chapter>/<NNNN>.jpg` and
   `../Formatted/<Subject>/Chapter-NN-…/page-NNN.md`). Match the book's chrome:
   - *Mathematics* (National Book Foundation Grade 12): blue unit ribbon with orange corner
     wedges (`#2293fb→#0167ef`, `#f26a0a`), blue bold labels (`#1560d0`), maroon section
     headings (`#5e0000`), red Key-Facts callout (`#ac0000`) with the cropped crossed-keys
     icon, blue footer ribbon "GRADE 12 | <page> | National Book Foundation".
   - *Statistics* (Basic Statistics Part-II): monochrome cream page, thin-ruled running
     header ("[Chapter 8] Set Theory" / "[Chapter 7] Probability" — verbatim misprint), quiet
     folio footer; `S2-page-042` replicates MCQs 101–112 and the full 112-answer ANSWERS grid
     as a real HTML table.
3. **Embed the figures.** `python3 tools/embed-figures.py` optimizes every asset (photos →
   JPEG q82, line art → 256-color palette PNG) and inlines each one into the pages as a
   base64 data URI (also rewrites the canonical asset in place). Idempotent — re-run after
   editing any page's `<img>` back to `assets/…` or after changing a crop.
4. **Verify:** `bun tools/check-digital-test.mjs` → ALL GREEN (8/8 pages, 14 embedded
   figures, expected counts per page). Then browser-check (agent-browser or manual): KaTeX
   renders, figures load (`naturalWidth > 0`), no horizontal overflow at 1280px and ~390px,
   zero console errors.

### check-digital-test.mjs (the Digital gate)

Plain Node/Bun, zero dependencies. It asserts that `Books/Digital/` contains **exactly** the
8 whitelisted `.html` files + `assets/` and nothing else (no extra `.html`, no `index.html`,
no strays); enforces **self-containment** — each page must embed exactly its expected figure
count as base64 data URIs (`EXPECTED_FIGURES` map) and must NOT carry relative
`src="assets/…"` references; extracts every remaining `href`/`src`, ignores external schemes
(`http(s)`, `#`, `mailto:`, `data:`), resolves each relative target against the page's
directory and requires it to exist on disk; requires a KaTeX CDN stylesheet and a `<main>`
per page; requires `assets/` to hold exactly the expected 14 crops (`.png` line art +
`.jpg` photos). Per-file + total summary; exit 1 with a clear ✗ report on any failure.

```bash
bun tools/check-digital-test.mjs     # or: node tools/check-digital-test.mjs
```

### ⚠️ KaTeX CSS-scoping gotcha (learned the hard way)

KaTeX generates deep internal markup with `.base`, `.run`, `span` elements everywhere.
**Scope every custom selector** (e.g. `.run > span` for a specific label span). A bare
descendant selector like `span { display: …; margin: …; white-space: nowrap; }` leaks into
KaTeX's internal spans and shreds the formulas. Always namespace page CSS under the page's
own classes.

## verify-v4.mjs / check-digital-test.mjs — integrity verifiers

```bash
bun tools/verify-v4.mjs             # tree shape, 112/112 counts, byte-verify every page vs
                                    # git history (v3 baseline) + rewrites, frontmatter/links
bun tools/check-digital-test.mjs    # Books/Digital whitelist, links, assets, KaTeX/<main>
```

Run both after any structural change. CI-style rule: **no push with a failing verifier.**

## prompt.txt

The canonical VLM conversion prompt (single source of truth — `convert-page.mjs` reads it
directly). Frontmatter fields `subject`, `batch`, `chapter_folder`, `chapter_number`, … (schema
v3 fields, v4 path examples). Documented snapshot + changelog: `docs/prompts/vlm-image-to-markdown.md`.

## Retired: generate-digital.mjs / check-digital-links.mjs (deleted 2026-09-03)

`generate-digital.mjs` generated `Books/Digital/` HTML from the Formatted markdown (the
"scan pane + formatted transcription" design, commit 26bc1c0) and `check-digital-links.mjs`
checked its links. The user rejected that design; Digital is now hand-typeset (no generator
exists, so nothing can regenerate pages — edits happen in the HTML itself) and
`check-digital-links.mjs` is superseded by `check-digital-test.mjs`, which also enforces the
whitelist + asset containment. History: `WORKLOG.md` Tasks 7-v4 → 9.

---

## Digital Edition v3 — full 112-page generated library (2026-09-04)

User go-ahead: "let's build the digital versions of all the pages so far … with a proper
structure of the folders." The library now covers every scanned page.

### Layout (mirrors Raw/Formatted 1:1)

```
Books/Digital/
  index.html                        # library home (chips per page; ★ exemplar, ◦ pending)
  manifest.json                     # machine map (drives the Next.js viewer + checker)
  Mathematics/
    Chapter-00-Front-Matter/        # page-001..007.html + assets/
    Chapter-01-Functions-and-Graphs/# page-001..036.html + assets/
  Statistics/
    Chapter-00-Front-Matter/        # page-001..009.html + assets/
    Chapter-08-Set-Theory/          # page-001..010.html + assets/
    Chapter-09-Probability/         # page-001..050.html + assets/
```

### Generation

- `node tools/gen-digital.mjs [--only <Book>/<ChapterFolder>/page-NNN ...]` — parses the
  Formatted markdown (frontmatter + body blocks: sections, paragraphs, (i)/(ii) items,
  bullets, MCQs with option grids, `## ANSWERS` grid, display math, Key-Facts blockquotes,
  tables — including tables whose CELLS are `[Figure F<n>]` markers) and renders each page
  in its book's design language with KaTeX CDN auto-render. Front-matter pages render as
  centered "plates". Running heads alternate like the printed books (even printed page:
  folio left / title right; odd: title left / folio right).
- The 8 hand-typeset exemplars are listed in `HAND_TYPESET` inside the script and are
  NEVER regenerated.
- **Figure embedding:** each `[Figure F<n>]` slot (or figure-cell) embeds
  `assets/<PREFIX>-<NNN>-fig-<n>[-<slug>].<png|jpg>` as a base64 data URI; slots without a
  crop render an explicit dashed "CROP PENDING / FIGURE n" placeholder — a figure can never
  silently disappear. Figures described in the md but lacking an inline marker render in an
  end-of-page `.figstrip`.
- `manifest.json` is rewritten on every run (counts figures per page from disk, so
  `--only` runs keep the whole manifest honest).

### Gates & helpers

```bash
node tools/check-digital.mjs                    # coverage/chrome/links/figures/tree/manifest
node tools/check-digital.mjs --strict-figures   # push gate: zero placeholders allowed
python3 tools/optimize-assets.py                # palette-quantize PNGs, JPEG q82 photos
python3 tools/crop-figure.py grid <scan> /tmp/grid-X.jpg   # parallel-safe grid output
```

`crop-figure.py crop` now saves `.jpg` for photo crops too. `embed-figures.py` and
`check-digital-test.mjs` are retired by v3 (kept in history only).

### Lessons learned (v3 build)

- `rg` hangs on the single-line base64 payloads in generated pages — always grep them with
  python (`open(p).read().count('class="figslot"')`).
- KaTeX hidden MathML inflates `documentElement.scrollWidth` on mobile; check
  `document.body.scrollWidth`.
- Table rows containing `$y = |x + 1|$` must be cell-split math-aware (`splitCells` in the
  generator) — a naive `.split("|")` shreds absolute-value bars across cells.
- On graph-grid pages, pixel-scan a caption-only band (`y` below the x-axes) to find TRUE
  cell borders — graph axes pollute naive full-cell scans.
- VLM clip-verdicts hallucinate on line art; trust numpy ink-margin scans, use neutral
  VLM prompts only for content identity.
