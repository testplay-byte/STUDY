---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-8
chapter_folder: Chapter-15-Statistical-Inference-Testing-of-Hypotheses
chapter_number: 15
chapter_title: "Statistical Inference Testing of Hypotheses"
page_image: 14
page_printed: 252
section: null
exercise: null
content_type: worked-examples
has_figures: true
figures_count: 1
source_image: ../../../Raw/Statistics/Chapter-15-Statistical-Inference-Testing-of-Hypotheses/0014.jpg
converted_at: "2026-10-06"
converted_by: "agent-23b (glm-vision)"
notes: "Offset check: printed p.252 = image 14 + 238 (header folio, top-left; even page). Page opens with the continuation of section 15.22 (item (c), Figure-13, procedure items (v)-(vi)), then worked Examples 15.9 and 15.10. Example 15.10 solution continues on p.253 — page ends after its item (iv). No numbered section heading printed (section null)."
---

# Page 14 — Statistical Inference Testing of Hypotheses (Chapter 15)

> 📄 Original scan: [0014.jpg](../../../Raw/Statistics/Chapter-15-Statistical-Inference-Testing-of-Hypotheses/0014.jpg) · printed page 252

(c) When $H_1$ is $\mu < \mu_0$, the entire rejection region is taken on the left side of the sampling distribution as shown in Figure-13. The critical value $t_{\alpha(n-1)}$ is seen from the t-table below $\alpha$ and against $(n - 1)$ degrees of freedom. The critical region is $t < -t_{\alpha(n-1)}$.

[Figure F1]

(v) Computations: The test-statistic 't' is calculated from the sample data where $t = \frac{\bar{X} - \mu_0}{s/\sqrt{n}}$

(vi) Conclusion: The null hypothesis $H_0$ is rejected in favour of $H_1$ when the value of $t$ lies in the rejection region. $H_0$ is accepted when the value of $t$ lies in acceptance region.

**Example 15.9.**

A manufacturing company making automobile tires claims that the average life of its product is 35000 miles. A random sample of 16 tires was selected; and it was found that the mean life was 34000 miles with a standard deviation $s = 2000$ miles. Test hypothesis $H_0$: $\mu = 35000$ against the alternative $H_1$: $\mu < 35000$ at $\alpha = 0.05$.

**Solution:**

(i) Null hypothesis: $H_0 : \mu = 35000$ and Alternative hypothesis: $H_1 : \mu < 35000$

(ii) Level of significance: $\alpha = 0.05$

(iii) Test - statistic: $t = \frac{\bar{X} - \mu_0}{s/\sqrt{n}}$

(iv) Critical region: $t < -1.753$

(From the t-table, we have $-t_{\alpha(n-1)} = -t_{0.05(15)} = -1.753$)

(v) Computations: Here, $n = 16$, $\bar{X} = 34000$, $s = 2000$, and hence

$$t = \frac{34000 - 35000}{2000/\sqrt{16}} = \frac{-1000}{2000} (4) = -2$$

(vi) Conclusion: Since the calculated value of $t = -2$ falls in the critical region, so we reject our null hypothesis $H_0$: $\mu = 35000$ at $5 \%$ level of significance.

**Example 15.10.**

A random sample of 8 cigarettes of a certain brand has an average nicotine content of 4.2 milligrams and a standard deviation of 1.4 milligrams. Is this in line with the manufacturer's claim that the average nicotine content does not exceed 3.5 milligrams? Use $1 \%$ level of significance and assume the distribution of nicotine contents to be normal.

**Solution:**

(i) Null hypothesis: $H_0 : \mu \leq 3.5$ and Alternative hypothesis: $H_1 : \mu > 3.5$

(ii) Level of significance: $\alpha = 0.01$

(iii) Test - statistic: $t = \frac{\bar{X} - \mu_0}{s/\sqrt{n}}$

(iv) Critical region: $t > 2.998$

(From the t-table, we have $t_{\alpha(n-1)} = t_{0.01(7)} = 2.998$)

## Figures on this page

### Figure F1 — Rejection/Acceptance regions for left-tailed t-test (top right)
- **Type:** curve-plot
- **Caption/Number:** Figure-13
- **Description:** A bell-shaped curve representing a sampling distribution centered at $\mu = \mu_0$. The horizontal axis represents the t-statistic, with a central tick mark labeled "$t=0$" corresponding to the mean. To the left of the center, there is a vertical boundary line labeled "$-t_{\alpha(n-1)}$". The area under the curve to the left of this boundary is shaded or marked with an arrow pointing down, labeled "Rejection Region" and containing the symbol "$\alpha$". The large central and right portion of the curve is labeled "Acceptance Region" and contains the symbol "$(1-\alpha)$".
- **Mathematical meaning:** Illustrates the one-tailed (left-tailed) rejection region for testing $H_1: \mu < \mu_0$, where the null hypothesis is rejected if the calculated t-statistic falls below the negative critical value $-t_{\alpha(n-1)}$.
