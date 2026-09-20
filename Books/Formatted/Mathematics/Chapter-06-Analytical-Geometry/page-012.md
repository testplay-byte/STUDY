---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-6
chapter_folder: Chapter-06-Analytical-Geometry
chapter_number: 6
chapter_title: ANALYTICAL GEOMETRY
page_image: 12
page_printed: 171
section: null
exercise: "6.1"
content_type: mixed
has_figures: true
figures_count: 3
source_image: ../../../Raw/Mathematics/Unit-06-Analytical-Geometry/0012.jpg
converted_at: "2026-09-20"
converted_by: "agent-16j (glm-vision)"
notes: ""
---

# Page 12 — Unit 06: Analytical Geometry

> 📄 Original scan: [0012.jpg](../../../Raw/Mathematics/Unit-06-Analytical-Geometry/0012.jpg) · printed page 171

Substituting these values in equation (1), we can find area A of triangle ABC as follows.

$$\begin{aligned} A &= \frac{1}{2} \times (y_2 + y_1) \times (x_1 - x_2) + \frac{1}{2} \times (y_1 + y_3) \times (x_3 - x_1) - \frac{1}{2} \times (y_2 + y_3) \times (x_3 - x_2) \\ &= \frac{1}{2} \times [(y_2 + y_1) \times (x_1 - x_2) + (y_1 + y_3) \times (x_3 - x_1) - (y_2 + y_3) \times (x_3 - x_2)] \\ &= \frac{1}{2} \times [x_1y_2 - x_2y_2 + x_1y_1 - x_2y_1 + x_3y_1 - x_1y_1 + x_3y_3 - x_1y_3 - x_3y_2 + x_2y_2 - x_3y_3 + x_2y_3] \\ &= \frac{1}{2} \times [x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)] \\ &= \frac{1}{2} \times \begin{vmatrix} x_1 & y_1 & 1 \\ x_2 & y_2 & 1 \\ x_3 & y_3 & 1 \end{vmatrix} \end{aligned}$$

> **Check Point**
> Find the area of a triangle whose vertices are given as $(1, -1), (-4, 6)$ and $(-3, -5)$.

> **Key Facts**
> * If points A, B and C are collinear, then area is zero.
> * If the sign of value of area obtained is negative, ignore it as the area cannot be negative.
> * Area of a triangle can also be found by finding the length of three sides of a triangle using the distance formula and then applying Heron's formula.

**Example 4:**
Find the area of triangle if points $(4, -2), (-2, 4)$ and $(5, 5)$ are vertices of a triangle.

**Solution:**

Here, $x_1 = 4, y_1 = -2, x_2 = -2, y_2 = 4, x_3 = 5$ and $y_3 = 5$

$$\begin{aligned} \text{Area of triangle} &= \frac{1}{2} \times \begin{vmatrix} x_1 & y_1 & 1 \\ x_2 & y_2 & 1 \\ x_3 & y_3 & 1 \end{vmatrix} = \frac{1}{2} \times \begin{vmatrix} 4 & -2 & 1 \\ -2 & 4 & 1 \\ 5 & 5 & 1 \end{vmatrix} \\ &= \frac{1}{2} \times [4(4 - 5) + 2(-2 - 5) + 1(-10 - 20)] \\ &= \frac{1}{2} \times [-4 - 14 - 30] = \frac{1}{2} \times [-48] = -24 \end{aligned}$$

Area of triangle = 24 square units

> **Challenge**
> Find the area of parallelogram shown.

[Figure F1]

## Exercise 6.1

1. Which sets of lines are concurrent in the given figure? Also, tell the point of concurrency.

(i)
[Figure F2]

(ii)
[Figure F3]

## Figures on this page

### Figure F1 — Parallelogram graph (middle right)
- **Type:** geometric-diagram
- **Caption/Number:** (none printed)
- **Description:** A Cartesian coordinate system with x and y axes. Four points are plotted and labeled: E(-1, 5), F(2, 8), G(4, 4), and H(1, 1). Line segments connect E to F, F to G, G to H, and H to E, forming a parallelogram. The axes have arrows indicating positive directions.
- **Mathematical meaning:** Illustrates a parallelogram defined by four coordinate points for an area calculation problem.

### Figure F2 — Concurrent lines diagram (bottom left)
- **Type:** geometric-diagram
- **Caption/Number:** (i)
- **Description:** A geometric figure showing several lines labeled with lowercase letters ($l, m, n, p, q$) intersecting at various points labeled with uppercase letters (A, B, C, D, E). The lines form a complex web of intersections within a bounded region.
- **Mathematical meaning:** Used to test the identification of concurrent lines (lines meeting at a single point).

### Figure F3 — Concurrent lines diagram (bottom right)
- **Type:** geometric-diagram
- **Caption/Number:** (ii)
- **Description:** A geometric figure showing several lines labeled with lowercase letters ($a, b, c, m, p, q, r$) intersecting at points labeled A, C, and D. Multiple lines appear to pass through point A, while others intersect at C and D.
- **Mathematical meaning:** Used to test the identification of concurrent lines and their specific points of concurrency.
