---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-6
chapter_folder: Chapter-13-Sampling-and-Sampling-Distributions
chapter_number: 13
chapter_title: "Sampling and Sampling Distributions"
page_image: 28
page_printed: 182
section: null
exercise: null
content_type: mixed
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-13-Sampling-and-Sampling-Distributions/0028.jpg
converted_at: "2026-10-01"
converted_by: "agent-S6e (glm-vision)"
notes: "Offset check: printed p.182 = image 28 + 154 (header folio, top-left). Page opens mid-list with property (iv) of section 13.38 continuing from p.181; no section heading printed on this page. Book misprint preserved: stray superscript tick (prime-like) printed after the subscript 1 in the first N1-1 of the Verify (ii) formula, transcribed as N_1' — plain N_1 - 1 appears in property (ii)(b) on p.181. Sample Proportion cell for Population II row 3 prints just '0' (not '0/2 = 0')."
---

# Page 28 — Sampling and Sampling Distributions (Chapter 13)

> 📄 Original scan: [0028.jpg](../../../Raw/Statistics/Chapter-13-Sampling-and-Sampling-Distributions/0028.jpg) · printed page 182

(iv) The distribution of $\hat{p}_1 - \hat{p}_2$ has the normal distribution when both $n_1$ and $n_2$ are large in size. The difference $(\hat{p}_1 - \hat{p}_2)$ is a random variable with normal distribution and the standard normal variable Z can be written as:

$$Z = \frac{(\hat{p}_1 - \hat{p}_2) - E(\hat{p}_1 - \hat{p}_2)}{S.E(\hat{p}_1 - \hat{p}_2)} = \frac{(\hat{p}_1 - \hat{p}_2) - (p_1 - p_2)}{\sqrt{\frac{p_1q_1}{n_1} + \frac{p_2q_2}{n_2}}}$$

*When $n_1$ and $n_2$ are small in size, the distribution of $\hat{p}_1 - \hat{p}_2$ does not form any standard distribution.*

**Example 13.23.**

Let $\hat{p}_1$ represent the proportion of even numbers in a random sample of size $n_1 = 2$ without replacement from a finite population consisting of values 4, 6, 9. Similarly, let $\hat{p}_2$ represent the proportion of even numbers in a random sample of size $n_2 = 2$ without replacement from another finite population consisting of values 2, 3, 5. Form a sampling distribution of $\hat{p}_1 - \hat{p}_2$. Verify that:

(i) $E(\hat{p}_1 - \hat{p}_2) = p_1 - p_2$

(ii) $Var (\hat{p}_1 - \hat{p}_2) = \frac{p_1 q_1}{n_1} \left( \frac{N_1 - n_1}{N_1' - 1} \right) + \frac{p_2 q_2}{n_2} \left( \frac{N_2 - n_2}{N_2 - 1} \right)$

**Solution:**

We have population I: 4, 6, 9  
Population size $N_1 = 3$  
Sample size $n_1 = 2$

The number of possible samples which can be drawn without replacement is $\binom{N_1}{n_1} = \binom{3}{2} = 3$.

Population II: 2, 3, 5  
Population size $N_2 = 3$  
Sample size $n_2 = 2$

The number of possible samples which can be drawn without replacement is $\binom{N_2}{n_2} = \binom{3}{2} = 3$.

| From Population I | | | From Population II | | |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Sample No.** | **Sample Values** | **Sample Proportion ($\hat{p}_1$)** | **Sample No.** | **Sample Values** | **Sample Proportion ($\hat{p}_2$)** |
| 1 | 4, 6 | 2/2 = 1.0 | 1 | 2, 3 | 1/2 = 0.5 |
| 2 | 4, 9 | 1/2 = 0.5 | 2 | 2, 5 | 1/2 = 0.5 |
| 3 | 6, 9 | 1/2 = 0.5 | 3 | 3, 5 | 0 |

The $3 \times 3 = 9$ possible differences $\hat{p}_1 - \hat{p}_2$ are shown in the following table:

|  | $\hat{p}_1$ | | |
| :---: | :---: | :---: | :---: |
| **$\hat{p}_2$** | **1.0** | **0.5** | **0.5** |
| 0.5 | 0.5 | 0 | 0 |
| 0.5 | 0.5 | 0 | 0 |
| 0 | 1.0 | 0.5 | 0.5 |

The sampling distribution of differences between sample proportions $\hat{p}_1 - \hat{p}_2$ and its mean and variance are computed below:

| $\hat{p}_1 - \hat{p}_2 = d$ | Tally | f | f(d) | df(d) | $d^2f(d)$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 0 | \|\|\|\| | 4 | 4/9 | 0 | 0 |
| 0.5 | \|\|\|\| | 4 | 4/9 | 2/9 | 1/9 |
| 1.0 | \| | 1 | 1/9 | 1/9 | 1/9 |
| **Total** | | **9** | **1** | **3/9** | **2/9** |
