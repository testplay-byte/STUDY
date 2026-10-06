---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-7
chapter_folder: Chapter-14-Statistical-Inference-Estimation
chapter_number: 14
chapter_title: "Statistical Inference Estimation"
page_image: 19
page_printed: 221
section: 14.19 PROPORTION; 14.20 CONFIDENCE INTERVAL ESTIMATE FOR POPULATION PROPORTION P (LARGE SAMPLE)
exercise: null
content_type: theory
has_figures: true
figures_count: 1
source_image: ../../../Raw/Statistics/Chapter-14-Statistical-Inference-Estimation/0019.jpg
converted_at: "2026-10-06"
converted_by: "agent-21c (glm-vision)"
notes: "Offset check: printed p.221 = image 19 + 202 (header folio, top-right; odd page). Page opens with the concluding lines of Example 14.18 (continued from p.220) then sections 14.19 and 14.20; ends after 'This statement can be expressed in the following form:' with a normal-curve figure (printed caption 'Figure-6') — the corresponding probability statement opens the next page (p.222). Z subscripts printed as stacked alpha-over-2 fractions (transcribed as Z_{alpha/2}). No anomalies."
---

# Page 19 — Statistical Inference Estimation (Chapter 14)

> 📄 Original scan: [0019.jpg](../../../Raw/Statistics/Chapter-14-Statistical-Inference-Estimation/0019.jpg) · printed page 221

Hence the $95\%$ confidence interval for $\mu_d = \mu_1 - \mu_2$ is

$$\begin{aligned}
& - 1.6 - 2.776 \frac{5.03}{\sqrt{5}} < \mu_d < - 1.6 + 2.776 \frac{5.03}{\sqrt{5}} \\
& \quad - 1.6 - 6.24 < \mu_d < - 1.6 + 6.24 \\
& \quad - 7.84 < \mu_d < 4.64
\end{aligned}$$

## 14.19 PROPORTION

Suppose a population is divided into two groups. The observations in the first group are called 'successes' and the observations of the second group are called 'failures'. For example the people may be divided into literates and illiterates. The proportion of successes in the population is defined as

$$\frac{\text{number of successes}}{\text{Total number of observations in the population}}$$

This proportion is denoted by p. The proportion of 'failures' is denoted by q and q = 1 - p or q + p = 1. Let us see how q + p = 1. Let N denote the total number of observations in the population. We have,

$$\begin{aligned}
N &= \text{number of failures} + \text{number of successes. Divide both sides by N} \\
\frac{N}{N} &= \frac{\text{number of failures} + \text{number of successes}}{N} = \frac{\text{number of failures}}{N} + \frac{\text{number of successes}}{N} \\
1 &= q + p
\end{aligned}$$

Suppose a random sample of size n is selected from the population. Let there be X successes in the sample. The ratio X/n is the sample proportion and is denoted by $\hat{p}$. Thus $\hat{p} = X/n$, where $\hat{p}$ is random variable and X is also random variable.

### POINT ESTIMATE

The sample proportion $\hat{p}$ calculated from a sample is the point estimate of the population proportion p. The statistic $\hat{p}$ is unbiased estimator of p. Hence $E(\hat{p}) = p$.

## 14.20 CONFIDENCE INTERVAL ESTIMATE FOR POPULATION PROPORTION P (LARGE SAMPLE)

Suppose a population proportion is p which is unknown. A random sample of size n (n > 30) is selected from the population and sample proportion $\hat{p}$ is calculated. The statistic $\hat{p}$ is the estimator of p. The distribution of $\hat{p}$ is normal with mean $\mu_{\hat{p}} = p$ and standard error $\sigma_{\hat{p}} = \sqrt{\frac{pq}{n}}$. Thus the random variable $\hat{p}$ can be transformed into random variable Z, where $Z = \frac{\hat{p}-p}{\sqrt{\frac{pq}{n}}}$. When n is large, the terms p and q in the denominator can be replaced by their sample estimates $\hat{p}$ and $\hat{q}$. Thus $Z = \frac{\hat{p}-p}{\sqrt{\frac{\hat{p}\hat{q}}{n}}}$.

We take two points on Z - scale. These are $-Z_{\frac{\alpha}{2}}$ and $+Z_{\frac{\alpha}{2}}$. The area of the normal curve between $-Z_{\frac{\alpha}{2}}$ and $+Z_{\frac{\alpha}{2}}$ is $(1-\alpha)$. The random variable Z will fall between $-Z_{\frac{\alpha}{2}}$ and $+Z_{\frac{\alpha}{2}}$ with a probability of $(1-\alpha)$. This statement can be expressed in the following form:

[Figure F1]

## Figures on this page

### Figure F1 — Normal distribution curve showing confidence interval (bottom right)
- **Type:** line-graph
- **Caption/Number:** Figure-6
- **Description:** A standard normal distribution bell curve centered at Z=0 (which corresponds to p). The horizontal axis represents the Z-scale with labels $-Z_{\frac{\alpha}{2}}$, $Z=0$, and $+Z_{\frac{\alpha}{2}}$. The central region under the curve between $-Z_{\frac{\alpha}{2}}$ and $+Z_{\frac{\alpha}{2}}$ is labeled $(1-\alpha)$. The two tail regions on either side are each labeled $\alpha/2$.
- **Mathematical meaning:** Illustrates that for large samples, the sampling distribution of the sample proportion $\hat{p}$ is approximately normal, and the probability that the standardized variable Z falls within the interval $[-Z_{\frac{\alpha}{2}}, +Z_{\frac{\alpha}{2}}]$ is $(1-\alpha)$.
