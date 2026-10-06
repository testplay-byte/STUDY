---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-7
chapter_folder: Chapter-14-Statistical-Inference-Estimation
chapter_number: 14
chapter_title: "Statistical Inference Estimation"
page_image: 16
page_printed: 218
section: null
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-14-Statistical-Inference-Estimation/0016.jpg
converted_at: "2026-10-06"
converted_by: "agent-21c (glm-vision)"
notes: "Offset check: printed p.218 = image 16 + 202 (header folio, top-left; even page). Page holds Examples 14.15 and 14.16, both complete on this page. Print observation: in Example 14.15 the symbol linking t_(alpha/2)(v) to t_0.005(23) is a degraded congruence sign (10x pixel zoom shows two bars + wavy element), whereas the parallel t-table line in Example 14.16 on the same page uses plain equals — both transcribed as printed."
---

# Page 16 — Statistical Inference Estimation (Chapter 14)

> 📄 Original scan: [0016.jpg](../../../Raw/Statistics/Chapter-14-Statistical-Inference-Estimation/0016.jpg) · printed page 218

**Example 14.15.**

The following summary statistics are recorded about the strength of two types of synthetic rubber.

| Type I | $n_1 = 16$ | $\bar{X}_1 = 15.3$ | $s_1 = 4.4$ |
| :--- | :--- | :--- | :--- |
| Type II | $n_2 = 9$ | $\bar{X}_2 = 13.8$ | $s_2 = 3.9$ |

Assume that the distribution of strengths for the two types of rubber are normal with equal variances. Compute a $99\%$ confidence interval for the difference $\mu_1 - \mu_2$.

**Solution:** A $100(1-\alpha)\%$ confidence interval for $\mu_1 - \mu_2$ is

$$ (\bar{X}_1 - \bar{X}_2) - t_{\frac{\alpha}{2}(v)} s_p \sqrt{\frac{1}{n_1} + \frac{1}{n_2}} < \mu_1 - \mu_2 < (\bar{X}_1 - \bar{X}_2) + t_{\frac{\alpha}{2}(v)} s_p \sqrt{\frac{1}{n_1} + \frac{1}{n_2}} $$

Here, $n_1 = 16, \bar{X}_1 = 15.3, s_1 = 4.4, s_1^2 = 19.36, n_2 = 9, \bar{X}_2 = 13.8, s_2 = 3.9, s_2^2 = 15.21,$

$$ \begin{aligned} s_p^2 &= \frac{(n_1 - 1) s_1^2 + (n_2 - 1)s_2^2}{n_1 + n_2 - 2} = \frac{(16 - 1)19.36 + (9 - 1) 15.21}{16 + 9 - 2} = \frac{290.4+121.68}{23} \\ &= \frac{412.08}{23} = 17.916 \text{ and } s_p = \sqrt{17.916} = 4.233 \end{aligned} $$

$1 - \alpha = 0.99$ or $\alpha = 0.01$ and $\frac{\alpha}{2} = 0.005, v = n_1 + n_2 - 2= 16 + 9 - 2= 23$

From the t-table, we have $t_{\frac{\alpha}{2}(v)} \cong t_{0.005(23)} = 2.807$

Hence the $99\%$ confidence interval for $\mu_1 - \mu_2$ is

$$ \begin{aligned} &(15.3 - 13.8) - (2.807)(4.233)\sqrt{\frac{1}{16}+\frac{1}{9}} < \mu_1 - \mu_2 < (15.3 - 13.8) + (2.807)(4.233)\sqrt{\frac{1}{16}+\frac{1}{9}} \\ &\qquad\qquad\qquad\qquad\qquad\qquad 1.5 - 4.95 < \mu_1 - \mu_2 < 1.5+ 4.95 \\ &\qquad\qquad\qquad\qquad\qquad\qquad - 3.45 < \mu_1 - \mu_2 < 6.45 \end{aligned} $$

**Example 14.16.**

Given two random samples of size $n_1 = 12$ and $n_2 = 8$ from two independent populations with $\bar{X}_1= 70, \bar{X}_2= 82, \sum(X_1 - \bar{X}_1)^2= 982, \sum(X_2 - \bar{X}_2)^2= 1124$. Compute the 95% confidence limits for $\mu_2 - \mu_1$, assuming $\sigma_1 = \sigma_2$.

**Solution:** A $100(1-\alpha)\%$ confidence interval for $\mu_2 - \mu_1$ is

$$ (\bar{X}_2 - \bar{X}_1) - t_{\frac{\alpha}{2}(v)} s_p \sqrt{\frac{1}{n_1} + \frac{1}{n_2}} < \mu_2 - \mu_1 < (\bar{X}_2 - \bar{X}_1) + t_{\frac{\alpha}{2}(v)} s_p \sqrt{\frac{1}{n_1} + \frac{1}{n_2}} $$

Here, $n_1 = 12, \bar{X}_1 = 70, \sum(X_1 - \bar{X}_1)^2= 982, n_2 = 8; \bar{X}_2 = 82, \sum(X_2 - \bar{X}_2)^2= 1124,$

$$ s_p^2=\frac{\sum(X_1-\bar{X}_1)^2+\sum(X_2-\bar{X}_2)^2}{n_1+n_2-2}=\frac{982+1124}{12+8-2}=\frac{2106}{18}=117 \text{ and } s_p=10.82. $$

$1 - \alpha = 0.95$ or $\alpha = 0.05$ and $\alpha/2 = 0.025, v = n_1 + n_2 - 2= 12 + 8 - 2= 18.$

From the t-table, we have $t_{\frac{\alpha}{2}(v)} = t_{0.025(18)} = 2.101.$

Hence the 95% confidence interval for $\mu_2 - \mu_1$ is

$$ \begin{aligned} &(82 - 70 ) - 2.101( 10.82 )\sqrt{\frac{1}{12}+\frac{1}{8}}< \mu_2 - \mu_1 < ( 82 - 70 ) + 2.101( 10.82 )\sqrt{\frac{1}{12}+\frac{1}{8}} \\ &\qquad\qquad\qquad\qquad\qquad\qquad 12 - 10.38 < \mu_2 - \mu_1 < 12 + 10.38 \\ &\qquad\qquad\qquad\qquad\qquad\qquad 1.62 < \mu_2 - \mu_1 < 22.38 \end{aligned} $$
