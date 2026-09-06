---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-3
chapter_folder: Chapter-03-Integration
chapter_number: 3
chapter_title: INTEGRATION
page_image: 26
page_printed: 114
section: "3.11 Volume of Solids of Revolution; 3.11.1 Disc Method"
exercise: null
content_type: theory
has_figures: true
figures_count: 2
source_image: ../../../Raw/Mathematics/Unit-03-Integration/0026.jpg
converted_at: "2026-09-06"
converted_by: "agent-13e (glm-vision)"
notes: "Opens mid-Example 29 (final area computation of §3.10.2). Book quirks preserved verbatim: 'can approximated' (missing 'be'); Note prints V = π ∫ [g(x)]² dx with variable x although the text says x = g(y) (as printed); 'Respectively' capitalized mid-sentence."
---

# Page 26 — Unit 03: Integration

> 📄 Original scan: [0026.jpg](../../../Raw/Mathematics/Unit-03-Integration/0026.jpg) · printed page 114

Thus, the area of region bounded is:
$$\begin{aligned} A &= \int_{-1}^{2}[g(x) - f(x)]dx = \int_{-1}^{2}[(3 - x) - (x - 1)^{2}]dx = \int_{-1}^{2}(2 + x - x^{2})dx \\ &= \left[2x + \frac{x^{2}}{2} - \frac{x^{3}}{3}\right]_{-1}^{2} = \left[2(2) + \frac{2^{2}}{2} - \frac{2^{3}}{3}\right] - \left[2(-1) + \frac{(-1)^{2}}{2} - \frac{(-1)^{3}}{3}\right] \\ &= \left[4 + 2 - \frac{8}{3}\right] - \left[-2 + \frac{1}{2} + \frac{1}{3}\right] = 6 - \frac{8}{3} + 2 - \frac{1}{2} - \frac{1}{3} = 8 - 3 - 0.5 = 4.5 \text{ sq. units} \end{aligned}$$

## 3.11 Volume of Solids of Revolution

### 3.11.1 Disc Method

Consider a region bounded by the graph of $y = f(x)$ and the x-axis between $x = a$ and $x = b$ that is rotated about x-axis. If $a = x_{0} < x_{1} < x_{2} \ldots < x_{n} = b$ is partition of the interval $[a, b]$, the volume $V$ of the resulting 3-D region can approximated by the sum of volumes of discs obtained after rotation.

The radius and height of discs $D_{i}$ are $f(x)_{i}$ and $\Delta x_{i}$ Respectively. Thus:
$$V = \sum_{i=1}^{n} \pi[f(x_{i})]^{2}\Delta x_{i}$$
Letting $\Delta x_{i} \to 0$, we have:
$$V = \pi \int_{a}^{b} [f(x)]^{2} dx$$

[Figure F1]

> Volume of disc = area of base $\times$ height = $(\pi r^{2})(h)$

**Example 30:**
Find the volume of the solid obtained by rotating the graph $y = x^{2}$ between $x = 1$ and $x = 2$ about x-axis.

**Solution:**
$$\begin{aligned} V &= \pi \int_{1}^{2} [f(x)]^{2}dx \\ V &= \pi \int_{1}^{2} (x^{2})^{2}dx = \pi \int_{1}^{2} x^{4}dx \\ V &= \pi \left[\frac{x^{5}}{5}\right]_{1}^{2} = \frac{\pi}{5}(2^{5} - 1^{5}) = \frac{31\pi}{5} \text{ cu. units} \end{aligned}$$

[Figure F2]

**Note:** If a solid is obtained by rotating the regions bounded by the graph $x = g(y)$ about y-axis, we can also use the disc method to find the volume as follows.
$$V = \pi \int_{a}^{b} [g(x)]^{2}dx$$

## Figures on this page

### Figure F1 — Disc method diagram (right margin, level with the Disc Method formulas)
- **Type:** geometric-diagram
- **Caption/Number:** (none printed)
- **Description:** A schematic diagram illustrating the Disc Method for finding volumes of revolution. It shows a curve above an x-axis with a region partitioned into vertical strips. These strips are represented as thin discs or cylinders stacked along the axis from point $a$ to point $b$. The discs at the ends are drawn as full ellipses to show their circular cross-sections.
- **Mathematical meaning:** Illustrates that the volume of a solid of revolution can be approximated by summing the volumes of thin cylindrical discs with radius $f(x)$ and height $\Delta x$.

### Figure F2 — Graph of y = x² (right margin, beside Example 30 solution)
- **Type:** curve-plot
- **Caption/Number:** (none printed)
- **Description:** A Cartesian coordinate system showing the parabola $y = x^2$. The x-axis ranges from approximately -2 to 2, and the y-axis ranges from -4 to 4. The region under the curve between $x = 1$ and $x = 2$ is shaded in light blue. The curve passes through the origin $(0,0)$ and points $(1,1)$ and $(2,4)$.
- **Mathematical meaning:** Visualizes the area bounded by $y=x^2$, the x-axis, $x=1$, and $x=2$, which is rotated about the x-axis to form the solid whose volume is calculated in Example 30.
