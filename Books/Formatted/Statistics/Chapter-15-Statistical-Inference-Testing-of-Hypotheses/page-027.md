---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-8
chapter_folder: Chapter-15-Statistical-Inference-Testing-of-Hypotheses
chapter_number: 15
chapter_title: "Statistical Inference Testing of Hypotheses"
page_image: 27
page_printed: 265
section: 15.29 TEST OF DIFFERENCE BETWEEN TWO POPULATION PROPORTIONS, p1 – p2 ( LARGE SAMPLES )
exercise: null
content_type: mixed
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-15-Statistical-Inference-Testing-of-Hypotheses/0027.jpg
converted_at: "2026-10-06"
converted_by: "agent-25a (glm-vision)"
notes: "Offset check: printed p.265 = image 27 + 238 (header folio 265, top-right; odd page). Page opens mid-Example 15.25 (continuation from previous page) with (iv) Critical region through (vi) Conclusion (coin unbiased, Z = 1.6, accepted), then theory section 15.29 begins and runs to the end of the page, which closes with the Delta test-statistic display formula. 'Test - statistic' hyphen spacing as printed in (iii). No figures, no cut-offs, nothing illegible."
---

# Page 27 — Statistical Inference Testing of Hypotheses (Chapter 15)

> 📄 Original scan: [0027.jpg](../../../Raw/Statistics/Chapter-15-Statistical-Inference-Testing-of-Hypotheses/0027.jpg) · printed page 265

(iv) Critical region: $| Z | > 2.575$ ($Z < -2.575$ and $Z > 2.575$)

(From the area table of normal distribution, we have $Z_{\frac{\alpha}{2}} = Z_{0.005} = 2.575$)

(v) Computations: Here, $n = 400$, $X = 216$, $\hat{p} = \frac{X}{n} = \frac{216}{400} = 0.54$, $p_0 = 0.5$, $q_0 = 1 - p_0 = 0.5$

and hence

$$Z = \frac{0.54 - 0.5}{\sqrt{\frac{(0.5)(0.5)}{400}}} = \frac{0.04}{0.025} = 1.6$$

(vi) Conclusion: Since the calculated value of $Z = 1.6$ falls in the acceptance region, so we accept our null hypothesis $H_0 : p = 0.5$ at 1 % level of significance. We may conclude that the coin is unbiased.

## 15.29 TEST OF DIFFERENCE BETWEEN TWO POPULATION PROPORTIONS, p1 – p2 ( LARGE SAMPLES )

Suppose there are two binomial populations with proportions $p_1$ and $p_2$ which are unknown. Two independent large random samples of sizes $n_1$ and $n_2$ are selected from the populations and sample proportion $\hat{p}_1$ and $\hat{p}_2$ are calculated. The difference $(\hat{p}_1 - \hat{p}_2)$ is a random variable and has the normal distribution with mean $p_1 - p_2$ and standard error $\sqrt{\frac{p_1q_1}{n_1} + \frac{p_2q_2}{n_2}}$

The procedure for testing of the difference between $p_1$ and $p_2$ is given below:

(i) Three forms of the hypotheses are as below:
(a) $H_0 : p_1 - p_2 = 0$ (or $H_0 : p_1 = p_2$) and $H_1 : p_1 - p_2 \neq 0$ (or $H_1 : p_1 \neq p_2$)
(b) $H_0 : p_1 - p_2 \leq 0$ (or $H_0 : p_1 \leq p_2$) and $H_1 : p_1 - p_2 > 0$ (or $H_1 : p_1 > p_2$)
(c) $H_0 : p_1 - p_2 \geq 0$ (or $H_0 : p_1 \geq p_2$) and $H_1 : p_1 - p_2 < 0$ (or $H_1 : p_1 < p_2$)
(ii) Level of significance is decided and is denoted by $\alpha$.
(iii) Test - statistic: The random variable $Z$ is used as test statistic where

$$Z = \frac{(\hat{p}_1 - \hat{p}_2) - (p_1 - p_2)}{\sqrt{\frac{p_1q_1}{n_1} + \frac{p_2q_2}{n_2}}}$$

but $Z$ as defined above is only in theory. In actual practice when $H_0$ is $p_1 - p_2 = 0$ (or $p_1 = p_2$), the values of $p_1$, $q_1$, $p_2$ and $q_2$ are not known because these are all unknown parameters. When $H_0$ is $p_1 = p_2$, then we assume that the common population proportion for both populations is $p_c$. This proportion $p_c$ is estimated by $\hat{p}_c$ by pooling the data from both samples. Thus $\hat{p}_c = \frac{X_1 + X_2}{n_1 + n_2} = \frac{n_1\hat{p}_1 + n_2\hat{p}_2}{n_1 + n_2}$. Thus the test-statistic used in actual practice is

$$Z = \frac{(\hat{p}_1 - \hat{p}_2) - 0}{\sqrt{\frac{\hat{p}_c\hat{q}_c}{n_1} + \frac{\hat{p}_c\hat{q}_c}{n_2}}} = \frac{\hat{p}_1 - \hat{p}_2}{\sqrt{\hat{p}_c\hat{q}_c\left(\frac{1}{n_1} + \frac{1}{n_2}\right)}}$$

When $H_0$ is $p_1 - p_2 = \Delta$ (say), then the test statistic used is

$$Z = \frac{(\hat{p}_1 - \hat{p}_2) - \Delta}{\sqrt{\frac{\hat{p}_1\hat{q}_1}{n_1} + \frac{\hat{p}_2\hat{q}_2}{n_2}}}$$
