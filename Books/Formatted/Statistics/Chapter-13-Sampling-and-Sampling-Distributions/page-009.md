---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-6
chapter_folder: Chapter-13-Sampling-and-Sampling-Distributions
chapter_number: 13
chapter_title: "Sampling and Sampling Distributions"
page_image: 9
page_printed: 163
section: 13.32 STANDARD ERROR; 13.33 SAMPLING DISTRIBUTION OF SAMPLE MEAN X̄
exercise: null
content_type: theory
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-13-Sampling-and-Sampling-Distributions/0009.jpg
converted_at: "2026-10-01"
converted_by: "agent-S6a (glm-vision)"
notes: "Offset check: printed p.163 = image 9 + 154 (header folio, top-right). Page opens mid-13.31 with the words called the sampling distribution. Book typos preserved verbatim: the number of sample (for samples) in 13.31 and and calculation the sample mean in 13.33. Example 13.1 begins near the page end; page ends after = 10. with the Solution continuing on the next page. | TYPO-CORRECTION PASS (2026-10-06, user mandate): unambiguous surface typo(s) corrected in the body per correction policy v4.4 — printed forms remain documented earlier in this note and itemised in docs/tracking/CORRECTIONS-LOG.md."
---

# Page 9 — Sampling and Sampling Distributions (Chapter 13)

> 📄 Original scan: [0009.jpg](../../../Raw/Statistics/Chapter-13-Sampling-and-Sampling-Distributions/0009.jpg) · printed page 163

called the *sampling distribution*. The number of all possible samples is usually very large and obviously the number of statistics (any function of the sample) will be equal to the number of samples if one and only one statistic is calculated from each sample. In fact, in practical situations, the *sampling distribution* has very large number of values. The shape of the *sampling distribution* depends upon the size of the sample and the nature of the population and the statistic which is calculated from all possible simple random samples. Some of the famous *sampling distributions* are:

(i) Binomial distribution. (ii) Normal distribution. (iii) t-distribution.
(iv) Chi-square distribution. (v) F-distribution.

These distributions are called the derived distributions because they are derived from all possible samples.

## 13.32. STANDARD ERROR

The standard deviation of some statistic is called the *standard error* of that statistic. If the statistic is $\bar{X}$, the standard deviation of all possible values of $\bar{X}$ is called *standard error* of $\bar{X}$ which may be written as $S.E.(\bar{X})$ or $\sigma_{\bar{X}}$. Similarly, if the sample statistic is proportion $\hat{p}$, the standard deviation of all possible values of $\hat{p}$ is called *standard error* of $\hat{p}$ and is denoted by $\sigma_{\hat{p}}$ or $S.E.(\hat{p})$.

## 13.33. SAMPLING DISTRIBUTION OF SAMPLE MEAN $\bar{X}$

Suppose we draw all possible samples of size n from the population and calculate the sample mean $\bar{X}$ for each sample. The probability distribution of all possible values of $\bar{X}$ calculated from all possible simple random samples is called the *sampling distribution* of $\bar{X}$. The sampling distribution of $\bar{X}$ has the following properties:

(i) $E(\bar{X}) = \mu_{\bar{X}} = \mu$ (with or without replacement)

(ii) (a) $\text{Var}(\bar{X}) = \sigma_{\bar{X}}^2 = \frac{\sigma^2}{n}$ (with replacement)
    (b) $\text{Var}(\bar{X}) = \sigma_{\bar{X}}^2 = \frac{\sigma^2}{n} \left( \frac{N-n}{N-1} \right)$ (without replacement)

(iii) (a) $S.E.(\bar{X}) = \sigma_{\bar{X}} = \frac{\sigma}{\sqrt{n}}$ (with replacement)
     (b) $S.E.(\bar{X}) = \sigma_{\bar{X}} = \frac{\sigma}{\sqrt{n}} \sqrt{\frac{N-n}{N-1}}$ (without replacement)

(iv) The sampling distribution of $\bar{X}$ is normal for large sample $n > 30$. The random variable $\bar{X}$ can be transformed into standard normal variable Z where $Z = \frac{\bar{X}-E(\bar{X})}{S.E.(\bar{X})} = \frac{\bar{X}-\mu}{\sigma / \sqrt{n}}$.

**Example 13.1.**
Draw all possible samples of size 2 without replacement from a population consisting of 3, 6, 9, 12, 15. Form the sampling distribution of sample means and verify the results:

(i) $E(\bar{X}) = \mu$ (ii) $\text{Var} (\bar{X}) = \frac{\sigma^2}{n} \left( \frac{N-n}{N-1} \right)$

**Solution:** We have population values 3, 6, 9, 12, 15, population size N = 5 and sample size n = 2. Thus, the number of possible samples which can be drawn without replacement is $\binom{N}{n} = \binom{5}{2} = 10$.
