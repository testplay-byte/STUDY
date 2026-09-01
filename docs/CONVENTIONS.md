# Conventions — READ BEFORE ANY CONVERSION WORK

These rules are **binding** for every agent converting pages. Consistency here is what makes
the library usable later. If you ever hit a case not covered here, decide conservatively,
document the decision in the page's `notes:` frontmatter field, and report it in the worklog.

---

## 1. Codes & Naming

### Book codes
`M-0`, `M-1`, `S-0`, `S-1` (more will come: `M-2`, `S-2`, …).
- `X-0` = front matter of book X ("zero chapter": cover, overview, chapter list).
- `X-n` = chapter/unit *n* scans of book X.

### Page images (raw, immutable)
- Location: `data/raw/<BOOK>/NNNN.jpg` — **never modify, rename or delete** raw images.
- `NNNN` is the zero-padded image number (1–4 digits) from the original scan set.

### Markdown output (processed)
- Location: `data/processed/<BOOK>/<chapter-folder>/<content-folder>/page-<NNN>.md`
  where `<NNN>` = the same image number, zero-padded to 3 digits (`page-025.md`).
- **One Markdown file per page image. Never merge or split pages.**

### Chapter folders (processed only)
| Book | Chapter folder |
|------|----------------|
| M-0 / S-0 (front matter) | `front-matter/` |
| M-1 | `unit-01/` (pattern: `unit-0N`) |
| S-1 | `chapter-08-set-theory/` (pattern: `chapter-<NN>-<kebab-slug-of-printed-title>`) |

### Content folders inside a chapter
| Content | Folder | Use when |
|---------|--------|----------|
| Chapter opener / theory before first exercise | `00-intro/` | opener pages, learning objectives, theory sections |
| Numbered exercise | `exercise-<ch>.<n>/` e.g. `exercise-1.1`, `exercise-1.2` | pages whose dominant content is that exercise |
| Single unnumbered chapter exercise | `exercise/` | e.g. S-1 "Set Theory" end-of-chapter questions |
| Chapter summary / misc back-matter | `99-summary-misc/` | summaries, formula sheets, non-exercise end pages |

**Placement rule:** a page goes to the folder of the content that occupies the *majority* (or
first major block) of the page. A page continuing Exercise 1.1 from the previous page belongs
to `exercise-1.1` even if a new theory section starts at the very bottom. Record boundary
details in frontmatter (`section_next:`, `notes:`).

---

## 2. Markdown Page Schema

### 2.1 YAML frontmatter (every file, exact fields)

```yaml
---
book: M-1                              # book code
book_title: "Textbook of Mathematics Grade 12 — National Book Foundation, Federal Textbook Board, Islamabad"
page_image: 25                         # integer image number (from raw filename)
page_printed: 31                       # integer printed page number; null if not printed on page
chapter: 1                             # integer chapter/unit number; null for front matter
chapter_title: "Functions and Graphs"  # exact printed title; null for front matter
section: "1.11 Domain and Range of Transcendental Functions through Graphs"  # main section(s) on page; null if none
exercise: "1.1"                        # exercise id on this page; null if none
content_type: theory                   # front-matter | chapter-opener | theory | worked-examples | exercise | mixed | summary
has_figures: true                      # any figure/graph/diagram/illustration/photo on page?
figures_count: 2                       # integer count
source_image: "../../../data/raw/M-1/0025.jpg"   # relative link from the .md file to the raw scan
converted_at: "2026-01-01"             # ISO date
converted_by: "agent-A1 (glm-vision)"  # agent id + engine
notes: ""                              # anomalies, boundary cases, illegible spots; "" if none
---
```

### 2.2 Body skeleton

```markdown
# Page 25 — Functions and Graphs (Unit 01)

> 📄 Original scan: [0025.jpg](../../../data/raw/M-1/0025.jpg) · printed page 31

<!-- faithful transcription of the page content, in original reading order -->

## Figures on this page

### Figure F1 — spring oscillation illustration (top right, beside §1.11 text)
- **Type:** illustration
- **Caption/Number:** (none printed)
- **Description:** five snapshots (numbered 1–5) of a weight on a spring at different phases of
  oscillation, followed by a large sine-like curve sweeping right, showing the traced motion…
- **Mathematical meaning:** visualizes simple harmonic motion whose position-vs-time graph is a
  sine/cosine curve.
```

