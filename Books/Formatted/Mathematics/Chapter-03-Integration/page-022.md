---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-3
chapter_folder: Chapter-03-Integration
chapter_number: 3
chapter_title: INTEGRATION
page_image: 22
page_printed: 110
section: null
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Mathematics/Unit-03-Integration/0022.jpg
converted_at: "2026-09-06"
converted_by: "agent-13e (glm-vision)"
notes: "Continues section 3.8 from p.109 (derivation of the FTC evaluation formula). Book typos preserved verbatim: 'if $f$ is continuous on [a,b] ad F is antiderivative' ('ad' for 'and'); Example 24 first step carries the printed stray tail '= 3^2/2 - 1^2/2' (copy-over from Example 23, printed in the book)."
---

# Page 22 — Unit 03: Integration

> 📄 Original scan: [0022.jpg](../../../Raw/Mathematics/Unit-03-Integration/0022.jpg) · printed page 110

The formula $A'(x) = f(x)$ provides that $A(x)$ is an anti-derivative of $f(x)$ which implies that every other anti-derivative of $f(x)$ on $[a, b]$ can be obtained by adding a constant to $A(x)$.

**By definition of anti-derivative, suppose:**

$$F(x) = A(x) + c \ldots \ldots (ii)$$

We check what happens when we subtract $F(a)$ from $F(b)$. From (ii):

$$F(a) = A(a) + c \ldots \ldots (iii) \quad \text{and} \quad F(b) = A(b) + c \ldots \ldots (iv)$$

Subtracting (iii) from (iv):

$$F(b) - F(a) = [A(b) + c] - [A(a) + c] = A(b) - A(a) = A - 0 = A$$

Therefore, from (i), we have:

$$A = \int_{a}^{b} f(x)dx = F(b) - F(a) \ldots \ldots (v)$$

**Statement:** The Fundamental Theorem of Calculus states that if $f$ is continuous on $[a, b]$ ad $F$ is antiderivative of $f$ on $[a, b]$, then:

$$\int_{a}^{b} f(x)dx = F(b) - F(a)$$

This can be written as:

$$\int_{a}^{b} f(x)dx = |F(x)|_{x=a}^{x=b} = F(b) - F(a)$$

We can emphasise that $a$ and $b$ are values for the variable $x$.

> Thus, the definite integral can be evaluated by finding any anti-derivative of the integral and then subtracting the value of this anti-derivative at the lower limit of integration from its value at the upper limit of integration.

**Example 23:** Evaluate: $\int_{1}^{3} x \ dx$

**Solution:** $\int_{1}^{3} x \ dx = \left| \frac{x^2}{2} \right|_{1}^{3} = \frac{3^2}{2} - \frac{1^2}{2}$ $\longrightarrow$ First, we apply upper limit and then lower limit.

$$= \frac{9}{2} - \frac{1}{2} = \frac{8}{2} = 4$$

**Example 24:** Evaluate: $\int_{-2}^{2}(3x^2 - x + 1)dx$

**Solution:** $\int_{-2}^{2}(3x^2 - x + 1)dx = \left| x^3 - \frac{x^2}{2} + x \right|_{-2}^{2} = \frac{3^2}{2} - \frac{1^2}{2}$

$$= \left( 2^3 - \frac{2^2}{2} + 2 \right) - \left( (-2)^3 - \frac{(-2)^2}{2} + (-2) \right)$$

$$= (8 - 2 + 2) - (-8 - 2 - 2) = 8 + 12 = 20$$
