---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-8
chapter_folder: Chapter-15-Statistical-Inference-Testing-of-Hypotheses
chapter_number: 15
chapter_title: "Statistical Inference Testing of Hypotheses"
page_image: 18
page_printed: 256
section: 15.24 HYPOTHESIS TESTING – DIFFERENCE BETWEEN TWO POPULATION MEANS μ1 – μ2 WHEN σ1² AND σ2² UNKNOWN ( LARGE SAMPLES )
exercise: null
content_type: mixed
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-15-Statistical-Inference-Testing-of-Hypotheses/0018.jpg
converted_at: "2026-10-06"
converted_by: "23-c (glm-vision)"
notes: "Offset check: printed p.256 = image 18 + 238 (header folio, top-left; even page). Page opens with items (iv)–(vi) of Example 15.15 (continued from p.255), then section 15.24 (two-mean Z-test with variances unknown) and complete Example 15.16 with data table. Printed missing space between 'hypothesis:' and 'H_1' (Example 15.16 item (i)) preserved verbatim; '1 %' and 'Test - statistic' spacing preserved. Z_{alpha/2} printed as stacked alpha-over-2 subscript (transcribed as Z_{frac alpha 2}). No figures, no cut-offs."
---

# Page 18 — Statistical Inference Testing of Hypotheses (Chapter 15)

> 📄 Original scan: [0018.jpg](../../../Raw/Statistics/Chapter-15-Statistical-Inference-Testing-of-Hypotheses/0018.jpg) · printed page 256

(iv) Critical region: $|Z| > 2.575$ ($Z < -2.575$ and $Z > 2.575$)

(From the area table of normal distribution, we have $Z_{\frac{\alpha}{2}} = Z_{0.005} = 2.575$)

(v) Computations: Here, $n_1 = 30$, $\bar{X}_1 = 8.85$, $n_2 = 40$, $\bar{X}_2 = 8.20$, $\sigma^2 = 1.2$,

$\sigma = 1.10$ and hence $Z = \frac{(8.85 - 8.20) - 0}{1.10 \sqrt{\frac{1}{30} + \frac{1}{40}}} = \frac{0.65}{0.2657} = 2.446$

(vi) Conclusion: Since the calculated value of $Z = 2.446$ falls in the acceptance region, so we accept our null hypothesis $H_0$: $\mu_1 = \mu_2$ at 1 % level of significance. We may conclude that the difference between two results is insignificant.

## 15.24 HYPOTHESIS TESTING – DIFFERENCE BETWEEN TWO POPULATION MEANS μ1 – μ2 WHEN σ1² AND σ2² UNKNOWN ( LARGE SAMPLES )

When the population variances $\sigma_1^2$ and $\sigma_2^2$ are unknown, they are estimated by their sample variances $S_1^2$ and $S_2^2$ and the test-statistic to be used becomes,

$$Z = \frac{(\bar{X}_1 - \bar{X}_2) - (\mu_1 - \mu_2)}{\sqrt{\frac{S_1^2}{n_1} + \frac{S_2^2}{n_2}}}$$

This formula is used only for large sample sizes but the populations may or may not be normal. The procedure for testing $H_0$ is the same as explained earlier.

**Example 15.16.**

Suppose that two randomly selected samples yield the following information:

| | Sample I | Sample II |
| :--- | :--- | :--- |
| **Size** | $n_1 = 82$ | $n_2 = 41$ |
| **Mean** | $\bar{X}_1 = 50$ | $\bar{X}_2 = 55$ |
| **Variance** | $S_1^2 = 405$ | $S_2^2 = 324$ |

Test the null hypothesis that the two population means are equal that is, $H_0$: $\mu_1 = \mu_2$ against the alternative hypothesis $H_1$: $\mu_1 < \mu_2$ at $\alpha = 0.01$.

**Solution:**

(i) Null hypothesis: $H_0 : \mu_1 = \mu_2$ and Alternative hypothesis:$H_1 : \mu_1 < \mu_2$

(ii) Level of significance: $\alpha = 0.01$

(iii) Test - statistic: $Z = \frac{(\bar{X}_1 - \bar{X}_2) - (\mu_1 - \mu_2)}{\sqrt{\frac{S_1^2}{n_1} + \frac{S_2^2}{n_2}}}$

(iv) Critical region: $Z < -2.326$

(From the area table of normal distribution, we have $-Z_{\alpha} = -Z_{0.01} = -2.326$)

(v) Computations: Here, $n_1 = 82$, $\bar{X}_1 = 50$, $S_1^2 = 405$, $n_2 = 41$, $\bar{X}_2 = 55$, $S_2^2 = 324$ and hence

$$Z = \frac{(50 - 55) - 0}{\sqrt{\frac{405}{82} + \frac{324}{41}}} = \frac{-5}{3.5835} = -1.395$$

(vi) Conclusion: Since the calculated value of $Z = -1.395$ falls in the acceptance region, so we accept our null hypothesis $H_0$: $\mu_1 = \mu_2$ at 1 % level of significance.
