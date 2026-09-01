# STUDY — Study Helper Planner: Knowledge Base

Permanent backup & storage for the **Study Helper Planner** project. Everything lives here:
raw scans, digitized Markdown, work logs, plans, and prompts.

## 🎯 Current Phase: **Phase 1 COMPLETE ✅** — all 62 pages digitized (next: Phase 2 backlog)

All 62 scanned pages (M-0, M-1, S-0, S-1) are digitized into structured Markdown — one `.md` per
page, figures described in detail, tables as GFM tables, math in LaTeX. Per-book page maps: `indexes/`.

## 📚 Book Registry (identified so far)

| Code | Book | Pages | Content |
|------|------|-------|---------|
| `M-0` | Textbook of Mathematics, Grade 12 — National Book Foundation as Federal Textbook Board, Islamabad (Based on National Curriculum of Pakistan 2022-23) | 7 | Front matter ("zero chapter"): cover, book overview, chapter list |
| `M-1` | Same Mathematics book — **Unit 01: Functions and Graphs** | 36 | Full Unit 1 (printed pages 7–42), multiple exercises |
| `S-0` | Basic Statistics for Intermediate Classes, Part-II — Muhammad Saleem Akhtar, Majeed Book Depot (Federal Board) | 9 | Front matter ("zero chapter"): cover, preface, chapter list |
| `S-1` | Same Statistics book — **Chapter 8: Set Theory** | 10 | Full Chapter 8 (printed pages 1–10) incl. chapter exercise |

> ℹ️ S-1 was expected to contain "Chapters 1–2 of Statistics", but the scans show it is
> **Chapter 8 — Set Theory** of Basic Statistics Part-II. We always record what is **actually printed**
> on the pages; the discrepancy is noted in `docs/PLAN.md`.

## 📁 Repository Structure

```
STUDY/
├── README.md                  ← you are here
├── WORKLOG.md                 ← master work log (every agent appends here)
├── docs/
│   ├── PLAN.md                ← master plan: phases, waves, QC policy
│   ├── CONVENTIONS.md         ← folder/file naming, Markdown schema, QA checklist (READ FIRST)
│   └── prompts/               ← documented version of the master VLM prompt
├── tools/
│   ├── convert-page.mjs       ← VLM conversion script (image → Markdown)
│   └── prompt.txt             ← canonical conversion prompt (single source of truth)
├── data/
│   ├── raw/                   ← UNPROCESSED: scanned page images, by book
│   │   ├── M-0/0001.jpg … 
│   │   ├── M-1/0001.jpg …
│   │   ├── S-0/0001.jpg …
│   │   └── S-1/0001.jpg …
│   └── processed/             ← DIGITAL: one Markdown file per page, book → chapter → exercise
│       ├── M-0/front-matter/page-001.md …
│       ├── M-1/unit-01/{00-intro | exercise-1.x | 99-summary}/page-0NN.md
│       ├── S-0/front-matter/page-001.md …
│       └── S-1/chapter-08-set-theory/{00-intro | exercise}/page-0NN.md
└── indexes/
    ├── M-0.md  M-1.md  S-0.md  S-1.md   ← page map: image № → printed № → section/exercise → file
```

## 🔁 Digitization Pipeline

1. **Plan & conventions** (this repo's `docs/`)
2. **Convert**: page image → VLM (vision model) → Markdown draft via `tools/convert-page.mjs`
3. **QA round**: agent re-reads the image side-by-side with the draft, fixes any mismatch
4. **Place**: file stored under `data/processed/<book>/<chapter>/<exercise>/`
5. **Index & log**: page recorded in `indexes/<book>.md` + `WORKLOG.md`
6. **Backup**: commit & push to GitHub after every phase / wave

## 🔐 Credentials Policy

The GitHub token is configured **locally only** (git remote URL in `.git/config`) and is
**intentionally never committed** to this repository.

---
*Maintained by the Study Helper Planner digitization team (Z.ai agents + human oversight).*
