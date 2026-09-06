---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-2
chapter_folder: Chapter-02-Limit-Continuity-and-Derivative
chapter_number: 2
chapter_title: LIMIT, CONTINUITY AND DERIVATIVE
page_image: 24
page_printed: 66
section: "2.11 Product Rule; 2.11.1 Power Rule for Functions"
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Mathematics/Unit-02-Limit-Continuity-and-Derivative/0024.jpg
converted_at: "2026-09-06"
converted_by: "agent-13b2 (glm-vision)"
notes: ""
---

# Page 24 — Unit 02: Limit, Continuity and Derivative

> 📄 Original scan: [0024.jpg](../../../Raw/Mathematics/Unit-02-Limit-Continuity-and-Derivative/0024.jpg) · printed page 66

## 2.11 Product Rule

In this section, we will derive a formula that expresses the derivative of a composition $fog$ in terms of the derivative of $f$ and $g$. This formula will enable us to differentiate complicated functions.

Suppose we wish to differentiate:

$$y = (x^5 + 1)^2 \quad \ldots\ldots \quad (i)$$

We can write $y = (x^5 + 1)(x^5 + 1)$

$$\begin{aligned} \frac{dy}{dx} &= (x^5 + 1)\frac{d}{dx}(x^5 + 1) + (x^5 + 1)\frac{d}{dx}(x^5 + 1) \\ &= (x^5 + 1) (5x^4) + (x^5 + 1) (5x^4) \\ &= 2(x^5 + 1)(5x^4) \ldots\ldots \quad (ii) \end{aligned}$$

### 2.11.1 Power Rule for Functions

From (i), $y = (x^5 + 1)^2$

$$\begin{aligned} \frac{dy}{dx} &= 2(x^5 + 1)^{2-1}\frac{d}{dx}(x^5 + 1) \\ &= 2(x^5 + 1)(5x^4) \ldots\ldots \quad (iii) \end{aligned}$$

From (ii) and (iii), both expressions are same.

> **Theorem: Power Rule for Functions**
>
> If $n$ is an integer and $g$ is a differentiable function then,
> $$\frac{d}{dx}[g(x)]^n = n[g(x)]^{n-1}g'(x)$$

**Example 28:** Differentiate w.r.t. $x$.
a. $y = (2x^3 + 4x + 1)^4$
b. $y = \frac{1}{(7x^5 - x^4 + 2)^{10}}$

**Solution:**

a. $\displaystyle \frac{dy}{dx} = \frac{d}{dx}(2x^3 + 4x + 1)^4$

$\quad\; = 4(2x^3 + 4x + 1)^{4-1}\frac{d}{dx}(2x^3 + 4x + 1)$

$\quad\; = 4(2x^3 + 4x + 1)^3(6x^2 + 4)$

b. $\displaystyle y = (7x^5 - x^4 + 2)^{-10}$

$\displaystyle \frac{dy}{dx} = \frac{d}{dx}(7x^5 - x^4 + 2)^{-10}$

$\quad\; = -10(7x^5 - x^4 + 2)^{-10-1}\frac{d}{dx}(7x^5 - x^4 + 2)$

$\quad\; = -10(7x^5 - x^4 + 2)^{-11}(35x^4 - 4x^3)$

---

**Example 29:** Differentiate $y = \frac{(x^2 - 1)^3}{(5x+1)^8}$ w.r.t. $x$

**Solution:** $\displaystyle \frac{dy}{dx} = \frac{d}{dx}\frac{(x^2 - 1)^3}{(5x+1)^8}$

$$\begin{aligned} &= \frac{(5x + 1)^8\frac{d}{dx}(x^2 - 1)^3 - (x^2 - 1)^3\frac{d}{dx}(5x + 1)^8}{[(5x + 1)^8]^2} \\[10pt] &= \frac{(5x + 1)^8 3(x^2 - 1)^2(2x) - (x^2 - 1)^3 8(5x + 1)^7(5)}{(5x + 1)^{16}} \\[10pt] &= \frac{6x(5x + 1)^8(x^2 - 1)^2 - 40(x^2 - 1)^3(5x + 1)^7}{(5x + 1)^{16}} \\[10pt] &= \frac{(x^2 - 1)^2(5x + 1)^7[6x(5x + 1) - 40(x^2 - 1)]}{(5x + 1)^{16}} \\[10pt] &= \frac{(x^2 - 1)^2[-10x^2 + 6x + 40]}{(5x + 1)^9} \end{aligned}$$
