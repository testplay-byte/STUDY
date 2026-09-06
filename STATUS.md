# STATUS — live snapshot

> **Last updated: 2026-09-06** (Phase 5 — Mathematics Units 02–05 digitized in markdown-only mode; library now 229 pages). Coordinator updates this after every task. New agents: if
> reality differs from this file, trust reality, then fix this file.

## One-line state

**229/229 pages digitized & pushed** — Mathematics (front matter + Units 01–05) and Statistics
(front matter + Ch. 8–9) in the three-branch `Books/` library (`Raw/` immutable scans ·
`Formatted/` canonical markdown · `Digital/` frozen 112-page replica edition of the legacy
library). Units 02–05 (117 pages) digitized in **markdown-only mode (v4.3)** with the
scan-edge-crop policy: every scan-edge reconstruction disclosed in page notes; 8 scan-cut
folios recorded as `page_printed: null` with pixel-verified notes. All gates green.

## Library inventory

| Batch | Subject | Raw folder (`Books/Raw/…`) | Formatted folder (`Books/Formatted/…`) | Pages | Printed range | Offset | Status |
|-------|---------|----------------------------|----------------------------------------|------:|---------------|--------|--------|
| M-0 | mathematics | `Mathematics/Front-Matter` | `Mathematics/Chapter-00-Front-Matter` | 7 | (unnumbered) | — | ✅ digitized |
| M-1 | mathematics | `Mathematics/Unit-01-Functions-and-Graphs` | `Mathematics/Chapter-01-Functions-and-Graphs` | 36 | 7–41 | +6 | ✅ digitized |
| M-2 | mathematics | `Mathematics/Unit-02-Limit-Continuity-and-Derivative` | `Mathematics/Chapter-02-Limit-Continuity-and-Derivative` | 46 | 43–88 | +42 | ✅ digitized |
| M-3 | mathematics | `Mathematics/Unit-03-Integration` | `Mathematics/Chapter-03-Integration` | 31 | 89–119 | +88 | ✅ digitized |
| M-4 | mathematics | `Mathematics/Unit-04-Differential-Equations` | `Mathematics/Chapter-04-Differential-Equations` | 20 | 120–139 | +119 | ✅ digitized |
| M-5 | mathematics | `Mathematics/Unit-05-Kinematics-of-Motion-in-a-Straight-Line` | `Mathematics/Chapter-05-Kinematics-of-Motion-in-a-Straight-Line` | 20 | 140–159 | +139 | ✅ digitized |
| S-0 | statistics | `Statistics/Front-Matter` | `Statistics/Chapter-00-Front-Matter` | 9 | roman folios | — | ✅ digitized |
| S-1 | statistics | `Statistics/Chapter-08-Set-Theory` | `Statistics/Chapter-08-Set-Theory` | 10 | 1–10 | =image | ✅ digitized |
| S-2 | statistics | `Statistics/Chapter-09-Probability` | `Statistics/Chapter-09-Probability` | 50 | 11–60 | +10 | ✅ digitized |
| | | | **Total** | **229** | | | **229 raw images ⇄ 229 .md pages · Digital Edition v3 (legacy 112) FROZEN ✓** |

Content mix (229 pages): 73 theory · 50 worked-examples · 45 mixed · 38 exercise · 16 front-matter ·
5 chapter-opener · 2 summary — with **210 figures** preserved as structured F-block descriptions.

## Done so far (condensed — details in WORKLOG.md / PLAN.md)

- Phase 0–1: M-0, M-1, S-0, S-1 digitized (62 pages), pipeline validated on user-named test
  pages (M-1 imgs 25/26, S-1 img 3, S-1 img 5).
- Phase 2: S-2 received as LimeWire E2E-encrypted zip → coordinator reverse-engineered the
  client crypto, downloaded & verified; 50 pages digitized (5-agent wave + coordinator finish
  through API-429 storms).
