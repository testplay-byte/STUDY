---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-8
chapter_folder: Chapter-15-Statistical-Inference-Testing-of-Hypotheses
chapter_number: 15
chapter_title: "Statistical Inference Testing of Hypotheses"
page_image: 24
page_printed: 262
section: null
exercise: null
content_type: theory
has_figures: true
figures_count: 2
source_image: ../../../Raw/Statistics/Chapter-15-Statistical-Inference-Testing-of-Hypotheses/0024.jpg
converted_at: "2026-10-06"
converted_by: "agent-24a (glm-vision)"
notes: "Offset check: printed p.262 = image 24 + 238 (header folio, top-left; even page). Page continues section 15.28 (population proportion testing procedure, items (i)-(iv)(b)) — NO numbered section heading is printed anywhere on this page, so section: null. Two side diagrams Figure-14 (two-tailed) and Figure-15 (right-tailed) sit to the right of the wrapped text of items (a) and (b); both captions printed. Book wording preserved: 'lies in rejection region' (no 'the'). Page ends mid-sentence '...the values less than Z-alpha form the' which continues on next page. Printed subscripts verified as zeros (p0, q0, H0) at 2x zoom. No cut-offs."
---

# Page 24 — Statistical Inference Testing of Hypotheses (Chapter 15)

> 📄 Original scan: [0024.jpg](../../../Raw/Statistics/Chapter-15-Statistical-Inference-Testing-of-Hypotheses/0024.jpg) · printed page 262

The random variable Z is used as test statistic and the value of Z makes a base for the acceptance or rejection of the null hypothesis about the population proportion. The procedure for testing p runs as below:

(i) We frame a hypothesis about the population proportion p. Let us specify a value $p_0$ for the population parameter p. The null hypothesis $H_0$ and the alternative hypothesis $H_1$ can take any one of the following three forms:

(a) $H_0 : p = p_0$ and $H_1 : p \neq p_0$  (b) $H_0 : p \leq p_0$ and $H_1 : p > p_0$

(c) $H_0 : p \geq p_0$ and $H_1 : p < p_0$

(ii) Level of significance is decided. It is denoted by $\alpha$.

(iii) Test - statistic: Used in this case is $$Z = \frac{\hat{p} - p_0}{\sqrt{\frac{p_0 q_0}{n}}}$$ where $q_0 = 1 - p_0$

The sample proportion $\hat{p}$ can also be written as $\hat{p} = \frac{X}{n}$, where 'X' is the number of successes in the sample of size n. Putting $\hat{p} = \frac{X}{n}$ in the above formula for Z, we get

$$Z = \frac{\frac{X}{n} - p_0}{\sqrt{\frac{p_0 q_0}{n}}} = \frac{\frac{X - n p_0}{n}}{\sqrt{\frac{p_0 q_0}{n}}} = \frac{X - n p_0}{n\sqrt{\frac{p_0 q_0}{n}}} = \frac{X - n p_0}{\sqrt{n p_0 q_0}}$$

Thus $Z = \frac{X - n p_0}{\sqrt{n p_0 q_0}}$ can also be used as *test-statistic* for testing population proportion p.

(iv) Critical region: The critical region depends upon the alternative hypothesis $H_1$. The three forms of $H_1$ are:

(a) $H_1$ is $p \neq p_0$. In this case the rejection region is taken in both ends of the sampling distribution. The rejection region on each side is equal to $\alpha/2$. The two critical values – $Z_{\alpha/2}$ and + $Z_{\alpha/2}$ separate the critical region from the acceptance region as shown in Figure-14. $H_0$ is rejected when the calculated value of Z lies in rejection region. $H_0$ is rejected when $Z < -Z_{\alpha/2}$ or

[Figure F1]

+ $Z > Z_{\alpha/2}$. The values between – $Z_{\alpha/2}$ and $Z_{\alpha/2}$ form the acceptance region. The test is called two-sided.

(b) $H_1 : p > p_0$. In this case the rejection region is taken only in the right side of the sampling distribution. The test is called one-sided to the right. The critical value between the acceptance region and the rejection region is $Z_\alpha$ as shown in Figure-15. The values above $Z_\alpha$ form the critical region and the values less than $Z_\alpha$ form the

[Figure F2]

## Figures on this page

### Figure F1 — Normal curve, two-tailed rejection regions (middle right, beside item (a))
- **Type:** curve-plot
- **Caption/Number:** Figure-14
- **Description:** Bell-shaped normal curve with a central vertical line labeled $p = p_0$ ($Z = 0$). Bottom axis tick labels, left to right: $-Z_{\alpha/2}$, $Z = 0$, $+Z_{\alpha/2}$. "Rejection Region" labels with downward-pointing arrows sit over both tails, each tail area marked $\alpha/2$; the central area is labeled "Acceptance Region" with $(1 - \alpha)$ marked under the curve. Printed caption "Figure-14" below.
- **Mathematical meaning:** Two-tailed test of a population proportion: reject $H_0 : p = p_0$ when $Z < -Z_{\alpha/2}$ or $Z > +Z_{\alpha/2}$; the middle $(1-\alpha)$ probability is the acceptance region.

### Figure F2 — Normal curve, right-tailed rejection region (bottom right, beside item (b))
- **Type:** curve-plot
- **Caption/Number:** Figure-15
- **Description:** Bell-shaped normal curve with a central vertical line labeled $p = p_0$ ($Z = 0$). Bottom axis tick labels: $Z = 0$ and $Z_\alpha$. "Acceptance Region" labels the large left part with $(1 - \alpha)$ marked under the curve; "Rejection Region" with a downward-pointing arrow marks the far right tail, area $\alpha$. Printed caption "Figure-15" below.
- **Mathematical meaning:** One-sided (right) test of a population proportion: reject $H_0$ when $Z > Z_\alpha$; the area left of $Z_\alpha$ is the acceptance region.
