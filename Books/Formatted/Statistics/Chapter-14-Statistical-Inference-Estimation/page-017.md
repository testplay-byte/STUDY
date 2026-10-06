---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-7
chapter_folder: Chapter-14-Statistical-Inference-Estimation
chapter_number: 14
chapter_title: "Statistical Inference Estimation"
page_image: 17
page_printed: 219
section: 14.18 CONFIDENCE INTERVAL FOR THE DIFFERENCE BETWEEN TWO POPULATION MEANS-DEPENDENT SAMPLES (PAIRED OBSERVATIONS)
exercise: null
content_type: theory
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-14-Statistical-Inference-Estimation/0017.jpg
converted_at: "2026-10-06"
converted_by: "agent-21c (glm-vision)"
notes: "Offset check: printed p.219 = image 17 + 202 (header folio, top-right; odd page). Page opens with Example 14.17 (complete) then section 14.18 heading; page ends mid-sentence 'The distribution of' — continues on next page. No figures."
---

# Page 17 — Statistical Inference Estimation (Chapter 14)

> 📄 Original scan: [0017.jpg](../../../Raw/Statistics/Chapter-14-Statistical-Inference-Estimation/0017.jpg) · printed page 219

**Example 14.17.**

Two independent random samples of size $n_1 = 16$ and $n_2 = 9$, from two normal populations gave $\sum X_1 = 960$, $\sum X_1^2 = 58140$, $\sum X_2 = 450$ and $\sum X_2^2 = 22700$. Find a $90\%$ confidence interval for $\mu_1 - \mu_2$, assume the populations to be approximately normally distributed with equal variances.

**Solution:** A $100(1 - \alpha)\%$ confidence interval for $\mu_1 - \mu_2$ is

$$ (\bar{X}_1 - \bar{X}_2) - t_{\frac{\alpha}{2}(v)} s_p \sqrt{\frac{1}{n_1} + \frac{1}{n_2}} < \mu_1 - \mu_2 < (\bar{X}_1 - \bar{X}_2) + t_{\frac{\alpha}{2}(v)} s_p \sqrt{\frac{1}{n_1} + \frac{1}{n_2}} $$

Here, $n_1 = 16, \sum X_1 = 960, \sum X_1^2 = 58140, \bar{X}_1 = \frac{\sum X_1}{n_1} = \frac{960}{16} = 60$

$n_2 = 9$, $\sum X_2 = 450$, $\sum X_2^2 = 22700$, $\bar{X}_2 = \frac{\sum X_2}{n_2} = \frac{450}{9} = 50$

$$ s_1^2 = \frac{1}{n_1 - 1}\left[\sum X_1^2 - \frac{(\sum X_1)^2}{n_1}\right] = \frac{1}{16 - 1}\left[58140 - \frac{(960)^2}{16}\right] = \frac{540}{15} = 36 $$

$$ s_2^2 = \frac{1}{n_2 - 1}\left[\sum X_2^2 - \frac{(\sum X_2)^2}{n_2}\right] = \frac{1}{9 - 1}\left[22700 - \frac{(450)^2}{9}\right] = \frac{200}{8} = 25 $$

$$ s_p^2 = \frac{(n_1 - 1)s_1^2 + (n_2 - 1)s_2^2}{n_1 + n_2 - 2} = \frac{(16 - 1)36 + (9 - 1)25}{16 + 9 - 2} = \frac{740}{23} = 32.1739, $$

$s_p = 5.67$, $1 - \alpha = 0.90$ or $\alpha = 0.10$ and $\alpha/2 = 0.05$.

$v = n_1 + n_2 - 2 = 16 + 9 - 2 = 23$.

From the t-table, we have $t_{\frac{\alpha}{2}(v)} = t_{0.05(23)} = 1.714$.

Hence the $90\%$ confidence interval for $\mu_1 - \mu_2$ is

$$\begin{aligned}
& (60 - 50) - 1.714(5.67)\sqrt{\frac{1}{16} + \frac{1}{9}} < \mu_1 - \mu_2 < (60 - 50) + 1.714(5.67)\sqrt{\frac{1}{16} + \frac{1}{9}} \\
& \quad 10 - 4.05 < \mu_1 - \mu_2 < 10 + 4.05 \\
& \quad 5.95 < \mu_1 - \mu_2 < 14.05
\end{aligned}$$

## 14.18 CONFIDENCE INTERVAL FOR THE DIFFERENCE BETWEEN TWO POPULATION MEANS-DEPENDENT SAMPLES (PAIRED OBSERVATIONS)

Suppose we give a test to a sample of students and the marks obtained by them are denoted by X where X takes the values $X_1, X_2, X_3, ..., X_n$. The students are given some extra coaching and again they are given the test of the same difficulty and the marks obtained by them are denoted by Y where Y takes the values $Y_1, Y_2, Y_3, ..., Y_n$. The marks obtained in the first test are called 'before' and the marks obtained in the second test are called 'after' observations. These two sets of marks are in pairs like $(X_1, Y_1), (X_2, Y_2), (X_3, Y_3), ..., (X_n, Y_n)$ and are called paired observations. Obviously the Y values depend upon the X values, hence the samples are dependent. Let us write the paired observations in the following form and calculate the difference $d_i$ for each pair.

| $X_i$ | $X_1$ | $X_2$ | $X_3$ | ... | $X_n$ |
| :---: | :---: | :---: | :---: | :-: | :---: |
| $Y_i$ | $Y_1$ | $Y_2$ | $Y_3$ | ... | $Y_n$ |
| $d_i = X_i - Y_i$ | $X_1 - Y_1 = d_1$ | $X_2 - Y_2 = d_2$ | $X_3 - Y_3 = d_3$ | ... | $X_n - Y_n = d_n$ |

The mean of 'd' values is denoted by $\bar{d}$ where $\bar{d} = \sum d_i / n$. We can think of a population of $X_i$ and $Y_i$ observations with means $\mu_1$ and $\mu_2$ and the population of random differences $d_i$ with mean $\mu_d$ and standard error $\sigma_d$. It is required to calculate the confidence interval for the mean $\mu_d$. The distribution of
