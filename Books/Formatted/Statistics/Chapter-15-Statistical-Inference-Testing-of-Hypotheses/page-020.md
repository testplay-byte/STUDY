---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-8
chapter_folder: Chapter-15-Statistical-Inference-Testing-of-Hypotheses
chapter_number: 15
chapter_title: "Statistical Inference Testing of Hypotheses"
page_image: 20
page_printed: 258
section: null
exercise: null
content_type: mixed
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-15-Statistical-Inference-Testing-of-Hypotheses/0020.jpg
converted_at: "2026-10-06"
converted_by: "23-c (glm-vision)"
notes: "Offset check: printed p.258 = image 20 + 238 (header folio, top-left; even page). Page opens with the closing lines of section 15.26 theory (pooled estimator s_p^2, t-test statistic and critical values) continued from p.257, then complete Example 15.18 with data table. No printed section heading on the page (section null). Printed 't_{alpha/2(n1+n2-2)}' transcribed with (n1+n2-2) on the subscript line per print; null symbol is letter-o subscript H_o; '1 %' and 'Test - statistic' spacing preserved. No figures, no cut-offs."
---

# Page 20 — Statistical Inference Testing of Hypotheses (Chapter 15)

> 📄 Original scan: [0020.jpg](../../../Raw/Statistics/Chapter-15-Statistical-Inference-Testing-of-Hypotheses/0020.jpg) · printed page 258

$s_p^2$ is called pooled estimator of the common population variance $\sigma^2$. The difference $(\bar{X}_1 - \bar{X}_2)$ has the t-distribution with $(n_1 + n_2 - 2)$ degrees of freedom where

$$t = \frac{(\bar{X}_1 - \bar{X}_2) - (\mu_1 - \mu_2)}{\sqrt{\frac{s_p^2}{n_1} + \frac{s_p^2}{n_2}}} = \frac{(\bar{X}_1 - \bar{X}_2) - (\mu_1 - \mu_2)}{s_p\sqrt{\frac{1}{n_1} + \frac{1}{n_2}}}$$

The tabulated value of 't' for $n_1 + n_2 - 2$ degrees of freedom is seen from the t-table.

For $H_1 : \mu_1 \neq \mu_2$ the critical values are $-t_{\alpha/2}(n_1 + n_2 - 2)$ and $+t_{\alpha/2}(n_1 + n_2 - 2)$

For $H_1 : \mu_1 > \mu_2$, the critical value is $t_\alpha(n_1 + n_2 - 2)$, and

For $H_1 : \mu_1 < \mu_2$ the critical value is $-t_\alpha(n_1 + n_2 - 2)$

The null hypothesis $H_o$ is rejected when the calculated value of t lies in critical region.

**Example 15.18.**

Two samples are randomly selected from two classes of students who have been taught by different methods. An examination is given and the results are shown as follows:

| | Class I | Class II |
|---|---|---|
| Sample Size | $n_1 = 8$ | $n_2 = 10$ |
| Mean | $\bar{X}_1 = 95$ | $\bar{X}_2 = 97$ |
| Variance | $s_1^2 = 47$ | $s_2^2 = 30$ |

On the assumption that the test scores of the two classes of students have identical variances, determine whether the two different methods of teaching are equally effective at $\alpha = 0.01$.

**Solution:**

(i) Null hypothesis: $H_o : \mu_1 = \mu_2$ and Alternative hypothesis: $H_1 : \mu_1 \neq \mu_2$

(ii) Level of significance: $\alpha = 0.01$

(iii) Test - statistic: $t = \frac{(\bar{X}_1 - \bar{X}_2) - (\mu_1 - \mu_2)}{s_p\sqrt{\frac{1}{n_1} + \frac{1}{n_2}}}$

(iv) Critical region: $|t| > 2.921$ ($t < -2.921$ and $t > 2.921$)

(From the t-table, we have $t_{\frac{\alpha}{2}(n_1+n_2-2)} = t_{0.005(16)} = 2.921$)

(v) Computations: Here, $n_1 = 8, \bar{X}_1 = 95, s_1^2 = 47, n_2 = 10, \bar{X}_2 = 97, s_2^2 = 30,$

$s_p^2 = \frac{(n_1 - 1)s_1^2 + (n_2 - 1)s_2^2}{n_1 + n_2 - 2} = \frac{(8 - 1)47 + (10 - 1)30}{8 + 10 - 2} = \frac{599}{16} = 37.4375,$

$s_p = \sqrt{37.4375} = 6.12$, and hence $t = \frac{(95 - 97) - 0}{6.12\sqrt{\frac{1}{8} + \frac{1}{10}}} = \frac{-2}{2.9030} = -0.689$

(vi) Conclusion: Since the calculated value of $t = -0.689$ falls in the acceptance region, so we accept our null hypothesis $H_o : \mu_1 = \mu_2$ at 1 % level of significance. On the basis of the evidence, we may conclude that the two different methods of teaching are equally effective.
