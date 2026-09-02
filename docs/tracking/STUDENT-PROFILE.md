# Student Profile — Study Helper Planner tracking

> **Purpose:** the single source of truth about the learner: what they study, what they are
> good at, what needs work, and what they aim for. The coordinator (and any future agent or
> the web dashboard) reads this to plan sessions and adapt content.
>
> **Update rules:**
> - Update whenever the user reports studying, difficulty, goals or preferences — and always
>   in the same commit that digitizes new content they will study from.
> - Every change gets a dated entry in `PROGRESS-LOG.md` (what changed & why).
> - Evidence-based only: record what was observed, not assumptions. "unknown" is a valid value.

## Learner snapshot

| Field | Value |
|-------|-------|
| Name/handle | (user hasn't provided — optional) |
| Grade / level | Grade 12 (Higher Secondary, Pakistani Federal Board curriculum implied by the books) |
| Active subjects | Mathematics, Statistics |
| Preferred language | English (books are in English) |
| Profile last updated | 2026-09-02 (initial skeleton — no study data yet) |

## Books in use

| Subject | Book | Parts digitized | Study status |
|---------|------|-----------------|--------------|
| Mathematics | Textbook of Mathematics Grade 12 (NBF Federal Textbook Board) | front matter (M-0), Unit 01 Functions and Graphs (M-1) | not started (no study data yet) |
| Statistics | Basic Statistics Part-II (Majeed Book Depot, Federal Board) | front matter (S-0), Ch. 8 Set Theory (S-1), Ch. 9 Probability (S-2) | not started (no study data yet) |

## Mastery map (per chapter)

Status values: `not-started` → `in-progress` → `reviewed` → `mastered`
Confidence: `low` / `medium` / `high` (set only after user evidence: quiz results, self-report, explained solutions)

| Subject | Chapter | Status | Confidence | Evidence / notes |
|---------|---------|--------|------------|------------------|
| Mathematics | Unit 01 — Functions and Graphs | not-started | — | none yet |
| Statistics | Ch. 08 — Set Theory | not-started | — | none yet |
| Statistics | Ch. 09 — Probability | not-started | — | none yet |

## Strengths

- _(none recorded yet)_

## Needs improvement

- _(none recorded yet)_

## Goals

- _(none recorded yet — e.g. target exam, target chapters by date, daily study load)_

## Preferences & constraints

- Content presentation: user prefers **chapter-level organization** (no per-exercise splitting) —
  this preference is baked into the library structure itself (CONVENTIONS v3).
- _(more preferences — session length, time of day, device — none recorded yet)_

## Open questions for the user

- Exam/board being prepared for, and target date?
- Which chapter is being studied right now?
- Any topics the user already knows are weak?
