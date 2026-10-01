---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-5
chapter_folder: Chapter-12-Normal-Distribution
chapter_number: 12
chapter_title: Normal Distribution
page_image: 17
page_printed: 139
section: null
exercise: null
content_type: worked-examples
has_figures: true
figures_count: 5
source_image: ../../../Raw/Statistics/Chapter-12-Normal-Distribution/0017.jpg
converted_at: "2026-10-01"
converted_by: "agent-S5d (glm-vision)"
notes: "Offset check: printed p.139 = image 17 + 122 (header folio, top-right). Example 12.21 is stated and fully solved on this page — the text ends complete. Figure F5 is shaded with vertical hatching lines (as printed; the other figures use diagonal or horizontal hatching). Stray pen/pencil-like marks near the part (i)/(ii) calculations are scan artifacts, not printed content."
---

# Page 17 — Normal Distribution (Chapter 12)

> 📄 Original scan: [0017.jpg](../../../Raw/Statistics/Chapter-12-Normal-Distribution/0017.jpg) · printed page 139

**Example 12.21.**

In normal distribution lower and upper quartiles are 50 and 62 respectively. Find the probability that: (i) $P(X < 50)$ (ii) $P(X > 50)$ (iii) $P(X > 62)$ (iv) $P(X < 62)$ (v) $P(50 < X < 62)$

**Solution.** Here, $Q_1 = \mu - 0.6745\sigma = 50$ .........(1) $Q_3 = \mu + 0.6745\sigma = 62$ .........(2)

Adding equations (1) and (2), we get

$2\mu = 112$ or $\mu = \frac{112}{2} = 56$. Substituting $\mu = 56$ in equation (2), we get

$56 + 0.6745\sigma = 62$ or $0.6745\sigma = 62 - 56 = 6$ or $\sigma = \frac{6}{0.6745} = 8.90$

$Z = \frac{X - \mu}{\sigma} = \frac{X - 56}{8.90}$

(i) $Z = \frac{50 - 56}{8.90} = -0.67$

[Figure F1]

$P(X < 50) = P(Z < -0.67)$

$= P(-\infty \leq Z \leq 0) - P(-0.67 \leq Z \leq 0)$

$= 0.5 - 0.2486 = 0.2514.$

(ii) $Z = \frac{50 - 56}{8.90} = -0.67$

[Figure F2]

$P(X > 50) = P(Z > -0.67)$

$= P(-0.67 \leq Z \leq 0) + P(0 \leq Z \leq \infty)$

$= 0.2486 + 0.5 = 0.7486.$

(iii) $Z = \frac{62 - 56}{8.90} = +0.67$

[Figure F3]

$P(X > 62) = P(Z > 0.67)$

$= P(0 \leq Z \leq \infty) - P(0 \leq Z \leq 0.67)$

$= 0.5 - 0.2486 = 0.2514.$

(iv) $Z = \frac{62 - 56}{8.90} = +0.67$

[Figure F4]

$P(X < 62) = P(Z < 0.67)$

$= P(-\infty \leq Z \leq 0) + P(0 \leq Z \leq 0.67)$

$= 0.5 + 0.2486 = 0.7486.$

(v) $Z_1 = \frac{X_1 - 56}{8.90} = \frac{50 - 56}{8.90} = -0.67$

$Z_2 = \frac{X_2 - 56}{8.90} = \frac{62 - 56}{8.90} = +0.67$

[Figure F5]

$P(50 < X < 62) = P(-0.67 < Z < +0.67)$

$= P(-0.67 \leq Z \leq 0) + P(0 \leq Z \leq +0.67)$

$= 0.2486 + 0.2486 = 0.4972.$

## Figures on this page

### Figure F1 — Normal curve for part (i), P(X < 50) (top right)
- **Type:** curve-plot
- **Caption/Number:** (none printed)
- **Description:** A normal distribution bell curve with two stacked horizontal axes. The TOP axis row is labeled X with tick values 50 (left) and $\mu = 56$ (center); the BOTTOM axis row is labeled Z with tick values -0.67 and 0. Ordinates rise at both positions. Only the left tail (left of 50 / Z = -0.67) is shaded with diagonal hatching; the rest is unshaded.
- **Mathematical meaning:** Illustrates $P(X < 50) = P(Z < -0.67) = 0.2514$, the area below the first quartile.

### Figure F2 — Normal curve for part (ii), P(X > 50) (upper middle right)
- **Type:** curve-plot
- **Caption/Number:** (none printed)
- **Description:** A normal distribution bell curve with two stacked horizontal axes. The TOP axis row is labeled X with tick values 50 (left) and $\mu = 56$ (center); the BOTTOM axis row is labeled Z with tick values -0.67 and 0. Ordinates rise at both positions. The entire region to the right of 50 / Z = -0.67 (including the mean and the right half) is shaded with horizontal hatching; only the left tail is unshaded.
- **Mathematical meaning:** Illustrates $P(X > 50) = P(Z > -0.67) = 0.7486$, the area above the first quartile.

### Figure F3 — Normal curve for part (iii), P(X > 62) (middle right)
- **Type:** curve-plot
- **Caption/Number:** (none printed)
- **Description:** A normal distribution bell curve with two stacked horizontal axes. The TOP axis row is labeled X with tick values $\mu = 56$ (center) and 62 (right); the BOTTOM axis row is labeled Z with tick values 0 and 0.67. Ordinates rise at both positions. Only the right tail (right of 62 / Z = 0.67) is shaded with diagonal hatching; the rest is unshaded.
- **Mathematical meaning:** Illustrates $P(X > 62) = P(Z > 0.67) = 0.2514$, the area above the third quartile.

### Figure F4 — Normal curve for part (iv), P(X < 62) (lower middle right)
- **Type:** curve-plot
- **Caption/Number:** (none printed)
- **Description:** A normal distribution bell curve with two stacked horizontal axes. The TOP axis row is labeled X with tick values $\mu = 56$ (center) and 62 (right); the BOTTOM axis row is labeled Z with tick values 0 and 0.67. Ordinates rise at both positions. The entire region to the left of 62 / Z = 0.67 (including the mean and the left half) is shaded with horizontal hatching; only the right tail is unshaded.
- **Mathematical meaning:** Illustrates $P(X < 62) = P(Z < 0.67) = 0.7486$, the area below the third quartile.

### Figure F5 — Normal curve for part (v), P(50 < X < 62) (bottom right)
- **Type:** curve-plot
- **Caption/Number:** (none printed)
- **Description:** A normal distribution bell curve with two stacked horizontal axes. The TOP axis row is labeled X with tick values 50, 56 and 62; the BOTTOM axis row is labeled Z with tick values -0.67, 0 and +0.67. Ordinates rise at all three positions. Only the central region between 50 and 62 (Z = -0.67 to +0.67) is shaded — with vertical hatching lines; the two tails are unshaded.
- **Mathematical meaning:** Illustrates $P(50 < X < 62) = P(-0.67 < Z < +0.67) = 0.4972$, the interquartile-range probability.
