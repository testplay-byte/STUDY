---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-3
chapter_folder: Chapter-10-Random-Variable-and-Probability-Distributions
chapter_number: 10
chapter_title: Random Variable and Probability Distributions
page_image: 16
page_printed: 76
section: null
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-10-Random-Variable-and-Probability-Distributions/0016.jpg
converted_at: "2026-10-01"
converted_by: "agent-S3c (glm-vision)"
notes: "Offset check: printed p.76 = image 16 + 60 (header folio)."
---

# Page 16 — Random Variable and Probability Distributions (Chapter 10)

> 📄 Original scan: [0016.jpg](../../../Raw/Statistics/Chapter-10-Random-Variable-and-Probability-Distributions/0016.jpg) · printed page 76

**Example 10.21.**

(a) Four cards are drawn at random from an ordinary deck of 52 cards. Determine the probability distribution of number of aces. Also find E( X ).

(b) If X and Y are two independent random variables and probability functions for X and Y are given as: $p(x)=\frac{1}{6}$ for $x=1,2,3,4,5,6$ and $p(y)=\frac{1}{8}\binom{3}{y}$ for $y=0,1,2,3$.

Find: (i) E(X) (ii) E(Y) (iii) Var (X) (iv) Var(Y) (v) E(XY) (vi) Var (X ± Y).

**Solution:**

(a) Let X be a random variable giving the number of aces in a random draw of 4 cards from an ordinary deck of 52 cards, then the possible values of X are 0, 1, 2, 3 or 4. Therefore

$$\begin{aligned} P(\text{No Ace}) = P(X = 0) &= \frac{\binom{4}{0}\binom{48}{4}}{\binom{52}{4}} = 0.718737 \\[10pt] P(\text{One Ace}) = P(X = 1) &= \frac{\binom{4}{1}\binom{48}{3}}{\binom{52}{4}} = 0.255551 \\[10pt] P(\text{Two Aces}) = P(X = 2) &= \frac{\binom{4}{2}\binom{48}{2}}{\binom{52}{4}} = 0.024999 \\[10pt] P(\text{Three Aces}) = P(X = 3) &= \frac{\binom{4}{3}\binom{48}{1}}{\binom{52}{4}} = 0.000709 \\[10pt] P(\text{Four Aces}) = P(X = 4) &= \frac{\binom{4}{4}\binom{48}{0}}{\binom{52}{4}} = 0.000004 \end{aligned}$$

The probability distribution of X in a tabular form for the computation of E ( X ) is:

| x | 0 | 1 | 2 | 3 | 4 | Total |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| p(x) | 0.718737 | 0.255551 | 0.024999 | 0.000709 | 0.000004 | 1 |
| x p(x) | 0 | 0.255551 | 0.049998 | 0.002127 | 0.000016 | 0.307692 |

$$E(X) = \sum x p(x) = 0.307692 \cong 0.31.$$

(b) The necessary calculations are given below:

| x | p(x) | x p(x) | x²p(x) | y | p(y) | y p(y) | y²p(y) |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | 1/6 | 1/6 | 1/6 | 0 | 1/8 | 0 | 0 |
| 2 | 1/6 | 2/6 | 4/6 | 1 | 3/8 | 3/8 | 3/8 |
| 3 | 1/6 | 3/6 | 9/6 | 2 | 3/8 | 6/8 | 12/8 |
| 4 | 1/6 | 4/6 | 16/6 | 3 | 1/8 | 3/8 | 9/8 |
| 5 | 1/6 | 5/6 | 25/6 | **Total** | **1** | **12/8** | **24/8** |
| 6 | 1/6 | 6/6 | 36/6 | | | | |
| **Total** | **1** | **21/6** | **91/6** | | | | |

(i) $E(X) = \sum x p(x) = \frac{21}{6} = 3.5$

(ii) $E(Y) = \sum y p(y) = \frac{12}{8} = 1.5$

(iii) $\begin{aligned} \text{Var}(X) &= \sum x^2 p(x) - [\sum x p(x)]^2 \\ &= \frac{91}{6} - \left(\frac{21}{6}\right)^2 = 2.92 \end{aligned}$

(iv) $\begin{aligned} \text{Var}(Y) &= \sum y^2 p(y) - [\sum y p(y)]^2 \\ &= \frac{24}{8} - \left(\frac{12}{8}\right)^2 = 0.75 \end{aligned}$

(v) $E(XY) = E(X) E(Y) = (3.5)(1.5) = 5.25$

(vi) $\text{Var}(X \pm Y) = \text{Var}(X) + \text{Var}(Y) = 2.92 + 0.75 = 3.67$
