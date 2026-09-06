---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-2
chapter_folder: Chapter-02-Limit-Continuity-and-Derivative
chapter_number: 2
chapter_title: LIMIT, CONTINUITY AND DERIVATIVE
page_image: 15
page_printed: 57
section: "2.6 Rules of Differentiation; 2.6.1 Power and Sum Rules"
exercise: null
content_type: theory
has_figures: false
figures_count: 0
source_image: ../../../Raw/Mathematics/Unit-02-Limit-Continuity-and-Derivative/0015.jpg
converted_at: "2026-09-06"
converted_by: "agent-13a2 (glm-vision)"
notes: ""
---

# Page 15 — Unit 02: Limit, Continuity and Derivative

> 📄 Original scan: [0015.jpg](../../../Raw/Mathematics/Unit-02-Limit-Continuity-and-Derivative/0015.jpg) · printed page 57

**Example 14:**

a. Find the derivative of  
   $y = f(x) = \sqrt{x}$, by definition.  
b. Find the slope of the tangent at $x = 9$.

**Solution:**

a. $f(x) = \sqrt{x}$ , $f(x + \Delta x) = \sqrt{x + \Delta x}$

$$\begin{aligned} y' = f'(x) &= \frac{dy}{dx} = \lim_{\Delta x \to 0} \frac{\sqrt{x + \Delta x} - \sqrt{x}}{\Delta x} \\ &= \lim_{\Delta x \to 0} \frac{1}{\sqrt{x + \Delta x} - \sqrt{x}} (\text{rationalise}) = \frac{1}{2\sqrt{x}} \end{aligned}$$

b. The slope of the tangent at $x = 9$ is  

$$\frac{dy}{dx}\bigg|_{x=9} = \frac{1}{2\sqrt{x}}\bigg|_{x=9} = \frac{1}{2\sqrt{9}} = \frac{1}{6}$$

## 2.6 Rules of Differentiation

### 2.6.1 Power and Sum Rules

The definition of derivative has the obvious drawback of being rather clumsy and tiresome to apply. For example, to find the derivative of function like $f(x) = 5x^{100} + x^{\frac{7}{5}}$ is a time taking job. Here, we will develop some important theorems that will enable us to calculate derivatives more efficiently.

**Theorem 2.1: Power Rule**

If $n$ is a positive integer, then: $\boxed{\frac{d}{dx}x^n = nx^{n-1}}$

**Proof:**

Let $f(x) = x^n$, $n$ a positive integer. By binomial theorem we can write:

$$f(x + \Delta x) = (x + \Delta x)^n = x^n + nx^{n-1}\Delta x + \frac{n(n - 1)}{2!}x^{n-1}(\Delta x)^2 + \cdots + (\Delta x)^n$$

Thus:
$$\begin{aligned} \frac{d}{dx}[x^n] &= f'(x) = \lim_{\Delta x \to 0} \frac{[x^n+nx^{n-1}\Delta x+\frac{n(n-1)}{2!}x^{n-1}(\Delta x)^2 \cdots +(\Delta x)^n]-x^n}{\Delta x} \\ &= \lim_{\Delta x \to 0} \frac{\Delta x[nx^{n-1}+\frac{n(n-1)}{2!}x^{n-1}(\Delta x)+\cdots+(\Delta x)^{n-1}]}{\Delta x} \\ &= \lim_{\Delta x \to 0} \left(nx^{n-1}+\frac{n(n-1)}{2!}x^{n-1}(\Delta x)+\cdots+(\Delta x)^{n-1}\right) \\ \frac{d}{dx}x^n &= nx^{n-1} \end{aligned}$$

A power rule simply states that differentiate $x^n$: $\boxed{\frac{d}{dx}x^n = nx^{n-1}}$
