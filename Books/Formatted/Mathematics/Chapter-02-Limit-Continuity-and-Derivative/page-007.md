---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-2
chapter_folder: Chapter-02-Limit-Continuity-and-Derivative
chapter_number: 2
chapter_title: LIMIT, CONTINUITY AND DERIVATIVE
page_image: 7
page_printed: 49
section: 2.2.2 Continuity on an Interval; Example 8
exercise: null
content_type: theory
has_figures: true
figures_count: 4
source_image: ../../../Raw/Mathematics/Unit-02-Limit-Continuity-and-Derivative/0007.jpg
converted_at: "2026-09-06"
converted_by: "agent-13a (glm-vision)"
notes: "Continuation page: Example 7's solution sentence completes from p.48 ('...but is also' → 'continuous at x = 2 having the value of 5/4'). Book prints 'Thus f is the continuous extension of f to x = 2' using f for both functions — preserved verbatim. The 2.2.2 paragraph prints '...continuous on (a,b) and in addition, it is continuous on [a,b)' (book's own interval wording, mathematically incomplete — preserved verbatim). Top-right graph carries printed caption 'Fig (ii)' with y-axis label as the stacked fraction 5/4."
---

# Page 7 — Unit 02: Limit, Continuity and Derivative

> 📄 Original scan: [0007.jpg](../../../Raw/Mathematics/Unit-02-Limit-Continuity-and-Derivative/0007.jpg) · printed page 49

continuous at $x = 2$ having the value of $\frac{5}{4}$. Thus $f$ is the continuous extension of $f$ to $x = 2$ and

$$\lim_{x \to 2} \frac{x^2 + x - 6}{x^2 - 4} = \lim_{x \to 2} \frac{x + 3}{x + 2} = \frac{5}{4}$$

The graph of $f$ is shown in figure (i).

The graph of its continuous extension is shown in figure (ii).

[Figure F1]

$$f(x) = \frac{x + 3}{x + 2} = \begin{cases} \frac{x^2 + x - 6}{x^2 - 4}, & x \neq 2 \\ \frac{5}{4}, & x = 2 \end{cases}$$

We can also observe that $x = 2$ is removable discontinuity for the $f(x) = \frac{x^2+x-6}{x^2-4}$.

## 2.2.2 Continuity on an Interval

A function is said to be continuous on an open interval $(a, b)$ if it is continuous at every number in the interval. A function $f$ is continuous on a closed interval $[a, b]$ if it is continuous on $(a, b)$ and in addition, it is continuous on $[a, b)$

$$\lim_{x \to a^+} f(x) = f(a) \text{ and } \lim_{x \to b^-} f(x) = f(b)$$

### Example 8:

a. $f(x) = \frac{1}{\sqrt{1-x^2}}$ is continuous on the open interval $(-1, 1)$ but is not continuous on the closed interval $[-1, 1]$, since neither $f(-1)$ nor $f(1)$ is defined. [Figure F2]

b. $f(x) = \sqrt{1-x^2}$ is continuous on $[-1, 1]$ we can observe from figure that $\lim_{x \to -1^+} f(x) = f(-1) = 0$ and $\lim_{x \to 1^-} f(x) = f(1) = 0$ [Figure F3]

c. $f(x) = \sqrt{x-1}$ is continuous on $[1, \infty)$ since $\lim_{x \to 1^+} f(x) = f(1) = 0$ [Figure F4]

## Figures on this page

### Figure F1 — Graph of continuous extension of f(x) (top right)
- **Type:** line-graph
- **Caption/Number:** Fig (ii)
- **Description:** A Cartesian coordinate system with x-axis labeled with ticks at 1, 2, 3 and y-axis labeled with the stacked fraction $\frac{5}{4}$. A horizontal orange/red line is plotted at y = 5/4 across the visible x-range. A solid blue dot is marked specifically at the point (2, 5/4).
- **Mathematical meaning:** Illustrates the continuous extension of the function $f(x) = \frac{x+3}{x+2}$ where the removable discontinuity at $x=2$ has been filled by defining $f(2)=5/4$, resulting in a constant horizontal line.

### Figure F2 — Graph of f(x) = 1/sqrt(1-x^2) (middle right)
- **Type:** curve-plot
- **Caption/Number:** (none printed)
- **Description:** A Cartesian coordinate system with x-axis ticks at -1, 0, 1 and y-axis ticks at 1, 2, 3. An orange U-shaped curve opens upwards, symmetric about the y-axis, with vertical asymptotes approaching $x=-1$ and $x=1$. The minimum point is at $(0, 1)$.
- **Mathematical meaning:** Shows that $f(x) = \frac{1}{\sqrt{1-x^2}}$ is defined and continuous only on the open interval $(-1, 1)$, tending to infinity as $x$ approaches the endpoints.

### Figure F3 — Graph of f(x) = sqrt(1-x^2) (lower middle right)
- **Type:** curve-plot
- **Caption/Number:** (none printed)
- **Description:** A Cartesian coordinate system with x-axis ticks at -1, -0.5, 0, 0.5, 1 and y-axis ticks at 0.5, 1. An orange semi-circular arc represents the upper half of a circle centered at the origin with radius 1, connecting $(-1, 0)$ to $(1, 0)$ through $(0, 1)$.
- **Mathematical meaning:** Demonstrates that $f(x) = \sqrt{1-x^2}$ is continuous on the closed interval $[-1, 1]$, including the endpoints where the function value is 0.

### Figure F4 — Graph of f(x) = sqrt(x-1) (bottom right)
- **Type:** curve-plot
- **Caption/Number:** (none printed)
- **Description:** A Cartesian coordinate system with x-axis ticks at 0, 1, 2, 3 and y-axis ticks at 1, 2. An orange curve starts at the point $(1, 0)$ on the x-axis and increases monotonically to the right, representing a square root function shifted right by 1 unit.
- **Mathematical meaning:** Shows that $f(x) = \sqrt{x-1}$ is continuous on the interval $[1, \infty)$, starting from the origin of its domain at $x=1$.
