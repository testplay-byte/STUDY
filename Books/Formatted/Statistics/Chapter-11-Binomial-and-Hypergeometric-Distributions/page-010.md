---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-4
chapter_folder: Chapter-11-Binomial-and-Hypergeometric-Distributions
chapter_number: 11
chapter_title: "Binomial and Hypergeometric Distributions"
page_image: 10
page_printed: 104
section: "11.8 PROPERTIES OF THE BINOMIAL DISTRIBUTION"
exercise: null
content_type: mixed
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-11-Binomial-and-Hypergeometric-Distributions/0010.jpg
converted_at: "2026-10-01"
converted_by: "agent-S4b (glm-vision)"
notes: "Offset check: printed p.104 = image 10 + 94 (header folio, top-left; even page). Examples 11.12-11.14 all complete on this page; numbered section 11.8 PROPERTIES OF THE BINOMIAL DISTRIBUTION starts near the foot with its two-column properties table (no printed header row) and a bold 'Note:' line — all complete on this page. Minor black scan speckles, nothing obscuring text. No figures."
---

# Page 10 — Binomial and Hypergeometric Distributions (Chapter 11)

> 📄 Original scan: [0010.jpg](../../../Raw/Statistics/Chapter-11-Binomial-and-Hypergeometric-Distributions/0010.jpg) · printed page 104

**Example 11.12.**

If X is a binomial random variable with $E(X) = 1.44$ and $S.D(X) = 0.96$. Find the parameters of the binomial distribution. Also find $P[X=2]$.

**Solution:**

Here, $E(X) = np = 1.44$, $S.D(X) = \sqrt{npq} = 0.96$ and $\text{Var}(X) = npq = (0.96)^2 = 0.9216$. Therefore

$$1.44 \, q = 0.9216 \text{ (since } np = 1.44 \text{) or } q = \frac{0.9216}{1.44} = 0.64 \text{ and } p = 1 - q = 0.36$$

$$np = 1.44 \text{ or } n(0.36) = 1.44 \text{ (since } p = 0.36 \text{) or } n = \frac{1.44}{0.36} = 4$$

$$P[X=2] = \binom{4}{2} (0.36)^2 (0.64)^2 = 0.3185$$

Hence, $n = 4$, $p = 0.36$ and $P(X=2) = 0.3185$.

**Example 11.13.**

Is it possible to have a binomial distribution with mean = 10 and standard deviation = 6?

**Solution:** Here, Mean = $\mu = np = 10$, $S.D(X) = \sigma = \sqrt{npq} = 6$

$$\text{Var}(X) = \sigma^2 = npq = (6)^2 = 36 \text{ or } 10q = 36 \text{ (since } np = 10 \text{) or } q = \frac{36}{10} = 3.6$$

This is impossible because $q$ is a probability which can never exceed one. Hence the given values of mean and standard deviation are wrong.

**Example 11.14.**

Given $n = 5$, $P(X=1) = 5/32$ and $P(X=2) = 10/32$. Find $P(X=0)$ and $P(X=3)$. Also find coefficient of skewness.

**Solution:**

$$P[X=1] = \binom{5}{1} pq^4 = 5pq^4 = \frac{5}{32} \quad ...... \quad (1)$$

$$P[X=2] = \binom{5}{2} p^2q^3 = 10p^2q^3 = \frac{10}{32} \quad \cdots\cdots (2)$$

Dividing equation (2) by equation (1), we get

$$\frac{10 p^2q^3}{5 pq^4} = \frac{10/32}{5/32} \text{ or } \frac{2p}{q} = 2 \text{ or } 2p = 2q \text{ or } p = q = \frac{1}{2}$$

$$P[X=0] = \binom{5}{0}\left(\frac{1}{2}\right)^0 \left(\frac{1}{2}\right)^5 = \frac{1}{32} \text{ and } P[X=3] = \binom{5}{3}\left(\frac{1}{2}\right)^3 \left(\frac{1}{2}\right)^2 = \frac{10}{32}$$

Coefficient of skewness $= \frac{q-p}{\sqrt{npq}} = 0$, there is no skewness, thus the distribution is symmetrical.

## 11.8. PROPERTIES OF THE BINOMIAL DISTRIBUTION

Properties of the binomial distribution are listed in the following table.

| | |
| :--- | :--- |
| **Mean** | $\mu = \text{np}$ |
| **Variance** | $\sigma^2 = \text{npq}$ |
| **Standard Deviation** | $\sigma = \sqrt{\text{npq}}$ |
| **Moment Coefficient of Skewness** | $\gamma_1 = \sqrt{\beta_1} = \frac{\text{q}-\text{p}}{\sqrt{\text{npq}}}$ |
| **Moment Coefficient of Kurtosis** | $\beta_2 = 3 + \frac{1 - 6\text{pq}}{\text{npq}}$ |

**Note:** Skewness is negative, zero or positive according as $p > 1/2$ or $p = 1/2$ or $p < 1/2$.
