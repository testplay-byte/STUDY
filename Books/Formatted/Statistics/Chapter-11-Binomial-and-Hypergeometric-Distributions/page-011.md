---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-4
chapter_folder: Chapter-11-Binomial-and-Hypergeometric-Distributions
chapter_number: 11
chapter_title: "Binomial and Hypergeometric Distributions"
page_image: 11
page_printed: 105
section: "11.9 BINOMIAL FREQUENCY DISTRIBUTION; 11.10 FITTING OF THE BINOMIAL DISTRIBUTION"
exercise: null
content_type: theory
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-11-Binomial-and-Hypergeometric-Distributions/0011.jpg
converted_at: "2026-10-01"
converted_by: "agent-S4b (glm-vision)"
notes: "Offset check: printed p.105 = image 11 + 94 (header folio, top-right; odd page). Book prints the 11.10 heading with a stray trailing colon — '11.10. FITTING OF THE BINOMIAL DISTRIBUTION :' — preserved verbatim. Two data tables (sample data horizontal 2-row table; fitting table 3 columns with Total | 1 | 100 row) both complete on page. Minor scan speckles; faint crease on right edge through Expected Frequencies column, text readable. No figures."
---

# Page 11 — Binomial and Hypergeometric Distributions (Chapter 11)

> 📄 Original scan: [0011.jpg](../../../Raw/Statistics/Chapter-11-Binomial-and-Hypergeometric-Distributions/0011.jpg) · printed page 105

## 11.9. BINOMIAL FREQUENCY DISTRIBUTION

Let the n independent trials constitute one experiment and let this experiment be repeated N times. Then we expect x successes to occur $N \binom{n}{x} p^x q^{n-x}$ times. This will be called the expected frequency of x successes in N experiments and the possible number of successes together with the expected frequencies will be said to constitute the binomial (expected) frequency distribution. In practice, the observed frequencies will differ from the expected frequencies due to chance causes. For N sets, each of n trials the expected frequencies of 0, 1, 2, ..., n successes are given by the successive terms in the binomial expansion of $N(q + p)^n$ where $q + p = 1$.

## 11.10. FITTING OF THE BINOMIAL DISTRIBUTION :

Suppose there are some intelligent and some non-intelligent students in a big college but we do not know the percentage of intelligent students. A random sample of 6 students is selected and the number of intelligent students in the sample is counted. This number will take any value between 0 to 6. We repeat the sample a large number of times say 100 and each time note the number of intelligent students. The frequencies of 0, 1, 2, ..., 6 intelligent students as observed in this experiment are, say, 14, 15, 25, 25, 10, 6, 5. The sample data can be written as below:

| No. of Intelligent Students (x) | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
| :--- | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| Frequency (f) | 14 | 15 | 25 | 25 | 10 | 6 | 5 |

The sample mean $(\bar{X}) = \frac{\sum fx}{\sum f} = \frac{240}{100} = 2.4$. This observed data is also called experimental or actual data. From this data we want to estimate the proportion of intelligent students in the college. According to the theory of estimation, we find the sample mean = 2.4 and substitute it equal to np when $n = 6$. Thus $6p = 2.4$ and $p = 0.4$. This value of p is called estimate of proportion of intelligent students in the college. When $p = 0.4$, then $q = 1 - p = 1 - 0.4 = 0.6$. Using $n = 6$, $p = 0.4$ and $q = 0.6$ we can find the probabilities of 0, 1, 2, ..., 6 intelligent students as given below. Each probability multiplied with 100 will give us expected frequencies of 0, 1, 2, ..., 6 intelligent students. These frequencies are called frequencies of the binomial distribution.

| No. of Intelligent Students (x) | Probability $p(x) = \binom{6}{x} (0.4)^x (0.6)^{6-x}$ | Expected Frequencies $Np(x)$ |
| :--- | :--- | :--- |
| 0 | $\binom{6}{0}(0.4)^0(0.6)^6 = 0.046656$ | 4.67 |
| 1 | $\binom{6}{1}(0.4)(0.6)^5 = 0.186624$ | 18.66 |
| 2 | $\binom{6}{2}(0.4)^2(0.6)^4 = 0.311040$ | 31.10 |
| 3 | $\binom{6}{3}(0.4)^3(0.6)^3 = 0.276480$ | 27.65 |
| 4 | $\binom{6}{4}(0.4)^4(0.6)^2 = 0.138240$ | 13.82 |
| 5 | $\binom{6}{5}(0.4)^5(0.6) = 0.036864$ | 3.69 |
| 6 | $\binom{6}{6}(0.4)^6(0.6)^0 = 0.004096$ | 0.41 |
| **Total** | **1** | **100** |

This procedure of finding expected frequencies of the binomial distribution is called fitting of the binomial distribution. It is basically the method of estimating probability of success p( parameter of population ) from the sample data and then use it to find the expected frequencies ( most likely ) of the given experiment.