Rules:
- `# Page <image №> — <chapter/section context>` as the H1.
- The scan-link blockquote right under H1 (compute the correct relative path!).
- Body = faithful transcription in reading order.
- Every figure gets a `### Figure F<k>` block **in a "Figures on this page" section** AND is
  referenced inline at its location with `[Figure F1]` so position is never lost.

## 3. Transcription Rules (binding)

1. **Verbatim fidelity.** Transcribe all instructional text exactly. Do not solve, simplify,
   correct, translate, summarize, or add interpretations. Preserve original spelling.
2. **Math = LaTeX.** Inline `$...$`, display `$$...$$`. Use proper commands (`\theta`, `\neq`,
   `\in`, `\subseteq`, `\cup`, `\cap`, `\times`, `\phi`, `\bar{A}`, `\frac{a}{b}`, `\binom{n}{r}`,
   `^nP_r`, `\ldots`). Preserve equation numbering like `(1)`, `(viii)`.
3. **Tables = GFM tables.** Exact cell values, caption/number above as bold text
   (e.g. `**Table 1.3 — values of sinθ and cosθ**`). Wide tables: keep all columns anyway.
4. **Figures/graphs/diagrams/photos are NEVER skipped.** For each: type, caption/number,
   exhaustive description (axes, labels, scales, ticks, curves & their shape/direction, marked
   points, shading, legend, colors, annotations), then one line `**Mathematical meaning:**`.
   Examples from our books: Venn diagrams with shaded regions; sin/cos/tan/sec graphs; tree
   diagrams; spring-oscillation illustration; cover photos.
5. **Exercise numbering exact.** `Q.1`, `(i)`, `(viii)`, options `A)`, `B)`… as printed.
   Never renumber. MCQ options as a list; sub-parts nested with indentation.
6. **Headers/footers are page furniture** → frontmatter + the H1/scan-line, not body paragraphs
   (e.g. "UNIT-01: FUNCTIONS AND GRAPHS", "GRADE 12", "National Book Foundation", printed page №,
   running headers like `[Chapter 8] Set Theory`, navigation chips like `← 08 →`).
7. **Colors/highlights:** if a heading or box is visually distinguished (colored box, bold),
   keep it as bold/blockquote so emphasis survives.
8. **Illegible text:** transcribe best guess + `[illegible]`, and add details to `notes:`.
9. **Multi-column:** read column 1 fully, then column 2 (textbook is mostly single-column).
10. **No truncation.** If output risks length, keep going — the script auto-continues.

## 4. QA Checklist (agent self-review, every page — mandatory second pass)

- [ ] Read the generated `.md` **and** the image side-by-side (use the Read tool on both).
- [ ] Every paragraph/line on the image exists in the `.md` (no skips, no merges).
- [ ] Every table row/column value matches; header row correct.
- [ ] Every figure/graph has an F-block; count matches `figures_count`.
- [ ] Math renders: balanced `$`, valid LaTeX commands.
- [ ] Frontmatter complete and correct (esp. `page_printed`, `section`, `exercise`,
      `content_type`, `source_image` relative path resolves).
- [ ] File saved at the correct conventioned path; `page-0NN.md` number = image number.
- [ ] Exercise boundary: if exercise X starts mid-page, page goes to the *majority* content
      folder; boundary noted in `notes:`.

## 5. Git & Logging Rules

- Agents **never** git-commit/push (coordinator does, to avoid conflicts).
- Every agent appends its section — identical content — to **both**:
  1. `/home/z/my-project/worklog.md` (local shared log), and
  2. `<repo>/WORKLOG.md` (repo log that gets pushed to GitHub)
  using the exact section template: `---` / `Task ID:` / `Agent:` / `Task:` / `Work Log:` / `Stage Summary:`.
- Report per-page status lines in the worklog: `page-0NN → <final path> ✔ (printed p.N, §…, ex…)`.

## 6. Known Quirks (from recon)

- M-1 printed page № = image № **+ 6**. S-1 printed page № = image № exactly (1–10).
- M-1 running header: `UNIT-01: FUNCTIONS AND GRAPHS`; footer: `GRADE 12 · <page> · National Book Foundation`.
- S-1 running header: `[Chapter 8] Set Theory` + page №, or `Basic Statistics Part-II (Federal Board)` + page №.
- S-1 chapter ends with a `← 08 →` navigation chip — it is page furniture.
- Scans are slightly skewed/aged (esp. S-1); expect some noise marks — don't transcribe scan
  artifacts (dots, speckles) as content.
