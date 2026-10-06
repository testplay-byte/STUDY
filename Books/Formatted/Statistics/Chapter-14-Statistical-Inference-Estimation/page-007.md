---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-7
chapter_folder: Chapter-14-Statistical-Inference-Estimation
chapter_number: 14
chapter_title: "Statistical Inference Estimation"
page_image: 7
page_printed: 209
section: null
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-14-Statistical-Inference-Estimation/0007.jpg
converted_at: "2026-10-06"
converted_by: "agent-21a (glm-vision)"
notes: "Offset check: printed p.209 = image 7 + 202 (header folio, top-right; odd page). Page = solution (b) of Example 14.1 + boxed theory label 'σ-Unknown' (printed inside a display box, rendered as blockquote; no numbered section heading printed) + Examples 14.2 and 14.3; page ends mid-solution of Example 14.3 (after its first CI display formula) — continues on next page. Stray ink speck printed before '0.05' in the 'Here, n = 400' line (not transcribed). Vision hallucinated a superscript on Z in Example 14.2 — zoom-verified as plain Z with subscript alpha/2; corrected. Example 14.2 uses known sigma = 8 immediately after the σ-Unknown block — as printed. '90%' (Example 14.2) vs '90 %' (part b) spacing varies in print — as printed."
---

# Page 7 — Statistical Inference Estimation (Chapter 14)

> 📄 Original scan: [0007.jpg](../../../Raw/Statistics/Chapter-14-Statistical-Inference-Estimation/0007.jpg) · printed page 209

(b) A $100(1 - \alpha)$ % confidence interval for $\mu$ is

$$\bar{X} - Z_{\frac{\alpha}{2}} \frac{\sigma}{\sqrt{n}} \sqrt{\frac{N-n}{N-1}} < \mu < \bar{X} + Z_{\frac{\alpha}{2}} \frac{\sigma}{\sqrt{n}} \sqrt{\frac{N-n}{N-1}}$$

Here, n = 400, N = 2000, $\sigma = 4$, $\bar{X}=80$, $1 - \alpha = 0.90$ or $\alpha = 0.10$ and $\frac{\alpha}{2} = 0.05$

From the area table of normal distribution, we have $Z_{\frac{\alpha}{2}} = Z_{0.05} = 1.645$

Hence the 90 % confidence interval for $\mu$ is

$$80 - 1.645 \left(\frac{4}{\sqrt{400}}\right) \sqrt{\frac{2000 - 400}{2000 - 1}} < \mu < 80 + 1.645 \left(\frac{4}{\sqrt{400}}\right) \sqrt{\frac{2000 - 400}{2000 - 1}}$$

$$80 - 0.294 < \mu < 80 + 0.294$$

$$79.706 < \mu < 80.294$$

> **σ-Unknown**

In the previous article it was assumed that $\sigma$ is known. In practical situations, $\sigma$ is usually not known. When $\sigma$ is not known, we can replace it by the sample standard deviation S. In this case the confidence interval for $\mu$ is

$$\bar{X} - Z_{\frac{\alpha}{2}} \frac{S}{\sqrt{n}} < \mu < \bar{X} + Z_{\frac{\alpha}{2}} \frac{S}{\sqrt{n}}$$

It is important to note that this interval estimate can be used only when n is large. But the population may or may not be normal. When the population is finite, the interval for $\mu$ would become

$$\bar{X} - Z_{\frac{\alpha}{2}} \frac{S}{\sqrt{n}} \sqrt{\frac{N-n}{N-1}} < \mu < \bar{X} + Z_{\frac{\alpha}{2}} \frac{S}{\sqrt{n}} \sqrt{\frac{N-n}{N-1}}$$

This interval can be calculated when N is given.

**Example 14.2.**

Given n = 64, $\bar{X}$= 42.7, $\sigma$ = 8 and $Z_{\frac{\alpha}{2}}$ = 1.645. Find confidence interval for $\mu$.

*Solution:* A $100(1 - \alpha)$% confidence interval for $\mu$ is

$$\bar{X} - Z_{\frac{\alpha}{2}} \frac{\sigma}{\sqrt{n}} < \mu < \bar{X} + Z_{\frac{\alpha}{2}} \frac{\sigma}{\sqrt{n}}$$

Here, n = 64, $\bar{X}$ = 42.7, $\sigma$ = 8 and $Z_{\frac{\alpha}{2}} = Z_{0.05} = 1.645$

Hence the 90% confidence interval for $\mu$ is

$$42.7 - 1.645 \frac{8}{\sqrt{64}} < \mu < 42.7 + 1.645 \frac{8}{\sqrt{64}}$$

$$42.7 - 1.645 < \mu < 42.7 + 1.645$$

$$41.055 < \mu < 44.345$$

**Example 14.3.**

The heights of a random sample of 50 college students showed a mean of 174.5 centimeters and a standard deviation of 6.9 centimeters. Construct a 98 % confidence interval for the mean height of all college students.

*Solution:* A $100(1 - \alpha)$ % confidence interval for $\mu$ is

$$\bar{X} - Z_{\frac{\alpha}{2}} \frac{S}{\sqrt{n}} < \mu < \bar{X} + Z_{\frac{\alpha}{2}} \frac{S}{\sqrt{n}}$$
