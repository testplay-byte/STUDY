---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-8
chapter_folder: Chapter-15-Statistical-Inference-Testing-of-Hypotheses
chapter_number: 15
chapter_title: "Statistical Inference Testing of Hypotheses"
page_image: 6
page_printed: 244
section: 15.16 LEVEL OF SIGNIFICANCE; 15.17 FORMULATING H₀ , H₁ AND MAKING CRITICAL REGION
exercise: null
content_type: theory
has_figures: true
figures_count: 1
source_image: ../../../Raw/Statistics/Chapter-15-Statistical-Inference-Testing-of-Hypotheses/0006.jpg
converted_at: "2026-10-06"
converted_by: "agent-23a (glm-vision)"
notes: "Offset check: printed p.244 = image 6 + 238 (header folio, top-left; even page). Page opens mid-paragraph (continuation of 15.15 from p.243: 'If the distribution on the right side is shifted to the right...'). Two small decision/probability tables (cells zoom-verified). Printed heading keeps odd spacing 'FORMULATING H₀ , H₁ AND MAKING CRITICAL REGION' (space before comma) — preserved. Figure-5 (two-tailed normal curve) sits bottom-right beside the closing lines; page ends '...sufficiently smaller than 3 cm.'"
---

# Page 6 — Statistical Inference Testing of Hypotheses (Chapter 15)

> 📄 Original scan: [0006.jpg](../../../Raw/Statistics/Chapter-15-Statistical-Inference-Testing-of-Hypotheses/0006.jpg) · printed page 244

If the distribution on the right side is shifted to the right, $\beta$ will decrease and if this distribution is shifted to the left, $\beta$ will increase. Thus the value of $\beta$ depends upon the true value of population mean $\mu$. In a certain given situation when $n$ is fixed the value of $\beta$ increases when $\alpha$ is decreased. Thus if we want to decrease $\alpha$, we shall do it at the risk of increasing $\beta$. $\alpha$ -error and $\beta$-error are also called $\alpha$-risk and $\beta$-risk respectively. Which risk do we want to keep at minimum level? This depends upon the costs of committing $\alpha$-error and $\beta$-error. Suppose we are hesitant of rejecting $H_0$ when it is true, then we shall take $\alpha$ at a small level. In most of the tests, $\alpha$ is fixed at a small level like 0.01 (1 %) or 0.05 (5 %).

The following table shows four possible decisions in a certain test of hypothesis.

| | H₀ is True | H₀ is False |
| :--- | :--- | :--- |
| **H₀ is Accepted** | Correct decision | Type II error |
| **H₀ is Rejected** | Type I error | Correct decision |

When we are testing a hypothesis, our decision will fall in any one of the above four boxes. The four possible decisions in terms of probabilities are shown below in a tabular form.

| | H₀ True | H₀ False |
| :--- | :--- | :--- |
| **H₀ is Accepted** | ( 1 – α ) | β |
| **H₀ is Rejected** | α | ( 1 – β ) |

It may be noted that $\alpha$ is an area in the right tail of the distribution under $H_0$ and $\beta$ is the area in the left tail of the distribution under $H_1$. Thus $\alpha + \beta \neq 1$ in general. In some special case and that too very rarely, $\alpha + \beta$ may be equal to 1. Level of $\alpha$ is usually small. Thus probability is small that our decision will fall in the box marked $\alpha$. But when our decision has fallen in the box marked $\alpha$, it is a powerful decision against $H_0$.

## 15.16 LEVEL OF SIGNIFICANCE

The $\alpha$-risk is the probability of rejecting a true null hypothesis. It is also called the significance level or level of significance of the test. It is denoted by $\alpha$ and its level is usually 1 % or 5 %. The value of $\alpha$ is usually decided before the selection of the sample.

## 15.17 FORMULATING H₀ , H₁ AND MAKING CRITICAL REGION

Now, when we have discussed different terms used in the testing of hypothesis, we are in a position to discuss a point which is quite confusing sometimes. The question is how to formulate the null hypothesis $H_0$ and the alternative hypothesis $H_1$. We elaborate this point here and we shall repeat here certain points already discussed in this chapter about framing of $H_0$ and $H_1$. Let us consider some cases.

(i) A machine has been producing components with mean length of 3 cm. which is the required standard. A new machinery has been installed and it is required to test the hypothesis that the mean length of the components is the same. It is obvious that in this case the $H_0$ and $H_1$ will be:

$$H_0 : \mu = 3 \text{ cm.} \quad\quad H_1 : \mu \neq 3 \text{ cm.}$$

$H_1$ contains the inequality "$\neq$" which means that the rejection region is taken in both ends of the sampling distribution.

The test-statistic used is $Z = \frac{\bar{X} - \mu}{\sigma / \sqrt{n}}$

The null hypothesis $H_0$ is rejected if $Z < -Z_{\alpha/2}$ or $Z > Z_{\alpha/2}$ . It is called *two-tailed test* with rejection region on both sides. $H_0$ is rejected when sample mean $\bar{X}$ is sufficiently larger than 3 cm. or sufficiently smaller than 3 cm.

[Figure F1]

## Figures on this page

### Figure F1 — Two-tailed rejection region for μ = 3 cm (bottom right)
- **Type:** curve-plot
- **Caption/Number:** Figure-5
- **Description:** Symmetric normal curve. Centre peak marked $Z = 0$ with $\mu = 3$ on the axis below it. Both tails shaded, each labelled $\alpha/2$, bounded on the axis at $-Z_{\alpha/2}$ (left) and $+Z_{\alpha/2}$ (right).
- **Mathematical meaning:** Critical region of the two-tailed Z-test of $H_0: \mu = 3$ cm — reject when $Z < -Z_{\alpha/2}$ or $Z > Z_{\alpha/2}$.
