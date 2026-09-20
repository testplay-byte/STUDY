---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-10
chapter_folder: Chapter-10-Numerical-Methods
chapter_number: 10
chapter_title: NUMERICAL METHODS
page_image: 7
page_printed: 280
section: 10.6 Regula Falsi Method
exercise: null
content_type: theory
has_figures: true
figures_count: 1
source_image: ../../../Raw/Mathematics/Unit-10-Numerical-Methods/0007.jpg
converted_at: "2026-09-20"
converted_by: "coordinator-w5 (glm-vision)"
notes: "BOOK ODDITY preserved: 'approximate solution = 2.315' printed although x_5 = 2.3125 (1-decimal answer would be 2.3). BOOK SLOPPINESS: 'the two functions must have opposite signs' (means the two values) and 'the intersection the chord' (missing of). F1: f(x_2) labeled below the x-axis."
---

# Page 7 — Unit 10: Numerical Methods

> 📄 Original scan: [0007.jpg](../../../Raw/Mathematics/Unit-10-Numerical-Methods/0007.jpg) · printed page 280

**Example 2:** Find a root of equation $x^3 - x - 11 = 0$ correct to one decimal.

**Solution:** Let $f(x) = x^3 - x - 11$, since two initial approximations are not given. First, we will search $x_0$ and $x_1$.

Since $f(2) = -5 < 0$ and $f(3) = 13 > 0$

A root lies in between 2 and 3, $(x_0 = 2, x_1 = 3)$

$$x_2 = \frac{2+3}{2} = 2.5$$

$$f(2.5) = (2.5)^3 - 2.5 - 11 = 2.215 \text{ (+ve)}$$

Therefore, the root lies in between 2 and 2.5.

$$x_3 = \frac{2 + 2.5}{2} = 2.25$$

$$f(2.25) = (2.25)^3 - 2.25 - 11 = -1.8593 \text{ (-ve)}$$

Therefore, root lies in between $x_2$ and $x_3$.

$$x_4 = \frac{2.5 + 2.25}{2} = 2.375$$

$$f(2.375) = (2.375)^3 - 2.375 - 11 = 0.02148$$

Therefore, root lies in between $x_3$ and $x_4$.

$$x_5 = \frac{x_3 + x_4}{2} = \frac{2.25 + 2.375}{2} = 2.3125$$

We have obtained the accuracy up to 1 decimal. So, approximate solution = 2.315.

## 10.6 Regula Falsi Method

It needs two initial approximations $x_0$ and $x_1$ so that

$f(x_0).f(x_1) < 0$, i.e. the two functions must have opposite signs.

The value of $x_2$ is found as the intersection the chord joining $f(x_0)$ and $f(x_1)$ and the x-axis.

The formula for the Regula Falsi is as follows:

$$x_{n+1} = \frac{x_{n-1}f(x_n) - x_n f(x_{n-1})}{f(x_n) - f(x_{n-1})}$$

Provided $\quad f(x_n)f(x_{n-1}) < 0$.

The iterations will start by taking $n = 1$:

$$x_2 = \frac{x_0 f(x_1) - x_1 f(x_0)}{f(x_1) - f(x_0)}$$

We must have $x_0$, $x_1$ two initial values and $f(x_0)f(x_1) < 0$ or $f(x_0)$ and $f(x_1)$ have opposite signs.

[Figure F1]

## Figures on this page

### Figure F1 — Graph illustrating Regula Falsi method (bottom right)
- **Type:** line-graph
- **Caption/Number:** (none printed)
- **Description:** A Cartesian coordinate system showing an increasing curve representing function $f(x)$. The x-axis is marked with points $x_0$, $x_2$, and $x_1$. A vertical line drops from the curve at $x_0$ to the point $(x_0, f(x_0))$, which is below the x-axis. Another vertical line rises from the curve at $x_1$ to the point $(x_1, f(x_1))$, which is above the x-axis. A dotted straight line (chord) connects the points $(x_0, f(x_0))$ and $(x_1, f(x_1))$, intersecting the x-axis at the point labeled $x_2$. The value $f(x_2)$ is labeled below the x-axis near $x_2$ (the curve is still negative there).
- **Mathematical meaning:** Illustrates the geometric interpretation of the Regula Falsi method, where the next approximation $x_2$ is found at the intersection of the x-axis and the chord joining $(x_0, f(x_0))$ and $(x_1, f(x_1))$.
