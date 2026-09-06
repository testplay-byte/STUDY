---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-2
chapter_folder: Chapter-02-Limit-Continuity-and-Derivative
chapter_number: 2
chapter_title: LIMIT, CONTINUITY AND DERIVATIVE
page_image: 14
page_printed: 56
section: "2.5 The Derivative Functions"
exercise: null
content_type: theory
has_figures: false
figures_count: 0
source_image: ../../../Raw/Mathematics/Unit-02-Limit-Continuity-and-Derivative/0014.jpg
converted_at: "2026-09-06"
converted_by: "agent-13a2 (glm-vision)"
notes: "Two-column flow: left column = Examples 12-13, right column = blue-bordered 'Key Point: Notation' box — transcribed after column 1 per multi-column rule; box as blockquote. Book inconsistencies preserved verbatim (verified at zoom): numerator prints f(x) (not f(x0)) in both the f'(x0) display equation and the Definition box; 'with respect of x' (twice, Key Point box); 'Function y = f(x). operator d/dx' with period; no intermediate expansion line in Example 13 solution between 'Δy = f(x + Δx) - f(x)' and '= Δx[-2x - Δx + 4]'."
---

# Page 14 — Unit 02: Limit, Continuity and Derivative

> 📄 Original scan: [0014.jpg](../../../Raw/Mathematics/Unit-02-Limit-Continuity-and-Derivative/0014.jpg) · printed page 56

## 2.5 The Derivative Functions

In this section we will discuss the concept of a “derivative” which is the primary mathematics tool that is used to calculate and study rates of change.

We have studied a slope of tangent line: $\displaystyle \lim_{\Delta x \to 0} \frac{f(x+\Delta x)-f(x)}{\Delta x}$

For any $x$, if the limit exists, then it can be interpreted either on the slope of a tangent line to the curve $y = f(x)$ as $x = x_0$ or as the instantaneous rate of change of $y$ with respect to $x = x_0$. This limit is so important that it has special notations.

$$f'(x_0) = \lim_{\Delta x \to 0} \frac{f(x_0+\Delta x)-f(x)}{\Delta x}$$

You can think of $f'$ (read “$f$ prime”).

> **Definition: The Derivative Functions**
>
> The function $f'$ defined by the formula: $\displaystyle f'(x_0) = \lim_{\Delta x \to 0} \frac{f(x_0 + \Delta x) - f(x)}{\Delta x}$ is called the derivative of $f$ with respect to $x$. The domain of $f'$ consists of all **x** in **the domain** of $f$ for which the limit exists.

**Example 12:** Find the derivative of $f(x) = x^2$, by definition.

**Solution:** We have: $\displaystyle f'(x) = \lim_{\Delta x \to 0} \frac{f(x+\Delta x)-f(x)}{\Delta x}$

$$\begin{aligned}
&= \lim_{\Delta x \to 0} \frac{(x+\Delta x)^2 - (x)^2}{\Delta x} = \lim_{\Delta x \to 0} \frac{x^2 + 2x\Delta x + \Delta x^2 - x^2}{\Delta x} \\
&= \lim_{\Delta x \to 0} \frac{2x\Delta x + \Delta x^2}{\Delta x} = \lim_{\Delta x \to 0} 2x + \Delta x = 2x
\end{aligned}$$

**Example 13:** Find the derivative of
$$y = f(x) = -x^2 + 4x + 1$$

**Solution:** $\Delta y = f(x + \Delta x) - f(x)$
$$= \Delta x[-2x - \Delta x + 4]$$

Therefore $f'(x) = y' = \dfrac{\Delta y}{\Delta x}$

$$\begin{aligned}
&= \lim_{\Delta x \to 0} \frac{\Delta x[-2x - \Delta x + 4]}{\Delta x} \\
&= \lim_{\Delta x \to 0} [-2x - \Delta x + 4] = -2x + 4
\end{aligned}$$

> **Key Point: Notation**
>
> Many ways to denote the derivative of a function $y = f(x)$
>
> * $y'$ “y prime”
> * $\displaystyle \frac{dy}{dx} = \frac{df}{dx} = \frac{df(x)}{dx} = D_x f = y'$
>
> We also read $\displaystyle \frac{dy}{dx}$ as “the derivative of $y$ with respect of $x$” and $\displaystyle \frac{df}{dx}$ and $\left(\frac{d}{dx}\right)f(x)$ as “the derivative of $f$ with respect of $x$”.
>
> * $y'$ and $f'$ (used by Newton).
> * $\displaystyle \frac{d}{dx}$ (used by Leibniz).
>
> **Input**
>
> * Function $y = f(x)$. operator $\displaystyle \frac{d}{dx}$
>
> **Output**
>
> * Derivative $\displaystyle y' = \frac{df}{dx}$
> * Process is also called differentiation.
