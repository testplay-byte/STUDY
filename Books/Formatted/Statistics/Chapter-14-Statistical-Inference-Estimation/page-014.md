---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-7
chapter_folder: Chapter-14-Statistical-Inference-Estimation
chapter_number: 14
chapter_title: "Statistical Inference Estimation"
page_image: 14
page_printed: 216
section: 14.17 CONFIDENCE INTERVAL ESTIMATE FOR THE DIFFERENCE BETWEEN TWO POPULATION MEANS-POPULATIONS NORMAL ( SMALL SAMPLES )
exercise: null
content_type: theory
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-14-Statistical-Inference-Estimation/0014.jpg
converted_at: "2026-10-06"
converted_by: "agent-22a (glm-vision)"
notes: "Offset check: printed p.216 = image 14 + 202 (header folio, top-left; even page). Page opens mid-solution of Example 14.13 (its 'Hence the ...' line — Example 14.13 begins on p.215) then holds Example 14.14 (with its data table) and the printed section heading 14.17; page ends mid-sentence of 14.17 theory ('To keep the different intervals') — continues on next page. BOOK TYPO preserved: 'a difference in equality of the spare parts' (clearly printed 'equality'; context implies 'quality'). Range lines printed as 'Range = Xm − Xo' — as printed."
---

# Page 14 — Statistical Inference Estimation (Chapter 14)

> 📄 Original scan: [0014.jpg](../../../Raw/Statistics/Chapter-14-Statistical-Inference-Estimation/0014.jpg) · printed page 216

Hence the 95 % confidence interval for $\mu_1 - \mu_2$ is

$$\begin{aligned} &(208 - 192) - 1.96 \sqrt{\frac{676}{40} + \frac{484}{50}} < \mu_1 - \mu_2 < (208 - 192) + 1.96 \sqrt{\frac{676}{40} + \frac{484}{50}} \\ &\qquad\qquad\qquad 16 - 10.1 < \mu_1 - \mu_2 < 16 + 10.1 \\ &\qquad\qquad\qquad\qquad\qquad 5.9 < \mu_1 - \mu_2 < 26.1 \end{aligned}$$

**Example 14.14.**

A manufacturer suspects a difference in equality of the spare parts he receives from the two suppliers. He obtains the following data on the service life of random samples of parts from two suppliers.

| Supplier | No. of samples | Mean | Standard deviation |
| :---: | :---: | :---: | :---: |
| A | 50 | 150 | 10 |
| B | 100 | 153 | 5 |

Compute the 90% and 92% confidence intervals for $\mu_2 - \mu_1$. Which interval is wider?

**Solution:** A $100(1-\alpha)\%$ confidence interval for $\mu_2 - \mu_1$ is

$$(\bar{X}_2 - \bar{X}_1) - Z_{\frac{\alpha}{2}} \sqrt{\frac{S_1^2}{n_1} + \frac{S_2^2}{n_2}} < \mu_2 - \mu_1 < (\bar{X}_2 - \bar{X}_1) + Z_{\frac{\alpha}{2}} \sqrt{\frac{S_1^2}{n_1} + \frac{S_2^2}{n_2}}$$

Here, $n_1 = 50, \bar{X}_1 = 150, S_1 = 10, S_1^2 = 100, n_2 = 100, \bar{X}_2 = 153, S_2 = 5, S_2^2 = 25,$

$1 - \alpha = 0.90$ or $\alpha = 0.10$ and $\frac{\alpha}{2} = 0.05$

From the area table of normal distribution, we have $Z_{\frac{\alpha}{2}} = Z_{0.05} = 1.645.$

Hence the 90% confidence interval for $\mu_2 - \mu_1$ is

$$\begin{aligned} &(153 - 150) - 1.645 \sqrt{\frac{100}{50} + \frac{25}{100}} < \mu_2 - \mu_1 < (153 - 150) + 1.645 \sqrt{\frac{100}{50} + \frac{25}{100}} \\ &\qquad\qquad\qquad\qquad\qquad 3 - 2.47 < \mu_2 - \mu_1 < 3 + 2.47 \\ &\qquad\qquad\qquad\qquad\qquad 0.53 < \mu_2 - \mu_1 < 5.47 \end{aligned}$$

Range $= X_m - X_o = 5.47 - 0.53 = 4.94$

also $1 - \alpha = 0.92$ or $\alpha = 0.08$ and $\frac{\alpha}{2} = 0.04$

From the area table of normal distribution, we have $Z_{\frac{\alpha}{2}} = Z_{0.04} = 1.75.$

Hence the 92% confidence interval for $\mu_2 - \mu_1$ is

$$\begin{aligned} &(153 - 150) - 1.75 \sqrt{\frac{100}{50} + \frac{25}{100}} < \mu_2 - \mu_1 < (153 - 150) + 1.75 \sqrt{\frac{100}{50} + \frac{25}{100}} \\ &\qquad\qquad\qquad\qquad\qquad 3 - 2.625 < \mu_2 - \mu_1 < 3 + 2.625 \\ &\qquad\qquad\qquad\qquad\qquad 0.375 < \mu_2 - \mu_1 < 5.625 \end{aligned}$$

Range $= X_m - X_o = 5.625 - 0.375 = 5.25$

Therefore 92% confidence interval is wider.

## 14.17 CONFIDENCE INTERVAL ESTIMATE FOR THE DIFFERENCE BETWEEN TWO POPULATION MEANS-POPULATIONS NORMAL ( SMALL SAMPLES )

**$\sigma_1^2$ and $\sigma_2^2$ Known**

When the populations are normal and their variances are known, the formula for confidence interval for $(\mu_1 - \mu_2)$ for small samples is the same as for large samples. To keep the different intervals
