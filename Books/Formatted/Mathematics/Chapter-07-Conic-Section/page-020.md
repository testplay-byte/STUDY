---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-7
chapter_folder: Chapter-07-Conic-Section
chapter_number: 7
chapter_title: CONIC SECTION
page_image: 20
page_printed: 201
section: 7.8.2 Equation of Tangent Line to the Parabola at a Given Point; 7.8.3 Equation of Normal Line to the Parabola at a Given Point
exercise: null
content_type: theory
has_figures: false
figures_count: 0
source_image: ../../../Raw/Mathematics/Unit-07-Conic-Section/0020.jpg
converted_at: "2026-09-20"
converted_by: "agent-16h (glm-vision)"
notes: ""
---

# Page 20 — Unit 07: Conic Section

> 📄 Original scan: [0020.jpg](../../../Raw/Mathematics/Unit-07-Conic-Section/0020.jpg) · printed page 201

Putting values, we get:

$$\begin{aligned} y &= \frac{1}{2}x - \frac{\left(\frac{1}{2}\right)^2 - \frac{1}{2}(3) - 4}{\frac{1}{2}} &\Rightarrow y &= \frac{1}{2}x - \frac{\frac{1}{2}-4}{\frac{1}{2}} \\ \Rightarrow y &= \frac{1}{2}x - (2 - 3 - 8) = \frac{1}{2}x + 9 &\Rightarrow 2y &= x + 18 \\ \Rightarrow x - 2y + 18 &= 0 \end{aligned}$$

## 7.8.2 Equation of Tangent Line to the Parabola at a Given Point

Consider a parabola $(y-k)^2 = 4a(x-h)$ (1)

and let $P(x_1,y_1)$ be a given point on the parabola. Differentiating equation (1) w. r. t. $x$

$$2(y-k)\frac{dy}{dx} = 4a \quad \Rightarrow \quad \frac{dy}{dx} = \frac{2a}{y-k}$$

Slope of tangent at $P(x_1,y_1) = m = \frac{dy}{dx}$ at $P(x_1,y_1) = \frac{2a}{y_1-k}$

Thus, equation of the tangent line at $P(x_1,y_1)$: is

$$\begin{aligned} y - y_1 &= m(x - x_1) &\Rightarrow y - y_1 &= \frac{2a}{y_1-k}(x - x_1) \\ \Rightarrow (y_1 - k)(y - y_1) &= 2a(x - x_1) &\Rightarrow (y_1 - k)y - (y_1 - k)y_1 &= 2ax - 2ax_1 \\ \Rightarrow 2ax - (y_1 - k)y - 2ax_1 + (y_1 - k)y_1 &= 0 \end{aligned}$$

Which is the equation of the tangent line at $P(x_1,y_1)$.

In particular if vertex is at $(0,0)$ then $h=0$, $k=0$. Then, the equation of tangent line is:

$$\begin{aligned} 2ax - (y_1 - 0)y - 2ax_1 + (y_1 - 0)y_1 &= 0 &\Rightarrow 2ax - y_1y - 2ax_1 + y_1^2 &= 0 \end{aligned}$$

Since $(x_1, y_1)$ lies on the parabola, so $y_1^2 = 4ax_1$ and we have:

$$2ax - y_1y - 2ax_1 + 4ax_1 = 0 \quad \Rightarrow \quad 2ax - y_1y + 2ax_1 = 0$$

## 7.8.3 Equation of Normal Line to the Parabola at a Given Point

As, we know that normal line is perpendicular to the tangent line.

Thus, slope of the normal line is

$$m = \frac{-1}{\text{slope of tangent line}} = -\frac{(y_1-k)}{2a}$$

Equation of the normal line at point $P(x_1, y_1)$ is:

$$\begin{aligned} y - y_1 &= -\frac{(y_1-k)}{2a}(x - x_1) \\ \Rightarrow 2a(y - y_1) &= -(y_1 - k)(x - x_1) &\Rightarrow (y_1 - k)(x - x_1) + 2a(y - y_1) &= 0 \end{aligned}$$

Which is the equation of normal line at point P.

In particular if vertex of the parabola is at $(0,0)$, the equation of normal becomes:

$$(y_1 - 0)(x - x_1) + 2a(y - y_1) = 0 \quad \text{or} \quad y_1(x - x_1) + 2a(y - y_1) = 0$$

**Example 17:** Find the equations of the tangent and normal to the parabola $y^2 - 6y + 8x - 9 = 0$ at point $P(\frac{1}{4}, -1)$.

**Solution:** Equation of parabola is $y^2 - 6y + 8x - 9 = 0$

Diff. w. r. t. $x$, we have:

$$\begin{aligned} 2y\frac{dy}{dx} - 6\frac{dy}{dx} + 8 = 0 &\quad \Rightarrow \quad (2y - 6)\frac{dy}{dx} = -8 &\quad \Rightarrow \quad \frac{dy}{dx} = \frac{-8}{2y-8} = \frac{-4}{y-3} \end{aligned}$$

Slope of tangent line $= m = \frac{dy}{dx}$ at $P = -\frac{-4}{-1-3} = 1$
