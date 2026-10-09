---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-4
chapter_folder: Chapter-11-Binomial-and-Hypergeometric-Distributions
chapter_number: 11
chapter_title: "Binomial and Hypergeometric Distributions"
page_image: 18
page_printed: 112
section: Short Definitions
exercise: null
content_type: theory
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-11-Binomial-and-Hypergeometric-Distributions/0018.jpg
converted_at: "2026-10-01"
converted_by: "agent-S4c (glm-vision)"
notes: "Offset check: printed p.112 = image 18 + 94 (header folio). SHORT DEFINITIONS summary page, items 1-10 complete. Book typos preserved verbatim: heading 2 prints \"Trails\" (for Trials); item 7 formula prints a stray dot \"P( X = x ).= b(x; n, p)\"; factorial line printed with dots \"n(n - 1)(n - 2) ... 3.2.1\". Page ends complete after the condition line x <= k, n - x <= N - k, n <= N. | TYPO-CORRECTION PASS (2026-10-06, user mandate): unambiguous surface typo(s) corrected in the body per correction policy v4.4 — printed forms remain documented earlier in this note and itemised in docs/tracking/CORRECTIONS-LOG.md."
---

# Page 18 — Binomial and Hypergeometric Distributions (Chapter 11)

> 📄 Original scan: [0018.jpg](../../../Raw/Statistics/Chapter-11-Binomial-and-Hypergeometric-Distributions/0018.jpg) · printed page 112

## SHORT DEFINITIONS

**1. Bernoulli Trial**

A trial that gives only two possible outcomes is called a Bernoulli trial.

**2. Properties of Bernoulli Trials**
(i) There are two possible outcomes for each trial, called generically by success and failure.
(ii) The trials are independent.
(iii) The probability of a success remains the same from trial to trial and denote it by the letter p.

**3. Binomial Experiment**

An experiment with n independent trials in which the outcomes can always be classified as either a success or a failure and the probability of success remains constant from trial to trial is called a binomial experiment.

**4. Properties of a Binomial Experiment**
(i) The experiment consists of n identical trials.
(ii) The trials are independent.
(iii) Each trial can result in one of only two possible outcomes, called success and failure.
(iv) The probability of success **p** is constant from trial to trial.
(v) The random variable X represents the number of successes in n trials.

**5. Binomial Probability Distribution**

A distribution that gives the probability of x successes for a fixed number of independent trials, where each trial must have two possible outcomes and the probability of a success is constant from trial to trial, is called binomial probability distribution. *or*

A probability distribution showing the probability of x successes in n trials of a binomial experiment is called binomial probability distribution.

**6. Binomial Probability Function**

The function used to compute probabilities in a binomial experiment is called binomial probability function.

**7. Binomial Formula**

$$P(X = x) = b(x; n, p) = \binom{n}{x} p^x q^{n-x}$$

for $x = 0, 1, 2, 3, \cdots, n$

where $n =$ Sample size  
$x =$ Number of successes  
$n - x =$ Number of failures  
$p =$ Probability of a success  
$q = 1 - p =$ Probability of a failure  
$n! = n(n - 1)(n - 2) \cdots 3.2.1$  
$0! = 1$ (by definition)

**8. Hypergeometric Experiment**

An experiment in which a random sample is selected without replacement from a known finite population and contains a relatively large proportion of the population, such that the probability of a success does not remain constant from trial to trial is called a hypergeometric experiment. *or*

An experiment in which a random sample is selected without replacement from a finite population in such a way that each trial is a Bernoulli trial and probability of success does not remain constant on each trial, is called a hypergeometric experiment.

**9. Properties of a Hypergeometric Experiment**
(i) The experiment consists of n identical trials.
(ii) The successive trials are dependent.
(iii) Each trial can result in one of only two possible outcomes, called success and failure.
(iv) The probability of each outcome does not remain constant from trial to trial.

**10. Hypergeometric Probability Distribution**

Suppose a population consists of N items which are classified as k successes and N – k failures. If we select a sample of n items from the population without replacement in such a way that x successes are selected from k successes and $n - x$ failures are selected from N – k failures. The probability distribution defined in this situation is a hypergeometric distribution which is given by

$$P(X = x) = h(x; N, n, k) = \frac{\binom{k}{x}\binom{N-k}{n-x}}{\binom{N}{n}}$$

for $x = 0, 1, 2, 3, \cdots, n$ or k (whichever is less)  
$x \leq k$, $n - x \leq N - k$, $n \leq N$.
