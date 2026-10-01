---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-4
chapter_folder: Chapter-11-Binomial-and-Hypergeometric-Distributions
chapter_number: 11
chapter_title: "Binomial and Hypergeometric Distributions"
page_image: 7
page_printed: 101
section: null
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-11-Binomial-and-Hypergeometric-Distributions/0007.jpg
converted_at: "2026-10-01"
converted_by: "agent-S4a (glm-vision)"
notes: "Offset check: printed p.101 = image 7 + 94 (header folio, top-right; odd page). Two worked examples: 11.9 (complete, n = 3 mean/variance/S.D. proof with two computation tables) and 11.10 (n = 4; solution breaks off after E(X^2) = 4p + 12p^2 at the page foot — variance/S.D. lines continue on printed p.102). No section headings, no figures."
---

# Page 7 — Binomial and Hypergeometric Distributions (Chapter 11)

> 📄 Original scan: [0007.jpg](../../../Raw/Statistics/Chapter-11-Binomial-and-Hypergeometric-Distributions/0007.jpg) · printed page 101

**Example 11.9.**

Show that the mean = $3p$, variance = $3pq$ and standard deviation = $\sqrt{3pq}$ for a binomial distribution in which $n=3$.

**Solution:** Here, $n = 3$ and $x = 0, 1, 2, 3$. Therefore

$$P[X=x] = \binom{3}{x} p^x q^{3-x} \text{ for } x=0, 1, 2, 3.$$

$$\begin{aligned}
P[X=0] &= \binom{3}{0} p^0 q^3 = q^3 & P[X=1] &= \binom{3}{1} p^1 q^2 = 3pq^2 \\
P[X=2] &= \binom{3}{2} p^2 q = 3p^2q & P[X=3] &= \binom{3}{3} p^3 q^0 = p^3
\end{aligned}$$

Thus, the probability distribution in tabular form for the computation of mean, variance and standard deviation of X is given as follows:

| x | $P[X=x]=p(x)$ | $x p(x)$ | $x^2$ | $x^2 p(x)$ |
| :---: | :---: | :---: | :---: | :---: |
| 0 | $q^3$ | 0 | 0 | 0 |
| 1 | $3pq^2$ | $3pq^2$ | 1 | $3pq^2$ |
| 2 | $3p^2q$ | $6p^2q$ | 4 | $12p^2q$ |
| 3 | $p^3$ | $3p^3$ | 9 | $9p^3$ |

$$\begin{aligned}
E(X) &= \mu = \sum x p(x) = 3pq^2 + 6p^2q + 3p^3 = 3p(q^2 + 2pq + p^2) = 3p(q + p)^2 = 3p(1)^2 = 3p \\
E(X^2) &= \sum x^2 p(x) = 3pq^2 + 12p^2q + 9p^3 = 3p(q^2 + 4pq + 3p^2) = 3p[ q^2 + 2pq + p^2 + 2pq + 2p^2 ] \\
&= 3p[ (q + p)^2 + 2p(q + p) ] = 3p[ (1)^2 + 2p(1) ] = 3p[ 1 + 2p ] = 3p + 6p^2 \\
Var(X) &= E(X^2) - [E(X)]^2 = 3p + 6p^2 - (3p)^2 = 3p + 6p^2 - 9p^2 = 3p - 3p^2 = 3p(1 - p) = 3pq \\
S.D(X) &= \sigma = \sqrt{3pq}
\end{aligned}$$

**Example 11.10.**

Find the mean, variance and standard deviation of the binomial distribution $(q+p)^4$.

**Solution:** Here, $n = 4$ and $x = 0, 1, 2, 3, 4$. Therefore

$$P[X=x] = \binom{4}{x} p^x q^{4-x} \text{ for } x=0, 1, 2, 3, 4.$$

$$P[X=0] = q^4, \quad P[X=1] = 4pq^3, \quad P[X=2] = 6p^2q^2, \quad P[X=3] = 4p^3q \text{ and } P[X=4] = p^4$$

Thus, the probability distribution in tabular form for the computation of mean, variance and standard deviation of X is given as follows:

| x | $P[X=x]=p(x)$ | $x p(x)$ | $x^2$ | $x^2 p(x)$ |
| :---: | :---: | :---: | :---: | :---: |
| 0 | $q^4$ | 0 | 0 | 0 |
| 1 | $4pq^3$ | $4pq^3$ | 1 | $4pq^3$ |
| 2 | $6p^2q^2$ | $12p^2q^2$ | 4 | $24p^2q^2$ |
| 3 | $4p^3q$ | $12p^3q$ | 9 | $36p^3q$ |
| 4 | $p^4$ | $4p^4$ | 16 | $16p^4$ |

$$\begin{aligned}
E(X) &= \mu = \sum x p(x) = 4pq^3 + 12p^2q^2 + 12p^3q + 4p^4 \\
&= 4p(q^3 + 3pq^2 + 3p^2q + p^3) = 4p(q + p)^3 = 4p(1)^3 = 4p \\
E(X^2) &= \sum x^2 p(x) = 4pq^3 + 24p^2q^2 + 36p^3q + 16p^4 = 4p[ q^3 + 6pq^2 + 9p^2q + 4p^3 ] \\
&= 4p[ q^3 + 3pq^2 + 3p^2q + p^3 + 3pq^2 + 6p^2q + 3p^3 ] = 4p[ (q + p)^3 + 3p( q^2 + 2pq + p^2 ) ] \\
&= 4p[ (q + p)^3 + 3p(q + p)^2 ] = 4p[ (1)^3 + 3p(1)^2 ] = 4p[ 1 + 3p ] = 4p + 12p^2
\end{aligned}$$
