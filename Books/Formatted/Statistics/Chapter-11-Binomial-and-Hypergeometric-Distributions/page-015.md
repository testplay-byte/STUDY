---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-4
chapter_folder: Chapter-11-Binomial-and-Hypergeometric-Distributions
chapter_number: 11
chapter_title: "Binomial and Hypergeometric Distributions"
page_image: 15
page_printed: 109
section: null
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-11-Binomial-and-Hypergeometric-Distributions/0015.jpg
converted_at: "2026-10-01"
converted_by: "agent-S4b (glm-vision)"
notes: "Offset check: printed p.109 = image 15 + 94 (header folio, top-right; odd page). Page opens with the continuation of Example 11.19's solution (broke off on printed p.108 after 'Therefore'): the four P(X=x) computations (paired two-per-line, separated in print by a vertical rule — rendered as \\Bigg|) and the probability table, complete here. Example 11.20 complete on this page with parts (i)-(iv). Small dark ink smudge on right edge beside the table (scan artifact only). No figures."
---

# Page 15 — Binomial and Hypergeometric Distributions (Chapter 11)

> 📄 Original scan: [0015.jpg](../../../Raw/Statistics/Chapter-11-Binomial-and-Hypergeometric-Distributions/0015.jpg) · printed page 109

$$P(X = x) = h(x; 9, 3, 5) = \frac{\binom{5}{x}\binom{9-5}{3-x}}{\binom{9}{3}} \text{ for } x = 0, 1, 2, 3.$$

$$\begin{aligned}
P(X = 0) &= \frac{\binom{5}{0}\binom{9-5}{3-0}}{\binom{9}{3}} = \frac{\binom{5}{0}\binom{4}{3}}{\binom{9}{3}} = \frac{4}{84} & \Bigg|\; P(X = 1) &= \frac{\binom{5}{1}\binom{9-5}{3-1}}{\binom{9}{3}} = \frac{\binom{5}{1}\binom{4}{2}}{\binom{9}{3}} = \frac{30}{84} \\
P(X = 2) &= \frac{\binom{5}{2}\binom{9-5}{3-2}}{\binom{9}{3}} = \frac{\binom{5}{2}\binom{4}{1}}{\binom{9}{3}} = \frac{40}{84} & \Bigg|\; P(X = 3) &= \frac{\binom{5}{3}\binom{9-5}{3-3}}{\binom{9}{3}} = \frac{\binom{5}{3}\binom{4}{0}}{\binom{9}{3}} = \frac{10}{84}
\end{aligned}$$

Thus the hypergeometric probability distribution of red balls in tabular form is given as follows:

| x | 0 | 1 | 2 | 3 | Total |
| :---: | :---: | :---: | :---: | :---: | :---: |
| P(X = x) | 4/84 | 30/84 | 40/84 | 10/84 | 1 |

**Example 11.20.**

There are seven people who work in an office. Of the seven, four would like to be transferred. If three people from this office are randomly selected for transfer, what is the probability that:

(i) All three will want to be transferred?  (ii) Two of the three will want to be transferred?

(iii) At least two will want to be transferred? (iv)At most one will want to be transferred?

**Solution:** The hypergeometric distribution is

$$P(X = x) = \frac{\binom{k}{x}\binom{N-k}{n-x}}{\binom{N}{n}} \text{ for } x = 0, 1, 2, 3, \ldots, n \text{ or k (whichever is less)}$$

Here, $N = 7$, $n = 3$, $k = 4$, $x$ = number of people who wanted the transfer, then the possible values of $x$ are 0, 1, 2 and 3. Therefore

$$P(X = x) = \frac{\binom{4}{x}\binom{7-4}{3-x}}{\binom{7}{3}} \text{ for } x = 0, 1, 2, 3.$$

(i) $\quad P(X = 3) = \dfrac{\binom{4}{3}\binom{7-4}{3-3}}{\binom{7}{3}} = \dfrac{\binom{4}{3}\binom{3}{0}}{\binom{7}{3}} = \dfrac{4}{35} = 0.1143$

(ii) $\quad P(X = 2) = \dfrac{\binom{4}{2}\binom{7-4}{3-2}}{\binom{7}{3}} = \dfrac{\binom{4}{2}\binom{3}{1}}{\binom{7}{3}} = \dfrac{18}{35} = 0.5143$

(iii) $\quad P(X \geq 2) = P(X = 2) + P(X = 3) = \dfrac{18}{35} + \dfrac{4}{35} = \dfrac{22}{35} = 0.6286$

(iv) $\quad P(X \leq 1) = P(X = 0) + P(X = 1) = \dfrac{\binom{4}{0}\binom{7-4}{3-0}}{\binom{7}{3}} + \dfrac{\binom{4}{1}\binom{7-4}{3-1}}{\binom{7}{3}} = \dfrac{1}{35} + \dfrac{12}{35} = \dfrac{13}{35} = 0.3714$
