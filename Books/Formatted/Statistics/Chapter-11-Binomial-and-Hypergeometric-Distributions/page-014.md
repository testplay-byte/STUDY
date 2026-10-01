---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-4
chapter_folder: Chapter-11-Binomial-and-Hypergeometric-Distributions
chapter_number: 11
chapter_title: "Binomial and Hypergeometric Distributions"
page_image: 14
page_printed: 108
section: "11.12 HYPERGEOMETRIC EXPERIMENT; 11.13 PROPERTIES OF THE HYPERGEOMETRIC DISTRIBUTION"
exercise: null
content_type: mixed
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-11-Binomial-and-Hypergeometric-Distributions/0014.jpg
converted_at: "2026-10-01"
converted_by: "agent-S4b (glm-vision)"
notes: "Offset check: printed p.108 = image 14 + 94 (header folio, top-left; even page). Page opens with the compact h(x; N, n, k) formula continuing section 11.11 from printed p.107 (dangling 'or' there). Sections 11.12 and 11.13 complete on this page; Example 11.19 (urn problem) starts at the foot and breaks off right after '...possible values of x are 0, 1, 2, 3. Therefore' — continues on printed p.109. Book grammar misprint preserved: 'When X be a random variable ... is called a hypergeometric random variable'. Slight dark smudge bottom-right corner of scan (artifact only). No figures."
---

# Page 14 — Binomial and Hypergeometric Distributions (Chapter 11)

> 📄 Original scan: [0014.jpg](../../../Raw/Statistics/Chapter-11-Binomial-and-Hypergeometric-Distributions/0014.jpg) · printed page 108

$$P(X = x) = h(x; N, n, k) = \frac{\binom{k}{x}\binom{N-k}{n-x}}{\binom{N}{n}} \text{ for } x = 0, 1, 2, 3, \ldots, n \text{ or } k \text{ (whichever is less)}$$

$$x \leq k, n - x \leq N - k, n \leq N$$

If $P(X = x)$ is the probability distribution, it should satisfy

(i) $P(X = x) \geq 0$.

(ii) Sum of probabilities $= \sum_{x=0}^{n} \frac{\binom{k}{x}\binom{N-k}{n-x}}{\binom{N}{n}} = \frac{\binom{N}{n}}{\binom{N}{n}} = 1$

**Note:** (i) Hypergeometric distribution has three parameters that is $N$, $n$ and $k$.

(ii) The number of successes in the sample $x$ cannot exceed the number of successes in the population $k$ or the sample size $n$. Thus the range of the hypergeometric random variable is limited to the sample size or to the number of successes in the population whichever is smaller.

(iii) When $N$ is large, hypergeometric distribution approaches the binomial distribution.

(iv) Like the binomial distribution, the hypergeometric distribution may also be symmetrical or skewed. Whenever $p = 1/2$, the hypergeometric distribution will be symmetrical regardless of how large or small the value of $n$; however, when $p \neq 1/2$, the distribution will be skewed.

## 11.12. HYPERGEOMETRIC EXPERIMENT

An experiment in which a random sample is selected without replacement from a known finite population and contains a relatively large proportion of the population, such that the probability of a success does not remain constant from trial to trial is called a hypergeometric experiment.

A hypergeometric experiment has the following properties (qualities):

(i) Each trial results in two outcomes which can be classified into success and failure.

(ii) The successive trials are dependent.

(iii) The probability of each outcome does not remain constant from trial to trial.

(iv) The experiment is repeated a fixed number of times.

When $X$ be a random variable for the number of successes out of a sample of $n$ items selected without replacement from a finite population of $N$ items of the hypergeometric experiment is called a hypergeometric random variable. The probability distribution of the hypergeometric random variable is called the hypergeometric probability distribution.

## 11.13. PROPERTIES OF THE HYPERGEOMETRIC DISTRIBUTION

(i) The mean, variance and standard deviation of the hypergeometric distribution are as follows:

$$\mu = E(X) = \frac{nk}{N}, \quad Var(X) = \sigma^2 = \frac{nk(N - k)(N - n)}{N^2(N - 1)} \text{ and } S.D.(X) = \sigma = \sqrt{\frac{nk(N - k)(N - n)}{N^2(N - 1)}}$$

If we set $\frac{k}{N} = p$, then the mean of the hypergeometric distribution coincides with the mean of the binomial distribution and the variance of the hypergeometric distribution is $\left(\frac{N-n}{N-1}\right)$ times the variance of the binomial distribution.

(ii) When $N$ is large, hypergeometric distribution approaches the binomial distribution.

**Example 11.19.**

An urn contains nine balls, five of them red and four blue. Three balls are drawn without replacement. Find the probability distribution of $X =$ number of red balls drawn.

**Solution:** The hypergeometric distribution is

$$P(X = x) = h(x; N, n, k) = \frac{\binom{k}{x}\binom{N-k}{n-x}}{\binom{N}{n}} \quad \text{for } x = 0, 1, 2, 3, \ldots, n \text{ or } k \text{ (whichever is less)}$$

Here, $N = 9, n = 3, k = 5, x =$ number of red balls then the possible values of $x$ are $0, 1, 2, 3$. Therefore
