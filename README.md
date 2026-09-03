# STUDY — Study Helper Planner: Knowledge Base

Permanent home of the **Study Helper Planner** project: the user's school textbooks digitized
from scans into a structured Markdown library, plus the tracking data and documentation that
lets **any AI agent** (or the user, or a future web dashboard) pick up the project with full
context. The sandbox is disposable — **this repository is the project's memory.**

## 🎯 Current state: **Structure v4 complete** — 112/112 pages digitized & reorganized

Two books, five batches, 112 scanned pages → 112 faithful Markdown pages, now organized in the
three-branch **`Books/`** library (`Raw/` scans · `Formatted/` markdown · `Digital/` HTML test
edition). Every figure described in detail, every formula in LaTeX, every table as a GFM table,
every page traceable to its raw scan. Full status: [`STATUS.md`](STATUS.md).

## 🧭 Start here

| You are… | Read |
|----------|------|
| **An AI agent** (new session / fresh sandbox) | [`AGENTS.md`](AGENTS.md) — complete onboarding, then `STATUS.md` → `docs/` |
| The user (browsing) | `indexes/` for page tables, `Books/Formatted/` for content, `Books/Digital/` for the 8 HTML test pages, `STATUS.md` for progress |
| Building tooling / the web dashboard | `Books/Formatted/<Subject>/book.json` + `Books/Formatted/<Subject>/<Chapter>/chapter.json` (generated, stable contracts) |

## 📚 Library registry

| Subject | Book | Digitized |
|---------|------|-----------|
| Mathematics | *Textbook of Mathematics Grade 12* — National Book Foundation, Federal Textbook Board, Islamabad (National Curriculum of Pakistan 2022-23) | front matter (7) + **Unit 01: Functions and Graphs** (36) = **43 pages** |
| Statistics | *Basic Statistics for Intermediate Classes, Part-II* — M. Saleem Akhtar, Majeed Book Depot (Federal Board) | front matter (9) + **Ch. 8: Set Theory** (10) + **Ch. 9: Probability** (50) = **69 pages** |

> ℹ️ Scans are digitized **as printed**. The user's brief once said "Statistics chapters 1–2";
> the scans are actually Ch. 8 (Set Theory) & Ch. 9 (Probability) — recorded as printed, with
> the discrepancy flagged in `docs/PLAN.md`. S-2 running headers even misprint "[Chapter 7]" —
> known quirk, data records chapter 9.

## 📁 Repository structure (v4)

```
STUDY/
├── AGENTS.md  STATUS.md  WORKLOG.md  README.md
├── docs/
│   ├── CONVENTIONS.md          ← binding rules: naming, schemas, QA, quirks (v4)
│   ├── PIPELINE.md             ← runbook: batch intake → waves → audit (+ sandbox recovery)
│   ├── PLAN.md                 ← roadmap: done phases & future build-out
│   ├── prompts/                ← documented VLM prompt + changelog
│   └── tracking/               ← STUDENT-PROFILE.md + PROGRESS-LOG.md (learner data)
├── Books/
│   ├── Raw/                    ← original scans, folders named after the ORIGINAL chapter names
│   │   ├── Mathematics/Front-Matter/                 ← M-0 · 0001-0007.jpg
│   │   ├── Mathematics/Unit-01-Functions-and-Graphs/ ← M-1 · 0001-0036.jpg
│   │   ├── Statistics/Front-Matter/                  ← S-0 · 0001-0009.jpg
│   │   ├── Statistics/Chapter-08-Set-Theory/         ← S-1 · 0001-0010.jpg
│   │   └── Statistics/Chapter-09-Probability/        ← S-2 · 0001-0050.jpg
│   ├── Formatted/              ← canonical Markdown library (source of truth)
│   │   ├── Mathematics/
│   │   │   ├── book.json       ← machine-readable registry (generated)
│   │   │   ├── Chapter-00-Front-Matter/             ← M-0 · page-001..007.md (FLAT)
│   │   │   └── Chapter-01-Functions-and-Graphs/     ← M-1 · page-001..036.md (FLAT) + chapter.json
│   │   └── Statistics/
│   │       ├── book.json
│   │       ├── Chapter-00-Front-Matter/             ← S-0 · 9 pages
│   │       ├── Chapter-08-Set-Theory/               ← S-1 · 10 pages + chapter.json
│   │       └── Chapter-09-Probability/              ← S-2 · 50 pages + chapter.json
│   └── Digital/                ← HTML TEST EDITION (test purposes only, generated)
│       ├── Mathematics/        ← page-M1-001/023/025.html (curated test pages ONLY)
│       └── Statistics/         ← page-S1-003/005/006.html · page-S2-005/042.html
│                                  (each page shows the original scan directly + the formatted
│                                   transcription, with Split / Scan / Text views)
├── indexes/                    ← mathematics.md · statistics.md (generated page tables)
└── tools/                      ← convert-page.mjs · build-metadata.mjs · generate-digital.mjs
                                  · verify-v4.mjs · check-digital-links.mjs · prompt.txt
```

**Design rules (user directives):**
- **v3:** pages are FLAT inside their chapter folder — no exercise/section sub-folders;
  exercise & section identity lives in each page's frontmatter and in `chapter.json`.
- **v4:** `Books/` splits the library into **Raw** (original chapter names, immutable scans),
  **Formatted** (uniform numbered chapters `Chapter-NN-<Title>`, front matter = Chapter 00)
  and **Digital** (a *curated set of 8 HTML test pages* — scan shown directly beside the
  formatted transcription; explicitly test purposes only, never the whole library). The batch
  code (M-0…S-2) is the permanent join key across all three branches.

## 🔁 Digitization pipeline (summary)

1. **Conventions** — `docs/CONVENTIONS.md` is binding for every agent
2. **Intake & recon** — new scans → `Books/Raw/<Subject>/<Original-Chapter-Name>/`, identify book/chapter/offset
3. **Test-first** — 2–4 representative pages converted & QA'd before any mass run
4. **Convert** — `tools/convert-page.mjs` (VLM) → draft → side-by-side QA → place in `Books/Formatted/`
5. **Waves** — 5 parallel sub-agents for mass conversion; coordinator audits ≥ 20%
6. **Metadata** — `bun tools/build-metadata.mjs` regenerates book.json / chapter.json / indexes
7. **Digital test edition** — `bun tools/generate-digital.mjs` rebuilds `Books/Digital/` HTML
8. **Verify** — `bun tools/verify-v4.mjs` + `bun tools/check-digital-links.mjs` must pass
9. **Backup** — commit + push after every phase, wave and audit (GitHub is the only permanent home)

## 🔐 Credentials policy

The GitHub token is configured **locally only** (git remote URL in `.git/config`) and is
**intentionally never committed** to this repository.

---
*Maintained by the Study Helper Planner team (user + Z.ai coordinator + agent waves).*
