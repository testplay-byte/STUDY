---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-8
chapter_folder: Chapter-15-Statistical-Inference-Testing-of-Hypotheses
chapter_number: 15
chapter_title: "Statistical Inference Testing of Hypotheses"
page_image: 26
page_printed: 264
section: null
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-15-Statistical-Inference-Testing-of-Hypotheses/0026.jpg
converted_at: "2026-10-06"
converted_by: "agent-24a (glm-vision)"
notes: "Offset check: printed p.264 = image 26 + 238 (header folio, top-left; even page). Page completes Example 15.23 (Z = 1.32, accepted) and contains complete Example 15.24 (basketball shots, Z = 2.041, rejected) and Example 15.25 up to solution (iii) — continues on next page. NO numbered section heading printed on this page (Example banners are not sections), so section: null. Book misprints preserved: '0·4' with a MIDDLE-DOT decimal separator in Example 15.24 (v) — pixel-verified at 4x, other numbers on the same line use baseline periods; statement of 15.24 ends 'improved. Use α = 5 %.' (period, not question mark); mixed percent spacing as printed ('60%' no space in 15.24 statement vs '5 %', '25 %', '1 %' with space elsewhere); 'Test- statistic' in 15.24 (iii) vs 'Test - statistic' in 15.23/15.25 (iii) — per-instance as printed. No figures, no cut-offs."
---

# Page 26 — Statistical Inference Testing of Hypotheses (Chapter 15)

> 📄 Original scan: [0026.jpg](../../../Raw/Statistics/Chapter-15-Statistical-Inference-Testing-of-Hypotheses/0026.jpg) · printed page 264

(iii) Test - statistic: $Z = \frac{\hat{p} - p_0}{\sqrt{\frac{p_0 q_0}{n}}}$

(iv) Critical region: $Z > 1.645$

(From the area table of normal distribution, we have $Z_\alpha = Z_{0.05} = 1.645$)

(v) Computations: Here, $n = 90$, $X = 28$, $\hat{p} = \frac{X}{n} = \frac{28}{90} = 0.31$,

$p_0 = 0.25$, $q_0 = 1 - p_0 = 0.75$, and hence

$$Z = \frac{0.31 - 0.25}{\sqrt{\frac{(0.25)(0.75)}{90}}} = \frac{0.06}{0.0456} = 1.32$$

(vi) Conclusion: Since the calculated value of $Z = 1.32$ falls in the acceptance region, so we accept our null hypothesis $H_0$: $p \leq 0.25$ at 5 % level of significance. On the basis of the evidence, we may conclude that at most 25 % of the students ride bicycles to class.

**Example 15.24.**

A basket ball player has hit on 60% of his shots from the floor. If on the next 100 shots he makes 70 baskets, would you say that his shooting has improved. Use $\alpha$ = 5 %.

**Solution:**

(i) Null hypothesis: $H_0 : p \leq 0.60$ and Alternative hypothesis: $H_1 : p > 0.60$

(ii) Level of significance: $\alpha = 0.05$

(iii) Test- statistic: $Z = \frac{\hat{p} - p_0}{\sqrt{\frac{p_0 q_0}{n}}}$

(iv) Critical region: $Z > 1.645$

(From the area table of normal distribution, we have $Z_\alpha = Z_{0.05} = 1.645$)

(v) Computations: Here, $n = 100$, $X = 70$, $\hat{p} = \frac{X}{n} = \frac{70}{100} = 0.7$, $p_0 = 0.6$, $q_0 = 1 - p_0 = 0·4$ and hence

$$Z = \frac{0.7 - 0.6}{\sqrt{\frac{(0.6)(0.4)}{100}}} = \frac{0.1}{0.049} = 2.041$$

(vi) Conclusion: Since the calculated value of $Z = 2.041$ falls in the critical region, so we reject our null hypothesis at 5 % level of significance. We may conclude that his shooting has improved.

**Example 15.25.**

A coin is tossed 400 times and it turns up head 216 times. Test the hypothesis that coin is unbiased at 1 % level of significance.

**Solution:**

(i) Null hypothesis: $H_0 : p = 0.5$ and Alternative hypothesis: $H_1 : p \neq 0.5$

(ii) Level of significance: $\alpha = 0.01$

(iii) Test - statistic: $Z = \frac{\hat{p} - p_0}{\sqrt{\frac{p_0 q_0}{n}}}$
