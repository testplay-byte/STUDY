---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-7
chapter_folder: Chapter-07-Conic-Section
chapter_number: 7
chapter_title: CONIC SECTION
page_image: 29
page_printed: 210
section: 7.11.1 Equation of Normal
exercise: null
content_type: mixed
has_figures: false
figures_count: 0
source_image: ../../../Raw/Mathematics/Unit-07-Conic-Section/0029.jpg
converted_at: "2026-09-20"
converted_by: "agent-16l (glm-vision)"
notes: "Page opens mid-derivation (tail of tangent equation from p.209) and ends mid-Example 22 solution (dy/dx = -(x-1)/(2y+2) last line). 'Slope of the normal line = -1/slope of tangent line' printed as fraction. 'w. r. t' (missing second period) preserved as printed in Example 22."
---

# Page 29 — Unit 07: Conic Section

> 📄 Original scan: [0029.jpg](../../../Raw/Mathematics/Unit-07-Conic-Section/0029.jpg) · printed page 210

Since, the point $P$ lies on the ellipse, thus from equation (1) we have

$$b^2(x_1 - h)^2 + a^2(y_1 - k)^2 = a^2b^2$$
$$\Rightarrow b^2(x_1 - h)(x - h) + a^2(y_1 - k)(y - k) = a^2b^2$$

Dividing both sides by $a^2b^2$

$$\Rightarrow \frac{(x_1 - h)(x - h)}{a^2} + \frac{(y_1 - k)(y - k)}{b^2} = 1$$

is the required equation of the tangent line.

In particular case if the centre of the ellipse lies at origin, then $h = 0, k = 0$. In this case equation of tangent is

$$\frac{(x_1 - 0)(x - 0)}{a^2} + \frac{(y_1 - 0)(y - 0)}{b^2} = 1$$
$$\Rightarrow \frac{x_1 x}{a^2} + \frac{y_1 y}{b^2} = 1$$

## 7.11.1 Equation of Normal

As the normal line is perpendicular to the tangent line thus,

slope of the normal line $= \dfrac{-1}{\text{slope of tangent line}}$
$$= \frac{-1}{-\dfrac{b^2 (x_1 - h)}{a^2 (y_1 - k)}} = \frac{a^2(y_1 - k)}{b^2(x_1 - h)}$$

Thus, equation of normal line at point $P$ is

$$y - y_1 = \frac{a^2(y_1 - k)}{b^2(x_1 - h)}(x - x_1)$$
$$\Rightarrow b^2(x_1 - h)(y - y_1) = a^2(y_1 - k)(x - x_1)$$
$$\Rightarrow a^2(y_1 - k)(x - x_1) - b^2(x_1 - h)(y - y_1) = 0$$

is the equation of the normal line.

In particular if the centre of the ellipse is at origin, then $h = 0$ and $k = 0$. So, equation of normal becomes

$$a^2(y_1 - 0)(x - x_1) - b^2(x_1 - 0)(y - y_1) = 0$$
$$\Rightarrow a^2y_1(x - x_1) - b^2x_1(y - y_1) = 0$$

**Example 22:** Find the equations of tangent and normal to the ellipse $x^2 + 2y^2 - 2x + 4y = 0$ at point $P(0,0)$.

**Solution:**

Equation of ellipse is $x^2 + 2y^2 - 2x + 4y = 0$

Differentiating w. r. t $x$

$$2x + 4y\frac{dy}{dx} - 2 + 4\frac{dy}{dx} = 0$$
$$\Rightarrow (4y + 4)\frac{dy}{dx} = -(2x - 2)$$
$$\Rightarrow \frac{dy}{dx} = -\frac{2x - 2}{4y + 4} = -\frac{x - 1}{2y + 2}$$
