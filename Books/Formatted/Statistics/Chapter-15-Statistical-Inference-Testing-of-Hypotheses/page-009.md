---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-8
chapter_folder: Chapter-15-Statistical-Inference-Testing-of-Hypotheses
chapter_number: 15
chapter_title: "Statistical Inference Testing of Hypotheses"
page_image: 9
page_printed: 247
section: null
exercise: null
content_type: theory
has_figures: true
figures_count: 3
source_image: ../../../Raw/Statistics/Chapter-15-Statistical-Inference-Testing-of-Hypotheses/0009.jpg
converted_at: "2026-10-06"
converted_by: "agent-23b (glm-vision)"
notes: "Offset check: printed p.247 = image 9 + 238 (header folio, top-right; odd page). Page is a continuation of section 15.19 items (iii)-(iv) from p.246; ends with the null/alternative-hypothesis vs rejection-region table. No numbered section heading printed on the page (section null). Figures 8-10 (rejection-region sketches) sit to the right of paragraphs (a)-(c)."
---

# Page 9 — Statistical Inference Testing of Hypotheses (Chapter 15)

> 📄 Original scan: [0009.jpg](../../../Raw/Statistics/Chapter-15-Statistical-Inference-Testing-of-Hypotheses/0009.jpg) · printed page 247

(iii) **Test - statistic:**

When sample size is large, the sampling distribution of $\bar{X}$ has the normal distribution with mean $\mu$ and the standard error $\sigma / \sqrt{n}$. The population may or may not be normal. The test-statistic to be used is $Z$ where $Z = \frac{\bar{X}-\mu_0}{\sigma/\sqrt{n}}$

(iv) **Critical region:**

The critical region depends upon the alternative hypothesis. There are three possible rejection plans. We discuss all the three turn by turn.

(a) When $H_1$ is $\mu \neq \mu_0$, the rejection region equal to $\alpha/2$ in size is taken on both ends of the sampling distribution as shown in Figure-8. The critical values of $Z$ which separates the critical regions from the central acceptance region are $-Z_{\alpha/2}$ and $+Z_{\alpha/2}$.

[Figure F1]

The critical value $-Z_{\alpha/2}$ has the area on its left equal to $\alpha/2$ and the critical value $+Z_{\alpha/2}$ has area on its right equal to $\alpha/2$. $H_0$ is rejected if the calculated value of $Z$ lies in rejection region. The rejection region is $Z < -Z_{\alpha/2}$ and $Z > +Z_{\alpha/2}$. When $\alpha = 0.05$, then $-Z_{\alpha/2} = -Z_{0.025} = -1.96$ and $+Z_{0.025} = +1.96$.

(b) When $H_1$ is $\mu > \mu_0$, the rejection region equal to $\alpha$ is taken in the right end of the distribution as shown in Figure-9. The test plan is called one-tailed to the right.

[Figure F2]

The hypothesis is rejected when the calculated value of $Z$ is greater than $Z_\alpha$, where $Z_\alpha$ is the critical point on the right of which the area is equal to $\alpha$.

(c) When $H_1$ is $\mu < \mu_0$, the rejection region equal to $\alpha$ is taken in the left end of the distribution as shown in Figure-10. The rejection plan is called one-tailed to the left.

[Figure F3]

The hypothesis is rejected when the calculated value of $Z$ is less than the critical value $-Z_\alpha$ where $-Z_\alpha$ is a critical point on the left of which the area is $\alpha$. The rejection region is $Z < -Z_\alpha$. Corresponding to each null hypothesis, the alternate hypothesis and the rejection regions are given below:

| Null hypothesis | Alternative hypothesis | Rejection region |
| :--- | :--- | :--- |
| (a) $H_0 : \mu = \mu_0$ | $H_1 : \mu \neq \mu_0$ ( two-sided ) | $Z < -Z_{\alpha/2}$ and $Z > +Z_{\alpha/2}$ |
| (b) $H_0 : \mu \leq \mu_0$ | $H_1 : \mu > \mu_0$ ( one-sided ) | $Z > Z_\alpha$ |
| (c) $H_0 : \mu \geq \mu_0$ | $H_1 : \mu < \mu_0$ ( one-sided ) | $Z < -Z_\alpha$ |

## Figures on this page

### Figure F1 — Normal distribution curve showing two-tailed critical region (top right)
- **Type:** curve-plot
- **Caption/Number:** Figure-8
- **Description:** A symmetric bell-shaped normal distribution curve centered at $\mu = \mu_0$. The horizontal axis represents the Z-statistic with a center mark at $Z=0$. Two vertical lines divide the area under the curve into three parts: two outer tails labeled "Rejection Region" each with an area of $\alpha/2$, and a large central portion labeled "Acceptance Region" with an area of $(1-\alpha)$. The boundaries of the rejection regions are marked as $-Z_{\alpha/2}$ and $+Z_{\alpha/2}$.
- **Mathematical meaning:** Illustrates the rejection and acceptance regions for a two-tailed Z-test where the null hypothesis is rejected if the test statistic falls in either tail beyond the critical values $\pm Z_{\alpha/2}$.

### Figure F2 — Normal distribution curve showing right-tailed critical region (middle right)
- **Type:** curve-plot
- **Caption/Number:** Figure-9
- **Description:** A symmetric bell-shaped normal distribution curve. The horizontal axis shows $Z=0$ near the center. A single vertical line towards the right end separates the curve into a large "Acceptance Region" with area $(1-\alpha)$ on the left and a "Rejection Region" with area $\alpha$ on the far right tail, bounded by the critical value $Z_\alpha$.
- **Mathematical meaning:** Illustrates the rejection and acceptance regions for a one-tailed (right-sided) Z-test where the null hypothesis is rejected if the test statistic exceeds the critical value $Z_\alpha$.

### Figure F3 — Normal distribution curve showing left-tailed critical region (bottom right)
- **Type:** curve-plot
- **Caption/Number:** Figure-10
- **Description:** A symmetric bell-shaped normal distribution curve. The horizontal axis shows $Z=0$ near the center. A single vertical line towards the left end separates the curve into a "Rejection Region" with area $\alpha$ on the far left tail and a large "Acceptance Region" with area $(1-\alpha)$ on the right, bounded by the critical value $-Z_\alpha$.
- **Mathematical meaning:** Illustrates the rejection and acceptance regions for a one-tailed (left-sided) Z-test where the null hypothesis is rejected if the test statistic is less than the critical value $-Z_\alpha$.
