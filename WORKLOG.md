# WORKLOG — Study Helper Planner (repo-side master log)

> Append-only. Every agent appends the same section to this file AND to the local
> shared log (`/home/z/my-project/worklog.md`). Newest sections at the bottom.

---
Task ID: 0
Agent: coordinator (Z.ai main)
Task: Phase 0 recon + Phase 1 system setup (repo skeleton, conventions, pipeline tooling)

Work Log:
- Unzipped M-0 (7p), M-1 (36p), S-0 (9p), S-1 (10p) = 62 JPG pages (~2300×3200)
- Visual recon: identified both books; M-1 = Unit 01 "Functions and Graphs" (printed page = image + 6); S-1 = Chapter 8 "Set Theory" of Basic Statistics Part-II (printed page = image). User brief's "Statistics ch. 1–2" is actually Ch. 8 — flagged in PLAN.md
- Initialized repo `main`, wrote README, docs/PLAN.md, docs/CONVENTIONS.md, docs/prompts/vlm-image-to-markdown.md, tools/prompt.txt (master VLM prompt), tools/convert-page.mjs (+ README), .gitignore
- Copied all 62 raw images to data/raw/<BOOK>/NNNN.jpg (immutable originals)
- GitHub token configured locally only (never committed)

Stage Summary:
- System skeleton ready; pipeline validated next on M-1 p25/p26 + S-1 p3/p5 before mass conversion
- Binding docs for all agents: docs/CONVENTIONS.md + tools/prompt.txt

---
Task ID: 1-test
Agent: coordinator (Z.ai main)
Task: Phase 1.2 — pipeline validation on user-specified test pages

Work Log:
- Built tools/convert-page.mjs (vision API, auto-continue on truncation, retry/backoff)
- Converted test pages: M-1 img25 & img26 (user-specified), S-1 img3 (user-specified), S-1 img5 (user asked "S-2 img5"; S-2 does not exist in this batch — closest equivalent used), M-1 img1 (chapter opener extra)
- Multi-round QA of all 5 drafts against images: tables verbatim-correct, all figures captured (Venn ×4, tree diagram w/ 18 triples, trig graphs ×4, photos), LaTeX clean
- Caught & fixed: page_printed errors (17→31 on M-1 p25; 9→5 on S-1 p5 — printed digits cut off in scans); section fields under-filled → prompt v1.1 hardened (never guess page numbers; list all sections)
- Discovered API rate limit (~3 concurrent) → script now retries 429s with exponential backoff; agents must convert sequentially
- Placed 5 validated pages: M-1/unit-01/00-intro/{001,025,026}, S-1/chapter-08-set-theory/00-intro/{003,005}

Stage Summary:
- Pipeline VALIDATED. Prompt v1.1 + conventions §6/§7 updated with lessons learned.
- 5/62 pages digitized & placed. Ready for Wave 1 (M-1 remaining 33 pages, 5 agents).
