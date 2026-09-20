---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-10
chapter_folder: Chapter-10-Numerical-Methods
chapter_number: 10
chapter_title: NUMERICAL METHODS
page_image: 14
page_printed: 287
section: null
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Mathematics/Unit-10-Numerical-Methods/0014.jpg
converted_at: "2026-09-20"
converted_by: "coordinator-w5 (glm-vision)"
notes: "BOOK MISPRINT preserved: y_4 table row prints 0.0508235 (transposed; 1/17 = 0.0588235), while both evaluations below correctly use 0.0588235. MATLAB trapezoidal_rule box -> fenced code block."
---

# Page 14 — Unit 10: Numerical Methods

> 📄 Original scan: [0014.jpg](../../../Raw/Mathematics/Unit-10-Numerical-Methods/0014.jpg) · printed page 287

**Example 7:** Evaluate $\int\limits_{0}^{10}\frac{dx}{1+x^2}$ by using:

i. Trapezoidal rule &nbsp;&nbsp;&nbsp;&nbsp; ii. Simpson $\frac{1}{3}$ rule, taking $h=1$.

**Solution:**

Taking $h = 1$, divide the whole range of the integration $[0, 10]$ into $10$ equal parts. The values of the integrand for each point of sub-division are given below:

| $x_0$ | 0 |
| :--- | :--- |
| $x_1$ | 1 |
| $x_2$ | 2 |
| $x_3$ | 3 |
| $x_4$ | 4 |
| $x_5$ | 5 |
| $x_6$ | 6 |
| $x_7$ | 7 |
| $x_8$ | 8 |
| $x_9$ | 9 |
| $x_{10}$ | 10 |

$$y_n=\frac{1}{1+x_n^2}$$

| $y_0$ | 1 |
| :--- | :--- |
| $y_1$ | 0.5 |
| $y_2$ | 0.2 |
| $y_3$ | 0.1 |
| $y_4$ | 0.0508235 |
| $y_5$ | 0.0384615 |
| $y_6$ | 0.027027 |
| $y_7$ | 0.02 |
| $y_8$ | 0.0153846 |
| $y_9$ | 0.0121951 |
| $y_{10}$ | 0.0099009 |

```
function integral = trapezoidal_rule(f, a, b, n)

% Parameters:
% f: The function to integrate, e.g., @(x) x^2.
% a: The start of the interval.
% b: The end of the interval.
% n: The number of trapezoidal subintervals.
% Step size
h = (b - a) / n;
% Initialize the sum with the first and last terms
integral = 0.5 * (f(a) + f(b));
% Sum the middle terms
for i = 1:n-1
    x = a + i * h;
    integral = integral + f(x);
end
% Multiply by the step size
integral = integral * h;
end
```

i. By trapezoidal rule:

$$\begin{aligned}
\int\limits_{0}^{10}\frac{1}{1+x^2}dx &= \frac{h}{2}[(y_0+y_{10})+2(y_1+y_2+y_3+y_4+y_5 \\
&\qquad\quad + y_6+y_7+y_8+y_9)] \\
&= \frac{1}{2}[(1+0.0099009)+2(0.5+0.2+0.1 \\
&\qquad\quad + 0.0588235+0.0384615+0.027027 \\
&\qquad\quad + 0.02+0.0153846+0.0121951)] \\
&= 1.4768422
\end{aligned}$$

ii. By Simpson's $\frac{1}{3}$ rule:

$$\begin{aligned}
\int\limits_{0}^{10}\frac{1}{1+x^2}dx &= \frac{h}{3}[(y_0+y_{10})+4(y_1+y_3+y_5+y_7+y_9)+2(y_2+y_4+y_6+y_8)] \\
&= \frac{1}{3}[(1+0.0099009)+4(0.5+0.1+0.0384615+0.02+0.0121951) \\
&\qquad\quad +2(0.2+0.0588235+0.027027+0.0153846)] \\
&= 1.4316659
\end{aligned}$$
