---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-6
chapter_folder: Chapter-13-Sampling-and-Sampling-Distributions
chapter_number: 13
chapter_title: "Sampling and Sampling Distributions"
page_image: 13
page_printed: 167
section: null
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-13-Sampling-and-Sampling-Distributions/0013.jpg
converted_at: "2026-10-01"
converted_by: "agent-S6b (glm-vision)"
notes: "Offset check: printed p.167 = image 13 + 154 (header folio, top-right). Example 13.5 complete; Example 13.6 begins and the page ends after its first computation line (...= 0.15), Solution continuing on the next page. Book artifacts preserved verbatim: stray dot after 3/8 in the X-bar^2 f(X-bar) column (row X-bar = 1); S.E printed without a period in the final Solution line while the question line has S.E. No printed section headings on this page."
---

# Page 13 — Sampling and Sampling Distributions (Chapter 13)

> 📄 Original scan: [0013.jpg](../../../Raw/Statistics/Chapter-13-Sampling-and-Sampling-Distributions/0013.jpg) · printed page 167

**Example 13.5.**

A population consists of two values 0 and 3. Take all possible samples of size n = 3 with replacement. Show that $\sigma_{\bar{x}}^2 = \frac{\sigma^2}{3}$

**Solution:** We have population values 0, 3, population size N = 2 and sample size n = 3. Thus, the number of possible samples which can be drawn with replacement is $N^n = 2^3 = 8$.

| Sample No. | Sample Values | Sample Mean ($\bar{X}$) | Sample No. | Sample Values | Sample Mean ($\bar{X}$) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | 0,0,0 | 0 | 5 | 3,0,0 | 1 |
| 2 | 0,0,3 | 1 | 6 | 3,0,3 | 2 |
| 3 | 0,3,0 | 1 | 7 | 3,3,0 | 2 |
| 4 | 0,3,3 | 2 | 8 | 3,3,3 | 3 |

The sampling distribution of sample mean ($\bar{X}$) and its variance is:

| $\bar{X}$ | f | $f(\bar{X})$ | $\bar{X} f(\bar{X})$ | $\bar{X}^2 f(\bar{X})$ |
| :--- | :--- | :--- | :--- | :--- |
| 0 | 1 | 1/8 | 0 | 0 |
| 1 | 3 | 3/8 | 3/8 | 3/8. |
| 2 | 3 | 3/8 | 6/8 | 12/8 |
| 3 | 1 | 1/8 | 3/8 | 9/8 |
| Total | 8 | 1 | 12/8 | 24/8 |

$$\text{Var} (\bar{X}) = \sigma_{\bar{x}}^2 = \sum \bar{X}^2 f(\bar{X}) - \left[ \sum \bar{X} f(\bar{X}) \right]^2 = \frac{24}{8} - \left( \frac{12}{8} \right)^2 = 3 - 2.25 = 0.75$$

Population variance is:

| X | 0 | 3 | $\sum X = 3$ |
| :--- | :--- | :--- | :--- |
| $X^2$ | 0 | 9 | $\sum X^2 = 9$ |

$$\sigma^2 = \frac{\sum X^2}{N} - \left( \frac{\sum X}{N} \right)^2 = \frac{9}{2} - \left( \frac{3}{2} \right)^2 = \frac{9}{2} - \frac{9}{4} = \frac{18 - 9}{4} = \frac{9}{4} \text{ and } \frac{\sigma^2}{3} = \frac{9/4}{3} = \frac{9}{12} = 0.75.$$

Hence $\sigma_{\bar{x}}^2 = \frac{\sigma^2}{3} = 0.75$

**Example 13.6.**

The random variable X has the following probability distribution.

| X | 4 | 5 | 6 | 7 |
| :--- | :--- | :--- | :--- | :--- |
| f(X) | 0.2 | 0.4 | 0.3 | 0.1 |

Find the $\mu_{\bar{x}}$, $\sigma_{\bar{x}}^2$ and S.E. ($\bar{X}$) for a random sample of 36 with replacement.

**Solution:** The necessary calculations are given below:

| X | f(X) | X f(X) | $X^2 f(X)$ |
| :--- | :--- | :--- | :--- |
| 4 | 0.2 | 0.8 | 3.2 |
| 5 | 0.4 | 2.0 | 10.0 |
| 6 | 0.3 | 1.8 | 10.8 |
| 7 | 0.1 | 0.7 | 4.9 |
| Total | 1 | 5.3 | 28.9 |

$\mu = \sum X f(X) = 5.3 \text{ and } \sigma^2 = \sum X^2 f(X) - [\sum X f(X)]^2 = 28.9 - (5.3)^2 = 0.81$. Therefore

$\mu_{\bar{x}} = \mu = 5.3, \quad \sigma_{\bar{x}}^2 = \frac{\sigma^2}{n} = \frac{0.81}{36} = 0.0225 \text{ and } \sigma_{\bar{x}} = \text{S.E} (\bar{X}) = \sqrt{0.0225} = 0.15$
