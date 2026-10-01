---
subject: statistics
book_title: "Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot"
batch: S-3
chapter_folder: Chapter-10-Random-Variable-and-Probability-Distributions
chapter_number: 10
chapter_title: "Random Variable and Probability Distributions"
page_image: 13
page_printed: 73
section: null
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-10-Random-Variable-and-Probability-Distributions/0013.jpg
converted_at: "2026-10-01"
converted_by: "agent-S3b (glm-vision)"
notes: "Offset check: printed p.73 = image 13 + 60 (header folio, top-right). Example 10.17 opens at the bottom of the page and ends after its (a)-(d) instruction lines with no solution shown (solution continues on next image) — file ends there deliberately. Spacing quirk '(iii)The necessary calculations' preserved as printed. Instruction items share printed lines as in scan: (i)/(ii), (iii)/(iv) of Example 10.16 and (a)/(b), (c)/(d) of Example 10.17. All solution fractions verified stacked as printed; C.V. line ends '7.35%.' with printed full stop."
---

# Page 13 — Random Variable and Probability Distributions (Chapter 10)

> 📄 Original scan: [0013.jpg](../../../Raw/Statistics/Chapter-10-Random-Variable-and-Probability-Distributions/0013.jpg) · printed page 73

**Example 10.15.**

Following is the probability distribution for the age of a student at a certain public college.

| x | 15 | 16 | 17 | 18 | 19 | 20 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| p(x) | 0.08 | 0.24 | 0.23 | 0.28 | 0.14 | 0.03 |

Find the mean, variance, standard deviation and coefficient of variation of the ages.

**Solution:** The necessary calculations are given below:

| x | 15 | 16 | 17 | 18 | 19 | 20 | Total |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| p(x) | 0.08 | 0.24 | 0.23 | 0.28 | 0.14 | 0.03 | 1 |
| x p(x) | 1.20 | 3.84 | 3.91 | 5.04 | 2.66 | 0.60 | 17.25 |
| $x^2$p(x) | 18.00 | 61.44 | 66.47 | 90.72 | 50.54 | 12.00 | 299.17 |

$$E(X) = \sum x p(x) = 17.25 \quad \text{Var}(X) = \sum x^2 p(x) - [\sum x p(x)]^2 = 299.17 - (17.25)^2 = 1.6075$$

$$S.D.(X) = \sqrt{1.6075} = 1.2679 \quad C.V.(X) = \frac{S.D.(X)}{E(X)} \times 100 = \frac{1.2679}{17.25} \times 100 = 7.35\%.$$

**Example 10.16.**

A random variable X has following probability distribution.

| x | 1 | 2 | 3 | 4 | 5 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| p(x) | k | 2k | 4k | 3k | 2k |

(i) Find value of k $\qquad$ (ii) Find $P(X \geq 3)$

(iii) Find E(X) and Var (X) $\qquad$ (iv) Show that Var (2X) = 4 Var (X)

**Solution:** (i) Since the sum of probabilities is one that is

$$\sum_{x=1}^{5} p(x) = k + 2k + 4k + 3k + 2k = 1 \quad \text{or} \quad 12k = 1 \quad \text{or} \quad k = 1/12$$

(ii) $P(X \geq 3) = P(X=3) + P(X=4) + P(X=5) = 4k + 3k + 2k = 9k = 9\left(\frac{1}{12}\right) = 0.75$

(iii)The necessary calculations are given below:

| x | p(x) | x p(x) | $x^2$p(x) | 2x | (2x)p(x) | $(2x)^2$p(x) |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | k = 1/12 | 1/12 | 1/12 | 2 | 2/12 | 4/12 |
| 2 | 2k = 2/12 | 4/12 | 8/12 | 4 | 8/12 | 32/12 |
| 3 | 4k = 4/12 | 12/12 | 36/12 | 6 | 24/12 | 144/12 |
| 4 | 3k = 3/12 | 12/12 | 48/12 | 8 | 24/12 | 192/12 |
| 5 | 2k = 2/12 | 10/12 | 50/12 | 10 | 20/12 | 200/12 |
| **Total** | **1** | **39/12** | **143/12** | **–** | **78/12** | **572/12** |

$$E(X) = \sum x p(x) = \frac{39}{12} = 3.25$$

$$\text{Var}(X) = \sum x^2 p(x) - [\sum x p(x)]^2 = \frac{143}{12} - \left(\frac{39}{12}\right)^2 = 11.91667 - 10.5625 = 1.35417$$

(iv) $\text{Var}(2\text{X}) = \sum(2\text{x})^2\text{p}(\text{x}) - [\sum(2\text{x})\text{p}(\text{x})]^2 = \frac{572}{12} - \left(\frac{78}{12}\right)^2 = 47.6667 - 42.25 = 5.4167$

$4 \text{ Var }(\text{X}) = 4(1.35417) = 5.4167$. Hence $\text{Var}(2\text{X}) = 4\text{Var}(\text{X}) = 5.4167$

**Example 10.17.**

A random variable X has the probability distribution:

$$f(x) = k \binom{5}{x} \text{ for } x = 0, 1, 2, 3, 4, 5.$$

(a) Determine the value of k. $\qquad$ (b) Determine the expected value of X.

(c) Determine the variance of X. $\qquad$ (d) Show that $\text{Var}(4\text{X}+9) = 16 \text{ Var}(\text{X})$.
