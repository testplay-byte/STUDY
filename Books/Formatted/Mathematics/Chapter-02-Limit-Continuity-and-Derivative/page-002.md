---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-2
chapter_folder: Chapter-02-Limit-Continuity-and-Derivative
chapter_number: 2
chapter_title: LIMIT, CONTINUITY AND DERIVATIVE
page_image: 2
page_printed: 44
section: 2.1 Limits of Functions; 2.1.1 Limit of a Function as x Approaches to a Number
exercise: null
content_type: theory
has_figures: true
figures_count: 1
source_image: ../../../Raw/Mathematics/Unit-02-Limit-Continuity-and-Derivative/0002.jpg
converted_at: "2026-09-06"
converted_by: "agent-13a (glm-vision)"
notes: ""
---

# Page 2 — Unit 02: Limit, Continuity and Derivative

> 📄 Original scan: [0002.jpg](../../../Raw/Mathematics/Unit-02-Limit-Continuity-and-Derivative/0002.jpg) · printed page 44

## 2.1 Limits of Functions

Two of the most fundamental concepts in the study of calculus are the notions of function and the limit of the function. In this first section, we shall be especially interested in determining whether the values $f(x)$ of a function $f$ approach a fixed number L as $x$ approaches a number '$a$' using the symbol '$\rightarrow$' for the word 'approach' we ask $f(x)\rightarrow L$ as $x \rightarrow a$.

### 2.1.1 Limit of a Function as $x$ Approaches to a Number

Consider a function:
$$f(x)=\frac{16-x^{2}}{4+x}$$

Whose domain is set of all real numbers except $-4$. Although $f(-4)$ is not defined, nonetheless, $f(x)$ can be calculated for any value of $x$ near $-4$. The table shows that, as $x$ approaches to $-4$ from either the left or right, the functional values $f(x)$ approaches to 8. That is, when $x$ is near $-4$, $f(x)$ is near 8. We say 8 is the limit of $f(x)$ as $x$ approaches to $-4$. We can write as:

$$f(x)\rightarrow 8 \text{ as } x \rightarrow -4 \text{ or } \lim_{x \rightarrow -4}\frac{16-x^{2}}{4+x}=8$$

| $x$ | $f(x)$ |
| :---: | :---: |
| -4.1 | 8.1 |
| -4.01 | 8.01 |
| -4.001 | 8.001 |
| -3.9 | 7.9 |
| -3.99 | 7.99 |
| -3.999 | 7.999 |

[Figure F1]

For $x \neq -4$, $f$ can be simplified by cancellation $f(x)=\frac{16-x^{2}}{4+x}=\frac{(4+x)(4-x)}{4+x}=4-x$.

The graph of $f$ is essentially the graph of $y = 4 - x$ with the exception that the graph of $f$ has a hole at the point that corresponds to $x = -4$. As $x$ get closer and closer to $-4$, represented by the two arrowheads on the $x$-axis. The two arrowheads on the $y$-axis simultaneously get closer and closer to the number 8.

> **Intuitive Definition:** If $f(x)$ can be made arbitrarily closer to a finite number by taking $x$ sufficiently close to but different from a number **a**, from both the left and right side of **a**, then $\lim_{x \rightarrow a} f(x) = L$
>
> $x \rightarrow a^-$ denote that $x$ approaches **a** from the left and $x \rightarrow a^+$ denote that $x$ approaches **a** from the right.
> Thus, if both sides have the common value $L$,
> $$\lim_{x \rightarrow a^-} f(x) = \lim_{x \rightarrow a^+} f(x) = L$$
> We say that:
> $$\lim_{x \rightarrow a} f(x) \text{ exist and write } \lim_{x \rightarrow a} f(x) = L$$
> Note: The existence of a limit of a function $f$ at **a** does not depend on whether $f$ is actually defined for **a** but only on whether $f$ is defined for near **a**.

## Figures on this page

### Figure F1 — Graph of f(x) near x = -4 (middle right)
- **Type:** line-graph
- **Caption/Number:** (none printed)
- **Description:** A Cartesian coordinate system showing the graph of the function $y = 4 - x$ as a straight line with a negative slope. There is an open circle (hole) at the point corresponding to $x = -4$, where the y-value would be 8. Two arrowheads are present on the x-axis pointing towards $-4$ from the left and right sides. Two arrowheads are also present on the y-axis pointing towards the value 8 from below and above. A dotted line connects the open circle at $(-4, 8)$ down to the x-axis at $-4$ and across to the y-axis at 8.
- **Mathematical meaning:** Illustrates that while $f(-4)$ is undefined (the hole), the limit of $f(x)$ as $x$ approaches $-4$ exists and equals 8 because the function values approach 8 from both directions.
