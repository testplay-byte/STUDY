# STATUS — live snapshot

> **Last updated: 2026-09-20** (Phase 7 complete + docs sync — Mathematics book FULLY digitized;
> library 386 pages; next session planned: remaining Statistics chapters). Coordinator updates
> this after every task. New agents: if reality differs from this file, trust reality, then fix
> this file.

## One-line state

**386/386 pages digitized & pushed** — the **Mathematics book is COMPLETE** (front matter +
Units 01–10 + Back Matter = 317 pages) and Statistics (front matter + Ch. 8–9 = 69 pages) live
in the three-branch `Books/` library (`Raw/` immutable scans · `Formatted/` canonical markdown ·
`Digital/` frozen 112-page replica edition of the legacy library). Everything since Phase 4e is
digitized in **markdown-only mode (v4.3)** with the scan-edge-crop policy: every scan-edge
reconstruction disclosed in page notes; scan-cut folios recorded as `page_printed: null` with
pixel-verified notes. All gates green. NEXT: remaining Statistics chapters (user-scheduled).

## Library inventory

| Batch | Subject | Raw folder (`Books/Raw/…`) | Formatted folder (`Books/Formatted/…`) | Pages | Printed range | Offset | Status |
|-------|---------|----------------------------|----------------------------------------|------:|---------------|--------|--------|
| M-0 | mathematics | `Mathematics/Front-Matter` | `Mathematics/Chapter-00-Front-Matter` | 7 | (unnumbered) | — | ✅ digitized |
| M-1 | mathematics | `Mathematics/Unit-01-Functions-and-Graphs` | `Mathematics/Chapter-01-Functions-and-Graphs` | 36 | 7–41 | +6 | ✅ digitized |
| M-2 | mathematics | `Mathematics/Unit-02-Limit-Continuity-and-Derivative` | `Mathematics/Chapter-02-Limit-Continuity-and-Derivative` | 46 | 43–88 | +42 | ✅ digitized |
| M-3 | mathematics | `Mathematics/Unit-03-Integration` | `Mathematics/Chapter-03-Integration` | 31 | 90–119 | +88 | ✅ digitized |
| M-4 | mathematics | `Mathematics/Unit-04-Differential-Equations` | `Mathematics/Chapter-04-Differential-Equations` | 20 | 120–139 | +119 | ✅ digitized |
| M-5 | mathematics | `Mathematics/Unit-05-Kinematics-of-Motion-in-a-Straight-Line` | `Mathematics/Chapter-05-Kinematics-of-Motion-in-a-Straight-Line` | 20 | 140–159 | +139 | ✅ digitized |
| M-6 | mathematics | `Mathematics/Unit-06-Analytical-Geometry` | `Mathematics/Chapter-06-Analytical-Geometry` | 22 | 160–181 | +159 | ✅ digitized |
| M-7 | mathematics | `Mathematics/Unit-07-Conic-Section` | `Mathematics/Chapter-07-Conic-Section` | 48 | 182–229 | +181 | ✅ digitized |
| M-8 | mathematics | `Mathematics/Unit-08-Inverse-Trigonometric-Functions-and-Their-Graphs` | `Mathematics/Chapter-08-Inverse-Trigonometric-Functions-and-Their-Graphs` | 32 | 230–261 | +229 | ✅ digitized |
| M-9 | mathematics | `Mathematics/Unit-09-Solution-of-Trigonometric-Equations` | `Mathematics/Chapter-09-Solution-of-Trigonometric-Equations` | 12 | 262–273 | +261 | ✅ digitized |
| M-10 | mathematics | `Mathematics/Unit-10-Numerical-Methods` | `Mathematics/Chapter-10-Numerical-Methods` | 16 | 274–288 | +273 | ✅ digitized |
| M-BM | mathematics | `Mathematics/Back-Matter` | `Mathematics/Chapter-99-Back-Matter` | 27 | 290–316 | +289 | ✅ digitized |
| S-0 | statistics | `Statistics/Front-Matter` | `Statistics/Chapter-00-Front-Matter` | 9 | roman folios | — | ✅ digitized |
| S-1 | statistics | `Statistics/Chapter-08-Set-Theory` | `Statistics/Chapter-08-Set-Theory` | 10 | 2–10 | =image | ✅ digitized |
| S-2 | statistics | `Statistics/Chapter-09-Probability` | `Statistics/Chapter-09-Probability` | 50 | 11–60 | +10 | ✅ digitized |
| | | | **Total** | **386** | | | **386 raw images ⇄ 386 .md pages · Digital Edition v3 (legacy 112) FROZEN ✓** |

