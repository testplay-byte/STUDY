---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-4
chapter_folder: Chapter-11-Binomial-and-Hypergeometric-Distributions
chapter_number: 11
chapter_title: "Binomial and Hypergeometric Distributions"
page_image: 17
page_printed: 111
section: null
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-11-Binomial-and-Hypergeometric-Distributions/0017.jpg
converted_at: "2026-10-01"
converted_by: "agent-S4c (glm-vision)"
notes: "Offset check: printed p.111 = image 17 + 94 (header folio). Opens mid-solution: first line + table complete Example 11.22 from p.110. P(X = 0), P(X = 1), P(X = 2) calculations in Example 11.23 are printed side-by-side in two columns separated by a vertical rule (P(X = 1) in the right column), transcribed here sequentially in reading order. A stray printed bullet \"•\" appears after 4/15 in the last data row of the second table (preserved verbatim, likely a print speck)."
---

# Page 17 — Binomial and Hypergeometric Distributions (Chapter 11)

> 📄 Original scan: [0017.jpg](../../../Raw/Statistics/Chapter-11-Binomial-and-Hypergeometric-Distributions/0017.jpg) · printed page 111

The probability distribution by hypergeometric experiment for the number of men in tabular form is given as follows:

| x | 1 | 2 | 3 | Total |
| :---: | :---: | :---: | :---: | :---: |
| p( x ) | 4/20 | 12/20 | 4/20 | 1 |

**Example 11.23.**

A box contains ten items, seven of which are good and three are defective. Two items are selected (without replacement); compute the probability distribution for the number of defectives in the sample of two. Compute the mean and variance of this probability distribution. Is this mean equal to $\frac{nk}{N}$ and variance $\frac{nk(N-k)(N-n)}{N^2(N-1)}$.

**Solution:** The hypergeometric distribution is

$$P(X = x) = \frac{\binom{k}{x} \binom{N - k}{n - x}}{\binom{N}{n}} \text{ for } x = 0, 1, 2, 3, \ldots, n \text{ or } k \text{ (whichever is less)}$$

Here, $N=10$, $n=2$, $k=3$, $x=$ number of defective items, then the possible values of $x$ are 0, 1 and 2.
Therefore

$$P(X = x) = \frac{\binom{3}{x} \binom{10 - 3}{2 - x}}{\binom{10}{2}} \text{ for } x = 0, 1, 2.$$

$$\begin{aligned}
P(X = 0) &= \frac{\binom{3}{0}\binom{10 - 3}{2 - 0}}{\binom{10}{2}} = \frac{\binom{3}{0}\binom{7}{2}}{\binom{10}{2}} = \frac{7}{15} \\
P(X = 1) &= \frac{\binom{3}{1}\binom{10 - 3}{2 - 1}}{\binom{10}{2}} = \frac{\binom{3}{1}\binom{7}{1}}{\binom{10}{2}} = \frac{7}{15} \\
P(X = 2) &= \frac{\binom{3}{2}\binom{10 - 3}{2 - 2}}{\binom{10}{2}} = \frac{\binom{3}{2}\binom{7}{0}}{\binom{10}{2}} = \frac{1}{15}
\end{aligned}$$

Thus the probability distribution in tabular form for the computation of mean and variance of X is given as follows:

| x | P( X = x ) = p( x ) | x p( x ) | x²p( x ) |
| :---: | :---: | :---: | :---: |
| 0 | 7/15 | 0 | 0 |
| 1 | 7/15 | 7/15 | 7/15 |
| 2 | 1/15 | 2/15 | 4/15 • |
| | $\sum p(x)=1$ | $\sum x p(x) = 9/15$ | $\sum x^2 p(x) = 11/15$ |

$$Mean = E(X) = \sum x p(x) = \frac{9}{15} = 0.6$$

$$Var (X) = \sigma^2 = \sum x^2 p(x) - [\sum x p(x)]^2 = \frac{11}{15} - (\frac{9}{15})^2 = \frac{28}{75} = 0.3733$$

$$\frac{nk}{N} = \frac{(2)(3)}{10} = 0.6 \quad \text{and} \quad \frac{nk(N-k)(N-n)}{N^2(N-1)} = \frac{2(3)(7)(8)}{100(9)} = 0.3733$$

Hence $E(X) = \frac{nk}{N}=0.6$ and $Var(X) = \frac{nk(N-k)(N-n)}{N^2(N-1)}=0.3733$.
