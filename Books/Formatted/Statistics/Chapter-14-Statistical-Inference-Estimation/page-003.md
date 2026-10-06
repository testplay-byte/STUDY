---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-7
chapter_folder: Chapter-14-Statistical-Inference-Estimation
chapter_number: 14
chapter_title: "Statistical Inference Estimation"
page_image: 3
page_printed: 205
section: 14.9 INTERVAL ESTIMATION; 14.10 CONFIDENCE COEFFICIENT; 14.11 CONSTRUCTION OF CONFIDENCE INTERVAL; 14.12 SELECTION OF PROPER CONFIDENCE INTERVAL
exercise: null
content_type: theory
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-14-Statistical-Inference-Estimation/0003.jpg
converted_at: "2026-10-06"
converted_by: "agent-21a (glm-vision)"
notes: "Offset check: printed p.205 = image 3 + 202 (header folio, top-right; odd page). Page opens mid-sentence (continuation of 14.8 from p.204) and ends with a complete sentence leading into a numbered points list that continues on next page. No misprints detected."
---

# Page 3 — Statistical Inference Estimation (Chapter 14)

> 📄 Original scan: [0003.jpg](../../../Raw/Statistics/Chapter-14-Statistical-Inference-Estimation/0003.jpg) · printed page 205

hypothesis about the sampling distribution of the estimator of that parameter. If we infer that the mean of the sampling distribution of $\bar{X}$ is, say 150, it means that the mean of the population is also 150. This is due to the unbiasedness of $\bar{X}$. If $\bar{X}$ were a biased estimator, some very important tests of hypotheses about $\mu$ would not have been possible.

## 14.9 INTERVAL ESTIMATION

If a random interval is calculated so that it contains the unknown parameter with a known probability, then the interval is called *confidence interval estimate* or simply confidence interval for the parameter. The process of finding such intervals is called *interval estimation*. The interval estimation has gained a lot of importance in statistical inference. It is based on random sampling. Thus the confidence interval constructed is a random term because it is based on the sample data.

A drawback in point estimation is that it does not provide the estimate of error. No assurance is attached to the point estimate. Point estimate is a single value and it is wrong to think that a single value will be equal to the value of the unknown parameter. The interval estimate has some assurance of containing the population parameter. Confidence interval tells us with a known degree of confidence as to where the population parameter actually lies.

## 14.10 CONFIDENCE COEFFICIENT

The probability attached to the confidence interval is called *confidence coefficient* or level of confidence. It is denoted by $1 - \alpha$. If $\alpha$ is specified as $0.05$, then $1 - \alpha = 1 - 0.05 = 0.95$ or $95\%$. We can speak of confidence coefficient in terms of unity or in terms of percentage. The confidence coefficients which are commonly used are $90\%$, $95\%$, $98\%$ and $99\%$.

## 14.11 CONSTRUCTION OF CONFIDENCE INTERVAL

To make a confidence interval estimate of the parameter $\theta$, we adopt the following procedure.

(i) We take a random sample of size n with observations $X_1, X_2, X_3, \ldots, X_n$ from a population with unknown parameter $\theta$.

(ii) The point estimator of $\theta$ is decided. Let it be $\hat{\theta}$. The point estimate denoted by $\hat{\theta}_p$ is calculated from the sample.

(iii) The confidence coefficient is decided. Let it be $(1 - \alpha)$.

(iv) Let the interval be denoted by $(L, U)$ where L is the lower limit and U is the upper limit.

(v) A certain procedure of calculating L and U is adopted such that probability is $(1 - \alpha)$ that the interval $(L, U)$ contains the parameter $\theta$. In symbols, we may write $P[L < \theta < U] = 1 - \alpha$ where $\alpha$ lies between 0 and 1 but it is usually small. The extreme ends of the interval are L and U which are called the *lower and upper confidence limits* of the parameter $\theta$. L and U are random terms based on the sample data.

The lower limit L and the upper limit U are calculated from the point estimate $\hat{\theta}_p$. Thus, as a general rule $L = \hat{\theta}_p - k (\text{Standard error of } \hat{\theta})$ and $U = \hat{\theta}_p + k (\text{Standard error of } \hat{\theta})$. Where k depends upon the shape of the sampling distribution of $\hat{\theta}$ and the confidence coefficient $1 - \alpha$. The estimator $\hat{\theta}$ may be sample mean $\bar{X}$, sample proportion $\hat{p}$, the difference between means $(\bar{X}_1 - \bar{X}_2)$ or the difference between proportions $(\hat{p}_1 - \hat{p}_2)$.

## 14.12 SELECTION OF PROPER CONFIDENCE INTERVAL

For making the confidence interval estimate for some parameter, we have to use the appropriate formula. Some intervals are based on the normal distribution and some are based on the t-distribution. It is in fact the sampling distribution of the statistic which decides the formula. If the sampling distribution of the statistic is a normal distribution, then the standard normal variate Z is used in the interval and if the distribution is 't', then the random variable 't', is used in the formula. It is important to note that it is the sampling distribution which decides the proper formula. It is not the parent population which decides the interval, though the shape of the population distribution also plays its role in determining the proper interval. We have to examine the following points for making the confidence interval for the population mean $\mu$.
