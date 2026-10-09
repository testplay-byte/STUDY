---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-8
chapter_folder: Chapter-15-Statistical-Inference-Testing-of-Hypotheses
chapter_number: 15
chapter_title: "Statistical Inference Testing of Hypotheses"
page_image: 5
page_printed: 243
section: 15.15 RELATION BETWEEN α and β
exercise: null
content_type: theory
has_figures: true
figures_count: 1
source_image: ../../../Raw/Statistics/Chapter-15-Statistical-Inference-Testing-of-Hypotheses/0005.jpg
converted_at: "2026-10-06"
converted_by: "agent-23a (glm-vision)"
notes: "Offset check: printed p.243 = image 5 + 238 (header folio, top-right; odd page). Page opens mid-sentence ('difference between θ0 and θ1 is very large...') — continuation of 15.14 from p.242. Book misprint preserved: unnumbered heading printed 'β ( BETTA )' (for BETA). Body line printed 'Figure-4. has two sampling distributions...' — stray period after Figure-4 in body text (caption 'Figure-4' is a separate centred line under the diagram, zoom-verified). Diagram: two overlapping curves labelled 'Under H0' / 'Under H1', areas (1-α), α, β, (1-β), axis points μ0, X̄ (critical value), μ1. | TYPO-CORRECTION PASS (2026-10-06, user mandate): unambiguous surface typo(s) corrected in the body per correction policy v4.4 — printed forms remain documented earlier in this note and itemised in docs/tracking/CORRECTIONS-LOG.md."
---

# Page 5 — Statistical Inference Testing of Hypotheses (Chapter 15)

> 📄 Original scan: [0005.jpg](../../../Raw/Statistics/Chapter-15-Statistical-Inference-Testing-of-Hypotheses/0005.jpg) · printed page 243

difference between $\theta_0$ and $\theta_1$ is very large then the chance is very small that $\theta_0$(wrong) will be accepted. In this case the true sampling distribution of the statistic will be quite away from the sampling distribution under $H_0$. There will be hardly any test-statistic which will fall in the acceptance region of $H_0$. When the true distribution of the test-statistic overlaps the acceptance region of $H_0$, then $H_0$ is accepted though $H_0$ is false. If the difference between $\theta_0$ and $\theta_1$ is small, then there is a high chance of accepting $H_0$. This action will be an error of Type II.

## β ( BETA )

The probability of making *Type II error* is denoted by β. Type II error is committed when $H_0$ is accepted while $H_1$ is true. The value of β can be calculated only when we happen to know the true value of the population parameter being tested.

## 15.15 RELATION BETWEEN α and β

Suppose we have to test $H_0$: $\mu = \mu_0$ against the alternative $H_1$: $\mu > \mu_0$. A random sample of size n is selected from the population and the sample mean $\bar{X}$ is calculated. The sample size n is large and therefore the sampling distribution of $\bar{X}$ is normal with mean $\mu$. To start with we assume that $H_0$: $\mu = \mu_0$ is true and $\bar{X}$ has the distribution as shown on left side of the Figure-4.

[Figure F1]

Figure-4 has two sampling distributions one is on the left side and the other is on the right side. When the null hypothesis $H_0$: $\mu = \mu_0$ is being tested, there are the following four possibilities.

(i) $H_0$ is true and $\bar{X}$ falls in the area marked $(1 - \alpha)$ in the Figure-4. The hypothesis $H_0$ is accepted and this is called correct decision. Probability of this correct decision is $(1 - \alpha)$. We may or may not make this decision.

(ii) $H_0$ is true and $\bar{X}$ falls in the area marked $\alpha$. This is the area of the distribution on the left side. Now $H_0$ is true but it will be rejected because $\bar{X}$ falls in the rejection region. This is an error of Type I and this error will be committed with the probability of $\alpha$. We do not know whether we have committed $\alpha$ error or not.

(iii) $H_0$ is false. The true value of $\mu$ is say $\mu_1$ and the true distribution of $\bar{X}$ is the distribution on the right side in Figure-4. Now suppose $\bar{X}$ falls in the area marked $(1 - \beta)$. This is outside the acceptance region of the distribution on the left side. Thus $H_0$: $\mu = \mu_0$ is rejected and the probability of this action is $(1 - \beta)$. It is called correct decision when $H_0$ is false. In fact, $\bar{X}$ belongs to some distribution. When we take a hypothesis $H_0$, this is an assumption about the mean of the distribution of $\bar{X}$. If true distribution of $\bar{X}$ is on the right side, then some area of this distribution is falling on the acceptance region of the hypothetical distribution on the left side. This area is marked as β.

(iv) $H_0$ is false and the value of $\bar{X}$ falls in the area marked β. In this case $H_0$ is accepted because $\bar{X}$ has fallen in the acceptance region of the first distribution. Thus $H_0$ being false may be accepted with probability of β.

## Figures on this page

### Figure F1 — Two sampling distributions under H₀ and H₁ (center of page)
- **Type:** curve-plot
- **Caption/Number:** Figure-4 (centred caption line under the diagram)
- **Description:** Two overlapping normal curves on a single horizontal axis. Left curve labelled "Under H₀" with mean $\mu_0$ marked under its peak; area to the left of the critical-value line labelled $(1 - \alpha)$ and the right-tail area (right of the critical value) shaded and labelled $\alpha$. Right curve labelled "Under H₁" with mean $\mu_1$ under its peak; the area of this curve lying left of the critical value (overlapping the left curve's acceptance region) shaded and labelled $\beta$, the remaining area labelled $(1 - \beta)$. The critical value on the axis is labelled $\bar{X}$, with $\mu_0$ and $\mu_1$ at the two peaks.
- **Mathematical meaning:** Shows the relation between Type I error ($\alpha$), Type II error ($\beta$) and the power $(1-\beta)$ via the overlap of the sampling distributions under $H_0$ and $H_1$.
