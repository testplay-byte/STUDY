---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-10
chapter_folder: Chapter-10-Numerical-Methods
chapter_number: 10
chapter_title: NUMERICAL METHODS
page_image: 5
page_printed: null
section: 10.5 Bisection method
exercise: null
content_type: theory
has_figures: true
figures_count: 2
source_image: ../../../Raw/Mathematics/Unit-10-Numerical-Methods/0005.jpg
converted_at: "2026-09-20"
converted_by: "coordinator-w5 (glm-vision)"
notes: "Footer ribbon cut off by scan edge (pixel-verified) -> page_printed null; offset +273 would suggest 278, not used. Missing space after 'possible,' in the Note line preserved as printed."
---

# Page 5 — Unit 10: Numerical Methods

> 📄 Original scan: [0005.jpg](../../../Raw/Mathematics/Unit-10-Numerical-Methods/0005.jpg) · printed page n/a

**Theorem:** If $f(x)$ is continuous in a closed interval $[a, b]$ and $f(a), f(b)$ are of opposite signs, then the equation $f(x) = 0$ will have at least one real root between $a$ and $b$.

Indeed, numerical techniques for finding roots of equations are highly valuable, but each method comes with its own set of advantages and limitations. The choice of method often depends on the specific characteristics of the function being solved, as well as the desired accuracy and computational efficiency.

In this course, we will study the following three methods to find the approximate solution of the non-linear equations.

i. Bisection method.

ii. Regula Falsi method.

iii. Newton Raphson method.

[Figure F1]

## 10.5 Bisection method

For implementing the bisection method, we need two starting value $x_0$ and $x_1$ for the solution such that $f(x_0).f(x_1) < 0$. Then, the equation $f(x) = 0$ has at least one root in the interval $(x_0, x_1)$. We shall illustrate Bisection method graphically by the following figure in which $x_2, x_3, \ldots \ldots$ denotes successive midpoints. This method works as follows:

i. Find $x_2$, the new iterate using $x_2 = \frac{x_0 + x_1}{2}$ and evaluate $f(x_2)$.

ii. If $f(x_2) = 0$, then it is a root of $f(x)$.

iii. If $f(x_2) \neq 0$, there are two possibilities.
   a. If $f(x_0).f(x_2) < 0$, we compute the new iterate $x_3$ as:
      $$x_3 = \frac{x_0 + x_2}{2}$$ and evaluate $f(x_3)$.
   b. If $f(x_1).f(x_2) < 0$, we compute the new iterate $x_3$ as:
      $$x_3 = \frac{x_1 + x_2}{2}$$ and evaluate $f(x_3)$.

[Figure F2]

**Note:** Keep in mind that only one case is possible,$f(x_0).f(x_2) < 0$ or $f(x_1).f(x_2) < 0$.

The process is then repeated with new points until it is felt that the root is determined with sufficient accuracy (how much accuracy we want to obtain, it may be after one decimal or more than this). This method is simple but slowly convergent. It is also called interval halving method or binary-search method.

## Figures on this page

### Figure F1 — Graph illustrating root existence (top right)
- **Type:** curve-plot
- **Caption/Number:** (none printed)
- **Description:** A simple line graph showing a smooth, increasing S-shaped curve (representing a function $y=f(x)$) crossing a horizontal x-axis. The curve starts below the axis on the left and ends above the axis on the right, indicating a sign change between two points.
- **Mathematical meaning:** Illustrates the Intermediate Value Theorem condition where a continuous function $f(x)$ has opposite signs at endpoints $a$ and $b$, guaranteeing at least one root exists between them.

### Figure F2 — Graph illustrating the Bisection method (middle right)
- **Type:** curve-plot
- **Caption/Number:** (none printed)
- **Description:** A coordinate graph showing an increasing curve labeled $y=f(x)$. The x-axis marks points $x_0$, $x_2$, and $x_1$ from left to right. Vertical dashed lines drop from these points to the x-axis. The value $f(x_0)$ is shown below the x-axis (negative), while $f(x_2)$ and $f(x_1)$ are shown above the curve (positive), indicating the root lies between $x_0$ and $x_2$.
- **Mathematical meaning:** Demonstrates the first iteration of the Bisection method: given an interval $(x_0, x_1)$ where $f(x_0)f(x_1)<0$, the midpoint $x_2$ is calculated to narrow down the location of the root.
