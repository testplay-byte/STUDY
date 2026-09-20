---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-7
chapter_folder: Chapter-07-Conic-Section
chapter_number: 7
chapter_title: CONIC SECTION
page_image: 7
page_printed: 188
section: 7.3 Line and a Circle
exercise: null
content_type: theory
has_figures: true
figures_count: 1
source_image: ../../../Raw/Mathematics/Unit-07-Conic-Section/0007.jpg
converted_at: "2026-09-20"
converted_by: "agent-16b (glm-vision)"
notes: "'Key Facts' sidebar box (distance-of-point-to-line formula + mini diagram) converted to blockquote, not an F-block; page starts mid-Example 6 (cont. p.187) and ends mid-case iii of 7.3 (formula continues p.189)"
---

# Page 7 — Unit 07: Conic Section

> 📄 Original scan: [0007.jpg](../../../Raw/Mathematics/Unit-07-Conic-Section/0007.jpg) · printed page 188

Squaring both sides:
$$\begin{aligned} &\Rightarrow 4+(k-2)^{2}=\frac{(2-2k)^{2}}{5} \Rightarrow 4+k^{2}-4 k+4=\frac{4 k^{2}-8 k+4}{5} \\ &\Rightarrow k^{2}-4 k+8=\frac{4 k^{2}-8 k+4}{5} \Rightarrow 5 k^{2}-20 k+40=4 k^{2}-8 k+4 \\ &\Rightarrow k^{2}-12 k+36=0 \Rightarrow(k-6)^{2}=0 \Rightarrow k-6=0 \Rightarrow k=6 \end{aligned}$$

Thus, centre of the circle is $C(h,k) = (1, 6)$ and radius of the circle is:
$r = |CP| = \sqrt{(1+1)^2 + (6-2)^2} = \sqrt{4+16} = \sqrt{20}$

Equation of the circle with centre at (1, 6) and radius $\sqrt{20}$ is:
$$(x-1)^{2}+(y-6)^{2}=(\sqrt{20})^{2}$$
$$\Rightarrow x^{2}-2 x+1+y^{2}-12 y+36=20$$
$$\Rightarrow x^{2}+y^{2}-2 x-12 y+17=0$$
Which is required equation of circle.

> **Key Facts**
>
> * The distance $d$ of a point $P(x_0, y_0)$ from a line $ax + by + c = 0$, is the length of the perpendicular drawn from the point to the given line as shown below:
> * $d = \dfrac{|ax_0 + by_0 + c|}{\sqrt{a^2 + b^2}}$ *(box also shows a small diagram: a slanted line $ax + by + c = 0$, a point $P(x_0, y_0)$ and the perpendicular segment of length $d$ from the point to the line)*

## 7.3 Line and a Circle

Consider a circle $x^2 + y^2 = r^2$ (i)
and a line $y = mx + c$ which implies:
$$mx - y + c = 0 \quad \text{(ii)}$$

The centre of the circle is at $(0,0)$ and its radius is $r$.

**i. When line intersects the circle at two distinct points.**
When the line intersects the circle then the distance between the centre and the line, is less than the radius of the circle. i.e.,
$$\frac{|m(0)-0+c|}{\sqrt{m^{2}+(-1)^{2}}}<r$$
$$\Rightarrow \frac{|c|}{\sqrt{m^{2}+1}}<r \quad \text{or} \quad|c|<r\sqrt{m^{2}+1}$$
$$\Rightarrow c^{2}<r^{2}(m^{2}+1).$$
Which is the condition that the line will intersect the circle at two distinct points.

**ii. When the line is tangent to circle.**
When the line is tangent to the circle then distance between the centre and the line is equal to the radius of the circle. i.e.,
$$\frac{|m(0)-0+c|}{\sqrt{m^{2}+1}}=r \quad \Rightarrow \quad \frac{|c|}{\sqrt{m^{2}+1}}=r \quad \Rightarrow \quad|c|=r\sqrt{m^{2}+1}$$
$$\Rightarrow c=\pm r\sqrt{m^{2}+1}$$
Putting the value of $c$ in $y = mx + c$, we get:
$$y=mx \pm r\sqrt{m^{2}+1}$$
Which are the equations of the tangent lines to the circle $x^2 + y^2 = r^2$.

**iii. When the line neither touches nor intersects the circle**
When the line neither touches nor intersects the circle then distance of the centre from the line is greater than the radius of the circle i.e.;

[Figure F1]

## Figures on this page

### Figure F1 — Line and Circle intersection diagram (right side)
- **Type:** geometric-diagram
- **Caption/Number:** (none printed)
- **Description:** A geometric diagram showing a circle with its center marked as a black dot. Three distinct straight lines with arrows pass through or near the circle. One line passes through the circle intersecting it at two points. A second line touches the circle at exactly one point (tangent). A third line is entirely outside the circle, not touching or intersecting it.
- **Mathematical meaning:** Visually demonstrates the three possible relative positions of a line with respect to a circle: secant (intersecting at two points), tangent (touching at one point), and external (no intersection).
