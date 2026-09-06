---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-2
chapter_folder: Chapter-02-Limit-Continuity-and-Derivative
chapter_number: 2
chapter_title: LIMIT, CONTINUITY AND DERIVATIVE
page_image: 28
page_printed: 70
section: 2.16 Approximations
exercise: null
content_type: theory
has_figures: true
figures_count: 1
source_image: ../../../Raw/Mathematics/Unit-02-Limit-Continuity-and-Derivative/0028.jpg
converted_at: "2026-09-06"
converted_by: "agent-13b2 (glm-vision)"
notes: "Book typos preserved verbatim: 'can be interrupted in dy' (for 'interpreted'); §2.16 opens 'When Δx = 0,' (misprint for ≠ 0); 'From fig if x is changes by an amount'. Page ends mid-sentence ('...then the') — continues on printed p.71. Scan right edge slightly crops the figure's right margin (end of the x-axis line); no text loss. No sidebar boxes."
---

# Page 28 — Unit 02: Limit, Continuity and Derivative

> 📄 Original scan: [0028.jpg](../../../Raw/Mathematics/Unit-02-Limit-Continuity-and-Derivative/0028.jpg) · printed page 70

**Definition:** The increment $\Delta x$ is called the differential of the independent variable $x$ and is denoted by $dx$. i.e.

The function $f'(x)\Delta x$ is called differential of the dependent variable $y$ and is denoted by $dy$. i.e. $dy = f'(x)\Delta x = f'(x)dx$

Since the slope of a tangent to graph is

$$m_{\tan} = \frac{rise}{run} = f'(x) = \frac{f'(x)\Delta x}{\Delta x}, \Delta x \neq 0$$

It follows that the rise of the tangent line can be interrupted in $dy$

$$\Delta y \cong dy$$

[Figure F1]

**Example 37:** a) Find $\Delta y$ and $dy$ for $y = 5x^2 + 4x + 1$

**b)** Compare the values of $\Delta y$ and $dy$ for $x = 6, \Delta x = dx = 0.02$

**Solution:**

**a)** $\Delta y = f(x + \Delta x) - f(x)$

$= [5(x+\Delta x)^2+4(x+\Delta x)+1]-[5x^2+4x+1]$

$= 10x\Delta x + 4\Delta x + 5(\Delta x)^2$

$\displaystyle \frac{\Delta y}{\Delta x} = \frac{10x\Delta x + 4\Delta x + 5(\Delta x)^2}{\Delta x}$

$\displaystyle \frac{\Delta y}{\Delta x} = \frac{(10x + 4 + 5\Delta x)\Delta x}{\Delta x}$

$\displaystyle \lim_{\Delta x \to 0} \frac{\Delta y}{\Delta x} = f'(x) = 10x + 4$

$\displaystyle \frac{dy}{dx} = 10x + 4$

$dy = (10x + 4)dx$

**b)** When $x = 6, \Delta x = 0.02$

$\Delta y = 10(6)(0.02) + 4(0.02) + 5(0.02)^2$
$= 1.282$

Whereas $dy = (10(6) + 4)(0.02) = 1.28$

$\Delta y \cong dy$

$1.282 \cong 1.28$

The difference in answers is, of course

$5(0.02)^2 = 0.002$

Since $dx = \Delta x$. We observe that

$\Delta y = (10x + 4)\Delta x + 5(\Delta x)^2$ and

$dy = (10x + 4)\Delta x$ differ by the amount $5(\Delta x)^2$.

## 2.16 Approximations

When $\Delta x = 0$, differentials give a means of “predicting” the value of $f(x + \Delta x)$ by knowing the value of the function and its derivative at $x$. From fig if $x$ is changes by an amount $\Delta x$, then the

## Figures on this page

### Figure F1 — Differentials on a tangent line (top right, beside the slope/«interrupted» discussion)
- **Type:** geometric-diagram
- **Caption/Number:** (none printed)
- **Description:** A Cartesian coordinate system with X and Y axes. A red curve representing a function $y=f(x)$ is plotted, along with a straight black tangent line touching the curve at point $(x, f(x))$. The diagram illustrates an increment $\Delta x$ along the horizontal axis from $x$ to $x+\Delta x$. Vertically, it shows the actual change in the function's value as $\Delta y$ (from the curve to the horizontal level of $x$) and the differential change $dy$ (the vertical distance along the tangent line). The labels "$\Delta x$", "$\Delta y$", "$dy$", "Tangent line", "$x$", and "$x+\Delta x$" are clearly marked.
- **Mathematical meaning:** Illustrates that the differential $dy$ approximates the actual increment $\Delta y$ of a function over a small interval $\Delta x$, where $dy$ corresponds to the change along the tangent line.
