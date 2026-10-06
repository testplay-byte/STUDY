---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-7
chapter_folder: Chapter-14-Statistical-Inference-Estimation
chapter_number: 14
chapter_title: "Statistical Inference Estimation"
page_image: 15
page_printed: 217
section: null
exercise: null
content_type: theory
has_figures: true
figures_count: 1
source_image: ../../../Raw/Statistics/Chapter-14-Statistical-Inference-Estimation/0015.jpg
converted_at: "2026-10-06"
converted_by: "agent-22a (glm-vision)"
notes: "Offset check: printed p.217 = image 15 + 202 (header folio, top-right; odd page). Page opens mid-sentence (continuation of 14.17 theory from p.216: 'in their proper order...') — continues from previous page. Bold sub-label 'σ1² and σ2² Unknown but σ1² = σ2² = σ2' is printed WITHOUT a section number (not a numbered heading → section null). As-printed oddities (verbatim, zoom-verified): (1) the statistic display after '...where' begins with '=' — no 't =' on the left side; (2) 'degree of freedom' (singular) in both occurrences; (3) t subscripts print as t_α/2(n1+n2−2) without a comma after α/2 — pixel-verified on 2× crop (one read reported commas; crop read shows none). Figure-5 (t-distribution curve) sits middle-right beside the t-statistic formulas; marker placed there."
---

# Page 15 — Statistical Inference Estimation (Chapter 14)

> 📄 Original scan: [0015.jpg](../../../Raw/Statistics/Chapter-14-Statistical-Inference-Estimation/0015.jpg) · printed page 217

in their proper order, the interval is highlighted in this section and is written here again. Thus $100(1 - \alpha) \%$ confidence interval for $(\mu_1 - \mu_2)$ is

$$(\bar{X}_1 - \bar{X}_2) - Z_{\frac{\alpha}{2}}\sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}} < \mu_1 - \mu_2 < (\bar{X}_1 - \bar{X}_2) + Z_{\frac{\alpha}{2}}\sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}}$$

**$\sigma_1^2$ and $\sigma_2^2$ Unknown but $\sigma_1^2 = \sigma_2^2 = \sigma^2$**

When $\sigma_1^2$ and $\sigma_2^2$ are not known, the random variable $Z$ cannot be used to find a confidence interval for $\mu_1 - \mu_2$. For normal populations, with small sample sizes, the statistic $(\bar{X}_1 - \bar{X}_2)$ has the t-distribution with $(n_1 + n_2 - 2)$ degree of freedom. But we have to make another assumption that the variances of the populations are equal that is $\sigma_1^2 = \sigma_2^2 = \sigma^2$ (say). The population variance $\sigma^2$ which is common for both the populations can be estimated by a pooled estimator $s_p^2$ where,

$$s_p^2 = \frac{(n_1 - 1)s_1^2 + (n_2 - 1)s_2^2}{n_1 + n_2 - 2} = \frac{\sum(X_1 - \bar{X}_1)^2 + \sum(X_2 - \bar{X}_2)^2}{n_1 + n_2 - 2} = \frac{\left(\sum X_1^2 - \frac{(\sum X_1)^2}{n_1}\right) + \left(\sum X_2^2 - \frac{(\sum X_2)^2}{n_2}\right)}{n_1 + n_2 - 2}$$

$s_1^2$ and $s_2^2$ are the unbiased sample variances. Thus, if independent samples of small sizes are drawn from the normal populations with $\sigma_1^2 = \sigma_2^2$ the statistic $(\bar{X}_1 - \bar{X}_2)$ has the t-distribution with $(n_1 + n_2 - 2)$ degree of freedom, where

$$= \frac{(\bar{X}_1 - \bar{X}_2) - (\mu_1 - \mu_2)}{\sqrt{\frac{s_p^2}{n_1} + \frac{s_p^2}{n_2}}} = \frac{(\bar{X}_1 - \bar{X}_2) - (\mu_1 - \mu_2)}{s_p\sqrt{\frac{1}{n_1} + \frac{1}{n_2}}}$$

when $n_1 = n_2 = n$, we can write,

$$t = \frac{(\bar{X}_1 - \bar{X}_2) - (\mu_1 - \mu_2)}{s_p\sqrt{\frac{2}{n}}}$$

[Figure F1]

The probability is $(1 - \alpha)$ that the random variable t will fall between $- t_{\frac{\alpha}{2}(n_1+n_2-2)}$ and $+ t_{\frac{\alpha}{2}(n_1+n_2-2)}$. The probability statement for the random variable t is:

$$P \left[ - t_{\frac{\alpha}{2}(n_1+n_2-2)} < t < + t_{\frac{\alpha}{2}(n_1+n_2-2)} \right] = 1 - \alpha$$

Putting the value of t, we get

$$P \left[ - t_{\frac{\alpha}{2}(n_1+n_2-2)} < \frac{(\bar{X}_1 - \bar{X}_2) - (\mu_1 - \mu_2)}{s_p\sqrt{\frac{1}{n_1} + \frac{1}{n_2}}} < + t_{\frac{\alpha}{2}(n_1+n_2-2)} \right] = 1 - \alpha$$

Now, we directly write the $100(1 - \alpha)\%$ confidence interval for $(\mu_1 - \mu_2)$ which is

$$(\bar{X}_1 - \bar{X}_2) - t_{\frac{\alpha}{2}(n_1+n_2-2)} s_p \sqrt{\frac{1}{n_1} + \frac{1}{n_2}} < \mu_1 - \mu_2 < (\bar{X}_1 - \bar{X}_2) + t_{\frac{\alpha}{2}(n_1+n_2-2)} s_p \sqrt{\frac{1}{n_1} + \frac{1}{n_2}}$$

## Figures on this page

### Figure F1 — t-distribution curve (middle right)
- **Type:** curve-plot
- **Caption/Number:** Figure-5
- **Description:** A symmetric bell-shaped curve representing the t-distribution. The horizontal axis represents the t-statistic. The center of the distribution is marked at $t=0$, which corresponds to $\mu_1 - \mu_2$. The area under the curve between the two critical values is labeled as $(1-\alpha)$. The tails on both ends each have an area labeled $\alpha/2$. The left critical point is marked as $-t_{\alpha/2(d.f.)}$ and the right critical point is marked as $+t_{\alpha/2(d.f.)}$.
- **Mathematical meaning:** Illustrates that for a t-distributed statistic with $(n_1+n_2-2)$ degrees of freedom, there is a probability of $(1-\alpha)$ that the calculated t-value falls within the interval defined by the critical t-values.
