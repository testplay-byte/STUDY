---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-9
chapter_folder: Chapter-16-Association
chapter_number: 16
chapter_title: "Association"
page_image: 20
page_printed: 304
section: null
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-16-Association/0020.jpg
converted_at: "2026-10-06"
converted_by: "agent-27b (glm-vision)"
notes: "Offset check: printed p.304 = image 20 + 284 (header folio, top-left; even page; running head 'Basic Statistics Part-II ( Federal Board )' top-right = furniture). Two worked examples (16.17 complete + 16.18 complete with 'Ans:'); no printed section headings (16.17/16.18 are example numbers, not sections) → section: null. Book quirk preserved: 'between students midterm averages' printed without apostrophe; interpretation prints 'final-examination score' hyphenated. Example 16.18 table has a two-level spanning header ('Ranks' over the two rank columns) — GFM flattening keeps both header rows and all 6 columns. All rank/d² arithmetic cross-checked against data (consistent; Σd² = 20 and 8 as printed). No figures, no cut-offs. | TYPO-CORRECTION PASS (2026-10-06, user mandate): unambiguous surface typo(s) corrected in the body per correction policy v4.4 — printed forms remain documented earlier in this note and itemised in docs/tracking/CORRECTIONS-LOG.md."
---

# Page 20 — Association (Chapter 16)

> 📄 Original scan: [0020.jpg](../../../Raw/Statistics/Chapter-16-Association/0020.jpg) · printed page 304

**Example 16.17.**

A Statistics instructor wants to know whether there is a correlation between students' midterm averages and their final examination scores. The instructor takes a random sample of nine students from previous Statistics courses and obtains the following data:

| Midterm average X | 72 | 96 | 86 | 77 | 67 | 92 | 90 | 74 | 60 |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Final examination score Y | 49 | 97 | 80 | 73 | 71 | 86 | 95 | 48 | 52 |

(i) Determine the rank correlation coefficient, $r_s$, of the data.

(ii) Interpret the value of $r_s$ obtained in part (i).

**Solution:** The necessary calculations are given below.

| Midterm average (X) | Final examination score (Y) | Rank of X | Rank of Y | $d = X - Y$ | $d^2$ |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 72 | 49 | 3 | 2 | +1 | 1 |
| 96 | 97 | 9 | 9 | 0 | 0 |
| 86 | 80 | 6 | 6 | 0 | 0 |
| 77 | 73 | 5 | 5 | 0 | 0 |
| 67 | 71 | 2 | 4 | -2 | 4 |
| 92 | 86 | 8 | 7 | +1 | 1 |
| 90 | 95 | 7 | 8 | -1 | 1 |
| 74 | 48 | 4 | 1 | +3 | 9 |
| 60 | 52 | 1 | 3 | -2 | 4 |
| | | | | | $\sum d^2 = 20$ |

(i) $r_s = 1 - \frac{6\sum d^2}{n(n^2 - 1)} = 1 - \frac{6(20)}{9(81 - 1)} = 1 - 0.17 = 0.83$

(ii) The rank correlation coefficient, $r_s = 0.83$ suggests that there is a strong positive correlation between midterm average and final-examination score in Statistics courses.

**Example 16.18.**

Find Spearman's rank correlation coefficient for the following data.

| a | 4.7 | 2.9 | 6.4 | 2.5 | 4.9 |
| :--- | :---: | :---: | :---: | :---: | :---: |
| b | 8.6 | 5.4 | 6.2 | 4.8 | 8.3 |

**Ans:** The necessary calculations are given below:

| | | Ranks | | | |
| :--- | :--- | :--- | :--- | :--- | :--- |
| a | b | a | b | $d = a - b$ | $d^2$ |
| 4.7 | 8.6 | 3 | 5 | -2 | 4 |
| 2.9 | 5.4 | 2 | 2 | 0 | 0 |
| 6.4 | 6.2 | 5 | 3 | +2 | 4 |
| 2.5 | 4.8 | 1 | 1 | 0 | 0 |
| 4.9 | 8.3 | 4 | 4 | 0 | 0 |
| | | | | | $\sum d^2 = 8$ |

$$\begin{aligned} \text{Spearman's Rank Correlation Coefficient} &= r_s = 1 - \frac{6\sum d^2}{n(n^2 - 1)} = 1 - \frac{6(8)}{5(25 - 1)} = 1 - \frac{48}{120} \\ &= 1 - 0.4 = 0.6 \end{aligned}$$
