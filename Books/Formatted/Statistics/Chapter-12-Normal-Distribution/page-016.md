---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-5
chapter_folder: Chapter-12-Normal-Distribution
chapter_number: 12
chapter_title: Normal Distribution
page_image: 16
page_printed: 138
section: null
exercise: null
content_type: worked-examples
has_figures: true
figures_count: 3
source_image: ../../../Raw/Statistics/Chapter-12-Normal-Distribution/0016.jpg
converted_at: "2026-10-01"
converted_by: "agent-S5d (glm-vision)"
notes: "Offset check: printed p.138 = image 16 + 122 (header folio, top-left). Page opens mid-solution of Example 12.18 (continued from p.137); Examples 12.19 and 12.20 are stated and fully solved; the page ends with a complete sentence. Book typos preserved verbatim: Example 12.19 prints 'find the value of a such that.(i)' with a stray full stop; part (i) ends on the display equation giving a = 1.645 without a separate concluding sentence. Minor scanning specks. | TYPO-CORRECTION PASS (2026-10-06, user mandate): unambiguous surface typo(s) corrected in the body per correction policy v4.4 — printed forms remain documented earlier in this note and itemised in docs/tracking/CORRECTIONS-LOG.md."
---

# Page 16 — Normal Distribution (Chapter 12)

> 📄 Original scan: [0016.jpg](../../../Raw/Statistics/Chapter-12-Normal-Distribution/0016.jpg) · printed page 138

Since 31% of the items are under 54, the area to the left of the ordinate at $X = 54$, is 0.31. Therefore, the area between $X = 54$ and the mean $\mu$ is $0.5 - 0.31 = 0.19$. Then the corresponding value of $Z_1$ is 0.4958.

$\therefore Z_1 = -0.4958 = \frac{54 - \mu}{\sigma}$

[Figure F1]

($\because$ We have taken $Z_1$ to be negative because it falls on the left side of the ordinate at mean )

$$54 - \mu = -0.4958\,\sigma \quad \text{or} \quad \mu - 0.4958\,\sigma = 54 \qquad \dots\dots (1)$$

Again

It is given that 8 % of the items are over 76. Therefore, the area under the normal curve between $\mu$ and 76 is 0.42 (or 42 %).

The corresponding value of $Z_2$ is 1.4053 that is $Z_2 = 1.4053 = \frac{76 - \mu}{\sigma}$

( We have taken $Z_2$ to be positive because it falls on the right of the mean ordinate )

$$76 - \mu = 1.4053\,\sigma \quad \text{or} \quad \mu + 1.4053\,\sigma = 76 \qquad \dots\dots (2)$$

Solving equations $(1)$ and $(2)$, we get $1.9011\,\sigma=22$ or $\sigma = 11.57$

Substituting $\sigma = 11.57$ in equation $(1)$, we get

$\mu - 0.4958( 11.57 ) = 54$ or $\mu = 54 + 5.7364 = 59.7364$ or $59.74$

Hence, Mean $= 59.74$ and S.D. $= 11.57$.

**Example 12.19.**

If Z is a standard normal random variable with mean zero and variance one, then find the value of a such that (i) $P( |Z| < a ) = 0.90$ (ii) $P( |Z| > a ) = 0.238$

**Solution:**

(i) Here, $\mu = 0$, $\sigma^2 = 1$, $\sigma = 1$ and P( |Z| < a ) = 0.90. Therefore

$P(|Z| < a) = P(-a < Z < +a) = 0.90$

$Z = \frac{X - \mu}{\sigma} = \frac{X - 0}{1} = X = a = 1.645$

[Figure F2]

(ii) Here, $\mu = 0$, $\sigma^2 = 1$, $\sigma = 1$ and P( |Z| > a ) = 0.238. Therefore

$P(|Z| > a) = 1 - P(|Z| < a) = 0.238$

or $P(|Z| < a) = 1 - 0.238 = 0.762$

or $P(-a < Z < +a) = 0.762$

$Z = \frac{X - \mu}{\sigma} = \frac{X - 0}{1} = X = a = 1.18$

[Figure F3]

**Example 12.20.**

In a normal distribution the lower quartile is 10 and the upper quartile is 22. Find mean and standard deviation of the distribution.

**Solution:** Here, $Q_1 = 10$ and $Q_3 = 22$

The two quartiles are given by

$Q_1 = \mu - 0.6745\sigma$ and $Q_3 = \mu + 0.6745\sigma$

Substituting the values of $Q_1$ and $Q_3$, we get

$$\mu - 0.6745\sigma = 10 \qquad \dots\dots (1) \qquad \mu + 0.6745\sigma = 22 \qquad \dots\dots (2)$$

Adding equations $(1)$ and $(2)$, we get $2\mu = 32$ or $\mu = 16$

Substituting $\mu = 16$ in equation $(1)$, we get $16 - 0.6745\sigma = 10$ or $\sigma = 8.9$

Thus, the mean and standard deviation of the normal distribution are 16 and 8.9 respectively.

## Figures on this page

### Figure F1 — Normal curve for Example 12.18 (top right)
- **Type:** curve-plot
- **Caption/Number:** (none printed)
- **Description:** A normal distribution bell curve with two stacked horizontal axes. The TOP axis row is labeled X with tick values $X_1 = 54$ (left), $\mu$ (center) and $X_2 = 76$ (right); the BOTTOM axis row is labeled Z with tick values $Z_1 = -0.4958$, 0 and $Z_2 = 1.4053$. Ordinates rise at all three positions. The left tail (left of $X_1$) is shaded with diagonal hatching and labeled "31%"; the region between $X_1$ and $\mu$ is unshaded and labeled "19%"; the region between $\mu$ and $X_2$ is unshaded and labeled "42%"; the right tail (right of $X_2$) is shaded with diagonal hatching and labeled "8%" with an arrow pointing into it.
- **Mathematical meaning:** Illustrates Example 12.18: 31% of items under 54 and 8% over 76 fix the two equations $\mu - 0.4958\sigma = 54$ and $\mu + 1.4053\sigma = 76$.

### Figure F2 — Standard normal curve for P(|Z| < a) = 0.90 (middle right)
- **Type:** curve-plot
- **Caption/Number:** (none printed)
- **Description:** A standard normal bell curve on a single horizontal axis labeled Z, centered at 0. Ordinates rise at $-a$ and $+a$, whose tick labels pair the symbols with the printed values -1.645 and +1.645. The central region between $-a$ and $+a$ is shaded with horizontal hatching, subdivided by the central ordinate: "0.45" on each side of 0. The two tails are unshaded, each labeled "0.05" with an arrow pointing into the tail.
- **Mathematical meaning:** For P(|Z| < a) = 0.90 the value of a is 1.645, leaving 0.05 in each tail.

### Figure F3 — Standard normal curve for P(|Z| > a) = 0.238 (lower right)
- **Type:** curve-plot
- **Caption/Number:** (none printed)
- **Description:** A standard normal bell curve on a single horizontal axis labeled Z, centered at 0. Ordinates rise at $-a = -1.18$ and $+a = 1.18$. The central region between $-a$ and $+a$ is shaded with horizontal hatching, subdivided by the central ordinate: "0.3810" on each side of 0. The two tails are unshaded, each labeled "0.1190" with an arrow pointing into the tail.
- **Mathematical meaning:** For P(|Z| > a) = 0.238 (equivalently P(|Z| < a) = 0.762) the value of a is 1.18.
