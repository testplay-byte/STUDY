---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-6
chapter_folder: Chapter-13-Sampling-and-Sampling-Distributions
chapter_number: 13
chapter_title: "Sampling and Sampling Distributions"
page_image: 10
page_printed: 164
section: null
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-13-Sampling-and-Sampling-Distributions/0010.jpg
converted_at: "2026-10-01"
converted_by: "agent-S6b (glm-vision)"
notes: "Offset check: printed p.164 = image 10 + 154 (header folio, top-left). Page opens mid-solution — continuation of Example 13.1 (its sample table and computation tables); ends after the four-sample table of Example 13.2, mid-solution (continues next page). No printed section headings on this page."
---

# Page 10 — Sampling and Sampling Distributions (Chapter 13)

> 📄 Original scan: [0010.jpg](../../../Raw/Statistics/Chapter-13-Sampling-and-Sampling-Distributions/0010.jpg) · printed page 164

| Sample No. | Sample Values | Sample Mean ($\bar{X}$) | Sample No. | Sample Values | Sample Mean ($\bar{X}$) |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | 3, 6 | 4.5 | 6 | 6, 12 | 9.0 |
| 2 | 3, 9 | 6.0 | 7 | 6, 15 | 10.5 |
| 3 | 3, 12 | 7.5 | 8 | 9, 12 | 10.5 |
| 4 | 3, 15 | 9.0 | 9 | 9, 15 | 12.0 |
| 5 | 6, 9 | 7.5 | 10 | 12, 15 | 13.5 |

The sampling distribution of the sample mean ($\bar{X}$) and its mean and variance are:

| $\bar{X}$ | f | $f(\bar{X})$ | $\bar{X} f(\bar{X})$ | $\bar{X}^2 f(\bar{X})$ |
| :---: | :---: | :---: | :---: | :---: |
| 4.5 | 1 | 1/10 | 4.5/10 | 20.25/10 |
| 6.0 | 1 | 1/10 | 6.0/10 | 36.00/10 |
| 7.5 | 2 | 2/10 | 15.0/10 | 112.50/10 |
| 9.0 | 2 | 2/10 | 18.0/10 | 162.00/10 |
| 10.5 | 2 | 2/10 | 21.0/10 | 220.50/10 |
| 12.0 | 1 | 1/10 | 12.0/10 | 144.00/10 |
| 13.5 | 1 | 1/10 | 13.5/10 | 182.25/10 |
| **Total** | **10** | **1** | **90/10** | **877.5/10** |

$$E(\bar{X}) = \sum \bar{X} f(\bar{X}) = \frac{90}{10} = 9$$

$$\text{Var}(\bar{X}) = \sum \bar{X}^2 f(\bar{X}) - \left[ \sum \bar{X} f(\bar{X}) \right]^2 = \frac{877.5}{10} - \left( \frac{90}{10} \right)^2 = 87.75 - 81 = 6.75$$

The mean and variance of the population are:

| X | 3 | 6 | 9 | 12 | 15 | $\sum X = 45$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $X^2$ | 9 | 36 | 81 | 144 | 225 | $\sum X^2 = 495$ |

$$\mu = \frac{\sum X}{N} = \frac{45}{5} = 9 \text{ and } \sigma^2 = \frac{\sum X^2}{N} - \left( \frac{\sum X}{N} \right)^2 = \frac{495}{5} - \left( \frac{45}{5} \right)^2 = 99 - 81 = 18$$

Hence (i) $E(\bar{X}) = \mu = 9$ (ii) $\text{Var}(\bar{X}) = \frac{\sigma^2}{n} \left( \frac{N-n}{N-1} \right) = \frac{18}{2} \left( \frac{5-2}{5-1} \right) = 6.75$

**Example 13.2.**

If random samples of size three are drawn without replacement from the population consisting of four numbers 4, 5, 5, 7. Find sample mean $\bar{X}$ for each sample and make sampling distribution of $\bar{X}$. Calculate the mean and standard deviation of this sampling distribution. Compare your calculations with population parameters.

**Solution:** We have population values 4, 5, 5, 7, population size $N=4$ and sample size $n=3$. Thus, the number of possible samples which can be drawn without replacement is $\binom{N}{n} = \binom{4}{3} = 4$.

| Sample No. | Sample Values | Sample Mean ($\bar{X}$) |
| :---: | :---: | :---: |
| 1 | 4, 5, 5 | 14/3 |
| 2 | 4, 5, 7 | 16/3 |
| 3 | 4, 5, 7 | 16/3 |
| 4 | 5, 5, 7 | 17/3 |
