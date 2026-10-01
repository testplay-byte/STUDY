---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-5
chapter_folder: Chapter-12-Normal-Distribution
chapter_number: 12
chapter_title: Normal Distribution
page_image: 9
page_printed: 131
section: "12.6 NORMAL FREQUENCY DISTRIBUTION"
exercise: null
content_type: mixed
has_figures: true
figures_count: 4
source_image: ../../../Raw/Statistics/Chapter-12-Normal-Distribution/0009.jpg
converted_at: "2026-10-01"
converted_by: "agent-S5b (glm-vision)"
notes: "Offset check: printed p.131 = image 9 + 122 (header folio). Page opens mid-example (parts (ii)-(iv) of the previous example, mu=50, sigma=4). Example 12.11 part (b) is stated; its solution continues on next page. None of the four small solution-figures carries a printed caption."
---

# Page 9 — Normal Distribution (Chapter 12)

> 📄 Original scan: [0009.jpg](../../../Raw/Statistics/Chapter-12-Normal-Distribution/0009.jpg) · printed page 131

(ii) $Z = \frac{52 - 50}{4} = 0.5$

$P(Y \geq 52) = P(Z \geq 0.5)$
$\quad\quad\quad = P(0 \leq Z \leq \infty) - P(0 \leq Z \leq 0.5)$
$\quad\quad\quad = 0.5 - 0.1915 = 0.3085$

[Figure F1]

(iii) $Z_1 = \frac{X_1 - 50}{4} = \frac{47 - 50}{4} = -0.75$
$\quad\quad Z_2 = \frac{X_2 - 50}{4} = \frac{55 - 50}{4} = +1.25$

$P(47 \leq Y \leq 55) = P(-0.75 \leq Z \leq +1.25)$
$\quad\quad\quad\quad\quad = P(-0.75 \leq Z \leq 0) + P(0 \leq Z \leq 1.25)$
$\quad\quad\quad\quad\quad = 0.2734 + 0.3944 = 0.6678$

[Figure F2]

(iv) $Z = \frac{48 - 50}{4} = -0.5$

$P(Y \leq 48) = P(Z \leq -0.5)$
$\quad\quad\quad = P(-\infty \leq Z \leq 0) - P(-0.5 \leq Z \leq 0)$
$\quad\quad\quad = 0.5 - 0.1915 = 0.3085$

Also $Z = \frac{54 - 50}{4} = 1$

[Figure F3]

$P(Y \geq 54) = P(Z \geq 1) = P(0 \leq Z \leq \infty) - P(0 \leq Z \leq 1) = 0.5 - 0.3413 = 0.1587$

Hence $P(Y \leq 48 \text{ or } Y \geq 54) = P(Y \leq 48) + P(Y \geq 54) = 0.3085 + 0.1587 = 0.4672$

## 12.6 NORMAL FREQUENCY DISTRIBUTION

Sometimes we have to convert the normal probability distribution into normal frequency distribution. When the probability distribution is multiplied with the total number of observations ($\sum f = N$), we get the normal frequency-distribution. The normal probability distribution is

$$f(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}$$

whereas the normal frequency distribution is

$$Y = \frac{N}{\sigma \sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}$$

For example, we know that the probability is 0.6827 that the random variable X will fall between the interval $\mu - \sigma$ to $\mu + \sigma$. The probability 0.6827 can be converted into percentage of observations which lie between $\mu - \sigma$ and $\mu + \sigma$. This percentage is 68.27 %. If the total number of observations are 1000, the interval $\mu - \sigma$ to $\mu + \sigma$ will contain 683 observations that is $0.6827 \times 1000 = 683$.

**Example 12.11.**

In an intelligence test administered on 1000 children, the average I.Q. was 42 and standard deviation 24.
(a) Find the number of children exceeding a score of 50.
(b) Find the number of children lying between the scores 30 and 54.

**Solution:** Here, $\mu = 42$, $\sigma = 24$, N= 1000 and $Z = \frac{X-\mu}{\sigma} = \frac{X-42}{24}$. Therefore

(a) $Z = \frac{50 - 42}{24} = 0.33$

$P(X > 50) = P(Z > 0.33)$
$\quad\quad\quad = P(0 \leq Z \leq \infty) - P(0 \leq Z \leq 0.33)$
$\quad\quad\quad = 0.5 - 0.1293 = 0.3707$

Hence the expected number of children exceeding a score of 50
$\quad\quad\quad = N.P(X > 50) = 1000(0.3707) = 370.7$ or 371 approximately.

[Figure F4]

## Figures on this page

### Figure F1 — Normal curve, upper tail beyond Z = 0.5 (right of part (ii))
- **Type:** curve-plot
- **Caption/Number:** (none printed)
- **Description:** A standard normal distribution curve with horizontal axis labeled Z (uppercase). Tick labels 0 and 0.5 appear below the axis; an ordinate (solid vertical line) is drawn at 0 at the center peak and another at 0.5. The area to the right of the ordinate at 0.5 out into the tail is shaded with diagonal hatching, representing the upper tail probability.
- **Mathematical meaning:** Illustrates the calculation of $P(Z \geq 0.5)$ by finding the area under the curve to the right of the standardized value 0.5.

### Figure F2 — Normal curve, area between Z = -0.75 and Z = +1.25 (right of part (iii))
- **Type:** curve-plot
- **Caption/Number:** (none printed)
- **Description:** A standard normal distribution curve with horizontal axis labeled Z. Tick labels -0.75, 0 and 1.25 appear below the axis; ordinates are drawn at -0.75, at 0 (through the center peak) and at 1.25. The region between the ordinates at -0.75 and 1.25 is shaded with vertical-line hatching, representing a central probability interval spanning across the mean.
- **Mathematical meaning:** Illustrates the calculation of $P(-0.75 \leq Z \leq 1.25)$ by summing the areas from the left tail to the mean and from the mean to the right tail.

### Figure F3 — Normal curve, two tail areas beyond Z = -0.5 and Z = 1 (right of part (iv))
- **Type:** curve-plot
- **Caption/Number:** (none printed)
- **Description:** A standard normal distribution curve with horizontal axis labeled Z. Tick labels -0.5, 0 and 1 appear below the axis; ordinates are drawn at -0.5, at 0 and at 1. Two separate regions are shaded with diagonal hatching: the left tail to the left of the ordinate at -0.5, and the right tail to the right of the ordinate at 1.
- **Mathematical meaning:** Illustrates the combined probability of two disjoint events in the tails of the distribution, corresponding to values falling outside a specific central range.

### Figure F4 — Normal curve with dual X/Z scales for Example 12.11(a) (right of solution (a))
- **Type:** curve-plot
- **Caption/Number:** (none printed)
- **Description:** A normal distribution curve with two stacked horizontal axes. The TOP axis is labeled X (uppercase, label at its right end) with tick values 42 and 50; the BOTTOM axis is labeled Z (uppercase, label at its right end) with tick values 0 and 0.33. A vertical line aligns X=42 with Z=0 at the center peak, and another ordinate aligns X=50 with Z=0.33. The area to the right of the X=50 / Z=0.33 ordinate out into the tail is shaded with diagonal hatching.
- **Mathematical meaning:** Demonstrates the transformation of a raw score X=50 to its standardized Z-score of 0.33 given μ=42 and σ=24, used to find the proportion of the population exceeding that score.
