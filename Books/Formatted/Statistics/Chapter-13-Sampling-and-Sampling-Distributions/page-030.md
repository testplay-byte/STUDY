---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-6
chapter_folder: Chapter-13-Sampling-and-Sampling-Distributions
chapter_number: 13
chapter_title: "Sampling and Sampling Distributions"
page_image: 30
page_printed: 184
section: null
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-13-Sampling-and-Sampling-Distributions/0030.jpg
converted_at: "2026-10-01"
converted_by: "agent-S6e (glm-vision)"
notes: "Offset check: printed p.184 = image 30 + 154 (header folio, top-left). Page opens mid-solution: the 16-differences table of Example 13.24 continues from p.183 and the example completes here; Example 13.25 starts and completes on this page. Tally cells transcribed with escaped pipes; the d=0 tally is a bundle of five (four strokes crossed by a diagonal slash) plus one stroke. Sign spacing preserved as printed: distribution table uses '- 1.0', '+ 0.5' (space after sign), differences table uses '-0.5' (no space). Total row prints bold 'Total' in the Tally column with non-bold totals."
---

# Page 30 — Sampling and Sampling Distributions (Chapter 13)

> 📄 Original scan: [0030.jpg](../../../Raw/Statistics/Chapter-13-Sampling-and-Sampling-Distributions/0030.jpg) · printed page 184

The $4 \times 4 = 16$ possible differences $\hat{p}_1 - \hat{p}_2$ are shown in the following table:

|  | $\hat{p}_1$ |  |  |  |
| :---: | :---: | :---: | :---: | :---: |
| $\hat{p}_2$ | 0 | 0.5 | 0.5 | 1.0 |
| 0 | 0 | 0.5 | 0.5 | 1.0 |
| 0.5 | -0.5 | 0 | 0 | 0.5 |
| 0.5 | -0.5 | 0 | 0 | 0.5 |
| 1.0 | -1.0 | -0.5 | -0.5 | 0 |

The sampling distribution of $\hat{p}_1 - \hat{p}_2$ and its mean and standard deviation are computed below:

| $\hat{p}_1 - \hat{p}_2 = d$ | Tally | f | f( d ) | d f( d ) | $d^2$f( d ) |
| :---: | :---: | :---: | :---: | :---: | :---: |
| - 1.0 | \| | 1 | 1/16 | - 1/16 | 1/16 |
| - 0.5 | \|\|\|\| | 4 | 4/16 | - 2/16 | 1/16 |
| 0 | \|\|\|\| / \| | 6 | 6/16 | 0 | 0 |
| + 0.5 | \|\|\|\| | 4 | 4/16 | + 2/16 | 1/16 |
| + 1.0 | \| | 1 | 1/16 | + 1/16 | 1/16 |
|  | **Total** | 16 | 1 | 0 | 4/16 |

$$\mu_{\hat{p}_1 - \hat{p}_2} = \mu_d = \sum d f(d) = 0$$

$$\sigma^2_{\hat{p}_1 - \hat{p}_2} = \sigma^2_d = \sum d^2 f(d) - [\sum df(d)]^2 = \frac{4}{16} - (0)^2 = \frac{4}{16} = \frac{1}{4} \text{ or } \sigma_{\hat{p}_1 - \hat{p}_2} = \sqrt{\frac{1}{4}} = \frac{1}{2}$$

$$p_1 = \frac{X_1}{N_1} = \frac{1}{2}, q_1 = 1 - p_1 = 1 - \frac{1}{2} = \frac{1}{2}, p_2 = \frac{X_2}{N_2} = \frac{1}{2}, q_2 = 1 - p_2 = 1 - \frac{1}{2} = \frac{1}{2}, p_1 - p_2 = \frac{1}{2} - \frac{1}{2} = 0$$

$$\sqrt{\frac{p_1 q_1}{n_1} + \frac{p_2 q_2}{n_2}} = \sqrt{\frac{(1/2)(1/2)}{2} + \frac{(1/2)(1/2)}{2}} = \sqrt{\frac{1}{8} + \frac{1}{8}} = \sqrt{\frac{2}{8}} = \sqrt{\frac{1}{4}} = \frac{1}{2}$$

Hence (i) $\mu_{\hat{p}_1 - \hat{p}_2} = p_1 - p_2 = 0$ and (ii) $\sigma_{\hat{p}_1 - \hat{p}_2} = \sqrt{\frac{p_1 q_1}{n_1} + \frac{p_2 q_2}{n_2}} = \frac{1}{2}$

**Example 13.25.**

Given the data: $N_1 = 6, n_1 = 3, X_1 = 3, N_2 = 5, n_2 = 2, X_2 = 2$. Find $E(\hat{p}_1 - \hat{p}_2)$ and $Var(\hat{p}_1 - \hat{p}_2)$ if sampling is done: (i) with replacement (ii) without replacement

**Solution:** Here $N_1 = 6, n_1 = 3, X_1 = 3, p_1 = \frac{X_1}{N_1} = \frac{3}{6} = 0.5, q_1 = 1 - p_1 = 0.5,$

$N_2 = 5, n_2 = 2, X_2 = 2, p_2 = \frac{X_2}{N_2} = \frac{2}{5} = 0.4$ and $q_2 = 1 - p_2 = 0.6.$ Therefore

(i) When sampling is done with replacement, then

$E(\hat{p}_1 - \hat{p}_2) = p_1 - p_2 = 0.5 - 0.4 = 0.1$

$Var(\hat{p}_1 - \hat{p}_2) = \frac{p_1 q_1}{n_1} + \frac{p_2 q_2}{n_2} = \frac{(0.5)(0.5)}{3} + \frac{(0.4)(0.6)}{2} = 0.0833 + 0.12 = 0.2033$

(ii) When sampling is done without replacement, then

$E(\hat{p}_1 - \hat{p}_2) = p_1 - p_2 = 0.5 - 0.4 = 0.1$

$Var(\hat{p}_1 - \hat{p}_2) = \frac{p_1 q_1}{n_1} \left(\frac{N_1 - n_1}{N_1 - 1}\right) + \frac{p_2 q_2}{n_2} \left(\frac{N_2 - n_2}{N_2 - 1}\right)$

$= \frac{(0.5)(0.5)}{3} \left(\frac{6 - 3}{6 - 1}\right) + \frac{(0.4)(0.6)}{2} \left(\frac{5 - 2}{5 - 1}\right) = 0.05 + 0.09 = 0.14$
