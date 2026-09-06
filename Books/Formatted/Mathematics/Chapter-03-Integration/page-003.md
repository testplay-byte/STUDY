---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-3
chapter_folder: Chapter-03-Integration
chapter_number: 3
chapter_title: INTEGRATION
page_image: 3
page_printed: 91
section: null
exercise: null
content_type: theory
has_figures: false
figures_count: 0
source_image: ../../../Raw/Mathematics/Unit-03-Integration/0003.jpg
converted_at: "2026-09-06"
converted_by: "agent-13d (glm-vision)"
notes: ""
---

# Page 3 — Unit 03: Integration

> 📄 Original scan: [0003.jpg](../../../Raw/Mathematics/Unit-03-Integration/0003.jpg) · printed page 91

As mentioned above, the constant $c$ is arbitrary constant. Therefore,

$x^4, x^4 + 1, x^4 - \sqrt{2}, x^4 + \pi$ etc. all are anti-derivatives of $4x^3$.

Let us derive some basic and common integral formulae with the help of differentiation.

> **Key Facts**
> * The variable other than $x$, can also be used in indefinite integrals.
> * A number of indefinite integral formulae are found by reversing derivative formulas.

**Formula 3.1:** $\int x^n dx = \frac{x^{n+1}}{n+1} + c$, $n \neq -1$

**Derivation:** We have,

$$\frac{d}{dx} \left[ \frac{x^{n+1}}{n+1} + c \right] = \frac{d}{dx} \left[ \frac{x^{n+1}}{n+1} \right] + \frac{d}{dx} [c] = \frac{(n+1) x^n}{n+1} + 0 = x^n \quad (i)$$

Integrating both sides of (i) with respect to $x$, we have:

$$\begin{aligned}
\int \frac{d}{dx} \left[ \frac{x^{n+1}}{n+1} + c \right] dx &= \int x^n dx \\
\frac{x^{n+1}}{n+1} + c &= \int x^n dx \\
\int x^n dx &= \frac{x^{n+1}}{n+1} + c, \quad n \neq -1
\end{aligned}$$

In general,

$$\int [f(x)]^n f'(x)dx = \frac{[f(x)]^{n+1}}{n+1} + c, \quad n \neq -1$$

**Formula 3.2:** $\int \frac{1}{x} dx = ln x + c$

**Derivation:** We have,

$$\frac{d}{dx} [ln x + c] = \frac{1}{x} \quad (ii)$$

Integrating both sides of (ii) with respect to $x$, we have:

$$\begin{aligned}
\int \frac{d}{dx} [ln x + c] dx &= \int \frac{1}{x} dx \\
ln x + c &= \int \frac{1}{x} dx \\
\int \frac{1}{x} dx &= ln x + c
\end{aligned}$$

In general,

$$\int \frac{f'(x)}{f(x)} dx = ln[f(x)] + c$$
