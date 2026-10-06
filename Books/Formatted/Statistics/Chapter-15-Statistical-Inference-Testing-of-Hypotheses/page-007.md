---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-8
chapter_folder: Chapter-15-Statistical-Inference-Testing-of-Hypotheses
chapter_number: 15
chapter_title: "Statistical Inference Testing of Hypotheses"
page_image: 7
page_printed: 245
section: 15.18 GENERAL PROCEDURE FOR TESTING OF HYPOTHESIS
exercise: null
content_type: mixed
has_figures: true
figures_count: 2
source_image: ../../../Raw/Statistics/Chapter-15-Statistical-Inference-Testing-of-Hypotheses/0007.jpg
converted_at: "2026-10-06"
converted_by: "agent-23a (glm-vision)"
notes: "Offset check: printed p.245 = image 7 + 238 (header folio, top-right; odd page). Page opens with case (ii) — continuation of the 15.17 cases from p.244; holds worked Example 15.1 (errors) then section 15.18. Two right-column diagrams (Figure-6 right-tailed, Figure-7 left-tailed) — captions zoom-verified. Items (a), (b), (c) under 15.18 are printed on ONE line ending 'θ ≥ θ₀' (zoom-verified; nothing cut off at page bottom)."
---

# Page 7 — Statistical Inference Testing of Hypotheses (Chapter 15)

> 📄 Original scan: [0007.jpg](../../../Raw/Statistics/Chapter-15-Statistical-Inference-Testing-of-Hypotheses/0007.jpg) · printed page 245

(ii) Suppose that we want to test whether the mean $\mu$ of a normal distribution exceeds a specified value $\mu_0$. We set up the null and alternative hypotheses as follows:

$$H_0 : \mu = \mu_0 \quad H_1 : \mu > \mu_0$$

The null hypothesis $H_0$ and the alternative hypothesis $H_1$ in this case can also be written as

$$H_0 : \mu \leq \mu_0 \quad H_1 : \mu > \mu_0$$

$H_1$ is complement of $H_0$ and the area of the distribution under $H_0$ and $H_1$ makes the complete distribution. In this case, the region of rejection is taken in the right tail of the distribution.

The test-statistic is

$$Z = \frac{\bar{X} - \mu}{\sigma / \sqrt{n}}.$$ The null hypothesis $H_0$ is rejected when the calculated value of Z is greater than the critical value $Z_\alpha$.

[Figure F1]

(iii) At least 60 % of the people are in favour of English as medium of instructions. The sampling distribution of proportion $\hat{p}$ is divided into two parts (a) at least 60 % (b) less than 60 %.

We have a serious doubt about the statement and we hope to disprove it. The proportion of the people $p \geq 0.6$ is to be tested. The idea or suggestion of at least 60 % ($p \geq 0.6$) will be rejected if the sample gives the result well below 60 %. The rejection region is decided by $H_1$ which is one-sided to the left. Thus we frame $H_0$ and $H_1$ as: $H_0 : p \geq 0.6 \quad H_1 : p < 0.6$

In this case the entire critical region lies in the left tail. If $H_1$: $p < 0.6$ is true then the sample proportion $\hat{p}$ should lie in the rejection region.

The test statistic used here is $Z = \dfrac{\hat{p} - p}{\sqrt{\frac{pq}{n}}}$. The hypothesis $H_0$ is rejected if $Z < -Z_\alpha$.

[Figure F2]

**Example 15.1.**

Indicate the type of errors committed in the following cases:

(i) $\quad H_0: \mu = 500, H_1: \mu \neq 500$. $H_0$ is rejected while $H_0$ is true.
(ii) $\quad H_0: \mu = 500, H_1: \mu < 500$. $H_0$ is accepted while true value of $\mu = 600$.

**Solution:**

(i) The hypothesis $\mu = 500$ is true and it has been rejected. Type I error has been committed.
(ii) $H_0$ is false and has been accepted. Type II error has been committed.

## 15.18 GENERAL PROCEDURE FOR TESTING OF HYPOTHESIS

Following are the main steps involved in the testing of a hypothesis about the population parameter.

**(i) Formulating Null hypothesis $H_0$:**

First of all we have to identify the problem and then we frame the hypothesis which we think shall be rejected. Suppose the population parameter is $\theta$ about which we have to frame the hypothesis. We specify a value $\theta_0$ for the unknown parameter. The null hypothesis $H_0$ can be written in three ways as shown below:

(a) $\quad H_0 : \theta = \theta_0$ (b) $\quad H_0 : \theta \leq \theta_0$ (c) $\quad H_0 : \theta \geq \theta_0$

## Figures on this page

### Figure F1 — Right-tailed rejection region (middle right)
- **Type:** curve-plot
- **Caption/Number:** Figure-6
- **Description:** Normal curve centred at $Z = 0$ (mean $\mu = \mu_0$). Area left of the critical value $Z_\alpha$ labelled $(1-\alpha)$; right tail shaded, labelled $\alpha$ with the text "Rejection Region" and an arrow pointing down to it.
- **Mathematical meaning:** Right-tailed test of $H_0: \mu = \mu_0$ vs $H_1: \mu > \mu_0$ — reject $H_0$ when the calculated Z exceeds $Z_\alpha$.

### Figure F2 — Left-tailed rejection region (bottom right)
- **Type:** curve-plot
- **Caption/Number:** Figure-7
- **Description:** Normal curve with $p = 0.6$ marked on the axis (centre at $Z = 0$). Area to the right of the critical value $-Z_\alpha$ labelled $(1-\alpha)$; far-left tail shaded, labelled $\alpha$ with the text "Rejection Region" and an arrow pointing down to it.
- **Mathematical meaning:** Left-tailed test of $H_0: p \geq 0.6$ vs $H_1: p < 0.6$ — reject $H_0$ when Z falls below $-Z_\alpha$.
