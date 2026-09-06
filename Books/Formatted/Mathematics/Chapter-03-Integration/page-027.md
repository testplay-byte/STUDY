---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-3
chapter_folder: Chapter-03-Integration
chapter_number: 3
chapter_title: INTEGRATION
page_image: 27
page_printed: 115
section: "3.12 Applications; 3.12.1 Consumer and Producer Surpluses"
exercise: null
content_type: worked-examples
has_figures: true
figures_count: 1
source_image: ../../../Raw/Mathematics/Unit-03-Integration/0027.jpg
converted_at: "2026-09-06"
converted_by: "agent-13e (glm-vision)"
notes: "Book typos preserved verbatim: '(b(s) = 0)' printed where D(b) = 0 would be expected; producer-surplus integral prints upper limit capital P ($P_s = \\int_c^P S(x)dx$)."
---

# Page 27 — Unit 03: Integration

> 📄 Original scan: [0027.jpg](../../../Raw/Mathematics/Unit-03-Integration/0027.jpg) · printed page 115

**Example 31:**

Find the volume of the solid generated when the region enclosed by $y = \sqrt{x}, y = 0$ and $y = 2$ is revolved about the y-axis.

**Solution:**

First sketch the region and the solid. The cross section taken perpendicular to the y-axis and disk suggests that we can rewrite $y = \sqrt{x}$ as $x = y^2$. Thus, $g(y) = y^2$ and the volume is:

$$V = \pi \int_{a}^{b} [g(y)]^{2}dy = \pi \int_{0}^{2} (y^{2})^{2}dy = \pi \int_{0}^{2} y^{4}dy$$

$$V = \pi \left| \frac{y^{5}}{5} \right|_{0}^{2} = \frac{\pi}{5}(2^{5}-0^{5}) = \frac{32\pi}{5} \text{ cu. units}$$

[Figure F1]

## 3.12 Applications

### 3.12.1 Consumer and Producer Surpluses

Economists use the definite integral to define the concept of consumer and producer surpluses.

The demand for a commodity by consumers as well as the amount supplied to the market by the manufacturers can often be expressed as a function of the per unit price. Let $D(x)$ and $S(x)$ be the number of units demanded and the number of units supplied, respectively, when the commodity sells at a price $x$ per unit.

If the demand equals the supply:

$$D(x) = S(x)$$

The market is said to be in equilibrium and the corresponding price of the commodity is called the equilibrium price. If $p$ is the equilibrium price and $b$ is the price at which the demand of the commodity is zero ($b(s)=0$), the integral:

$$Cs = \int_{p}^{b} D(x)dx$$

is called the consumer surplus. Similarly, the integral:

$$Ps = \int_{c}^{P} S(x)dx$$

where $S(c) = 0$, is called the producer surplus.

## Figures on this page

### Figure F1 — Graph of region enclosed by curves (top right)
- **Type:** curve-plot
- **Caption/Number:** (none printed)
- **Description:** A Cartesian coordinate system with x-axis ranging from -4 to 4 and y-axis from -2 to 2. A parabola opening to the right with its vertex at the origin $(0,0)$ is plotted, representing $x=y^2$. The region bounded by this curve, the line $y=0$ (the x-axis), and the horizontal line $y=2$ is shaded in light blue.
- **Mathematical meaning:** Illustrates the area bounded by $y=\sqrt{x}$, $y=0$, and $y=2$ which is revolved around the y-axis to find the volume of the solid of revolution.
