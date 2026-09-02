# tools/ — Digitization Tooling

## convert-page.mjs

Converts **one** page image to a Markdown draft using the vision model.
This is a *draft generator*: the converting agent must still run the §4 QA checklist
(side-by-side review against the image) and fix issues before accepting the file.

### Usage

```bash
cd <repo root>   # study-workspace/STUDY

bun tools/convert-page.mjs \
  --image data/raw/mathematics/M-1/0025.jpg \
  --book M-1 --page 25 --image-filename 0025.jpg \
  --out /tmp/drafts/page-025.md \
  --agent agent-A1 \
  --source-image-rel "../../../data/raw/mathematics/M-1/0025.jpg"
```

Workflow used by agents: **draft to a scratch dir first** (e.g. `/tmp/drafts/`), review,
fix, then save to the final conventioned path under `data/processed/`. (Scratch dirs are
gitignored.)

### Flags
| Flag | Meaning |
|------|---------|
| `--image` | raw scan path (input) |
| `--book` | book code (M-0/M-1/S-0/S-1) |
| `--page` | integer image number |
| `--image-filename` | filename used in the scan-link line |
| `--out` | draft output path |
| `--agent` | agent id for `converted_by` |
| `--source-image-rel` | relative path from final .md location to raw scan (per CONVENTIONS) |
| `--thinking` | optional: enable chain-of-thought (slower; use for very dense math pages) |

Truncated responses are auto-continued (up to 6 API rounds).
