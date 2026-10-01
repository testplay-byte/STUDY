---
subject: statistics
book_title: "Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot"
batch: S-3
chapter_folder: Chapter-10-Random-Variable-and-Probability-Distributions
chapter_number: 10
chapter_title: "Random Variable and Probability Distributions"
page_image: 11
page_printed: 71
section: "10.11 MATHEMATICAL EXPECTATION; 10.12 FUNCTION OF A RANDOM VARIABLE"
exercise: null
content_type: mixed
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-10-Random-Variable-and-Probability-Distributions/0011.jpg
converted_at: "2026-10-01"
converted_by: "agent-S3b (glm-vision)"
notes: "Offset check: printed p.71 = image 11 + 60 (header folio, top-right on this odd page). Page opens mid-solution: parts (iii)-(v) continue the solution of Example 10.11 (started on printed p.70). The four small tables of Example 10.12 are printed two-per-row ((a) beside (b), (c) beside (d)); transcribed here in reading order (a), (b), (c), (d). Table (b) prints the x values '+ 0.5' and '+ 1' with plus signs. Book typesetting quirks preserved: 'f(xₙ).The' (missing space) and 'it is called linear transformation' (no article)."
---

# Page 11 — Random Variable and Probability Distributions (Chapter 10)

> 📄 Original scan: [0011.jpg](../../../Raw/Statistics/Chapter-10-Random-Variable-and-Probability-Distributions/0011.jpg) · printed page 71

(iii) $P( X \geq 2 ) = P( X = 2 ) + P( X = 3 ) = 0.3 + 3k = 0.3 + 3\left(\frac{1}{15}\right) = 0.3 + 0.2 = 0.5$

(iv) $P(-2 < X < 2) = P( X = -1 ) + P( X = 0 ) + P( X = 1 ) = k + 0.2 + 2k = 0.2 + 3k$

$\phantom{P(-2 < X < 2)} = 0.2 + 3\left(\frac{1}{15}\right) = 0.2 + 0.2 = 0.4$

(v) $P( X \leq 1 ) = P( X = -2 ) + P( X = -1 ) + P( X = 0 ) + P( X = 1 )$

$\phantom{P( X \leq 1 )} = 0.1 + k + 0.2 + 2k = 0.3 + 3k = 0.3 + 3\left(\frac{1}{15}\right) = 0.3 + 0.2 = 0.5$

**Example 10.12.**

Which of the following tables represent probability distributions?

(a)

| x | p(x) |
| :---: | :---: |
| 1 | 0.25 |
| 2 | 0.65 |
| 3 | -0.30 |
| 4 | 0.11 |

(b)

| x | p(x) |
| :---: | :---: |
| -1 | 0.17 |
| -0.5 | 0.25 |
| 0 | 0.31 |
| + 0.5 | 0.22 |
| + 1 | 0.05 |

(c)

| x | p(x) |
| :---: | :---: |
| 1 | 1.02 |
| 10 | 0.31 |
| 100 | 0.90 |
| 1000 | 0.43 |

(d)

| x | p(x) |
| :---: | :---: |
| 0 | 0.10 |
| 1 | 0.17 |
| 2 | 0.75 |
| 3 | 0.24 |

**Solution:**

(a) This is not a probability distribution because p( 3 ) is not between 0 and 1. Probability can never be negative.

(b) This is a probability distribution. All the probabilities are between 0 and 1, and they add up to 1.

(c) This is not a probability distribution because p( 1 ) is not between 0 and 1. Probability can never exceed one.

(d) This is not a probability distribution. Although all the probabilities are between 0 and 1, they do not add up to 1.

## 10.11. MATHEMATICAL EXPECTATION

Suppose a random variable X takes the n values as $x_1, x_2, x_3, \ldots, x_n$ with corresponding probabilities $f(x_1), f(x_2), f(x_3), \ldots, f(x_n)$.The mathematical expectation or expected value of X denoted by E( X ) is defined as

$$E(X) = x_1 f(x_1) + x_2 f(x_2) + x_3 f(x_3) + \ldots + x_n f(x_n) = \sum_{i=1}^{n} x_i f(x_i) \text{ or } \sum x f(x)$$

Similarly $E( X^2 ) = x_1^2 f(x_1) + x_2^2 f(x_2) + x_3^2 f(x_3) + \ldots + x_n^2 f(x_n) = \sum x_i^2 f(x_i) \text{ or } \sum x^2 f(x)$

It is also called the mean of the discrete random variable X. If the random experiment is repeated a large number of times, most of the random experiments would generate the result equal to the expected value of X.

## 10.12. FUNCTION OF A RANDOM VARIABLE

When $Y = aX + b$, it is called linear transformation. The random variable Y is function of the random variable X. Expected value of Y can be written in terms of the expected value of X.

Thus $E(Y) = E[ aX+ b ] = aE(X)+b$

It is important to note that the probability function of random variable Y will be the same as the probability function of random variable X. Thus $f( x ) = f( y )$.
