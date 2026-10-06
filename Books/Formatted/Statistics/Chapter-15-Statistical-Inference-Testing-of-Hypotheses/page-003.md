---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-8
chapter_folder: Chapter-15-Statistical-Inference-Testing-of-Hypotheses
chapter_number: 15
chapter_title: "Statistical Inference Testing of Hypotheses"
page_image: 3
page_printed: 241
section: 15.8 TEST STATISTIC; 15.9 ACCEPTANCE AND REJECTION REGIONS; 15.10 TWO-TAILED TEST; 15.11 ONE - TAILED TEST
exercise: null
content_type: theory
has_figures: true
figures_count: 3
source_image: ../../../Raw/Statistics/Chapter-15-Statistical-Inference-Testing-of-Hypotheses/0003.jpg
converted_at: "2026-10-06"
converted_by: "agent-23a (glm-vision)"
notes: "Offset check: printed p.241 = image 3 + 238 (header folio, top-right; odd page). Three small normal-curve figures run in a column down the right side beside the text (Figure-1 beside 15.10, Figure-2 and Figure-3 beside 15.11). Book anomaly preserved: after 'the critical region is Z > Z_alpha/2 or Z < -Z_alpha/2' the print continues 'it can also be written as -Z_alpha/2 < Z < Z_alpha/2' (that interval is actually the acceptance region — printed as-is, zoom-verified). Spacing as printed: 'ONE - TAILED TEST', '(Chi-square )', 'Z( calculated )', figure titles 'Two - Sided Test', 'One - Sided to the Right', 'One - Sided to the Left'."
---

# Page 3 — Statistical Inference Testing of Hypotheses (Chapter 15)

> 📄 Original scan: [0003.jpg](../../../Raw/Statistics/Chapter-15-Statistical-Inference-Testing-of-Hypotheses/0003.jpg) · printed page 241

## 15.8 TEST STATISTIC

A statistic is calculated from the sample. To begin with we assume that the hypothesis about the population parameter is true. We compare the value of the statistic with the hypothetical value of the parameter. If the difference between them is small, the hypothesis is accepted and if the difference between them is large, the hypothesis is rejected. A statistic on which the decision can be based whether to accept or reject a hypothesis is called *test statistic*. Some of the test statistics to be discussed in this book are 'Z', 't' and $\chi^2$ (Chi-square )

## 15.9 ACCEPTANCE AND REJECTION REGIONS

The values of the test statistic which we think do not agree with the given hypothesis are called the critical region or rejection region. The values of the test statistic which support the hypothesis form the acceptance region. The rejection region is equal to $\alpha$ and the acceptance region is denoted by $( 1 - \alpha )$. These two regions are separate from each other and both regions combined together make the complete sampling distribution of the statistic. These regions are separated by a value (or values), which is called critical value ( or values ).

## 15.10 TWO-TAILED TEST

When the rejection region is taken on both ends of the sampling distribution, the test is called *two-sided test* or *two-tailed test*. When we are using a two-sided test, half of the rejection region equal to $\alpha$/2 is taken on the right side and the other half equal to $\alpha$/2 is taken on the left side of the sampling distribution. Suppose the sampling distribution of the statistic is a normal distribution and we have to test the hypothesis $H_0$: $\theta = \theta_0$ against the alternative hypothesis $H_1$: $\theta \neq \theta_0$ which is two-sided. $H_0$ is rejected when the calculated value of Z is greater than $Z_{\alpha/2}$ or it is less than $-Z_{\alpha/2}$. Thus the critical region is $Z > Z_{\alpha/2}$ or $Z < -Z_{\alpha/2}$, it can also be written as $-Z_{\alpha/2} < Z < Z_{\alpha/2}$

[Figure F1]

When $H_0$ is rejected, then $H_1$ is accepted. *Two-sided test* is shown in Figure-1.

## 15.11 ONE - TAILED TEST

When the alternative hypothesis $H_1$ is one-sided like $\theta > \theta_0$ or $\theta < \theta_0$, then the rejection region is taken only on one side of the sampling distribution. It is called *one-tailed test* or *one-sided test*. When $H_1$ is *one-sided* to the right like $\theta > \theta_0$, the entire rejection region equal to $\alpha$ is taken in the right end of the sampling distribution.

The test is called *one-sided* to the right. The hypothesis $H_0$ is rejected if the calculated value of a statistic, say Z falls in the rejection region. The critical value is $Z_\alpha$ which has the area equal to $\alpha$ to its right. The rejection region and acceptance region are shown in Figure-2. The null hypothesis $H_0$ is rejected when Z( calculated ) > $Z_\alpha$.

[Figure F2]

If the alternative hypothesis is one-sided to the left like $\theta < \theta_0$, the entire rejection region equal to $\alpha$ is taken on the left tail of the sampling distribution. The test is called one-sided or one-tailed to the left. The critical value is $- Z_\alpha$ which cuts off the area equal to $\alpha$ to its left. The critical region is $Z < - Z_\alpha$ and is shown in Figure-3.

[Figure F3]

## Figures on this page

### Figure F1 — Two - Sided Test (right column, beside 15.10)
- **Type:** curve-plot
- **Caption/Number:** Figure-1
- **Description:** Normal curve titled "Two - Sided Test". Center labeled "Acceptance Region" with area $(1-\alpha)$ and axis value $Z = 0$. Both tails shaded and labeled "Rejection Region" with area $\alpha/2$ each; left tail axis value $-Z_{\alpha/2}$ with an arrow pointing down to the text "Lower Critical Value", right tail axis value $+Z_{\alpha/2}$ with an arrow pointing down to the text "Upper Critical Value".
- **Mathematical meaning:** Two-tailed test: $H_0$ is rejected when the test statistic falls in either tail beyond $\pm Z_{\alpha/2}$.

### Figure F2 — One - Sided to the Right (right column, beside 15.11 first paragraph)
- **Type:** curve-plot
- **Caption/Number:** Figure-2
- **Description:** Normal curve titled "One - Sided to the Right". Center/left labeled "Acceptance Region" with area $(1-\alpha)$ and axis value $Z = 0$. Right tail shaded, labeled "Rejection Region" with area $\alpha$ and axis value $Z_\alpha$.
- **Mathematical meaning:** Right-tailed test: $H_0$ is rejected when the calculated Z exceeds the critical value $Z_\alpha$.

### Figure F3 — One - Sided to the Left (bottom right)
- **Type:** curve-plot
- **Caption/Number:** Figure-3
- **Description:** Normal curve titled "One - Sided to the Left". Center/right labeled "Acceptance Region" with area $(1-\alpha)$ and axis value $Z = 0$. Left tail shaded, labeled "Rejection Region" with area $\alpha$ and axis value $- Z_\alpha$.
- **Mathematical meaning:** Left-tailed test: $H_0$ is rejected when the calculated Z falls below the critical value $- Z_\alpha$.
