# Progress Log — Study Helper Planner tracking

> Append-only, newest entries at the **bottom**. One entry per study event / tracking update.
> Each entry notes what changed in `STUDENT-PROFILE.md` so history stays reconstructable.

## Entry format

```
### YYYY-MM-DD — <short title>
- **Context:** what the user studied / reported / asked for
- **Observations:** concrete evidence (scores, self-reports, questions asked, mistakes seen)
- **Profile changes:** exactly which fields in STUDENT-PROFILE.md were updated
- **Next suggested:** coordinator's recommendation for the next session
```

---

<!-- Entries below — newest at the bottom -->

### 2026-09-02 — Tracking system initialized
- **Context:** Library structure v3 completed (112 pages: M-0, M-1, S-0, S-1, S-2 digitized;
  flat chapter layout per user directive). No study sessions have happened yet — this log is
  the starting point.
- **Observations:** User shows strong opinions about organization & traceability (reviewed the
  M-1 exercise split, rejected it, requested chapter-level structure + robust docs + GitHub as
  the permanent context store for any future agent).
- **Profile changes:** Created `STUDENT-PROFILE.md` skeleton (mastery map: all chapters
  not-started; preference recorded: chapter-level organization).
- **Next suggested:** Ask the user (next session): exam target/date, current chapter, weak
  topics — then start the study loop (study → log → update profile).

### 2026-09-03 — Structure v4 (three-branch Books/ library)
- **Context:** User reviewed the v3 layout and directed a full reorganization: `books/` →
  `Books/` with `Raw/` (original chapter names), `Formatted/` (numbered chapters incl.
  Chapter 00 front matter) and `Digital/` (HTML test edition). Executed and verified the
  same day; no study sessions yet.
- **Observations:** User consistently optimizes for browse-ability and permanence — they think
  in books → chapters → pages, want originals preserved untouched (Raw), and treat rendered
  HTML as disposable/test. Learning preference signal: values clean navigation over aggregate
  views.
- **Profile changes:** None to mastery (no study yet); preference noted for the future
  dashboard design (mirror the Raw/Formatted/Digital browsing model).
- **Next suggested:** same as before — ask exam target/date, current chapter, weak topics;
  optionally gather user feedback on the Digital test edition reading experience.

### 2026-09-03 — Digital format feedback (user review round 2)
- **Context:** User reviewed the v4 library (structure approved: "the structure was good and
  exactly how I wanted it to be") but rejected the first Digital build: it generated HTML for
  all 112 pages inside mirrored chapter folders. Directive: Digital is for TESTING the format
  — only 8 user-selected pages, no extra folders, and the original scan images must be shown
  directly in the pages.
- **Observations:** User iterates smallest-first on presentation features (8 test pages before
  any rollout) and wants the physical scan visible alongside anything digital — trust in the
  printed page remains the anchor. Consistent with earlier behavior (validated test pages
  before mass conversion; rejected folder splits).
- **Profile changes:** Preference recorded for the future dashboard design: minimal curated
  scope, scan-first presentation, user approves scope before generation.
- **Next suggested:** Collect the user's verdict on the 8 test pages (layout, Split/Scan/Text
  views, typography, math rendering) and only then discuss wider rollout or dashboard work.

### 2026-09-03 — Digital rebuild v2: hand-typeset replica pages (user review round 3)
- **Context:** User rejected the Phase 4b digital pages ("scan pane + plain-text
  transcription", commit 26bc1c0). New directive: each Digital page must look like an actual
  digital version of the original textbook page — a hand-typeset replica with real text,
  KaTeX math, data tables and figure images cropped from the raw scans, with each book's
  header/footer page furniture replicated. Subject sub-folders removed; 8 pages now sit FLAT
  in `Books/Digital/` (`M1-page-001/023/025`, `S1-page-003/005/006`, `S2-page-005/042`) with
  figure crops in `Digital/assets/`.
- **Observations:** Third consecutive review round where the user strips away generated
  scaffolding in favor of faithfulness to the printed artifact (rejected exercise folders →
  flat chapters; rejected 112-page mirror → 8 test pages; rejected scan-viewer → typeset
  replica). Strong preference signal: digital output should look like the book, including its
  own typos and misprints (the "[Chapter 7]" running header on S-2 pages is kept verbatim).
  Curation and scope control matter more than automation — no generator script anymore.
- **Profile changes:** None to mastery (no study yet); presentation preference refined for
  the future dashboard: replica-style typeset reading experience, scan/colophon traceability,
  user approves scope before anything new is built.
- **Next suggested:** Collect the user's verdict on the 8 replica pages (typography, math,
  figures, page furniture). If approved, decide the production approach for a wider rollout
  (dashboard, PLAN Phase 7); adding pages beyond the 8 requires explicit user approval.

