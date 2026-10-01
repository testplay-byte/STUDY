---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-4
chapter_folder: Chapter-11-Binomial-and-Hypergeometric-Distributions
chapter_number: 11
chapter_title: "Binomial and Hypergeometric Distributions"
page_image: 8
page_printed: 102
section: null
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-11-Binomial-and-Hypergeometric-Distributions/0008.jpg
converted_at: "2026-10-01"
converted_by: "agent-S4a (glm-vision)"
notes: "Offset check: printed p.102 = image 8 + 94 (header folio, top-left; even page). Page opens with the tail of Example 11.10 (Var(X) = 4pq and S.D. = 2*sqrt(pq) lines continued from printed p.101), then Example 11.11 (general n case) whose E(X^2) derivation breaks off at the page foot — continues on printed p.103. 'Example 11.11' is an example number, NOT a section heading — page has no printed section headings. No figures."
---

# Page 8 — Binomial and Hypergeometric Distributions (Chapter 11)

> 📄 Original scan: [0008.jpg](../../../Raw/Statistics/Chapter-11-Binomial-and-Hypergeometric-Distributions/0008.jpg) · printed page 102

$$\begin{aligned} \text{Var}(X) &= \sigma^2 = \text{E}(X^2) - [\text{E}(X)]^2 = 4p + 12p^2 - (4p)^2 = 4p + 12p^2 - 16p^2 = 4p - 4p^2 \\ &= 4p(1-p) = 4pq \end{aligned}$$

$$\text{S.D.}(X) = \sigma = \sqrt{4pq} = 2\sqrt{pq}$$

**Example 11.11.**

Find the mean, variance and standard deviation of the binomial distribution $(q+p)^n$.

**Solution:** The number of successes $x$ will be $0, 1, 2, 3, 4, ..., n$. We know that

$$(q+p)^n = \binom{n}{0} p^0 q^n + \binom{n}{1} pq^{n-1} + \binom{n}{2} p^2 q^{n-2} + \binom{n}{3} p^3 q^{n-3} + \binom{n}{4} p^4 q^{n-4} + ... + \binom{n}{n} p^n q^0$$

Therefore the probabilities of $0, 1, 2, 3, 4, ..., n$ successes are respectively,

$$q^n, \quad \binom{n}{1} pq^{n-1}, \quad \binom{n}{2} p^2 q^{n-2}, \quad \binom{n}{3} p^3 q^{n-3}, \quad \binom{n}{4} p^4 q^{n-4}, \quad ...,\quad p^n$$

Thus, the probability distribution in tabular form for the computation of mean, variance and standard deviation of $X$ is given as follows:

| x | $P[ X = x ] = p(x)$ | $x p(x)$ | $x^2$ | $x^2 p(x)$ |
| :---: | :---: | :---: | :---: | :---: |
| 0 | $q^n$ | 0 | 0 | 0 |
| 1 | $\binom{n}{1} pq^{n-1}$ | $\binom{n}{1} pq^{n-1}$ | 1 | $\binom{n}{1} pq^{n-1}$ |
| 2 | $\binom{n}{2} p^2 q^{n-2}$ | $2\binom{n}{2} p^2 q^{n-2}$ | 4 | $4\binom{n}{2} p^2 q^{n-2}$ |
| 3 | $\binom{n}{3} p^3 q^{n-3}$ | $3\binom{n}{3} p^3 q^{n-3}$ | 9 | $9\binom{n}{3} p^3 q^{n-3}$ |
| 4 | $\binom{n}{4} p^4 q^{n-4}$ | $4\binom{n}{4} p^4 q^{n-4}$ | 16 | $16\binom{n}{4} p^4 q^{n-4}$ |
| $\vdots$ | $\vdots$ | $\vdots$ | $\vdots$ | $\vdots$ |
| n | $p^n$ | $np^n$ | $n^2$ | $n^2p^n$ |

$$\begin{aligned} \text{E}(X) &= \mu = \sum x p(x) = \binom{n}{1} pq^{n-1} + 2\binom{n}{2} p^2 q^{n-2} + 3\binom{n}{3} p^3 q^{n-3} + 4\binom{n}{4} p^4 q^{n-4} + ... + np^n \\ &= npq^{n-1} + 2 \frac{n(n-1)}{2!} p^2 q^{n-2} + 3 \frac{n(n-1)(n-2)}{3!} p^3 q^{n-3} \\ &\quad + 4 \frac{n(n-1)(n-2)(n-3)}{4!} p^4 q^{n-4} + ... + np^n \\ &= np \left[ q^{n-1} + (n-1)pq^{n-2} + \frac{(n-1)(n-2)}{2!} p^2 q^{n-3} + \frac{(n-1)(n-2)(n-3)}{3!} p^3 q^{n-4} + ... + p^{n-1} \right] \\ &= np \left[ q^{n-1} + \binom{n-1}{1} pq^{n-2} + \binom{n-1}{2} p^2 q^{n-3} + \binom{n-1}{3} p^3 q^{n-4} + ... + p^{n-1} \right] \\ &= np [(q+p)^{n-1}] = np[(1)^{n-1}] = np \end{aligned}$$

$$\begin{aligned} \text{E}(X^2) &= \sum x^2 p(x) = \binom{n}{1} pq^{n-1} + 4\binom{n}{2} p^2 q^{n-2} + 9\binom{n}{3} p^3 q^{n-3} + 16\binom{n}{4} p^4 q^{n-4} + ... + n^2p^n \\ &= npq^{n-1} + 4 \frac{n(n-1)}{2!} p^2 q^{n-2} + 9 \frac{n(n-1)(n-2)}{3!} p^3 q^{n-3} \\ &\quad + 16 \frac{n(n-1)(n-2)(n-3)}{4!} p^4 q^{n-4} + ... + n^2p^n \\ &= np \left[ q^{n-1} + 2(n-1)pq^{n-2} + 3\frac{(n-1)(n-2)}{2!} p^2 q^{n-3} + 4\frac{(n-1)(n-2)(n-3)}{3!} p^3 q^{n-4} + ... + np^{n-1} \right] \end{aligned}$$
