---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-4
chapter_folder: Chapter-11-Binomial-and-Hypergeometric-Distributions
chapter_number: 11
chapter_title: "Binomial and Hypergeometric Distributions"
page_image: 6
page_printed: 100
section: 11.7 MEAN, VARIANCE AND STANDARD DEVIATION OF THE BINOMIAL DISTRIBUTION
exercise: null
content_type: mixed
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-11-Binomial-and-Hypergeometric-Distributions/0006.jpg
converted_at: "2026-10-01"
converted_by: "agent-S4a (glm-vision)"
notes: "Offset check: printed p.100 = image 6 + 94 (header folio, top-left; even page). Page opens with the continuation of Example 11.6 (parts iv-vi) from printed p.99, then Example 11.7 (complete), then section heading 11.7 with theory and the mean/variance/S.D. formulae, then Example 11.8 whose computation runs to the page foot (mean/variance/S.D. of (q+p)^2 distribution — appears complete). Mixed theory + worked-examples page; no figures."
---

# Page 6 — Binomial and Hypergeometric Distributions (Chapter 11)

> 📄 Original scan: [0006.jpg](../../../Raw/Statistics/Chapter-11-Binomial-and-Hypergeometric-Distributions/0006.jpg) · printed page 100

(iv) $\text{P}(X \leq 3) = 1 - \text{P}(X=4) = 1 - \binom{4}{4} (0.4)^4 (0.6)^0 = 1 - 0.0256 = 0.9744$

(v) $\text{P}(X \leq 1) = \binom{4}{0} (0.4)^0 (0.6)^4 + \binom{4}{1} (0.4)^1 (0.6)^3 = 0.1296 + 0.3456 = 0.4752$

(vi) $\text{P}(X \geq 3) = \binom{4}{3} (0.4)^3 (0.6)^1 + \binom{4}{4} (0.4)^4 (0.6)^0 = 0.1536 + 0.0256 = 0.1792$

**Example 11.7.**

Given $n=6, p=1/3$. Find

(a) $P[X=-1]$ (b) $P[X=2.5]$ (c) $P[X=2]$ (d) $P[X=10]$.

**Solution:** The probability of x successes in a series of n trials is given by

$$\text{P}[X=x] = \binom{n}{x} p^x q^{n-x} \text{ for } x=0, 1, 2, 3, ..., n.$$

Here, $n = 6, p = 1/3, q = 1-p = 2/3$ and $x=0, 1, 2, 3, 4, 5, 6$. Therefore

$$\text{P}[X=x] = \binom{6}{x} \left(\frac{1}{3}\right)^x \left(\frac{2}{3}\right)^{6-x} \text{ for } x=0, 1, 2, 3, ..., 6.$$

(a) $P[X=-1] = 0$, because a random variable X in a binomial distribution takes only positive integral values.

(b) $P[X=2.5] = 0$, because X can take only integer values 0, 1, 2, 3, 4, 5, 6.

(c) $P[X=2] = \binom{6}{2} \left(\frac{1}{3}\right)^2 \left(\frac{2}{3}\right)^4 = \frac{240}{729} = 0.3292$

(d) $P[X=10] = 0$, because X can take only values 0, 1, 2, 3, 4, 5, 6.

## 11.7. MEAN, VARIANCE AND STANDARD DEVIATION OF THE BINOMIAL DISTRIBUTION

The mean, variance and standard deviation of the binomial distribution, means the mean, variance and standard deviation of the values taken by the variable in repeated binomial experiments. Instead of carrying out these experiments in order to calculate the mean, variance and standard deviation, it can be shown mathematically that the following formulae may be applied to any binomial distribution.

$$\begin{aligned}
\text{Mean} &= \mu = \sum x p(x) = np \\
\text{Variance} &= \sigma^2 = \sum x^2 p(x) - [\sum x p(x)]^2 = npq \\
\text{Standard Deviation} &= \sigma = \sqrt{\sum x^2 p(x) - [\sum x p(x)]^2} = \sqrt{npq}
\end{aligned}$$

**Example 11.8.**

Find the mean, variance and standard deviation of the binomial distribution $(q+p)^2$.

**Solution:** Here, $n = 2$ and $x = 0, 1, 2$. Therefore

$$\text{P}[X=x] = \binom{2}{x} p^x q^{2-x} \text{ for } x=0, 1, 2.$$

$$\begin{aligned}
\text{P}[X=0] &= \binom{2}{0} p^0 q^2 = q^2, & \text{P}[X=1] &= \binom{2}{1} pq = 2pq, & \text{P}[X=2] &= \binom{2}{2} p^2 q^0 = p^2
\end{aligned}$$

Thus, the probability distribution in tabular form for the computation of mean, variance and standard deviation of X is given as follows:

| x | $P[ X = x ] = p(x)$ | $x p(x)$ | $x^2$ | $x^2 p(x)$ |
| :---: | :---: | :---: | :---: | :---: |
| 0 | $q^2$ | 0 | 0 | 0 |
| 1 | $2pq$ | $2pq$ | 1 | $2pq$ |
| 2 | $p^2$ | $2p^2$ | 4 | $4p^2$ |

$$\begin{aligned}
E(X) &= \mu = \sum x p(x) = 2pq + 2p^2 = 2p(q+p) = 2p(1) = 2p \\
E(X^2) &= \sum x^2 p(x) = 2pq + 4p^2 \\
Var(X) &= \sigma^2 = E(X^2) - [E(X)]^2 = 2pq + 4p^2 - (2p)^2 = 2pq + 4p^2 - 4p^2 = 2pq \\
S.D(X) &= \sigma = \sqrt{2pq}
\end{aligned}$$
