---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-6
chapter_folder: Chapter-13-Sampling-and-Sampling-Distributions
chapter_number: 13
chapter_title: "Sampling and Sampling Distributions"
page_image: 12
page_printed: 166
section: null
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-13-Sampling-and-Sampling-Distributions/0012.jpg
converted_at: "2026-10-01"
converted_by: "agent-S6b (glm-vision)"
notes: "Offset check: printed p.166 = image 12 + 154 (header folio, top-left). Page opens with the 20-sample table completing Example 13.3 (ii) from the previous page; Example 13.4 runs to the end of its Hence line (page ends at a complete sentence). Tally marks in the sampling-distribution table are transcribed as escaped pipes (\\|) inside the GFM table. No printed section headings on this page."
---

# Page 12 — Sampling and Sampling Distributions (Chapter 13)

> 📄 Original scan: [0012.jpg](../../../Raw/Statistics/Chapter-13-Sampling-and-Sampling-Distributions/0012.jpg) · printed page 166

| Sample No. | Sample Values | Sample Mean ($\bar{X}$) | Sample No. | Sample Values | Sample Mean ($\bar{X}$) |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | 4, 8, 8 | 20/3 | 11 | 8, 8, 12 | 28/3 |
| 2 | 4, 8, 12 | 24/3 | 12 | 8, 8, 12 | 28/3 |
| 3 | 4, 8, 12 | 24/3 | 13 | 8, 8, 16 | 32/3 |
| 4 | 4, 8, 16 | 28/3 | 14 | 8, 12, 12 | 32/3 |
| 5 | 4, 8, 12 | 24/3 | 15 | 8, 12, 16 | 36/3 |
| 6 | 4, 8, 12 | 24/3 | 16 | 8, 12, 16 | 36/3 |
| 7 | 4, 8, 16 | 28/3 | 17 | 8, 12, 12 | 32/3 |
| 8 | 4, 12, 12 | 28/3 | 18 | 8, 12, 16 | 36/3 |
| 9 | 4, 12, 16 | 32/3 | 19 | 8, 12, 16 | 36/3 |
| 10 | 4, 12, 16 | 32/3 | 20 | 12, 12, 16 | 40/3 |

**Example 13.4.**

Take all possible samples of size two with replacement from the population 2, 2, 8. Show that the population mean is equal to the mean of means of all samples and population variance is twice the variance of sample means.

**Solution:** We have population values 2, 2, 8, population size N = 3 and sample size n = 2. Thus, the number of possible samples which can be drawn with replacement is $N^n = 3^2 = 9$.

| Sample No. | Sample Values | Sample Mean ($\bar{X}$) | Sample No. | Sample Values | Sample Mean ($\bar{X}$) |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | 2, 2 | 2 | 6 | 2, 8 | 5 |
| 2 | 2, 2 | 2 | 7 | 8, 2 | 5 |
| 3 | 2, 8 | 5 | 8 | 8, 2 | 5 |
| 4 | 2, 2 | 2 | 9 | 8, 8 | 8 |
| 5 | 2, 2 | 2 | | | |

The sampling distribution of the sample mean $\bar{X}$ and its mean and variance are:

| $\bar{X}$ | Tally | f | $f(\bar{X})$ | $\bar{X}f(\bar{X})$ | $\bar{X}^2f(\bar{X})$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 2 | \|\|\|\| | 4 | 4/9 | 8/9 | 16/9 |
| 5 | \|\|\|\| | 4 | 4/9 | 20/9 | 100/9 |
| 8 | \| | 1 | 1/9 | 8/9 | 64/9 |
| **Total** |  | **9** | **1** | **36/9** | **180/9** |

$$E(\bar{X}) = \sum \bar{X} f(\bar{X}) = \frac{36}{9} = 4$$

$$\text{Var}(\bar{X}) = \sum \bar{X}^2 f(\bar{X}) - [\sum \bar{X} f(\bar{X})]^2 = \frac{180}{9} - \left( \frac{36}{9} \right)^2 = 4 \quad \text{and} \quad 2\text{Var}(\bar{X}) = 2(4) = 8$$

The mean and variance of the population are:

| X | 2 | 2 | 8 | $\sum X = 12$ |
| :---: | :---: | :---: | :---: | :---: |
| $X^2$ | 4 | 4 | 64 | $\sum X^2 = 72$ |

$$\mu = \frac{\sum X}{N} = \frac{12}{3} = 4 \text{ and } \sigma^2 = \frac{\sum X^2}{N} - \left( \frac{\sum X}{N} \right)^2 = \frac{72}{3} - \left( \frac{12}{3} \right)^2 = 8$$

Hence $E(\bar{X}) = \mu = 4$ and $\sigma^2 = 2\text{Var} (\bar{X}) = 8$.
