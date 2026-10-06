---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-8
chapter_folder: Chapter-15-Statistical-Inference-Testing-of-Hypotheses
chapter_number: 15
chapter_title: "Statistical Inference Testing of Hypotheses"
page_image: 21
page_printed: 259
section: 15.27 TEST ABOUT μ1 – μ2, DEPENDENT SAMPLES, POPULATIONS NORMAL
exercise: null
content_type: mixed
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-15-Statistical-Inference-Testing-of-Hypotheses/0021.jpg
converted_at: "2026-10-06"
converted_by: "23-c (glm-vision)"
notes: "Offset check: printed p.259 = image 21 + 238 (header folio, top-right; odd page). Page opens with complete Example 15.19 (pooled-variance t-test, two independent samples), then section 15.27 theory (dependent/paired samples) through hypothesis-pair item (c); the t-test statistic for 15.27 continues on next page. Printed 'Use 2%' (no space) in the example statement vs '2 %' (with space) in item (vi) — both preserved as printed. No figures, no cut-offs."
---

# Page 21 — Statistical Inference Testing of Hypotheses (Chapter 15)

> 📄 Original scan: [0021.jpg](../../../Raw/Statistics/Chapter-15-Statistical-Inference-Testing-of-Hypotheses/0021.jpg) · printed page 259

**Example 15.19.**

Samples of two types of electric light bulbs were tested for length of life and the following data were obtained:

$$n_1 = 5, \bar{X}_1 = 1224, \sum(X_1 - \bar{X}_1)^2 = 6490, \quad n_2 = 7, \bar{X}_2 = 1036, \sum(X_2 - \bar{X}_2)^2 = 11200.$$

Is the difference in the means significant? Assume that the two samples are drawn from normal populations with identical standard deviation. Use 2% level of significance.

**Solution:**

(i) Null hypothesis: $H_0 : \mu_1 = \mu_2$ and Alternative hypothesis: $H_1 : \mu_1 \neq \mu_2$

(ii) Level of significance: $\alpha = 0.02$

(iii) Test - statistic: $$t = \frac{(\bar{X}_1 - \bar{X}_2) - (\mu_1 - \mu_2)}{s_p\sqrt{\frac{1}{n_1} + \frac{1}{n_2}}}$$

(iv) Critical region: $|t| > 2.764$ ($t < -2.764$ and $t > 2.764$)

(From the t-table, we have $t_{\frac{\alpha}{2}(n_1+n_2-2)} = t_{0.01(10)} = 2.764$)

(v) Computations: Here, $n_1 = 5, \bar{X}_1 = 1224, \sum(X_1 - \bar{X}_1)^2 = 6490, n_2 = 7, \bar{X}_2 = 1036, \sum(X_2 - \bar{X}_2)^2 = 11200,$

$$\begin{aligned} s_p^2 &= \frac{\sum(X_1 - \bar{X}_1)^2 + \sum(X_2 - \bar{X}_2)^2}{n_1 + n_2 - 2} = \frac{6490 + 11200}{5 + 7 - 2} = \frac{17690}{10} = 1769, s_p = 42.06 \text{ and hence} \\ t &= \frac{(1224 - 1036) - 0}{42.06\sqrt{\frac{1}{5} + \frac{1}{7}}} = \frac{188}{24.6278} = 7.63 \end{aligned}$$

(vi) Conclusion: Since the calculated value of $t = 7.63$ falls in the critical region, so we reject our null hypothesis $H_0 : \mu_1 = \mu_2$ at 2 % level of significance. We may conclude that the difference in the two means is significant.

## 15.27 TEST ABOUT μ1 – μ2, DEPENDENT SAMPLES, POPULATIONS NORMAL

Suppose there are two populations with mean $\mu_1$ and $\mu_2$ which are unknown. Two random samples of sizes $n_1$ and $n_2$ are selected. It is further assumed that the samples are dependent. Suppose we record blood pressures of a sample of some patients. The patients are given a treatment for some period and again their blood pressures are recorded. These two sets of observations are called dependent samples. The first set of observations is called 'before' and the second set of observations is called 'after' observations. These observations are in pairs. If $X_1, X_2, X_3, \cdots, X_n$ are the 'before' observations and $Y_1, Y_2, Y_3, \cdots, Y_n$ are the 'after' observations, then the paired observations are $(X_1, Y_1), (X_2, Y_2), (X_3, Y_3), \cdots, (X_n, Y_n)$. Let us find the difference between the paired values. Let difference $d_1 = X_1 - Y_1, d_2 = X_2 - Y_2, d_3 = X_3 - Y_3, \cdots, d_n = X_n - Y_n$.

The mean of the sample 'd' values is denoted by $\bar{d}$. Suppose the corresponding parameter of the difference between paired observations in the populations is denoted by $\mu_D$. The various steps of the procedure are:

(i) Three different forms of null and alternative hypotheses are

(a) $H_0 : \mu_D = 0$ (or $H_0 : \mu_1 = \mu_2$) and $H_1 : \mu_D \neq 0$ (or $H_1 : \mu_1 \neq \mu_2$)

(b) $H_0 : \mu_D \leq 0$ (or $H_0 : \mu_1 \leq \mu_2$) and $H_1 : \mu_D > 0$ (or $H_1 : \mu_1 > \mu_2$)

(c) $H_0 : \mu_D \geq 0$ (or $H_0 : \mu_1 \geq \mu_2$) and $H_1 : \mu_D < 0$ (or $H_1 : \mu_1 < \mu_2$)