- Phase 3: **Structure v3** — flattened all exercise/section sub-folders into flat chapter
  pages; `books/` layout with per-book raw; frontmatter schema v3; metadata + docs systems.
- Phase 4: **Structure v4 — the three-branch `Books/` library** (user directive):
  `Books/Raw/<Subject>/<Original-Chapter-Name>/` for scans, `Books/Formatted/<Subject>/Chapter-NN-<Title>/`
  for markdown (front matter = Chapter 00), `Books/Digital/` HTML test edition.
  112/112 pages byte-verified vs git HEAD through the migration (`tools/verify-v4.mjs`); all
  relative links verified (`tools/check-digital-links.mjs`); docs/tools/indexes updated.
- Phase 4b: **Digital scope refined per user review** — no chapter folders, no per-page HTML,
  no index scaffolding; exactly the 8 user-selected test pages. *(Design superseded by
  Phase 4c — the scan-pane pages were rejected.)*
- Phase 4c (**this session**): **Digital replica test build — DONE.** User rejected the
  generated scan-pane design (commit 26bc1c0) and directed true digital replicas of the
  printed pages. Result: `Books/Digital/` holds exactly **8 FLAT hand-typeset HTML pages**
  (`M1-page-001/023/025`, `S1-page-003/005/006`, `S2-page-005/042` — no subfolders, no index)
  + `assets/` with 14 figure crops from the raw scans (new `tools/crop-figure.py`). Pages are
  self-contained (inline CSS + KaTeX CDN `$`/`$$`), replicate per-book page furniture
  (Mathematics: NBF Grade 12 blue ribbon/wedges + red Key-Facts callout; Statistics: cream
  page, thin-ruled running header incl. the book's own "[Chapter 7]" misprint kept verbatim;
  `S2-page-042` = MCQs 101–112 + full 112-answer ANSWERS grid as a real table). Obsolete
  `generate-digital.mjs` + `check-digital-links.mjs` deleted; new gate
  `tools/check-digital-test.mjs` (8-page whitelist, links, assets, KaTeX/`<main>`).
  **Verification: check-digital-test ALL GREEN 8/8 (30 links, 14 assets) · verify-v4 ALL
  GREEN 112/112 (Formatted untouched) · all 8 pages browser-verified (KaTeX renders,
  figures load, no overflow @1280/390px, zero console errors).**
- Phase 4d (**2026-09-04, commit `1d76c63`**): **Digital Edition v3** — user: "build the
  digital versions of ALL the pages with a proper folder structure". `Books/Digital/`
  restructured to mirror Raw/Formatted 1:1 (`<Subject>/<Chapter-Folder>/page-NNN.html` +
  per-chapter `assets/`); ALL 112 pages generated by `tools/gen-digital.mjs` (math-ribbon /
  stats-cream design languages, KaTeX, MCQ/ANSWERS grids, 116 figure crops embedded as
  data URIs); library `index.html` + `manifest.json`; the 8 hand-typeset exemplars preserved
  verbatim; `check-digital.mjs --strict-figures` ALL GREEN; browser-verified.
- Phase 4e (**2026-09-06, this session**): **v4.3 markdown-only mode** — user: more books
  and chapters are coming, digitized to **markdown only**. Digital layer FROZEN (no new HTML
  for new batches); `check-digital.mjs --frozen` added (Formatted pages without Digital
  twins expected; new reverse-orphan regression check); docs synced (CONVENTIONS §1.7 +
  changelog v4.3, PIPELINE mode note + §6, AGENTS, PLAN, tools/README); sandbox re-verified:
  git sync OK, both gates ALL GREEN, `verify-v4` 112/112, **smoke conversion S-1 img 3 →
  schema-valid draft (frontmatter / 4×F-blocks / `$`-balance match canonical)** — pipeline
  live and ready for the new material.
