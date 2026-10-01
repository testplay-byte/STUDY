---
subject: statistics
book_title: "Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot"
batch: S-3
chapter_folder: Chapter-10-Random-Variable-and-Probability-Distributions
chapter_number: 10
chapter_title: "Random Variable and Probability Distributions"
page_image: 9
page_printed: 69
section: null
exercise: null
content_type: worked-examples
has_figures: true
figures_count: 1
source_image: ../../../Raw/Statistics/Chapter-10-Random-Variable-and-Probability-Distributions/0009.jpg
converted_at: "2026-10-01"
converted_by: "agent-S3b (glm-vision)"
notes: "Offset check: printed p.69 = image 9 + 60 (header folio). Book misprint preserved: stray period after 120 in Example 10.8 solution ('120. sample points.'). Caption prints with spaced hyphen 'Figure - 3'. The urn line (Red/White/Total marbles with 4/6/10 beneath) is printed as unbordered aligned text, not a table; reproduced with spacing. Page ends cleanly after the second distribution table (Example 10.9 graphs continue on next page)."
---

# Page 9 — Random Variable and Probability Distributions (Chapter 10)

> 📄 Original scan: [0009.jpg](../../../Raw/Statistics/Chapter-10-Random-Variable-and-Probability-Distributions/0009.jpg) · printed page 69

**Example 10.8.**

From an urn containing 4 red and 6 white round marbles, a man draws three marbles at random without replacement. If X is a random variable which denotes the number of red marbles drawn, what is the probability distribution of X? Draw a probability histogram.

**Solution:** Red marbles $\quad$ White marbles $\quad$ Total marbles

$\qquad\quad\;\; 4 \qquad\qquad\quad 6 \qquad\qquad\quad 10$

$\therefore$ S contains $\binom{10}{3} = 120$. sample points.

If the random variable X denotes the number of red marbles, the possible values of x are 0, 1, 2, and 3, and their respective probabilities are:

$$
\begin{aligned}
P(X=0) &= \frac{\binom{4}{0}\binom{6}{3}}{\binom{10}{3}} = \frac{5}{30} & P(X=1) &= \frac{\binom{4}{1}\binom{6}{2}}{\binom{10}{3}} = \frac{15}{30} \\
P(X=2) &= \frac{\binom{4}{2}\binom{6}{1}}{\binom{10}{3}} = \frac{9}{30} & P(X=3) &= \frac{\binom{4}{3}\binom{6}{0}}{\binom{10}{3}} = \frac{1}{30}
\end{aligned}
$$

The probability distribution of red marbles in a tabular form is:

| x | 0 | 1 | 2 | 3 | Total |
| :---: | :---: | :---: | :---: | :---: | :---: |
| p(x) | 5/30 | 15/30 | 9/30 | 1/30 | 1 |

The probability distribution is shown as a histogram in Figure - 3.

[Figure F1]

**Example 10.9.**

Given the discrete probability distribution:
$p(x) = \binom{4}{x}\left(\frac{1}{2}\right)^x\left(\frac{1}{2}\right)^{4-x}$ for $x = 0, 1, 2, 3, 4$.
Find the complete probability distribution and draw suitable graphs.

**Solution:** $p(x) = \binom{4}{x}\left(\frac{1}{2}\right)^x\left(\frac{1}{2}\right)^{4-x}$ for $x = 0, 1, 2, 3, 4$

$$
\begin{aligned}
P(X=0) &= \binom{4}{0}\left(\frac{1}{2}\right)^0\left(\frac{1}{2}\right)^4 = \frac{1}{16} & P(X=1) &= \binom{4}{1}\left(\frac{1}{2}\right)\left(\frac{1}{2}\right)^3 = \frac{4}{16} \\
P(X=2) &= \binom{4}{2}\left(\frac{1}{2}\right)^2\left(\frac{1}{2}\right)^2 = \frac{6}{16} & P(X=3) &= \binom{4}{3}\left(\frac{1}{2}\right)^3\left(\frac{1}{2}\right) = \frac{4}{16} \\
P(X=4) &= \binom{4}{4}\left(\frac{1}{2}\right)^4\left(\frac{1}{2}\right)^0 = \frac{1}{16}
\end{aligned}
$$

The probability distribution of X in a tabular form is:

| x | 0 | 1 | 2 | 3 | 4 | Total |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| p(x) | 1/16 | 4/16 | 6/16 | 4/16 | 1/16 | 1 |

## Figures on this page

### Figure F1 — Probability histogram of red marbles (center of page, below the first distribution table)
- **Type:** histogram
- **Caption/Number:** "Figure - 3. Number of red marbles." (printed centered below the graph)
- **Description:** Two plain axes with no arrowheads. Vertical axis labelled $p(x)$ (horizontal label at its top) with slash-fraction tick labels from bottom to top: $0$, $3/30$, $6/30$, $9/30$, $12/30$, $15/30$. Horizontal axis labelled $x$ at its far right end, with tick labels $0$, $1$, $2$, $3$. Four open (unfilled, black-outlined) rectangular bars with gaps between them, centred on $x = 0, 1, 2, 3$: the bar at $x = 0$ rises to $5/30$ (top edge just below the $6/30$ tick), at $x = 1$ to $15/30$, at $x = 2$ to $9/30$, and at $x = 3$ to $1/30$ (a very short bar). No shading, legend, or other annotations.
- **Mathematical meaning:** Graphs the discrete probability distribution of the number of red marbles drawn; drawing exactly 1 red marble is the most likely outcome ($15/30 = 0.5$).
