---
subject: statistics
book_title: "Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot"
batch: S-3
chapter_folder: Chapter-10-Random-Variable-and-Probability-Distributions
chapter_number: 10
chapter_title: "Random Variable and Probability Distributions"
page_image: 12
page_printed: 72
section: "10.13 LAWS OF EXPECTATION; 10.14 VARIANCE, STANDARD DEVIATION AND COEFFICIENT OF VARIATION OF DISCRETE PROBABILITY DISTRIBUTION"
exercise: null
content_type: mixed
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-10-Random-Variable-and-Probability-Distributions/0012.jpg
converted_at: "2026-10-01"
converted_by: "agent-S3b (glm-vision)"
notes: "Offset check: printed p.72 = image 12 + 60 (header folio, top-left). Book misprints preserved: stray dot before 0.15 in the last p(x) cell of the Example 10.13 distribution table ('. 0.15'); stray period printed between 'that' and 'E( 2X + 3 )' in the (i)/(ii) instruction line ('Verify that.E( 2X + 3 )'). Book grammar 'whenever die is rolled' preserved. Laws (ii)/(iii), (iv)/(v), (vi)/(vii) share single printed lines as in scan. C.V. ratio printed as a slash, kept as slash. Page ends cleanly after E(X) = 252/36 = 7 (Example 10.14 complete)."
---

# Page 12 — Random Variable and Probability Distributions (Chapter 10)

> 📄 Original scan: [0012.jpg](../../../Raw/Statistics/Chapter-10-Random-Variable-and-Probability-Distributions/0012.jpg) · printed page 72

## 10.13. LAWS OF EXPECTATION

(i) $\text{E(Constant)} = \text{Constant}$

If a constant 'c' is written on all the faces of the die, we shall always get c whenever die is rolled. Thus $\text{E(c)} = \text{c}$

(ii) $\text{E(aX)} = \text{aE(X)}$ when $a \neq 0$ $\qquad$ (iii) $\text{E(X + a)} = \text{E(X)} + a$

(iv) $\text{E(aX + b)} = \text{aE(X)} + b$ when $a \neq 0$ $\qquad$ (v) $\text{E(X + Y)} = \text{E(X)} + \text{E(Y)}$

(vi) $\text{E(X - Y)} = \text{E(X)} - \text{E(Y)}$ $\qquad$ (vii) $\text{E(XY)} = \text{E(X)}\text{E(Y)}$ if X and Y are independent.

(viii) $\text{E[X - E(X)]} = \text{E(X)} - \text{E(X)} = 0$

## 10.14. VARIANCE, STANDARD DEVIATION AND COEFFICIENT OF VARIATION OF DISCRETE PROBABILITY DISTRIBUTION

$\text{Variance} = \text{Var(X)} = \sigma^2 = \text{E}[\text{X - E(X)}]^2 = \text{E(X}^2\text{)} - [\text{E(X)}]^2$

$\text{Standard Deviation} = \text{S.D.(X)} = \sigma = \sqrt{\text{E(X}^2\text{)} - [\text{E(X)}]^2}$

$\text{Coefficient of Variation} = \text{C.V.} = \text{S.D.(X)} / \text{E(X)} \times 100$

**Example 10.13.**

Let X have the following probability distribution:

| x | 1 | 2 | 3 | 4 | 5 | 6 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| p(x) | 0.05 | 0.40 | 0.10 | 0.25 | 0.05 | . 0.15 |

(i) Find E( X ), E( X² ) and E( X + 4 ) (ii) Verify that.E( 2X + 3 ) = 2E( X ) + 3

**Solution:**

The necessary calculations are given below:

| x | p(x) | x p(x) | x² p(x) | x+4 | (x+4) p(x) | 2x+3 | (2x+3) p(x) |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | 0.05 | 0.05 | 0.05 | 5 | 0.25 | 5 | 0.25 |
| 2 | 0.40 | 0.80 | 1.60 | 6 | 2.40 | 7 | 2.80 |
| 3 | 0.10 | 0.30 | 0.90 | 7 | 0.70 | 9 | 0.90 |
| 4 | 0.25 | 1.00 | 4.00 | 8 | 2.00 | 11 | 2.75 |
| 5 | 0.05 | 0.25 | 1.25 | 9 | 0.45 | 13 | 0.65 |
| 6 | 0.15 | 0.90 | 5.40 | 10 | 1.50 | 15 | 2.25 |
| **Total** | **1** | **3.3** | **13.2** | **–** | **7.3** | **–** | **9.6** |

(i) $\text{E(X)} = \sum \text{x p(x)} = 3.3$ $\qquad$ $\text{E(X}^2\text{)} = \sum \text{x}^2 \text{p(x)} = 13.2$ $\qquad$ $\text{E(X + 4)} = \sum (\text{x} + 4) \text{p(x)} = 7.3$

(ii) $\text{E(2X + 3)} = \sum (2\text{x} + 3) \text{p(x)} = 9.6$ $\qquad$ $2\text{E(X)} + 3 = 2(3.3) + 3 = 6.6 + 3 = 9.6$

Hence, $\text{E( 2X + 3 )} = 2\text{E( X )} + 3 = 9.6$

**Example 10.14.**

Two unbiased dice are thrown. Find the expected value of the sum of numbers of points on them.

**Solution:** Clearly x may be at least 2 and at the most 12. If $x_1, x_2, x_3, ..., x_{11}$ are the values of X with probabilities $p_1, p_2, p_3, ..., p_{11}$ respectively corresponding to x = 2, 3, 4, ..., 12, then the probabilities with variate-values may be tabulated as below:

| x | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | Total |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| p(x) | 1/36 | 2/36 | 3/36 | 4/36 | 5/36 | 6/36 | 5/36 | 4/36 | 3/36 | 2/36 | 1/36 | 1 |
| x p(x) | 2/36 | 6/36 | 12/36 | 20/36 | 30/36 | 42/36 | 40/36 | 36/36 | 30/36 | 22/36 | 12/36 | 252/36 |

$\text{E(X)} = \sum \text{x p(x)} = 252/36 = 7$
