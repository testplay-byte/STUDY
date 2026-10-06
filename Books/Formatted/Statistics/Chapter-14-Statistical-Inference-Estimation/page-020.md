---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-7
chapter_folder: Chapter-14-Statistical-Inference-Estimation
chapter_number: 14
chapter_title: "Statistical Inference Estimation"
page_image: 20
page_printed: 222
section: null
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-14-Statistical-Inference-Estimation/0020.jpg
converted_at: "2026-10-06"
converted_by: "coordinator-test (glm-vision)"
notes: "Offset check: printed p.222 = image 20 + 202 (header folio, top-left; even page). Page opens mid-derivation (continuation of the confidence-interval-for-proportion theory from p.221) then holds Examples 14.19 and 14.20; page ends mid-solution of Example 14.20 — continues on next page. No printed section heading on the page (section null)."
---

# Page 20 — Statistical Inference Estimation (Chapter 14)

> 📄 Original scan: [0020.jpg](../../../Raw/Statistics/Chapter-14-Statistical-Inference-Estimation/0020.jpg) · printed page 222

$$P \left[ -Z_{\frac{\alpha}{2}} < Z < + Z_{\frac{\alpha}{2}} \right] = 1 - \alpha \text{ or } P \left[ -Z_{\frac{\alpha}{2}} < \frac{\hat{p} - p}{\sqrt{\frac{\hat{p}\hat{q}}{n}}} < + Z_{\frac{\alpha}{2}} \right] = 1 - \alpha$$

The terms within the brackets can be written as

$$P \left[ \hat{p} - Z_{\frac{\alpha}{2}} \sqrt{\frac{\hat{p}\hat{q}}{n}} < p < \hat{p} + Z_{\frac{\alpha}{2}} \sqrt{\frac{\hat{p}\hat{q}}{n}} \right] = 1 - \alpha$$

Thus $100(1-\alpha)\%$ confidence interval estimate for $p$ is

$$\hat{p} - Z_{\frac{\alpha}{2}} \sqrt{\frac{\hat{p}\hat{q}}{n}} < p < \hat{p} + Z_{\frac{\alpha}{2}} \sqrt{\frac{\hat{p}\hat{q}}{n}}$$

For $95\%$ confidence interval we have $\alpha = 0.05$, $\alpha/2 = 0.025$ and $Z_{0.025} = 1.96$.

Thus $95\%$ confidence interval for $p$ is $\hat{p} - 1.96 \sqrt{\frac{\hat{p}\hat{q}}{n}} < p < \hat{p} + 1.96 \sqrt{\frac{\hat{p}\hat{q}}{n}}$.

For most probable confidence limits we take $Z = 3$.

**Example 14.19.**

A random sample of 200 persons from a city was interviewed and 50 of them were found to be literate. Calculate a $90\%$ confidence interval for the proportion of literate persons in the city. Also calculate a confidence interval for the proportion of illiterate persons in the city.

**Solution:** A $100(1-\alpha)\%$ confidence interval for $p$ (literate persons) is

$$\hat{p} - Z_{\frac{\alpha}{2}} \sqrt{\frac{\hat{p}\hat{q}}{n}} < p < \hat{p} + Z_{\frac{\alpha}{2}} \sqrt{\frac{\hat{p}\hat{q}}{n}}$$

Here, $n = 200$, $X = 50$ (number of literate persons), $\hat{p} = \frac{X}{n} = \frac{50}{200} = 0.25$,

$\hat{q} = 1 - \hat{p} = 0.75$, $1 - \alpha = 0.90$ or $\alpha = 0.10$ and $\alpha/2 = 0.05$

From the area table of normal distribution, we have $Z_{\frac{\alpha}{2}} = Z_{0.05} = 1.645$.

Hence the $90\%$ confidence interval for $p$ (literate persons) is

$$\begin{aligned}
& 0.25 - 1.645 \sqrt{\frac{(0.25)(0.75)}{200}} < p < 0.25 + 1.645 \sqrt{\frac{(0.25)(0.75)}{200}} \\
& \quad 0.25 - 0.05 < p < 0.25 + 0.05 \\
& \quad 0.2 < p < 0.3 \quad \text{or } 20\% \text{ to } 30\%
\end{aligned}$$

also A $100(1-\alpha)\%$ confidence interval for $p$ (illiterate persons) is

$$\hat{p} - Z_{\frac{\alpha}{2}} \sqrt{\frac{\hat{p}\hat{q}}{n}} < p < \hat{p} + Z_{\frac{\alpha}{2}} \sqrt{\frac{\hat{p}\hat{q}}{n}}$$

Here, $n=200$, $X = 150$ (number of illiterate persons)

$\hat{p} = \frac{X}{n} = \frac{150}{200} = 0.75$, $\hat{q} = 1 - \hat{p} = 0.25$

Hence the $90\%$ confidence interval for $p$ (illiterate persons) is

$$\begin{aligned}
& 0.75 - 1.645 \sqrt{\frac{(0.75)(0.25)}{200}} < p < 0.75 + 1.645 \sqrt{\frac{(0.75)(0.25)}{200}} \\
& \quad 0.75 - 0.05 < p < 0.75 + 0.05 \\
& \quad 0.7 < p < 0.8 \quad \text{or } 70\% \text{ to } 80\%
\end{aligned}$$

**Example 14.20.**

In a random sample of 500 items 40 are defective. Compute $99\%$ confidence interval for the proportion of defectives in the population.

**Solution:** A $100(1-\alpha)\%$ confidence interval for $p$ is

$$\hat{p} - Z_{\frac{\alpha}{2}} \sqrt{\frac{\hat{p}\hat{q}}{n}} < p < \hat{p} + Z_{\frac{\alpha}{2}} \sqrt{\frac{\hat{p}\hat{q}}{n}}$$
