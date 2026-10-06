---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-9
chapter_folder: Chapter-16-Association
chapter_number: 16
chapter_title: "Association"
page_image: 21
page_printed: 305
section: null
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-16-Association/0021.jpg
converted_at: "2026-10-06"
converted_by: "agent-27b (glm-vision)"
notes: "Offset check: printed p.305 = image 21 + 284 (header folio, top-right; odd page; running head '[Chapter 16] Association' top-left = furniture). Example 16.19 complete on this page. Book print artifact preserved: in the computation table, row X=2/Y=33 has d printed '0.0.' with a stray trailing dot (pixel-verified by zoom crop). Totals row has no 'Total' label — leftmost cells empty, sum cell 'Σd²= 3' under the d² column (zoom-verified). Positive d values printed without '+' sign; negatives printed with minus sign. Tie ranks 4.5 (two 8's) and 2.5 (two 5's) as printed; Σd² = 3 and rs = 0.98 arithmetic cross-checked (consistent). No figures, no cut-offs."
---

# Page 21 — Association (Chapter 16)

> 📄 Original scan: [0021.jpg](../../../Raw/Statistics/Chapter-16-Association/0021.jpg) · printed page 305

**Example 16.19.**

The number of hours of study for an examination and the grades received by a random sample of 10 students are:

| Number of hours studied, X | 8 | 5 | 11 | 13 | 10 | 5 | 18 | 15 | 2 | 8 |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Grade in examination, Y | 56 | 44 | 79 | 72 | 70 | 54 | 94 | 85 | 33 | 65 |

Compute and interpret the Spearman's rank correlation coefficient.

**Solution:** The necessary calculations are given below.

| Number of hours studied (X) | Grade in examination (Y) | Rank of X | Rank of Y | $d = X - Y$ | $d^2$ |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 8 | 56 | 4.5 | 4 | 0.5 | 0.25 |
| 5 | 44 | 2.5 | 2 | 0.5 | 0.25 |
| 11 | 79 | 7 | 8 | -1.0 | 1.00 |
| 13 | 72 | 8 | 7 | 1.0 | 1.00 |
| 10 | 70 | 6 | 6 | 0.0 | 0.00 |
| 5 | 54 | 2.5 | 3 | -0.5 | 0.25 |
| 18 | 94 | 10 | 10 | 0.0 | 0.00 |
| 15 | 85 | 9 | 9 | 0.0 | 0.00 |
| 2 | 33 | 1 | 1 | 0.0. | 0.00 |
| 8 | 65 | 4.5 | 5 | -0.5 | 0.25 |
| | | | | | $\sum d^2 = 3$ |

$$\begin{aligned} \text{Spearman's rank correlation coefficient, } r_s &= 1 - \frac{6\sum d^2}{n(n^2 - 1)} = 1 - \frac{6(3)}{10(100 - 1)} = 1 - \frac{18}{990} \\ &= 1 - 0.02 = 0.98 \end{aligned}$$

$r_s = 0.98$, indicating strong positive correlation between the number of hours of study and the grade in examination.
