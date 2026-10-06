---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-8
chapter_folder: Chapter-15-Statistical-Inference-Testing-of-Hypotheses
chapter_number: 15
chapter_title: "Statistical Inference Testing of Hypotheses"
page_image: 22
page_printed: 260
section: null
exercise: null
content_type: mixed
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-15-Statistical-Inference-Testing-of-Hypotheses/0022.jpg
converted_at: "2026-10-06"
converted_by: "agent-24a (glm-vision)"
notes: "Offset check: printed p.260 = image 22 + 238 (header folio, top-left; even page). Page continues section 15.27 procedure (items (ii)-(vi) with the t-test statistic display continued from previous page), then complete Example 15.20 statement with data table; solution ends at '(v) Computations: Let X1 = new material and X2 = old material.' and continues on next page. No numbered section heading printed on this page, so section: null ('Example 15.20.' is an example banner, not a section). Book typo preserved: 'test material for the sales of shoes' (printed; standard phrasing is 'soles') — pixel-verified at 3x zoom. Body opens with a stray printed period: '. Sometimes we have to examine...' (period typeset at line start, likely tail of previous page's sentence) — preserved verbatim. No figures, no cut-offs."
---

# Page 22 — Statistical Inference Testing of Hypotheses (Chapter 15)

> 📄 Original scan: [0022.jpg](../../../Raw/Statistics/Chapter-15-Statistical-Inference-Testing-of-Hypotheses/0022.jpg) · printed page 260

. Sometimes we have to examine that the differences of the paired observations in the population have some specified value say $\Delta$. In that case $\mu_D = \Delta$.

(ii) Level of significance $\alpha$ is decided.

(iii) Test - statistic: $\bar{d}$ has the t-distribution with $(n - 1)$ degrees of freedom.

$$t = \frac{\bar{d} - d_0}{s_d / \sqrt{n}} \quad \text{where} \quad s_d = \sqrt{\frac{\sum(d - \bar{d})^2}{n - 1}} = \sqrt{\frac{1}{n - 1}\left[\sum d^2 - \frac{(\sum d)^2}{n}\right]}$$

(iv) Critical region: Corresponding to each $H_1$, there is a critical region.

(v) Computations: The test-statistic t is calculated where $t = \frac{\bar{d} - d_0}{s_d / \sqrt{n}}$.

$$\text{When } H_0 \text{ is } \mu_D = 0, \text{ then } t = \frac{\bar{d} - 0}{s_d / \sqrt{n}} = \frac{\bar{d}\sqrt{n}}{s_d}$$

(vi) Conclusion: The hypothesis $\mu_D = 0$ is rejected if the calculated value of 't' lies in the critical region.

**Example 15.20.**

Suppose that a shoe company wanted to test material for the sales of shoes. For each pair of shoes the new material was placed on one shoe and the old material was placed on the other shoe. After a given period of time a random sample of ten pairs of shoes was selected and the wear was measured on a ten-point scale with the following results:

| Pair number | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| New material | 2 | 4 | 5 | 7 | 7 | 5 | 9 | 8 | 8 | 7 |
| Old material | 4 | 5 | 3 | 8 | 9 | 4 | 7 | 8 | 5 | 6 |
| Differences | –2 | –1 | +2 | –1 | –2 | +1 | +2 | 0 | +3 | +1 |

At the 0.05 level of significance, is there evidence that the average wear is higher for the new material than the old material?

**Solution:**

(i) Null hypothesis: $H_0 : \mu_{new} \leq \mu_{old}$ or $\mu_D = \mu_{new} - \mu_{old} \leq 0$

Alternative hypothesis: $H_1 : \mu_{new} > \mu_{old}$ or $\mu_D = \mu_{new} - \mu_{old} > 0$

(ii) Level of significance: $\alpha = 0.05$

(iii) Test - statistic: $t = \frac{\bar{d} - d_0}{s_d / \sqrt{n}}$

(iv) Critical region: $t > 1.833$

(From the t-table, we have $t_\alpha(n - 1) = t_{0.05(9)} = 1.833$)

(v) Computations: Let $X_1 =$ new material and $X_2 =$ old material.
