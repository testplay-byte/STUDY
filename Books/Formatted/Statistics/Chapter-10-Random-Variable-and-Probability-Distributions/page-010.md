---
subject: statistics
book_title: "Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot"
batch: S-3
chapter_folder: Chapter-10-Random-Variable-and-Probability-Distributions
chapter_number: 10
chapter_title: "Random Variable and Probability Distributions"
page_image: 10
page_printed: 70
section: null
exercise: null
content_type: worked-examples
has_figures: true
figures_count: 2
source_image: ../../../Raw/Statistics/Chapter-10-Random-Variable-and-Probability-Distributions/0010.jpg
converted_at: "2026-10-01"
converted_by: "agent-S3b (glm-vision)"
notes: "Offset check: printed p.70 = image 10 + 60 (header folio, top-left on this even page). The two graphs at the top of the page are the 'suitable graphs' of Example 10.9 (started on printed p.69); their printed captions have inconsistent spacing: 'Figure - 4. (a) Number of heads' vs 'Figure - 4.(b) Number of heads'. Book typo preserved in Example 10.10 (c): 'that student participates' (article 'a' missing). Page ends mid-solution: parts (iii)-(v) of Example 10.11 continue on the next page."
---

# Page 10 — Random Variable and Probability Distributions (Chapter 10)

> 📄 Original scan: [0010.jpg](../../../Raw/Statistics/Chapter-10-Random-Variable-and-Probability-Distributions/0010.jpg) · printed page 70

[Figure F1] [Figure F2]

**Example 10.10.**

Following is the probability distribution of a random variable that represents the number of extra curricular activities a college freshman participates in:

| x | 0 | 1 | 2 | 3 | 4 | Total |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| p( x ) | 0.06 | 0.14 | 0.45 | 0.21 | 0.14 | 1 |

(a) Find the probability that a student participates in more than two activities.
(b) Find the probability that a student participates in at least two activities.
(c) Find the probability that student participates in at most two activities.
(d) Find the probability that a student participates in fewer than two activities.

**Solution:**

(a) P( more than two activities ) = $P( X > 2 ) = P( X = 3 ) + P( X = 4 ) = 0.21 + 0.14 = 0.35$

(b) P( at least two activities ) = $P( X \geq 2 ) = P( X = 2 ) + P( X = 3 ) + P( X = 4 ) = 0.45 + 0.21 + 0.14 = 0.80$

(c) P( at most two activities ) = $P( X \leq 2 ) = P( X = 0 ) + P( X = 1 ) + P( X = 2 ) = 0.06 + 0.14 + 0.45 = 0.65$

(d) P( fewer than two activities ) = $P( X < 2 ) = P( X = 0 ) + P( X = 1 ) = 0.06 + 0.14 = 0.20$

**Example 10.11.**

A random variable X has the following probability distribution:

| x | -2 | -1 | 0 | 1 | 2 | 3 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| p( x ) | 0.1 | k | 0.2 | 2k | 0.3 | 3k |

Find: (i) $k$ (ii) $P(X < 2)$ (iii) $P(X \geq 2)$ (iv) $P(-2 < X < 2)$ (v) $P(X \leq 1)$.

**Solution:**

(i) Since the sum of probabilities is one that is $\sum\limits_{x=-2}^{3} p(x) = 1$ gives

$$0.1 + k + 0.2 + 2k + 0.3 + 3k = 1 \quad \text{or} \quad 0.6 + 6k = 1 \quad \text{or} \quad 6k = 1 - 0.6 = 0.4$$

$$\text{so that } k = \frac{0.4}{6} = \frac{4}{60} = \frac{1}{15}$$

(ii) $P(X < 2) = P(X = -2) + P(X = -1) + P(X = 0) + P(X = 1)$

$$= 0.1 + k + 0.2 + 2k = 0.3 + 3k = 0.3 + 3\left(\frac{1}{15}\right) = 0.3 + 0.2 = 0.5$$

## Figures on this page

### Figure F1 — Line graph of the number of heads (top left of page, above Example 10.10)
- **Type:** line-graph
- **Caption/Number:** "Figure - 4. (a) Number of heads" (printed below the graph)
- **Description:** Spike/line graph on two plain axes: vertical axis labelled $p(x)$ at its top, horizontal axis labelled $x$ at its right end. Y-axis tick labels are slash fractions $0$, $1/16$, $2/16$, $3/16$, $4/16$, $5/16$, $6/16$ from bottom to top; x-axis ticks $0$, $1$, $2$, $3$, $4$. Solid black dots are plotted at $(0, 1/16)$, $(1, 4/16)$, $(2, 6/16)$, $(3, 4/16)$, $(4, 1/16)$, each connected to the x-axis by a vertical stem line. No shading, legend, or other annotations.
- **Mathematical meaning:** Line-graph (spike) form of the binomial distribution $p(x) = \binom{4}{x}(1/2)^4$ for the number of heads in four tosses, symmetric and peaking at $x = 2$ ($6/16$).

### Figure F2 — Probability histogram of the number of heads (top right of page, beside Figure F1)
- **Type:** histogram
- **Caption/Number:** "Figure - 4.(b) Number of heads" (printed below the graph)
- **Description:** Histogram on the same kind of axes: vertical axis labelled $p(x)$ at its top with slash-fraction tick labels $0$, $1/16$, $2/16$, $3/16$, $4/16$, $5/16$, $6/16$; horizontal axis labelled $x$ with tick labels $0$, $1$, $2$, $3$, $4$. Five open (unfilled, black-outlined) rectangular bars with gaps between them, centred on $x = 0, 1, 2, 3, 4$, with heights $1/16$, $4/16$, $6/16$, $4/16$, $1/16$ respectively. No arrowheads, shading, legend, or other annotations.
- **Mathematical meaning:** Histogram form of the same distribution as Figure F1 — the probability distribution of the number of heads in four tosses of a coin.
