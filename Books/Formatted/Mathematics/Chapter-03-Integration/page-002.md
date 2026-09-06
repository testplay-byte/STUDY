---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-3
chapter_folder: Chapter-03-Integration
chapter_number: 3
chapter_title: INTEGRATION
page_image: 2
page_printed: 90
section: 3.1 Integration
exercise: null
content_type: theory
has_figures: false
figures_count: 0
source_image: ../../../Raw/Mathematics/Unit-03-Integration/0002.jpg
converted_at: "2026-09-06"
converted_by: "agent-13d (glm-vision)"
notes: ""
---

# Page 2 — Unit 03: Integration

> 📄 Original scan: [0002.jpg](../../../Raw/Mathematics/Unit-03-Integration/0002.jpg) · printed page 90

## 3.1 Integration

This unit examines the process by which we determine functions from their derivatives. We are already familiar with inverse operations. For example, addition and subtraction are inverse of each other. Similarly, multiplication and division are inverse of each other. In the same way, the inverse operation of differentiation is anti-differentiation or integration.

This unit provides two processes and their relationship to one another. One step is to find function from their derivatives. In the second step, we can determine things like area and volume through successive approximations. This process is called integration. This is very important area in mathematics and was discovered independently by Leibnitz and Newton.

The process of finding a function from one of its known values and its derivative $f(x)$ has two steps:

The first is to find a formula that gives us all the functions that could possibly have $f(x)$ as a derivative. If $f'(x)$ is defined as derivative, then $f(x)$ is called anti-derivative and the formula that gives them all is called the indefinite integral of $f(x)$. The reverse process of derivative or anti-differentiation is the main topic of this unit.

**Definition 3.1:**

A function $F'(x)$ is called an anti-derivative of another function $f(x)$ if:

$$F'(x) = f(x)$$

For example:
$$\frac{1}{4}x^4, \quad \frac{1}{4}x^4 + 3, \quad \frac{1}{4}x^4 - \pi, \quad \frac{1}{4}x^4 + c \quad (c \text{ is any constant}).$$
are anti-derivatives of $x^3$ since the derivative of each is $x^3$.

Above example shows that a function can have many anti-derivatives. In fact, if $F(x)$ is any anti-derivative of $f(x)$ and $c$ is any constant, then $F(x) + c$ is also an anti-derivative of $f(x)$ since:

$$\frac{d}{dx}[F(x) + c] = \frac{d}{dx}[F(x)] + \frac{d}{dx}[c] = f(x) + 0 = f(x)$$

Therefore, if $F(x)$ is any anti-derivative of $f(x)$ on a given interval, then for any value of $c$, the function $F(x)+c$ is also an anti-derivative of $f(x)$ on that interval.

Symbolically we write:
$$\int f(x)dx = F(x) + c$$

Where the symbol, “$\int$” is called ‘integral sign’ and $f(x)$ is called integrand. The symbol $dx$ indicates that the integration is performed with respect to the variable $x$. The arbitrary constant $c$ is called ‘constant of integration’.

For Example,
As, $\displaystyle \frac{d}{dx}(x^4) = 4x^3$
Therefore, $\int 4x^3 dx = x^4 + c$
