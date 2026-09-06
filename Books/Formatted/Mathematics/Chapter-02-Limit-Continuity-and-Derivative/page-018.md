---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-2
chapter_folder: Chapter-02-Limit-Continuity-and-Derivative
chapter_number: 2
chapter_title: LIMIT, CONTINUITY AND DERIVATIVE
page_image: 18
page_printed: 60
section: 2.7 The Product and Quotient Rules; 2.7.1 Derivative of a Product
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Mathematics/Unit-02-Limit-Continuity-and-Derivative/0018.jpg
converted_at: "2026-09-06"
converted_by: "agent-13b (glm-vision)"
notes: ""
---

# Page 18 — Unit 02: Limit, Continuity and Derivative

> 📄 Original scan: [0018.jpg](../../../Raw/Mathematics/Unit-02-Limit-Continuity-and-Derivative/0018.jpg) · printed page 60

4. Find $\frac{dy}{dx}$.

    a. $y = \frac{x + 2x^{\frac{3}{2}}}{\sqrt{x}}$  
    b. $y = (x^3 - 5)(2x + 3)$  
    c. $y = (4x^2 - 3)(7x^2 + x)$

5. Find slope of tangent at $x = 1$.

    a. $y = x^2 + 3x$  
    b. $y = x^4 - x^2$

## 2.7 The Product and Quotient Rules

We will develop techniques for differentiating products and quotients. If functions whose derivative are known.

### 2.7.1 Derivative of a Product

You might be considered conjecture that the derivative of a product of two functions is the product of their derivatives. However, simple examples will show this not possible.

Consider:
$$f(x) = x^2 \text{ and } g(x) = x^3$$
The product of their derivative is:
$$f'(x)g'(x) = (2x)(3x^2) = 6x^3$$
But their product is:
$$y = f(x)g(x) = x^5 \text{ and } \frac{dy}{dx} = y' = 5x^4 \neq 6x^3$$
Thus, the derivative of the product is not equal to the product of their derivative.

> **Theorem: Product Rule**
> 
> If $f$ and $g$ are differentiable functions, then
> $$\frac{d}{dx}[f(x)g(x)] = f(x)g'(x) + g(x)f'(x)$$
> The first function times the derivative of the second function plus the second function times the derivative of first function.

**Example 18:** Find $\frac{dy}{dx}$ if $y = (4x^2 - 1)(7x^3 + x)$.

**Solution:** We can use two methods to find $\frac{dy}{dx}$. We can either use the product rule or we can multiply out the factors in y and then differentiate. We provide both methods.

**Method I: The Product Rule**

$$\begin{aligned}
\frac{dy}{dx} &= \frac{d}{dx}[(4x^2 - 1)(7x^3 + x)] \\
\frac{dy}{dx} &= \overbrace{(4x^2 - 1)}^{\text{First}} \overbrace{\frac{d}{dx}(7x^3 + x)}^{\text{Derivative of second}} + \overbrace{(7x^3 + x)}^{\text{Second}} \overbrace{\frac{d}{dx}(4x^2 - 1)}^{\text{Derivative of first}} \\
\frac{dy}{dx} &= (4x^2 - 1)(21x^2 + 1) + (7x^3 + x)(8x) \\
\frac{dy}{dx} &= 140x^4 - 9x^2 - 1
\end{aligned}$$

**Method II: Multiplying First**

$$\begin{aligned}
y &= (4x^2 - 1)(7x^3 + x) = 28x^5 - 3x^3 - x \\
\frac{dy}{dx} &= \frac{d}{dx}[28x^5 - 3x^3 - x] = 140x^4 - 9x^2 - 1
\end{aligned}$$

Both derivatives are same.
