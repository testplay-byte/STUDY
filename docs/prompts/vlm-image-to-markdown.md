# Master VLM Prompt — Image → Markdown

> **Canonical source:** `tools/prompt.txt` (the script reads that file directly — edit there).
> This document snapshots the approach for review/history.

## Design rationale

- **Verbatim engine persona** — the model is told to never solve/correct/summarize. This fights
  the biggest digitization risk: the model "helpfully" rewriting textbook content.
- **Frontmatter-first** — structured metadata (page numbers, chapter, exercise, figure count)
  makes every page queryable later.
- **Figures are sacred** — explicit block format with type/caption/description/mathematical
  meaning, plus an inline `[Figure Fk]` marker at the figure's reading-flow position. Loss of
  graphs (sin/cos plots, Venn diagrams, tree diagrams) is what would make the digital library
  useless, so this is the most detailed rule.
- **LaTeX everywhere** — normalized math so future tooling (rendering, search, quiz generation)
  can rely on it.
- **Page furniture separation** — running headers/footers/page numbers stay out of the body and
  live in frontmatter/H1/scan-line.
- **Anti-truncation** — the conversion script auto-continues on `finish_reason=length`.

## Snapshot

See `tools/prompt.txt` for the operative text (Parts: frontmatter schema, body structure,
11 transcription rules, self-check).

## Changelog

| Date | Change | Reason |
|------|--------|--------|
| Phase 1 kickoff | v1 created | initial design |
| Post test-round | v1.1: page_printed "never guess" rule; section completeness rule | test QA caught wrong page numbers (17→31, 9→5) and under-filled section fields |
