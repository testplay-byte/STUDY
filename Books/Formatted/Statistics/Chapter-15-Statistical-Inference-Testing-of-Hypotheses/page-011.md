---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-8
chapter_folder: Chapter-15-Statistical-Inference-Testing-of-Hypotheses
chapter_number: 15
chapter_title: "Statistical Inference Testing of Hypotheses"
page_image: 11
page_printed: 249
section: 15.20 HYPOTHESIS TESTING — POPULATION MEAN μ WHEN σ UNKNOWN ( LARGE SAMPLE )
exercise: null
content_type: theory
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-15-Statistical-Inference-Testing-of-Hypotheses/0011.jpg
converted_at: "2026-10-06"
converted_by: "agent-23b (glm-vision)"
notes: "Offset check: printed p.249 = image 11 + 238 (header folio, top-right; odd page). Page holds complete Examples 15.4 and 15.5, then section 15.20 begins and continues on next page. BOOK TYPO preserved: Example 15.4 (vi) says calculated Z = -2.88 'falls in the acceptance region, so we accept' although -2.88 < -1.645 is in the rejection region — transcribed as printed."
---

# Page 11 — Statistical Inference Testing of Hypotheses (Chapter 15)

> 📄 Original scan: [0011.jpg](../../../Raw/Statistics/Chapter-15-Statistical-Inference-Testing-of-Hypotheses/0011.jpg) · printed page 249

**Example 15.4.**
A random sample of size 36 is taken from a normal population with known variance 25. If $\bar{X} = 42.6$ then test the hypothesis $H_0 : \mu = 45$ against the alternative hypothesis $H_1 : \mu < 45$. Use $\alpha = 0.05$.

**Solution:**

(i) Null hypothesis: $H_0 : \mu = 45$ and Alternative hypothesis: $H_1 : \mu < 45$

(ii) Level of significance: $\alpha = 0.05$

(iii) Test-statistic: $Z = \frac{\bar{X} - \mu_0}{\sigma / \sqrt{n}}$

(iv) Critical region: $Z < -1.645$
(From the area table of normal distribution, we have $-Z_\alpha = -Z_{0.05} = -1.645$)

(v) Computations: Here, $n = 36$, $\bar{X} = 42.6$, $\sigma^2 = 25$, $\sigma = 5$ and hence
$$Z = \frac{42.6 - 45}{5 / \sqrt{36}} = \frac{-2.4}{5} (6) = -2.88$$

(vi) Conclusion: Since the calculated value of $Z = -2.88$ falls in the acceptance region, so we accept our null hypothesis $H_0 : \mu = 45$ at 5% level of significance.

**Example 15.5.**
Ten dry cells were taken from store and voltage test gave the following results: 1.52, 1.53, 1.49, 1.48, 1.47, 1.49, 1.51, 1.50, 1.45, 1.46 volts. The mean voltage of the cells when stored was 1.51 volts. Assuming the standard deviation to remain unchanged at 0.02 volts, is there reason to believe that the cells have deteriorated? Use $\alpha = 0.05$.

**Solution:**

(i) Null hypothesis: $H_0 : \mu = 1.51$ and Alternative hypothesis: $H_1 : \mu < 1.51$

(ii) Level of significance: $\alpha = 0.05$

(iii) Test - statistic: $Z = \frac{\bar{X} - \mu_0}{\sigma / \sqrt{n}}$

(iv) Critical region: $Z < -1.645$
(From the area table of normal distribution, we have $-Z_\alpha = -Z_{0.05} = -1.645$)

(v) Computations: Here, $n = 10$, $\sum X = 14.9$, $\bar{X} = \frac{\sum X}{n} = \frac{14.9}{10} = 1.49$, $\sigma = 0.02$
and hence $Z = \frac{1.49 - 1.51}{0.02 / \sqrt{10}} = -3.162$

(vi) Conclusion: Since the calculated value of $Z = -3.162$ falls in the critical region, so we reject our null hypothesis $H_0 : \mu = 1.51$ at 5% level of significance. We may conclude that the mean voltage of cells was less than 1.51 volts.

## 15.20 HYPOTHESIS TESTING — POPULATION MEAN μ WHEN σ UNKNOWN ( LARGE SAMPLE )

This is an important case in which $\sigma$ is not known. When sample size n is large, the population may be normal or not, the sampling distribution of $\bar{X}$ has the normal distribution with mean $\mu$ and standard error $\frac{\sigma}{\sqrt{n}}$. But when $\sigma$ is unknown, it is estimated by the sample standard deviation S and the estimated standard error is $\frac{S}{\sqrt{n}}$. The Z-statistic becomes $Z = \frac{\bar{X} - \mu}{S / \sqrt{n}}$ where $S^2 = \frac{\sum(X - \bar{X})^2}{n}$. The remaining procedure is exactly the same as discussed earlier. The only difference is that S is used in place of $\sigma$ in the calculation of Z.
