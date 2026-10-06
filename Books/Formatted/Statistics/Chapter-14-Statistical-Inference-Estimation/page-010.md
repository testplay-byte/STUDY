---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-7
chapter_folder: Chapter-14-Statistical-Inference-Estimation
chapter_number: 14
chapter_title: "Statistical Inference Estimation"
page_image: 10
page_printed: 212
section: null
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-14-Statistical-Inference-Estimation/0010.jpg
converted_at: "2026-10-06"
converted_by: "agent-21b (glm-vision)"
notes: "Offset check: printed p.212 = image 10 + 202 (header folio, top-left; even page). Page opens with Table-1 (the 'Use of Z or t' table promised on p.211), then Examples 14.6, 14.7, 14.8; page ends mid-solution of Example 14.8 (last line = t-table value) — continues on next page. No printed section heading (section null)."
---

# Page 10 — Statistical Inference Estimation (Chapter 14)

> 📄 Original scan: [0010.jpg](../../../Raw/Statistics/Chapter-14-Statistical-Inference-Estimation/0010.jpg) · printed page 212

**Table-1**

| | n – Large | n – Small |
| :--- | :--- | :--- |
| σ – known | Z | Z ( normal population ) |
| σ – unknown | Z | t ( normal population ) |

**Example 14.6.**

A random sample of $n = 20$ from a normal population gives the sample mean 140 and the sample standard deviation, $s = 8$. Construct a $98\%$ confidence interval for the population mean.

**Solution:** Here n is small, therefore the confidence interval based on t-distribution is used.

A $100(1-\alpha)\%$ confidence interval for $\mu$ is

$$\bar{X} - t_{\frac{\alpha}{2}(n-1)} \frac{s}{\sqrt{n}} < \mu < \bar{X} + t_{\frac{\alpha}{2}(n-1)} \frac{s}{\sqrt{n}}$$

Here, $\bar{X} = 140$, $s = 8$, $n = 20$, $1-\alpha = 0.98$ or $\alpha = 0.02$ and $\frac{\alpha}{2} = 0.01$

From the t-table, we have $t_{\frac{\alpha}{2}(n-1)} = t_{0.01(19)} = 2.539$

Hence the $98\%$ confidence interval for $\mu$ is

$$140 - 2.539 \left(\frac{8}{\sqrt{20}}\right) < \mu < 140 + 2.539 \left(\frac{8}{\sqrt{20}}\right)$$
$$140 - 4.54 < \mu < 140 + 4.54$$
$$135.46 < \mu < 144.54$$

**Example 14.7.**

A random sample of size $n = 7$, independent observations of a normal variable gave $\bar{X} = 5.128$ with sample unbiased variance $s^2 = 0.3456$. Calculate a $90\%$ confidence interval for the population mean.

**Solution:** A $100(1-\alpha)\%$ confidence interval for $\mu$ is

$$\bar{X} - t_{\frac{\alpha}{2}(n-1)} \frac{s}{\sqrt{n}} < \mu < \bar{X} + t_{\frac{\alpha}{2}(n-1)} \frac{s}{\sqrt{n}}$$

Here, $n = 7$, $\bar{X} = 5.128$, $s^2 = 0.3456$, $s = 0.5879$, $1-\alpha = 0.90$ or $\alpha = 0.10$ and $\frac{\alpha}{2} = 0.05$.

From the t-table, we have $t_{\frac{\alpha}{2}(n-1)} = t_{0.05(6)} = 1.943$

Hence the $90\%$ confidence interval for $\mu$ is

$$5.128 - 1.943 \frac{0.5879}{\sqrt{7}} < \mu < 5.128 + 1.943 \frac{0.5879}{\sqrt{7}}$$
$$5.128 - 0.432 < \mu < 5.128 + 0.432$$
$$4.696 < \mu < 5.560$$

**Example 14.8.**

A random sample of 16 values from a normal population showed a mean of 41.5 inches and a sum of squares of deviations from this mean equal to 135 (inches)$^2$. Show that the $95\%$ confidence limits for the population mean are 39.9 and 43.1 inches.

**Solution:** A $100(1-\alpha)\%$ confidence interval for $\mu$ is

$$\bar{X} - t_{\frac{\alpha}{2}(n-1)} \frac{s}{\sqrt{n}} < \mu < \bar{X} + t_{\frac{\alpha}{2}(n-1)} \frac{s}{\sqrt{n}}$$

Here, $n = 16$, $\bar{X} = 41.5$, $\sum(X - \bar{X})^2 = 135$, $s = \sqrt{\frac{\sum(X - \bar{X})^2}{n - 1}} = \sqrt{\frac{135}{16 - 1}} = 3$,

$1 - \alpha = 0.95$ or $\alpha = 0.05$ and $\alpha/2 = 0.025$.

From the t-table, we have $t_{\frac{\alpha}{2}(n-1)} = t_{0.025(15)} = 2.131$.
