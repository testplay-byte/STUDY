---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-7
chapter_folder: Chapter-14-Statistical-Inference-Estimation
chapter_number: 14
chapter_title: "Statistical Inference Estimation"
page_image: 11
page_printed: 213
section: 14.16 CONFIDENCE INTERVAL ESTIMATE FOR THE DIFFERENCE BETWEEN TWO POPULATION MEANS ( LARGE SAMPLES )
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-14-Statistical-Inference-Estimation/0011.jpg
converted_at: "2026-10-06"
converted_by: "agent-21b (glm-vision)"
notes: "Offset check: printed p.213 = image 11 + 202 (header folio, top-right). Page opens mid-solution (continuation of Example 14.8 from p.212: final limits 39.9 < μ < 43.1), then Examples 14.9 and 14.10. Book typo preserved in Example 14.10 statement: 'Obtained the best unbiased estimates...' (printed as-is; reads as 'Obtain...'). Section 14.16 begins near the bottom; its sub-heading 'σ1² and σ2² known' is printed inside a rectangular box (rendered as blockquote). Page ends mid-sentence 'Two independent random' — continues on p.214. | TYPO-CORRECTION PASS (2026-10-06, user mandate): unambiguous surface typo(s) corrected in the body per correction policy v4.4 — printed forms remain documented earlier in this note and itemised in docs/tracking/CORRECTIONS-LOG.md."
---

# Page 11 — Statistical Inference Estimation (Chapter 14)

> 📄 Original scan: [0011.jpg](../../../Raw/Statistics/Chapter-14-Statistical-Inference-Estimation/0011.jpg) · printed page 213

Hence the $95\%$ confidence interval for $\mu$ is

$$41.5 - 2.131 \frac{3}{\sqrt{16}} < \mu < 41.5 + 2.131 \frac{3}{\sqrt{16}}$$

$$41.5 - 1.6 < \mu < 41.5 + 1.6$$

$$39.9 < \mu < 43.1$$

**Example 14.9.**

A machine is producing metal pieces that are cylindrical in shape. A sample of pieces is taken and their diameters are $1.01, 0.97, 1.03, 1.04, 0.99, 0.98, 0.99, 1.01$ and $1.03$ centimeters. Find a $99\%$ confidence interval for the mean diameter of pieces produced by this machine, assuming an approximate normal population.

**Solution:** A $100(1 - \alpha)\%$ confidence interval for $\mu$ is

$$\bar{X} - t_{\frac{\alpha}{2}(n-1)} \frac{s}{\sqrt{n}} < \mu < \bar{X} + t_{\frac{\alpha}{2}(n-1)} \frac{s}{\sqrt{n}}$$

Here, $\sum X = 9.05$, $\sum X^2 = 9.1051$, $n = 9$, $\bar{X} = \frac{\sum X}{n} = \frac{9.05}{9} = 1.0056$,

$$s^2 = \frac{1}{n-1}\left[\sum X^2 - \frac{(\sum X)^2}{n}\right] = \frac{1}{8}\left[9.1051 - \frac{(9.05)^2}{9}\right] = 0.0006, s = 0.0245,$$

$$1 - \alpha = 0.99 \text{ or } \alpha = 0.01 \text{ and } \frac{\alpha}{2} = 0.005$$

From the t-table, we have $t_{\frac{\alpha}{2}(n-1)} = t_{0.005(8)} = 3.355$

Hence the $99\%$ confidence interval for $\mu$ is

$$1.0056 - 3.355 \left(\frac{0.0245}{\sqrt{9}}\right) < \mu < 1.0056 + 3.355 \left(\frac{0.0245}{\sqrt{9}}\right)$$

$$1.0056 - 0.0274 < \mu < 1.0056 + 0.0274$$

$$0.9782 < \mu < 1.0330$$

**Example 14.10.**

Obtain the best unbiased estimates of the population mean ($\mu$) and variance ($\sigma^2$) from which the following sample is drawn $n = 8$, $\sum X = 120$, $\sum(X - \bar{X})^2 = 302$.

**Solution:** Here, $n = 8$, $\sum X = 120$ and $\sum(X - \bar{X})^2 = 302$. Therefore

$$\mu = \bar{X} = \frac{\sum X}{n} = \frac{120}{8} = 15 \text{ and } \sigma^2 = s^2 = \frac{\sum(X - \bar{X})^2}{n - 1} = \frac{302}{8 - 1} = 43.1429$$

Hence $\bar{X}$ and $s^2$ are best unbiased estimates of the population mean $\mu$ and population variance $\sigma^2$ respectively.

## 14.16 CONFIDENCE INTERVAL ESTIMATE FOR THE DIFFERENCE BETWEEN TWO POPULATION MEANS ( LARGE SAMPLES )

> **$\sigma_1^2$ and $\sigma_2^2$ known**

Consider two large populations with means $\mu_1$ and $\mu_2$ which are unknown and variances $\sigma_1^2$ and $\sigma_2^2$ which are assumed to be known. The populations may or may not be normal. Two independent random
