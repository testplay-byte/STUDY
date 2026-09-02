# tools/ — Digitization Tooling

## convert-page.mjs

Converts **one** page image to a Markdown draft using the vision model.
This is a *draft generator*: the converting agent must still run the CONVENTIONS §4 QA
checklist (side-by-side review against the image) and fix issues before accepting the file.

### Usage (v3 layout)

```bash
cd <repo root>   # e.g. study-workspace/STUDY

bun tools/convert-page.mjs \
  --image books/mathematics/raw/M-1/0025.jpg \
  --batch M-1 --page 25 --image-filename 0025.jpg \
  --out /tmp/drafts/page-025.md \
  --agent agent-A1 \
  --source-image-rel "../raw/M-1/0025.jpg"
```

Workflow used by agents: **draft to a scratch dir first** (e.g. `/tmp/drafts/`), review, fix,
then save to the final conventioned path `books/<subject>/<part>/page-NNN.md`. (Scratch dirs
are outside the repo / gitignored.)

### Flags
| Flag | Meaning |
|------|---------|
| `--image` | raw scan path (input) |
| `--batch` | batch code (`M-0`/`M-1`/… ; `--book` still accepted as a v2 alias) |
| `--subject` | optional; auto-resolved from the batch prefix (`M-*`→mathematics, `S-*`→statistics) when omitted |
| `--page` | integer image number |
| `--image-filename` | filename used in the scan-link line |
| `--out` | draft output path |
| `--agent` | agent id for `converted_by` |
| `--source-image-rel` | relative path from final .md location to raw scan — always `../raw/<BATCH>/NNNN.jpg` |
| `--thinking` | optional: enable chain-of-thought (slower; use for very dense math pages) |

Truncated responses are auto-continued (up to 6 API rounds); 429 rate-limits get exponential
backoff + jitter.

## build-metadata.mjs

Regenerates **all derived metadata** from the page frontmatter (pages are the single source of
truth):

- `books/<subject>/book.json` — machine-readable book registry
- `books/<subject>/<part>/chapter.json` — per-part page map (consumed by tooling + future web dashboard)
- `indexes/<subject>.md` — human-readable page tables

```bash
bun tools/build-metadata.mjs   # run from repo root after ANY page add/edit
```

Never hand-edit those files. The book identity data (titles, publishers, chapter slugs, printed
page offsets) is maintained in the `BOOKS` constant at the top of the script — update it there
when registering a new part (see `docs/PIPELINE.md` §3).

## migrate-v3.mjs

One-off migration (v2 → v3 layout, 2026-09-02), kept for the audit trail. Documents the user
directives behind v3 and the exact transformations applied. **Do not run again** (it refuses if
`books/` exists).

## prompt.txt

The canonical VLM conversion prompt (single source of truth — `convert-page.mjs` reads it
directly). Schema v3: frontmatter fields `subject`, `batch`, `chapter_folder`, `chapter_number`.
Documented snapshot + changelog: `docs/prompts/vlm-image-to-markdown.md`.
