---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-7
chapter_folder: Chapter-14-Statistical-Inference-Estimation
chapter_number: 14
chapter_title: "Statistical Inference Estimation"
page_image: 12
page_printed: 214
section: null
exercise: null
content_type: theory
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-14-Statistical-Inference-Estimation/0012.jpg
converted_at: "2026-10-06"
converted_by: "agent-21b (glm-vision)"
notes: "Offset check: printed p.214 = image 12 + 202 (header folio, top-left; even page). Page opens mid-sentence (continuation of section 14.16 theory from p.213: 'samples of sizes n1 and n2...'); no printed section heading on the page (section null). Example 14.11 starts near the bottom; page ends mid-solution at the 'Here, ...' line — continues on p.215. Book prints 'Find a 94 % confidence interval' in Example 14.11 — deliberate level, confirmed by p.215 continuation (α = 0.06, Z0.03 = 1.88)."
---

# Page 12 — Statistical Inference Estimation (Chapter 14)

> 📄 Original scan: [0012.jpg](../../../Raw/Statistics/Chapter-14-Statistical-Inference-Estimation/0012.jpg) · printed page 214

samples of sizes $n_1$ and $n_2$ are selected from the populations and sample means $\bar{X}_1$ and $\bar{X}_2$ are calculated. The point estimator of the difference between $\mu_1$ and $\mu_2$ is given by the statistic $\bar{X}_1 - \bar{X}_2$. The statistic $\bar{X}_1 - \bar{X}_2$ is an unbiased estimator of $\mu_1 - \mu_2$ and has the normal distribution with mean $\mu_1 - \mu_2$ and standard error $\sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}}$. The standard normal variable of $(\bar{X}_1 - \bar{X}_2)$ is

$$Z = \frac{(\bar{X}_1 - \bar{X}_2) - (\mu_1 - \mu_2)}{\sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}}}$$

The probability is $(1 - \alpha)$ that the value of random variable $Z$ will fall between two selected points $-Z_{\frac{\alpha}{2}}$ and $+Z_{\frac{\alpha}{2}}$. We can write the probability statement as

$$P \left[ -Z_{\frac{\alpha}{2}} < Z < +Z_{\frac{\alpha}{2}} \right] = 1 - \alpha \quad \text{or} \quad P \left[ -Z_{\frac{\alpha}{2}} < \frac{(\bar{X}_1 - \bar{X}_2) - (\mu_1 - \mu_2)}{\sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}}} < +Z_{\frac{\alpha}{2}} \right] = 1 - \alpha$$

We can simplify this inequality to get the $100(1-\alpha)\%$ confidence interval for $\mu_1 - \mu_2$ which is

$$(\bar{X}_1 - \bar{X}_2) - Z_{\frac{\alpha}{2}} \sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}} < \mu_1 - \mu_2 < (\bar{X}_1 - \bar{X}_2) + Z_{\frac{\alpha}{2}} \sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}}$$

This interval estimate can be written as

$$(\bar{X}_1 - \bar{X}_2) \pm Z_{\frac{\alpha}{2}} \sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}}$$

If we want to get the confidence interval of $\mu_2 - \mu_1$, we shall use the interval in which the difference $(\bar{X}_2 - \bar{X}_1)$ is used. Thus the confidence interval for $\mu_2 - \mu_1$ is

$$(\bar{X}_2 - \bar{X}_1) \pm Z_{\frac{\alpha}{2}} \sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}}$$

In the numerical questions, the values of $\bar{X}_1$ and $\bar{X}_2$ are usually positive but the difference $(\bar{X}_1 - \bar{X}_2)$ or $(\bar{X}_2 - \bar{X}_1)$ may be positive or negative. The confidence limits of $(\mu_1 - \mu_2)$ or $(\mu_2 - \mu_1)$ are sometimes negative.

**Example 14.11.**

A random sample of size $n_1 = 25$ taken from a normal population with a standard deviation $\sigma_1 = 5$ has a mean $\bar{X}_1 = 80$. A second random sample of size $n_2 = 36$, taken from a different normal population with a standard deviation $\sigma_2 = 3$, has a mean $\bar{X}_2 = 75$. Find a $94\%$ confidence interval for $\mu_1 - \mu_2$.

**Solution:** A $100(1-\alpha)\%$ confidence interval for $\mu_1 - \mu_2$ is

$$(\bar{X}_1 - \bar{X}_2) - Z_{\frac{\alpha}{2}} \sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}} < \mu_1 - \mu_2 < (\bar{X}_1 - \bar{X}_2) + Z_{\frac{\alpha}{2}} \sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}}$$

Here, $n_1 = 25$, $\sigma_1 = 5$, $\sigma_1^2 = 25$, $\bar{X}_1 = 80$, $n_2 = 36$, $\sigma_2 = 3$, $\sigma_2^2 = 9$, $\bar{X}_2 = 75$,
