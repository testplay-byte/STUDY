---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-2
chapter_folder: Chapter-02-Limit-Continuity-and-Derivative
chapter_number: 2
chapter_title: LIMIT, CONTINUITY AND DERIVATIVE
page_image: 37
page_printed: 79
section: 2.21 Point of Inflection
exercise: null
content_type: theory
has_figures: true
figures_count: 1
source_image: ../../../Raw/Mathematics/Unit-02-Limit-Continuity-and-Derivative/0037.jpg
converted_at: "2026-09-06"
converted_by: "agent-13c (glm-vision)"
notes: "Book quirks preserved verbatim: intro paragraph prints 'In the example 47 function changes concavity...' (lowercase, missing words as printed) and '...changes from upward or downward or reverse'; definition prints 'Let f be a continuous at c'."
---

# Page 37 — Unit 02: Limit, Continuity and Derivative

> 📄 Original scan: [0037.jpg](../../../Raw/Mathematics/Unit-02-Limit-Continuity-and-Derivative/0037.jpg) · printed page 79

## 2.21 Point of Inflection

In the example 47 function changes concavity at the point that corresponds to $x = \frac{3}{2}$. As $x$ increases through $\frac{3}{2}$, the graph of $f$ changes from concave upward to concave downward at the point $\left(\frac{3}{2}, \frac{27}{4}\right)$ a point on the graph of a function where the concavity changes from upward or downward or reverse is called a point of inflection.

> **Definition:** Point of Inflection
>
> Let $f$ be a continuous at $c$, a point $(c, f(c))$ is point of inflection if there exists an open interval $(a, b)$ that contains $c$ such that the graph of $f$ is either:
> 
> i. Concave upward on $(a, c)$ and concave downward on $(c, b)$ or
> 
> ii. Concave downward on $(a, c)$ and concave upward on $(c, b)$.

**Example 47:** Find points of inflection of $f(x) = -x^3 + x^2$

[Figure F1]

**Solution:**

$$f'(x) = -3x^2 + 2x \text{ and } f''(x) = -6x + 2$$

Since $f''(x) = 0$ at $\frac{1}{3}$, the point $\left(\frac{1}{3}, \frac{2}{27}\right)$ is the only possible point of inflection. We have

$$f''(x) = 6\left(-x + \frac{1}{3}\right) > 0 \text{ for } x < \frac{1}{3}$$

$$f''(x) = 6\left(-x + \frac{1}{3}\right) < 0 \text{ for } x > \frac{1}{3}$$

Implies that the graph of $f$ is concave upward on $\left(-\infty, \frac{1}{3}\right)$ and concave downward on $\left(\frac{1}{3}, \infty\right)$.

Thus, $\left(\frac{1}{3}, f\left(\frac{1}{3}\right)\right)$ or $\left(\frac{1}{3}, \frac{2}{27}\right)$ is a point of inflection.

> **Definition:** Second Derivative Test for Relative Extrema
>
> Let $f$ be function for which $f''$ exists on an interval $(a, b)$ that contains the critical number $c$.
> 
> i. If $f''(c) > 0$, then $f(c)$ is a relative minimum.
> 
> ii. If $f''(c) < 0$, then $f(c)$ is a relative maximum.

## Figures on this page

### Figure F1 — graph of f(x) = -x^3 + x^2 (middle right)
- **Type:** curve-plot
- **Caption/Number:** (none printed)
- **Description:** A Cartesian coordinate system showing the curve of the function $y = -x^3 + x^2$. The horizontal axis (x-axis) and vertical axis (y-axis) intersect at the origin (0). The curve passes through the origin (0,0), rises slightly into the first quadrant reaching a local maximum near $x = 2/3$, and then descends through the x-intercept at $x=1$ into the fourth quadrant. The graph illustrates the change in concavity at the point of inflection.
- **Mathematical meaning:** The cubic function $f(x) = -x^3 + x^2$ has roots at $x=0$ and $x=1$, a local maximum at $x=2/3$, and a point of inflection at $x=1/3$ where the concavity changes from upward to downward.
