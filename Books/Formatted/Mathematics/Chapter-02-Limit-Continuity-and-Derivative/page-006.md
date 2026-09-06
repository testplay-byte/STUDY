---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-2
chapter_folder: Chapter-02-Limit-Continuity-and-Derivative
chapter_number: 2
chapter_title: LIMIT, CONTINUITY AND DERIVATIVE
page_image: 6
page_printed: 48
section: 2.2.1 Continuity at a Number
exercise: null
content_type: theory
has_figures: true
figures_count: 3
source_image: ../../../Raw/Mathematics/Unit-02-Limit-Continuity-and-Derivative/0006.jpg
converted_at: "2026-09-06"
converted_by: "agent-13a (glm-vision)"
notes: "Book typos preserved verbatim: 'exits' in Definition condition ii, 'f(1) is not define' after Example 5. Example 7 solution sentence breaks off mid-sentence at the page bottom ('...but is also') and continues on the next printed page. Example 7 graph carries printed caption 'Fig (i)'; the printed figure draws the horizontal curve between the y-tick marks 4 and 5 with the hole at x=2 on it (does not place the hole at the true value 5/4) — figure reproduced as printed."
---

# Page 6 — Unit 02: Limit, Continuity and Derivative

> 📄 Original scan: [0006.jpg](../../../Raw/Mathematics/Unit-02-Limit-Continuity-and-Derivative/0006.jpg) · printed page 48

## 2.2.1 Continuity at a Number

Figures (i) - (v), at page 47, suggest the threefold conditions of continuity of a function at a number $a$ (instead of 1 we consider $a$).

> **Definition: Continuity**
> A function is said to be **continuous** at a number **a** if
> i. $f(a)$ is defined
> ii. $\lim_{x \to a} f(x)$ exits, and
> iii. $\lim_{x \to a} f(x) = f(a)$

**Example 5:** The rational function

$$\begin{aligned} f(x) &= \frac{x^3 - 1}{x - 1} \\ &= \frac{(x - 1)(x^2 + x + 1)}{x - 1} \\ &= x^2 + x + 1, x \neq 1 \end{aligned}$$

is discontinuous at 1 since $f(1)$ is not define.

From graph, we observe that $\lim_{x \to 1} f(x) = 3$. We can also state that $f$ is continuous at any other number $x \neq 1$.

[Figure F1]

**Example 6:** Given figure shows the graph of the piecewise function defined

$$f(x) = \begin{cases} x^2 & x < 2 \\ 5 & x = 2 \\ -x + 6 & x > 2 \end{cases}$$

Now $f(2)$ is defined and is equal to 5. Next, we have

$$\begin{aligned} \lim_{x \to 2^-} f(x) &= \lim_{x \to 2^-} x^2 = 4 \\ \lim_{x \to 2^+} f(x) &= \lim_{x \to 2^+} -x + 6 = 4 \end{aligned}$$

This implies limit exists: $\lim_{x \to 2} f(x) = 4$.

Since $\lim_{x \to 2} f(x) \neq f(2) = 5$, therefore $f$ is discontinuous at 2.

[Figure F2]

**Example 7:** Let $f(x) = \frac{x^2+x-6}{x^2-4}$, for $x \neq 2$. Show how to define $f(2)$ in order to make $f$ continuous function at 2.

**Solution:** Although $f(2)$ is not defined, if $x \neq 2$, we have

$$f(x) = \frac{x^2 + x - 6}{x^2 - 4} = \frac{(x - 2)(x + 3)}{(x - 2)(x + 2)} = \frac{x + 3}{x + 2}$$

The function $f(x) = \frac{x+3}{x+2}$ is equal to $f(x)$ for $x \neq 2$, but is also [Figure F3]

## Figures on this page

### Figure F1 — Graph of rational function (top right)
- **Type:** curve-plot
- **Caption/Number:** (none printed)
- **Description:** A Cartesian coordinate system showing the graph of a parabola-like curve. The x-axis has ticks at -2, 0, and 2. The y-axis has ticks at 0, 2, and 4. The curve is U-shaped with its vertex in the fourth quadrant (around x=0.5). There is an open circle on the curve at x=1, y=3.
- **Mathematical meaning:** Illustrates that $\lim_{x \to 1} f(x) = 3$ exists even though $f(1)$ is undefined, representing a removable discontinuity.

### Figure F2 — Graph of piecewise function (middle right)
- **Type:** line-graph / curve-plot
- **Caption/Number:** (none printed)
- **Description:** A Cartesian coordinate system with x-axis ticks at 1, 2, 3 and y-axis ticks at 4, 5. The graph consists of three parts: a parabola segment for $x < 2$, an isolated solid dot at $(2, 5)$, and a straight line segment descending from left to right for $x > 2$. There is an open circle at $(2, 4)$ where the two segments meet.
- **Mathematical meaning:** Demonstrates a jump/removable discontinuity where the limit as $x \to 2$ is 4, but the defined value $f(2)=5$ does not match the limit.

### Figure F3 — Graph of simplified rational function (bottom right)
- **Type:** curve-plot
- **Caption/Number:** Fig (i)
- **Description:** A Cartesian coordinate system with x-axis ticks at 1, 2, 3 and y-axis ticks at 4, 5. A perfectly horizontal curve is drawn between the 4 and 5 tick marks (printed figure places it around $y=4.5$), running from the left edge to the right edge of the plot. There is an open circle (hole) on this curve at $x=2$.
- **Mathematical meaning:** Shows the simplified form of the function from Example 7, indicating the value needed at $x=2$ to ensure continuity.
