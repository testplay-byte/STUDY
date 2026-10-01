---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-6
chapter_folder: Chapter-13-Sampling-and-Sampling-Distributions
chapter_number: 13
chapter_title: "Sampling and Sampling Distributions"
page_image: 17
page_printed: 171
section: null
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-13-Sampling-and-Sampling-Distributions/0017.jpg
converted_at: "2026-10-01"
converted_by: "agent-S6c (glm-vision)"
notes: "Offset check: printed p.171 = image 17 + 154 (header folio, top-right). Row 1 of the sample table is printed with a faint first digit; reads (4-5)^2 (confirmed at zoom). Row 10 variance numerator second term is blurred in print; transcribed as (12-11)^2 (consistent with the = 1 result). No printed section heading on this page; page ends at a complete sentence."
---

# Page 17 — Sampling and Sampling Distributions (Chapter 13)

> 📄 Original scan: [0017.jpg](../../../Raw/Statistics/Chapter-13-Sampling-and-Sampling-Distributions/0017.jpg) · printed page 171

**Example 13.11.**

A population consists of five values 4, 6, 8, 10, 12. Take all possible samples of size two without replacement from this population and verify that:

$$E(S^2) = \left(\frac{N}{N-1}\right)\left(\frac{n-1}{n}\right)\sigma^2 \text{ where } S^2 = \frac{\sum(X-\bar{X})^2}{n}$$

**Solution:** We have population values 4, 6, 8, 10, 12, population size $N = 5$ and sample size $n = 2$. Thus, the number of possible samples which can be drawn without replacement is $\binom{N}{n} = \binom{5}{2} = 10$.

| Sample No. | Sample Values | Sample Mean $\bar{X} = \frac{\sum X}{n}$ | Sample Variance $S^2 = \frac{\sum(X-\bar{X})^2}{n}$ |
| :---: | :---: | :---: | :---: |
| 1 | 4, 6 | $\frac{4+6}{2} = 5$ | $\frac{(4-5)^2+(6-5)^2}{2} = 1$ |
| 2 | 4, 8 | $\frac{4+8}{2} = 6$ | $\frac{(4-6)^2+(8-6)^2}{2} = 4$ |
| 3 | 4, 10 | $\frac{4+10}{2} = 7$ | $\frac{(4-7)^2+(10-7)^2}{2} = 9$ |
| 4 | 4, 12 | $\frac{4+12}{2} = 8$ | $\frac{(4-8)^2+(12-8)^2}{2} = 16$ |
| 5 | 6, 8 | $\frac{6+8}{2} = 7$ | $\frac{(6-7)^2+(8-7)^2}{2} = 1$ |
| 6 | 6, 10 | $\frac{6+10}{2} = 8$ | $\frac{(6-8)^2+(10-8)^2}{2} = 4$ |
| 7 | 6, 12 | $\frac{6+12}{2} = 9$ | $\frac{(6-9)^2+(12-9)^2}{2} = 9$ |
| 8 | 8, 10 | $\frac{8+10}{2} = 9$ | $\frac{(8-9)^2+(10-9)^2}{2} = 1$ |
| 9 | 8, 12 | $\frac{8+12}{2} = 10$ | $\frac{(8-10)^2+(12-10)^2}{2} = 4$ |
| 10 | 10, 12 | $\frac{10+12}{2} = 11$ | $\frac{(10-11)^2+(12-11)^2}{2} = 1$ |

The sampling distribution of the sample variance $S^2$ and its mean is:

| $S^2$ | f | $f(S^2)$ | $S^2f(S^2)$ |
| :---: | :---: | :---: | :---: |
| 1 | 4 | 4/10 | 4/10 |
| 4 | 3 | 3/10 | 12/10 |
| 9 | 2 | 2/10 | 18/10 |
| 16 | 1 | 1/10 | 16/10 |
| **Total** | **10** | **1** | **50/10** |

$$E(S^2) = \mu_{S^2} = \sum S^2f(S^2) = \frac{50}{10} = 5$$

The variance of the population is:

| X | 4 | 6 | 8 | 10 | 12 | $\sum X = 40$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $X^2$ | 16 | 36 | 64 | 100 | 144 | $\sum X^2 = 360$ |

$$\sigma^2 = \frac{\sum X^2}{N} - \left(\frac{\sum X}{N}\right)^2 = \frac{360}{5} - \left(\frac{40}{5}\right)^2 = 72 - 64 = 8$$

$$\left(\frac{N}{N-1}\right)\left(\frac{n-1}{n}\right)\sigma^2 = \left(\frac{5}{5-1}\right)\left(\frac{2-1}{2}\right)8 = \left(\frac{5}{4}\right)\left(\frac{8}{2}\right) = \frac{40}{8} = 5.$$

Hence $E(S^2) = \left(\frac{N}{N-1}\right)\left(\frac{n-1}{n}\right)\sigma^2 = 5$
