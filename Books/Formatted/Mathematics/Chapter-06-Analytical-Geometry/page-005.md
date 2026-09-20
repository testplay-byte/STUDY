---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-6
chapter_folder: Chapter-06-Analytical-Geometry
chapter_number: 6
chapter_title: ANALYTICAL GEOMETRY
page_image: 5
page_printed: 164
section: Theorem 6.1; Theorem 6.2
exercise: null
content_type: theory
has_figures: true
figures_count: 2
source_image: ../../../Raw/Mathematics/Unit-06-Analytical-Geometry/0005.jpg
converted_at: "2026-09-20"
converted_by: "agent-16a (glm-vision)"
notes: "Left gutter crop on scan: leading T of 'The determinant' and A of 'Adding R2 and R3' reconstructed (unambiguous); rest of page intact"
---

# Page 5 — Unit 06: Analytical Geometry

> 📄 Original scan: [0005.jpg](../../../Raw/Mathematics/Unit-06-Analytical-Geometry/0005.jpg) · printed page 164

## Theorem 6.1:

Altitudes of a triangle are concurrent.

**Proof:**

Let $A(x_1, y_1)$, $B(x_2, y_2)$ and $C(x_3, y_3)$ be the three vertices of a triangle ABC. In the figure, $\overline{AD}$, $\overline{BE}$ and $\overline{CF}$ are altitudes of $\overline{BC}$, $\overline{CA}$ and $\overline{AB}$ respectively.

[Figure F1]

First, we find the equation of altitude $\overline{AD}$.

Slope of $\overline{BC} = \frac{y_3 - y_2}{x_3 - x_2}$

Slope of altitude of $\overline{AD} = -\frac{x_3 - x_2}{y_3 - y_2}$

Equation of altitude $\overline{AD}$ is:

$$y - y_1 = -\frac{x_3 - x_2}{y_3 - y_2}(x - x_1) \quad \dots\dots \text{ (Point-slope form)}$$

$$\Rightarrow (y - y_1)(y_3 - y_2) = -(x_3 - x_2)(x - x_1)$$

$$\Rightarrow (x_3 - x_2)x + (y_3 - y_2)y - x_1(x_3 - x_2) - y_1(y_3 - y_2) = 0 \quad \dots\dots(1)$$

By symmetry, equations of altitudes $\overline{BE}$ and $\overline{CF}$ are respectively as follows.

$$(x_1 - x_3)x + (y_1 - y_3)y - x_2(x_1 - x_3) - y_2(y_1 - y_3) = 0 \quad \dots\dots(2)$$

$$(x_2 - x_1)x + (y_2 - y_1)y - x_3(x_2 - x_1) - y_3(y_2 - y_1) = 0 \quad \dots\dots(3)$$

The determinant of coefficients of the three lines is:

$$\begin{vmatrix} x_3 - x_2 & y_3 - y_2 & -x_1(x_3 - x_2) - y_1(y_3 - y_2) \\ x_1 - x_3 & y_1 - y_3 & -x_2(x_1 - x_3) - y_2(y_1 - y_3) \\ x_2 - x_1 & y_2 - y_1 & -x_3(x_2 - x_1) - y_3(y_2 - y_1) \end{vmatrix}$$

Adding $R_2$ and $R_3$ in $R_1$, we get:

$$\begin{vmatrix} 0 & 0 & 0 \\ x_1 - x_3 & y_1 - y_3 & -x_2(x_1 - x_3) - y_2(y_1 - y_3) \\ x_2 - x_1 & y_2 - y_1 & -x_3(x_2 - x_1) - y_3(y_2 - y_1) \end{vmatrix} = 0$$

Thus, the altitudes of a triangle are concurrent.

## Theorem 6.2:

Right bisectors of a triangle are concurrent.

**Proof:**

Let $A(x_1, y_1)$, $B(x_2, y_2)$ and $C(x_3, y_3)$ be the three vertices of a triangle ABC. In the figure, $\overline{OD}$, $\overline{OE}$ and $\overline{OF}$ are right bisectors of $\overline{BC}$, $\overline{CA}$ and $\overline{AB}$ respectively.

First, we find the equation of right bisector $\overline{OD}$.

Coordinates of mid point D of $\overline{BC}$ are $\left(\frac{x_2 + x_3}{2}, \frac{y_2 + y_3}{2}\right)$.

[Figure F2]

## Figures on this page

### Figure F1 — Triangle with altitudes (top right)
- **Type:** geometric-diagram
- **Caption/Number:** (none printed)
- **Description:** A triangle labeled with vertices A$(x_1, y_1)$ at the top, B$(x_2, y_2)$ at the bottom left, and C$(x_3, y_3)$ at the bottom right. Three lines representing altitudes are drawn from each vertex to the opposite side: line AD meets BC at D, line BE meets AC at E, and line CF meets AB at F. Right-angle symbols indicate perpendicularity at points D, E, and F. All three lines intersect at a common point O inside the triangle.
- **Mathematical meaning:** Illustrates the concurrency of the three altitudes of a triangle (Theorem 6.1).

### Figure F2 — Triangle with right bisectors (bottom right)
- **Type:** geometric-diagram
- **Caption/Number:** (none printed)
- **Description:** A triangle labeled with vertices A$(x_1, y_1)$ at the top, B$(x_2, y_2)$ at the bottom left, and C$(x_3, y_3)$ at the bottom right. Three lines representing right bisectors are drawn: OD passes through the midpoint D of side BC, OE passes through the midpoint E of side AC, and OF passes through the midpoint F of side AB. Right-angle symbols indicate that these lines are perpendicular to their respective sides. All three lines intersect at a common point O inside the triangle.
- **Mathematical meaning:** Illustrates the concurrency of the three right bisectors of a triangle (Theorem 6.2).
