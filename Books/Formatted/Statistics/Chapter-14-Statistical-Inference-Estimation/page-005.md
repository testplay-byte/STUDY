---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-7
chapter_folder: Chapter-14-Statistical-Inference-Estimation
chapter_number: 14
chapter_title: "Statistical Inference Estimation"
page_image: 5
page_printed: 207
section: null
exercise: null
content_type: theory
has_figures: true
figures_count: 2
source_image: ../../../Raw/Statistics/Chapter-14-Statistical-Inference-Estimation/0005.jpg
converted_at: "2026-10-06"
converted_by: "agent-21a (glm-vision)"
notes: "Offset check: printed p.207 = image 5 + 202 (header folio, top-right; odd page). Page opens mid-sentence (continuation of 14.13 σ-known derivation from p.206) and ends with the finite-population CI display formula — continues on next page. No numbered section heading printed (section null). 'Finite Population' sub-heading is printed inside a display box (rendered as blockquote). Book typesetting as printed: no period after the 'upper confidence limit is U = ...' line and none after 'X-bar ± Z...(sigma/sqrt n)' before 'For 95 %' (zoom-verified); '95 %'/'99 %' spaced. Figures 2 and 3 sit in the right margin beside the text; markers placed at the end of their accompanying text blocks."
---

# Page 5 — Statistical Inference Estimation (Chapter 14)

> 📄 Original scan: [0005.jpg](../../../Raw/Statistics/Chapter-14-Statistical-Inference-Estimation/0005.jpg) · printed page 207

The random variable $\bar{X}$ can be transformed into standard normal variable $Z$ where $Z = \frac{\bar{X}-\mu}{\sigma/\sqrt{n}}$. The random variable $Z$ can take any value between $-\infty$ to $+\infty$. Let us mark two points $-Z_{\frac{\alpha}{2}}$ and $Z_{\frac{\alpha}{2}}$ on Z-scale, where $\alpha$ lies between 0 and 1. $-Z_{\frac{\alpha}{2}}$ is a point on the left of which the area under normal distribution of $Z$ is $\frac{\alpha}{2}$ and $Z_{\frac{\alpha}{2}}$ cuts off an area $\frac{\alpha}{2}$ to the right. Thus the area of the normal curve between $-Z_{\frac{\alpha}{2}}$ and $Z_{\frac{\alpha}{2}}$ is $1 - \alpha$, the total area under the normal curve being unity. Out of all possible values of $Z$, 100 $(1 - \alpha)$ % of the values occupy the space marked $1 - \alpha$. Thus the probability is $(1 - \alpha)$ that the random variable $Z$ will take a value between $-Z_{\frac{\alpha}{2}}$ and $Z_{\frac{\alpha}{2}}$. This probability statement can be written in symbols as $P[-Z_{\frac{\alpha}{2}} < Z < Z_{\frac{\alpha}{2}}] = 1 - \alpha$. Putting $Z = \frac{\bar{X}-\mu}{\sigma/\sqrt{n}}$, we get

$$P \left[ -Z_{\frac{\alpha}{2}} < \frac{\bar{X} - \mu}{\sigma/\sqrt{n}} < Z_{\frac{\alpha}{2}} \right] = 1 - \alpha$$

Without proof, we write the confidence interval for $\mu$ which is

$$\bar{X} - Z_{\frac{\alpha}{2}} \frac{\sigma}{\sqrt{n}} < \mu < \bar{X} + Z_{\frac{\alpha}{2}} \frac{\sigma}{\sqrt{n}}$$

It is called 100 $(1 - \alpha)$ % confidence interval for $\mu$. The lower confidence limit is $L = \bar{X} - Z_{\frac{\alpha}{2}} \frac{\sigma}{\sqrt{n}}$ and the upper confidence limit is $U = \bar{X} + Z_{\frac{\alpha}{2}} \frac{\sigma}{\sqrt{n}}$