- Phase 5 (**2026-09-06, this session**): **Mathematics Units 02–05 digitized (117 pages,
  markdown-only)** — user delivered a FromSmash transfer (4 zips, named M-2..M-5.zip).
  Downloaded via browser URL-capture + content-disposition verification; recon established
  offsets +42/+88/+119/+139 (continuity-verified 43→159, no gaps); user-flagged problem
  pages p.131/p.134/p.143 handled via the **scan-edge crop policy** (reconstruct unambiguous
  edge chars, `[edge cut]` markers + notes for the rest; page numbers NEVER computed — 8
  scan-cut folios recorded null with notes). 11 sub-agent runs (+ salvage passes + scoped
  relaunches) converted all 117 pages; coordinator audit: full-library integrity sweep ALL
  CLEAN (frontmatter exact, printed==img+offset everywhere readable, 101 F-blocks with
  markers, `$` balanced, sources resolve); tooling hardened (convert-page `--chapter-folder`/
  `--book-title` injections; verify-v4 v4.3-aware with deep v3-baseline history walk);
  M-4 imgs 0016/0019 footers pixel-verified absent → null. All gates green.

## Next actions (queue)

1. **AWAITING USER:** further books/chapters (scan packages) — same markdown-only runbook
   (`docs/PIPELINE.md` §1–§6 in v4.3 mode). Batch codes continue `M-6`, `S-3`, … (new books
   get new subject letters); register in `build-metadata.mjs` `BOOKS` + `verify-v4.mjs`
   `BATCHES` (markdownOnly: true).
2. **User input needed (M-1 cleanup):** user says Unit 01 contains **five exercises (1.1–1.5)**
   across its 36 pages and may share raw info to pin down exact boundaries. Current
   frontmatter records: Ex 1.1 @ img 8 · 1.2 @ img 18 · 1.3 @ img 24 · 1.4 @ img 30 ·
   Review Exercise @ imgs 34–36. When info arrives: fix `exercise:`/`section:` frontmatter +
   rerun `build-metadata.mjs`. **Never re-split folders (v3 rule, still binding in v4).**
3. When the user starts studying: activate `docs/tracking/` (mastery map + progress log).
4. Future build-out (user vision): web dashboard to browse pages/chapters/questions and track
   progress — data contracts (`book.json`/`chapter.json`) are ready; the Next.js viewer
   (`src/app/page.tsx`) already reads `Books/Digital/manifest.json`.

## Known issues / watchlist

- `page_printed: null` on M-1 imgs 20, 22, 32, 33, 34, 36 + S-1 img 1 + most front matter —
  legitimate (no digit printed); do not invent numbers.
- S-2 odd-page running headers misprint "[Chapter 7]" — chapter is 9 everywhere in data ✓
  (audited). Keep it that way.
- `Books/Digital/` (FROZEN, v4.3) pages use a KaTeX CDN — offline, math degrades to readable
  raw LaTeX (accepted; the dashboard will bundle KaTeX locally). Custom page CSS must scope
  its selectors (bare `span { … }` rules shred KaTeX output — see CONVENTIONS §1.5).
- Vision API rate-limits (~3 concurrent) — waves must run agents sequentially within each
  agent; expect 429 storms; convert-page.mjs backs off automatically.
- Task-tool agents can die mid-wave (context deadlines) — coordinator re-scopes `-v2` runs to
  missing pages; check page counts vs STATUS table after every wave.

## Environment notes

- Repo remote: `github.com/testplay-byte/STUDY` (branch `main`). PAT: user-provided in chat,
  local-only, never committed.
- Working clone lives at `/home/z/my-project/study-workspace/STUDY` (or re-clone per
  PIPELINE.md §0). Local shared agent log: `/home/z/my-project/worklog.md`.
- Integrity commands (run from repo root): `bun tools/verify-v4.mjs` → ALL GREEN (112/112);
  `node tools/check-digital.mjs --frozen --strict-figures` → ALL GREEN (112 digital pages
  intact; markdown-only push gate, v4.3). Both re-verified 2026-09-06 + smoke conversion OK.
