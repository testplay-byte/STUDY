---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-7
chapter_folder: Chapter-14-Statistical-Inference-Estimation
chapter_number: 14
chapter_title: "Statistical Inference Estimation"
page_image: 23
page_printed: 225
section: null
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-14-Statistical-Inference-Estimation/0023.jpg
converted_at: "2026-10-06"
converted_by: "agent-22a (glm-vision)"
notes: "Offset check: printed p.225 = image 23 + 202 (header folio, top-right; odd page). Page = Example 14.24 only (parts a, b, c), starting directly at the example (Example 14.23 completed on p.224); the example completes on this page. No printed section heading (section null). As-printed quirks preserved (zoom-verified): (b) prints 'the 99% confidence interval for μ found to be' — no 'was'; (c) prints 'The limits for interval are' (no 'the') and asks 'What confidence interval is used?' (context implies confidence level/coefficient; the answer line reads 'Hence 95% confidence interval is used.')."
---

# Page 23 — Statistical Inference Estimation (Chapter 14)

> 📄 Original scan: [0023.jpg](../../../Raw/Statistics/Chapter-14-Statistical-Inference-Estimation/0023.jpg) · printed page 225

**Example 14.24.**

(a) The 90% confidence interval for $\mu$ was found to be 96.71 to 103.29. The variance of the population was 144. Find sample size n.

(b) On the basis of the results obtained from a random sample of 49, the 99% confidence interval for $\mu$ found to be 309.7 to 330.3. Find $\bar{X}$ and $\sigma$.

(c) A confidence interval is constructed for the mean of a normal population with standard deviation 40 on the basis of a sample of 100. The limits for interval are 192.16 and 207.84. What confidence interval is used?

**Solution:**
A $100(1 - \alpha)\%$ confidence interval for $\mu$ (when $\sigma$ is known) is

$$\bar{X} - Z_{\frac{\alpha}{2}} \frac{\sigma}{\sqrt{n}} < \mu < \bar{X} + Z_{\frac{\alpha}{2}} \frac{\sigma}{\sqrt{n}}$$

(a) Here, $\sigma^2 = 144, \sigma = 12, Z_{\frac{\alpha}{2}} = Z_{0.05} = 1.645, \bar{X} - Z_{\frac{\alpha}{2}} \frac{\sigma}{\sqrt{n}} = 96.71$ and $\bar{X} + Z_{\frac{\alpha}{2}} \frac{\sigma}{\sqrt{n}} = 103.29$. Therefore

$$\bar{X} - Z_{\frac{\alpha}{2}} \frac{\sigma}{\sqrt{n}} = \bar{X} - 1.645 \frac{12}{\sqrt{n}} = 96.71 \quad \text{or} \quad \bar{X} - \frac{19.74}{\sqrt{n}} = 96.71 \qquad \ldots\ldots\ldots(1)$$

$$\bar{X} + Z_{\frac{\alpha}{2}} \frac{\sigma}{\sqrt{n}} = \bar{X} + 1.645 \frac{12}{\sqrt{n}} = 103.29 \quad \text{or} \quad \bar{X} + \frac{19.74}{\sqrt{n}} = 103.29 \qquad \ldots\ldots\ldots(2)$$

Subtracting equation (1) from equation (2), we get

$$\frac{39.48}{\sqrt{n}} = 6.58 \quad \text{or} \quad \sqrt{n} = \frac{39.48}{6.58} = 6 \quad \text{and} \quad n = (6)^2 = 36.$$

(b) Here, $n = 49, Z_{\frac{\alpha}{2}} = Z_{0.005} = 2.575, \bar{X} - Z_{\frac{\alpha}{2}} \frac{\sigma}{\sqrt{n}} = 309.7$ and $\bar{X} + Z_{\frac{\alpha}{2}} \frac{\sigma}{\sqrt{n}} = 330.3$. Therefore

$$\bar{X} - Z_{\frac{\alpha}{2}} \frac{\sigma}{\sqrt{n}} = \bar{X} - 2.575 \frac{\sigma}{\sqrt{49}} = \bar{X} - 2.575 \frac{\sigma}{7} = 309.7 \qquad \ldots\ldots\ldots(1)$$

$$\bar{X} + Z_{\frac{\alpha}{2}} \frac{\sigma}{\sqrt{n}} = \bar{X} + 2.575 \frac{\sigma}{\sqrt{49}} = \bar{X} + 2.575 \frac{\sigma}{7} = 330.3 \qquad \ldots\ldots\ldots(2)$$

Adding equations (1) and (2), we get $2\bar{X} = 640$ or $\bar{X} = \frac{640}{2} = 320$.

Substituting $\bar{X} = 320$ in equation (2) we get

$$320 + 2.575 \frac{\sigma}{7} = 330.3 \quad \text{or} \quad 2.575\sigma = 7(330.3 - 320) = 72.1 \quad \text{or} \quad \sigma = \frac{72.1}{2.575} = 28.$$

Hence $\bar{X} = 320$ and $\sigma = 28$.

(c) Here, $n = 100, \sigma = 40, \bar{X} - Z_{\frac{\alpha}{2}} \frac{\sigma}{\sqrt{n}} = 192.16$ and $\bar{X} + Z_{\frac{\alpha}{2}} \frac{\sigma}{\sqrt{n}} = 207.84$. Therefore

$$\bar{X} - Z_{\frac{\alpha}{2}} \frac{\sigma}{\sqrt{n}} = \bar{X} - Z_{\frac{\alpha}{2}} \frac{40}{\sqrt{100}} = \bar{X} - 4Z_{\frac{\alpha}{2}} = 192.16 \qquad \ldots\ldots\ldots(1)$$

$$\bar{X} + Z_{\frac{\alpha}{2}} \frac{\sigma}{\sqrt{n}} = \bar{X} + Z_{\frac{\alpha}{2}} \frac{40}{\sqrt{100}} = \bar{X} + 4Z_{\frac{\alpha}{2}} = 207.84 \qquad \ldots\ldots\ldots(2)$$

Subtracting equation (1) from equation (2), we get

$$8Z_{\frac{\alpha}{2}} = 15.68 \quad \text{or} \quad Z_{\frac{\alpha}{2}} = \frac{15.68}{8} = 1.96. \text{ The value of } Z_{\frac{\alpha}{2}} \text{ as } 1.96 \text{ against } Z_{0.025}. \text{ Thus }$$

$$\frac{\alpha}{2} = 0.025 \quad \text{or} \quad \alpha = 2(0.025) = 0.05 \quad \text{and} \quad 1 - \alpha = 1 - 0.05 = 0.95.$$

Hence 95% confidence interval is used.
