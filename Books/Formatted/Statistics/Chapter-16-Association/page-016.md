---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-9
chapter_folder: Chapter-16-Association
chapter_number: 16
chapter_title: "Association"
page_image: 16
page_printed: 300
section: null
exercise: null
content_type: worked-examples
has_figures: true
figures_count: 1
source_image: ../../../Raw/Statistics/Chapter-16-Association/0016.jpg
converted_at: "2026-10-06"
converted_by: "agent-26c (glm-vision)"
notes: "Offset check: printed p.300 = image 16 + 284 (header folio, top-left; even page). Page opens mid-example (expected-frequency computations continuing Example 16.13 from previous page). No printed section heading on page, section: null. Attributes labelled with Greek letters as printed: A = Boy, α = Girl, B = Influenza, β = Not influenza (pixel-verified). Unnumbered chi-square curve figure after the critical-region line — captured as Figure F1."
---

# Page 16 — Association (Chapter 16)

> 📄 Original scan: [0016.jpg](../../../Raw/Statistics/Chapter-16-Association/0016.jpg) · printed page 300

The corresponding expected frequencies are calculated as:

$$\begin{aligned}
(A_1B_1) &= \frac{(A_1)(B_1)}{n} = \frac{(1200)(1050)}{2000} = 630 & (A_2B_1) &= \frac{(A_2)(B_1)}{n} = \frac{(800)(1050)}{2000} = 420 \\
(A_1B_2) &= \frac{(A_1)(B_2)}{n} = \frac{(1200)(600)}{2000} = 360 & (A_2B_2) &= \frac{(A_2)(B_2)}{n} = \frac{(800)(600)}{2000} = 240 \\
(A_1B_3) &= \frac{(A_1)(B_3)}{n} = \frac{(1200)(350)}{2000} = 210 & (A_2B_3) &= \frac{(A_2)(B_3)}{n} = \frac{(800)(350)}{2000} = 140
\end{aligned}$$

The necessary calculations of Chi-square are given below:

| $f_o$ | $f_e$ | $(f_o - f_e)$ | $(f_o - f_e)^2$ | $\frac{(f_o - f_e)^2}{f_e}$ |
| :--- | :--- | :--- | :--- | :--- |
| 600 | 630 | -30 | 900 | 1.4286 |
| 450 | 420 | +30 | 900 | 2.1429 |
| 320 | 360 | -40 | 1600 | 4.4444 |
| 280 | 240 | +40 | 1600 | 6.6667 |
| 280 | 210 | +70 | 4900 | 23.3333 |
| 70 | 140 | -70 | 4900 | 35.0000 |
| $\sum f_o = 2000$ | $\sum f_e = 2000$ | $\sum (f_o - f_e) = 0$ | - | $\chi^2 = 73.0159$ |

(v) **Critical region:**

Here, d.f. = $(r - 1)(c - 1) = (2 - 1)(3 - 1) = 2$

$\chi^2 > \chi^2_{0.05(2)} = 5.991$

[Figure F1]

(vi) **Conclusion:** Since the calculated value of $\chi^2 = 73.0159$ falls in the critical region, so we reject our null hypothesis at 5% level of significance. We may conclude that men and women have different opinions about the social scheme. Sex is associated with the attitude towards the social scheme.

**Example 16.14.**

Test at 0.01 level of significance that there is no association between sex and influenza.

| Attributes | Boy | Girl |
| :--- | :--- | :--- |
| Influenza | 15 | 8 |
| Not Influenza | 7 | 20 |

**Solution:** (i) Null hypothesis: $H_0$: There is no association between sex and influenza.
Alternative hypothesis: $H_1$: There is association between sex and influenza.

(ii) Level of significance: $\alpha = 0.01$

(iii) Test statistic: $\chi^2 = \sum \left[ \frac{(f_o - f_e)^2}{f_e} \right]$

(iv) Computations: Let A = Boy, $\alpha$ = Girl, B = Influenza and $\beta$ = Not influenza. Then we can write the table as:

| | A | $\alpha$ | Total |
| :--- | :--- | :--- | :--- |
| B | $(AB) = 15$ | $(\alpha B) = 8$ | $(B) = 23$ |
| $\beta$ | $(A\beta) = 7$ | $(\alpha\beta) = 20$ | $(\beta) = 27$ |
| Total | $(A) = 22$ | $(\alpha) = 28$ | n = 50 |

## Figures on this page

### Figure F1 — Chi-square distribution curve with rejection region (middle of page, between the critical-region line and the conclusion)
- **Type:** curve-plot
- **Caption/Number:** (none printed)
- **Description:** A chi-square probability curve starting at 0 on the horizontal axis, rising to a peak, then tapering off to the right. The small area under the right tail beyond a vertical line at 5.991 is shaded and labelled "Rejection Region" with "0.05" marked in it. The large unshaded area under the curve to the left of 5.991 is labelled "$1 - \alpha = 0.95$". The horizontal axis is marked 0 at the origin and 5.991 at the critical point.
- **Mathematical meaning:** Illustrates the right-tail critical region for $\nu = 2$ degrees of freedom at the 0.05 level: $\chi^2_{0.05(2)} = 5.991$; calculated values beyond 5.991 lead to rejection of $H_0$.
