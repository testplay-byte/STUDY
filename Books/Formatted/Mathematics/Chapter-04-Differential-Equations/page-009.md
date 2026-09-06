---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-4
chapter_folder: Chapter-04-Differential-Equations
chapter_number: 4
chapter_title: DIFFERENTIAL EQUATIONS
page_image: 9
page_printed: 128
section: "4.4.1 Explicit and Implicit Solution"
exercise: null
content_type: theory
has_figures: false
figures_count: 0
source_image: ../../../Raw/Mathematics/Unit-04-Differential-Equations/0009.jpg
converted_at: "2026-09-06"
converted_by: "agent-13f2 (glm-vision)"
notes: "Book prints 'Example 6' twice in a row: p.127 (page-008) ends with 'Example 6' (y = a cos x + b sin x) and this page's first heading is also printed 'Example 6' (y = A sin(2x - B)) — duplicate example number is the book's own misprint, preserved verbatim (zoom-verified on both scans). Next heading prints 'Example 7' (verified). No scan-edge crops; no figures."
---

# Page 9 — Unit 04: Differential Equations

> 📄 Original scan: [0009.jpg](../../../Raw/Mathematics/Unit-04-Differential-Equations/0009.jpg) · printed page 128

**Example 6:**
Eliminate the arbitrary constants from the following equation and form a differential equation of the lowest order: $y = A \sin(2x - B)$

**Solution:** Given that:
$$y = A \sin(2x - B) \tag{i}$$
Taking derivative of equation (i) with respect to $x$.
$$\frac{dy}{dx} = 2A \cos(2x - B)$$
Again, differentiating w.r.t $x$, we get:
$$\frac{d^2y}{dx^2} = -4A \sin(2x - B) = -4[A \sin(2x - B)]$$
$$\frac{d^2y}{dx^2} = -4y \quad \Rightarrow \quad \frac{d^2y}{dx^2} + 4y = 0$$
Which is a second order differential equation (ODE). Its physical interpretation is that the acceleration varies as the distance varies. This essentially illustrates the differential equation governing the simple harmonic motion.

> **Check Point**
>
> Check whether equation of parabola $y^2 = 4a(x - b)$ where $a$ and $b$ are arbitrary constants, is a solution of differential equation:
> $$y\frac{d^2y}{dx^2} + \left(\frac{dy}{dx}\right)^2 = 0$$

## 4.4.1 Explicit and Implicit Solution

A solution of a differential equation that can be written in the form $y = f(x)$ is said to be an explicit solution while a solution of the form $f(x, y) = 0$ is said to be an implicit solution.

**Example 7:**
Prove that, for $-2 < x < 2$, the relation $x^2 + y^2 - 4 = 0$ is an implicit solution of differential equation:
$$\frac{dy}{dx} = -\frac{x}{y}$$

**Solution:** Given equation is:
$$x^2 + y^2 - 4 = 0 \tag{i}$$
By implicit differentiation, we have:
$$2x + 2y\frac{dy}{dx} = 0 \quad \Rightarrow, \quad \frac{dy}{dx} = -\frac{x}{y}$$
**Note:** The relation $x^2 + y^2 - 4 = 0$ in this example defines two explicit differentiable functions $y = \sqrt{4 - x^2}$ and $y = -\sqrt{4 - x^2}$ in the interval $(-2, 2)$.
