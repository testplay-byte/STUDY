---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-6
chapter_folder: Chapter-13-Sampling-and-Sampling-Distributions
chapter_number: 13
chapter_title: "Sampling and Sampling Distributions"
page_image: 26
page_printed: 180
section: null
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-13-Sampling-and-Sampling-Distributions/0026.jpg
converted_at: "2026-10-01"
converted_by: "agent-S6d (glm-vision)"
notes: "Offset check: printed p.180 = image 26 + 154 (header folio, top-left; running header is the book-title variant). Page opens mid-Solution of Example 13.19 (its distribution table, probability answers and 'Population proportion = 4/6 = 2/3' complete here); Example 13.20 starts and completes on this page. Recurring book typo preserved verbatim: 'Where X represent the number of even digits in the population.' (missing 's'). Tally cells transcribed with escaped pipes; the 1/2 tally is four strokes crossed by a diagonal slash (bundle of five) followed by three strokes (8 marks). Total rows not printed in bold on this page. | TYPO-CORRECTION PASS (2026-10-06, user mandate): unambiguous surface typo(s) corrected in the body per correction policy v4.4 — printed forms remain documented earlier in this note and itemised in docs/tracking/CORRECTIONS-LOG.md."
---

# Page 26 — Sampling and Sampling Distributions (Chapter 13)

> 📄 Original scan: [0026.jpg](../../../Raw/Statistics/Chapter-13-Sampling-and-Sampling-Distributions/0026.jpg) · printed page 180

The sampling distribution of the sample proportion $\hat{p}$ is:

| $\hat{p}$ | f | f($\hat{p}$) |
| :---: | :---: | :---: |
| 0 | 1 | 1/15 |
| 1/2 | 8 | 8/15 |
| 2/2 | 6 | 6/15 |
| Total | 15 | 1 |

Population proportion $= p = \frac{4}{6} = \frac{2}{3}$

(i) $P(\hat{p} > p) = \frac{6}{15}$ (ii) $P(\hat{p} = p) = 0$ (iii) $P\left(\hat{p} = \frac{1}{2}\right) = \frac{8}{15}$ (iv) $P(\text{ both are smokers }) = \frac{6}{15}$

**Example 13.20.**

A population consists of 1, 2, 5 and 6. Draw all possible samples of size 2 with replacement. Find the proportion of even numbers in the samples. Construct the sampling distribution of sample proportion of even numbers and verify that: (i) $E(\hat{p}) = p$ (ii) S.E ($\hat{p}$) = $\sqrt{\frac{pq}{n}}$.

**Solution:** We have population values 1,2,5,6, population size $N = 4$ and sample size $n = 2$. Thus, the number of possible samples which can be drawn with replacement is $N^n = 4^2 = 16$. Let $\hat{p}$ represent the proportion of even numbers in the sample.

| Sample No. | Sample Values | Sample Proportion ($\hat{p}$) | Sample No. | Sample Values | Sample Proportion ($\hat{p}$) |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | 1, 1 | 0 | 9 | 5, 1 | 0 |
| 2 | 1, 2 | 1/2 | 10 | 5, 2 | 1/2 |
| 3 | 1, 5 | 0 | 11 | 5, 5 | 0 |
| 4 | 1, 6 | 1/2 | 12 | 5, 6 | 1/2 |
| 5 | 2, 1 | 1/2 | 13 | 6, 1 | 1/2 |
| 6 | 2, 2 | 2/2 | 14 | 6, 2 | 2/2 |
| 7 | 2, 5 | 1/2 | 15 | 6, 5 | 1/2 |
| 8 | 2, 6 | 2/2 | 16 | 6, 6 | 2/2 |

The sampling distribution of $\hat{p}$ and its mean and standard deviation are:

| $\hat{p}$ | Tally | f | f($\hat{p}$) | $\hat{p}$f($\hat{p}$) | $\hat{p}^2$f($\hat{p}$) |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 0 | \|\|\|\| | 4 | 4/16 | 0 | 0 |
| 1/2 | \|\|\|\| / \|\|\| | 8 | 8/16 | 8/32 | 8/64 |
| 2/2 | \|\|\|\| | 4 | 4/16 | 8/32 | 16/64 |
| Total | | **16** | **1** | **16/32** | **24/64** |

$E(\hat{p}) = \sum \hat{p}f(\hat{p}) = 16/32 = 0.5$

$S.E(\hat{p}) = \sqrt{\sum \hat{p}^2f(\hat{p}) - [\sum \hat{p}f(\hat{p})]^2} = \sqrt{\frac{24}{64} - \left(\frac{16}{32}\right)^2} = \sqrt{0.125} = 0.3536$

Population proportion $= p = \frac{X}{N} = \frac{2}{4} = 0.5$ and $q = 1 - p = 0.5$.

Where $X$ represents the number of even digits in the population.

$\sqrt{\frac{pq}{n}} = \sqrt{\frac{(0.5)(0.5)}{2}} = \sqrt{0.125} = 0.3536$

Hence (i) $E(\hat{p}) = p = 0.5$ (ii) $S.E(\hat{p}) = \sqrt{\frac{pq}{n}} = 0.3536$
