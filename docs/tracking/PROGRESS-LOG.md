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
