---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-8
chapter_folder: Chapter-15-Statistical-Inference-Testing-of-Hypotheses
chapter_number: 15
chapter_title: "Statistical Inference Testing of Hypotheses"
page_image: 16
page_printed: 254
section: 15.23 HYPOTHESIS TESTING – DIFFERENCE BETWEEN TWO POPULATION MEANS μ1 – μ2 WHEN σ1² AND σ2² KNOWN ( LARGE SAMPLES )
exercise: null
content_type: theory
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-15-Statistical-Inference-Testing-of-Hypotheses/0016.jpg
converted_at: "2026-10-06"
converted_by: "23-c (glm-vision)"
notes: "Offset check: printed p.254 = image 16 + 238 (header folio, top-left; even page). Page holds section 15.23 (two-mean Z-test theory, items (i)–(vi), large samples) then the statement and data table of Example 15.13; its solution continues on the next page. Section number verified from pixels as printed '15.23' (not 15.2.3). No figures, no cut-offs."
---

# Page 16 — Statistical Inference Testing of Hypotheses (Chapter 15)

> 📄 Original scan: [0016.jpg](../../../Raw/Statistics/Chapter-15-Statistical-Inference-Testing-of-Hypotheses/0016.jpg) · printed page 254

## 15.23 HYPOTHESIS TESTING – DIFFERENCE BETWEEN TWO POPULATION MEANS μ1 – μ2 WHEN σ1² AND σ2² KNOWN ( LARGE SAMPLES )

Suppose there are two populations ( normal or non-normal ) with means $\mu_1$ and $\mu_2$ which are unknown and the variances $\sigma_1^2$ and $\sigma_2^2$ which are known. Two large random samples of sizes $n_1$ and $n_2$ are selected from the populations and the sample means $\bar{X}_1$ and $\bar{X}_2$ are calculated. The difference $(\bar{X}_1 - \bar{X}_2)$ is a random variable and its distribution is normal with mean $\mu_{\bar{X}_1 - \bar{X}_2} = \mu_1 - \mu_2$ and standard error = $\sigma_{\bar{X}_1 - \bar{X}_2} = \sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}}$.

The procedure for testing the hypothesis $\mu_1 - \mu_2 = 0$ is explained below.

(i) The null and the alternative hypotheses which are possible are  
    (a) $H_0 : \mu_1 - \mu_2 = 0$ (or $H_0 : \mu_1 = \mu_2$) and $H_1 : \mu_1 - \mu_2 \neq 0$ (or $H_1 : \mu_1 \neq \mu_2$)  
    (b) $H_0 : \mu_1 - \mu_2 \leq 0$ (or $H_0 : \mu_1 \leq \mu_2$) and $H_1 : \mu_1 - \mu_2 > 0$ (or $H_1 : \mu_1 > \mu_2$)  
    (c) $H_0 : \mu_1 - \mu_2 \geq 0$ (or $H_0 : \mu_1 \geq \mu_2$) and $H_1 : \mu_1 - \mu_2 < 0$ (or $H_1 : \mu_1 < \mu_2$)

(ii) Level of significance $\alpha$ is decided.

(iii) Test - statistic: The distribution of $(\bar{X}_1 - \bar{X}_2)$ is normal, therefore the test-statistic to be used is Z,

$$\text{where } Z = \frac{(\bar{X}_1 - \bar{X}_2) - (\mu_1 - \mu_2)}{\sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}}}$$

(iv) Critical region: For each alternate hypothesis $H_1$, there is a rejection plan as explained earlier.

(v) Computations: The Z-statistic is calculated using the sample data where,
$$Z = \frac{(\bar{X}_1 - \bar{X}_2) - (\mu_1 - \mu_2)}{\sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}}}$$
Sometimes the null hypothesis states some difference between $\mu_1$ and $\mu_2$ and the difference is denoted by $\Delta$. In that case $H_0$ is $\mu_1 - \mu_2 = \Delta$ (say) and
$$Z = \frac{(\bar{X}_1 - \bar{X}_2) - \Delta}{\sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}}}$$

(vi) Conclusion: The null hypothesis is rejected if the calculated value of Z lies in rejection region. If Z lies in acceptance region, the hypothesis is accepted.

**Example 15.13.**

Suppose you wish to estimate the effects of a certain sleeping pill on men and women. Two samples are independently taken, and the relevant data are shown below:

| | Men | Women |
| :--- | :--- | :--- |
| Sample size | $n_1 = 36$ | $n_2 = 64$ |
| Sample mean | $\bar{X}_1 = 8.75$ | $\bar{X}_2 = 7.25$ |
| Population variance | $\sigma_1^2= 9$ | $\sigma_2^2= 4$ |

Test the null hypothesis $H_0: \mu_1 = \mu_2$ against the alternative hypothesis $H_1: \mu_1 > \mu_2$ at $\alpha = 0.05$.
