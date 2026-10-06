---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-7
chapter_folder: Chapter-14-Statistical-Inference-Estimation
chapter_number: 14
chapter_title: "Statistical Inference Estimation"
page_image: 13
page_printed: 215
section: null
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-14-Statistical-Inference-Estimation/0013.jpg
converted_at: "2026-10-06"
converted_by: "agent-21b (glm-vision)"
notes: "Offset check: printed p.215 = image 13 + 202 (header folio, top-right). Page opens mid-solution (continuation of Example 14.11 from p.214: the 94% CI is the book's own deliberate level, α = 0.06, Z0.03 = 1.88), then Examples 14.12 and 14.13. Sub-heading 'σ1² and σ2² are Unknown' is printed inside a rectangular box (rendered as blockquote). No printed section heading (section null). Page ends mid-solution of Example 14.13 (last line = Z value) — continues on p.216."
---

# Page 13 — Statistical Inference Estimation (Chapter 14)

> 📄 Original scan: [0013.jpg](../../../Raw/Statistics/Chapter-14-Statistical-Inference-Estimation/0013.jpg) · printed page 215

$1 - \alpha = 0.94 \text{ or } \alpha = 0.06 \text{ and } \alpha/2 = 0.03$

From the area table of normal distribution, we have $Z_{\frac{\alpha}{2}} = Z_{0.03} = 1.88$

Hence the $94\%$ confidence interval for $\mu_1 - \mu_2$ is

$$\begin{aligned}
(80 - 75) - 1.88 \sqrt{\frac{25}{25} + \frac{9}{36}} &< \mu_1 - \mu_2 < (80 - 75) + 1.88 \sqrt{\frac{25}{25} + \frac{9}{36}} \\
5 - 2.1 &< \mu_1 - \mu_2 < 5 + 2.1 \\
2.9 &< \mu_1 - \mu_2 < 7.1
\end{aligned}$$

**Example 14.12.**

A random sample of 100 farms in a certain year gives an average yield of barley of 2100 lbs. per acre. A random sample of 100 farms in the following year gives an average yield of 2000 lbs. per acre. The standard deviations for two populations are 224 and 192 respectively. Compute a $95\%$ confidence interval for the difference of their mean yields, assuming the differences of yields to be approximately normally distributed.

**Solution:** A $100(1 - \alpha)\%$ confidence interval for $\mu_1 - \mu_2$ is

$$(\bar{X}_1 - \bar{X}_2) - Z_{\frac{\alpha}{2}} \sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}} < \mu_1 - \mu_2 < (\bar{X}_1 - \bar{X}_2) + Z_{\frac{\alpha}{2}} \sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}}$$

Here, $n_1 = 100$, $\bar{X}_1 = 2100$, $\sigma_1 = 224$, $\sigma_1^2 = 50176$, $n_2 = 100$, $\bar{X}_2 = 2000$, $\sigma_2 = 192$, $\sigma_2^2 = 36864$,

$1 - \alpha = 0.95 \text{ or } \alpha = 0.05 \text{ and } \alpha/2 = 0.025$

From the area table of normal distribution, we have $Z_{\frac{\alpha}{2}} = Z_{0.025} = 1.96$.

Hence the $95\%$ confidence interval for $\mu_1 - \mu_2$ is

$$\begin{aligned}
(2100 - 2000) - 1.96 \sqrt{\frac{50176}{100} + \frac{36864}{100}} &< \mu_1 - \mu_2 < (2100 - 2000) + 1.96 \sqrt{\frac{50176}{100} + \frac{36864}{100}} \\
100 - 57.82 &< \mu_1 - \mu_2 < 100 + 57.82 \\
42.18 &< \mu_1 - \mu_2 < 157.82
\end{aligned}$$

> **$\sigma_1^2$ and $\sigma_2^2$ are Unknown**

When the population variances $\sigma_1^2$ and $\sigma_2^2$ are not given, they are estimated by the sample variances $S_1^2$ and $S_2^2$. The populations may or may not be normal. The confidence interval for $(\mu_1 - \mu_2)$ becomes

$$(\bar{X}_1 - \bar{X}_2) - Z_{\frac{\alpha}{2}} \sqrt{\frac{S_1^2}{n_1} + \frac{S_2^2}{n_2}} < \mu_1 - \mu_2 < (\bar{X}_1 - \bar{X}_2) + Z_{\frac{\alpha}{2}} \sqrt{\frac{S_1^2}{n_1} + \frac{S_2^2}{n_2}}$$

**Example 14.13.**

Construct a $95\%$ confidence interval for the true difference between the average time in breakdowns of two kinds of devices, given that a random sample of 40 devices of type A on the average lasted 208 hours of continuous use between breakdowns with a standard deviation of 26 hours, and that a random sample of 50 devices of type B lasted on the average 192 hours with a standard deviation of 22 hours.

**Solution:** A $100(1 - \alpha)\%$ confidence interval for $\mu_1 - \mu_2$ is

$$(\bar{X}_1 - \bar{X}_2) - Z_{\frac{\alpha}{2}} \sqrt{\frac{S_1^2}{n_1} + \frac{S_2^2}{n_2}} < \mu_1 - \mu_2 < (\bar{X}_1 - \bar{X}_2) + Z_{\frac{\alpha}{2}} \sqrt{\frac{S_1^2}{n_1} + \frac{S_2^2}{n_2}}$$

Here, $n_1 = 40$, $\bar{X}_1 = 208$, $S_1 = 26$, $S_1^2 = 676$, $n_2 = 50$, $\bar{X}_2 = 192$, $S_2 = 22$, $S_2^2 = 484$,

$1 - \alpha = 0.95 \text{ or } \alpha = 0.05 \text{ and } \alpha/2 = 0.025$

From the area table of normal distribution, we have $Z_{\frac{\alpha}{2}} = Z_{0.025} = 1.96$.
