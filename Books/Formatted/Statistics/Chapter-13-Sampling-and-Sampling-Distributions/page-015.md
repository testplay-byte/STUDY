---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-6
chapter_folder: Chapter-13-Sampling-and-Sampling-Distributions
chapter_number: 13
chapter_title: "Sampling and Sampling Distributions"
page_image: 15
page_printed: 169
section: 13.34 SAMPLING DISTRIBUTION OF s² and S²
exercise: null
content_type: mixed
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-13-Sampling-and-Sampling-Distributions/0015.jpg
converted_at: "2026-10-01"
converted_by: "agent-S6b (glm-vision)"
notes: "Offset check: printed p.169 = image 15 + 154 (header folio, top-right). Page opens with the sampling-distribution table completing Example 13.8 (no caption printed above it), followed by the answers to parts (i)-(iv); Example 13.9 is complete. Section heading 13.34 begins near the page end and the relations list breaks off after (ii) (without replacement) with no punctuation — continues on the next page. The value 15 in the table's first column is boxed in the print; book prints 'and' lowercase inside the 13.34 heading."
---

# Page 15 — Sampling and Sampling Distributions (Chapter 13)

> 📄 Original scan: [0015.jpg](../../../Raw/Statistics/Chapter-13-Sampling-and-Sampling-Distributions/0015.jpg) · printed page 169

| $\bar{X}$ | f | $f(\bar{X})$ |
| :---: | :---: | :---: |
| 11 | 1 | 1/15 |
| 12 | 1 | 1/15 |
| 13 | 2 | 2/15 |
| 14 | 2 | 2/15 |
| 15 | 3 | 3/15 |
| 16 | 2 | 2/15 |
| 17 | 2 | 2/15 |
| 18 | 1 | 1/15 |
| 19 | 1 | 1/15 |
| **Total** | **15** | **1** |

Population mean

$$\mu = \frac{10 + 12 + 14 + 16 + 18 + 20}{6} = \frac{90}{6} = 15$$

(i) $P(\bar{X} > 16) = \frac{2}{15} + \frac{1}{15} + \frac{1}{15} = \frac{4}{15}$

(ii) $\bar{X}$ will differ from $\mu$ by less than 3 units if $\bar{X}$ is greater than 12 and is less than 18. Thus $P[|\bar{X} - \mu| < 3] = P(12 < \bar{X} < 18) = \frac{2}{15} + \frac{2}{15} + \frac{3}{15} + \frac{2}{15} + \frac{2}{15} = \frac{11}{15}$

(iii) The sampling error will be less than 2 if the random variable $\bar{X}$ is greater than 13 and less than 17. Thus $P(13 < \bar{X} < 17) = P(14 \leq \bar{X} \leq 16) = P[|S.E.| < 2] = \frac{2}{15} + \frac{3}{15} + \frac{2}{15} = \frac{7}{15}$

(iv) $P(\bar{X} = \mu) = P(\bar{X} = 15) = \frac{3}{15}$

**Example 13.9.**
Certain tubes produced by a company have a mean lifetime of 900 hours and a standard deviation of 100 hours. The company sends out 2000 lots of 100 tubes each. Compute the mean and standard deviation of the sampling distribution of the sample mean $\bar{X}$ if sampling is done:
(i) with replacement (ii) without replacement.

**Solution:** Here N = 2000, n = 100, $\mu = 900$ and $\sigma = 100$. Therefore

(i) When sampling is done with replacement, then
$$\mu_{\bar{x}} = \mu = 900 \text{ and } \sigma_{\bar{x}} = \frac{\sigma}{\sqrt{n}} = \frac{100}{\sqrt{100}} = 10$$

(ii) When sampling is done without replacement, then
$$\mu_{\bar{x}} = \mu = 900 \text{ and } \sigma_{\bar{x}} = \frac{\sigma}{\sqrt{n}} \sqrt{\frac{N - n}{N - 1}} = \frac{100}{\sqrt{100}} \sqrt{\frac{2000 - 100}{2000 - 1}} = 9.75$$

## 13.34. SAMPLING DISTRIBUTION OF $s^2$ and $S^2$

Suppose we draw all possible samples of size n from a finite population and calculate the unbiased sample variance $s^2 = \frac{\sum(X - \bar{X})^2}{n - 1}$ or biased sample variance $S^2 = \frac{\sum(X - \bar{X})^2}{n}$ for each sample. The mean of the sampling distribution of $s^2$ and $S^2$ are denoted by $E(s^2)$ and $E(S^2)$ respectively. In case of sampling with or without replacement, we have the following relations:

(i) $E(s^2) = \mu_{s^2} = \sigma^2$ (with replacement). Therefore $s^2$ is an unbiased estimator of $\sigma^2$:

(ii) $E(s^2) = \mu_{s^2} = \left( \frac{N}{N - 1} \right) \sigma^2$ (without replacement)
