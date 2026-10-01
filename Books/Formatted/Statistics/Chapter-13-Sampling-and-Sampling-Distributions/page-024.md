---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-6
chapter_folder: Chapter-13-Sampling-and-Sampling-Distributions
chapter_number: 13
chapter_title: "Sampling and Sampling Distributions"
page_image: 24
page_printed: 178
section: null
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-13-Sampling-and-Sampling-Distributions/0024.jpg
converted_at: "2026-10-01"
converted_by: "agent-S6d (glm-vision)"
notes: "Offset check: printed p.178 = image 24 + 154 (header folio, top-left; running header is the book-title variant). Page opens mid-Solution of Example 13.17 directly with its 10-sample table (no intro line printed above it). Example 13.18 starts here; its 21-sample table completes and the page ends with that table (sampling distribution table follows on next page). Book phrasing preserved verbatim: 'Find proportion of vowel letters' and 'Form sampling distribution of sample proportion' (no 'the'), statement ends without a full stop. Population proportion line prints 'p = X/N = 3/5 = 0.6, sigma^2 = pq = (0.6)(0.4) = 0.24' separated by a comma."
---

# Page 24 — Sampling and Sampling Distributions (Chapter 13)

> 📄 Original scan: [0024.jpg](../../../Raw/Statistics/Chapter-13-Sampling-and-Sampling-Distributions/0024.jpg) · printed page 178

| Sample No. | Sample Values | Sample Proportion ($\hat{p}$) | Sample No. | Sample Values | Sample Proportion ($\hat{p}$) |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | 2, 4, 5 | 2/3 | 6 | 2, 7, 10 | 2/3 |
| 2 | 2, 4, 7 | 2/3 | 7 | 4, 5, 7 | 2/3 |
| 3 | 2, 4, 10 | 1/3 | 8 | 4, 5, 10 | 1/3 |
| 4 | 2, 5, 7 | 3/3 | 9 | 4, 7, 10 | 1/3 |
| 5 | 2, 5, 10 | 2/3 | 10 | 5, 7, 10 | 2/3 |

The sampling distribution of sample proportion $\hat{p}$ and its mean and variance are:

| $\hat{p}$ | f | f($\hat{p}$) | $\hat{p}$f($\hat{p}$) | $\hat{p}^2$f($\hat{p}$) |
| :---: | :---: | :---: | :---: | :---: |
| 1/3 | 3 | 3/10 | 3/30 | 3/90 |
| 2/3 | 6 | 6/10 | 12/30 | 24/90 |
| 3/3 | 1 | 1/10 | 3/30 | 9/90 |
| **Total** | **10** | **1** | **18/30** | **36/90** |

$$\mu_{\hat{p}} = E(\hat{p}) = \sum \hat{p} f(\hat{p}) = \frac{18}{30} = 0.6$$

$$\sigma_{\hat{p}}^2 = Var(\hat{p}) = \sum \hat{p}^2 f(\hat{p}) - [\sum \hat{p} f(\hat{p})]^2 = \frac{36}{90} - \left(\frac{18}{30}\right)^2 = 0.04$$

The population proportion $p$ and the population variance $pq$ are:

$$p = \frac{X}{N} = \frac{3}{5} = 0.6, \sigma^2 = pq = (0.6)(0.4) = 0.24$$

$$\frac{pq}{n}\left(\frac{N-n}{N-1}\right) = \frac{0.24}{3}\left(\frac{5-3}{5-1}\right) = (0.08)(0.5) = 0.04$$

Hence (i) $\mu_{\hat{p}} = p = 0.6$ and (ii) $\sigma_{\hat{p}}^2 = \frac{pq}{n}\left(\frac{N-n}{N-1}\right) = 0.04$

**Example 13.18.**

Draw all possible samples of two letters each without replacement from the letters of the word “KASHMIR”. Find proportion of vowel letters in each sample. Form sampling distribution of sample proportion and verify that: $\mu_{\hat{p}} = p$ and $\sigma_{\hat{p}}^2 = \frac{pq}{n}\left(\frac{N-n}{N-1}\right)$

**Solution:** We have population values “KASHMIR”, population size $N = 7$ and sample size $n = 2$. Thus, the number of possible samples which can be drawn without replacement is $\binom{N}{n} = \binom{7}{2} = 21$.

Let $\hat{p}$ represent the proportion of vowel letters in the sample.

| Sample No. | Sample Values | Sample Proportion ($\hat{p}$) | Sample No. | Sample Values | Sample Proportion ($\hat{p}$) |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | K, A | 1/2 | 12 | S, H | 0 |
| 2 | K, S | 0 | 13 | S, M | 0 |
| 3 | K, H | 0 | 14 | S, I | 1/2 |
| 4 | K, M | 0 | 15 | S, R | 0 |
| 5 | K, I | 1/2 | 16 | H, M | 0 |
| 6 | K, R | 0 | 17 | H, I | 1/2 |
| 7 | A, S | 1/2 | 18 | H, R | 0 |
| 8 | A, H | 1/2 | 19 | M, I | 1/2 |
| 9 | A, M | 1/2 | 20 | M, R | 0 |
| 10 | A, I | 2/2 | 21 | I, R | 1/2 |
| 11 | A, R | 1/2 | | | |
