---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-8
chapter_folder: Chapter-15-Statistical-Inference-Testing-of-Hypotheses
chapter_number: 15
chapter_title: "Statistical Inference Testing of Hypotheses"
page_image: 4
page_printed: 242
section: 15.12 ERRORS IN TESTING OF HYPOTHESIS; 15.13 TYPE I ERROR; 15.14 TYPE II ERROR
exercise: null
content_type: theory
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-15-Statistical-Inference-Testing-of-Hypotheses/0004.jpg
converted_at: "2026-10-06"
converted_by: "agent-23a (glm-vision)"
notes: "Offset check: printed p.242 = image 4 + 238 (header folio, top-left; even page). Small boxed table 'Critical values of Z' (4 columns: alpha, Two - sided test, One-sided to the right, One-sided to the left) — values zoom-verified. Unnumbered printed heading 'α ( ALPHA )' sits between 15.13 examples and 15.14 — kept as its own heading. Book anomalies preserved: 'Z lies between -Z_alpha/2 and Z_alpha/2 is a two-sided alternative test' (grammar as printed); 'is large. ( significant )' (period before parenthesis as printed); 'between -∞ to +∞'. Page ends mid-sentence 'If the' — continues on next page."
---

# Page 4 — Statistical Inference Testing of Hypotheses (Chapter 15)

> 📄 Original scan: [0004.jpg](../../../Raw/Statistics/Chapter-15-Statistical-Inference-Testing-of-Hypotheses/0004.jpg) · printed page 242

For some important values of $\alpha$, the critical values of $Z$ for two-tailed and one tailed tests are given below:

**Critical values of Z**

| $\alpha$ | Two - sided test | One-sided to the right | One-sided to the left |
| :--- | :--- | :--- | :--- |
| 0.10 ( 10 % ) | $-1.645$ and $+1.645$ | $+1.282$ | $-1.282$ |
| 0.05 ( 5 % ) | $-1.96$ and $+1.96$ | $+1.645$ | $-1.645$ |
| 0.02 ( 2 % ) | $-2.326$ and $+2.326$ | $+2.054$ | $-2.054$ |
| 0.01 ( 1 % ) | $-2.575$ and $+2.575$ | $+2.326$ | $-2.326$ |

## 15.12 ERRORS IN TESTING OF HYPOTHESIS

The null hypothesis $\text{H}_0$ is accepted or rejected on the basis of the value of the test-statistic which is a function of the sample. The test statistic may land in acceptance region or rejection region. If the calculated value of test-statistic, say $Z$, is small ( insignificant ) that is $Z$ is close to zero or we can say $Z$ lies between $-Z_{\alpha/2}$ and $Z_{\alpha/2}$ is a two-sided alternative test ($\text{H}_1$: $\theta \neq \theta_0$), the hypothesis is accepted. If the calculated value of the test-statistic $Z$ is large. ( significant ), $\text{H}_0$ is rejected and $\text{H}_1$ is accepted. In this rejection plan or acceptance plan, there is the possibility of making any one of the two errors which are called Type I and Type II-errors.

## 15.13 TYPE I ERROR

The null hypothesis $\text{H}_0$ may be true but it may be rejected. This is an error and is called *Type I error*. When $\text{H}_0$ is true, the test-statistic, say $Z$, can take any value between $-\infty$ to $+\infty$ . But we reject $\text{H}_0$ when $Z$ lies in the rejection region while the rejection region is also included in the interval $-\infty$ to $\infty$. In a two-sided $\text{H}_1$ ( like $\theta \neq \theta_0$ ), the hypothesis is rejected when $Z$ is less than $-Z_{\alpha/2}$ or $Z$ is greater than $Z_{\alpha/2}$. When $\text{H}_0$ is true, $Z$ can fall in the rejection region with a probability equal to the rejection region $\alpha$. Thus it is possible that $\text{H}_0$ is rejected while $\text{H}_0$ is true. This is called *Type I error*. The probability is $( 1 - \alpha )$ that $\text{H}_0$ is accepted when $\text{H}_0$ is true. It is called correct decision. We can say that *Type I error* has been committed when:

(i) an intelligent student is not promoted to the next class.
(ii) a good player is not allowed to play the match.
(iii) an innocent person is punished.
(iv) a driver is punished for no fault of him.
(v) a good worker is not paid his salary in time.

These are the examples from practical life. These examples are quoted to make a point clear to the students.

## $\alpha$ ( ALPHA )

The probability of making *Type I error* is denoted by $\alpha$(alpha). When a null hypothesis is rejected, we may be wrong in rejecting it or we may be right in rejecting it. We do not know that $\text{H}_0$ is true or false. Whatever our decision will be, it will have the support of probability. A true hypothesis has some probability of rejection and this probability is denoted by $\alpha$. This probability is also called the size of *Type I error* and is denoted by $\alpha$.

## 15.14 TYPE II ERROR

The null hypothesis $\text{H}_0$ may be false but it may be accepted. It is an error and is called Type II error. The value of the test-statistic may fall in the acceptance region when $\text{H}_0$ is in fact false. Suppose the hypothesis being tested is $\text{H}_0$: $\theta = \theta_0$ and $\text{H}_0$ is false and true value of $\theta$ is $\theta_1$ or $\theta_\text{true}$. If the
