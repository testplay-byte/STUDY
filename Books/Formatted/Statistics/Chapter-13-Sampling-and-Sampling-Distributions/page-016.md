---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-6
chapter_folder: Chapter-13-Sampling-and-Sampling-Distributions
chapter_number: 13
chapter_title: "Sampling and Sampling Distributions"
page_image: 16
page_printed: 170
section: null
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-13-Sampling-and-Sampling-Distributions/0016.jpg
converted_at: "2026-10-01"
converted_by: "agent-S6b (glm-vision)"
notes: "Offset check: printed p.170 = image 16 + 154 (header folio, top-left). Page opens with relations (iii)-(iv) completing the 13.34 list begun on the previous page; Example 13.10 runs to its concluding Hence line (page ends at a complete sentence). Tally marks in the sampling-distribution table are transcribed as escaped pipes (\\|); a dash is printed in the Tally cell of the Total row. No printed section heading on this page."
---

# Page 16 — Sampling and Sampling Distributions (Chapter 13)

> 📄 Original scan: [0016.jpg](../../../Raw/Statistics/Chapter-13-Sampling-and-Sampling-Distributions/0016.jpg) · printed page 170

(iii) $E(S^2) = \mu_{S^2} = \left(\frac{n-1}{n}\right)\sigma^2$ (with replacement)

(iv) $E(S^2) = \mu_{S^2} = \left(\frac{N}{N-1}\right)\left(\frac{n-1}{n}\right)\sigma^2$ (without replacement)

**Example 13.10.**

A population consists of three numbers 10, 12, 14. Take all possible samples of size two with replacement from this population. Find the mean and the unbiased variance for each sample.

Show that $E(s^2) = \sigma^2$ where $s^2 = \sum(X - \bar{X})^2 / (n - 1)$

**Solution:**

We have population values 10, 12, 14, population size N = 3 and sample size n = 2. Thus, the number of possible samples which can be drawn with replacement is $N^n = 3^2 = 9$.

| Sample No. | Sample Values | Sample Mean $\bar{X} = \sum X/n$ | Sample Variance $s^2 = \sum(X-\bar{X})^2/(n-1)$ |
| :---: | :---: | :---: | :---: |
| 1 | 10, 10 | $\frac{10+10}{2} = 10$ | $\frac{(10-10)^2+(10-10)^2}{2-1} = 0$ |
| 2 | 10, 12 | $\frac{10+12}{2} = 11$ | $\frac{(10-11)^2+(12-11)^2}{2-1} = 2$ |
| 3 | 10, 14 | $\frac{10+14}{2} = 12$ | $\frac{(10-12)^2+(14-12)^2}{2-1} = 8$ |
| 4 | 12, 10 | $\frac{12+10}{2} = 11$ | $\frac{(12-11)^2+(10-11)^2}{2-1} = 2$ |
| 5 | 12, 12 | $\frac{12+12}{2} = 12$ | $\frac{(12-12)^2+(12-12)^2}{2-1} = 0$ |
| 6 | 12, 14 | $\frac{12+14}{2} = 13$ | $\frac{(12-13)^2+(14-13)^2}{2-1} = 2$ |
| 7 | 14, 10 | $\frac{14+10}{2} = 12$ | $\frac{(14-12)^2+(10-12)^2}{2-1} = 8$ |
| 8 | 14, 12 | $\frac{14+12}{2} = 13$ | $\frac{(14-13)^2+(12-13)^2}{2-1} = 2$ |
| 9 | 14, 14 | $\frac{14+14}{2} = 14$ | $\frac{(14-14)^2+(14-14)^2}{2-1} = 0$ |

The sampling distribution of the sample variance $s^2$ and its mean is:

| $s^2$ | Tally | f | $f(s^2)$ | $s^2 f(s^2)$ |
| :---: | :---: | :---: | :---: | :---: |
| 0 | \|\|\| | 3 | 3/9 | 0 |
| 2 | \|\|\|\| | 4 | 4/9 | 8/9 |
| 8 | \|\| | 2 | 2/9 | 16/9 |
| Total | – | 9 | 1 | 24/9 |

$$\begin{aligned}
E(s^2) &= \sum s^2 f(s^2) \\
&= \frac{24}{9} = 2.67
\end{aligned}$$

The variance of the population is:

| X | 10 | 12 | 14 | $\sum X = 36$ |
| :---: | :---: | :---: | :---: | :---: |
| $X^2$ | 100 | 144 | 196 | $\sum X^2 = 440$ |

$$\sigma^2 = \frac{\sum X^2}{N} - \left(\frac{\sum X}{N}\right)^2 = \frac{440}{3} - \left(\frac{36}{3}\right)^2 = 2.67. \text{ Hence } E(s^2) = \sigma^2 = 2.67$$
