---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-8
chapter_folder: Chapter-15-Statistical-Inference-Testing-of-Hypotheses
chapter_number: 15
chapter_title: "Statistical Inference Testing of Hypotheses"
page_image: 25
page_printed: 263
section: null
exercise: null
content_type: mixed
has_figures: true
figures_count: 1
source_image: ../../../Raw/Statistics/Chapter-15-Statistical-Inference-Testing-of-Hypotheses/0025.jpg
converted_at: "2026-10-06"
converted_by: "agent-24a (glm-vision)"
notes: "Offset check: printed p.263 = image 25 + 238 (header folio, top-right; odd page). Page continues section 15.28 procedure (tail of (b), item (c) with Figure-16, items (v)-(vi)), then complete Example 15.22 (proportion Z-test, Z = 1.125, accepted), then Example 15.23 statement whose solution reaches (ii) at page end and continues on next page. NO numbered section heading printed on this page — 'Example 15.22/15.23' are example banners, not sections, so section: null. Book wording preserved: 'where as' (two words), '(v) Computation :' (space before colon), 'lies in rejection region'. Figure-16 (left-tailed) verified at 2.5x zoom: axis -Z_alpha / Z = 0 with p = p0 above axis, Rejection Region + alpha left tail, Acceptance Region (1-alpha). No cut-offs."
---

# Page 25 — Statistical Inference Testing of Hypotheses (Chapter 15)

> 📄 Original scan: [0025.jpg](../../../Raw/Statistics/Chapter-15-Statistical-Inference-Testing-of-Hypotheses/0025.jpg) · printed page 263

acceptance region where as $Z_{\alpha}$ is the critical value and should not be used for acceptance or rejection of $H_0$.

(c) When $H_1$ is $p < p_0$, the entire rejection region falls in the left side of the sampling distribution. The test is called one-sided to the left. The critical value $-Z_{\alpha}$ is a point between the critical region and the acceptance region as shown in Figure-16. The value less than $-Z_{\alpha}$ form the critical region. $H_0$ is rejected when the Z value

[Figure F1]

calculated from the sample data falls in the rejection region otherwise the null hypothesis $H_0$ is accepted with the usual meaning of the term 'acceptance'. The rejection region is $Z < -Z_{\alpha}$.

(v) Computation : The value of Z is calculated by using the formula.

(vi) Conclusion: The null hypothesis is rejected if the calculated value of Z lies in rejection region. If Z lies in acceptance region, the null hypothesis is accepted.

**Example 15.22.**

In a poll of 1000 voters selected at random from all the voters in a certain district, it is found that 518 voters are in favour of a particular candidate. Test the null hypothesis that the proportion of all the voters in the district who favour the candidate is equal to or less than 50 percent against the alternative that it is greater than 50 percent at $\alpha = 0.05$.

**Solution:**

(i) Null hypothesis: $H_0 : p \leq 0.50$ and Alternative hypothesis: $H_1 : p > 0.50$

(ii) Level of significance: $\alpha = 0.05$

(iii) Test - statistic: $$Z = \frac{\hat{p} - p_0}{\sqrt{\frac{p_0 q_0}{n}}}$$

(iv) Critical region: $Z > 1.645$

(From the area table of normal distribution, we have $Z_{\alpha} = Z_{0.05} = 1.645$ )

(v) Computations: Here, $n = 1000$, $X = 518$, $\hat{p} = \frac{X}{n} = \frac{518}{1000} = 0.518,$

$p_0 = 0.50$, $q_0 = 1 - p_0 = 0.50$, and hence

$$Z = \frac{(0.518 - 0.50)}{\sqrt{\frac{(0.50)(0.50)}{1000}}} = \frac{0.018}{0.016} = 1.125$$

(vi) Conclusion: Since the calculated value of $Z = 1.125$ falls in the acceptance region, so we accept our null hypothesis $H_0 : p \leq 0.50$ at 5 % level of significance.

**Example 15.23.**

At a certain college it is estimated that at most 25 % of the students ride bicycles to class. Does this seem to be a valid estimate, if in a random sample of 90 college students, 28 are found to ride bicycles to class? Use a 5 % level of significance.

**Solution:**

(i) Null hypothesis: $H_0 : p \leq 0.25$ and Alternative hypothesis: $H_1 : p > 0.25$

(ii) Level of significance: $\alpha = 0.05$

## Figures on this page

### Figure F1 — Normal curve, left-tailed rejection region (top right, beside item (c))
- **Type:** curve-plot
- **Caption/Number:** Figure-16
- **Description:** Bell-shaped normal curve. Horizontal axis labels, left to right: $-Z_{\alpha}$ (under the left vertical line) and $Z = 0$ (under the central vertical line), with $p = p_0$ printed just above the axis at the center line. "Rejection Region" sits above the left tail with the area marked $\alpha$ inside the tail; "Acceptance Region" sits above the main body with $(1-\alpha)$ marked under the curve. Printed caption "Figure-16" below.
- **Mathematical meaning:** One-sided (left) test of a population proportion: reject $H_0$ when $Z < -Z_{\alpha}$; the area right of $-Z_{\alpha}$ is the acceptance region.
