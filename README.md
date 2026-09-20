# STUDY — Study Helper Planner: Knowledge Base

Permanent home of the **Study Helper Planner** project: the user's school textbooks digitized
from scans into a structured Markdown library, plus the tracking data and documentation that
lets **any AI agent** (or the user, or a future web dashboard) pick up the project with full
context. The sandbox is disposable — **this repository is the project's memory.**

## 🎯 Current state: **v4.3 markdown-only mode — 386/386 pages digitized — Mathematics book COMPLETE**

Two books, fifteen batches, **386 scanned pages → 386 faithful Markdown pages**, organized in
the three-branch **`Books/`** library (`Raw/` scans · `Formatted/` markdown · `Digital/` the
frozen 112-page generated replica edition of the legacy library). The Mathematics book is
**fully digitized**: front matter, Units 01–10, and Back Matter (answers, glossary, symbols,
index, about-authors). Statistics: front matter + Ch. 8–9; the remaining chapters are next.
Every figure described in detail, every formula in LaTeX, every table as a GFM table, every
page traceable to its raw scan. New books/chapters arrive in **markdown-only mode (v4.3)**.
Full status: [`STATUS.md`](STATUS.md).

## 🧭 Start here

| You are… | Read |
|----------|------|
| **An AI agent** (new session / fresh sandbox) | [`AGENTS.md`](AGENTS.md) — complete onboarding, then `STATUS.md` → `docs/` |
| The user (browsing) | `indexes/` for page tables, `Books/Formatted/` for content, `Books/Digital/` for the 8 hand-typeset replica pages, `STATUS.md` for progress |
| Building tooling / the web dashboard | `Books/Formatted/<Subject>/book.json` + `Books/Formatted/<Subject>/<Chapter>/chapter.json` (generated, stable contracts) |

## 📚 Library registry

| Subject | Book | Digitized |
|---------|------|-----------|
| Mathematics | *Textbook of Mathematics Grade 12* — National Book Foundation, Federal Textbook Board, Islamabad (National Curriculum of Pakistan 2022-23) | front matter (7) + **Unit 01: Functions and Graphs** (36, pp. 7–41) + **Unit 02: Limit, Continuity and Derivative** (46, pp. 43–88) + **Unit 03: Integration** (31, pp. 90–119) + **Unit 04: Differential Equations** (20, pp. 120–139) + **Unit 05: Kinematics of Motion in a Straight Line** (20, pp. 140–159) + **Unit 06: Analytical Geometry** (22, pp. 160–181) + **Unit 07: Conic Section** (48, pp. 182–229) + **Unit 08: Inverse Trigonometric Functions and Their Graphs** (32, pp. 230–261) + **Unit 09: Solution of Trigonometric Equations** (12, pp. 262–273) + **Unit 10: Numerical Methods** (16, pp. 274–288) + **Back Matter** (27, pp. 290–316: answers, glossary, symbols, index, about-authors) = **317 pages — BOOK COMPLETE ✅** |
| Statistics | *Basic Statistics for Intermediate Classes, Part-II* — M. Saleem Akhtar, Majeed Book Depot (Federal Board) | front matter (9) + **Ch. 8: Set Theory** (10) + **Ch. 9: Probability** (50) = **69 pages** · remaining Ch. 1–7 next (user-scheduled) |

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
│   │   ├── Mathematics/Unit-02…Unit-10/              ← M-2…M-10 · 046/031/020/020/022/048/032/012/016 imgs
│   │   ├── Mathematics/Back-Matter/                  ← M-BM · 0001-0027.jpg (answers · glossary · symbols · index)
│   │   ├── Statistics/Front-Matter/                  ← S-0 · 0001-0009.jpg
│   │   ├── Statistics/Chapter-08-Set-Theory/         ← S-1 · 0001-0010.jpg
│   │   └── Statistics/Chapter-09-Probability/        ← S-2 · 0001-0050.jpg
│   ├── Formatted/              ← canonical Markdown library (source of truth)
│   │   ├── Mathematics/
│   │   │   ├── book.json       ← machine-readable registry (generated)
│   │   │   ├── Chapter-00-Front-Matter/             ← M-0 · page-001..007.md (FLAT)
│   │   │   ├── Chapter-01…Chapter-10/               ← M-1…M-10 · FLAT page-NNN.md + chapter.json each
│   │   │   └── Chapter-99-Back-Matter/              ← M-BM · 27 pages (kind: back-matter)
│   │   └── Statistics/
│   │       ├── book.json
│   │       ├── Chapter-00-Front-Matter/             ← S-0 · 9 pages
│   │       ├── Chapter-08-Set-Theory/               ← S-1 · 10 pages + chapter.json
│   │       └── Chapter-09-Probability/              ← S-2 · 50 pages + chapter.json
│   └── Digital/                ← Digital Edition v3 (FROZEN at v4.3 — mirrors Raw/Formatted 1:1)
│       ├── <Subject>/<Chapter-Folder>/page-NNN.html ← 112 generated replica pages (legacy library only)
│       ├── index.html + manifest.json               ← library browser entry points
│       └── <…>/assets/                              ← 116 figure crops embedded from the raw scans
│                                  (new batches since v4.3 are markdown-only: no Digital twins)
├── indexes/                    ← mathematics.md · statistics.md (generated page tables)
└── tools/                      ← convert-page.mjs · build-metadata.mjs · verify-v4.mjs
                                  · check-digital.mjs · crop-figure.py · prompt.txt
```

**Design rules (user directives):**
- **v3:** pages are FLAT inside their chapter folder — no exercise/section sub-folders;
  exercise & section identity lives in each page's frontmatter and in `chapter.json`.
- **v4:** `Books/` splits the library into **Raw** (original chapter names, immutable scans),
  **Formatted** (uniform numbered chapters `Chapter-NN-<Title>`, front matter = Chapter 00,
  back matter = Chapter 99) and **Digital** (Digital Edition v3 — 112 generated replica pages
  of the legacy library, **FROZEN** since v4.3). The batch code (M-0…M-BM, S-0…S-2) is the
  permanent join key across all three branches.

## 🔁 Digitization pipeline (summary)

1. **Conventions** — `docs/CONVENTIONS.md` is binding for every agent
2. **Intake & recon** — new scans → `Books/Raw/<Subject>/<Original-Chapter-Name>/`, identify book/chapter/offset
3. **Test-first** — 2–4 representative pages converted & QA'd before any mass run
4. **Convert** — controlled sequential pipeline: `tools/convert-page.mjs` (VLM) in foreground
   batches of 3–4 → coordinator reviews every draft against its scan → place in `Books/Formatted/`
5. **Audit** — full-batch integrity sweep (frontmatter, `$` parity, figure-block parity, offsets)
6. **Metadata** — `bun tools/build-metadata.mjs` regenerates book.json / chapter.json / indexes
7. **Verify** — `bun tools/verify-v4.mjs` + `node tools/check-digital.mjs --frozen
   --strict-figures` must pass (v4.3: Digital layer frozen, markdown-only batches expected)
8. **Backup** — commit + push after every phase, wave and audit (GitHub is the only permanent home)

## 🔐 Credentials policy

The GitHub token is configured **locally only** (git remote URL in `.git/config`) and is
**intentionally never committed** to this repository.

---
*Maintained by the Study Helper Planner team (user + Z.ai coordinator + agent waves).*