Content mix (386 pages): 124 theory · 79 worked-examples · 73 mixed · 55 exercise · 43 front-matter ·
10 chapter-opener · 2 summary — with **401 figures** preserved as structured F-block descriptions.

Printed-range notes: M-3 starts at 90 and S-1 at 2 because the preceding page's folio is
scan-cut/null (ranges reflect first *readable* folio, per generated `book.json`); M-10 ends at
288 because img 0016's footer is scan-cut (null). Offset chain Mathematics: +6 → +42 → +88 →
+119 → +139 → +159 → +181 → +229 → +261 → +273 → +289, folios 7→316 continuous.

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

- Phase 6 (**2026-09-20, this session**): **Mathematics Units 06–08 digitized (102 pages,
  markdown-only)** — user delivered ZIP scans (FromSmash) as the authoritative Raw source
  (PDF-derived set discarded per user directive). Recon offsets +159/+181/+229 confirmed
  (chain 159→261 continuous; footers read, none computed). Registered M-6/M-7/M-8 in
  BATCHES + BOOKS. After transport-deadline churn with parallel sub-agent waves, switched
  to a **controlled sequential pipeline**: foreground convert-page batches (3–4 pages),
  coordinator personally reviewing every draft against its scan (zoom crops for pen-slash
  cancellations and misprints) before placing; committed in ~4-5-page batches. All 102
  pages coordinator-audited: $-parity, F-blocks==markers==figures_count, printed==img+offset
  (2 scan-cut folios → null with pixel-verified notes: M-8 img 0022), no nbsp runs, canon
  frontmatter (chapter_title CAPS, H1 "Unit 0N: <Title>", exercise-id "Review Exercise").
  Book misprints preserved and logged per page (x−21=X, y=1 foci line, 'wil', misplaced
  full stop, B(4,0), 3600×1000/7, V(030), ∉ for ≠, capital Cos/Sin, 1≤x,y≤−1, restated-LHS
  chain line, iv.' apostrophe, reversed 0>x>π/2, 13/15 option). Metadata regenerated
  (book.json + 3 chapter.json + indexes); verify-v4 ALL GREEN 331/331 raw imgs, 219/219
  markdown-only placed; check-digital --frozen --strict-figures ALL GREEN.

- Phase 7 (**2026-09-20, this session**): **MATHEMATICS BOOK COMPLETE — Units 09, 10 and
  Back Matter digitized (55 pages, markdown-only)** — user delivered the final transfer
  (CH-9-10-L: M-9.zip, M-10.zip, M-L.zip via FromSmash). Recon: Unit 09 Solution of
  Trigonometric Equations (12 pp, printed 262–273, offset +261), Unit 10 Numerical Methods
  (16 pp, printed 274–289, offset +273), Back Matter (27 pp, printed 290–316, offset +289:
  Answers for every exercise incl. graph answers, Glossary, Symbols table, Index, About
  Authors). Registered M-9/M-10/M-BM (Chapter-99-Back-Matter, kind back-matter). Test-first
  4 pages, then all remaining 51 converted via the controlled sequential pipeline with
  coordinator review of every page against its scan (zoom crops for misprints). Artifacts
  preserved and logged: {π/12, 5π/3} solution-set misprint, π/2 slip, 'quadratic' for
  quadrant, 'negective', stale x₄ numerator, '2.315', (x₁)-for-f(x₁), 'Examble',
  y₄ transposed digits, '= : [0,1]', (xxv) mislabel, duplicate Q.9 entries, 'nomogenous',
  'Pie', 'Instantaneously velocity', restated chain labels, MATLAB boxes as fenced code.
  4 scan-cut folios → page_printed null with pixel-verified notes (M-10 imgs 0004, 0016;
  M-BM imgs 0002, 0016). Metadata regenerated (book.json + 3 chapter.json + indexes);
  verify-v4 ALL GREEN 386/386 raw imgs, 274/274 markdown-only placed; check-digital
  --frozen --strict-figures ALL GREEN.

## Next actions (queue)

1. **NEXT SESSION (~10 hours out, per user directive 2026-09-20): the remaining Statistics
   chapters.** The Statistics book currently holds front matter + Ch. 8 (Set Theory) + Ch. 9
   (Probability) = 69 pages; the user will send the remaining chapters (Ch. 1–7 and any other
   parts) as scan transfers. Run the full v4.3 markdown-only pipeline exactly as for the
   Mathematics phases: intake → recon (offsets, continuity) → register (batch codes continue
   **S-3, S-4, …**) → test-first → controlled sequential conversion waves → audit → metadata →
   gates → push. Do not rush; coordinator reviews every page.
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
  legitimate (no digit printed); do not invent numbers. Markdown-only scan-cut folios (null
  with pixel-verified notes): M-8 img 0022 · M-10 imgs 0004, 0016 · M-BM imgs 0002, 0016 ·
  M-3 img 001 · S-1 img 1.
- S-2 odd-page running headers misprint "[Chapter 7]" — chapter is 9 everywhere in data ✓
  (audited). Keep it that way.
- `Books/Digital/` (FROZEN, v4.3) pages use a KaTeX CDN — offline, math degrades to readable
  raw LaTeX (accepted; the dashboard will bundle KaTeX locally). Custom page CSS must scope
  its selectors (bare `span { … }` rules shred KaTeX output — see CONVENTIONS §1.5).
- Vision API rate-limits (~3 concurrent) — waves must run agents sequentially within each
  agent; expect 429 storms; convert-page.mjs backs off automatically.
- Task-tool agents can die mid-wave (context deadlines) — coordinator re-scopes `-v2` runs to
  missing pages; check page counts vs STATUS table after every wave. **Preferred mode since
  Phase 6: the controlled sequential pipeline** (foreground convert-page batches of 3–4,
  coordinator reviews every draft against its scan before placing) — parallel sub-agent waves
  repeatedly hit transport deadlines on the 100+-page batches.

## Environment notes

- Repo remote: `github.com/testplay-byte/STUDY` (branch `main`). PAT: user-provided in chat,
  local-only, never committed.
- Working clone lives at `/home/z/my-project/study-workspace/STUDY` (or re-clone per
  PIPELINE.md §0). Local shared agent log: `/home/z/my-project/worklog.md`.
- Integrity commands (run from repo root): `bun tools/verify-v4.mjs` → ALL GREEN (112/112
  legacy byte-verified; 386/386 raw images; 274/274 markdown-only placed); `node
  tools/check-digital.mjs --frozen --strict-figures` → ALL GREEN (112 digital pages intact;
  274 frozen twins expected). Both re-verified 2026-09-20 at Phase 7 HEAD (`78781f0`).
- Raw scan intake path that works: FromSmash transfer → agent-browser signed-URL capture →
  `curl` download → verify zip contents are direct images → recon offsets from footers →
  register (BATCHES in `tools/verify-v4.mjs` + BOOKS in `tools/build-metadata.mjs`) →
  skeleton commit.
