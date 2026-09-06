---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-2
chapter_folder: Chapter-02-Limit-Continuity-and-Derivative
chapter_number: 2
chapter_title: LIMIT, CONTINUITY AND DERIVATIVE
page_image: 20
page_printed: 62
section: "2.9 Derivations of Trigonometric Functions"
exercise: "2.5"
content_type: mixed
has_figures: false
figures_count: 0
source_image: ../../../Raw/Mathematics/Unit-02-Limit-Continuity-and-Derivative/0020.jpg
converted_at: "2026-09-06"
converted_by: "agent-13b (glm-vision)"
notes: ""
---

# Page 20 — Unit 02: Limit, Continuity and Derivative

> 📄 Original scan: [0020.jpg](../../../Raw/Mathematics/Unit-02-Limit-Continuity-and-Derivative/0020.jpg) · printed page 62

## Exercise 2.5

Find $\frac{dy}{dx}$ if

1. $y = \frac{1}{x}$
2. $y = (x^2 - 7)(x^2 + 4x + 2)$
3. $y = (7x + 1)(x^4 - x^3 - 9x)$
4. $y = \frac{3x+4}{x^2+1}$ &nbsp;&nbsp; 5. $y = \frac{x-2}{x^4+x+1}$
6. $y = \frac{3x^2+5}{3x-1}$ &nbsp;&nbsp; 7. $y = (\frac{1}{x} + \frac{1}{x^2})(3x^3 + 27)$ &nbsp;&nbsp; 8. $y = \frac{2-3x}{7-x}$ &nbsp;&nbsp; 9. $y = \frac{x^2-10x+2}{x^3-x}$
10. $y = \frac{x^4+2x^3-1}{x^2}$ &nbsp;&nbsp; 11. $y = \frac{10}{(x^3-10)^9}$ &nbsp;&nbsp; 12. $y = \frac{(x^2+1)^2}{3x-2}$ &nbsp;&nbsp; 13. $y = \frac{(x+1)^2}{(x-1)^2}$

Find the slope of the tangent line to the curve at the point whose abscissa is given.

14. $y = \frac{4x-1}{x}, x = -1$ &nbsp;&nbsp; 15. $y = \frac{54}{x^2+1}, x = 2$
16. $y = \frac{2x+5}{x+2}, x = 1$ &nbsp;&nbsp; 17. $y = (2\sqrt{x} + 1)(x^3 - 6), x = 0$

> **Summary of Differentiation Rules:**
> * $\frac{d}{dx}[c] = 0, \frac{d}{dx}[cf] = cf', \frac{d}{dx}[f \pm g] = f' \pm g'$
> * $\frac{d}{dx}[f.g] = fg' + gf'$
> * $\frac{d}{dx}\left[\frac{f}{g}\right] = \frac{gf'-fg'}{g^2}$

## 2.9 Derivations of Trigonometric Functions

The main objective of this section is to obtain formulas for the derivatives of six basic trigonometric functions. We will assume in this section that the variable $x$ in the trigonometric functions $\sin x$, $\cos x$, $\tan x$, $\cot x$, $\sec x$ and $\cosec x$ is measured in radians. We also need the limits in results and restated as follows:

$$\lim_{\Delta x \to 0} \frac{\sin\Delta x}{\Delta x} = 1 \text{ and } \lim_{\Delta x \to 0} \frac{1 - \cos\Delta x}{\Delta x} = 0$$

We start the problem of differentiating $f(x) = \sin x$. Using the definitions of derivative

$$\begin{aligned}
\frac{d}{dx}f(x) &= f'(x) = \lim_{\Delta x \to 0} \frac{f(x + \Delta x) - f(x)}{\Delta x} \\
\frac{d}{dx}\sin x &= \lim_{\Delta x \to 0} \frac{\sin(x + \Delta x) - \sin(x)}{\Delta x} \\
&= \lim_{\Delta x \to 0} \frac{\sin x \cos \Delta x + \cos x \sin \Delta x - \sin x}{\Delta x}
\end{aligned}$$
