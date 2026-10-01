---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-6
chapter_folder: Chapter-13-Sampling-and-Sampling-Distributions
chapter_number: 13
chapter_title: "Sampling and Sampling Distributions"
page_image: 25
page_printed: 179
section: null
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-13-Sampling-and-Sampling-Distributions/0025.jpg
converted_at: "2026-10-01"
converted_by: "agent-S6d (glm-vision)"
notes: "Offset check: printed p.179 = image 25 + 154 (header folio, top-right). Page opens mid-Solution of Example 13.18 with its sampling-distribution table and completes that example; Example 13.19 starts here and its 15-sample table completes, page ends with that table (distribution table follows next page). Book typo preserved verbatim: 'Where X represent the vowel letters in the population.' (missing 's'). The Total row of the distribution table is not printed in bold on this page."
---

# Page 25 — Sampling and Sampling Distributions (Chapter 13)

> 📄 Original scan: [0025.jpg](../../../Raw/Statistics/Chapter-13-Sampling-and-Sampling-Distributions/0025.jpg) · printed page 179

The sampling distribution of sample proportion $\hat{p}$ and its mean and variance are:

| $\hat{p}$ | f | f($\hat{p}$) | $\hat{p}$f($\hat{p}$) | $\hat{p}^2$f($\hat{p}$) |
| :---: | :---: | :---: | :---: | :---: |
| 0 | 10 | 10/21 | 0 | 0 |
| 1/2 | 10 | 10/21 | 10/42 | 10/84 |
| 2/2 | 1 | 1/21 | 2/42 | 4/84 |
| Total | 21 | 1 | 12/42 | 14/84 |

$$\mu_{\hat{p}} = \sum \hat{p} f(\hat{p}) = \frac{12}{42} = \frac{2}{7}$$

$$\sigma_{\hat{p}}^2 = \sum \hat{p}^2 f(\hat{p}) - [\sum \hat{p} f(\hat{p})]^2 = \frac{14}{84} - \left(\frac{2}{7}\right)^2 = \frac{14}{84} - \frac{4}{49} = \frac{98-48}{588} = \frac{50}{588} = \frac{25}{294}$$

Population proportion $= p = \frac{X}{N} = \frac{2}{7}$ and $q = 1 - p = \frac{5}{7}$.

Where $X$ represent the vowel letters in the population.

$$\frac{pq}{n}\left(\frac{N-n}{N-1}\right) = \frac{\left(\frac{2}{7}\right)\left(\frac{5}{7}\right)}{2}\left(\frac{7-2}{7-1}\right) = \frac{10}{98}\left(\frac{5}{6}\right) = \frac{50}{588} = \frac{25}{294}$$

Hence $\mu_{\hat{p}} = p = \frac{2}{7}$ and $\sigma_{\hat{p}}^2 = \frac{pq}{n}\left(\frac{N-n}{N-1}\right) = \frac{25}{294}$

**Example 13.19.**

A finite population contains 4 smokers denoted by $S_1, S_2, S_3$ and $S_4$ and 2 non-smokers denoted by $N_1$ and $N_2$. Draw all possible random samples of size 2 without replacement from the population and calculate the proportion of smokers $\hat{p}$ in each sample. Write the probability distribution (sampling distribution) of $\hat{p}$ and find the following probabilities:

(i) $\hat{p}$ is more than $p$ (ii) $\hat{p}$ is equal to $p$ (iii) $\hat{p} = \frac{1}{2}$ (iv) that both are smokers.

**Solution:** We have population values $S_1, S_2, S_3, S_4, N_1, N_2$, population size $N = 6$ and sample size $n = 2$. Thus, the number of possible samples which can be drawn without replacement is $\binom{N}{n} = \binom{6}{2} = 15$.

| Sample No. | Sample Values | Sample proportion ($\hat{p}$) | Sample No. | Sample Values | Sample proportion ($\hat{p}$) |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | $S_1, S_2$ | 2/2 | 9 | $S_2, N_2$ | 1/2 |
| 2 | $S_1, S_3$ | 2/2 | 10 | $S_3, S_4$ | 2/2 |
| 3 | $S_1, S_4$ | 2/2 | 11 | $S_3, N_1$ | 1/2 |
| 4 | $S_1, N_1$ | 1/2 | 12 | $S_3, N_2$ | 1/2 |
| 5 | $S_1, N_2$ | 1/2 | 13 | $S_4, N_1$ | 1/2 |
| 6 | $S_2, S_3$ | 2/2 | 14 | $S_4, N_2$ | 1/2 |
| 7 | $S_2, S_4$ | 2/2 | 15 | $N_1, N_2$ | 0 |
| 8 | $S_2, N_1$ | 1/2 | | | |
