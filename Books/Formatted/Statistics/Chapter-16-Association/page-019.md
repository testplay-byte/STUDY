---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-9
chapter_folder: Chapter-16-Association
chapter_number: 16
chapter_title: "Association"
page_image: 19
page_printed: 303
section: 16.19. RANK CORRELATION:
exercise: null
content_type: mixed
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-16-Association/0019.jpg
converted_at: "2026-10-06"
converted_by: "agent-27b (glm-vision)"
notes: "Offset check: printed p.303 = image 19 + 284 (header folio, top-right; odd page; running head '[Chapter 16] Association' top-left = furniture). Content: tail of Example 16.15 (critical region + conclusion) + theory 16.19 + Example 16.16 complete → mixed. ANOMALY: the Chi-square calculation table sliced at the bottom of printed p.302 (see page-018 note) is NOT resumed at the top of this page — the printed page opens directly with '(v) Critical region'; the cut-off row and totals row are lost between the two scans and NOT reconstructed. Printed χ² = 32.15 in the conclusion preserved verbatim; note the five term-rows visible on p.302 sum to 27.56, so the printed total does not reconcile with the visible rows (book arithmetic as printed; cut-off sixth row unreadable, not guess-filled). Book typo preserved: stray '=' printed before (6 + 7 + 8)/3 in the tied-ranks sentence ('we assign each the rank = (6 + 7 + 8)/3 = 7'). No figures."
---

# Page 19 — Association (Chapter 16)

> 📄 Original scan: [0019.jpg](../../../Raw/Statistics/Chapter-16-Association/0019.jpg) · printed page 303

(v) **Critical region:** Here, d.f. = $(r - 1)(c - 1) = (3 - 1)(2 - 1) = 2$

$\chi^2 > \chi^2_{0.05(2)} = 5.991$

(vi) **Conclusion:** Since the calculated value of $\chi^2 = 32.15$ falls in the critical region, so we reject our null hypothesis at 5% level of significance. On the basis of evidence we may conclude that there is association between the intelligence levels of fathers and sons. Intelligent fathers have usually intelligent sons.

## 16.19. RANK CORRELATION:

We are often confronted with situations where the basic data are not available in numerical magnitudes but where the rankings can be developed and used to examine the relationship between data sets. To calculate the Spearman's rank correlation coefficient, we first rank the X's among themselves, giving rank 1 to the largest or smallest value, rank 2 to the second largest or second smallest, and so on; then we rank the Y's similarly among themselves. The Spearman's rank correlation coefficient, $r_s$, is given by the following formula

$$r_s = 1 - \frac{6\sum d^2}{n(n^2 - 1)}$$

where $d$ = difference between the ranks for the paired observations, $n$ = number of paired observations

When there are tied observations, the mean rank is given to each observation in the set of ties. For example, if the fourth and fifth largest values of a variable are the same, we assign each the rank $(4 + 5)/2 = 4.5$, and if the sixth, seventh and eighth largest values of a variable are the same, we assign each the rank $= (6 + 7 + 8)/3 = 7$. The possible range of values for Spearman's rank correlation coefficient $r_s$ is $-1$ to $+1$. If $r_s = +1$, there is perfect positive rank correlation and if $r_s = -1$, there is perfect negative rank correlation. If X and Y are independent of each other, there is no relationship and thus the rank correlation coefficient $r_s = 0$.

**Example 16.16.**

The following were the "performance under stress" rankings of 10 honor students before and after mid-semester:

| Student | A | B | C | D | E | F | G | H | I | J |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Rank before | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| Rank after | 6 | 5 | 8 | 9 | 3 | 4 | 10 | 1 | 7 | 2 |

Compute the Spearman's rank correlation coefficient for this data set.

**Solution:** The necessary calculations are given below.

| Rank before (X) | Rank after (Y) | $d = X - Y$ | $d^2$ |
| :---: | :---: | :---: | :---: |
| 1 | 6 | -5 | 25 |
| 2 | 5 | -3 | 9 |
| 3 | 8 | -5 | 25 |
| 4 | 9 | -5 | 25 |
| 5 | 3 | +2 | 4 |
| 6 | 4 | +2 | 4 |
| 7 | 10 | -3 | 9 |
| 8 | 1 | +7 | 49 |
| 9 | 7 | +2 | 4 |
| 10 | 2 | +8 | 64 |
| | | | $\sum d^2 = 218$ |

Spearman's rank correlation coefficient, $r_s = 1 - \frac{6\sum d^2}{n(n^2 - 1)} = 1 - \frac{6(218)}{10(100 - 1)} = 1 - 1.32 = -0.32$
