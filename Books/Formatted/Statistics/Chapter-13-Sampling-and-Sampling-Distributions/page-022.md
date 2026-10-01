---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-6
chapter_folder: Chapter-13-Sampling-and-Sampling-Distributions
chapter_number: 13
chapter_title: "Sampling and Sampling Distributions"
page_image: 22
page_printed: 176
section: "13.36 PROPORTION; 13.37 SAMPLING DISTRIBUTION OF PROPORTION"
exercise: null
content_type: mixed
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-13-Sampling-and-Sampling-Distributions/0022.jpg
converted_at: "2026-10-01"
converted_by: "agent-S6d (glm-vision)"
notes: "Offset check: printed p.176 = image 22 + 154 (header folio, top-left; running header is the book-title variant 'Basic Statistics Part-II ( Federal Board )'). Example 13.15 starts and completes on this page; sections 13.36 and 13.37 begin here, 13.37 properties list ends the page. Book-style spaced parentheses preserved in the (i)-(iii) property lines, e.g. '( with replacement )'. Statement of Example 13.15 ends with a printed colon."
---

# Page 22 — Sampling and Sampling Distributions (Chapter 13)

> 📄 Original scan: [0022.jpg](../../../Raw/Statistics/Chapter-13-Sampling-and-Sampling-Distributions/0022.jpg) · printed page 176

**Example 13.15.**

Given $N_1 = 800$, $N_2 = 600$, $n_1 = 200$, $n_2 = 124$, $\mu_1 = 1800$, $\mu_2 = 1600$, $\sigma_1 = 200$ and $\sigma_2 = 124$.

Compute the mean and standard error of the sampling distribution of the difference $\bar{X}_1 - \bar{X}_2$ if sampling is done (i) with replacement (ii) without replacement:

**Solution:** The necessary calculations are given below:

(i) When sampling is done with replacement, then

$$\mu_{\bar{x}_1 - \bar{x}_2} = \mu_1 - \mu_2 = 1800 - 1600 = 200$$

$$\sigma_{\bar{x}_1 - \bar{x}_2} = \sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}} = \sqrt{\frac{(200)^2}{200} + \frac{(124)^2}{124}} = 18$$

(ii) When sampling is done without replacement, then

$$\mu_{\bar{x}_1 - \bar{x}_2} = \mu_1 - \mu_2 = 1800 - 1600 = 200$$

$$\sigma_{\bar{x}_1 - \bar{x}_2} = \sqrt{\frac{\sigma_1^2}{n_1}\left(\frac{N_1-n_1}{N_1-1}\right) + \frac{\sigma_2^2}{n_2}\left(\frac{N_2-n_2}{N_2-1}\right)} = \sqrt{\frac{(200)^2}{200}\left(\frac{800-200}{800-1}\right) + \frac{(124)^2}{124}\left(\frac{600-124}{600-1}\right)} = 15.77$$

## 13.36. PROPORTION

What is a proportion? Suppose there are 1000 students in a school out of which 600 are male and 400 are female. The ratio of 600 to the total is called the proportion of males and is denoted by $p$. Thus proportion of males $= p = \frac{600}{1000} = 0.6$ and proportion of females $= q = \frac{400}{1000} = 0.4$.

Let us denote male by success and female by a failure. If the male students are assigned the number 1 and females are assigned the number 0, then the population contains 600 ones and 400 zeros. This can be written as below in the form of a distribution called the Bernoulli distribution. Let us calculate the mean of this distribution.

| Random Variable (X) | f | f(X) | Xf(X) |
| :---: | :---: | :---: | :---: |
| 0 | 400 | 400/1000 = 0.4 | 0 |
| 1 | 600 | 600/1000 = 0.6 | 0.6 |
| **Total** | **1000** | **1** | **0.6** |

$E(X) = \text{Mean} = \sum X f(X) = 0.6$

Thus the *proportion* $p$ of the population called the binomial population is equal to the mean of the population containing 0's and 1's

## 13.37. SAMPLING DISTRIBUTION OF PROPORTION

Suppose there is a finite population in which the proportion of successes is $p$ and the proportion of failures is $q$. Suppose we draw all possible samples of size $n$ from the population and calculate the sample proportion $\hat{p}$ for each sample. The sampling distribution of $\hat{p}$ has the following properties.

(i) $E(\hat{p}) = \mu_{\hat{p}} = p$ ( with or without replacement )

(ii) (a) $Var ( \hat{p} ) = \sigma_{\hat{p}}^2 = \frac{pq}{n}$ ( with replacement )

(b) $Var ( \hat{p} ) = \sigma_{\hat{p}}^2 = \frac{pq}{n} \left( \frac{N-n}{N-1} \right)$ ( without replacement )

(iii) (a) $S.E(\hat{p}) = \sigma_{\hat{p}} = \sqrt{\frac{pq}{n}}$ ( with replacement )

(b) $S.E(\hat{p}) = \sigma_{\hat{p}} = \sqrt{\frac{pq}{n} \left( \frac{N-n}{N-1} \right)}$ ( without replacement )
