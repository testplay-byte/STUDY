---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-6
chapter_folder: Chapter-13-Sampling-and-Sampling-Distributions
chapter_number: 13
chapter_title: "Sampling and Sampling Distributions"
page_image: 23
page_printed: 177
section: null
exercise: null
content_type: mixed
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-13-Sampling-and-Sampling-Distributions/0023.jpg
converted_at: "2026-10-01"
converted_by: "agent-S6d (glm-vision)"
notes: "Offset check: printed p.177 = image 23 + 154 (header folio, top-right). Page opens mid-list continuing section 13.37 property (iv) from previous page; ends mid-Solution of Example 13.17 (after binom(N,n) = binom(5,3) = 10; table continues next page). Book quirks preserved verbatim: italic note claims the distribution of p-hat 'is not the t-distribution'; f(p-hat) cell for p-hat=1/3 prints '.3/10' with a leading dot; a stray printed dot precedes 0.6 in 'Population proportion p = X/N = 3/5 = bullet 0.6'; Example 13.17 says 'from population i.e. 2, 4, 5, 7, 10'. Tally cells transcribed with escaped pipes; the 2/3 tally is four strokes crossed by a diagonal slash (bundle of five) plus one stroke; Total-row tally cell contains a printed dash."
---

# Page 23 — Sampling and Sampling Distributions (Chapter 13)

> 📄 Original scan: [0023.jpg](../../../Raw/Statistics/Chapter-13-Sampling-and-Sampling-Distributions/0023.jpg) · printed page 177

(iv) The shape of the distribution of $\hat{p}$ is normal when $n > 30$. The random variable $\hat{p}$ can be transformed into standard normal variable $Z$ where $Z = \frac{\hat{p} - E(\hat{p})}{S.E(\hat{p})} = \frac{\hat{p} - p}{\sqrt{\frac{pq}{n}}}$.

*It is important to note that when $n$ is small, the distribution of $\hat{p}$ is not the $t$-distribution.*

**Example 13.16.**

A population consists of five numbers 2, 5, 6, 7, 9. Take all possible samples of size 3 from this population, without replacement and compute the proportion of odd numbers for each sample.

Verify that: (i) $\mu_{\hat{p}} = p$ (ii) $\sigma_{\hat{p}}^2 = \frac{pq}{n}\left(\frac{N-n}{N-1}\right)$

**Solution:** We have population values 2, 5, 6, 7, 9, population size $N = 5$ and sample size $n = 3$. Thus, the number of possible samples which can be drawn without replacement is $\binom{N}{n} = \binom{5}{3} = 10$.

Let $\hat{p}$ represent the proportion of odd numbers in the sample.

| Sample No. | Sample Values | Sample Proportion ($\hat{p}$) | Sample No. | Sample Values | Sample Proportion ($\hat{p}$) |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | 2, 5, 6 | 1/3 | 6 | 2, 7, 9 | 2/3 |
| 2 | 2, 5, 7 | 2/3 | 7 | 5, 6, 7 | 2/3 |
| 3 | 2, 5, 9 | 2/3 | 8 | 5, 6, 9 | 2/3 |
| 4 | 2, 6, 7 | 1/3 | 9 | 5, 7, 9 | 3/3 |
| 5 | 2, 6, 9 | 1/3 | 10 | 6, 7, 9 | 2/3 |

The sampling distribution of the sample proportion $\hat{p}$ and its mean and variance are:

| $\hat{p}$ | Tally | f | f($\hat{p}$) | $\hat{p}$f($\hat{p}$) | $\hat{p}^2$f($\hat{p}$) |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1/3 | \|\|\| | 3 | .3/10 | 3/30 | 3/90 |
| 2/3 | \|\|\|\| / \| | 6 | 6/10 | 12/30 | 24/90 |
| 3/3 | \| | 1 | 1/10 | 3/30 | 9/90 |
| **Total** | - | **10** | **1** | **18/30** | **36/90** |

$$\mu_{\hat{p}} = \sum \hat{p}f(\hat{p}) = \frac{18}{30} = 0.6$$

$$\sigma_{\hat{p}}^2 = \sum \hat{p}^2 f(\hat{p}) - [\sum \hat{p}f(\hat{p})]^2 = \frac{36}{90} - \left(\frac{18}{30}\right)^2 = 0.40 - 0.36 = 0.04$$

Population proportion $p = \frac{X}{N} = \frac{3}{5} =$ •0.6 and $q = 1 - p = 0.4$.

where $X$ represents the number of odd digits in the population.

$$\frac{pq}{n}\left(\frac{N-n}{N-1}\right) = \frac{(0.6)(0.4)}{3}\left(\frac{5-3}{5-1}\right) = 0.04. \text{ Hence (i) } \mu_{\hat{p}} = p = 0.6 \quad \text{(ii) } \sigma_{\hat{p}}^2 = \frac{pq}{n}\left(\frac{N-n}{N-1}\right) = 0.04$$

**Example 13.17.**

Draw all possible samples of size 3 without replacement from population i.e. 2, 4, 5, 7, 10. Find the sample proportion ($\hat{p}$) of prime numbers in each sample. Verify that:

(i) $\mu_{\hat{p}}=p$ (ii) $\sigma_{\hat{p}}^2=\frac{pq}{n}\left(\frac{N-n}{N-1}\right)$

**Solution:** We have population values 2, 4, 5, 7, 10, population size $N = 5$ and sample size $n = 3$. Thus, the number of possible samples which can be drawn without replacement is $\binom{N}{n} = \binom{5}{3} = 10$.
