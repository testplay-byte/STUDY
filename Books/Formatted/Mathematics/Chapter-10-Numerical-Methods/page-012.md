---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-10
chapter_folder: Chapter-10-Numerical-Methods
chapter_number: 10
chapter_title: NUMERICAL METHODS
page_image: 12
page_printed: 285
section: 10.8 Numerical Integration; 10.8.1 Trapezoidal Rule
exercise: "10.1"
content_type: mixed
has_figures: true
figures_count: 1
source_image: ../../../Raw/Mathematics/Unit-10-Numerical-Methods/0012.jpg
converted_at: "2026-09-20"
converted_by: "coordinator-w5 (glm-vision)"
notes: "BOOK PRINT ARTIFACT preserved: Exercise 10.1 Q.5 prints '3x \u2212 e^x = : [0, 1]' (incomplete equation, right side missing) as printed."
---

# Page 12 — Unit 10: Numerical Methods

> 📄 Original scan: [0012.jpg](../../../Raw/Mathematics/Unit-10-Numerical-Methods/0012.jpg) · printed page 285

## Exercise 10.1

Find the root of the following equations correct to two decimal places using bisection method.

1. $x^3 - x^2 + x - 7 = 0 : [2, 3]$
2. $x^3 - 2x - 5 = 0 : [2, 3]$
3. $x^3 - 4x - 9 = 0 : [2, 3]$
4. $x - \cos(x) = 0 : [0, 1]$
5. $3x - e^x = : [0, 1]$

Find the root of the following equations correct to two decimal places using the method of False position (Regula Falsi method).

6. $x^3 - 4x - 9 = 0 : [2, 3]$
7. $x^3 - 4x - 1 = 0 : [2, 3]$
8. $xe^x = 2 : [0, 1]$
9. $e^x \sin(x) = 1 : [0, 1]$
10. $x = \cos(x) : [0, 1]$

Using Newton's Raphson method, find a root correct to three places of the following.
Initial guess is $x_0=2$.

11. $x^3 - 3x - 5 = 0$
12. $x^4 - x - 10 = 0$
13. $e^x = 1 + 2x$
14. $3x - 1 = \cos(x)$
15. $\sin(x) = 1 - x$
16. $x^2 + 4\sin(x) = 0$

17. A rectangular field has an area of 2500 square meters, and the length of the field is 20 meters longer than the width. Find the width of the field using the Newton-Raphson method (two decimal places). Initial guess is $x_0=20$.

18. A company models the profit P(x) in thousands of dollars from producing $x$ units of a product with the following nonlinear profit function:
$$P(x) = x^3 - 4x^2 - 7x + 10$$
The company wants to determine the production level $x$ where the profit is zero ($P(x) = 0$).
Use the Bisection Method to approximate the root within the interval [-1, 1.5].
(Perform only four iterations)

## 10.8 Numerical Integration

The process of computing $\int\limits_{a}^{b} y dx$, where $y = f(x)$ is given by a set of tabulated values, $[x_i, y_i]$, $i = 0, 1, 2......n$, $a = x_0$ and $b = x_n$ is called numerical integration. Since, $y = f(x)$ is a single variable function, the process in general, is known as quadrature. We replace $f(x)$ by an interpolating formula and integrate it in between the given limits. In this way, we can derive quadrature formula for approximate integration of a function defined by a set of numerical values.

### 10.8.1 Trapezoidal Rule

Let $I = \int\limits_{a}^{b} y dx$, where $y = f(x)$ takes the values $y_0, y_1, y_2 ...... y_n$ for $x_0, x_1, x_2 ...... x_n$.

Let us divide the interval $[a, b]$ into $n$ equal parts of width $h$, so that $a = x_0, x_1 = x_0 + h$,

[Figure F1]

## Figures on this page

### Figure F1 — Trapezoidal rule diagram (bottom right)
- **Type:** geometric-diagram
- **Caption/Number:** (none printed)
- **Description:** A graph showing a curve $y=f(x)$ plotted against an x-axis. The interval from $a=x_0$ to $x_n=b$ is divided into $n$ sub-intervals of equal width $h$. Vertical lines are drawn at each partition point ($x_0, x_0+h, x_0+2h, ..., x_0+nh$), forming trapezoids under the curve. The first, second, and last trapezoids are explicitly labeled with circled numbers (1), (2), and (n) respectively. The height of the last vertical line is labeled $y_n$.
- **Mathematical meaning:** Illustrates the geometric basis for the Trapezoidal Rule, where the area under a curve is approximated by summing the areas of $n$ trapezoids formed between consecutive data points.
