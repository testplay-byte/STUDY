---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-2
chapter_folder: Chapter-02-Limit-Continuity-and-Derivative
chapter_number: 2
chapter_title: LIMIT, CONTINUITY AND DERIVATIVE
page_image: 40
page_printed: 82
section: "2.22 Applications of Derivatives"
exercise: null
content_type: worked-examples
has_figures: true
figures_count: 2
source_image: ../../../Raw/Mathematics/Unit-02-Limit-Continuity-and-Derivative/0040.jpg
converted_at: "2026-09-06"
converted_by: "agent-13c3 (glm-vision)"
notes: "No section heading printed on the page — §2.22 Applications of Derivatives (heading p.81) is the section in force; worked Examples 49-51 (related rates). Book typos preserved verbatim: 'baloon' (both occurrences in Ex 51), 'where x the length of one side' (missing 'is'), lowercase 'dv' in Ex 49 differential lines, 'A of a square is a function of length of one side of x'. Ex 50 prints the SAME equation dA/dt = 2x dx/dt twice with 'is the same as:' between — as printed. No edge crops, no sidebar boxes."
---

# Page 40 — Unit 02: Limit, Continuity and Derivative

> 📄 Original scan: [0040.jpg](../../../Raw/Mathematics/Unit-02-Limit-Continuity-and-Derivative/0040.jpg) · printed page 82

**Example 49:** A side of a cube is measured to be $30cm$ with the possible error of $\pm 0.02cm$. What is the approximate maximum possible error in the volume of the cube?

**Solution:** The volume of a cube is $V = x^3$, where $x$ the length of one side. If $\Delta x$ represents the error in the length of one side, then the corresponding error in the volume is:
$$\Delta V = (x + \Delta x)^3 - x^3$$
We use differential: $dv = 3x^2 dx = 3x^2 \Delta x$
as an approximate to $\Delta V$. Thus, for $x = 30$ and $\Delta x = \pm 0.02$, the approximate maximum error is:
$$dv = 3(30)^2(\pm 0.02) = \pm 54cm^3$$

**Example 50:** A square is expanding with time. What is the rate at which the area increases related to the rate at which a side increases?

**Solution:** At any time the area A of a square is a function of length of one side of x:
$$A = x^2$$
Thus, the related rates are derived from the time derivative.
[Figure F1]
$$\frac{dA}{dt} = 2x \frac{dx}{dt} \text{ (diff w.r.t “t”)}$$
is the same as:
$$\frac{dA}{dt} = 2x \frac{dx}{dt}$$

**Example 51:** Air is being pumped into a spherical baloon at a rate of 20 cubic feet/min. At what rate is the radius changing when the radius is 3ft?

**Solution:** As shown in fig, we denote the radius of the baloon by $r$ and its volume by V. As per statement, air is being pumped at the rate $20ft^3/min$, means we have: $\frac{dV}{dt} = 20ft^3/min$
In addition, we require $\frac{dr}{dt} |_{r=3}$

We know the relation between V and r is $V = \frac{4}{3}\pi r^3$

Diff w.r.t “t”
[Figure F2]
$$\frac{dV}{dt} = \frac{4}{3}\pi (3r^2) \frac{dr}{dt}$$
$$\frac{dV}{dt} = 4\pi r^2 \frac{dr}{dt}$$
But $\frac{dV}{dt} = 20$, therefore $20 = 4\pi r^2 \frac{dr}{dt}$
$$\frac{dr}{dt} = \frac{5}{\pi r^2}$$
Thus, $\frac{dr}{dt} |_{r=3} = \frac{5}{9\pi} \frac{ft}{min} = 0.18 ft/min$

## Figures on this page

### Figure F1 — square diagram (middle right)
- **Type:** geometric-diagram
- **Caption/Number:** (none printed)
- **Description:** A simple square outline with side lengths labeled as 'x' on the right vertical edge and bottom horizontal edge.
- **Mathematical meaning:** Illustrates the geometric relationship for Example 50 where area $A=x^2$.

### Figure F2 — circle diagram (bottom right)
- **Type:** geometric-diagram
- **Caption/Number:** (none printed)
- **Description:** A circle representing a spherical balloon cross-section with a horizontal line from the center to the edge labeled 'r' indicating the radius.
- **Mathematical meaning:** Illustrates the geometric variable $r$ used in the volume formula $V=\frac{4}{3}\pi r^3$ for Example 51.
