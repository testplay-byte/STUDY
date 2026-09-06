---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-2
chapter_folder: Chapter-02-Limit-Continuity-and-Derivative
chapter_number: 2
chapter_title: LIMIT, CONTINUITY AND DERIVATIVE
page_image: 3
page_printed: 45
section: null
exercise: null
content_type: worked-examples
has_figures: true
figures_count: 1
source_image: ../../../Raw/Mathematics/Unit-02-Limit-Continuity-and-Derivative/0003.jpg
converted_at: "2026-09-06"
converted_by: "agent-13a (glm-vision)"
notes: ""
---

# Page 3 — Unit 02: Limit, Continuity and Derivative

> 📄 Original scan: [0003.jpg](../../../Raw/Mathematics/Unit-02-Limit-Continuity-and-Derivative/0003.jpg) · printed page 45

**Example 1:** Using the graph, check whether the limit of the function exists or not.

$$f(x) = \begin{cases} x+2 & x \leq 5 \\ -x+10 & x > 5 \end{cases}$$

$$\lim_{x \to 5^-} f(x) = x + 2 = 7$$

$$\lim_{x \to 5^+} f(x) = -x + 10 = -5 + 10 = 5$$

| $x \to 5^-$ | $f(x)$ |
| :--- | :--- |
| 4.9 | 6.9 |
| 4.99 | 6.99 |
| 4.999 | 6.999 |

[Figure F1]

| $x \to 5^+$ | $f(x)$ |
| :--- | :--- |
| 5.1 | 4.9 |
| 5.01 | 4.99 |
| 5.001 | 4.999 |

Since $\lim_{x \to 5^-} f(x) \neq \lim_{x \to 5^+} f(x)$, we concluded that $\lim_{x \to 5} f(x)$ does not exist.

**Example 2:** Evaluate.
a. $\displaystyle \lim_{x \to 0} \frac{\sin x}{x}$

b. $\displaystyle \lim_{x \to 0} \frac{1-\cos x}{x}$

**Solution:**

a.

| $x \to 0^-$ | $\dfrac{\sin x}{x}$ |
| :--- | :--- |
| $-0.1$ | $0.998341$ |
| $-0.01$ | $0.9999833$ |
| $-0.001$ | $0.999998$ |

a. $\displaystyle \lim_{x \to 0} \frac{\sin x}{x} = 1$

| $x \to 0^+$ | $\dfrac{\sin x}{x}$ |
| :--- | :--- |
| $0.1$ | $0.998341$ |
| $0.01$ | $0.9999833$ |
| $0.001$ | $0.999998$ |

b.

| $x \to 0^-$ | $\dfrac{1-\cos x}{x}$ |
| :--- | :--- |
| $-0.1$ | $-0.0499583$ |
| $-0.01$ | $-0.0049999$ |
| $-0.001$ | $-0.0005001$ |
| $-0.0001$ | $-0.000510$ |

$\displaystyle \lim_{x \to 0} \frac{1-\cos x}{x} = 0$

| $x \to 0^+$ | $\dfrac{1-\cos x}{x}$ |
| :--- | :--- |
| $0.1$ | $0.0499583$ |
| $0.01$ | $0.0049999$ |
| $0.001$ | $0.0005001$ |
| $0.0001$ | $0.000510$ |

**Example 3:** Evaluate:
a. $\displaystyle \lim_{x \to 3} 15$
b. $\displaystyle \lim_{x \to 5} 10x$
c. $\displaystyle \lim_{x \to 5}(x^2 - 5x + 6)$
d. $\displaystyle \lim_{x \to -1} \frac{3x-1}{6x+2}$
e. $\displaystyle \lim_{x \to 1} \frac{x-1}{x^2+x-2}$
f. $\displaystyle \lim_{x \to 2}(3x - 2)^6$

**Solution:**

a. $\displaystyle \lim_{x \to 3} 15 = 15$

b. $\displaystyle \lim_{x \to 5} 10x = 10(5) = 50$

## Figures on this page

### Figure F1 — Graph of piecewise function (center top)
- **Type:** line-graph
- **Caption/Number:** (none printed)
- **Description:** A Cartesian coordinate system showing a piecewise linear function. The left segment is a solid orange line with a positive slope passing through the y-axis at approximately 2, ending at a closed blue dot at coordinates $(5, 7)$. The right segment is a solid orange line with a negative slope starting from an open circle at $(5, 5)$ and extending downwards to the right. The y-axis has labeled tick marks at 5 and 7.
- **Mathematical meaning:** Illustrates a jump discontinuity at $x=5$, where the left-hand limit is 7 and the right-hand limit is 5, demonstrating that the overall limit does not exist at that point.
