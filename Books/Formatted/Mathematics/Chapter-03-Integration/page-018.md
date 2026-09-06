---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-3
chapter_folder: Chapter-03-Integration
chapter_number: 3
chapter_title: INTEGRATION
page_image: 18
page_printed: 106
section: null
exercise: null
content_type: worked-examples
has_figures: true
figures_count: 3
source_image: ../../../Raw/Mathematics/Unit-03-Integration/0018.jpg
converted_at: "2026-09-06"
converted_by: "agent-13e (glm-vision)"
notes: ""
---

# Page 18 — Unit 03: Integration

> 📄 Original scan: [0018.jpg](../../../Raw/Mathematics/Unit-03-Integration/0018.jpg) · printed page 106

**Theorem 3.2:** If a function $f$ is continuous on an interval $[a, b]$ then $f$ is integrable on $[a, b]$ and the net signed area under the curve between the interval $[a, b]$ is:

$$A = \int_{a}^{b} f(x)dx$$

In the simplest cases, definite integrals of continuous functions can be calculated using **formulas from plane geometry** to compute the shaded area.

**Example 20:**

Sketch the region where area is represented by the definite integral and evaluate the integral using an appropriate formula from geometry.

(i) $\quad \int_{1}^{5} 3dx \qquad$ (ii) $\quad \int_{-2}^{2}(x + 3)dx \qquad$ (iii) $\quad \int_{0}^{1} \sqrt{1 - x^2}dx$

**Solution:**

(i) Graph of the integral is the horizontal line $y = 3$.  
So, the region is a rectangle of height 3 drawn over **the interval from 1 to 5.**  
From figure (1), we have:

$\int_{1}^{5} 3dx = \text{area of rectangle} = 4 \times 3 = 12 \text{ sq. units}$

[Figure F1]

(ii) Graph of the integral is the line $y = x + 3$.  
When $x = -2$, $y = -2 + 3 = 1$  
When $x = 2$, $y = 2 + 3 = 5$  
So, the region is trapezoid where base ranges **from $x = -2$ to $x = 2$.**  
From figure (2), we have:

$$\begin{aligned}
\int_{-2}^{2}(x + 3)dx &= \text{area of trapezoid} \\
&= \frac{1}{2}(1 + 5)(4) = 12 \text{ sq. units}
\end{aligned}$$

[Figure F2]

(iii) Graph of the function $y = \sqrt{1 - x^2}$ is the upper semi-circle of radius 1 centred at the origin.  
So, the region is upper right quarter-circle of radius 1 centred at origin.  
From figure (3), we have:

$$\begin{aligned}
\int_{0}^{1} \sqrt{1 - x^2}dx &= \text{area of quarter circle} \\
&= \frac{1}{4} \times \pi(1)^2 = \frac{\pi}{4} \text{ sq. units}
\end{aligned}$$

[Figure F3]

**Example 21:** Evaluate the following.

(i) $\quad \int_{0}^{1}(x - 1)dx \qquad$ (ii) $\quad \int_{0}^{2}(x - 1)dx$

## Figures on this page

### Figure F1 — Rectangle for y = 3 (middle right)
- **Type:** geometric-diagram
- **Caption/Number:** Fig. (1)
- **Description:** A Cartesian coordinate system with x-axis from 0 to 6 and y-axis from 0 to 4. A horizontal line segment at y=3 extends from x=1 to x=5. The rectangular region bounded by y=0, y=3, x=1, and x=5 is shaded in solid blue.
- **Mathematical meaning:** Represents the definite integral $\int_{1}^{5} 3dx$ as the area of a rectangle with width 4 and height 3.

### Figure F2 — Trapezoid for y = x + 3 (lower right)
- **Type:** geometric-diagram
- **Caption/Number:** Fig. (2)
- **Description:** A Cartesian coordinate system showing x-axis from -2 to 3 and y-axis from 0 to 5. A straight line with positive slope passes through (-2, 1) and (2, 5). The trapezoidal region bounded by this line, the x-axis, and the vertical lines x=-2 and x=2 is shaded in solid blue.
- **Mathematical meaning:** Represents the definite integral $\int_{-2}^{2}(x+3)dx$ as the area of a trapezoid with parallel sides (heights) 1 and 5, and width 4.

### Figure F3 — Quarter circle for y = sqrt(1-x^2) (bottom right)
- **Type:** curve-plot
- **Caption/Number:** Fig. (3)
- **Description:** A Cartesian coordinate system with x-axis from -1 to 1 and y-axis from 0 to 1. A quarter-circle arc centered at the origin (0,0) with radius 1 is drawn in the first quadrant, connecting (0,1) to (1,0). The region under the curve and above the x-axis between x=0 and x=1 is shaded in solid blue.
- **Mathematical meaning:** Represents the definite integral $\int_{0}^{1} \sqrt{1-x^2}dx$ as the area of a quarter circle with radius 1.
