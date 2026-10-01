---
subject: statistics
book_title: "Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot"
batch: S-3
chapter_folder: Chapter-10-Random-Variable-and-Probability-Distributions
chapter_number: 10
chapter_title: "Random Variable and Probability Distributions"
page_image: 14
page_printed: 74
section: null
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-10-Random-Variable-and-Probability-Distributions/0014.jpg
converted_at: "2026-10-01"
converted_by: "agent-S3b (glm-vision)"
notes: "Offset check: printed p.74 = image 14 + 60 (header folio, top-left). Continuation page: opens with the Solution of Example 10.17 (stated on p.73) and ends with the bottom border of the Example 10.18 calculation table — its solution continues on the next image (nothing printed below the table). Fraction forms as printed: k = 1/32 slash in the text line; 1/32 before the binomial coefficient and all table/sum fractions stacked. Dash cells in both Total rows as printed; x−E(X) column signs (− 0.75, + 0.25, + 1.25, + 2.25) as printed. Faint vertical crease/shadow near left margin in the scan, text fully legible; no figures."
---

# Page 14 — Random Variable and Probability Distributions (Chapter 10)

> 📄 Original scan: [0014.jpg](../../../Raw/Statistics/Chapter-10-Random-Variable-and-Probability-Distributions/0014.jpg) · printed page 74

**Solution:**

(a) Since the sum of probabilities is one that is $\sum_{x=0}^{5} f(x) = 1$ gives

$$k \left[ \binom{5}{0} + \binom{5}{1} + \binom{5}{2} + \binom{5}{3} + \binom{5}{4} + \binom{5}{5} \right] = 1$$

$$k[ 1+5+10+10+5+1 ] = 1 \text{ or } k[32] = 1, \text{ so that } k = 1/32$$

Thus, $f(x) = \frac{1}{32}\binom{5}{x}$ for $x = 0, 1, 2, 3, 4, 5$.

| x | f(x) | x f(x) | x²f(x) | (4x + 9) | (4x + 9) f(x) | (4x + 9)² f(x) |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 0 | 1/32 | 0 | 0 | 9 | 9/32 | 81/32 |
| 1 | 5/32 | 5/32 | 5/32 | 13 | 65/32 | 845/32 |
| 2 | 10/32 | 20/32 | 40/32 | 17 | 170/32 | 2890/32 |
| 3 | 10/32 | 30/32 | 90/32 | 21 | 210/32 | 4410/32 |
| 4 | 5/32 | 20/32 | 80/32 | 25 | 125/32 | 3125/32 |
| 5 | 1/32 | 5/32 | 25/32 | 29 | 29/32 | 841/32 |
| **Total** | **1** | **80/32** | **240/32** | **–** | **608/32** | **12192/32** |

(b) $E(X) = \sum x f(x) = \frac{80}{32} = 2.5$

$E(X^2) = \sum x^2 f(x) = \frac{240}{32} = 7.5$

(c) $\text{Var}(X) = E(X^2) - [E(X)]^2 = 7.5 - (2.5)^2 = 1.25$

$E(4X + 9) = \sum (4x + 9) f(x) = \frac{608}{32} = 19$

$E(4X + 9)^2 = \sum (4x + 9)^2 f(x) = \frac{12192}{32} = 381$

(d) $\text{Var}(4X + 9) = E(4X + 9)^2 - [E(4X + 9)]^2 = 381 - (19)^2 = 20$

$16 \text{ Var}(X) = 16(1.25) = 20$. Hence, $\text{Var}(4X + 9) = 16 \text{ Var}(X) = 20$

**Example 10.18.**

The probability distribution of a discrete random variable X is given by

$$f(x) = \binom{3}{x} \left(\frac{1}{4}\right)^x \left(\frac{3}{4}\right)^{3-x} \text{ for } x= 0, 1, 2, 3.$$

(i) Find $E(X)$ and $\text{Var}(X)$ $\qquad$ (ii) Show that $E[X - E(X)]^2 = \text{Var}(X)$

**Solution:** The necessary calculations are given below:

| x | $f(x) = \binom{3}{x} \left(\frac{1}{4}\right)^x \left(\frac{3}{4}\right)^{3-x}$ | x f(x) | x²f(x) | x – E(X) | [x – E(X)]² f(x) |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 0 | $\binom{3}{0} \left(\frac{1}{4}\right)^0 \left(\frac{3}{4}\right)^3 = \frac{27}{64}$ | 0 | 0 | – 0.75 | $\frac{15.1875}{64}$ |
| 1 | $\binom{3}{1} \left(\frac{1}{4}\right)^1 \left(\frac{3}{4}\right)^2 = \frac{27}{64}$ | $\frac{27}{64}$ | $\frac{27}{64}$ | + 0.25 | $\frac{1.6875}{64}$ |
| 2 | $\binom{3}{2} \left(\frac{1}{4}\right)^2 \left(\frac{3}{4}\right)^1 = \frac{9}{64}$ | $\frac{18}{64}$ | $\frac{36}{64}$ | + 1.25 | $\frac{14.0625}{64}$ |
| 3 | $\binom{3}{3} \left(\frac{1}{4}\right)^3 \left(\frac{3}{4}\right)^0 = \frac{1}{64}$ | $\frac{3}{64}$ | $\frac{9}{64}$ | + 2.25 | $\frac{5.0625}{64}$ |
| **Total** | **1** | **$\frac{48}{64}$** | **$\frac{72}{64}$** | **–** | **$\frac{36}{64}$** |
