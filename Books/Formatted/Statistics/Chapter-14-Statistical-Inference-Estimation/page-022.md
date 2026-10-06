---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-7
chapter_folder: Chapter-14-Statistical-Inference-Estimation
chapter_number: 14
chapter_title: "Statistical Inference Estimation"
page_image: 22
page_printed: 224
section: null
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-14-Statistical-Inference-Estimation/0022.jpg
converted_at: "2026-10-06"
converted_by: "agent-22a (glm-vision)"
notes: "Offset check: printed p.224 = image 22 + 202 (header folio, top-left; even page). Page opens mid-sentence (continuation of 14.21 theory from p.223: 'Thus 100(1−α)% confidence interval estimate...') then holds Examples 14.22 and 14.23; Example 14.23 completes on this page (ends with its final numeric CI line). NO printed section heading on the page (section null — a '14.6 Confidence Interval...' section reading was hallucinated by first pass, zoom-verified absent). INK SPECK printed over the 'o' of 'for' in 'confidence interval for (p1−p2) is' (p.224 theory para) — not transcribed. BOOK TYPO preserved: final line of Example 14.23 prints '= 0.08 < p1 − p2 < − 0.02' with an EQUALS sign where a minus belongs (previous line gives −0.05 − 0.03); pixel-verified twice — as printed. Percent spacing varies: '95%' unspaced in 14.22 vs '90 %' spaced in 14.23 — as printed."
---

# Page 22 — Statistical Inference Estimation (Chapter 14)

> 📄 Original scan: [0022.jpg](../../../Raw/Statistics/Chapter-14-Statistical-Inference-Estimation/0022.jpg) · printed page 224

Thus $100(1-\alpha)\%$ confidence interval estimate for $(p_1-p_2)$ is

$$(\hat{p}_1 - \hat{p}_2) - Z_{\frac{\alpha}{2}} \sqrt{\frac{p_1q_1}{n_1} + \frac{p_2q_2}{n_2}} < p_1 - p_2 < (\hat{p}_1 - \hat{p}_2) + Z_{\frac{\alpha}{2}} \sqrt{\frac{p_1q_1}{n_1} + \frac{p_2q_2}{n_2}}$$

But the terms $p_1, q_1, p_2$ and $q_2$ are for the populations and are unknown. For large sample sizes, they can be estimated by their sample estimates which are $\hat{p}_1, \hat{q}_1, \hat{p}_2$ and $\hat{q}_2$ respectively. Thus the confidence interval for $(p_1-p_2)$ is

$$(\hat{p}_1 - \hat{p}_2) - Z_{\frac{\alpha}{2}} \sqrt{\frac{\hat{p}_1\hat{q}_1}{n_1} + \frac{\hat{p}_2\hat{q}_2}{n_2}} < p_1 - p_2 < (\hat{p}_1 - \hat{p}_2) + Z_{\frac{\alpha}{2}} \sqrt{\frac{\hat{p}_1\hat{q}_1}{n_1} + \frac{\hat{p}_2\hat{q}_2}{n_2}}$$

**Example 14.22.**

Given the data: $n_1 = 200, \hat{p}_1 = 0.7, n_2 = 100, \hat{p}_2 = 0.5$. Find a 95 % confidence interval for $p_1 - p_2$.

**Solution:** A $100(1-\alpha)\%$ confidence interval for $p_1 - p_2$ is

$$(\hat{p}_1 - \hat{p}_2) - Z_{\frac{\alpha}{2}} \sqrt{\frac{\hat{p}_1\hat{q}_1}{n_1} + \frac{\hat{p}_2\hat{q}_2}{n_2}} < p_1 - p_2 < (\hat{p}_1 - \hat{p}_2) + Z_{\frac{\alpha}{2}} \sqrt{\frac{\hat{p}_1\hat{q}_1}{n_1} + \frac{\hat{p}_2\hat{q}_2}{n_2}}$$

Here, $n_1 = 200, \hat{p}_1 = 0.7, \hat{q}_1 = 1 - \hat{p}_1 = 0.3, n_2 = 100, \hat{p}_2 = 0.5, \hat{q}_2 = 1 - \hat{p}_2 = 0.5.$

$1 - \alpha = 0.95$ or $\alpha = 0.05$ and $\alpha/2 = 0.025$.

From the area table of normal distribution, we have $Z_{\frac{\alpha}{2}} = Z_{0.025} = 1.96$.

Hence the 95% confidence interval for $p_1 - p_2$ is

$$(0.7 - 0.5) - 1.96 \sqrt{\frac{(0.7)(0.3)}{200} + \frac{(0.5)(0.5)}{100}} < p_1 - p_2 < (0.7 - 0.5) + 1.96 \sqrt{\frac{(0.7)(0.3)}{200} + \frac{(0.5)(0.5)}{100}}$$

$$0.2 - 0.12 < p_1 - p_2 < 0.2 + 0.12$$

$$0.08 < p_1 - p_2 < 0.32$$

**Example 14.23.**

Consider two pain relieving drugs compared on two independent samples of 1000 individuals each. Suppose 750 of those individuals receiving drug I and 800 of those receiving drug II reported some pain relief. Construct a 90 % confidence interval for the difference between population proportions.

**Solution:** A $100(1-\alpha)\%$ confidence interval for $p_1 - p_2$ is

$$(\hat{p}_1 - \hat{p}_2) - Z_{\frac{\alpha}{2}} \sqrt{\frac{\hat{p}_1\hat{q}_1}{n_1} + \frac{\hat{p}_2\hat{q}_2}{n_2}} < p_1 - p_2 < (\hat{p}_1 - \hat{p}_2) + Z_{\frac{\alpha}{2}} \sqrt{\frac{\hat{p}_1\hat{q}_1}{n_1} + \frac{\hat{p}_2\hat{q}_2}{n_2}}$$

Here $n_1 = 1000, X_1 = 750, \hat{p}_1 = \frac{X_1}{n_1} = \frac{750}{1000} = 0.75, \hat{q}_1 = 1 - \hat{p}_1 = 0.25,$

$n_2 = 1000, X_2 = 800, \hat{p}_2 = \frac{X_2}{n_2} = \frac{800}{1000} = 0.80, \hat{q}_2 = 1 - \hat{p}_2 = 0.20,$

$1 - \alpha = 0.90$ or $\alpha = 0.10$ and $\alpha/2 = 0.05$

From the area table of normal distribution, we have $Z_{\frac{\alpha}{2}} = Z_{0.05} = 1.645$

Hence the 90 % confidence interval for $p_1 - p_2$ is

$$(0.75 - 0.8) - 1.645 \sqrt{\frac{(0.75)(0.25)}{1000} + \frac{(0.8)(0.2)}{1000}} < p_1 - p_2 < (0.75 - 0.8) + 1.645 \sqrt{\frac{(0.75)(0.25)}{1000} + \frac{(0.8)(0.2)}{1000}}$$

$$- 0.05 - 0.03 < p_1 - p_2 < - 0.05 + 0.03$$

$$= 0.08 < p_1 - p_2 < - 0.02$$
