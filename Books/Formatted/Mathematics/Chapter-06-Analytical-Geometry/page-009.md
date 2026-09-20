---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-6
chapter_folder: Chapter-06-Analytical-Geometry
chapter_number: 6
chapter_title: ANALYTICAL GEOMETRY
page_image: 9
page_printed: 168
section: null
exercise: null
content_type: worked-examples
has_figures: true
figures_count: 2
source_image: ../../../Raw/Mathematics/Unit-06-Analytical-Geometry/0009.jpg
converted_at: "2026-09-20"
converted_by: "agent-16f (glm-vision)"
notes: ""
---

# Page 9 — Unit 06: Analytical Geometry

> 📄 Original scan: [0009.jpg](../../../Raw/Mathematics/Unit-06-Analytical-Geometry/0009.jpg) · printed page 168

(iii) Orthocenter is the point of intersection of three altitudes of a triangle.

As the triangle is right angled, therefore two of its sides OA and OB are also altitudes. The third altitude is OC.

[Figure F1]

Slope of OA = 0, Slope of OB = $\infty$ (undefined)

$$ \text{Slope of AB} = \frac{6 - 0}{0 - 6} = -1 $$

$$ \text{Slope of altitude OC} = \frac{-1}{\text{Slope of AB}} = \frac{-1}{-1} = 1 $$

Equation of altitude OA is:

$$ y - 0 = 0 (x - 0) \quad \Rightarrow \quad y = 0 \quad \ldots\ldots\ldots (7) $$

Equation of altitude OB is:

$$ y - 0 = \infty (x - 0) \quad \Rightarrow \quad x = 0 \quad \ldots\ldots\ldots (8) $$

Equation of altitude OC is:

$$ y - 0 = 1 (x - 0) \quad \Rightarrow \quad y - x = 0 \quad \ldots\ldots\ldots (9) $$

> **Key Facts**
>
> *   In a right triangle, the orthocentre is the vertex containing right angle.

Equations (1), (2) and (3) are equations of right bisectors of sides of triangle ABC.

Solving (7) and (8), we see that: $x = 0, y = 0$

$\therefore$ Orthocenter = O(0, 0) $\ldots\ldots\ldots$ (C)

Now we prove that circumcenter G(3, 3), centroid P(2, 2) and orthocenter O(0, 0) are collinear.

[Figure F2]

$$ OP = \sqrt{(2 - 0)^2 + (2 - 0)^2} = \sqrt{4 + 4} = \sqrt{8} = 2\sqrt{2} $$
$$ PG = \sqrt{(3 - 2)^2 + (3 - 2)^2} = \sqrt{1 + 1} = \sqrt{2} $$
$$ OG = \sqrt{(3 - 0)^2 + (3 - 0)^2} = \sqrt{9 + 9} = \sqrt{18} = 3\sqrt{2} $$

Now, $OP + PG = 2\sqrt{2} + \sqrt{2} = 3\sqrt{2} = OG$

Which shows that circumcenter, centroid and orthocenter are collinear in any triangle.

**Example 3:**

The points P($-1$, 2), Q(3, $-2$) and R(6, 3) are vertices of a triangle PQR. Show that altitudes, right bisectors and medians of the triangle are concurrent.

**Solution:**

Let $(x_1, y_1) = (-1, 2)$, $(x_2, y_2) = (3, -2)$ and $(x_3, y_3) = (6, 3)$, then:
We know that the determinant of coefficients of the three altitudes is:

$$ \begin{vmatrix} x_3 - x_2 & y_3 - y_2 & -x_1(x_3 - x_2) - y_1(y_3 - y_2) \\ x_1 - x_3 & y_1 - y_3 & -x_2(x_1 - x_3) - y_2(y_1 - y_3) \\ x_2 - x_1 & y_2 - y_1 & -x_3(x_2 - x_1) - y_3(y_2 - y_1) \end{vmatrix} $$

Substituting the values $x_1 = -1, y_1 = 2, x_2 = 3, y_2 = -2, x_3 = 6$ and $y_3 = 3$ in above determinant,

## Figures on this page

### Figure F1 — Right triangle OAB with altitude OC (top right)
- **Type:** geometric-diagram
- **Caption/Number:** (none printed)
- **Description:** A coordinate plane showing a right-angled triangle with vertices at O(0, 0), A(6, 0), and B(0, 6). The side AB connects (6, 0) to (0, 6). An altitude line segment OC is drawn from the origin O perpendicular to the hypotenuse AB, meeting it at point C.
- **Mathematical meaning:** Illustrates the concept of an altitude in a right-angled triangle where two sides serve as altitudes and the third must be calculated using negative reciprocal slopes.

### Figure F2 — Triangle OAB with circumcenter G and centroid P (middle right)
- **Type:** geometric-diagram
- **Caption/Number:** (none printed)
- **Description:** The same coordinate plane with triangle OAB (vertices O(0,0), A(6,0), B(0,6)). Two additional points are marked on the hypotenuse AB: point G(3, 3) and point P(2, 2). Line segments connect O to G and O to P, as well as P to G, demonstrating collinearity along the hypotenuse.
- **Mathematical meaning:** Demonstrates the collinearity of the circumcenter (G), centroid (P), and orthocenter (O) for this specific right-angled triangle, satisfying the condition $OP + PG = OG$.
