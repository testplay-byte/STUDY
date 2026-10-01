---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-5
chapter_folder: Chapter-12-Normal-Distribution
chapter_number: 12
chapter_title: Normal Distribution
page_image: 8
page_printed: 130
section: null
exercise: null
content_type: worked-examples
has_figures: true
figures_count: 4
source_image: ../../../Raw/Statistics/Chapter-12-Normal-Distribution/0008.jpg
converted_at: "2026-10-01"
converted_by: "coordinator-seq (glm-vision)"
notes: "Offset check: printed p.130 = image 8 + 122 (header folio, top-left). Opens with solutions (ii)-(iii) of Example 12.8 (continued from p.129); Examples 12.9 (complete with Alternative Method) and 12.10 (part (i) only - continues on p.131). No printed section headings. Four unnumbered bell-curve diagrams. "
---

# Page 8 — Normal Distribution (Chapter 12)

> 📄 Original scan: [0008.jpg](../../../Raw/Statistics/Chapter-12-Normal-Distribution/0008.jpg) · printed page 130

(ii) $Z = \frac{12 - 15}{4} = -0.75$

$P(X > 12) = P(Z \geq -0.75)$

$= P(-0.75 \leq Z \leq 0) + P(0 \leq Z \leq \infty)$

$= 0.2734 + 0.5 = 0.7734$ or $77.34\%$

[Figure F1]

(iii) $Z_1 = \frac{X_1 - 15}{4} = \frac{13 - 15}{4} = -0.5$

$Z_2 = \frac{X_2 - 15}{4} = \frac{18 - 15}{4} = +0.75$

$P(13 \leq X \leq 18) = P(-0.5 \leq Z \leq +0.75)$

$= P(-0.5 \leq Z \leq 0) + P(0 \leq Z \leq 0.75)$

$= 0.1915 + 0.2734 = 0.4649$ or $46.49\%$

[Figure F2]

**Example 12.9.**

A machine produces components whose thickness is normally distributed with mean $0.154''$ and standard deviation $0.002''$. Components with thicknesses outside the range $0.150''$ to $0.155''$ are rejected. What proportion of the production is (i) accepted? (ii) rejected?

*Solution:* Here, $\mu = 0.154$, $\sigma = 0.002$, $Z = \frac{X - \mu}{\sigma} = \frac{X - 0.154}{0.002}$, $X_1 = 0.150$ and $X_2 = 0.155$. Therefore

$Z_1 = \frac{X_1 - 0.154}{0.002} = \frac{0.150 - 0.154}{0.002} = -2$

$Z_2 = \frac{X_2 - 0.154}{0.002} = \frac{0.155 - 0.154}{0.002} = +0.5$

[Figure F3]

(i) $P(\text{Accepted}) = P(0.150 \leq X \leq 0.155) = P(-2 \leq Z \leq 0.5)$

$= P(-2 \leq Z \leq 0) + P(0 \leq Z \leq 0.5) = 0.4772 + 0.1915 = 0.6687$

(ii) $P(\text{Rejected}) = P(X_1 \leq 0.150) + P(X_2 \geq 0.155) = P(Z_1 \leq -2) + P(Z_2 \geq 0.5)$

$= [P(-\infty \leq Z_1 \leq 0) - P(-2 \leq Z_1 \leq 0)] + [P(0 \leq Z_2 \leq \infty) - P(0 \leq Z_2 \leq 0.5)]$

$= [0.5 - 0.4772] + [0.5 - 0.1915] = 0.0228 + 0.3085 = 0.3313$

**Alternative Method:**

$P(\text{Rejected}) = 1 - P(\text{Accepted}) = 1 - 0.6687 = 0.3313$.

**Example 12.10.**

Let $Y = 2X + 20$ and $X$ is $N(15, 4)$. Find

(i) $P(Y \leq 40)$ (ii) $P(Y \geq 52)$ (iii) $P(47 \leq Y \leq 55)$ (iv) $P(Y \leq 48 \text{ or } Y \geq 54)$.

*Solution:* Here, $E(X) = 15$ and $\text{Var}(X) = 4$. If $Y = 2X + 20$, then

$E(Y) = \mu = E(2X + 20) = 2E(X) + 20 = 2(15) + 20 = 50$

$\text{Var}(Y) = \sigma^2 = \text{Var}(2X + 20) = 4\text{Var}(X) + \text{Var}(20) = 4(4) + 0 = 16$

$\text{S.D}(Y) = \sigma = \sqrt{16} = 4$ and $Z = \frac{Y - \mu}{\sigma} = \frac{Y - 50}{4}$. Therefore

(i) $Z = \frac{40 - 50}{4} = -2.5$

$P(Y \leq 40) = P(Z \leq -2.5)$

$= P(-\infty \leq Z \leq 0) - P(-2.5 \leq Z \leq 0)$

$= 0.5 - 0.4938 = 0.0062$

[Figure F4]

## Figures on this page

### Figure F1 — Normal distribution curve for Example (ii)
- **Type:** curve-plot
- **Caption/Number:** (none printed)
- **Description:** A normal distribution curve with horizontal axis labeled X on top and Z below. The region to the right of X=12 (corresponding to Z=-0.75) is shaded with diagonal lines. The mean is marked at X=15 (Z=0).
- **Mathematical meaning:** Illustrates the probability calculation for $P(X > 12)$ by finding the area under the standard normal curve from $Z = -0.75$ to infinity.

### Figure F2 — Normal distribution curve for Example (iii)
- **Type:** curve-plot
- **Caption/Number:** (none printed)
- **Description:** A normal distribution curve with horizontal axis labeled X on top and Z below. The region between X=13 (Z=-0.5) and X=18 (Z=+0.75) is shaded with dense horizontal hatching.
- **Mathematical meaning:** Illustrates the probability calculation for $P(13 \leq X \leq 18)$ by finding the area under the standard normal curve between $Z = -0.5$ and $Z = 0.75$.

### Figure F3 — Normal distribution curve for Example 12.9
- **Type:** curve-plot
- **Caption/Number:** (none printed)
- **Description:** A normal distribution curve with horizontal axis labeled X on top and Z below. The region between X=0.150 (Z=-2) and X=0.155 (Z=+0.5) is shaded with diagonal lines. The mean is at X=0.154 (Z=0).
- **Mathematical meaning:** Shows the acceptance region for component thicknesses, representing the probability that a component is accepted ($P(0.150 \leq X \leq 0.155)$).

### Figure F4 — Normal distribution curve for Example 12.10 (i)
- **Type:** curve-plot
- **Caption/Number:** (none printed)
- **Description:** A normal distribution curve with a horizontal axis labeled Z. The region to the left of Z=-2.5 is shaded with diagonal lines. The center is at Z=0.
- **Mathematical meaning:** Illustrates the probability calculation for $P(Y \leq 40)$, which corresponds to $P(Z \leq -2.5)$ in the standard normal distribution.
