---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-7
chapter_folder: Chapter-07-Conic-Section
chapter_number: 7
chapter_title: CONIC SECTION
page_image: 24
page_printed: 205
section: null
exercise: null
content_type: worked-examples
has_figures: true
figures_count: 2
source_image: ../../../Raw/Mathematics/Unit-07-Conic-Section/0024.jpg
converted_at: "2026-09-20"
converted_by: "agent-16i (glm-vision)"
notes: "Elements-of-ellipse comparison table with two small unlabeled ellipse diagrams (one per column head) — markers [Figure F1]/[Figure F2] placed in the column-head cells. Crossed-out (cancelled) terms in Example 18 solution rendered with \not{}. No numbered section heading printed on page. Book wording 'The table shows summary of the elements of ellipse.' and 'Divide both sides by 400, we get' preserved"
---

# Page 24 — Unit 07: Conic Section

> 📄 Original scan: [0024.jpg](../../../Raw/Mathematics/Unit-07-Conic-Section/0024.jpg) · printed page 205

The table shows summary of the elements of ellipse.

| | [Figure F1] $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ | [Figure F2] $\frac{x^2}{b^2} + \frac{y^2}{a^2} = 1$ |
| :--- | :--- | :--- |
| **Centre** | O(0,0) | O(0,0) |
| **Foci** | $(-c,0)$ & $(c,0)$ | $(0,-c)$ & $(0,c)$ |
| **Major Axis** | $x$-axis with equation $y = 0$ | $y$-axis with equation $x = 0$ |
| **Minor Axis** | $y$-axis with equation $x = 0$ | $x$-axis with equation $y = 0$ |
| **Vertices** | $(-a,0)$ & $(a,0)$ | $(0,-a)$ & $(0,a)$ |
| **Co-Vertices** | $(0,-b)$ & $(0,b)$ | $(-b,0)$ & $(b,0)$ |
| **Directrices** | $x = \pm\frac{a}{e}$ | $y = \pm\frac{a}{e}$ |

**Note:** Equation of the ellipse with centre at arbitrary point $(h,k)$ is:

$$\frac{(x-h)^2}{a^2} + \frac{(y-k)^2}{b^2} = 1 \quad \text{or} \quad \frac{(x-h)^2}{b^2} + \frac{(y-k)^2}{a^2} = 1$$

**Example 18:** Find the equation of an ellipse with foci $(-3,0)$ and $(3,0)$ and the sum of the distance of any point from the foci is 10.

**Solution:** Given that foci of the ellipse are $\text{F}_1(-3,0)$ and $\text{F}_2(3,0)$. Take any point $\text{P}(x,y)$ on the ellipse, then by definition of ellipse:
$$|\text{PF}_1| + |\text{PF}_2| = 10$$
$$\Rightarrow \sqrt{(x+3)^2 + (y-0)^2} + \sqrt{(x-3)^2 + (y-0)^2} = 10$$
$$\Rightarrow \sqrt{(x+3)^2 + y^2} = 10 - \sqrt{(x-3)^2 + y^2}$$
Squaring both sides:
$$(x+3)^2 + y^2 = 100 + ((x-3)^2 + y^2) - 20\sqrt{(x-3)^2 + y^2}$$
$$\Rightarrow \not{x}^2 + 6x + \not{9} + \not{y}^2 = 100 + \not{x}^2 - 6x + \not{9} + \not{y}^2 - 20\sqrt{(x-3)^2 + y^2}$$
$$\Rightarrow 20\sqrt{(x-3)^2 + y^2} = 100 - 12x \quad \text{or} \quad 5\sqrt{(x-3)^2 + y^2} = 25 - 3x$$
Again, squaring both sides:
$$25((x-3)^2 + y^2) = 625 + 9x^2 - 150x$$
$$\Rightarrow 25(x^2 - 6x + 9 + y^2) = 625 + 9x^2 - 150x$$
$$\Rightarrow 25x^2 - 150x + 225 + 25y^2 = 625 + 9x^2 - 150x$$
$$\Rightarrow 16x^2 + 25y^2 = 400$$
Divide both sides by 400, we get the required equation of ellipse as:
$$\frac{x^2}{25} + \frac{y^2}{16} = 1$$

## Figures on this page

### Figure F1 — Horizontal ellipse (top center)
- **Type:** geometric-diagram
- **Caption/Number:** (none printed)
- **Description:** A small diagram of a horizontally oriented ellipse at the head of the left column. Solid horizontal and vertical axis lines pass through the centre; no points or labels are marked on the diagram.
- **Mathematical meaning:** Represents an ellipse with the standard equation $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$, where $a > b$.

### Figure F2 — Vertical ellipse (top right)
- **Type:** geometric-diagram
- **Caption/Number:** (none printed)
- **Description:** A small diagram of a vertically oriented ellipse at the head of the right column. Solid horizontal and vertical axis lines pass through the centre; no points or labels are marked on the diagram.
- **Mathematical meaning:** Represents an ellipse with the standard equation $\frac{x^2}{b^2} + \frac{y^2}{a^2} = 1$, where $a > b$.
