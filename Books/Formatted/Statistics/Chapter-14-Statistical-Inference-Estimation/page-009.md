---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-7
chapter_folder: Chapter-14-Statistical-Inference-Estimation
chapter_number: 14
chapter_title: "Statistical Inference Estimation"
page_image: 9
page_printed: 211
section: 14.15 CONFIDENCE INTERVAL ESTIMATE FOR POPULATION MEAN μ- POPULATION NORMAL ( SMALL SAMPLE )
exercise: null
content_type: mixed
has_figures: true
figures_count: 1
source_image: ../../../Raw/Statistics/Chapter-14-Statistical-Inference-Estimation/0009.jpg
converted_at: "2026-10-06"
converted_by: "agent-21b (glm-vision)"
notes: "Offset check: printed p.211 = image 9 + 202 (header folio, top-right). Page opens mid-solution (continuation of the worked example from p.210: S computed for n = 4) then section 14.15 theory. Final sentence introduces 'Table-1.' but the table itself is not printed on this page (follows on the next page). Section heading printed across two lines as 'MEAN μ- POPULATION / NORMAL ( SMALL SAMPLE )'."
---

# Page 9 — Statistical Inference Estimation (Chapter 14)

> 📄 Original scan: [0009.jpg](../../../Raw/Statistics/Chapter-14-Statistical-Inference-Estimation/0009.jpg) · printed page 211

Here, $n = 4$; $\sum X = 0.8$, $\sum X^2 = 6.3$, $\bar{X} = \frac{\sum X}{n} = \frac{0.8}{4} = 0.2$,

$$S = \sqrt{ \frac{\sum X^2}{n} - \left( \frac{\sum X}{n} \right)^2 } = \sqrt{ \frac{6.3}{4} - \left( \frac{0.8}{4} \right)^2 } = \sqrt{1.535} = 1.24.$$

Hence the $95\%$ confidence interval for $\mu$ is

$$\begin{aligned}
& 0.2 - 1.96 \frac{1.24}{\sqrt{4}} < \mu < 0.2 + 1.96 \frac{1.24}{\sqrt{4}} \\
& 0.2 - 1.22 < \mu < 0.2 + 1.22 \\
& -1.02 < \mu < 1.42
\end{aligned}$$

## 14.15 CONFIDENCE INTERVAL ESTIMATE FOR POPULATION MEAN μ- POPULATION NORMAL ( SMALL SAMPLE )

### σ-Known, Population Normal

Here we are stressing that the population is normal. If n is small, $\sigma$ is known, then the random variable Z can be used in the interval only when the population is normal. The confidence interval for $\mu$ is the same as for the large sample. For the convenience of students, the $100(1-\alpha)\%$ confidence interval for $\mu$ is reproduced here that is

$$\bar{X} - Z_{\frac{\alpha}{2}} \frac{\sigma}{\sqrt{n}} < \mu < \bar{X} + Z_{\frac{\alpha}{2}} \frac{\sigma}{\sqrt{n}}$$

### σ Not Known, Population Normal

This is an important case in which the random variable Z cannot be used. When n is small, population is normal with unknown $\sigma$, the random variable $t = \frac{\bar{X}-\mu}{s/\sqrt{n}}$ has the t-distribution with $(n - 1)$ degrees of freedom.

[Figure F1]

Let us mark two points $- t_{\frac{\alpha}{2}(n-1)}$ and $+ t_{\frac{\alpha}{2}(n-1)}$ on the t-scale in the figure. Using tables of the t-distribution, we can find $- t_{\frac{\alpha}{2}(n-1)}$ and $+ t_{\frac{\alpha}{2}(n-1)}$. The area of the t-distribution between $- t_{\frac{\alpha}{2}(n-1)}$ and $+ t_{\frac{\alpha}{2}(n-1)}$ is $(1 - \alpha)$. Thus the probability is $(1 - \alpha)$ that the random variable 't' will fall between $- t_{\frac{\alpha}{2}(n-1)}$ and $+ t_{\frac{\alpha}{2}(n-1)}$. We can write the probability statement as: $P[ - t_{\frac{\alpha}{2}(n-1)} < t < + t_{\frac{\alpha}{2}(n-1)} ] = 1 - \alpha$

Putting the value of 't', we have $P[ - t_{\frac{\alpha}{2}(n-1)} < \frac{\bar{X}-\mu}{s/\sqrt{n}} < t_{\frac{\alpha}{2}(n-1)} ] = 1 - \alpha$

From this inequality within the brackets we can get the confidence interval for $\mu$. Thus $100(1-\alpha)\%$ confidence interval for $\mu$ is

$$\bar{X} - t_{\frac{\alpha}{2}(n-1)} \frac{s}{\sqrt{n}} < \mu < \bar{X} + t_{\frac{\alpha}{2}(n-1)} \frac{s}{\sqrt{n}}$$

### Use of Z or t

Table-1. can be used to decide whether the random variable 'Z' or 't' is to be used in making the confidence interval for $\mu$.

## Figures on this page

### Figure F1 — t-distribution curve with central (1-α) area (right side, section 14.15)
- **Type:** curve-plot
- **Caption/Number:** Figure-4
- **Description:** A symmetric bell-shaped t-distribution curve. The horizontal axis carries tick labels $-t_{\frac{\alpha}{2}(n-1)}$, $t = 0$ (centre, directly below the peak) and $+t_{\frac{\alpha}{2}(n-1)}$; the peak is marked with a vertical line labelled $\mu$. The two tail areas beyond $-t_{\frac{\alpha}{2}(n-1)}$ and $+t_{\frac{\alpha}{2}(n-1)}$ are shaded and each labelled $\alpha/2$; the large central area between the critical values is labelled $(1-\alpha)$.
- **Mathematical meaning:** With $(n-1)$ degrees of freedom, the probability that 't' falls between $\pm t_{\frac{\alpha}{2}(n-1)}$ is $(1-\alpha)$, with $\alpha/2$ in each tail — the basis of the t confidence interval for $\mu$ when $\sigma$ is unknown.
