---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-3
chapter_folder: Chapter-10-Random-Variable-and-Probability-Distributions
chapter_number: 10
chapter_title: Random Variable and Probability Distributions
page_image: 19
page_printed: 79
section: null
exercise: null
content_type: worked-examples
has_figures: true
figures_count: 2
source_image: ../../../Raw/Statistics/Chapter-10-Random-Variable-and-Probability-Distributions/0019.jpg
converted_at: "2026-10-01"
converted_by: "agent-S3c (glm-vision)"
notes: "Offset check: printed p.79 = image 19 + 60 (header folio, top-right). Continuation: opens with properties (iv)-(v) of section 10.17 (started on p.78); page ends mid-solution of Example 10.23 (b)(ii) after the trapezoid line. Yellow-brown water stains across the centre/right of the scan; text still legible. Figure captions print as 'Figure - 6(a)' and 'Figure - 6(b)' (no trailing periods)."
---

# Page 19 — Random Variable and Probability Distributions (Chapter 10)

> 📄 Original scan: [0019.jpg](../../../Raw/Statistics/Chapter-10-Random-Variable-and-Probability-Distributions/0019.jpg) · printed page 79

(iv) As the probability is zero for X = c ( constant ), therefore P( X = a ) = P( X = b ) = 0. If we take an interval a to b, it makes no difference whether end points of the interval are considered or not. Thus we can write:

$$P(a \leq X \leq b) = P(a < X < b) = P(a \leq X < b) = P(a < X \leq b)$$

(v) $$P(a \leq X \leq b) = \int\limits_{a}^{b} f(x) \, dx = \int\limits_{-\infty}^{b} f(x) \, dx - \int\limits_{-\infty}^{a} f(x) \, dx \quad (a < b)$$

**Example 10.23.**

Given a function $f(x) = c x$ for $0 \leq x \leq 2$

(a) Find the value of c so that $f(x)$ is a probability density function.

(b) Find the probabilities (i) $P(X < 1)$. (ii) $P\left(\frac{1}{2}<X<\frac{3}{2}\right)$

**Solution:**

(a) $f(x)$ will be a proper probability density function if the total area under the line and X-axis from 0 to 2 is unity. The graph of $f(x)$ is a right angled triangle. Its area is given by

$$\text{Area} = \frac{\text{height} \times \text{base}}{2}$$

$\text{height} = f(x) = cx = 2c$ at $x = 2$

$\text{base} = 2 - 0 = 2$

Total Area has to be unity, therefore

$$\text{Area} = \frac{2c \times 2}{2} = 1$$

$$2c = 1, \text{ so that } c = \frac{1}{2}$$

Thus $f(x)=\frac{1}{2}x$ for $0 \leq x \leq 2$ is proper probability density function.

[Figure F1]

(b) (i) $P(X < 1)$ is the shaded area of the right-angled triangle.

$$\text{Area} = \frac{\text{height} \times \text{base}}{2}$$

$f(x)=\frac{1}{2}x$

$\text{height (x = 1)} = 1/2$

$\text{base} = 1 - 0 = 1$

$$\text{Area} = \frac{1/2 \times 1}{2}=\frac{1}{4}$$

[Figure F2]

(ii) The probability $P\left(\frac{1}{2}<X<\frac{3}{2}\right)$ is the area of the shaded portion of the diagram. The shaded area is a trapezoid and its area is given by

Area of Trapezoid = ( Average height ) ( Base )

## Figures on this page

### Figure F1 — Graph of probability density function f(x) (middle right)
- **Type:** line-graph
- **Caption/Number:** Figure - 6(a)
- **Description:** A Cartesian coordinate system with vertical axis labeled Y (or f(x)) and horizontal axis labeled X. A straight line starts at the origin (0,0) and slopes upward to the right, ending at point (2, height). The region under this line from x=0 to x=2 forms a right-angled triangle which is shaded. Tick marks on the X-axis indicate values 0, 1, and 2.
- **Mathematical meaning:** Illustrates that the total area under the probability density function $f(x) = \frac{1}{2}x$ over its domain $[0, 2]$ must equal 1 to satisfy the properties of a PDF.

### Figure F2 — Shaded area representing P(X < 1) (bottom right)
- **Type:** line-graph
- **Caption/Number:** Figure - 6(b)
- **Description:** A Cartesian coordinate system with vertical axis labeled Y (or f(x)) and horizontal axis labeled X. A straight line starts at the origin (0,0) and slopes upward to the right. Vertical lines are drawn at $x=1$ and $x=2$. The region under the curve from $x=0$ to $x=1$ is shaded, forming a smaller right-angled triangle. The value $1/2$ is labeled near the top of the vertical line at $x=1$, indicating the height $f(1)$. Tick marks on the X-axis indicate values 0, 1, and 2.
- **Mathematical meaning:** Visualizes the calculation of the cumulative probability $P(X < 1)$ as the area of the shaded right-angled triangle, which equals $\frac{1}{4}$.
