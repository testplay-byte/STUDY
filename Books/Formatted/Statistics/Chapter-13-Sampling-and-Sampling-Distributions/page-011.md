---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-6
chapter_folder: Chapter-13-Sampling-and-Sampling-Distributions
chapter_number: 13
chapter_title: "Sampling and Sampling Distributions"
page_image: 11
page_printed: 165
section: null
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-13-Sampling-and-Sampling-Distributions/0011.jpg
converted_at: "2026-10-01"
converted_by: "agent-S6b (glm-vision)"
notes: "Offset check: printed p.165 = image 11 + 154 (header folio, top-right). Page opens mid-solution — continuation of Example 13.2 (sampling-distribution table and verification); Example 13.3 begins and the page ends after \"...= 20.\" with part (ii) of its Solution continuing on the next page. Book typo preserved verbatim: a stray period after 5.25 in the μ display line (= 5.25. and). No printed section headings on this page."
---

# Page 11 — Sampling and Sampling Distributions (Chapter 13)

> 📄 Original scan: [0011.jpg](../../../Raw/Statistics/Chapter-13-Sampling-and-Sampling-Distributions/0011.jpg) · printed page 165

The sampling distribution of the sample mean $\bar{X}$ and its mean and standard deviation are:

| $\bar{X}$ | f | $f(\bar{X})$ | $\bar{X} f(\bar{X})$ | $\bar{X}^2 f(\bar{X})$ |
| :--- | :--- | :--- | :--- | :--- |
| 14/3 | 1 | 1/4 | 14/12 | 196/36 |
| 16/3 | 2 | 2/4 | 32/12 | 512/36 |
| 17/3 | 1 | 1/4 | 17/12 | 289/36 |
| **Total** | **4** | **1** | **63/12** | **997/36** |

$$\mu_{\bar{x}} = \sum \bar{X} f(\bar{X}) = \frac{63}{12} = 5.25 \text{ and } \sigma_{\bar{x}} = \sqrt{\sum \bar{X}^2 f(\bar{X}) - [\sum \bar{X} f(\bar{X})]^2} = \sqrt{\frac{997}{36} - (\frac{63}{12})^2} = 0.3632$$

The mean and standard deviation of the population are:

| X | 4 | 5 | 5 | 7 | $\sum X = 21$ |
| :--- | :--- | :--- | :--- | :--- | :--- |
| $X^2$ | 16 | 25 | 25 | 49 | $\sum X^2 = 115$ |

$$\mu = \frac{\sum X}{N} = \frac{21}{4} = 5.25. \text{ and } \sigma = \sqrt{\frac{\sum X^2}{N} - (\frac{\sum X}{N})^2} = \sqrt{\frac{115}{4} - (\frac{21}{4})^2} = 1.0897$$

$$\frac{\sigma}{\sqrt{n}} \sqrt{\frac{N-n}{N-1}} = \frac{1.0897}{\sqrt{3}} \sqrt{\frac{4-3}{4-1}} = 0.3632. \text{ Hence } \mu_{\bar{x}} = \mu = 5.25 \text{ and } \sigma_{\bar{x}} = \frac{\sigma}{\sqrt{n}} \sqrt{\frac{N-n}{N-1}} = 0.3632.$$

**Example 13.3.**

Given the following population distribution:

| X | 4 | 8 | 12 | 16 |
| :--- | :--- | :--- | :--- | :--- |
| f(X) | 1/6 | 2/6 | 2/6 | 1/6 |

(i) Find the population mean and variance.

(ii) Take all possible samples of size 3 without replacement find the sample mean in each sample.

**Solution:** (i) The necessary calculations are given below:

| X | f(X) | X f(X) | $X^2 f(X)$ |
| :--- | :--- | :--- | :--- |
| 4 | 1/6 | 4/6 | 16/6 |
| 8 | 2/6 | 16/6 | 128/6 |
| 12 | 2/6 | 24/6 | 288/6 |
| 16 | 1/6 | 16/6 | 256/6 |
| **Total** | **1** | **60/6** | **688/6** |

$$\mu = \sum Xf(X) = \frac{60}{6} = 10$$

$$\sigma^2 = \sum X^2 f(X) - [\sum X f(X)]^2 = \frac{688}{6} - (\frac{60}{6})^2 = 114.67 - 100 = 14.67$$

(ii) We have population values 4, 8, 8, 12, 12, 16, population size N = 6 and sample size n = 3. Thus, the number of possible samples which can be drawn without replacement is $\binom{N}{n} = \binom{6}{3} = 20$.
