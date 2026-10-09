---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-9
chapter_folder: Chapter-16-Association
chapter_number: 16
chapter_title: "Association"
page_image: 11
page_printed: 295
section: 16 14. CHI-SQUARE (χ²) DISTRIBUTION; 16.15. TEST OF INDEPENDENCE
exercise: null
content_type: mixed
has_figures: true
figures_count: 1
source_image: ../../../Raw/Statistics/Chapter-16-Association/0011.jpg
converted_at: "2026-10-06"
converted_by: "agent-27a (glm-vision)"
notes: "Offset check: printed p.295 = image 11 + 284 (header folio, top-right; odd page). Page opens mid-example (solution of Example 16.10 typhoid-inoculation table from printed p.294). Book misprints preserved: stray dot in table cell '(α.) = 200' (pixel-verified); 'Let A denotes attacked' grammar as printed; section heading printed '16 14.' with the middle dot MISSING (print defect — pixel-verified at 4x zoom: no ink between 6 and 1; dot after 14 present) — transcribed as printed. Printed Q = 0.65 (72650/112150 = 0.6478 rounded by book). Chi-square curve figure sits to the RIGHT of the 16.14 paragraph, spanning ~4 text lines. No cut-offs. | TYPO-CORRECTION PASS (2026-10-06, user mandate): unambiguous surface typo(s) corrected in the body per correction policy v4.4 — printed forms remain documented earlier in this note and itemised in docs/tracking/CORRECTIONS-LOG.md."
---

# Page 11 — Association (Chapter 16)

> 📄 Original scan: [0011.jpg](../../../Raw/Statistics/Chapter-16-Association/0011.jpg) · printed page 295

**Solution:** Let A denote attacked and $\alpha$ denotes not attacked. Also B denotes inoculated and $\beta$ denotes not inoculated, then we can write the table as:

|  | A | $\alpha$ | Total |
| :--- | :--- | :--- | :--- |
| B | $(AB) = 528$ | $(\alpha B) = 25$ | $(B) = 553$ |
| $\beta$ | $(A\beta) = 790$ | $(\alpha \beta) = 175$ | $(\beta) = 965$ |
| **Total** | $(A) = 1318$ | $(\alpha.) = 200$ | $n = 1518$ |

$$
\begin{aligned}
\text{Coefficient of association} &= Q = \frac{(AB)(\alpha \beta) - (A\beta)(\alpha B)}{(AB)(\alpha \beta) + (A\beta)(\alpha B)} = \frac{528(175) - 790(25)}{528(175) + 790(25)} \\
&= \frac{92400 - 19750}{92400 + 19750} = \frac{72650}{112150} = 0.65
\end{aligned}
$$

It means there is positive association between injection against typhoid and exemption from attack.

**Example 16.11.**

Given $(AB) = 220$, $(\alpha B) = 110$, $(A\beta) = 300$, $(\alpha \beta) = 600$ and $n = 1230$. Discuss association.

**Solution:** Coefficient of association $= Q = \dfrac{(AB)(\alpha \beta) - (A\beta)(\alpha B)}{(AB)(\alpha \beta) + (A\beta)(\alpha B)} = \dfrac{220(600) - 300(110)}{220(600) + 300(110)}$

$$= \frac{132000 - 33000}{132000 + 33000} = \frac{99000}{165000} = 0.6$$

There is strong positive association between the attributes.

## 16 14. CHI-SQUARE ($\chi^2$) DISTRIBUTION

Chi-square written as $\chi^2$ is a statistic which has a positively skewed distribution as shown below. The value of $\chi^2$ varies from 0 to $\infty$. $\chi^2$ cannot take any negative value. The shape of the distribution depends upon the degrees of freedom which is calculated from the given sample. $\chi^2$-distribution can be used for various purposes. One of the applications of $\chi^2$ is to test the independence between the attributes.

[Figure F1]

## 16.15. TEST OF INDEPENDENCE

With the help of $\chi^2$-distribution, we can test whether the attributes are independent or there is association between them. The procedure runs as below:

(i) Null Hypothesis $\quad H_0$: There is independence between the attributes.
   Alternative Hypothesis $H_1$: There is association between the attributes.

(ii) Level of significance $\alpha$ is decided.

(iii) Test-statistic: $\quad \chi^2 = \sum \left( \frac{(f_o - f_e)^2}{f_e} \right)$

where $f_o$ stands for observed frequency and $f_e$ stands for expected frequency calculated under the assumption that attributes are independent.

(iv) Computations: The $\chi^2$-statistic can be used to check the independence in a table of attributes containing any number of columns and rows. Let us first explain the application of $\chi^2$ on a $2 \times 2$ contingency table. The observed frequencies are given below in the form of a table. It is only for our convenience that we write the class frequencies in the form of a table having columns and rows.

## Figures on this page

### Figure F1 — Chi-square distribution curve (right side)
- **Type:** curve-plot
- **Caption/Number:** (none printed)
- **Description:** A graph showing a positively skewed probability density function curve starting at the origin ($\chi^2 = 0$). The horizontal axis represents $\chi^2$ values, labelled "$\chi^2 = 0$" at the origin and "$\chi^2_{\alpha}$ (d.f.)" at the critical value further right. The vertical axis is unlabeled but represents density. A small region in the far-right tail beyond the critical line is shaded and labelled "$\alpha$", while the large remaining area under the curve is labelled "$1-\alpha$".
- **Mathematical meaning:** Illustrates the chi-square ($\chi^2$) distribution, showing that it is positively skewed with values ranging from 0 to infinity, where $\alpha$ represents the significance level (area in the rejection region) and $1-\alpha$ represents the confidence level.
