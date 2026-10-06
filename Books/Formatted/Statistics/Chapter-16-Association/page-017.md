---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-9
chapter_folder: Chapter-16-Association
chapter_number: 16
chapter_title: "Association"
page_image: 17
page_printed: 301
section: null
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-16-Association/0017.jpg
converted_at: "2026-10-06"
converted_by: "agent-26c (glm-vision)"
notes: "Offset check: printed p.301 = image 17 + 284 (header folio, top-right; odd page). Page opens mid-example (expected frequencies continuing Example 16.14 from previous page). No printed section heading on page, section: null. BOOK TYPO preserved in Example 16.14 (vi): conclusion says 'at 5% level of significance' although the example was tested at the 0.01 level. Printed 'd.f =' without trailing dot on this page (pages 299/300 print 'd.f.'). Example 16.15 table has a two-tier header ('Fathers' spanning the three column labels, 'Sons' row label bold) — rendered as header row plus first body row. Page ends mid-example 16.15 (solution continues on next page)."
---

# Page 17 — Association (Chapter 16)

> 📄 Original scan: [0017.jpg](../../../Raw/Statistics/Chapter-16-Association/0017.jpg) · printed page 301

The expected frequencies are computed as below:

$$(AB) = \frac{(A)(B)}{n} = \frac{(22)(23)}{50} = 10.12 \quad\quad\quad (A\beta) = \frac{(A)(\beta)}{n} = \frac{(22)(27)}{50} = 11.88$$

$$(\alpha B) = \frac{(\alpha)(B)}{n} = \frac{(28)(23)}{50} = 12.88 \quad\quad\quad (\alpha\beta) = \frac{(\alpha)(\beta)}{n} = \frac{(28)(27)}{50} = 15.12$$

The necessary calculations of Chi-square are given below:

| $f_o$ | $f_e$ | $(f_o - f_e)$ | $(f_o - f_e)^2$ | $(f_o - f_e)^2 / f_e$ |
| :--- | :--- | :--- | :--- | :--- |
| 15 | 10.12 | + 4.88 | 23.8144 | 2.3532 |
| 7 | 11.88 | - 4.88 | 23.8144 | 2.0046 |
| 8 | 12.88 | - 4.88 | 23.8144 | 1.8489 |
| 20 | 15.12 | + 4.88 | 23.8144 | 1.5750 |
| $\sum f_o = 50$ | $\sum f_e = 50$ | $\sum (f_o - f_e) = 0$ | - | $\chi^2 = 7.7817$ |

**Alternative Method:**

The value of $\chi^2$ can be calculated directly by using the formula

$$\chi^2 = \frac{(a + b + c + d)(ad - bc)^2}{(a + b)(b + d)(c + d)(a + c)}. \text{ Here, } a = 15, b = 8, c = 7 \text{ and } d = 20. \text{ Therefore}$$

$$\chi^2 = \frac{(15 + 8 + 7 + 20)(15 \times 20 - 8 \times 7)^2}{(15 + 8)(8 + 20)(7 + 20)(15 + 7)} = \frac{50(59536)}{(23)(28)(27)(22)} = \frac{2976800}{382536} = 7.7817$$

(v) **Critical region:** Here, $d.f = (r - 1)(c - 1) = (2 - 1)(2 - 1) = 1$

$$\chi^2 > \chi^2_{0.01(1)} = 6.635$$

(vi) **Conclusion:** Since the calculated value of $\chi^2 = 7.7817$ falls in the critical region, so we reject our null hypothesis $H_0$ at 5% level of significance. It means there is association between sex and influenza.

**Example 16.15.**

Calculate Chi-square ($\chi^2$) to examine whether there is evidence of relationship between the intelligence level of fathers and sons. Use $\alpha = 0.05$

| | Fathers | | |
| :--- | :--- | :--- | :--- |
| **Sons** | **Very Intelligent** | **Average** | **Non-Intelligent** |
| Very Intelligent | 10 | 35 | 5 |
| Average | 150 | 140 | 15 |
| Non-Intelligent | 40 | 95 | 20 |

**Solution:**

(i) Null hypothesis: $H_0$: There is no relationship between the intelligence of fathers and sons.

Alternative hypothesis: $H_1$: There is relationship (association) between the intelligence of fathers and sons.

(ii) Level of significance: $\alpha = 0.05$

(iii) Test-statistic: $\chi^2 = \sum \left[ \frac{(f_o - f_e)^2}{f_e} \right]$

(iv) Computations: Let $A_1$, $A_2$, $A_3$ be used for the rows and $B_1$, $B_2$, $B_3$ be used for columns headings. Then the table can be written as:
