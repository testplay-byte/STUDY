---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-10
chapter_folder: Chapter-10-Numerical-Methods
chapter_number: 10
chapter_title: NUMERICAL METHODS
page_image: 8
page_printed: null
section: null
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Mathematics/Unit-10-Numerical-Methods/0008.jpg
converted_at: "2026-09-20"
converted_by: "coordinator-w5 (glm-vision)"
notes: "Footer ribbon cut off by scan edge (pixel-verified) -> page_printed null; offset +273 would suggest 281, not used. BOOK PRINT ARTIFACTS preserved: the x_3 chain's second line restates the label 'x_3 =' (reproduced); Example 4 prints 'f(1) = 1.e \u2212 3' as printed. Regula Falsi box -> blockquote."
---

# Page 8 — Unit 10: Numerical Methods

> 📄 Original scan: [0008.jpg](../../../Raw/Mathematics/Unit-10-Numerical-Methods/0008.jpg) · printed page n/a

Convergence may be more rapid than by the bisection method. One drawback of this method is stagnation of an end point. It means that one end of successive interval does not move from the original end point, the approximation for the root denoted by $x_1, x_2, x_3 \ldots$ converges to the exact root $\alpha$ from one side only.

**Example 3:** Use the method of False position for finding the root correct to two decimal places between 0.4 and 0.6 of the equation $\sin(x) = 5x - 2$.

**Solution:**

$$f(x) = \sin(x) - 5x + 2$$

We have $x_0 = 0.4$ and $x_1 = 0.6$

$$f(x_0) = \sin(0.4) - 5(0.4) + 2 = 0.389$$

$$f(x_1) = \sin(0.6) - 5(0.6) + 2 = -0.435$$

Since, $f(x_0)f(x_1) < 0$ therefore

$$\begin{aligned} x_2 &= \frac{x_0f(x_1) - x_1f(x_0)}{f(x_1) - f(x_0)} \\ &= \frac{0.4(-0.435) - 0.6(0.389)}{-0.435 - 0.389} = 0.494 \end{aligned}$$

$$f(x_2) = \sin(0.494) - 5(0.494) + 2 = 0.0042$$

$f(x_1)f(x_2) < 0$

$$\begin{aligned} x_3 &= \frac{x_1f(x_2) - x_2f(x_1)}{f(x_2) - f(x_1)} \\ x_3 &= \frac{0.6(0.0042) - 0.494(-0.435)}{0.0042 - (-0.435)} = 0.4950 \end{aligned}$$

$$f(x_3) = \sin(0.4950) - 5(0.4950) + 2 = 0.00003$$

Since, $f(x_1).f(x_3) < 0$,

Therefore,

$$\begin{aligned} x_4 &= \frac{x_1f(x_3) - x_3f(x_1)}{f(x_3) - f(x_1)} \\ &= \frac{0.6(0.00003) - 0.00003(-0.435)}{0.00003 - (-0.435)} = 0.4949 \end{aligned}$$

> **Regula Falsi Method:**
>
> **Advantages:**
> * Guaranteed Convergence (for Bracketing)
> * Faster Convergence than Bisection
>
> **Disadvantages:**
> * Possible Slow Convergence
> * Not Applicable to All Functions
>
> If the function has multiple roots or the initial guesses do not correctly bracket the root, the method may fail to find a solution.

**Example 4:** Find the root of $xe^x = 3$ by Regula Falsi method correct to two decimal places by taking two initial approximations.

**Solution:**

We have $f(x) = xe^x - 3$

Let $\quad x_0 = 1, x_1 = 1.5$

$\quad f(x_0) = f(1) = 1.e - 3 = -0.28172 (-ve)$

$\quad f(x_1) = f(1.5) = 1.5(e^{1.5}) - 3 = 3.72253 (+ve)$
