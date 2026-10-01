---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-6
chapter_folder: Chapter-13-Sampling-and-Sampling-Distributions
chapter_number: 13
chapter_title: "Sampling and Sampling Distributions"
page_image: 18
page_printed: 172
section: 13.35 SAMPLING DISTRIBUTION OF DIFFERENCE BETWEEN TWO MEANS
exercise: null
content_type: mixed
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-13-Sampling-and-Sampling-Distributions/0018.jpg
converted_at: "2026-10-01"
converted_by: "agent-S6c (glm-vision)"
notes: "Offset check: printed p.172 = image 18 + 154 (header folio, top-left). Page opens with Example 13.12 (worked example) then section 13.35 heading mid-page; content_type mixed. Page ends with the complete Z equation of property (iv)."
---

# Page 18 — Sampling and Sampling Distributions (Chapter 13)

> 📄 Original scan: [0018.jpg](../../../Raw/Statistics/Chapter-13-Sampling-and-Sampling-Distributions/0018.jpg) · printed page 172

**Example 13.12.**

A population of 10 numbers has a mean of 100 and a standard deviation of 10. If samples of size 5 are drawn from this population, find the mean of the sampling distribution of variances when sampling is done: (i) with replacement (ii) without replacement.

**Solution:** Here $N = 10, \mu = 100, \sigma = 10, \sigma^2 = 100$ and $n = 5$. Therefore

(i) When sampling is done with replacement, then

$$E(S^2)= \mu_{S^2}= \left(\frac{n - 1}{n}\right)\sigma^2 = \left(\frac{5 - 1}{5}\right) 100 = 80$$

(ii) When sampling is done without replacement, then

$$E(S^2)= \mu_{S^2}= \left(\frac{N}{N - 1}\right)\left(\frac{n - 1}{n}\right)\sigma^2 = \left(\frac{10}{10 - 1}\right)\left(\frac{5 - 1}{5}\right) 100 = 88.89$$

## 13.35. SAMPLING DISTRIBUTION OF DIFFERENCE BETWEEN TWO MEANS

Suppose there is a population with mean $\mu_1$ and variance $\sigma_1^2$. Another population has the mean $\mu_2$ and variance $\sigma_2^2$. All possible simple random samples of size $n_1$ are selected from the first population and the sample means $\bar{X}_1$ for each sample are calculated. Similarly, all possible simple random samples of size $n_2$ are selected from the second population and the sample means $\bar{X}_2$ are calculated. The difference $(\bar{X}_1 - \bar{X}_2)$ is another random variable and its distribution is called sampling distribution of $\bar{X}_1 - \bar{X}_2$. The sampling distribution of $(\bar{X}_1 - \bar{X}_2)$ has the following properties:

(i) $E(\bar{X}_1 - \bar{X}_2) = \mu_{\bar{X}_1 - \bar{X}_2} = \mu_1 - \mu_2$ (with or without replacement)

(ii) (a) $Var(\bar{X}_1 - \bar{X}_2) = \sigma^2_{\bar{X}_1 - \bar{X}_2} = \frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}$ (with replacement)
(When samples are drawn from infinite populations)

(b) $Var(\bar{X}_1 - \bar{X}_2) = \sigma^2_{\bar{X}_1 - \bar{X}_2} = \frac{\sigma_1^2}{n_1}\left(\frac{N_1 - n_1}{N_1 - 1}\right) + \frac{\sigma_2^2}{n_2}\left(\frac{N_2 - n_2}{N_2 - 1}\right)$ (without replacement)
(When samples are drawn from finite populations)

(iii) (a) $S.E(\bar{X}_1 - \bar{X}_2) = \sigma_{\bar{X}_1 - \bar{X}_2} = \sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}}$ (with replacement)

(b) $S.E(\bar{X}_1 - \bar{X}_2) = \sigma_{\bar{X}_1 - \bar{X}_2} = \sqrt{\frac{\sigma_1^2}{n_1}\left(\frac{N_1 - n_1}{N_1 - 1}\right) + \frac{\sigma_2^2}{n_2}\left(\frac{N_2 - n_2}{N_2 - 1}\right)}$ (without replacement)

(iv) The sampling distribution of $\bar{X}_1 - \bar{X}_2$ is a normal distribution when $n_1 > 30$ and $n_2 > 30$. The sample sizes $n_1$ and $n_2$ may be equal or unequal but both should be large in size. The difference $(\bar{X}_1 - \bar{X}_2)$ is a random variable with normal distribution and the standard normal variable Z can be written as.

$$Z = \frac{(\bar{X}_1 - \bar{X}_2) - E(\bar{X}_1 - \bar{X}_2)}{S.E(\bar{X}_1 - \bar{X}_2)} = \frac{(\bar{X}_1 - \bar{X}_2) - (\mu_1 - \mu_2)}{\sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}}}$$
