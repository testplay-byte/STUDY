# Master Plan — Study Helper Planner

> Living document. Updated at the end of every phase. Last updated: Phase 1 kickoff.

## North Star

Build a complete digital knowledge base of our textbooks (book → chapter → exercise → page),
then build study-tooling on top of it. **GitHub is the permanent backup**: everything (data,
work logs, plans, prompts) is committed and pushed after every phase and every wave.

## Ground Rules

1. **Nothing is skipped.** Every page image must have exactly one Markdown counterpart.
2. **Fidelity first.** Transcription is verbatim; we never solve, correct, translate or summarize.
3. **Figures are sacred.** Graphs, diagrams, illustrations get detailed structured descriptions —
   losing them loses meaning.
4. **Traceability.** Every page keeps its image number ↔ printed page number ↔ file path mapping.
5. **Backup rhythm.** Commit + push after: repo skeleton, pipeline validation, each conversion wave, final audit.

---

## Phase 0 — Intake & Recon ✅ (done)

- [x] Received 4 zip archives (`M-0`, `M-1`, `S-0`, `S-1`) → unzipped to staging
- [x] Inventory: **62 pages**, JPEG, ~2300×3200 px, 0.7–1.6 MB each
  - M-0: 7 pages, M-1: 36 pages, S-0: 9 pages, S-1: 10 pages
- [x] Visual recon of key pages: identified both books (see README registry)
- [x] **Finding:** `S-1` is **Chapter 8 — Set Theory** of *Basic Statistics Part-II* (printed page №
  = image №, 1–10). User brief said "Statistics chapters 1 & 2"; the scans show Ch. 8. We digitize
  what is actually printed and flag it here.
- [x] **Finding:** `M-1` printed page № = image № + 6 (image 1 → printed 7, image 26 → printed 32).
- [x] GitHub access verified; repo `testplay-byte/STUDY` was empty → initialized here.

## Phase 1 — Digitization (current)

Goal: every one of the 62 pages becomes one faithful Markdown file with figures described,
tables as MD tables, math as LaTeX — stored book → chapter → exercise.

### 1.1 System setup
- [x] Repo skeleton: README / PLAN / CONVENTIONS / prompts / tools / data tree / indexes
- [ ] Push skeleton to GitHub

### 1.2 Pipeline validation (test-first, per user's instruction)
- [ ] Convert test set **M-1 images 25 & 26** (middle of unit; graphs + tables)
- [ ] Convert test set **S-1 image 3** (Venn diagrams, set notation)
- [ ] Convert test set **S-1 image 5** (user asked for "S-2 image 5"; S-2 does not exist —
      closest equivalent used; tree diagram + worked examples)
- [ ] Extra: **M-1 image 1** (chapter opener — validates `00-intro` placement)
- [ ] Side-by-side QA of all 5 tests; refine `tools/prompt.txt`; re-run if needed
- [ ] Push validated pipeline + test outputs

### 1.3 Mass conversion — 5-agent waves
Per user instruction: **five sub-agents working in parallel per wave.**

| Wave | Agents | Scope |
|------|--------|-------|
| 1 | A1–A5 | M-1 images 002–024, 027–036 (33 pages; skip tested 025/026) |
| 2 | B1–B5 | M-0 (7) + S-0 (9) + S-1 remainder (001–002, 004, 006–010 = 8) → 24 pages |

Each agent: read CONVENTIONS + worklog → convert → self-QA vs image → place file → append worklog.
Coordinator audits every wave (spot-check ≥ 20% of outputs), fixes deviations, pushes.

### 1.4 Close-out
- [ ] Page-count audit: raw vs processed (must be 62/62)
- [ ] Build/refresh `indexes/{M-0,M-1,S-0,S-1}.md`
- [ ] Refresh book READMEs with chapter/exercise maps
- [ ] Final worklog entry + final push

## Phase 2+ — Backlog (not started; planning placeholders)

- Figure extraction as standalone image assets (crop from scans) with links from Markdown
- Aggregated exercise views (all pages of an exercise merged into one document)
- Study tooling on top of the digital library (planner, quizzes, search)
- More books/chapters intake (same pipeline, same conventions)
