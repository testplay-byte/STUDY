---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-4
chapter_folder: Chapter-11-Binomial-and-Hypergeometric-Distributions
chapter_number: 11
chapter_title: "Binomial and Hypergeometric Distributions"
page_image: 13
page_printed: 107
section: "11.11 HYPERGEOMETRIC DISTRIBUTION"
exercise: null
content_type: mixed
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-11-Binomial-and-Hypergeometric-Distributions/0013.jpg
converted_at: "2026-10-01"
converted_by: "agent-S4b (glm-vision)"
notes: "Offset check: printed p.107 = image 13 + 94 (header folio, top-right; odd page). Page opens with the continuation of Example 11.17 (fitted-distribution table, complete here), then Example 11.18 complete; numbered section 11.11 HYPERGEOMETRIC DISTRIBUTION starts in lower third with the worded binomial-coefficient formula and ends with a dangling italic 'or' leading to the compact formula on printed p.108 (continues). In the 11.11 paragraph 'x' and 'n-x' are printed bold — preserved. No figures; no defects."
---

# Page 13 — Binomial and Hypergeometric Distributions (Chapter 11)

> 📄 Original scan: [0013.jpg](../../../Raw/Statistics/Chapter-11-Binomial-and-Hypergeometric-Distributions/0013.jpg) · printed page 107

Hence the binomial distribution to be fitted to the data is

$$200P[ X = x ] = 200 \binom{5}{x} (0.398)^x (0.602)^{5-x} \text{ for } x = 0, 1, 2, 3, 4, 5.$$

The expected or theoretical frequencies of 0, 1, 2, 3, 4, 5 successes are calculated as below:

| No. of heads (X) | Probability P[ X = x ] | Expected Frequencies N.P[ X = x ] |
| :--- | :--- | :--- |
| 0 | $\binom{5}{0}(0.398)^0(0.602)^5 = 0.079065$ | 15.81 or 16 |
| 1 | $\binom{5}{1}(0.398)(0.602)^4 = 0.261360$ | 52.27 or 52 |
| 2 | $\binom{5}{2}(0.398)^2(0.602)^3 = 0.345586$ | 69.12 or 69 |
| 3 | $\binom{5}{3}(0.398)^3(0.602)^2 = 0.228477$ | 45.70 or 46 |
| 4 | $\binom{5}{4}(0.398)^4(0.602) = 0.075526$ | 15.10 or 15 |
| 5 | $\binom{5}{5}(0.398)^5(0.602)^0 = 0.009987$ | 2.00 or 2 |
| **Total** | **1** | **200** |

**Example 11.18.**

A certain event is believed to follow the binomial distribution. In 1024 samples of 5, the result was observed once 405 times and twice 270 times. Calculate the probabilities p and q.

**Solution:** The binomial frequency distribution is

$$N.P[ X = x ] = N \binom{n}{x} p^x q^{n-x} \text{ for } x = 0, 1, 2, 3, \ldots, n.$$

Here, $N = 1024$, $n = 5$ and $x = 1, 2$. Therefore

$$1024.P[ X = 1 ] = 1024 \binom{5}{1} pq^4 = 405 \text{ or } 5120 pq^4 = 405 \quad \ldots\ldots (1)$$

$$1024.P[ X = 2 ] = 1024 \binom{5}{2} p^2q^3 = 270 \text{ or } 10240 p^2q^3 = 270 \quad \ldots\ldots (2)$$

Dividing equation (2) by equation (1), we get

$$\frac{10240 p^2q^3}{5120 pq^4} = \frac{270}{405} \text{ or } \frac{2p}{q} = \frac{2}{3}, \text{ or } 6p = 2q, \text{ or } 6p = 2(1 - p) = 2 - 2p \text{ or } 6p + 2p = 2$$

$$\text{or } 8p = 2 \text{ or } p = \frac{2}{8} = 1/4 \text{ and } q = 1 - p = 3/4. \text{ Hence, } p = 1/4 \text{ and } q = 3/4$$

## 11.11. HYPERGEOMETRIC DISTRIBUTION

If the probability of a success is not constant, the hypergeometric distribution is particularly useful. Suppose we have N distinct objects divided into two classes, say a class of successes and a class of failures. Suppose there are k successes and N – k failures. We take at random a sample of size n and ask for the probability that exactly **x** of the objects in it are successes and **n – x** failures. The probability distribution of the hypergeometric random variable x is

$$P( X = x ) = \frac{\left(\begin{array}{c}\text{No. of successes in the population}\\ \text{Taken } x \text{ at a time}\end{array}\right)\left(\begin{array}{c}\text{No. of failures in the population}\\ \text{Taken } n - x \text{ at a time}\end{array}\right)}{\left(\begin{array}{c}\text{Total population}\\ \text{Taken } n \text{ at a time}\end{array}\right)}$$

for $x = 0, 1, 2, 3, \ldots, n$ or k (whichever is less), $x \leq k$, $n - x \leq N - k$, $n \leq N$.

*or*
