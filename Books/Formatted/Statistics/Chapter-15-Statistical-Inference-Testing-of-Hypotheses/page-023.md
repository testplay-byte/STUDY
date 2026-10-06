---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-8
chapter_folder: Chapter-15-Statistical-Inference-Testing-of-Hypotheses
chapter_number: 15
chapter_title: "Statistical Inference Testing of Hypotheses"
page_image: 23
page_printed: 261
section: 15.28 TEST OF POPULATION PROPORTION p ( LARGE SAMPLE )
exercise: null
content_type: mixed
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-15-Statistical-Inference-Testing-of-Hypotheses/0023.jpg
converted_at: "2026-10-06"
converted_by: "agent-24a (glm-vision)"
notes: "Offset check: printed p.261 = image 23 + 238 (header folio, top-right; odd page). Page completes Example 15.20 (calculation table X1/X2/d/d2, t = 0.536, acceptance-region conclusion — book prints 'we accept our null hypothesis', preserved verbatim), then complete Example 15.21 (paired wheat-yield t-test, t = 7.133), then opens section 15.28 (population proportion) whose Z-formula paragraph ends the page mid-section; continues on next page. No figures, no cut-offs."
---

# Page 23 — Statistical Inference Testing of Hypotheses (Chapter 15)

> 📄 Original scan: [0023.jpg](../../../Raw/Statistics/Chapter-15-Statistical-Inference-Testing-of-Hypotheses/0023.jpg) · printed page 261

The necessary calculations are given below:

| $X_1$ | 2 | 4 | 5 | 7 | 7 | 5 | 9 | 8 | 8 | 7 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| $X_2$ | 4 | 5 | 3 | 8 | 9 | 4 | 7 | 8 | 5 | 6 |
| $d = X_1 - X_2$ | –2 | –1 | +2 | –1 | –2 | +1 | +2 | 0 | +3 | +1 |
| $d^2$ | 4 | 1 | 4 | 1 | 4 | 1 | 4 | 0 | 9 | 1 |

Here, $n = 10, \sum d = 3, \sum d^2 = 29, \bar{d} = \frac{\sum d}{n} = \frac{3}{10} = 0.3,$

$$s_d^2 = \frac{1}{n-1} \left[ \sum d^2 - \frac{(\sum d)^2}{n} \right] = \frac{1}{10-1} \left[ 29 - \frac{(3)^2}{10} \right] = 3.1222, s_d = 1.77, \text{ and hence}$$

$$t = \frac{0.3 - 0}{1.77 / \sqrt{10}} = \frac{0.3}{1.77} \sqrt{10} = 0.536$$

(vi) Conclusion: Since the calculated value of $t = 0.536$ falls in the acceptance region, so we accept our null hypothesis $H_0 : \mu_{new} \leq \mu_{old}$ at 5 % level of significance. On the basis of the evidence, we may conclude that the average wear is not higher for the new material than the old material.

**Example 15.21.**

Two varieties of wheat are each planted in ten localities with differences in yield as follows: 2, 4, 2, 2, 3, 6, 2, 2, 4, 3. Test the hypothesis that the population mean difference is zero, using $\alpha = 0.01$.

**Solution:**

(i) Null hypothesis: $H_0 : \mu_1 = \mu_2$ or $\mu_D = \mu_1 - \mu_2 = 0$

Alternative hypothesis: $H_1 : \mu_1 \neq \mu_2$ or $\mu_D = \mu_1 - \mu_2 \neq 0$

(ii) Level of significance: $\alpha = 0.01$

(iii) Test - statistic: $t = \frac{\bar{d} - d_0}{s_d / \sqrt{n}}$

(iv) Critical region: $|t| > 3.250$ ($t < -3.250$ and $t > 3.250$)

(From the t-table, we have $t_{\frac{\alpha}{2}(n-1)} = t_{0.005(9)} = 3.250$)

(v) Computations: Here, $n = 10, \sum d = 30, \sum d^2 = 106, \bar{d} = \frac{\sum d}{n} = \frac{30}{10} = 3,$

$$s_d^2 = \frac{1}{n-1} \left[ \sum d^2 - \frac{(\sum d)^2}{n} \right] = \frac{1}{10-1} \left[ 106 - \frac{(30)^2}{10} \right] = 1.7778, s_d = 1.33, \text{ and hence}$$

$$t = \frac{3 - 0}{1.33 / \sqrt{10}} = \frac{3}{1.33} \sqrt{10} = 7.133$$

(vi) Conclusion: Since the calculated value of $t = 7.133$ falls in the critical region, so we reject our null hypothesis $H_0 : \mu_1 = \mu_2$ at 1 % level of significance.

## 15.28 TEST OF POPULATION PROPORTION p ( LARGE SAMPLE )

Let us consider a binomial population with a proportion p which is unknown and we have to test a hypothesis about the unknown population parameter. A random sample of size n ( n > 30 ) is selected from the population and the sample proportion $\hat{p}$ is calculated. When sample size is large, the distribution of $\hat{p}$ is normal with mean p and standard error $\sqrt{\frac{pq}{n}}$. The random variable Z can be calculated from $\hat{p}$. Thus $Z = \frac{\hat{p} - p}{\sqrt{\frac{pq}{n}}}$.
