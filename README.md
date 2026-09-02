# STUDY — Study Helper Planner: Knowledge Base

Permanent home of the **Study Helper Planner** project: the user's school textbooks digitized
from scans into a structured Markdown library, plus the tracking data and documentation that
lets **any AI agent** (or the user, or a future web dashboard) pick up the project with full
context. The sandbox is disposable — **this repository is the project's memory.**

## 🎯 Current state: **Structure v3 complete** — 112/112 pages digitized & reorganized

Two books, five batches, 112 scanned pages → 112 faithful Markdown pages. Every figure
described in detail, every formula in LaTeX, every table as a GFM table, every page traceable
to its raw scan. Full status: [`STATUS.md`](STATUS.md).

## 🧭 Start here

| You are… | Read |
|----------|------|
| **An AI agent** (new session / fresh sandbox) | [`AGENTS.md`](AGENTS.md) — complete onboarding, then `STATUS.md` → `docs/` |
| The user (browsing) | `indexes/` for page tables, `books/` for content, `STATUS.md` for progress |
| Building tooling / the web dashboard | `books/<subject>/book.json` + `books/<subject>/<part>/chapter.json` (generated, stable contracts) |

## 📚 Library registry

| Subject | Book | Digitized |
|---------|------|-----------|
| Mathematics | *Textbook of Mathematics Grade 12* — National Book Foundation, Federal Textbook Board, Islamabad (National Curriculum of Pakistan 2022-23) | front matter (7) + **Unit 01: Functions and Graphs** (36) = **43 pages** |
| Statistics | *Basic Statistics for Intermediate Classes, Part-II* — M. Saleem Akhtar, Majeed Book Depot (Federal Board) | front matter (9) + **Ch. 8: Set Theory** (10) + **Ch. 9: Probability** (50) = **69 pages** |

> ℹ️ Scans are digitized **as printed**. The user's brief once said "Statistics chapters 1–2";
> the scans are actually Ch. 8 (Set Theory) & Ch. 9 (Probability) — recorded as printed, with
> the discrepancy flagged in `docs/PLAN.md`. S-2 running headers even misprint "[Chapter 7]" —
> known quirk, data records chapter 9.

## 📁 Repository structure (v3)

```
STUDY/
├── AGENTS.md  STATUS.md  WORKLOG.md  README.md
├── docs/
│   ├── CONVENTIONS.md          ← binding rules: naming, schemas, QA, quirks (v3)
│   ├── PIPELINE.md             ← runbook: batch intake → waves → audit (+ sandbox recovery)
│   ├── PLAN.md                 ← roadmap: done phases & future build-out
│   ├── prompts/                ← documented VLM prompt + changelog
│   └── tracking/               ← STUDENT-PROFILE.md + PROGRESS-LOG.md (learner data)
├── books/
│   ├── mathematics/
│   │   ├── book.json           ← machine-readable registry (generated)
│   │   ├── front-matter/       ← M-0 · page-001..007.md (FLAT)
│   │   ├── chapter-01-functions-and-graphs/  ← M-1 · page-001..036.md (FLAT) + chapter.json
│   │   └── raw/                ← M-0/0001-0007.jpg · M-1/0001-0036.jpg (immutable scans)
│   └── statistics/
│       ├── book.json
│       ├── front-matter/       ← S-0 · 9 pages
│       ├── chapter-08-set-theory/   ← S-1 · 10 pages + chapter.json
│       ├── chapter-09-probability/  ← S-2 · 50 pages + chapter.json
│       └── raw/                ← S-0/S-1/S-2 scans (69 images)
├── indexes/                    ← mathematics.md · statistics.md (generated page tables)
└── tools/                      ← convert-page.mjs · build-metadata.mjs · prompt.txt
```

**Design rule (user directive, v3): pages are FLAT inside their chapter folder.** No
exercise/section sub-folders — exercise & section identity lives in each page's frontmatter and
in `chapter.json`. Raw scans are kept immutable per batch, fully separated from the digital
pages, one level up (`raw/<BATCH>/`).

## 🔁 Digitization pipeline (summary)

1. **Conventions** — `docs/CONVENTIONS.md` is binding for every agent
2. **Intake & recon** — new scans → `books/<subject>/raw/<BATCH>/`, identify book/chapter/offset
3. **Test-first** — 2–4 representative pages converted & QA'd before any mass run
4. **Convert** — `tools/convert-page.mjs` (VLM) → draft → side-by-side QA → place
5. **Waves** — 5 parallel sub-agents for mass conversion; coordinator audits ≥ 20%
6. **Metadata** — `bun tools/build-metadata.mjs` regenerates book.json / chapter.json / indexes
7. **Backup** — commit + push after every phase, wave and audit (GitHub is the only permanent home)

## 🔐 Credentials policy

The GitHub token is configured **locally only** (git remote URL in `.git/config`) and is
**intentionally never committed** to this repository.

---
*Maintained by the Study Helper Planner team (user + Z.ai coordinator + agent waves).*