## 2026-09-03 — Round 4 review: "no graphs / layout not proper" → figures embedded, pages self-contained

- **Verdict handled:** the replica typography was accepted, but pages showed NO figures and
  broken layouts when viewed without the `assets/` folder (relative `src="assets/…"` refs).
  Root cause was the loading path, not missing crops — a figure-by-figure scan audit found
  all 14 crops present and correct (incl. S2-005 Figures 2–4; S2-042 genuinely has none).
- **Fix:** `tools/embed-figures.py` optimizes each asset (photos → JPEG, line art → palette
  PNG; 3.72 MB → 0.59 MB) and embeds it into the HTML as a base64 data URI. Every page now
  renders its graphs standalone; checker (`check-digital-test.mjs`) now FAILS on any relative
  asset reference and enforces per-page embedded-figure counts.
- **Verification:** 8/8 pages browser-checked at 1280 px + ~390 px — KaTeX renders, 14/14
  figures load, zero overflow, zero console errors; screenshots compared against scans.
- **Observations:** Fourth round confirming the same preference: the user judges the digital
  edition by fidelity to the printed page under real viewing conditions. Self-containment is
  now a hard property (each HTML file carries its own figures), matching the "repo is the
  durable backup" doctrine — single files survive any future viewing context.
- **Next suggested:** user verdict on the self-contained replicas; if approved, plan the
  rollout approach for the remaining 104 pages (still needs explicit user approval per scope
  rules) or move to PLAN Phase 7 dashboard work.

## 2026-09-04 — Digital Edition v3: full 112-page library

- Books/Digital restructured to mirror Raw/Formatted (<Subject>/<Chapter-Folder>/page-NNN.html).
- 104 pages generated by tools/gen-digital.mjs from the Formatted markdown; 8 hand-typeset
  exemplars preserved; index.html + manifest.json added.
- 96/96 figure slots embedded as data URIs from pixel-verified scan crops (subagent waves
  11-a..11-g2 + coordinator); per-chapter assets/ optimized (12.2 MB → ~4 MB).
- Gates: tools/check-digital.mjs --strict-figures ALL GREEN; agent-browser desktop+mobile
  sweep clean; viewer rebuilt as full library browser.

## 2026-10-09 — Phase 10 COMPLETE: Pakistan Studies Grade 12 digitized (128/128)

- Third book registered from FromSmash transfer BOOK-P-1-2-3-4-5-6: "Textbook of Pakistan
  Studies" Grade 12 (NBF/Federal Textbook Board, NCP 2022-23, First Edition June 2025,
  TEST EDITION) — batches P-0…P-6 = Front Matter + Units 01-06 (printed pp.6-127; Sections
  1-3 of the printed 6-section/234-page book; Units 07-12 await a future transfer).
- Converted in 14 coordinator-verified agent waves (24-a…37-c) + 2 test-first pages + 2
  coordinator-direct gaps; every page side-by-side vision QA'd against its scan before
  commit (folios, heading colours, bold runs, table numerals, figure blocks, mid-sentence
  continuity); safety-rhythm page-by-page worklog appends survived ~6 agent context deaths
  with zero orphaned work after wave 24.
- Coordinator QA fixes merged: printed-lead-in verb forms ('Answers…:' Tier A with colons
  kept), duplicate-print p.33 documented verbatim, restored dropped bold runs (Industrial,
  greenhouse effect, Volcanoes, copper/Gold/Chromite/Thar coal, jet stream), removed
  invented bolds (IT/NDMA), corrected map red-box micro-text at 3x, adjudicated disputed
  folios by crop (81, 91, 111), re-read rotated bar-chart labels (Fig-12.4: 5.1/11.1/14.4/0.1).
- v4.4 typo policy applied throughout: Tier A surface fixes + Tier B article insertions
  logged in CORRECTIONS-LOG §6 (~60 rows); Tier C values/dates/name-spellings kept verbatim
  + flagged (incl. '199' Kargil, 'West Pakistan…named Bangladesh', 'Peoples's', duplicate
  p.32 block on p.33, 'Huttar', 'Mukti Mukti Bahni').
- Unit-end conventions honoured: EXERCISE banners, MCQ option-label quirks kept verbatim,
  Learning Activities boxes, unit glossaries with empty write-in tables (row counts taken
  from print: 8/3/10/3 per unit), What-I-have-Learned boxes.
- Metadata regenerated (book.json/chapter.json/indexes/pakistan-studies.md); STATUS.md
  inventory extended with P-0…P-6. Gates: verify-v4 ALL GREEN 796/796 raw, 684/684
  markdown-only placed; check-digital --frozen --strict-figures ALL GREEN.
- Library: 796 pages across three books — Mathematics 317 + Statistics 351 + Pakistan
  Studies 128 (of the printed 234).
