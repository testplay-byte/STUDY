# tools/ — Digitization Tooling (structure v4)

Tool scripts for the STUDY library. Layout v4 (user directive, 2026-09-03):

```
Books/
├── Raw/<Subject>/<Original-Chapter-Name>/NNNN.jpg       # immutable scans
├── Formatted/<Subject>/Chapter-NN-<Title>/page-NNN.md   # canonical markdown (source of truth)
└── Digital/<Subject>/Chapter-NN-<Title>/page-NNN.html   # HTML test edition (generated)
```

`<Subject>` folders are TitleCase (`Mathematics`, `Statistics`); the frontmatter `subject:`
field stays a lowercase identifier. The batch code (`M-0`, `M-1`, `S-0`, `S-1`, `S-2`) is the
permanent join key across Raw / Formatted / Digital.

## convert-page.mjs

Converts **one** page image to a Markdown draft using the vision model.
This is a *draft generator*: the converting agent must still run the CONVENTIONS §4 QA
checklist (side-by-side review against the image) and fix issues before accepting the file.

### Usage (v4 layout)

```bash
cd <repo root>   # e.g. study-workspace/STUDY

bun tools/convert-page.mjs \
  --image Books/Raw/Mathematics/Unit-01-Functions-and-Graphs/0025.jpg \
  --batch M-1 --page 25 --image-filename 0025.jpg \
  --out /tmp/drafts/page-025.md \
  --agent agent-A1 \
  --source-image-rel "../../../Raw/Mathematics/Unit-01-Functions-and-Graphs/0025.jpg"
```

Workflow used by agents: **draft to a scratch dir first** (e.g. `/tmp/drafts/`), review, fix,
then save to the final conventioned path
`Books/Formatted/<Subject>/Chapter-NN-<Title>/page-NNN.md`. (Scratch dirs are outside the
repo / gitignored.)

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
| `--source-image-rel` | relative path from the final .md location to the raw scan — always `../../../Raw/<Subject>/<Chapter-Name>/NNNN.jpg` (3 ups: page → chapter → Formatted/<Subject> → Books) |
| `--thinking` | optional: enable chain-of-thought (slower; use for very dense math pages) |

Truncated responses are auto-continued (up to 6 API rounds); 429 rate-limits get exponential
backoff + jitter.

## build-metadata.mjs

Regenerates **all derived metadata** from the page frontmatter (pages are the single source of
truth):

- `Books/Formatted/<Subject>/book.json` — machine-readable book registry
- `Books/Formatted/<Subject>/<Chapter>/chapter.json` — per-chapter page map (consumed by tooling + future web dashboard)
- `indexes/<subject>.md` — human-readable page tables

```bash
bun tools/build-metadata.mjs   # run from repo root after ANY page add/edit
```

Never hand-edit those files. The book identity data (titles, publishers, chapter folder names,
raw folder names, printed page offsets) is maintained in the `BOOKS` constant at the top of the
script — update it there when registering a new chapter (see `docs/PIPELINE.md` §3).

## generate-digital.mjs

Generates the **HTML digital test pages** under `Books/Digital/` from the Formatted markdown.

- **Curated whitelist ONLY (user directive, 2026-09-03):** the `TEST_PAGES` constant at the top
  of the script lists exactly which pages get an HTML version — currently 8:
  `M-1` imgs 1, 23, 25 · `S-1` imgs 3, 5, 6 · `S-2` imgs 5, 42. Do not extend it without the
  user's OK. The script asserts the written set equals the whitelist exactly.
- **Flat layout:** `Books/Digital/<Subject>/page-<BATCH>-<NNN>.html` (e.g. `page-M1-025.html`,
  `page-S2-042.html`) — no chapter sub-folders, no `index.html` scaffolding. Batch codes
  disambiguate same-numbered pages across chapters.
- **Scan shown directly:** each page embeds the original scan image in a sticky pane (click →
  full resolution) beside the formatted transcription; Split / Scan / Text view toggle;
  stacked on mobile. KaTeX math with math-first extraction (GitHub-style precedence).
- **Test purposes only** (user directive): the canonical library stays `Books/Formatted/`.
  Never hand-edit the generated HTML; re-run the script instead.
- Requires `build-metadata.mjs` to have run first (consumes `book.json`/`chapter.json`).
- Run: `bun tools/generate-digital.mjs` (regenerates `Books/Digital/` from scratch each run).

## verify-v4.mjs / check-digital-links.mjs — integrity verifiers

```bash
bun tools/verify-v4.mjs            # tree shape, 112/112 counts, byte-verify every page vs git
                                   # HEAD (v3)+rewrites, frontmatter/link coherence
bun tools/check-digital-links.mjs  # every relative href/src in Books/Digital + indexes resolves
```

Run both after any structural change. CI-style rule: **no push with a failing verifier.**

## migrate-v4.mjs / fix-v4-casing.mjs

One-off migrations, kept for the audit trail:

- `migrate-v4.mjs` — v3 → v4 (2026-09-03): moved raw images to `Books/Raw/<Subject>/<original
  chapter name>/`, pages to `Books/Formatted/<Subject>/Chapter-NN-<Title>/`, rewrote
  `chapter_folder` + `source_image` + scan links, byte-verified vs git HEAD. **Do not run again**
  (refuses if `Books/` exists).
- `fix-v4-casing.mjs` — follow-up one-off: TitleCase book folders (`Mathematics`/`Statistics`)
  + path rewrite. **Do not run again.**
- `migrate-v3.mjs` — earlier v2 → v3 migration, kept for history.

## prompt.txt

The canonical VLM conversion prompt (single source of truth — `convert-page.mjs` reads it
directly). Frontmatter fields `subject`, `batch`, `chapter_folder`, `chapter_number`, … (schema
v3 fields, v4 path examples). Documented snapshot + changelog: `docs/prompts/vlm-image-to-markdown.md`.

## Dependencies

`package.json` pins `marked` (markdown → HTML for the Digital edition). Install with
`bun install` inside `tools/` if `node_modules/` is missing (gitignored).
