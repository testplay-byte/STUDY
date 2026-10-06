---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-8
chapter_folder: Chapter-15-Statistical-Inference-Testing-of-Hypotheses
chapter_number: 15
chapter_title: "Statistical Inference Testing of Hypotheses"
page_image: 19
page_printed: 257
section: 15.25 TEST ABOUT μ1 – μ2 WHEN σ1² AND σ2² KNOWN, POPULATIONS NORMAL ( SMALL SAMPLES ); 15.26 TEST ABOUT μ1 – μ2 WHEN σ1² AND σ2² UNKNOWN, POPULATIONS NORMAL ( SMALL SAMPLES )
exercise: null
content_type: mixed
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-15-Statistical-Inference-Testing-of-Hypotheses/0019.jpg
converted_at: "2026-10-06"
converted_by: "23-c (glm-vision)"
notes: "Offset check: printed p.257 = image 19 + 238 (header folio, top-right; odd page). Page opens with complete Example 15.17 (two large-sample means Z-test), then theory sections 15.25 and 15.26; page ends with the two-row pooled-variance s_p^2 / s_p display block (its t-test statistic continues on next page). No figures, no cut-offs."
---

# Page 19 — Statistical Inference Testing of Hypotheses (Chapter 15)

> 📄 Original scan: [0019.jpg](../../../Raw/Statistics/Chapter-15-Statistical-Inference-Testing-of-Hypotheses/0019.jpg) · printed page 257

**Example 15.17.**

Given two independent random samples with the following results:

$$n_1 = 100, \bar{X}_1 = 950, S_1 = 90, n_2 = 100, \bar{X}_2 = 985, S_2 = 120.$$

Do the data indicate a difference in the population means? Use the 0.05 level of significance.

**Solution:**

(i) Null hypothesis: $H_0 : \mu_1 = \mu_2$ and Alternative hypothesis: $H_1 : \mu_1 \neq \mu_2$

(ii) Level of significance: $\alpha = 0.05$

(iii) Test - statistic: $Z = \dfrac{(\bar{X}_1 - \bar{X}_2) - (\mu_1 - \mu_2)}{\sqrt{\dfrac{S_1^2}{n_1} + \dfrac{S_2^2}{n_2}}}$

(iv) Critical region: $| Z | > 1.96$ ($Z < -1.96$ and $Z > 1.96$)

(From the area table of normal distribution, we have $Z_{\frac{\alpha}{2}} = Z_{0.025}= 1.96$)

(v) Computations: Here, $n_1 = 100, \bar{X}_1 = 950, S_1 = 90, S_1^2= 8100, n_2 = 100, \bar{X}_2 = 985,$

$S_2= 120, S_2^2= 14400$ and hence $Z = \dfrac{(950 - 985 ) - 0}{\sqrt{\dfrac{8100}{100} + \dfrac{14400}{100}}} = \dfrac{-35}{15} = -2.33$

(vi) Conclusion: Since the calculated value of $Z = -2.33$ falls in the critical region, so we reject our null hypothesis $H_0 : \mu_1 = \mu_2$ at 5 % level of significance. We may conclude that the data indicate a difference in the population means.

## 15.25 TEST ABOUT μ1 – μ2 WHEN σ1² AND σ2² KNOWN, POPULATIONS NORMAL ( SMALL SAMPLES )

In case of small sample sizes, we can use Z-test for testing the difference between $\mu_1$ and $\mu_2$ when $\sigma_1^2$ and $\sigma_2^2$ are known and the populations are necessarily normal. The Z-test used is

$$Z = \dfrac{(\bar{X}_1 - \bar{X}_2) - (\mu_1 - \mu_2)}{\sqrt{\dfrac{\sigma_1^2}{n_1} + \dfrac{\sigma_2^2}{n_2}}}$$

## 15.26 TEST ABOUT μ1 – μ2 WHEN σ1² AND σ2² UNKNOWN, POPULATIONS NORMAL ( SMALL SAMPLES )

This is a case which is different from the previous three cases. Here the conditions are that:

(i) the populations are normal

(ii) $\sigma_1^2$ and $\sigma_2^2$ are unknown but assumed to be equal.

(iii) the sample sizes $n_1$ and $n_2$ are small and are selected independently.

The variances $\sigma_1^2$ and $\sigma_2^2$ are unknown but $\sigma_1^2 = \sigma_2^2 = \sigma^2$. The parameter $\sigma^2$ is estimated by the sample variances. The sample estimator of $\sigma^2$ is $s_p^2$, where

$$\begin{aligned}
s_p^2 &= \dfrac{(n_1 - 1)s_1^2 + (n_2 - 1)s_2^2}{n_1 + n_2 - 2} = \dfrac{\sum(X_1 - \bar{X}_1)^2 + \sum(X_2 - \bar{X}_2)^2}{n_1 + n_2 - 2} = \dfrac{\left(\sum X_1^2 - \dfrac{(\sum X_1)^2}{n_1}\right) + \left(\sum X_2^2 - \dfrac{(\sum X_2)^2}{n_2}\right)}{n_1 + n_2 - 2} \\
s_p &= \sqrt{\dfrac{(n_1 - 1)s_1^2 + (n_2 - 1)s_2^2}{n_1 + n_2 - 2}} = \sqrt{\dfrac{\sum(X_1 - \bar{X}_1)^2 + \sum(X_2 - \bar{X}_2)^2}{n_1 + n_2 - 2}} = \sqrt{\dfrac{\left(\sum X_1^2 - \dfrac{(\sum X_1)^2}{n_1}\right) + \left(\sum X_2^2 - \dfrac{(\sum X_2)^2}{n_2}\right)}{n_1 + n_2 - 2}}
\end{aligned}$$
