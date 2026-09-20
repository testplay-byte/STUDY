---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-10
chapter_folder: Chapter-10-Numerical-Methods
chapter_number: 10
chapter_title: NUMERICAL METHODS
page_image: 4
page_printed: null
section: "iii. Numerical Methods"
exercise: null
content_type: theory
has_figures: false
figures_count: 0
source_image: ../../../Raw/Mathematics/Unit-10-Numerical-Methods/0004.jpg
converted_at: "2026-09-20"
converted_by: "coordinator-w5 (glm-vision)"
notes: "Footer ribbon entirely absent from scan edge (pixel-verified) -> page_printed null; offset +273 would suggest 277, not used. BOOK SLOPPINESS preserved: 'those values of x for which f(x) is true' (means equals zero)."
---

# Page 4 — Unit 10: Numerical Methods

> 📄 Original scan: [0004.jpg](../../../Raw/Mathematics/Unit-10-Numerical-Methods/0004.jpg) · printed page n/a

**Solution Challenge:** Analytical methods generally fail to find exact roots of transcendental equations due to their complexity.

## iii. Numerical Methods

**Need for Numerical Methods:**

* When dealing with complex non-linear algebraic functions or transcendental functions, direct analytical methods are inadequate or impossible.
* **Approximate Solutions:** Numerical methods, like the Newton-Raphson method, Bisection method, or Secant method, are employed to find approximate roots of such equations. These methods iteratively converge on a solution, providing an effective approach when exact solutions are not feasible.

The most commonly used methods for solving expressions of the form

$$f(x) = 0 \tag{10.1}$$

Where, $f(x)$ is a given function. The roots of equation (10.1) which are the required answers, are those values of $x$ for which $f(x)$ is true. For example,

$$f(x) = x^2 + 5x + 6$$

The equation $x^2 + 5x + 6 = 0$ has two roots, -2 and -3. The roots of an equation are also called zeros of the equation. The method we use to find solution is called analytical or direct technique.

The function $f(x)$ can be linear or non-linear. A linear function is of the form $f(x) = ax+b$, and to find the solution of linear equation, we use direct methods and it is easy to find roots.

Non-linear functions or equations may be algebraic functions or transcendental functions.

i. $f(x)$ may be an algebraic function or a polynomial of degree $n$ in the form:

$$f(x) = a_n x_n + a_{n-1} x^{n-1} + a_{n-2} x^{n-2} + \ldots..a_0$$

If the degree is higher or greater than four, it is difficult to find solution by direct methods.

ii. $f(x)$ can be a transcendental function. A transcendental function is one which involves trigonometric, exponential, logarithmic function etc. for example:

$$\begin{aligned}
e^x + \sin(x) + 4 &= 0 \\
e^x + \ln(x) - 7 &= 0 \\
\tan(x) + x^3 + x^2 + 10 &= 0
\end{aligned}$$

Finding solutions of transcendental functions by direct/analytical method is not possible. It is obvious that we need numerical methods to find their roots. Such equations can be best solved by approximate methods. Before proceeding to solve such equations, let us recall the fundamental theorem of roots of $f(x) = 0$ in $a \leq x \leq b$.
