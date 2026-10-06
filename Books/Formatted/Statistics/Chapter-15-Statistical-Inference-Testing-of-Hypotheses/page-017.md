---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-8
chapter_folder: Chapter-15-Statistical-Inference-Testing-of-Hypotheses
chapter_number: 15
chapter_title: "Statistical Inference Testing of Hypotheses"
page_image: 17
page_printed: 255
section: null
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-15-Statistical-Inference-Testing-of-Hypotheses/0017.jpg
converted_at: "2026-10-06"
converted_by: "23-c (glm-vision)"
notes: "Offset check: printed p.255 = image 17 + 238 (header folio, top-right; odd page). Page opens with the bold 'Solution:' of Example 15.13 (continued from p.254), then Examples 15.14 and 15.15; page ends mid-solution of Example 15.15 (at item (iii) display formula) — continues on next page. No printed section heading on the page (section null). Printed spacing '5 %', 'Test - statistic' and 'Test- statistic' (as printed in 15.14) preserved verbatim."
---

# Page 17 — Statistical Inference Testing of Hypotheses (Chapter 15)

> 📄 Original scan: [0017.jpg](../../../Raw/Statistics/Chapter-15-Statistical-Inference-Testing-of-Hypotheses/0017.jpg) · printed page 255

**Solution:**

(i) Null hypothesis: $H_0 : \mu_1 = \mu_2$ and Alternative hypothesis: $H_1 : \mu_1 > \mu_2$

(ii) Level of significance: $\alpha = 0.05$

(iii) Test - statistic: $$Z = \frac{(\bar{X}_1 - \bar{X}_2) - (\mu_1 - \mu_2)}{\sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}}}$$

(iv) Critical region: $Z > 1.645$

(From the area table of normal distribution, we have $Z_\alpha = Z_{0.05} = 1.645$)

(v) Computations: Here, $n_1 = 36$, $\bar{X}_1 = 8.75$, $\sigma_1^2 = 9$, $n_2 = 64$, $\bar{X}_2 = 7.25$, $\sigma_2^2 = 4$,

and hence $$Z = \frac{(8.75 - 7.25) - 0}{\sqrt{\frac{9}{36} + \frac{4}{64}}} = \frac{1.5}{0.5590} = 2.683$$

(vi) Conclusion: Since the calculated value of $Z = 2.683$ falls in the critical region, so we reject our null hypothesis $H_0 : \mu_1 = \mu_2$ at 5 % level of significance.

**Example 15.14.**

If $n_1 = 25$, $\bar{X}_1 = 16.7$, $\sigma_1 = 0.6$, $n_2 = 36$, $\bar{X}_2 = 15.8$ and $\sigma_2 = 0.3$. Test at the 5% level of significance the hypothesis that there is no difference between two population means.

**Solution:**

(i) Null hypothesis: $H_0 : \mu_1 = \mu_2$ and Alternative hypothesis: $H_1 : \mu_1 \neq \mu_2$

(ii) Level of significance: $\alpha = 0.05$

(iii) Test- statistic: $$Z = \frac{(\bar{X}_1 - \bar{X}_2) - (\mu_1 - \mu_2)}{\sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}}}$$

(iv) Critical region: $|Z| > 1.96$ ($Z < -1.96$ and $Z > 1.96$)

(From the area table of normal distribution, we have $Z_{\alpha/2} = Z_{0.025} = 1.96$).

(v) Computations: Here, $n_1 = 25$, $\bar{X}_1 = 16.7$, $\sigma_1 = 0.6$, $\sigma_1^2 = 0.36$, $n_2 = 36$, $\bar{X}_2 = 15.8$, $\sigma_2 = 0.3$, $\sigma_2^2 = 0.09$

and hence $$Z = \frac{(16.7 - 15.8) - 0}{\sqrt{\frac{0.36}{25} + \frac{0.09}{36}}} = \frac{0.9}{0.13} = 6.923$$

(vi) Conclusion: Since the calculated value of $Z = 6.923$ falls in the critical region, so we reject our null hypothesis $H_0 : \mu_1 = \mu_2$ at 5% level of significance. We may conclude that there is difference between two population means.

**Example 15.15.**

Two astronomers recorded observations on a certain star. The mean of 30 observations obtained by first astronomer is 8.85 and mean of 40 observations made by second astronomer is 8.20. Past experience shows that each astronomer obtained readings with variance of 1.2. Using $\alpha = 0.01$, can we say that the difference between two results is significant.

**Solution:**

(i) Null hypothesis: $H_0 : \mu_1 = \mu_2$ and Alternative hypothesis: $H_1 : \mu_1 \neq \mu_2$

(ii) Level of significance: $\alpha = 0.01$

(iii) Test - statistic: $$Z = \frac{(\bar{X}_1 - \bar{X}_2) - (\mu_1 - \mu_2)}{\sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}}} = \frac{(\bar{X}_1 - \bar{X}_2) - (\mu_1 - \mu_2)}{\sigma\sqrt{\frac{1}{n_1} + \frac{1}{n_2}}} \quad (\because \sigma_1^2 = \sigma_2^2 = \sigma^2)$$
