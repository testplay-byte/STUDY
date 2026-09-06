---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-3
chapter_folder: Chapter-03-Integration
chapter_number: 3
chapter_title: INTEGRATION
page_image: 19
page_printed: 107
section: "3.7 Properties of The Definite Integral"
exercise: null
content_type: theory
has_figures: true
figures_count: 2
source_image: ../../../Raw/Mathematics/Unit-03-Integration/0019.jpg
converted_at: "2026-09-06"
converted_by: "agent-13e (glm-vision)"
notes: ""
---

# Page 19 — Unit 03: Integration

> 📄 Original scan: [0019.jpg](../../../Raw/Mathematics/Unit-03-Integration/0019.jpg) · printed page 107

**Solution:**

(i) The graph of the integral is the line $y = x - 1$.

When $x = 0$, $y = 0 - 1 = -1$

When $x = 1$, $y = 1 - 1 = 0$

The region is a triangle from $x = 0$ to $x = 1$.

From figure (4), we get:

$$\int_{0}^{1}(x - 1)dx = \text{area of triangle} = \frac{1}{2}(1)(1) = \frac{1}{2} \text{ sq. units}$$

[Figure F1]

(ii) The graph of the integral is the line $y = x - 1$.

When $x = 0$, $y = 0 - 1 = -1$

When $x = 1$, $y = 1 - 1 = 0$

When $x = 2$, $y = 2 - 1 = 1$

The regions are two triangles from $x = -1$ to $x = 0$ and $x = 1$ to $x = 2$. From figure (5), we get:

$$\begin{aligned}
\int_{0}^{2}(x - 1)dx &= \int_{0}^{1}(x - 1)dx + \int_{1}^{2}(x - 1)dx \\
&= \text{area of triangle } A_1 + \text{Area of triangle } A_2 \\
&= \frac{1}{2}(1)(1) + \frac{1}{2}(1)(1) = 1 \text{ sq. units}
\end{aligned}$$

[Figure F2]

**Note:** In the figure (5), the area of triangle $A_1$ is below the x-axis and the area of triangle $A_2$ is above x-axis, therefore:

$A_1 = -\frac{1}{2}$ and $A_2 = \frac{1}{2}$ which implies $A_1 + A_2 = -\frac{1}{2} + \frac{1}{2} = 0$

But area cannot be negative, therefore in such cases, we take net area as:

$$A_1 + A_2 = \frac{1}{2} + \frac{1}{2} = 1$$

## 3.7 Properties of The Definite Integral

In the finite closed interval $[a, b]$, when upper limit of integration in the definite integral is greater than the lower limit of integration $(a < b)$, the following facts are true.

(i) If lower and upper limits of integration are equal, then area is zero. i.e.,

$$\int_{a}^{a} f(x)dx = 0$$

For example,

$$\int_{2}^{2} x dx = 0$$

(ii) If the lower limit of integration is greater than the upper limit of integration, then:

$$\int_{b}^{a} f(x)dx = -\int_{a}^{b} f(x)dx$$

Which states that interchanging the limits of integral reverses the sign of integral.

For example,

$$\int_{1}^{0}(x - 1)dx = -\int_{0}^{1}(x - 1)dx = \frac{1}{2}$$

## Figures on this page

### Figure F1 — Graph of y = x-1 (top right)
- **Type:** line-graph
- **Caption/Number:** Fig. (4)
- **Description:** A Cartesian coordinate system with x-axis (labeled 'x') and y-axis (labeled 'y'). A straight line passes through points (0, -1) and (1, 0). The triangular region bounded by this line, the x-axis, and the vertical line at x=1 (from x=0 to x=1) is shaded in blue.
- **Mathematical meaning:** Illustrates the geometric interpretation of $\int_{0}^{1}(x-1)dx$ as the signed area of a triangle below the x-axis.

### Figure F2 — Graph of y = x-1 showing two regions (middle right)
- **Type:** line-graph
- **Caption/Number:** Fig. (5)
- **Description:** A Cartesian coordinate system with x-axis (labeled 'x') and y-axis (labeled 'y'). A straight line passes through points (0, -1), (1, 0), and (2, 1). Two triangular regions are shaded in blue: Region $A_1$ is below the x-axis between $x=0$ and $x=1$, and Region $A_2$ is above the x-axis between $x=1$ and $x=2$.
- **Mathematical meaning:** Demonstrates how to calculate definite integrals over intervals where the function crosses the axis by summing absolute areas or handling signs correctly.
