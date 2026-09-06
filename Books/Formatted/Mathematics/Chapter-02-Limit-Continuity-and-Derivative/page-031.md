---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-2
chapter_folder: Chapter-02-Limit-Continuity-and-Derivative
chapter_number: 2
chapter_title: LIMIT, CONTINUITY AND DERIVATIVE
page_image: 31
page_printed: 73
section: "2.18 Higher Derivatives"
exercise: null
content_type: theory
has_figures: false
figures_count: 0
source_image: ../../../Raw/Mathematics/Unit-02-Limit-Continuity-and-Derivative/0031.jpg
converted_at: "2026-09-06"
converted_by: "agent-13b2 (glm-vision)"
notes: "Example 40 parts a/b/c printed side-by-side on one line (nbsp separators). Book typo preserved: 'We denote the third and fourth derivative, by ...' (stray comma). §2.18 heading prints 'Higher Derivatives' (vs §2.17 'Higher Order Derivatives') — as printed. No scan-edge cropping, no figures, no sidebar boxes."
---

# Page 31 — Unit 02: Limit, Continuity and Derivative

> 📄 Original scan: [0031.jpg](../../../Raw/Mathematics/Unit-02-Limit-Continuity-and-Derivative/0031.jpg) · printed page 73

**Example 40:** Find the second derivative:

a. $\sin3x$ &nbsp;&nbsp; b. $(x^3 + 1)^4$ &nbsp;&nbsp; c. $e^{2x}$

**Solution:**

a. The first derivative is: $y' = \frac{dy}{dx} = \frac{d}{dx} (\sin3x) = 3\cos3x$

The second derivative is: $y'' = \frac{d^2y}{dx^2} = \frac{d}{dx} (3\cos3x) = -9\sin3x$

b. The first derivative is:
$$y' = \frac{dy}{dx} = \frac{d}{dx} (x^3 + 1)^4 = 4(x^3 + 1)^3 \frac{d}{dx} x^3 = 12x^2(x^3 + 1)^3$$

To find the second derivative, we will use product and power rule

$$\begin{aligned} y'' &= \frac{d^2y}{dx^2} = \frac{d}{dx} [12x^2(x^3 + 1)^3] = 12 \left[ x^2 \frac{d}{dx}(x^3 + 1)^3 + (x^3 + 1)^3 \frac{d}{dx}x^2 \right] \\ &= 12[x^2 3(x^3 + 1)^2 3(x^2) + (x^3 + 1)^3(2x)] = 12x(x^3 + 1)^2 [11x^3 + 2] \end{aligned}$$

c. The first derivative is: $y' = \frac{dy}{dx} = \frac{d}{dx} (e^{2x}) = 2e^{2x}$

The second derivative is: $y'' = \frac{d^2y}{dx^2} = \frac{d}{dx} (2e^{2x}) = 4e^{2x}$

## 2.18 Higher Derivatives

Assuming all derivatives exist, we can differentiate a function $y = f(x)$ as many times as we want. The third derivative is the derivative of the second derivative. The fourth derivative is the derivative of the third derivative and so on. We denote the third and fourth derivative, by $\frac{d^3y}{dx^3}$ and $\frac{d^4y}{dx^4}$, respectively and define them by:

$$\frac{d^3y}{dx^3} = \frac{d}{dx}\left(\frac{d^2y}{dx^2}\right)$$

$$\frac{d^4y}{dx^4} = \frac{d}{dx}\left(\frac{d^3y}{dx^3}\right)$$

In general, if $n$ is a positive integer, then the nth derivative is denoted by:

$$\frac{d^n y}{dx^n} = \frac{d}{dx}\left(\frac{d^{n-1}y}{dx^{n-1}}\right)$$

Other notations for the first $n$ derivatives are:

$$f'(x), f''(x), f'''(x), f^{(4)}(x), \ldots \ldots \ldots f^{(n)}(x)$$

$$y', \quad y'', \quad y''', \quad y^{(4)}, \ldots \ldots \ldots \quad y^{(n)}$$

$$D_x y, \quad D_x^2 y, \quad D_x^3 y, \quad D_x^4 y, \ldots \ldots \ldots D_x^n y$$
