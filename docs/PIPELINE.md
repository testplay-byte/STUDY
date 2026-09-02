# Pipeline — How We Digitize a New Batch (runbook)

> This is the operational runbook. Rules & schemas live in `docs/CONVENTIONS.md` (binding).
> Current status lives in `STATUS.md`. History lives in `WORKLOG.md`.

## 0. Sandbox recovery (fresh agent, wiped sandbox)

1. Clone: `git clone https://github.com/testplay-byte/STUDY.git` (PAT provided by the user in
   the conversation — configure it locally, **never commit it**; see §6).
2. Read, in order: `AGENTS.md` → `STATUS.md` → `docs/CONVENTIONS.md` → this file → tail of
   `WORKLOG.md`.
3. Verify clone matches `STATUS.md` counts:
   `find books -name 'page-*.md' | wc -l` and `bun tools/build-metadata.mjs` (should be a no-op
   diff). If mismatch → stop, investigate `WORKLOG.md` before touching anything.

## 1. Intake (new batch arrives)

1. Get the scan package from the user (zip link / files). Download **to staging only**
   (`study-workspace/staging/`, gitignored — zips are never committed).
2. Unzip → expect JPEGs, usually renamed `0001.jpg … NNNN.jpg` (rename zero-padded 4-digit if
   needed, preserving original order).
3. Do NOT convert anything yet.

## 2. Recon (never skip)

Peek at: first page (opener), a middle theory page, the last 2–3 pages, any page with dense
math/tables/figures. Determine and record:

- [ ] Which book / subject / chapter this really is (**what is printed wins over the user's
      brief — flag mismatches, see S-1 story: "chapters 1–2" were actually Ch. 8**).
- [ ] Printed page № of first + last image → printed-page offset (e.g. M-1: +6, S-2: +10).
- [ ] Content boundaries: theory pages, MCQ/short-question/exercise start pages.
- [ ] Book quirks: running headers, misprints, navigation chips, two-column sections.
- [ ] Allocate the batch code: `<subject letter>-<next n>` (next chapter package of that book).

Append a recon section to `WORKLOG.md` before converting anything.

## 3. Register the batch

1. `mkdir -p books/<subject>/raw/<BATCH>` → copy all images there (immutable originals).
2. Add the new part to `tools/build-metadata.mjs` → `BOOKS.<subject>.parts` (folder slug from
   the printed title: `chapter-<NN>-<kebab-slug>`; label like "Unit 01" goes in `chapter_label`;
   `printed_page_offset` from recon).
3. Create `books/<subject>/<part>/` (empty is fine until pages arrive).
4. Commit + push (skeleton first, so a crash never loses the raw images).

## 4. Test-first (user's standing directive)

Before any mass conversion:

1. Convert 2–4 representative pages (include any the user explicitly names; one opener + one
   dense math/figure page is a good default) using:
   `bun tools/convert-page.mjs --image books/<subject>/raw/<BATCH>/NNNN.jpg --batch <BATCH> ...`
   (see `tools/README.md` for all flags; draft to a scratch dir first).
2. QA each draft against its image (CONVENTIONS §4 checklist). Fix issues. Refine
   `tools/prompt.txt` ONLY if the model itself misbehaved — prompt changes are logged in
   `docs/prompts/vlm-image-to-markdown.md` changelog.
3. Place the passing files at `books/<subject>/<part>/page-NNN.md`.
4. Commit + push (validated pipeline + test outputs).

## 5. Mass conversion — 5-agent wave (user's standing directive)

1. Split pages into 5 roughly equal sequential ranges (agent-1 … agent-5; test pages already
   done are excluded).
2. Launch all 5 sub-agents **in parallel**. Each agent prompt MUST include:
   - Task ID (wave-scoped, e.g. `4-M2a`…`4-M2e`);
   - "Read `/home/z/my-project/worklog.md` first, then repo `AGENTS.md` +
     `docs/CONVENTIONS.md`" (with the repo local path);
   - Its exact page range + the batch code + subject + part folder + printed-page offset +
     known quirks (copy the relevant §6 lines into the prompt);
   - The rule: **pages FLAT in the part folder — never create sub-folders**;
   - Sequential one-page-at-a-time conversion; QA checklist per page; place files directly;
   - Append the worklog section (both logs) at the end — even if it died mid-run, note
     partial completion in the coordinator log.
3. Coordinator monitors; if an agent dies (Task-tool timeouts are normal), relaunch a `-v2`
   scoped to the missing pages only.

## 6. Coordinator audit & finish

1. Count audit: `# pages == # raw images` for the batch.
2. Spot-check ≥ 20 % of new pages against images; 100 % re-check of any page converted during
   API-429 storms.
3. Integrity sweep: frontmatter complete on every file; `$` balance; `figures_count` ==
   F-blocks; every `source_image` resolves; no page uses a sub-folder.
4. `bun tools/build-metadata.mjs` (regenerates book.json / chapter.json / indexes).
5. Update `STATUS.md`, `README.md` (counts), `docs/PLAN.md` (checklist), `WORKLOG.md`
   (final section), then **commit + push**.

## 7. Tracking upkeep (every phase)

If the user studied anything / gave feedback about difficulty, gaps or goals:
update `docs/tracking/STUDENT-PROFILE.md` and append a dated entry to
`docs/tracking/PROGRESS-LOG.md` in the same commit.

## 8. Conversion command cheat-sheet

```bash
# one page (draft to scratch, review, then place)
bun tools/convert-page.mjs \
  --image books/mathematics/raw/M-1/0025.jpg \
  --batch M-1 --page 25 \
  --out /tmp/drafts/page-025.md \
  --agent agent-A1 \
  --source-image-rel "../raw/M-1/0025.jpg"

# regenerate all metadata + indexes after any page change
bun tools/build-metadata.mjs
```

`convert-page.mjs` flags: `--thinking` for very dense math pages; auto-continue handles
truncation; backoff handles 429 storms (agents still work sequentially).
