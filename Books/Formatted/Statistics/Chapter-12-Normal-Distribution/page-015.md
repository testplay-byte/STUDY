---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-5
chapter_folder: Chapter-12-Normal-Distribution
chapter_number: 12
chapter_title: Normal Distribution
page_image: 15
page_printed: 137
section: null
exercise: null
content_type: worked-examples
has_figures: true
figures_count: 3
source_image: ../../../Raw/Statistics/Chapter-12-Normal-Distribution/0015.jpg
converted_at: "2026-10-01"
converted_by: "agent-S5d (glm-vision)"
notes: "Offset check: printed p.137 = image 15 + 122 (header folio, top-right). Page opens with the final part of Example 12.15 (vi) (P99, continued from p.136); Examples 12.16 and 12.17 are fully solved; Example 12.18's solution starts and the page ends mid-solution (continues on p.138). Book typos preserved verbatim: 'Thus, P90 = 664.5' is printed with P90 although the example computes the 95th percentile; Example 12.17 prints 'Solution.' with a full stop (12.16 and 12.18 use 'Solution:'). Faint yellowish foxing stains on the scan."
---

# Page 15 — Normal Distribution (Chapter 12)

> 📄 Original scan: [0015.jpg](../../../Raw/Statistics/Chapter-12-Normal-Distribution/0015.jpg) · printed page 137

$P_{99}$ is a point having 99 percent of the area below it. Area table shows this point to be

$2.33 = \frac{X - 40}{4}$

$X - 40 = 4(2.33)$

$X = 40 + 9.32 = 49.32$

Thus, $P_{99} = 49.32$.

[Figure F1]

**Example 12.16.**

A random variable X is normally distributed with mean 500 and standard deviation 100. What is the 95th percentile of the distribution?

**Solution:** Here, $\mu = 500$, $\sigma = 100$ and $Z = \frac{X - \mu}{\sigma} = \frac{X - 500}{100}$. Therefore

$P_{95}$ is a point having 95 percent of the area below it. Area table shows this point to be

$1.645 = \frac{X - 500}{100}$

$X - 500 = 100(1.645)$

$X = 500 + 164.5 = 664.5$

Thus, $P_{90} = 664.5$

[Figure F2]

**Example 12.17.**

In normal distribution, if $P_{10} = 17.2$ and $P_{90} = 42.8$. Find $\mu$, $\sigma$, $P_{50}$, $Q_1$, $Q_3$, $\beta_1$, $\beta_2$ and two points of inflection.

**Solution.** Here, $P_{10} = 17.2$ and $P_{90} = 42.8$. Therefore

$\mu = P_{50} = \frac{P_{10} + P_{90}}{2} = \frac{17.2 + 42.8}{2} = \frac{60}{2} = 30$

$Z = \frac{X - \mu}{\sigma}$ or $-1.28 = \frac{17.2 - 30}{\sigma}$

or $-1.28 = \frac{-12.8}{\sigma}$ or $\sigma = \frac{12.8}{1.28} = 10$

or $\sigma^2 = \mu_2 = 100 = \text{Variance}$

$Q_1 = \mu - 0.6745\sigma = 30 - 0.6745(10) = 23.255$

$Q_3 = \mu + 0.6745\sigma = 30 + 0.6745(10) = 36.745$

$\mu_3 = 0$, because all odd order moments about mean in a normal distribution are zero that is

$\mu_1 = \mu_3 = \mu_5 = ... = 0.$

$\mu_4 = 3\sigma^4 = 3(10)^4 = 30000$

$\beta_1 = \frac{\mu_3^2}{\mu_2^3} = \frac{(0)^2}{(100)^3} = 0$ and $\beta_2 = \frac{\mu_4}{\mu_2^2} = \frac{30000}{(100)^2} = 3$

Points of inflection are $\mu - \sigma$ and $\mu + \sigma$. Therefore

$\mu - \sigma = 30 - 10 = 20$ and $\mu + \sigma = 30 + 10 = 40$

Hence $\mu = 30$, $\sigma = 10$, $P_{50} = 30$, $Q_1 = 23.255$, $Q_3 = 36.745$, $\beta_1 = 0$, $\beta_2 = 3$, $\mu - \sigma = 20$ and $\mu + \sigma = 40$.

[Figure F3]

**Example 12.18.**

In a normal distribution 31% of the items are under 54 and 8% are over 76. Find the mean and the standard deviation of the distribution.

**Solution:** Let $\mu$ = Mean, $\sigma$ = Standard deviation of the normal distribution.

$$Z = \frac{X - \mu}{\sigma} \qquad Z_1 = \frac{X_1 - \mu}{\sigma} = \frac{54 - \mu}{\sigma} \qquad Z_2 = \frac{X_2 - \mu}{\sigma} = \frac{76 - \mu}{\sigma}$$

## Figures on this page

### Figure F1 — Normal curve for Example 12.15 (vi), $P_{99}$ (top right)
- **Type:** curve-plot
- **Caption/Number:** (none printed)
- **Description:** A normal distribution bell curve with two stacked horizontal axes. The TOP axis row is labeled X with tick values $\mu = 40$ (center) and X = $P_{99}$ (right); the BOTTOM axis row is labeled Z with tick values 0 (center) and Z = 2.33 (right). Ordinates rise at both positions. The entire region under the curve up to $P_{99}$ is shaded with diagonal hatching, subdivided by the central ordinate: "0.50" left of the mean and "0.49" between the mean and $P_{99}$; the small right tail is unshaded and labeled "0.01" with an arrow pointing into it.
- **Mathematical meaning:** The 99th percentile: shaded area $0.50 + 0.49 = 0.99$ corresponds to $Z = 2.33$, i.e. $P_{99} = 49.32$.

### Figure F2 — Normal curve for Example 12.16, $P_{95}$ (middle right)
- **Type:** curve-plot
- **Caption/Number:** (none printed)
- **Description:** A normal distribution bell curve with two stacked horizontal axes. The TOP axis row is labeled X with tick values $\mu = 500$ (center) and X = $P_{95}$ (right); the BOTTOM axis row is labeled Z with tick values 0 (center) and Z = 1.645 (right). Ordinates rise at both positions. The entire region under the curve up to $P_{95}$ is shaded with horizontal hatching, subdivided by the central ordinate: "0.50" left of the mean and "0.45" between the mean and $P_{95}$; the small right tail is unshaded and labeled "0.05" with an arrow pointing into it.
- **Mathematical meaning:** The 95th percentile of the distribution with $\mu = 500$: shaded area $0.50 + 0.45 = 0.95$ corresponds to $Z = 1.645$, i.e. the point 664.5.

### Figure F3 — Normal curve for Example 12.17 (bottom right)
- **Type:** curve-plot
- **Caption/Number:** (none printed)
- **Description:** A normal distribution bell curve with two stacked horizontal axes and NO shading/hatching. The TOP axis row is labeled X with tick values $P_{10} = 17.2$ (left), $\mu = 30$ (center) and $P_{90} = 42.8$ (right); the BOTTOM axis row is labeled Z with tick values -1.28, 0 and +1.28. Ordinates (vertical lines) rise at all three positions, dividing the area under the curve into four regions labeled from left to right: "0.10", "0.40", "0.40" and "0.10".
- **Mathematical meaning:** In a normal distribution the 10th and 90th percentiles lie symmetric about the mean at $Z = \mp 1.28$, giving $\mu = 30$ and $\sigma = 10$.
