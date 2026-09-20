---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-7
chapter_folder: Chapter-07-Conic-Section
chapter_number: 7
chapter_title: CONIC SECTION
page_image: 12
page_printed: 193
section: 7.6 Length of a Tangent Drawn from a Point Lying outside the Circle
exercise: null
content_type: mixed
has_figures: true
figures_count: 2
source_image: ../../../Raw/Mathematics/Unit-07-Conic-Section/0012.jpg
converted_at: "2026-09-20"
converted_by: "agent-16h (glm-vision)"
notes: "Page opens mid-derivation (condition for a point inside/on/outside circle, continued from previous page; no heading for it printed here). Book misprint preserved verbatim: Example 9 circle equation prints 8x (and divided form 4x, substituted term 4x_1) where the arithmetic 4(4)=16 clearly treats it as the y-term; typo noted, not corrected."
---

# Page 12 — Unit 07: Conic Section

> 📄 Original scan: [0012.jpg](../../../Raw/Mathematics/Unit-07-Conic-Section/0012.jpg) · printed page 193

$$\Rightarrow \sqrt{(x_1 + g)^2 + (y_1 + f)^2} \lessgtr \sqrt{g^2 + f^2 - c}$$

Squaring both sides

$$(x_1 + g)^2 + (y_1 + f)^2 \lessgtr g^2 + f^2 - c$$

$$\Rightarrow x_1^2 + 2gx_1 + g^2 + y_1^2 + 2fy_1 + f^2 \lessgtr g^2 + f^2 - c$$

$$\Rightarrow x_1^2 + 2gx_1 + g^2 + y_1^2 + 2fy_1 + f^2 - g^2 - f^2 + c \lessgtr 0$$

$$\Rightarrow x_1^2 + 2gx_1 + g^2 + y_1^2 + 2fy_1 + c \lessgtr 0$$

Which is the condition that a point lies inside, on or outside the circle.

[Figure F1]

**Example 9:** Check whether the point P(2,4) lies outside, on or inside the circle:

$$2x^2 + 2y^2 - 6x + 8x + 1 = 0$$

**Solution:** Given equation of circle is $2x^2 + 2y^2 - 6x + 8x + 1 = 0$.

First make the coefficients of $x^2$ and $y^2$ one. Dividing both sides by 2, we have:

$$x^2 + y^2 - 3x + 4x + \frac{1}{2} = 0$$

Given point is (2,4). So:

$$\begin{aligned} x_1^2 + y_1^2 - 3x_1 + 4x_1 + \frac{1}{2} &= (2)^2 + (4)^2 - 3(2) + 4(4) + \frac{1}{2} \\ &= 4 + 16 - 6 + 16 + \frac{1}{2} = \frac{61}{2} > 0 \end{aligned}$$

Thus, the point lies outside the circle.

## 7.6 Length of a Tangent Drawn from a Point Lying outside the Circle

Let $x^2 + y^2 + 2gx + 2fy + c = 0$ be the equation of a circle and P($x_1 , y_1$) lies outside the circle.

The centre of the circle is C($-g, -f$) and the radius of the circle is $r = \sqrt{g^2 + f^2 - c}$.

Two tangents can be drawn from the point P to circle. Thus, both tangents have the same length. i.e., $|AP| = |BP|$.

[Figure F2]

Since PCA is a right-angled triangle, so by Pythagoras theorem:

$$|CA|^2 + |AP|^2 = |CP|^2$$

$$\Rightarrow r^2 + |AP|^2 = \left(\sqrt{(x_1 + g)^2 + (y_1 + f)^2}\right)$$

$$\Rightarrow \left(\sqrt{g^2 + f^2 - c}\right)^2 + |AP|^2 = \left(\sqrt{x_1^2 + 2gx_1 + g^2 + y_1^2 + 2fy_1 + f^2}\right)^2$$

$$\Rightarrow g^2 + f^2 - c + |AP|^2 = x_1^2 + 2gx_1 + g^2 + y_1^2 + 2fy_1 + f^2$$

$$\Rightarrow |AP|^2 = x_1^2 + y_1^2 + 2gx_1 + 2fy_1 + c$$

$$\Rightarrow |AP| = \sqrt{x_1^2 + y_1^2 + 2gx_1 + 2fy_1 + c}$$

Which is the length of tangent line.

## Figures on this page

### Figure F1 — Point inside / on / outside a circle (right margin, beside the condition line)
- **Type:** geometric-diagram
- **Caption/Number:** (none printed)
- **Description:** A single circle with center marked by a dot and labeled $C(-g, -f)$. Three points, each drawn as a solid black dot and each labeled $P(x_1, y_1)$: one outside the circle, one on the circumference, and one inside the circle. A solid line segment joins the center to each of the three points.
- **Mathematical meaning:** Illustrates the relative positions of a point with respect to a circle (inside, on, or outside) based on its distance from the center compared to the radius.

### Figure F2 — Tangent segments from an external point (right margin, beside the §7.6 derivation)
- **Type:** geometric-diagram
- **Caption/Number:** (none printed)
- **Description:** A circle with center dot labeled $C(-g, -f)$. An external point $P(x_1, y_1)$ lies above the circle. Two tangent lines from P touch the circle at points A (right side) and B (upper left), giving tangent segments PA and PB. Radii CA and CB are drawn to the points of tangency, each labeled $r$.
- **Mathematical meaning:** Demonstrates the geometric derivation for the length of a tangent ($|AP|$ or $|BP|$) from an external point P to a circle using the Pythagorean theorem in right triangle PCA.
