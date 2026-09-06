---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-2
chapter_folder: Chapter-02-Limit-Continuity-and-Derivative
chapter_number: 2
chapter_title: LIMIT, CONTINUITY AND DERIVATIVE
page_image: 26
page_printed: 68
section: "2.13 Derivative of Exponential Functions; 2.14 Derivative of Logarithmic Functions"
exercise: null
content_type: theory
has_figures: false
figures_count: 0
source_image: ../../../Raw/Mathematics/Unit-02-Limit-Continuity-and-Derivative/0026.jpg
converted_at: "2026-09-06"
converted_by: "agent-13b2 (glm-vision)"
notes: "Continuation page: opens with the last three display lines of the xy=1 implicit-differentiation example begun on p.67; first line genuinely prints 'x d(y)/dx + y d(x)/dx = 0' (with d(x)/dx). Book typos preserved verbatim: 'The derivative of exponential is:', 'We find the derivative of common logarithmic which is continuous functions.', 'Taking ln both sides'. Printed formula 'd/dx a^x = a^x . 1/lna' transcribed as printed. No scan-edge cropping, no figures, no sidebar boxes."
---

# Page 26 — Unit 02: Limit, Continuity and Derivative

> 📄 Original scan: [0026.jpg](../../../Raw/Mathematics/Unit-02-Limit-Continuity-and-Derivative/0026.jpg) · printed page 68

$$x \frac{d(y)}{dx} + y \frac{d(x)}{dx} = 0$$

$$x \frac{dy}{dx} + y = 0$$

$$\frac{dy}{dx} = -\frac{y}{x}$$

If we take, $y = \frac{1}{x}$, we get

$$\frac{dy}{dx} = -\frac{1}{x^2}$$

This method of obtaining derivatives is called implicit differentiation.

**Example 31:** Use implicit differentiation to find $\frac{dy}{dx}$ if $5y^2 + \sin y = x^2$

**Solution:** $\frac{d}{dx}[5y^2 + \sin y] = \frac{d}{dx}[x^2]$

$$5 \frac{d}{dx} y^2 + \frac{d}{dx} \sin y = 2x$$

$$5(2y \frac{dy}{dx}) + \cos y \frac{dy}{dx} = 2x$$

$$(10y + \cos y) \frac{dy}{dx} = 2x$$

Solving for $\frac{dy}{dx}$ we obtain: $\frac{dy}{dx} = \frac{2x}{10y + \cos y}$

## 2.13 Derivative of Exponential Functions

The derivative of exponential is: $\boxed{\frac{d}{dx} e^x = e^x}$ like $\frac{d}{dx} e^{3x} = e^{3x}.3$

**Example 32:** Differentiate $y = x^2 e^{5x}$ w.r.t. $x$.

**Solution:** $\frac{dy}{dx} = \frac{d}{dx}[x^2 e^{5x}]$

$$= x^2 \frac{d}{dx} e^{5x} + e^{5x} \frac{d}{dx} x^2 = x^2 e^{5x}.5 + e^{5x}.2x = 5x^2 e^{5x} + 2xe^{5x} = xe^{5x}(5x + 2)$$

## 2.14 Derivative of Logarithmic Functions

We find the derivative of common logarithmic which is continuous functions.

$\boxed{\frac{d}{dx} lnx = \frac{1}{x}}$ like $\frac{d}{dx} ln(x^3 + 1) = \frac{1}{x^3+1}\frac{d}{dx}(x^3 + 1) = \frac{3x^2}{x^3+1}$.

**Example 33:** Differentiate $ln(4x^3 + 2x^2 + 9)$ w.r.t. $x$.

**Solution:** $y = ln(4x^3 + 2x^2 + 9)$

$$\frac{dy}{dx} = \frac{1}{4x^3 + 2x^2 + 9} \frac{d}{dx}(4x^3 + 2x^2 + 9) = \frac{1}{4x^3 + 2x^2 + 9}(12x^2 + 4x) = \frac{4x(3x + 1)}{4x^3 + 2x^2 + 9}$$

**Derivative of $y = a^x$:** $\frac{d}{dx} a^x = a^x . \frac{1}{lna}$

We will apply the chain rule to find the derivative of parametric equations.

**Example 34:** Differentiate $y = 4^{3x^2+5}$ w.r.t. $x$.

**Solution:** Taking $ln$ both sides

$$lny = ln4^{3x^2+5}$$

$$lny = (3x^2 + 5).ln4$$

$$\frac{1}{y} \frac{dy}{dx} = ln4.\frac{d}{dx}(3x^2 + 5), \quad \frac{dy}{dx} = y \, ln4 \, (6x) = ln4(4^{3x^2+5})6x = 6ln4(4^{3x^2+5})x$$
