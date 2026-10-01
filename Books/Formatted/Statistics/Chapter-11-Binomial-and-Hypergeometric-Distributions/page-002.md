---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-4
chapter_folder: Chapter-11-Binomial-and-Hypergeometric-Distributions
chapter_number: 11
chapter_title: "Binomial and Hypergeometric Distributions"
page_image: 2
page_printed: 96
section: 11.6 GRAPH OF THE BINOMIAL DISTRIBUTION
exercise: null
content_type: theory
has_figures: true
figures_count: 2
source_image: ../../../Raw/Statistics/Chapter-11-Binomial-and-Hypergeometric-Distributions/0002.jpg
converted_at: "2026-10-01"
converted_by: "agent-S4a (glm-vision)"
notes: "Offset check: printed p.96 = image 2 + 94 (header folio). Opening paragraph continues the §11.5 text from printed p.95 (no heading on this page). §11.6 text also references Figure 3 (positively skewed case), which is not printed on this page (continues next page). Printed layout puts each figure caption line ABOVE its graph; graphs carry no printed 'Figure N' number inside the drawing itself."
---

# Page 2 — Binomial and Hypergeometric Distributions (Chapter 11)

> 📄 Original scan: [0002.jpg](../../../Raw/Statistics/Chapter-11-Binomial-and-Hypergeometric-Distributions/0002.jpg) · printed page 96

The probability distribution of the number of successes so obtained is called the binomial probability distribution for the obvious reason that the probabilities of 0, 1, 2, 3, ..., x, ..., n successes are the respective terms in the binomial expansion $(q + p)^n$. The binomial distribution contains two independent constants, n and p. If n and p are known then we can determine all measures like mean, variance, coefficient of skewness etc. of the distribution. They are called parameters of the binomial distribution. If $p = q = 1/2$, the binomial distribution is a symmetrical distribution and when $p \neq q$, it is a skewed distribution.

## 11.6. GRAPH OF THE BINOMIAL DISTRIBUTION

The probability function will be symmetrical when $p = 1/2$ ( Figure 1 ). If $p > 1/2$ ( Figure 2 ), the probability function will be negatively skewed. If $p < 1/2$ ( Figure 3 ), it will be positively skewed. The greater the difference between p and $1 - p$, the greater the skewness of the probability function. However, as n increases, the probability function approaches symmetry regardless of the difference between p and $1 - p$. The degree of skewness can be measured with the help of a formula called coefficient of skewness = $\frac{q-p}{\sqrt{npq}}$.

**Figure 1.** Binomial distribution for n = 4, p = 1/2.
[Figure F1]

**Figure 2.** Binomial distribution for n = 4, p = 7/10.
[Figure F2]

## Figures on this page

### Figure F1 — Binomial distribution graph, n = 4, p = 1/2 (middle of page)
- **Type:** line-graph (discrete probability vertical-line/dot plot)
- **Caption/Number:** "Figure 1. Binomial distribution for n = 4, p = 1/2." (printed above the graph)
- **Description:** Small centered graph. Horizontal axis labeled X at its right end, ticks 0, 1, 2, 3, 4. Vertical axis has "Y" printed at its top and the rotated label "b(x; 4, 1/2)" along it, with tick values 0, 0.1, 0.2, 0.3, 0.4, 0.5. Solid vertical lines rise from the x-axis to solid black dots at x = 0, 1, 2, 3, 4, each probability printed above its dot: 0.0625, 0.2500, 0.3750, 0.2500, 0.0625. The profile is perfectly symmetrical about x = 2.
- **Mathematical meaning:** Symmetrical binomial distribution for $p = q = 1/2$: $b(x;4,1/2)=\binom{4}{x}(1/2)^4$ gives equal probabilities for symmetric pairs ($x=0$/$x=4$ and $x=1$/$x=3$).

### Figure F2 — Binomial distribution graph, n = 4, p = 7/10 (bottom of page)
- **Type:** line-graph (discrete probability vertical-line/dot plot)
- **Caption/Number:** "Figure 2. Binomial distribution for n = 4, p = 7/10." (printed above the graph)
- **Description:** Small centered graph, same format as Figure 1. Horizontal axis labeled X at its right end, ticks 0, 1, 2, 3, 4. Vertical axis has "Y" printed at its top and the rotated label "b(x; 4, 7/10)" along it, with tick values 0, 0.1, 0.2, 0.3, 0.4, 0.5. Solid vertical lines rise from the x-axis to solid black dots at x = 0, 1, 2, 3, 4, each probability printed above its dot: 0.0081, 0.0756, 0.2646, 0.4116, 0.2401. The peak is at x = 3 with a long left tail.
- **Mathematical meaning:** Negatively skewed binomial distribution for $p > 1/2$ ($p = 7/10$): probability mass concentrates at high numbers of successes, illustrating the negative-skewness case discussed in §11.6.
