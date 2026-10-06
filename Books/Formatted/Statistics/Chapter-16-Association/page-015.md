---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-9
chapter_folder: Chapter-16-Association
chapter_number: 16
chapter_title: "Association"
page_image: 15
page_printed: 299
section: null
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-16-Association/0015.jpg
converted_at: "2026-10-06"
converted_by: "agent-26c (glm-vision)"
notes: "Offset check: printed p.299 = image 15 + 284 (header folio, top-right; odd page). Page opens mid-example (continuation of the Chi-square example from the previous page; its computation table). No printed section heading on page, section: null. Ink smudge over the middle digit of the Women/Oppose cell (280) in the opinion-survey table — pixel-verified at 5x zoom as 8 (totals 600/800 confirm)."
---

# Page 15 — Association (Chapter 16)

> 📄 Original scan: [0015.jpg](../../../Raw/Statistics/Chapter-16-Association/0015.jpg) · printed page 299

The necessary calculations of Chi-square are given below:

| $f_o$ | $f_e$ | $f_o - f_e$ | $(f_o - f_e)^2$ | $\frac{(f_o - f_e)^2}{f_e}$ |
| :--- | :--- | :--- | :--- | :--- |
| 80 | 80 | 0 | 0 | 0 |
| 20 | 20 | 0 | 0 | 0 |
| 80 | 80 | 0 | 0 | 0 |
| 20 | 20 | 0 | 0 | 0 |
| $\sum f_o = 200$ | $\sum f_e = 200$ | $\sum (f_o - f_e) = 0$ | - | $\chi^2 = 0$ |

**Alternative Method:**

The value of $\chi^2$ can be calculated directly by using the formula

$$\chi^2 = \frac{(a + b + c + d)(ad - bc)^2}{(a + b)(b + d)(c + d)(a + c)}.$$

Here, $a = 80, b = 80, c = 20$ and $d = 20$. Therefore

$$\chi^2 = \frac{(80 + 80 + 20 + 20)(80 \times 20 - 80 \times 20)^2}{(80 + 80)(80 + 20)(20 + 20)(80 + 20)} = \frac{200(0)}{(160)(100)(40)(100)} = 0$$

(v) **Critical region:** Here, d.f. = $(r - 1)(c - 1) = (2 - 1)(2 - 1) = 1$

$$\chi^2 > \chi^2_{0.05 \text{ (1)}} = 3.841$$

(vi) **Conclusion:** Since the calculated value of $\chi^2 = 0$ falls in the acceptance region, so we accept our null hypothesis at 5% level of significance. When $\chi^2 = 0$, it means perfect independence between the attributes. Males and females have exactly equal liking for eating fish.

**Example 16.13.**

In a public opinion survey, 2000 persons were interviewed to give their opinion. The individuals interviewed are classified according to their attribute on a certain social scheme and according to sex. The data is given in the table below:

| | Favour | Oppose | Undecided |
| :--- | :--- | :--- | :--- |
| Men | 600 | 320 | 280 |
| Women | 450 | 280 | 70 |

Calculate Chi-square ($\chi^2$) to examine whether men and women differ in their opinion about the social scheme. Use 5% level of significance.

**Solution:**

(i) Null hypothesis: $\quad H_0$: There is independence between sex and their attitude towards social scheme.

Alternative hypothesis: $H_1$: There is association between sex and social scheme.

(ii) Level of significance: $\quad \alpha = 0.05$

(iii) Test-statistic: $\quad \chi^2 = \sum \left[ \frac{(f_o - f_e)^2}{f_e} \right]$

(iv) Computations: Let $A_1$ = Men, $A_2$ = Women, $B_1$ = Favour, $B_2$ = Oppose and $B_3$ = Undecided.
The given table can be written as:

| | $B_1$ | $B_2$ | $B_3$ | Total |
| :--- | :--- | :--- | :--- | :--- |
| $A_1$ | $(A_1 B_1)$ = 600 | $(A_1 B_2)$ = 320 | $(A_1 B_3)$ = 280 | $(A_1)$ = 1200 |
| $A_2$ | $(A_2 B_1)$ = 450 | $(A_2 B_2)$ = 280 | $(A_2 B_3)$ = 70 | $(A_2)$ = 800 |
| Total | $(B_1)$ = 1050 | $(B_2)$ = 600 | $(B_3)$ = 350 | n = 2000 |
