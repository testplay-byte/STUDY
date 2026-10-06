---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-9
chapter_folder: Chapter-16-Association
chapter_number: 16
chapter_title: "Association"
page_image: 12
page_printed: 296
section: null
exercise: null
content_type: theory
has_figures: true
figures_count: 1
source_image: ../../../Raw/Statistics/Chapter-16-Association/0012.jpg
converted_at: "2026-10-06"
converted_by: "agent-27a (glm-vision)"
notes: "Offset check: printed p.296 = image 12 + 284 (header folio, top-left; even page). No printed section heading on page — theory continuation of 16.15 (Test of Independence) from printed p.295, so section: null (draft initially hallucinated a '16.5' heading; QA caught it). Print artifact preserved: stray ink dot immediately LEFT of the '(β)' cell (row β, Total column) in the first 2×2 contingency table — pixel-verified at 2x zoom, rendered '.(β)'. Running header on this page reads 'Basic Statistics Part-II ( Federal Board )'. Page ends complete ('...= 3.841.')."
---

# Page 12 — Association (Chapter 16)

> 📄 Original scan: [0012.jpg](../../../Raw/Statistics/Chapter-16-Association/0012.jpg) · printed page 296

**2 × 2 Contingency Table**

| | A | α | Total |
| :--- | :--- | :--- | :--- |
| **B** | (AB) | (αB) | (B) |
| **β** | (Aβ) | (αβ) | .(β) |
| **Total** | (A) | (α) | n |

Our null hypothesis is that the attributes are independent. If A and B are independent then the observed frequency $(AB)$ is equal to $\frac{(A)(B)}{n}$. By using this approach, we calculate the expected frequencies for all the four classes $(AB)$, $(A\beta)$, $(\alpha B)$ and $(\alpha \beta)$. The expected frequencies are calculated under the assumption that the null hypothesis is true.

**Expected Frequencies Calculated**

| | A | α | Total |
| :--- | :--- | :--- | :--- |
| **B** | $\frac{(A)(B)}{n}$ | $\frac{(\alpha)(B)}{n}$ | (B) |
| **β** | $\frac{(A)(\beta)}{n}$ | $\frac{(\alpha)(\beta)}{n}$ | ($\beta$) |
| **Total** | (A) | ($\alpha$) | n |

It may be noted that the column and row totals in the table of observed frequencies are the same as in the table of expected frequencies. The observed frequencies are denoted by $f_o$ and the expected frequencies are denoted by $f_e$. For the calculation of $\chi^2$ we write the expected frequencies corresponding to their observed frequencies. The necessary calculations are done as shown in the following columns:

| Observed frequencies $f_o$ | Expected frequencies $f_e$ | $f_o - f_e$ | $(f_o - f_e)^2$ | $\frac{(f_o - f_e)^2}{f_e}$ |
| :--- | :--- | :--- | :--- | :--- |
| ( AB ) | $\frac{(A)(B)}{n}$ | | | |
| ( A$\beta$ ) | $\frac{(A)(\beta)}{n}$ | | | |
| ( $\alpha$B ) | $\frac{(\alpha)(B)}{n}$ | | | |
| ( $\alpha\beta$ ) | $\frac{(\alpha)(\beta)}{n}$ | | | |
| n | n | 0 | – | $\chi^2 = \sum \left[ \frac{(f_o - f_e)^2}{f_e} \right]$ |

(v) Critical Region: The critical region in this test always lies in the right side of the distribution. It depends upon the level of significance $\alpha$ and the degrees of freedom. In tests of independence, the degree of freedom is calculated as below:

degrees of freedom ( d.f. ) = $(r - 1)(c - 1)$

where $r$ is the number of rows and $c$ is the number of columns in the contingency table. The critical value of $\chi^2$ is seen from the table of $\chi^2$. For level of significance $\alpha$, and degrees of freedom $(r - 1)(c - 1)$, the table value is denoted by $\chi^2_{\alpha(r-1)(c-1)}$. In a $\chi^2$-table, under the column heading $\alpha$ and against d.f. = $(r - 1)(c - 1)$ given in the left column, we read the value of $\chi^2_\alpha(d.f.)$. When $\alpha = 0.05$, d.f. = 1, then $\chi^2_{0.05(1)} = 3.841$.

[Figure F1]

## Figures on this page

### Figure F1 — Chi-square distribution curve showing rejection region (bottom right)
- **Type:** curve-plot
- **Caption/Number:** (none printed)
- **Description:** A graph of a chi-square distribution curve starting at the origin on the x-axis, rising to a peak on the left side, and tapering off towards the right. The horizontal axis represents $\chi^2$ values, with labels "$\chi^2=0$" at the origin and "$\chi^2_{\alpha(r-1)(c-1)}$" at a point further right. The area under the curve to the left of the critical value is labeled "$1-\alpha$". The small area in the right tail beyond the critical value is shaded or marked with an upward arrow and labeled "Rejection Region".
- **Mathematical meaning:** Illustrates a one-tailed (right-tailed) hypothesis test for independence using the chi-square distribution, where the critical region corresponds to values exceeding the tabulated critical value at significance level $\alpha$.
