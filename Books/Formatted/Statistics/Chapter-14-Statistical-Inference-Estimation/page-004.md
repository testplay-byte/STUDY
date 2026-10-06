---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-7
chapter_folder: Chapter-14-Statistical-Inference-Estimation
chapter_number: 14
chapter_title: "Statistical Inference Estimation"
page_image: 4
page_printed: 206
section: 14.13 CONFIDENCE INTERVAL ESTIMATE OF POPULATION MEAN μ ( LARGE SAMPLE )
exercise: null
content_type: theory
has_figures: true
figures_count: 1
source_image: ../../../Raw/Statistics/Chapter-14-Statistical-Inference-Estimation/0004.jpg
converted_at: "2026-10-06"
converted_by: "agent-21a (glm-vision)"
notes: "Offset check: printed p.206 = image 4 + 202 (header folio, top-left; even page). Page carries continuation points (i)-(iii) of the 14.12 list from p.205, then the t-distribution block and section 14.13; page ends mid-derivation ('...is shown below:') — continues on next page. Figure-1 (t-curve) sits right side between the t-table paragraph and the 14.13 heading. Print anomalies preserved/noted: stray ink speck between 'not' and 'be' in the last line (not transcribed); a single printed bullet dot before 'The sample size n plays...' under (ii) — book inconsistency, kept; 'σ-Known' is printed inside a display box (rendered as blockquote)."
---

# Page 4 — Statistical Inference Estimation (Chapter 14)

> 📄 Original scan: [0004.jpg](../../../Raw/Statistics/Chapter-14-Statistical-Inference-Estimation/0004.jpg) · printed page 206

(i) **Parent Population**

What is the shape of the population which is sampled? Is it normal, approximately normal for practical purposes or known to be non-normal?

(ii) **Sample Size**

• The sample size n plays an important role in the statistical inference about $\mu$. When $n > 30$, it is called large sample size. According to the Central limit theorem, the sampling distribution of $\bar{X}$ tends to normality by increasing the sample size.

(iii) **$\sigma$ is Known or Unknown**

If $\sigma$ is known, the distribution of $\bar{X}$ can be assumed normal even if $n \leq 30$ provided the population is normal. If $\sigma$ is unknown and $n \leq 30$, the distribution of $\bar{X}$ is not assumed to be normal.

**t - DISTRIBUTION**

The sampling distribution of $\bar{X}$ forms t-distribution under the following conditions.

(i) The simple random sample of small size is drawn from a normal population with mean $\mu$.
This assumption is very important for any inference about $\bar{X}$.

(ii) The sample $X_1, X_2, X_3, \ldots, X_n$ is selected at random.

(iii) If there are two populations under consideration, both are normal with equal variances.
If $X_1, X_2, X_3, \ldots, X_n$ is a random sample of size n from a normal population with mean $\mu$ and variance $\sigma^2$ and $\bar{X}$ is the sample mean, then the random variable 't' is defined as $t = \frac{\bar{X} - \mu}{s / \sqrt{n}}$ where s is the sample standard deviation defined by $s = \sqrt{\frac{\sum(X - \bar{X})^2}{n - 1}}$. The random variable 't' forms the t-distribution with $(n - 1)$ *degrees of freedom* (d.f.) The t-distribution is symmetrical about its mean zero like the normal distribution. The shape of the t-distribution changes by increasing the sample size. When sample size is sufficiently large $(n > 30)$, the t-distribution tends to the normal distribution.

Tables are available from which we can read the t-values for given values of $\alpha$. If $\alpha = 0.05$ and degrees of freedom is 9, then from the t-table, we read under column 0.05 and against 9 degrees of freedom. We get 1.833. It is written as $t_{0.05}(9) = 1.833$. Similarly $t_{0.025}(8) = 2.306$.

[Figure F1]

## 14.13 CONFIDENCE INTERVAL ESTIMATE OF POPULATION MEAN $\mu$ ( LARGE SAMPLE )

> **σ-Known**

Let us consider a population ( normal or non-normal ) with mean $\mu$ which is unknown and the variance $\sigma^2$ which is assumed to be known. A simple random sample of size n is selected from the population and the sample mean $\bar{X}$ is calculated. When the sample size is large $(n > 30)$, the sampling distribution of $\bar{X}$ is a normal distribution with mean $\mu_{\bar{x}} = \mu$ and standard error $\sigma_{\bar{x}}$ where $\sigma_{\bar{x}} = \frac{\sigma}{\sqrt{n}}$. It is assumed here that the population is infinite or it is very large. The population may or may not be normal. The normal distribution of $\bar{X}$ is shown below:

## Figures on this page

### Figure F1 — t-distribution curve with critical values (right side, between the t-table paragraph and the 14.13 heading)
- **Type:** curve-plot
- **Caption/Number:** Figure-1
- **Description:** A symmetric bell-shaped t-distribution curve on a plain horizontal axis (no arrows at the ends). A vertical line drops from the peak of the curve to the centre of the axis; the centre is labelled $\mu$ above the axis with "t = 0" printed directly below it. Left tick mark on the axis labelled $-t_{\alpha/2\,(d.f.)}$ and right tick mark labelled $+t_{\alpha/2\,(d.f.)}$ (α/2 and d.f. as subscripts of t). Both tail areas under the curve, beyond the two ticks, are hatched with hatch lines and each carries the label $\alpha/2$; the large central area between the ticks is unhatched and labelled $(1 - \alpha)$ above the axis. The caption "Figure-1" is printed centred below the axis.
- **Mathematical meaning:** Shows that a central $(1-\alpha)$ probability mass lies between the critical values $\pm t_{\alpha/2}$ (for the given degrees of freedom), leaving tail areas of $\alpha/2$ each.
