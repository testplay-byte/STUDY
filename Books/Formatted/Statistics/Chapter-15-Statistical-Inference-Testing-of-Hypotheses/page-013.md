---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-8
chapter_folder: Chapter-15-Statistical-Inference-Testing-of-Hypotheses
chapter_number: 15
chapter_title: "Statistical Inference Testing of Hypotheses"
page_image: 13
page_printed: 251
section: 15.21 HYPOTHESIS TESTING – POPULATION MEAN μ WHEN σ KNOWN – NORMAL POPULATION ( SMALL SAMPLE ); 15.22 HYPOTHESIS TESTING – POPULATION MEAN μ WHEN σ UNKNOWN – NORMAL POPULATION ( SMALL SAMPLE )
exercise: null
content_type: theory
has_figures: true
figures_count: 2
source_image: ../../../Raw/Statistics/Chapter-15-Statistical-Inference-Testing-of-Hypotheses/0013.jpg
converted_at: "2026-10-06"
converted_by: "agent-23b (glm-vision)"
notes: "Offset check: printed p.251 = image 13 + 238 (header folio, top-right; odd page). Page opens with the continuation (items iv-vi) of Example 15.8 from p.250, then sections 15.21 and 15.22. BOOK TYPOS preserved: 'as show in Figure-11' (item a, final sentence) and the garbled opening 'Sometimes the hypothesis about the population which is normal and its standard deviation sigma is known.' — both transcribed as printed. | TYPO-CORRECTION PASS (2026-10-06, user mandate): unambiguous surface typo(s) corrected in the body per correction policy v4.4 — printed forms remain documented earlier in this note and itemised in docs/tracking/CORRECTIONS-LOG.md."
---

# Page 13 — Statistical Inference Testing of Hypotheses (Chapter 15)

> 📄 Original scan: [0013.jpg](../../../Raw/Statistics/Chapter-15-Statistical-Inference-Testing-of-Hypotheses/0013.jpg) · printed page 251

(iv) Critical region: $|Z| > 1.96$ ($Z < -1.96$ and $Z > 1.96$)

(From the area table of normal distribution, we have $Z_{\frac{\alpha}{2}} = Z_{0.025} = 1.96$)

(v) Computations: Here, $n = 36, \bar{X} = 1087, S = 120$ and hence

$$Z = \frac{1087 - 1120}{120/\sqrt{36}} = \frac{-33}{20} = -1.65$$

(vi) Conclusion: Since the calculated value of $Z = -1.65$ falls in the acceptance region, so we accept our null hypothesis $H_0 : \mu = 1120$ at $5\%$ level of significance. We may conclude that the mean life time of light bulbs has not changed.

## 15.21 HYPOTHESIS TESTING – POPULATION MEAN μ WHEN σ KNOWN – NORMAL POPULATION ( SMALL SAMPLE )

Sometimes the hypothesis about the population which is normal and its standard deviation $\sigma$ is known. In this case Z-test is used both for small and large sample size. Thus $Z = \frac{\bar{X}-\mu}{\sigma/\sqrt{n}}$. The procedure for testing of population mean $\mu$ is the same as discussed earlier.

## 15.22 HYPOTHESIS TESTING – POPULATION MEAN μ WHEN σ UNKNOWN – NORMAL POPULATION ( SMALL SAMPLE )

When the standard deviation of the population is not known, it is estimated by the sample standard deviation 's' where $s = \sqrt{\frac{1}{n-1} \sum(X-\bar{X})^2}$. The procedure runs as follows:

The different forms of hypotheses are

(i) (a) $H_0 : \mu = \mu_0$ and $H_1 : \mu \neq \mu_0$ (b) $H_0 : \mu \leq \mu_0$ and $H_1 : \mu > \mu_0$

(c) $H_0 : \mu \geq \mu_0$ and $H_1 : \mu < \mu_0$

(ii) Level of significance $\alpha$ is decided.

(iii) Test – statistic: When population is normal and sample size n is small, the sampling distribution of $\bar{X}$ has the t-distribution with $(n - 1)$ degrees of freedom. The test-statistic is

$$t = \frac{\bar{X} - \mu_0}{s/\sqrt{n}}.$$

Critical region:
The critical region is based on the alternative hypothesis.

(a) For the alternative hypothesis $H_1 : \mu \neq \mu_0$, the rejection region is two-sided as shown in Figure-11. The two critical values $-t_{\alpha/2(n - 1)}$ and $+t_{\alpha/2( n - 1)}$ are seen from the t-table below $\alpha/2$ and against $(n - 1)$ degrees of freedom. The critical region is $t > +t_{\alpha/2(n - 1)}$ or $t < -t_{\alpha/2(n - 1)}$ as shown in Figure-11.

[Figure F1]

(b) When $H_1$ is $\mu > \mu_0$, the rejection region is taken on the extreme right side of the sampling distribution as shown in Figure-12. The critical value $t_{\alpha( n - 1)}$ is seen from the t-table below $\alpha$ and against $(n - 1)$ degrees of freedom. The critical region is $t > t_{\alpha( n - 1)}$.

[Figure F2]

## Figures on this page

### Figure F1 — Two-tailed rejection regions for t-distribution (middle right)
- **Type:** curve-plot
- **Caption/Number:** Figure-11
- **Description:** A symmetric bell-shaped curve representing a t-distribution centered at $\mu=\mu_0$. The horizontal axis represents the test statistic $t$, with $t=0$ at the center. The area under the curve is divided into three parts: a central "Acceptance Region" labeled with probability $(1-\alpha)$, and two tail areas labeled "Rejection Region" each with area $\alpha/2$. The left critical value is marked as $-t_{\alpha/2(n-1)}$ and the right critical value is marked as $+t_{\alpha/2(n-1)}$.
- **Mathematical meaning:** Illustrates the two-tailed critical region for testing $H_1: \mu \neq \mu_0$ where the null hypothesis is rejected if the test statistic falls in either tail beyond the critical values determined by $\alpha/2$ and $n-1$ degrees of freedom.

### Figure F2 — Right-tailed rejection region for t-distribution (bottom right)
- **Type:** curve-plot
- **Caption/Number:** Figure-12
- **Description:** A symmetric bell-shaped curve representing a t-distribution centered at $\mu=\mu_0$. The horizontal axis represents the test statistic $t$, with $t=0$ at the center. The area under the curve is divided into two parts: a large left/central "Acceptance Region" labeled with probability $(1-\alpha)$, and a right tail area labeled "Rejection Region" with area $\alpha$. The critical value on the right is marked as $t_{\alpha(n-1)}$.
- **Mathematical meaning:** Illustrates the one-tailed (right-tailed) critical region for testing $H_1: \mu > \mu_0$ where the null hypothesis is rejected only if the test statistic exceeds the critical value determined by $\alpha$ and $n-1$ degrees of freedom.
