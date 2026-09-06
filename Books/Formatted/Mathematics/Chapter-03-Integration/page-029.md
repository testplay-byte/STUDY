---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-3
chapter_folder: Chapter-03-Integration
chapter_number: 3
chapter_title: INTEGRATION
page_image: 29
page_printed: 117
section: 3.12.3 Work; 3.12.4 Motion of Spring
exercise: "3.8"
content_type: mixed
has_figures: true
figures_count: 2
source_image: ../../../Raw/Mathematics/Unit-03-Integration/0029.jpg
converted_at: "2026-09-06"
converted_by: "agent-13d2 (glm-vision)"
notes: "Book typo preserved verbatim: 'Hook's law' printed where 'Hooke's law' expected (§3.12.4). Example 34 statement styled as a blue heading in print → bold here. Exercise 3.8 Q.4 figure: region A bounded by vertical lines x=1 and x=3, region B by x=3 and x=4 (consistent with Q.4(iii) asking x=1..4). No scan-edge crops; no sidebar boxes."
---

# Page 29 — Unit 03: Integration

> 📄 Original scan: [0029.jpg](../../../Raw/Mathematics/Unit-03-Integration/0029.jpg) · printed page 117

## 3.12.3 Work

In physics when a constant force $F$ moves an object a distance $d$ in the same direction, the work done is defined as $W = Fd$.

**Definition:** Let $F(x)$ be a continuous force acting at a point in the interval $[a, b]$, then the work done $W$ by the force on moving an object from $a$ to $b$ is:

$$W = \int_{a}^{b} F(x)dx$$

## 3.12.4 Motion of Spring

Hook's law states that “when a spring is stretched (or compressed) beyond its natural length, the restoring force exerted by the spring is directly proportional to the amount of elongation (or compression)”. Thus, in order to stretch a spring, $x$ units beyond its natural length, we need to apply the force:

$F(x) = kx$; $k$ is spring constant.

[Figure F1]

**Example 34:**
A force of 130 N is required to stretch a spring 50 cm. Find the work done in stretching the spring 20 cm beyond its natural (unstretched) length.

**Solution:**

$x = 50 \text{ cm} = 0.5m$ and $F = 130N$

Substituting values of $x$ and $F$ in $F = kx$, we have:

$130 = k \times 0.5 \Rightarrow k = 260 \text{ N/m}$

Thus, $F = kx \Rightarrow F = 260 x$

Now, $x = 20 \text{ cm} = 0.2m$, so that the work done in stretching the spring by this amount is:

$$W = \int_{0}^{\frac{1}{5}} 260x \text{ } dx = |130x^2|_0^{\frac{1}{5}} = \frac{26}{5} = 5.2 J$$

## Exercise 3.8

1. Find the area of region bounded by the curve $y = x^2$, the x-axis, lines $x = 1$ and $x = 3$.
2. Find the area under the curve $y = \sqrt{6x + 4}$ (above x-axis) from $x = 0$ to $x = 2$.
3. Find the area of region bounded by the curve $y^2 = 4x$ and line $x = 3$.
4. In the figure, a sketch of the function $y = \frac{1}{2}(0.2x^2 + x)$ is shown. Find:
   (i) the area of region A.
   (ii) the area of region B.
   (iii) area of the region from $x = 1$ to $x = 4$.
   (iv) area of the region from $x = -1$ to $x = -4$.

[Figure F2]

## Figures on this page

### Figure F1 — Spring elongation diagram (right side)
- **Type:** illustration
- **Caption/Number:** (none printed)
- **Description:** An illustration showing three states of a spring hanging vertically. From left to right: "Normal" state with length labeled $x$; "Stretched" state showing increased length; and another "Stretched" state showing further elongation to total length $2x$. Each spring is attached to a fixed top support and a weight at the bottom.
- **Mathematical meaning:** Illustrates Hooke's Law where the force required to stretch a spring is proportional to the displacement $x$ from its natural length.

### Figure F2 — Graph of y = 1/2(0.2x² + x) (bottom right)
- **Type:** curve-plot
- **Caption/Number:** (none printed)
- **Description:** A Cartesian coordinate graph displaying a parabolic curve opening upwards. The x-axis ranges from -5 to 5, and the y-axis ranges from 0 to 5. The curve passes through the origin $(0,0)$ and has a vertex in the third quadrant (around $x = -2.5$). Two specific regions are shaded in light blue: Region A is bounded by the curve, the x-axis, and solid vertical lines at $x=1$ and $x=3$. Region B is bounded by the curve, the x-axis, and vertical lines at $x=3$ and $x=4$, immediately to the right of Region A.
- **Mathematical meaning:** Represents the function $y = \frac{1}{2}(0.2x^2 + x)$ used for calculating definite integrals (areas under the curve) over specific intervals as requested in Exercise 3.8, Question 4.
