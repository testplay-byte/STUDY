---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-7
chapter_folder: Chapter-07-Conic-Section
chapter_number: 7
chapter_title: CONIC SECTION
page_image: 10
page_printed: 191
section: 7.4.2 Equation of Normal at P(x₁, y₁) on a Circle
exercise: null
content_type: theory
has_figures: false
figures_count: 0
source_image: ../../../Raw/Mathematics/Unit-07-Conic-Section/0010.jpg
converted_at: "2026-09-20"
converted_by: "agent-16k (glm-vision)"
notes: "Key Facts box sidebar aligned with point-slope derivation start -> blockquote; Example 8 grammar preserved: 'Since normal is perpendicular to the tangent line. Thus, slope of the normal line is -3'; normal derivation book line '- x_1y_1 - gy_1 + x_1y_1 + fx_1' (redundant x_1y_1 pair) preserved verbatim; page ends mid-Alternatively solution at eq (i)"
---

# Page 10 — Unit 07: Conic Section

> 📄 Original scan: [0010.jpg](../../../Raw/Mathematics/Unit-07-Conic-Section/0010.jpg) · printed page 191

## 7.4.2 Equation of Normal at $P(x_1, y_1)$ on a Circle

Since normal line is perpendicular to the tangent line, so its slope is:

$$m_1 = -\frac{1}{m} = \frac{y_1 + f}{x_1 + g}$$

By point-slope formula the equation of normal line is:

> **Key Facts**
>
> A line which is perpendicular to the tangent line at the point of tangency is called the normal line at that point.

$$\begin{aligned} y - y_1 &= \frac{y_1 + f}{x_1 + g}(x - x_1) \\ \Rightarrow (x_1 + g)(y - y_1) &= (y_1 + f)(x - x_1) \\ \Rightarrow (x_1 + g)y - (x_1 + g)y_1 &= (y_1 + f)x - (y_1 + f)x_1 \\ \Rightarrow (x_1 + g)y - (x_1 + g)y_1 - (y_1 + f)x + (y_1 + f)x_1 &= 0 \\ \Rightarrow -(y_1 + f)x + (x_1 + g)y - x_1y_1 - gy_1 + x_1y_1 + fx_1 &= 0 \\ \Rightarrow -(y_1 + f)x + (x_1 + g)y - gy_1 + fx_1 &= 0 \\ \Rightarrow (y_1 + f)x - (x_1 + g)y + gy_1 - fx_1 &= 0 \quad \text{(Multiplying both sides of equation by $-1$)} \\ \Rightarrow (y_1 + f)x - (x_1 + g)y - (fx_1 - gy_1) &= 0 \end{aligned}$$

Which is the equation of the normal line at point $P(x_1, y_1)$.

**Example 8:** Find the equation of tangent and normal to the circle $x^2 + y^2 - 4x + 2y - 5 = 0$ at point P(1, 2).

**Solution:**

Given equation of circle is $x^2 + y^2 - 4x + 2y - 5 = 0$

Differentiating w.r.t $x$, we have:

$$2x + 2y\frac{dy}{dx} - 4 + 2\frac{dy}{dx} - 0 = 0$$

$$\Rightarrow (2y + 2)\frac{dy}{dx} = -2x + 4 \Rightarrow \frac{dy}{dx} = \frac{-2x+4}{2y+2} = \frac{-x+2}{y+1}$$

$$\frac{dy}{dx} \text{ at } P(1, 2) = m = \frac{-1+2}{2+1} = \frac{1}{3}$$

By the point-slope formula equation of the tangent line is:

$$\begin{aligned} y - y_1 &= m(x - x_1) &\Rightarrow& \quad y - 2 = \frac{1}{3}(x - 1) \\ \Rightarrow 3y - 6 &= x - 1 &\Rightarrow& \quad x - 3y + 5 = 0 \end{aligned}$$

Since normal is perpendicular to the tangent line. Thus, slope of the normal line is $-3$ and by the point-slope formula, equation of the normal line is:

$$y - 2 = -3(x - 1) \Rightarrow y - 2 = -3x + 3 \Rightarrow 3x + y - 5 = 0$$

**Alternatively**

Equation of circle is $x^2 + y^2 - 4x + 2y - 5 = 0$

Comparing it with $x^2 + y^2 + 2gx + 2fy + c = 0$, we have:

$$\begin{aligned} 2g &= -4 \quad \Rightarrow \quad g = -2 \\ 2f &= 2 \quad \Rightarrow \quad f = 1 \quad \text{and} \quad c = -5 \end{aligned}$$

Given point is P(1, 2). i.e., $x_1 = 1, y_1 = 2$

Equation of tangent line is:
$$(x_1 + g)x + (y_1 + f)y + (gx_1 + fy_1 + c) = 0 \qquad \text{(i)}$$
