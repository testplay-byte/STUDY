---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-7
chapter_folder: Chapter-14-Statistical-Inference-Estimation
chapter_number: 14
chapter_title: "Statistical Inference Estimation"
page_image: 21
page_printed: 223
section: 14.21 CONFIDENCE INTERVAL ESTIMATE FOR THE DIFFERENCE BETWEEN TWO POPULATION PROPORTIONS (LARGE SAMPLES)
exercise: null
content_type: theory
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-14-Statistical-Inference-Estimation/0021.jpg
converted_at: "2026-10-06"
converted_by: "agent-21c (glm-vision)"
notes: "Offset check: printed p.223 = image 21 + 202 (header folio, top-right; odd page). Page opens with the concluding lines of Example 14.20 (continued from p.222), holds Example 14.21 (complete; 92% CI with finite-population correction for N = 4000 pineapples) then section 14.21 heading; page ends mid-derivation (continues on p.224). Note: printed example number 14.21 and section number 14.21 coincide (as printed). No figures."
---

# Page 21 — Statistical Inference Estimation (Chapter 14)

> 📄 Original scan: [0021.jpg](../../../Raw/Statistics/Chapter-14-Statistical-Inference-Estimation/0021.jpg) · printed page 223

Here, $n = 500, X = 40, \hat{p} = \frac{X}{n} = \frac{40}{500} = 0.08, \hat{q} = 1 - \hat{p} = 0.92,$

$1 - \alpha = 0.99$ or $\alpha = 0.01$, $\frac{\alpha}{2} = 0.005$ and $Z_{\frac{\alpha}{2}} = Z_{0.005} = 2.575$.

Hence the $99\%$ confidence interval for p is

$$\begin{aligned} 0.08 - 2.575 \sqrt{\frac{(0.08)(0.92)}{500}} &< p < 0.08 + 2.575 \sqrt{\frac{(0.08)(0.92)}{500}} \\ 0.08 - 0.03 &< p < 0.08 + 0.03 \\ 0.05 < p < 0.11 &\quad \text{or} \quad 5\% < p < 11\% \end{aligned}$$

**Example 14.21.**

A random sample of 500 from a consignment of 4000 pineapples was taken and 70 were found to be bad. Construct the $92\%$ confidence limits for the proportion of bad pineapples.

**Solution:** A $100(1 - \alpha)\%$ confidence interval for p is

$$\hat{p} - Z_{\frac{\alpha}{2}} \sqrt{\frac{\hat{p}\hat{q}}{n}\left(\frac{N-n}{N-1}\right)} < p < \hat{p} + Z_{\frac{\alpha}{2}} \sqrt{\frac{\hat{p}\hat{q}}{n}\left(\frac{N-n}{N-1}\right)}$$

Here, $n = 500, X = 70, N = 4000, \hat{p} = \frac{X}{n} = \frac{70}{500} = 0.14, \hat{q} = 1 - \hat{p} = 0.86,$

$$1 - \alpha = 0.92 \text{ or } \alpha = 0.08 \text{ and } \alpha/2 = 0.04.$$

From the area table of normal distribution, we have $Z_{\frac{\alpha}{2}} = Z_{0.04} = 1.75$.

Hence the $92\%$ confidence interval for p is

$$\begin{aligned} 0.14 - 1.75 \sqrt{\frac{(0.14)(0.86)}{500}\left(\frac{4000-500}{4000-1}\right)} &< p < 0.14 + 1.75 \sqrt{\frac{(0.14)(0.86)}{500}\left(\frac{4000-500}{4000-1}\right)} \\ 0.14 - 0.03 &< p < 0.14 + 0.03 \\ 0.11 < p < 0.17 \end{aligned}$$

## 14.21 CONFIDENCE INTERVAL ESTIMATE FOR THE DIFFERENCE BETWEEN TWO POPULATION PROPORTIONS (LARGE SAMPLES)

Suppose there are two populations having proportions $p_1$ and $p_2$ which are unknown. It is required to calculate the confidence interval for the difference $(p_1 - p_2)$. Two independent random samples of size $n_1$ and $n_2$ are selected from the populations and the sample proportions are calculated which are $\hat{p}_1$ and $\hat{p}_2$ respectively. The statistic $(\hat{p}_1 - \hat{p}_2)$ is estimator of the parameter $(p_1 - p_2)$. When $n_1$ and $n_2$ are large, the random variable $(\hat{p}_1 - \hat{p}_2)$ has the normal distribution with mean $(p_1 - p_2)$ and standard error $\sqrt{\frac{p_1 q_1}{n_1} + \frac{p_2 q_2}{n_2}}$. The standard normal random variable $Z$ is written as

$$Z = \frac{(\hat{p}_1 - \hat{p}_2) - (p_1 - p_2)}{\sqrt{\frac{p_1 q_1}{n_1} + \frac{p_2 q_2}{n_2}}}.$$ The probability is $(1 - \alpha)$ that the random variable $Z$ will take on a value between $-Z_{\frac{\alpha}{2}}$ and $+Z_{\frac{\alpha}{2}}$. This statement can be written as below:

$$P\left[-Z_{\frac{\alpha}{2}} < Z < +Z_{\frac{\alpha}{2}}\right] = 1 - \alpha \text{ or } P\left[-Z_{\frac{\alpha}{2}} < \frac{(\hat{p}_1 - \hat{p}_2) - (p_1 - p_2)}{\sqrt{\frac{p_1 q_1}{n_1} + \frac{p_2 q_2}{n_2}}} < +Z_{\frac{\alpha}{2}}\right] = 1 - \alpha$$

The terms within the brackets can be written as:

$$P\left[(\hat{p}_1 - \hat{p}_2) - Z_{\frac{\alpha}{2}} \sqrt{\frac{p_1 q_1}{n_1} + \frac{p_2 q_2}{n_2}} < p_1 - p_2 < (\hat{p}_1 - \hat{p}_2) + Z_{\frac{\alpha}{2}} \sqrt{\frac{p_1 q_1}{n_1} + \frac{p_2 q_2}{n_2}}\right] = 1 - \alpha$$
