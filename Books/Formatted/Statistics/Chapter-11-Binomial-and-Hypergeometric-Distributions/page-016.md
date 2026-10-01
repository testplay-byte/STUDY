---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-4
chapter_folder: Chapter-11-Binomial-and-Hypergeometric-Distributions
chapter_number: 11
chapter_title: "Binomial and Hypergeometric Distributions"
page_image: 16
page_printed: 110
section: null
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-11-Binomial-and-Hypergeometric-Distributions/0016.jpg
converted_at: "2026-10-01"
converted_by: "agent-S4c (glm-vision)"
notes: "Offset check: printed p.110 = image 16 + 94 (header folio). Continues examples block from p.109 (Example 11.20 complete there); this page starts fresh with Example 11.21. In Example 11.22 solution the P(X = 1) and P(X = 2) calculations are printed side-by-side in two columns separated by a vertical rule that extends down past the P(X = 3) line; transcribed sequentially."
---

# Page 16 — Binomial and Hypergeometric Distributions (Chapter 11)

> 📄 Original scan: [0016.jpg](../../../Raw/Statistics/Chapter-11-Binomial-and-Hypergeometric-Distributions/0016.jpg) · printed page 110

**Example 11.21.**
Three balls are drawn from a bag containing 5 white and 3 black balls. Find the probability of obtaining: (i) Less than 2 white balls. (ii) Less than 2 black balls.

**Solution:** The hypergeometric distribution is

$$P(X = x) = \frac{\binom{k}{x} \binom{N-k}{n-x}}{\binom{N}{n}} \text{ for } x = 0, 1, 2, 3, ..., n \text{ or } k \text{ (whichever is less)}$$

(i) Here, $N=8$ ($5$ white balls + $3$ black balls), $n=3$, $k=5$ (No. of white balls ) and $x =$ Number of white balls, then the possible values of x are $0, 1, 2, 3$. Therefore

$$P(X = x) = \frac{\binom{5}{x} \binom{8-5}{3-x}}{\binom{8}{3}} \text{ for } x = 0, 1, 2, 3.$$

$$P(X < 2) = \frac{\binom{5}{0}\binom{3}{3}}{\binom{8}{3}} + \frac{\binom{5}{1}\binom{3}{2}}{\binom{8}{3}} = \frac{1}{56} + \frac{15}{56} = \frac{16}{56} = 0.2857$$

(ii) Here, $N = 8$, $n = 3$, $k = 3$ ( No. of black balls ) and $x =$ Number of black balls, then the possible values of x are $0, 1, 2, 3$. Therefore

$$P(X = x) = \frac{\binom{3}{x} \binom{8-3}{3-x}}{\binom{8}{3}} \text{ for } x = 0, 1, 2, 3.$$

$$P(X < 2) = \frac{\binom{3}{0}\binom{5}{3}}{\binom{8}{3}} + \frac{\binom{3}{1}\binom{5}{2}}{\binom{8}{3}} = \frac{10}{56} + \frac{30}{56} = \frac{40}{56} = 0.7143$$

**Example 11.22.**
A committee of size 3 is selected from 4 men and 2 women. Find the probability distribution by hypergeometric experiment for the number of men on the committee.

**Solution:** The hypergeometric distribution is

$$P(X = x) = \frac{\binom{k}{x} \binom{N-k}{n-x}}{\binom{N}{n}} \text{ for } x = 0, 1, 2, 3, ..., n \text{ or } k \text{ (whichever is less)}$$

Here, $N=6$, $n=3$, $k=4$ and $x =$ Number of men $= 1, 2, 3$. Therefore

$$P(X = x) = \frac{\binom{4}{x} \binom{6-4}{3-x}}{\binom{6}{3}} \text{ for } x = 1, 2, 3.$$

$$P(X = 1) = \frac{\binom{4}{1}\binom{6-4}{3-1}}{\binom{6}{3}} = \frac{\binom{4}{1}\binom{2}{2}}{\binom{6}{3}} = \frac{4}{20} \quad \left| \quad P(X = 2) = \frac{\binom{4}{2}\binom{6-4}{3-2}}{\binom{6}{3}} = \frac{\binom{4}{2}\binom{2}{1}}{\binom{6}{3}} = \frac{12}{20} \right.$$

$$P(X = 3) = \frac{\binom{4}{3}\binom{6-4}{3-3}}{\binom{6}{3}} = \frac{\binom{4}{3}\binom{2}{0}}{\binom{6}{3}} = \frac{4}{20}$$
