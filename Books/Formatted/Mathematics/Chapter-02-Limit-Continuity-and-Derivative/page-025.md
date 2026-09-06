---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-2
chapter_folder: Chapter-02-Limit-Continuity-and-Derivative
chapter_number: 2
chapter_title: LIMIT, CONTINUITY AND DERIVATIVE
page_image: 25
page_printed: 67
section: "2.11.2 Chain Rule; 2.12 Implicit Differentiation; 2.12.1 Explicit and Implicit Functions; 2.12.2 Explicit Differentiation"
exercise: null
content_type: theory
has_figures: false
figures_count: 0
source_image: ../../../Raw/Mathematics/Unit-02-Limit-Continuity-and-Derivative/0025.jpg
converted_at: "2026-09-06"
converted_by: "agent-13b2 (glm-vision)"
notes: "Book typos preserved verbatim: Theorem: Chain Rule prints 'a differentiable formula of u' (for 'function'); §2.12.1 prints 'y is an implicit of x' (word 'function' missing). Example 30 is printed as two side-by-side solution columns separated by a dashed vertical rule; transcribed sequentially (column a, then column b) per multi-column rule. No scan-edge cropping, no figures, no sidebar boxes."
---

# Page 25 — Unit 02: Limit, Continuity and Derivative

> 📄 Original scan: [0025.jpg](../../../Raw/Mathematics/Unit-02-Limit-Continuity-and-Derivative/0025.jpg) · printed page 67

**2.11.2 Chain Rule:** A power of a function can be written as a composite function. If $f(x) = x^n$ and $u = g(x)$, then $f(x) = f(g(x)) = [g(x)]^n$ is a special case of the chain rule for differentiating composite function.

> **Theorem: Chain Rule**
> If $y = f(x)$ is a differentiable formula of $u$ and $u = g(x)$ is a differentiable function, then $\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} = f'(g(x)).g'(x)$

**Example 30:** Differentiate w.r.t. $x$.

a. $y = \tan^2 x$

b. $y = (9x^3 + 1)^2\sin 5x$

**Solution:**

a. $y = \tan^2 x$

$\frac{dy}{dx} = 2\tan^{2-1} x \frac{d}{dx}\tan x$

$$= 2\tan x \sec^2 x$$

b. $y = (9x^3 + 1)^2\sin 5x$

$$\frac{dy}{dx} = (9x^3 + 1)^2 \frac{d}{dx}\sin 5x + \sin 5x \frac{d}{dx}(9x^3 + 1)^2$$

$$= (9x^3 + 1)^2\cos 5x(5) + \sin 5x . 2(9x^3 + 1)27x^2$$

$$= (9x^3 + 1)[45x^3\cos 5x + 5\cos 5x + 54x^2\sin 5x]$$

## 2.12 Implicit Differentiation

### 2.12.1 Explicit and Implicit Functions

A function in which the dependent variable is expressed solely in terms of the independent variable $x$, namely $y=f(x)$ is said to be an explicit function, for example, $y = \frac{1}{4}x^3 - 1$ is an explicit function, whereas an equivalent equation $3y - x^3 - 4 = 0$ is said to define the function implicitly or y is an implicit of $x$.

### 2.12.2 Explicit Differentiation

To illustrate this, let us consider the simple equation:

$$xy = 1 \qquad \text{......} \qquad (i)$$

One way to find $\frac{dy}{dx}$ is to rewrite this equation as:

$$y = \frac{1}{x}$$

From which it follows that: $\frac{dy}{dx} = -\frac{1}{x^2}$ ... (ii)

Another way to obtain this derivative is to differentiate both sides of (i) before solving for $y$ in terms of $x$.

From (i) $\qquad \frac{d}{dx}(xy) = \frac{d}{dx}1$
