---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-7
chapter_folder: Chapter-14-Statistical-Inference-Estimation
chapter_number: 14
chapter_title: "Statistical Inference Estimation"
page_image: 18
page_printed: 220
section: null
exercise: null
content_type: mixed
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-14-Statistical-Inference-Estimation/0018.jpg
converted_at: "2026-10-06"
converted_by: "agent-21c (glm-vision)"
notes: "Offset check: printed p.220 = image 18 + 202 (header folio, top-left; even page). Page opens mid-paragraph (continuation of the paired-observations theory from p.219) and ends mid-solution of Example 14.18 (after the t-table value 2.776; the confidence-interval conclusion follows on p.221). No printed section heading on the page (section null). No figures."
---

# Page 18 — Statistical Inference Estimation (Chapter 14)

> 📄 Original scan: [0018.jpg](../../../Raw/Statistics/Chapter-14-Statistical-Inference-Estimation/0018.jpg) · printed page 220

$\bar{d}$ has the t-distribution with $(n - 1)$ degrees of freedom having mean $\mu_d$ and standard error $\frac{\sigma_d}{\sqrt{n}}$. The random variable $\bar{d}$ can be transformed into random variable $t$ where $t = \frac{\bar{d} - \mu_d}{\sigma_d / \sqrt{n}}$

The standard deviation $\sigma_d$ is unknown and is replaced by its sample estimate $s_d$ where $s_d = \sqrt{\frac{\sum(d - \bar{d})^2}{n - 1}}$. Thus $t = \frac{\bar{d} - \mu_d}{s_d / \sqrt{n}}$. The random variable 't' lies between $-t_{\frac{\alpha}{2}(n-1)}$ and $+t_{\frac{\alpha}{2}(n-1)}$ with a probability of $(1 - \alpha)$. We can write the probability statement

$$P \left[ -t_{\frac{\alpha}{2}(n-1)} < +t < t_{\frac{\alpha}{2}(n-1)} \right] = 1 - \alpha \quad \text{or} \quad P \left[ -t_{\frac{\alpha}{2}(n-1)} < \frac{\bar{d} - \mu_d}{s_d / \sqrt{n}} < +t_{\frac{\alpha}{2}(n-1)} \right] = 1 - \alpha$$

The terms within the brackets can be written as:

$$P \left[ \bar{d} - t_{\frac{\alpha}{2}(n-1)} \frac{s_d}{\sqrt{n}} < \mu_d < \bar{d} + t_{\frac{\alpha}{2}(n-1)} \frac{s_d}{\sqrt{n}} \right] = 1 - \alpha$$

Thus $100(1 - \alpha)\%$ confidence interval for $\mu_d = \mu_1 - \mu_2$ is

$$\bar{d} - t_{\frac{\alpha}{2}(n-1)} \frac{s_d}{\sqrt{n}} < \mu_d < \bar{d} + t_{\frac{\alpha}{2}(n-1)} \frac{s_d}{\sqrt{n}}$$

**Example 14.18.**

The following data give paired yields of two varieties of wheat. Each pair was planted in a different locality.

| Locality | 1 | 2 | 3 | 4 | 5 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Variety I | 40 | 25 | 37 | 43 | 46 |
| Variety II | 47 | 27 | 33 | 40 | 52 |

Compute a $95\%$ confidence interval for the mean difference between the yields of the two varieties, assuming the differences of yields to be approximately normally distributed.

**Solution:** A $100(1 - \alpha)\%$ confidence interval for $\mu_d = \mu_1 - \mu_2$ is

$$\bar{d} - t_{\frac{\alpha}{2}(n-1)} \frac{s_d}{\sqrt{n}} < \mu_d < \bar{d} + t_{\frac{\alpha}{2}(n-1)} \frac{s_d}{\sqrt{n}}$$

The necessary calculations are given below:

| $X_1$ | 40 | 25 | 37 | 43 | 46 |  |
| :--- | :--- | :--- | :--- | :--- | :--- |
| $X_2$ | 47 | 27 | 33 | 40 | 52 |  |
| $d_i = X_1 - X_2$ | $-7$ | $-2$ | $4$ | $3$ | $-6$ | $\sum d_i = -8$ |
| $d_i^2$ | 49 | 4 | 16 | 9 | 36 | $\sum d_i^2 = 114$ |

$$\bar{d} = \frac{\sum d_i}{n} = \frac{-8}{5} = -1.6$$

$$s_d^2 = \frac{1}{n-1} \left[ \sum d_i^2 - \frac{(\sum d_i)^2}{n} \right] = \frac{1}{5-1} \left[ 114 - \frac{(-8)^2}{5} \right] = \frac{1}{4} [101.2] = 25.3,$$

$s_d = 5.03$, $1 - \alpha = 0.95$ or $\alpha = 0.05$ and $\frac{\alpha}{2} = 0.025$

From the t-table, we have $t_{\frac{\alpha}{2}(n-1)} = t_{0.025(4)} = 2.776$
