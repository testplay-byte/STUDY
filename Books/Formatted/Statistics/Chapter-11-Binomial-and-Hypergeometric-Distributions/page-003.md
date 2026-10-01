---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-4
chapter_folder: Chapter-11-Binomial-and-Hypergeometric-Distributions
chapter_number: 11
chapter_title: "Binomial and Hypergeometric Distributions"
page_image: 3
page_printed: 97
section: null
exercise: null
content_type: worked-examples
has_figures: true
figures_count: 1
source_image: ../../../Raw/Statistics/Chapter-11-Binomial-and-Hypergeometric-Distributions/0003.jpg
converted_at: "2026-10-01"
converted_by: "agent-S4a (glm-vision)"
notes: "Offset check: printed p.97 = image 3 + 94 (header folio, top-right; odd page). Top of page carries Figure 3 (the positively-skewed case promised on printed p.96) with its caption printed above the graph. Table header cell for x = 5 is printed with a stray apostrophe before the 5 (' 5) — book misprint preserved verbatim. No printed section headings on this page; page is dominated by Example 11.1 (worked example)."
---

# Page 3 — Binomial and Hypergeometric Distributions (Chapter 11)

> 📄 Original scan: [0003.jpg](../../../Raw/Statistics/Chapter-11-Binomial-and-Hypergeometric-Distributions/0003.jpg) · printed page 97

**Figure 3.** Binomial distribution for $n = 4$, $p = 3/10$.
[Figure F1]

**Example 11.1.**

An event has the probability $p = 2/5$. Find the complete binomial distribution for $n = 5$.

**Solution:** The probability of x successes in a series of n trials is given by

$$P[X = x] = b(x; n, p) = \binom{n}{x} p^x q^{n-x} \text{ for } x = 0, 1, 2, 3, ..., n.$$

Here, $n = 5$, $p = 2/5$ and $q = 1 - p = 3/5$

Let the random variable X denote the number of successes, then the possible values of X are 0, 1, 2, 3, 4 and 5. Therefore

$$P[ X = x ] = b(x; 5, 2/5) = \binom{5}{x} \left(\frac{2}{5}\right)^x \left(\frac{3}{5}\right)^{5-x} \text{ for } x = 0, 1, 2, 3, 4, 5.$$

$$\begin{aligned}
P[ X = 0 ] &= b(0; 5, 2/5) = \binom{5}{0}\left(\frac{2}{5}\right)^0\left(\frac{3}{5}\right)^5 = \frac{243}{3125} \\
P[ X = 1 ] &= b(1; 5, 2/5) = \binom{5}{1}\left(\frac{2}{5}\right)\left(\frac{3}{5}\right)^4 = \frac{810}{3125} \\
P[ X = 2 ] &= b(2; 5, 2/5) = \binom{5}{2}\left(\frac{2}{5}\right)^2\left(\frac{3}{5}\right)^3 = \frac{1080}{3125} \\
P[ X = 3 ] &= b(3; 5, 2/5) = \binom{5}{3}\left(\frac{2}{5}\right)^3\left(\frac{3}{5}\right)^2 = \frac{720}{3125} \\
P[ X = 4 ] &= b(4; 5, 2/5) = \binom{5}{4}\left(\frac{2}{5}\right)^4\left(\frac{3}{5}\right) = \frac{240}{3125} \\
P[ X = 5 ] &= b(5; 5, 2/5) = \binom{5}{5}\left(\frac{2}{5}\right)^5\left(\frac{3}{5}\right)^0 = \frac{32}{3125}
\end{aligned}$$

Thus the complete binomial distribution with $p = 2/5$ and $n = 5$ in tabular form is given as follows:

| x | 0 | 1 | 2 | 3 | 4 | ' 5 | Total |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| P[ X = x ] | $\frac{243}{3125}$ | $\frac{810}{3125}$ | $\frac{1080}{3125}$ | $\frac{720}{3125}$ | $\frac{240}{3125}$ | $\frac{32}{3125}$ | $\sum P[ X = x ] = 1$ |

## Figures on this page

### Figure F1 — Binomial distribution graph, n = 4, p = 3/10 (top of page)
- **Type:** line-graph (discrete probability stem/dot plot)
- **Caption/Number:** "Figure 3. Binomial distribution for n = 4, p = 3/10." (printed above the graph)
- **Description:** Small centered graph. Vertical axis has "Y" printed at its top and the rotated label "b(x; 4, 3/10)" along it, with tick values 0, 0.1, 0.2, 0.3, 0.4, 0.5. Horizontal axis labeled X, ticks 0, 1, 2, 3, 4. Solid vertical stems rise from the x-axis to solid black dots at x = 0, 1, 2, 3, 4, each probability printed above its dot: 0.2401, 0.4116, 0.2646, 0.0756, 0.0081. The peak is at x = 1 with the tail extending to the right.
- **Mathematical meaning:** Positively skewed binomial distribution for $p < 1/2$ ($p = 3/10$): probability mass concentrates at low numbers of successes, completing the three skewness cases (Figures 1–3) of §11.6.
