---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-2
chapter_folder: Chapter-02-Limit-Continuity-and-Derivative
chapter_number: 2
chapter_title: LIMIT, CONTINUITY AND DERIVATIVE
page_image: 19
page_printed: 61
section: "2.7.2 Derivative of a Quotient; 2.8 The Connection Between Derivatives and Continuity"
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Mathematics/Unit-02-Limit-Continuity-and-Derivative/0019.jpg
converted_at: "2026-09-06"
converted_by: "agent-13b (glm-vision)"
notes: ""
---

# Page 19 — Unit 02: Limit, Continuity and Derivative

> 📄 Original scan: [0019.jpg](../../../Raw/Mathematics/Unit-02-Limit-Continuity-and-Derivative/0019.jpg) · printed page 61

**Example 19:** Find $\frac{dy}{dx}$ if $y = [(1+x^3)\sqrt{x}]$

**Solution:** Apply the product rule $\frac{dy}{dx} = \frac{d}{dx}[(1+x^3)\sqrt{x}]$

$$\begin{aligned}
&= (1+x^3)\frac{d}{dx}\sqrt{x} + \sqrt{x}\frac{d}{dx}(1+x^3) = (1+x^3)\frac{1}{2}x^{\frac{1}{2}-1} + \sqrt{x}(3x^2) \\
&= \frac{(1+x^3)}{2\sqrt{x}} + 3x^{\frac{5}{2}} = \frac{1+x^3+6x^3}{2\sqrt{x}} = \frac{7x^3+1}{2\sqrt{x}}
\end{aligned}$$

## 2.7.2 Derivative of a Quotient

Just as the derivative of a product is not generally the product of derivatives, so the derivative of a quotient is not generally the quotient of the derivatives. The correct relationship/method is given by the following.

> **Theorem: Quotient Rule**
> If $f$ and $g$ are differentiable functions and $g(x) \neq 0$, then,
>
> $$\frac{d}{dx}\left[\frac{f(x)}{g(x)}\right] = \frac{g(x)f'(x) - f(x)g'(x)}{[g(x)]^2}$$
>
> The denominator times the derivative of numerator minus the numerator times the derivative of denominator all divided by the denominator square.

**Example 20:** Differentiate $y = \dfrac{3x^2 - 1}{2x^3 + 5x^2 + 7}$ w.r.t. $x$.

**Solution:** Apply the quotient rule:

$$\begin{aligned}
\frac{dy}{dx} &= \frac{\overbrace{(2x^3 + 5x^2 + 7)}^{\text{Denominator}} \frac{d}{dx}\overbrace{[3x^2 - 1]}^{\text{Derivative of numerator}} - \overbrace{(3x^2 - 1)}^{\text{Numerator}} \frac{d}{dx}\overbrace{[2x^3 + 5x^2 + 7]}^{\text{Derivative of Denominator}}}{(2x^3 + 5x^2 + 7)^2} \\
&= \frac{(2x^3 + 5x^2 + 7)(6x) - (3x^2 - 1)(6x^2 + 10x)}{(2x^3 + 5x^2 + 7)^2} \\
&= \frac{-6x^4 + 6x^2 + 52x}{(2x^3 + 5x^2 + 7)^2}
\end{aligned}$$

## 2.8 The Connection Between Derivatives and Continuity

* If a function is differentiable at a point, it is automatically continuous at that point.
* But the reverse is not always true. A function can be continuous at a point and still not be differentiable (like a sharp corner or cusp, for example $|x|$ is continuous but not differentiable).
