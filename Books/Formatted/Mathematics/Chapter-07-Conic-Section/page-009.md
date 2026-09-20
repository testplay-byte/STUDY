---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-7
chapter_folder: Chapter-07-Conic-Section
chapter_number: 7
chapter_title: CONIC SECTION
page_image: 9
page_printed: 190
section: 7.4 Equation of Tangent and Normal to a Circle at a Point on the Circle; 7.4.1 Equation of Tangent at P(x₁, y₁) on a Circle
exercise: "7.1"
content_type: mixed
has_figures: true
figures_count: 2
source_image: ../../../Raw/Mathematics/Unit-07-Conic-Section/0009.jpg
converted_at: "2026-09-20"
converted_by: "agent-16k (glm-vision)"
notes: "Q.11-14 continue Exercise 7.1 (banner not printed on this page); Key Facts box bottom-right recovered via zoom QA -> blockquote; book misprints preserved: derivative step prints (2x + 2y)dy/dx = -(2x + 2g) where coefficient should be (2y + 2f); line (ii) prints double '=' chain 'gx_1 + fy_1 = -(gx_1 + fy_1 + c) = 0'; eq numbers (i)/(ii) no dot leaders (zoom-verified)"
---

# Page 9 — Unit 07: Conic Section

> 📄 Original scan: [0009.jpg](../../../Raw/Mathematics/Unit-07-Conic-Section/0009.jpg) · printed page 190

11. Find the equation of the circle passing through the intersection of the circles $C_1: x^2 + y^2 - 8x - 2y + 7 = 0$ and $C_2: x^2 + y^2 - 4x + 10y + 8 = 0$ and passes through $(-1, -2)$. (Hint: equation of the required circle is $C_1 + \lambda C_2 = 0; \lambda \neq -1$)

12. The diagram shows a rectangle PQRS and the circles $C_1$ and $C_2$. Both the circles touch each other and three sides of the rectangle. The coordinates of the points P, Q, R and S are $(0,4), (1,1), (7,3)$ and $(6,6)$. Find the equation of the circles $C_1$ and $C_2$.

[Figure F1]

13. A circle has its centre at the point C(0,1) and a line touches the circle. The point P(3,5) lies on the line touching the circle. The distance between P and C is five times the radius of the circle. Find the equation of the circle and the point where the line touches the circle.

14. The three lines $2x - y + 1 = 0; 2x + y - 3 = 0$ and $x - 2y + 4 = 0$ touch the circle. Find the centre of the circle. Also find the equation of circle.

## 7.4 Equation of Tangent and Normal to a Circle at a Point on the Circle

### 7.4.1 Equation of Tangent at P($x_1,y_1$) on a Circle

Consider a circle $x^2 + y^2 + 2gx + 2fy + c = 0$ (i)

Let $\text{P}(x_1, y_1)$ be a given point on the circle.

Differentiating equation (i) w.r.t $x$, we get:

$$\begin{aligned} & 2x + 2y\frac{dy}{dx} + 2g + 2f\frac{dy}{dx} + 0 = 0 \\ \Rightarrow & (2x + 2y)\frac{dy}{dx} = -(2x + 2g) \Rightarrow \frac{dy}{dx} = -\frac{2x + 2g}{2y + 2f} = -\frac{x + g}{y + f} \\ & \frac{dy}{dx} \text{ at } \text{P}(x_1, y_1) = m = -\frac{x_1+g}{y_1+f} \end{aligned}$$

Which is the slope of the tangent line at the point $\text{P}(x_1, y_1)$.

By point-slope formula, equation of the tangent line at point P is:

$$\begin{aligned} & y - y_1 = -\left(\frac{x_1+g}{y_1+f}\right)(x - x_1) \\ \Rightarrow & (y_1 + f)(y - y_1) = -(x_1 + g)(x - x_1) \\ \Rightarrow & (y_1 + f)y - (y_1 + f)y_1 = -(x_1 + g)x + (x_1 + g)x_1 \\ \Rightarrow & (y_1 + f)y - (y_1 + f)y_1 + (x_1 + g)x - (x_1 + g)x_1 = 0 \\ \Rightarrow & (x_1 + g)x + (y_1 + f)y - y_1^2 - fy_1 - x_1^2 - gx_1 = 0 \\ \Rightarrow & (x_1 + g)x + (y_1 + f)y - (x_1^2 + y_1^2 + gx_1 + fy_1) = 0 \end{aligned}$$

Since the point $\text{P}(x_1, y_1)$ lies on the circle $x^2 + y^2 + 2gx + 2fy + c = 0$

So, $x_1^2 + y_1^2 + 2gx_1 + 2fy_1 + c = 0$

or $x_1^2 + y_1^2 + gx_1 + fy_1 + (gx_1 + fy_1 + c) = 0$

or $x_1^2 + y_1^2 + gx_1 + fy_1 = -(gx_1 + fy_1 + c) = 0$ (ii)

Putting in equation (ii), we get:

$(x_1 + g)x + (y_1 + f)y - [-(gx_1 + fy_1 + c)] = 0$

$\Rightarrow (x_1 + g)x + (y_1 + f)y + (gx_1 + fy_1 + c) = 0$

Which is the required equation of tangent line at $\text{P}(x_1, y_1)$.

[Figure F2]

> **Key Facts**
>
> Derivative at point of the curve is the slope of the tangent line to the curve at that point.

## Figures on this page

### Figure F1 — Rectangle PQRS with two inscribed circles (top right)
- **Type:** geometric-diagram
- **Caption/Number:** (none printed)
- **Description:** A tilted rectangle (sides not parallel to the axes; no grid or axes drawn) with vertices labeled P (bottom corner), Q (right corner), R (top corner) and S (left corner). Two circles lie inside it, touching each other: C₁ on the left and C₂ on the right, each touching three sides of the rectangle.
- **Mathematical meaning:** Illustrates question 12 — two mutually tangent circles inscribed in a rectangle PQRS with given vertex coordinates, used to find their equations.

### Figure F2 — Circle with tangent line at point P (middle right)
- **Type:** geometric-diagram
- **Caption/Number:** (none printed)
- **Description:** A diagram featuring a circle with its center marked by a dot. A straight line touches the circle at a single point labeled $\text{P}(x_1, y_1)$ on the circumference. Arrows indicate the direction of the tangent line extending from the point of contact.
- **Mathematical meaning:** Visualizes the concept of a tangent line to a circle at a specific point $\text{P}(x_1, y_1)$, which is perpendicular to the radius at that point, supporting the derivation in section 7.4.1.
