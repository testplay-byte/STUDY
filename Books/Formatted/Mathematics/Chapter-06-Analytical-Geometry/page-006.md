---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-6
chapter_folder: Chapter-06-Analytical-Geometry
chapter_number: 6
chapter_title: ANALYTICAL GEOMETRY
page_image: 6
page_printed: 165
section: Theorem 6.2; Theorem 6.3
exercise: null
content_type: theory
has_figures: true
figures_count: 1
source_image: ../../../Raw/Mathematics/Unit-06-Analytical-Geometry/0006.jpg
converted_at: "2026-09-20"
converted_by: "agent-16f (glm-vision)"
notes: "Continuation page: tail of Theorem 6.2 (right bisectors) proof + Theorem 6.3 (medians) opening. Left gutter crop on scan: leading 'Add' of 'Adding R2 and R3 in R1, we get:' reconstructed (unambiguous, identical sentence on p.164); rest of page edge-complete. Footer ribbon 165 fully visible."
---

# Page 6 — Unit 06: Analytical Geometry

> 📄 Original scan: [0006.jpg](../../../Raw/Mathematics/Unit-06-Analytical-Geometry/0006.jpg) · printed page 165

Slope of $\overline{BC} = \frac{y_3 - y_2}{x_3 - x_2}$

Slope of right bisector $\overline{OD} = -\frac{x_3 - x_2}{y_3 - y_2}$

Equation of right bisector $\overline{OD}$ is:

$$y - \frac{y_2 + y_3}{2} = -\frac{x_3 - x_2}{y_3 - y_2}\left(x - \frac{x_2 + x_3}{2}\right) \quad \dots\dots \text{ (Point-slope form)}$$

$$\Rightarrow \left(y - \frac{y_2 + y_3}{2}\right)(y_3 - y_2) = -(x_3 - x_2)\left(x - \frac{x_2 + x_3}{2}\right)$$

After simplification, we get:

$$(x_3 - x_2)x + (y_3 - y_2)y - \frac{1}{2}(x_3^2 - x_2^2) - \frac{1}{2}(y_3^2 - y_2^2) = 0 \quad \dots\dots(1)$$

By symmetry, equations of right bisectors $\overline{OE}$ and $\overline{OF}$ are respectively as follows.

$$(x_1 - x_3)x + (y_1 - y_3)y - \frac{1}{2}(x_1^2 - x_3^2) - \frac{1}{2}(y_1^2 - y_3^2) = 0 \quad \dots\dots(2)$$

$$(x_2 - x_1)x + (y_2 - y_1)y - \frac{1}{2}(x_2^2 - x_1^2) - \frac{1}{2}(y_2^2 - y_1^2) = 0 \quad \dots\dots(3)$$

The determinant of coefficients of the three lines is:

$$\begin{vmatrix} x_3 - x_2 & y_3 - y_2 & -\frac{1}{2}(x_3^2 - x_2^2) - \frac{1}{2}(y_3^2 - y_2^2) \\ x_1 - x_3 & y_1 - y_3 & -\frac{1}{2}(x_1^2 - x_3^2) - \frac{1}{2}(y_1^2 - y_3^2) \\ x_2 - x_1 & y_2 - y_1 & -\frac{1}{2}(x_2^2 - x_1^2) - \frac{1}{2}(y_2^2 - y_1^2) \end{vmatrix}$$

Adding $R_2$ and $R_3$ in $R_1$, we get:

$$\begin{vmatrix} 0 & 0 & 0 \\ x_1 - x_3 & y_1 - y_3 & -\frac{1}{2}(x_1^2 - x_3^2) - \frac{1}{2}(y_1^2 - y_3^2) \\ x_2 - x_1 & y_2 - y_1 & -\frac{1}{2}(x_2^2 - x_1^2) - \frac{1}{2}(y_2^2 - y_1^2) \end{vmatrix} = 0$$

Thus, the right bisectors of a triangle are concurrent.

## Theorem 6.3:

Medians of a triangle are concurrent.

**Proof:**

Let $A(x_1, y_1)$, $B(x_2, y_2)$ and $C(x_3, y_3)$ be the three vertices of a triangle ABC. In the figure, $\overline{AD}$, $\overline{BE}$ and $\overline{CF}$ are medians of the triangle.

First, we find the equation of median $\overline{AD}$.

Coordinates of mid point D of $\overline{BC}$ are $\left(\frac{x_2 + x_3}{2}, \frac{y_2 + y_3}{2}\right)$.

Using two-point formula, equation of median $\overline{AD}$ is:

[Figure F1]

## Figures on this page

### Figure F1 — Triangle ABC with medians (bottom right)
- **Type:** geometric-diagram
- **Caption/Number:** (none printed)
- **Description:** A triangle with vertices labeled $A(x_1, y_1)$ at the top, $B(x_2, y_2)$ at the bottom left, and $C(x_3, y_3)$ at the bottom right. Three line segments representing medians are drawn from each vertex to the midpoint of the opposite side: AD connects vertex A to point D on BC, BE connects vertex B to point E on AC, and CF connects vertex C to point F on AB. All three medians intersect at a single interior point labeled O.
- **Mathematical meaning:** Illustrates that the three medians of a triangle are concurrent at a common point O (the centroid), as stated in Theorem 6.3.
