---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-3
chapter_folder: Chapter-03-Integration
chapter_number: 3
chapter_title: INTEGRATION
page_image: 25
page_printed: 113
section: "3.10 Area of Bounded Region; 3.10.1 Area Between a Curve and the X-axis; 3.10.2 Area Between Curves"
exercise: null
content_type: theory
has_figures: true
figures_count: 4
source_image: ../../../Raw/Mathematics/Unit-03-Integration/0025.jpg
converted_at: "2026-09-06"
converted_by: "agent-13e (glm-vision)"
notes: "Book typo preserved verbatim: 'We even certain that such a region has an area?' (missing 'are', as printed). Page opens mid-§3.9 (polygon-to-triangles figures F1/F2 + closing paragraph)."
---

# Page 25 — Unit 03: Integration

> 📄 Original scan: [0025.jpg](../../../Raw/Mathematics/Unit-03-Integration/0025.jpg) · printed page 113

[Figure F1]

[Figure F2]

However, how do we define the area of a region in a plane if the region is bounded by a curve? We even certain that such a region has an area? In the same way volume of solids can be found by using definite integration.

## 3.10 Area of Bounded Region

### 3.10.1 Area Between a Curve and the X-axis

If $f$ is a non-negative continuous function on $[a, b]$, then the area under the graph of $f$ from $a$ to $b$ is:

$$A = \int_{a}^{b} f(x)dx$$

**Example 28:** Find the area of the region bounded by the line $2y + x = 8$, the x-axis and, the lines $x = 2$ and $x = 4$.

**Solution:** In the graph, CD is the given line.
$$2y + x = 8 \Rightarrow y = \frac{8-x}{2} \Rightarrow y = 4 - \frac{x}{2}$$
Required area = area of trapezium ABCD
= area between line CD and x-axis from $x=2$ to $x=4$
$$\begin{aligned}
&= \int_{2}^{4} y dx = \int_{2}^{4} \left(4 - \frac{x}{2}\right) dx = \left|4x - \frac{x^2}{4}\right|_{2}^{4} \\
&= \left[4(4) - \frac{4^2}{4}\right] - \left[4(2) - \frac{2^2}{4}\right] = (16 - 4) - (8 - 1) = 5 \text{ sq. units}
\end{aligned}$$

[Figure F3]

### 3.10.2 Area Between Curves

If the function $f(x)$ is greater than the function $g(x)$ for all $x$ between $a$ and $b$, then the area under the graph of $f(x)$ minus the area under the graph of $g(x)$ is the area between the curves. Thus, the area between the curves $f(x)$ and $g(x)$ is:

$$A = \int_{a}^{b} [f(x) - g(x)]dx ; \quad f(x) > g(x)$$

**Example 29:** Find the area of the region bounded by graphs of:
$$f(x) = (x - 1)^2 \text{ and } g(x) = 3 - x$$

**Solution:** To find the limits of integration, we find common points of both functions by solving
$$f(x) = g(x) \Rightarrow (x - 1)^2 = 3 - x$$
$$\Rightarrow x^2 - x - 2 = 0$$
After solving, we get:
$x = -1$ and $x = 2$
For $-1 < x < 2$, $g(x) > f(x)$
(Also clear from the graph of both curves.)

[Figure F4]

## Figures on this page

### Figure F1 — hexagon with internal lines (top left)
- **Type:** geometric-diagram
- **Caption/Number:** (none printed)
- **Description:** A regular hexagon with three diagonals drawn from one vertex to all non-adjacent vertices, dividing it into four triangles.
- **Mathematical meaning:** Illustrates partitioning of a polygonal region into triangles for area calculation.

### Figure F2 — pentagon with internal lines (top right)
- **Type:** geometric-diagram
- **Caption/Number:** (none printed)
- **Description:** An irregular pentagon with two diagonals drawn from one vertex, partitioning it into three triangles.
- **Mathematical meaning:** Demonstrates that any polygon can be divided into triangles to define its area.

### Figure F3 — graph of y=f(x) and trapezium ABCD (middle right)
- **Type:** curve-plot
- **Caption/Number:** (none printed)
- **Description:** 
    - Top sub-panel: A Cartesian coordinate system showing a curve $y=f(x)$ above the x-axis from $x=a$ to $x=b$. The region under the curve is shaded in light blue and labeled 'A'.
    - Bottom sub-panel: A Cartesian coordinate system showing a straight line with negative slope passing through $(0,4)$ and $(8,0)$. The x-axis has tick marks at 0, 5, 10. Points A and B are marked on the x-axis at $x=2$ and $x=4$ respectively. Vertical segments rise from A and B to meet the line at points D and C. The quadrilateral ABCD (a trapezium) is shaded in light blue.
- **Mathematical meaning:** Visualizes the definite integral as the area under a curve and applies it to find the area of a trapezium bounded by a line and the x-axis.

### Figure F4 — graphs of f(x)=(x-1)^2 and g(x)=3-x (bottom right)
- **Type:** curve-plot
- **Caption/Number:** (none printed)
- **Description:** A Cartesian coordinate system displaying two functions. A downward-sloping straight line labeled $g(x)=3-x$ passes through $(0,3)$ and $(3,0)$. An upward-opening parabola labeled $f(x)=(x-1)^2$ has its vertex at $(1,0)$. The two curves intersect at $(-1, 4)$ and $(2, 1)$. The region bounded between the line (above) and the parabola (below) from $x=-1$ to $x=2$ is shaded in light blue.
- **Mathematical meaning:** Illustrates the method for finding the area between two curves by integrating the difference of the upper and lower functions over their interval of intersection.
