---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-6
chapter_folder: Chapter-13-Sampling-and-Sampling-Distributions
chapter_number: 13
chapter_title: "Sampling and Sampling Distributions"
page_image: 20
page_printed: 174
section: null
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-13-Sampling-and-Sampling-Distributions/0020.jpg
converted_at: "2026-10-01"
converted_by: "agent-S6c (glm-vision)"
notes: "Offset check: printed p.174 = image 20 + 154 (header folio, top-left). Page opens mid-Example 13.13 at item (ii) and ends mid-Solution of Example 13.14 (setup only). Book misprint preserved verbatim: in the sampling distribution of d the first two d values are printed '1.0' and '0.5' without minus signs although their d f(d) cells print -1/18 and -1/18 (and Total 24/18 implies the negatives); row 3 prints '+ 0.5'. Hand-written draft after converter timeouts (2 failed runs)."
---

# Page 20 — Sampling and Sampling Distributions (Chapter 13)

> 📄 Original scan: [0020.jpg](../../../Raw/Statistics/Chapter-13-Sampling-and-Sampling-Distributions/0020.jpg) · printed page 174

(ii) The sampling distribution of differences between sample means $\bar{X}_1 - \bar{X}_2$ and its mean and variance are computed below.

| $\bar{X}_1 - \bar{X}_2 = d$ | f | f(d) | d f(d) | $d^2$ f(d) |
| :---: | :---: | :---: | :---: | :---: |
| 1.0 | 1 | 1/18 | $- 1/18$ | 1.0/18 |
| 0.5 | 2 | 2/18 | $- 1/18$ | 0.5/18 |
| + 0.5 | 2 | 2/18 | $+ 1/18$ | 0.5/18 |
| 1.0 | 3 | 3/18 | $+ 3/18$ | 3.0/18 |
| 1.5 | 4 | 4/18 | $+ 6/18$ | 9.0/18 |
| 2.5 | 4 | 4/18 | $+ 10/18$ | 25.0/18 |
| 3.0 | 2 | 2/18 | $+ 6/18$ | 18.0/18 |
| **Total** | **18** | **1** | **24/18** | **57/18** |

$$E(\bar{X}_1 - \bar{X}_2) = E(d) = \sum d f(d) = \frac{24}{18} = \frac{4}{3}$$

$$Var(\bar{X}_1 - \bar{X}_2) = Var(d) = \sum d^2 f(d) - \left[ \sum d f(d) \right]^2 = \frac{57}{18} - \left( \frac{4}{3} \right)^2 = \frac{57-32}{18} = \frac{25}{18}$$

(iii) The mean and variance of the first population are:

| $X_1$ | 2 | 2 | 6 | $\sum X_1 = 10$ |
| :---: | :---: | :---: | :---: | :---: |
| $X_1^2$ | 4 | 4 | 36 | $\sum X_1^2 = 44$ |

$$\mu_1 = \frac{\sum X_1}{N_1} = \frac{10}{3} \text{ and } \sigma_1^2 = \frac{\sum X_1^2}{N_1} - \left( \frac{\sum X_1}{N_1} \right)^2 = \frac{44}{3} - \left( \frac{10}{3} \right)^2 = \frac{44}{3} - \frac{100}{9} = \frac{132-100}{9} = \frac{32}{9}$$

The mean and variance of the second population are:

| $X_2$ | 1 | 1 | 2 | 4 | $\sum X_2 = 8$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| $X_2^2$ | 1 | 1 | 4 | 16 | $\sum X_2^2 = 22$ |

$$\mu_2 = \frac{\sum X_2}{N_2} = \frac{8}{4} = 2 \text{ and } \sigma_2^2 = \frac{\sum X_2^2}{N_2} - \left( \frac{\sum X_2}{N_2} \right)^2 = \frac{22}{4} - \left( \frac{8}{4} \right)^2 = \frac{22}{4} - 4 = \frac{22-16}{4} = \frac{3}{2}$$

$$\mu_1 - \mu_2 = \frac{10}{3} - 2 = \frac{10-6}{3} = \frac{4}{3}$$

$$\frac{\sigma_1^2}{n_1}\left( \frac{N_1-n_1}{N_1-1} \right) + \frac{\sigma_2^2}{n_2}\left( \frac{N_2-n_2}{N_2-1} \right) = \frac{32}{18}\left( \frac{3-2}{3-1} \right) + \frac{3}{4}\left( \frac{4-2}{4-1} \right) = \frac{16}{18} + \frac{1}{2} = \frac{16+9}{18} = \frac{25}{18}$$

Hence $E(\bar{X}_1 - \bar{X}_2) = \mu_1 - \mu_2 = \frac{4}{3}$ and $Var(\bar{X}_1 - \bar{X}_2) = \frac{\sigma_1^2}{n_1}\left( \frac{N_1-n_1}{N_1-1} \right) + \frac{\sigma_2^2}{n_2}\left( \frac{N_2-n_2}{N_2-1} \right) = \frac{25}{18}$

**Example 13.14.**

Draw all possible samples of size $n_1 = 2$ with replacement from the finite population 6, 8. Similarly draw all possible samples of size $n_2 = 2$ with replacement from the finite population 2, 4.

(a) Find the sample means in each case and the possible differences between the sample means.

(b) Form a sampling distribution of $\bar{X}_1 - \bar{X}_2$ and compute its mean and standard deviation.

(c) Verify that: (i) $\mu_{\bar{X}_1 - \bar{X}_2} = \mu_1 - \mu_2$ (ii) $\sigma_{\bar{X}_1 - \bar{X}_2} = \sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}}$

**Solution:**

| We have population I : 6, 8 | Population II: 2, 4 |
| :--- | :--- |
| Population size $N_1 = 2$ | Population size $N_2 = 2$ |
| Sample size $n_1 = 2$ | Sample size $n_2 = 2$ |
