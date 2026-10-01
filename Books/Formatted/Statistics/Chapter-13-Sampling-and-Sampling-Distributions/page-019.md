---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-6
chapter_folder: Chapter-13-Sampling-and-Sampling-Distributions
chapter_number: 13
chapter_title: "Sampling and Sampling Distributions"
page_image: 19
page_printed: 173
section: null
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-13-Sampling-and-Sampling-Distributions/0019.jpg
converted_at: "2026-10-01"
converted_by: "agent-S6c (glm-vision)"
notes: "Offset check: printed p.173 = image 19 + 154 (header folio, top-right). Example 13.13 begins here and continues on the next page (page ends right after the differences table). The side-by-side Population I / Population II comparison is transcribed as a 2-column GFM table; sample tables carry a printed two-tier header (From Population I / II spanning sub-columns). No printed section heading on this page."
---

# Page 19 — Sampling and Sampling Distributions (Chapter 13)

> 📄 Original scan: [0019.jpg](../../../Raw/Statistics/Chapter-13-Sampling-and-Sampling-Distributions/0019.jpg) · printed page 173

**Example 13.13.**

Draw all possible random samples of size $n_1 = 2$ without replacement from the finite population 2, 2, 6. Similarly, draw all possible random samples of size $n_2 = 2$ without replacement from the population 1, 1, 2, 4.

(i) Find the possible differences between the sample means of the two populations.

(ii) Construct the sampling distribution of $\bar{X}_1 - \bar{X}_2$ and compute its mean and variance.

(iii) Verify that: $E(\bar{X}_1 - \bar{X}_2) = \mu_1 - \mu_2$ and $Var(\bar{X}_1 - \bar{X}_2) = \frac{\sigma_1^2}{n_1}\left( \frac{N_1 - n_1}{N_1 - 1} \right) + \frac{\sigma_2^2}{n_2}\left( \frac{N_2 - n_2}{N_2 - 1} \right)$

**Solution:**

| Population I: 2, 2, 6 | Population II: 1, 1, 2, 4 |
| :--- | :--- |
| Population size $N_1 = 3$ | Population size $N_2 = 4$ |
| Sample size $n_1 = 2$ | Sample size $n_2 = 2$ |
| The number of possible samples which can be drawn without replacement $= \binom{N_1}{n_1} = \binom{3}{2} = 3$ | The number of possible samples which can be drawn without replacement $= \binom{N_2}{n_2} = \binom{4}{2} = 6$ |

| From Population I | | | From Population II | | |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Sample No.** | **Sample Values** | **Sample Mean ($\bar{X}_1$)** | **Sample No.** | **Sample Values** | **Sample Mean ($\bar{X}_2$)** |
| 1 | 2, 2 | 2 | 1 | 1, 1 | 1.0 |
| 2 | 2, 6 | 4 | 2 | 1, 2 | 1.5 |
| 3 | 2, 6 | 4 | 3 | 1, 4 | 2.5 |
| | | | 4 | 1, 2 | 1.5 |
| | | | 5 | 1, 4 | 2.5 |
| | | | 6 | 2, 4 | 3.0 |

(i) The $3 \times 6 = 18$ possible differences $\bar{X}_1 - \bar{X}_2$ are shown in the following table.

|  | $\bar{X}_1$ |  |  |
| :---: | :---: | :---: | :---: |
| $\bar{X}_2$ | **2** | **4** | **4** |
| 1.0 | 1.0 | 3.0 | 3.0 |
| 1.5 | 0.5 | 2.5 | 2.5 |
| 2.5 | $-0.5$ | 1.5 | 1.5 |
| 1.5 | 0.5 | 2.5 | 2.5 |
| 2.5 | $-0.5$ | 1.5 | 1.5 |
| 3.0 | $-1.0$ | 1.0 | 1.0 |