[Figure F1]

The interval can also be written as $\bar{X} \pm Z_{\frac{\alpha}{2}} \frac{\sigma}{\sqrt{n}}$ For 95 % confidence interval for $\mu$, $\alpha = 0.05, \frac{\alpha}{2} = 0.025$. From the area table of normal distribution $Z_{\frac{\alpha}{2}} = Z_{0.025} = 1.96$. Thus 95 % confidence interval for $\mu$ is

$$\bar{X} - 1.96 \frac{\sigma}{\sqrt{n}} < \mu < \bar{X} + 1.96 \frac{\sigma}{\sqrt{n}}$$

For 99 % confidence interval for $\mu$, $\alpha = 0.01, \frac{\alpha}{2} = 0.005$ and $Z_{0.005} = 2.575$ (From the area table of normal distribution)

$$\bar{X} - 2.575 \frac{\sigma}{\sqrt{n}} < \mu < \bar{X} + 2.575 \frac{\sigma}{\sqrt{n}}$$

This interval is wider than the above 95 % interval. A very wide interval, which gives the most probable confidence limits for $\mu$ is

$$\bar{X} - 3 \frac{\sigma}{\sqrt{n}} < \mu < \bar{X} + 3 \frac{\sigma}{\sqrt{n}}$$

This interval is almost certain to contain the true value of $\mu$.

> **Finite Population**

When the population is finite or sampling is done without replacement, the standard error of $\bar{X}$ is $\sigma_{\bar{x}} = \frac{\sigma}{\sqrt{n}} \sqrt{\frac{N-n}{N-1}}$. When N is given, the confidence interval for $\mu$ would become.

$$\bar{X} - Z_{\frac{\alpha}{2}} \frac{\sigma}{\sqrt{n}} \sqrt{\frac{N-n}{N-1}} < \mu < \bar{X} + Z_{\frac{\alpha}{2}} \frac{\sigma}{\sqrt{n}} \sqrt{\frac{N-n}{N-1}}$$

[Figure F2]

## Figures on this page

### Figure F1 — Normal curve with central $(1-\alpha)$ area (right side, beside the confidence-interval formulas)
- **Type:** curve-plot
- **Caption/Number:** Figure-2
- **Description:** A bell-shaped normal curve with a vertical centre line labelled $\mu$ on the axis and "Z = 0" printed directly below it. Tick marks on the axis labelled $-Z_{\alpha/2}$ (left) and $+Z_{\alpha/2}$ (right). The two tail areas beyond the ticks are hatched/shaded and each carries the label $\alpha/2$; the large central area between the ticks is labelled $(1 - \alpha)$ inside the curve above the centre. Caption "Figure-2" printed centred below the axis.
- **Mathematical meaning:** Illustrates that the probability of the standardized variable $Z$ falling within $\pm Z_{\alpha/2}$ is $(1-\alpha)$, forming the basis for confidence intervals.

### Figure F2 — Normal curve split into 0.95 / 0.025 areas at ±1.96 (lower right, beside the 95%/99% interval text)
- **Type:** curve-plot
- **Caption/Number:** Figure-3
- **Description:** A bell-shaped normal curve with dual horizontal axes — an upper $\bar{X}$ scale and a lower $Z$ scale (labels $\bar{X}$ and $Z$ at the far right). A vertical centre line labelled $\mu$ at the top with "0" on the axis below it. Tick marks on the lower axis labelled $-1.96$, $0$ and $+1.96$. The central area between $-1.96$ and $+1.96$ is labelled (0.95) at the top centre and is split by the centre line into two halves each labelled 0.4750; the two tails are each labelled 0.025. No hatching (areas left white). Caption "Figure-3" printed centred below the axis.
- **Mathematical meaning:** Demonstrates the specific case of a 95% confidence interval where $\alpha = 0.05$, so $P[-1.96 < Z < 1.96] = 0.95$ with 0.025 in each tail.
