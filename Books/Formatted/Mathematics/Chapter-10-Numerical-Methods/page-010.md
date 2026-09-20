---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-10
chapter_folder: Chapter-10-Numerical-Methods
chapter_number: 10
chapter_title: NUMERICAL METHODS
page_image: 10
page_printed: 283
section: 10.7 Newton's Raphson Method
exercise: null
content_type: worked-examples
has_figures: true
figures_count: 1
source_image: ../../../Raw/Mathematics/Unit-10-Numerical-Methods/0010.jpg
converted_at: "2026-09-20"
converted_by: "coordinator-w5 (glm-vision)"
notes: "BOOK TYPO preserved: 'Examble 5:' (Example). Note (i) prints 'then h will small' (missing be); note (iv) odd absolute-value bars |f(a) < f(b)| as printed. Newton's Raphson advantages/disadvantages box -> blockquote placed beside Example 5 solution per scan layout."
---

# Page 10 — Unit 10: Numerical Methods

> 📄 Original scan: [0010.jpg](../../../Raw/Mathematics/Unit-10-Numerical-Methods/0010.jpg) · printed page 283

Hence,
$$x_1 = x_0 + h = x_0 - \frac{f(x_0)}{f'(x_0)}$$

Now, substituting $x_1$ for $x_0$ and $x_2$ for $x_1$, the next better approximations are given by:
$$\begin{aligned} x_2 &= x_1 - \frac{f(x_1)}{f'(x_1)} \\[6pt] \text{and } x_3 &= x_2 - \frac{f(x_2)}{f'(x_2)}. \end{aligned}$$

Proceeding in the same way n times, we get the general formula:

$$x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)} \text{ for } n=0,1,2......$$

Which is known as Newton's Raphson formula.

**Note:**

i. When $f'(x_n)$ is large, i.e. when the slope is large, then $h$ will small (as assumed) and hence, the root can be calculated in even less time.

ii. If we choose the initial approximation $x_0$ close to the root, then we will get the root of the equation very quickly.

iii. The process will evidently fail if $f'(x_0)=0$ is in the neighborhood of the root. In such cases, Regula Falsi method should be used.

iv. If the initial approximation to the root is not given, choose two values of x, say $a$ and $b$, such that $f(a)$ and $f(b)$ are of opposite signs. If $|f(a) < f(b)|$ then take $a$ as the initial guess.

v. Newton's Raphson method is also referred to as the method of tangent.

**Examble 5:** Solve $x^3 + 2x^2 + 10x - 20 = 0$ by Newton's Raphson method.

**Solution:**

Let $\quad f(x) = x^3 + 2x^2 + 10x - 20$

$\quad f'(x) = 3x^2 + 4x + 10$

$$\begin{aligned} x_{n+1} &= x_n - \frac{f(x_n)}{f'(x_n)} = x_n - \frac{[x_n^3 + 2x_n^2 + 10x_n - 20]}{3x_n^2 + 4x_n + 10} \\[8pt] &= \frac{2[x_n^3 + x_n^2 + 10]}{3x_n^2 + 4x_n + 10} ......(i) \end{aligned}$$

We can see that $f(1) = -7 < 0$ and $f(2) = 16 > 0$

Therefore, the root lies in between 1 and 2. Let $x_0 = 1.2$ be the initial approximation.

$$f(1.2) < 0$$

> **Newton's Raphson Method:**
>
> **Advantages:**
> *   Rapid Convergence
> *   Widely Applicable
>
> **Disadvantages:**
> *   Requirement for Derivatives
> *   Dependence on Initial Guess

[Figure F1]

## Figures on this page

### Figure F1 — Graph of y=f(x) showing Newton-Raphson iterations (right side)
- **Type:** line-graph
- **Caption/Number:** (none printed)
- **Description:** A Cartesian coordinate system with a horizontal axis (x-axis) and a vertical axis (y-axis). A smooth, increasing curve labeled $y = f(x)$ is plotted, starting from the lower left (negative x, negative y) and curving upwards to the upper right. Four points are marked on the x-axis from right to left: $x_0$, $x_1$, $x_2$, and $x_3$. The point $(x_0, f(x_0))$ is on the curve. A tangent line is drawn at this point, intersecting the x-axis at $x_1$. Another tangent line appears to be drawn at $(x_1, f(x_1))$ intersecting at $x_2$, and a third at $(x_2, f(x_2))$ intersecting at $x_3$. The point $x_3$ is marked with an arrow and the label "Root", indicating it is closer to where the curve crosses the x-axis than the previous approximations.
- **Mathematical meaning:** Illustrates the geometric interpretation of Newton's Raphson method, where each successive approximation ($x_{n+1}$) is found by taking the x-intercept of the tangent line to the curve $y=f(x)$ at the current point $(x_n, f(x_n))$.