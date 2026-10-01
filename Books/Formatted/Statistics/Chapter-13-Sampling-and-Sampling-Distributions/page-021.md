---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-6
chapter_folder: Chapter-13-Sampling-and-Sampling-Distributions
chapter_number: 13
chapter_title: "Sampling and Sampling Distributions"
page_image: 21
page_printed: 175
section: null
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-13-Sampling-and-Sampling-Distributions/0021.jpg
converted_at: "2026-10-01"
converted_by: "agent-S6d (glm-vision)"
notes: "Offset check: printed p.175 = image 21 + 154 (header folio, top-right). Page opens mid-solution of Example 13.14 (started on previous page; no 'Example' label printed here) and the example completes on this page. Opening pair of sentences printed side-by-side in two columns — rendered as a 2-column table. Differences table has a diagonal split corner cell (X̄1 top-right, X̄2 bottom-left), rendered as header 'X̄2 backslash X̄1'. Tally cells transcribed with escaped pipes; the d=4 tally is four strokes crossed by a diagonal slash (bundle of five) plus one stroke."
---

# Page 21 — Sampling and Sampling Distributions (Chapter 13)

> 📄 Original scan: [0021.jpg](../../../Raw/Statistics/Chapter-13-Sampling-and-Sampling-Distributions/0021.jpg) · printed page 175

| The number of possible samples which can be drawn with replacement is $N_1^{n_1} = 2^2 = 4$. | The number of possible samples which can be drawn with replacement is $N_2^{n_2} = 2^2 = 4$. |
| :--- | :--- |

(a)

| From Population I | | | From Population II | | |
| :---: | :---: | :---: | :---: | :---: | :---: |
| Sample No. | Sample Values | Sample Mean ($\bar{X}_1$) | Sample No. | Sample Values | Sample Mean ($\bar{X}_2$) |
| 1 | 6, 6 | 6 | 1 | 2, 2 | 2 |
| 2 | 6, 8 | 7 | 2 | 2, 4 | 3 |
| 3 | 8, 6 | 7 | 3 | 4, 2 | 3 |
| 4 | 8, 8 | 8 | 4 | 4, 4 | 4 |

The $4 \times 4 = 16$ possible differences $\bar{X}_1 - \bar{X}_2$ are shown in the following table:

| $\bar{X}_2 \backslash \bar{X}_1$ | 6 | 7 | 7 | 8 |
| :---: | :---: | :---: | :---: | :---: |
| 2 | 4 | 5 | 5 | 6 |
| 3 | 3 | 4 | 4 | 5 |
| 3 | 3 | 4 | 4 | 5 |
| 4 | 2 | 3 | 3 | 4 |

(b) The sampling distribution of $\bar{X}_1 - \bar{X}_2$ and its mean and standard deviation are computed below:

| $\bar{X}_1 - \bar{X}_2 = d$ | Tally | f | f(d) | d f(d) | $d^2$ f(d) |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 2 | \| | 1 | 1/16 | 2/16 | 4/16 |
| 3 | \|\|\|\| | 4 | 4/16 | 12/16 | 36/16 |
| 4 | \|\|\|\| / \| | 6 | 6/16 | 24/16 | 96/16 |
| 5 | \|\|\|\| | 4 | 4/16 | 20/16 | 100/16 |
| 6 | \| | 1 | 1/16 | 6/16 | 36/16 |
| **Total** | | **16** | **1** | **64/16 = 4** | **272/16 = 17** |

$$E(\bar{X}_1 - \bar{X}_2) = \mu_{\bar{X}_1 - \bar{X}_2} = \mu_d = \sum d f(d) = 4$$

$$S.E. (\bar{X}_1 - \bar{X}_2) = \sigma_{\bar{X}_1 - \bar{X}_2} = \sigma_d = \sqrt{\sum d^2 f(d) - [\sum d f(d)]^2} = \sqrt{17 - (4)^2} = 1$$

(c)

$$\mu_1 = \frac{\sum X_1}{N_1} = \frac{6+8}{2} = \frac{14}{2} = 7 \text{ and } \sigma_1^2 = \frac{\sum(X_1-\mu_1)^2}{N_1} = \frac{(6-7)^2+(8-7)^2}{2} = \frac{1+1}{2} = \frac{2}{2} = 1$$

$$\mu_2 = \frac{\sum X_2}{N_2} = \frac{2+4}{2} = \frac{6}{2} = 3 \text{ and } \sigma_2^2 = \frac{\sum(X_2-\mu_2)^2}{N_2} = \frac{(2-3)^2+(4-3)^2}{2} = \frac{1+1}{2} = \frac{2}{2} = 1$$

$$\mu_1 - \mu_2 = 7 - 3 = 4 \text{ and } \sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}} = \sqrt{\frac{(1)^2}{2} + \frac{(1)^2}{2}} = \sqrt{1} = 1$$

Hence (i) $\mu_{\bar{X}_1 - \bar{X}_2} = \mu_1 - \mu_2 = 4$ and (ii) $\sigma_{\bar{X}_1 - \bar{X}_2} = \sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}} = 1$
