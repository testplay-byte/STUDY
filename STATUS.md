# STATUS — live snapshot

> **Last updated: 2026-09-02** (structure v3 migration). Coordinator updates this after every
> task. New agents: if reality differs from this file, trust reality, then fix this file.

## One-line state

**Library v3 complete & pushed** — 112/112 pages digitized + restructured into flat chapter
folders; docs/tracking/metadata systems in place; **ready for the next batch or study use**.

## Library inventory

| Batch | Subject | Part folder | Pages | Printed range | Offset | Status |
|-------|---------|-------------|------:|---------------|--------|--------|
| M-0 | mathematics | `front-matter/` | 7 | (unnumbered) | — | ✅ digitized |
| M-1 | mathematics | `chapter-01-functions-and-graphs/` | 36 | 7–41 | +6 | ✅ digitized |
| S-0 | statistics | `front-matter/` | 9 | roman folios | — | ✅ digitized |
| S-1 | statistics | `chapter-08-set-theory/` | 10 | 1–10 | =image | ✅ digitized |
| S-2 | statistics | `chapter-09-probability/` | 50 | 11–60 | +10 | ✅ digitized |
| | | **Total** | **112** | | | **112 raw images ⇄ 112 .md pages ✓** |

Content mix: 32 theory · 28 worked-examples · 21 exercise · 16 front-matter · 12 mixed ·
2 summary · 1 chapter-opener — with **109 figures** preserved as structured descriptions.

## Done so far (condensed — details in WORKLOG.md / PLAN.md)

- Phase 0–1: M-0, M-1, S-0, S-1 digitized (62 pages), pipeline validated on user-named test
  pages (M-1 imgs 25/26, S-1 img 3, S-1 img 5).
- Phase 2: S-2 received as LimeWire E2E-encrypted zip → coordinator reverse-engineered the
  client crypto, downloaded & verified; 50 pages digitized (5-agent wave + coordinator finish
  through API-429 storms).
- Phase 3 (**this session**): **Structure v3** per user directives — flattened all
  exercise/section sub-folders into flat chapter pages; `books/` layout with per-book raw;
  frontmatter schema v3; generated `book.json`/`chapter.json`/per-subject indexes; wrote
  `AGENTS.md`, `STATUS.md`, `docs/PIPELINE.md`, tracking system (`docs/tracking/`);
  112/112 pages verified byte-identical through the migration.

## Next actions (queue)

1. **User input needed:** next batch(es) of book scans to digitize (same pipeline applies;
   batch codes continue: `M-2`, `S-3`, …).
2. **User input needed (M-1 cleanup):** user says Unit 01 contains **five exercises (1.1–1.5)**
   across its 36 pages and may share raw info to pin down exact boundaries. Current
   frontmatter records: Ex 1.1 @ img 8 · 1.2 @ img 18 · 1.3 @ img 24 · 1.4 @ img 30 ·
   Review Exercise @ imgs 34–36. When info arrives: fix `exercise:`/`section:` frontmatter +
   rerun `build-metadata.mjs`. **Never re-split folders (v3 rule).**
3. When the user starts studying: activate `docs/tracking/` (mastery map + progress log).
4. Future build-out (user vision): web dashboard to browse pages/chapters/questions and track
   progress — see PLAN.md Phase 6; data contracts (`book.json`/`chapter.json`) are ready.

## Known issues / watchlist

- `page_printed: null` on M-1 imgs 20, 22, 32, 33, 34, 36 + S-1 img 1 + most front matter —
  legitimate (no digit printed); do not invent numbers.
- S-2 odd-page running headers misprint "[Chapter 7]" — chapter is 9 everywhere in data ✓
  (audited). Keep it that way.
- Vision API rate-limits (~3 concurrent) — waves must run agents sequentially within each
  agent; expect 429 storms; convert-page.mjs backs off automatically.
- Task-tool agents can die mid-wave (context deadlines) — coordinator re-scopes `-v2` runs to
  missing pages; check page counts vs STATUS table after every wave.

## Environment notes

- Repo remote: `github.com/testplay-byte/STUDY` (branch `main`). PAT: user-provided in chat,
  local-only, never committed.
- Working clone lives at `/home/z/my-project/study-workspace/STUDY` (or re-clone per
  PIPELINE.md §0). Local shared agent log: `/home/z/my-project/worklog.md`.
