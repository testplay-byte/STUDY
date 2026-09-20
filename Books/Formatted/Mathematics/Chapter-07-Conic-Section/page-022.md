---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-7
chapter_folder: Chapter-07-Conic-Section
chapter_number: 7
chapter_title: CONIC SECTION
page_image: 22
page_printed: 203
section: 7.9 Ellipse; 7.9.1 Standard Equation of an Ellipse
exercise: null
content_type: theory
has_figures: true
figures_count: 4
source_image: ../../../Raw/Mathematics/Unit-07-Conic-Section/0022.jpg
converted_at: "2026-09-20"
converted_by: "coordinator-w4a (glm-vision)"
notes: "Pen-slash exponent cancellations in squaring steps rendered with \\not{}. BOOK MISPRINT preserved in F2 diagram: BOTH x-intercept vertices labeled A_2 ((-a,0) left and (a,0) right; right one should read A_1). Book typo 'pint' (point) in 7.9.1 preserved."
---

# Page 22 — Unit 07: Conic Section

> 📄 Original scan: [0022.jpg](../../../Raw/Mathematics/Unit-07-Conic-Section/0022.jpg) · printed page 203

## 7.9 Ellipse

It is the set of all the points in the plane such that the sum of the distances of each point from two fixed points in the plane remains same. The two fixed points are known as foci (plural of focus) of the ellipse.

The midpoint of the foci is called the centre of ellipse.

[Figure F1]

## 7.9.1 Standard Equation of an Ellipse

Consider an ellipse with centre at origin and the foci on $x$-axis. Let the foci be $\text{F}_1(-c, 0)$ and $\text{F}_2(c, 0)$. Also suppose that sum of the distance of each pint of ellipse from foci is $2a$ which is constant.

Take any point $\text{P}(x, y)$ on ellipse then by definition of ellipse:

$$|\text{PF}_1| + |\text{PF}_2| = 2a$$

$$\Rightarrow \sqrt{(x+c)^2+(y-0)^2}+\sqrt{(x-c)^2+(y-0)^2}=2a$$

$$\Rightarrow \sqrt{(x+c)^2+(y)^2}=2a-\sqrt{(x-c)^2+(y)^2}$$

[Figure F2]

Squaring both sides, we get:
$$(x+c)^2+y^2=4a^2+((x-c)^2+y^2)-4a\sqrt{(x-c)^2+(y)^2}$$
$$\Rightarrow x^{\not{2}}+c^{\not{2}}+2cx+y^{\not{2}}=4a^2+x^{\not{2}}+c^{\not{2}}-2cx+y^{\not{2}}-4a\sqrt{(x-c)^2+y^2}$$
$$\Rightarrow 4a\sqrt{(x-c)^2+y^2}=4a^2-4cx \quad \Rightarrow \quad a\sqrt{(x-c)^2+y^2}=a^2-cx$$

Again, squaring both sides, we have:
$$a^2[(x-c)^2+y^2]=a^4+c^2x^2-2a^2cx$$
$$\Rightarrow a^2[x^2+c^2-2cx+y^2]=a^4+c^2x^2-2a^2cx$$
$$\Rightarrow a^2x^2+a^2c^2-2a^2cx+a^2y^2=a^4+c^2x^2-2a^2cx$$
$$\Rightarrow (a^2x^2-c^2x^2)+a^2y^2=a^4-a^2c^2 \quad \Rightarrow \quad (a^2-c^2)x^2+a^2y^2=a^2(a^2-c^2) \quad (i)$$

Since $a > c \Rightarrow a^2 > c^2 \Rightarrow a^2 - c^2 > 0$

Let $a^2 - c^2 = b$ (say), thus, equation (i) becomes:
$$b^2x^2+a^2y^2=a^2b^2$$

Dividing both sides by $a^2b^2$, we have: $\frac{b^2x^2}{a^2b^2}+\frac{a^2y^2}{a^2b^2}=\frac{a^2b^2}{a^2b^2}$

$\Rightarrow \frac{x^2}{a^2}+\frac{y^2}{b^2}=1$ is the equation of ellipse in standard form.

Note: If we take foci on $y$-axis i.e. $F_1(0, -c)$ and $F_2(0, c)$ then equation of ellipse will be: $\frac{x^2}{b^2}+\frac{y^2}{a^2}=1$

[Figure F3]

### Elements of Ellipse

Consider the ellipse $\frac{x^2}{a^2}+\frac{y^2}{b^2}=1$

Following are its elements.

**Foci**

The two fixed points $\text{F}_1(-c, 0)$ and $\text{F}_2(c, 0)$ are known as foci of ellipse.

[Figure F4]

## Figures on this page

### Figure F1 — Ellipse definition diagram (top right)
- **Type:** geometric-diagram
- **Caption/Number:** (none printed)
- **Description:** A simple line drawing showing an oval (ellipse) with two interior fixed points labeled $F_1$ and $F_2$. Three distinct points labeled P are shown on the perimeter of the ellipse. Lines connect each point P to both $F_1$ and $F_2$, illustrating the distance sum property.
- **Mathematical meaning:** Demonstrates the geometric definition of an ellipse as the locus of points where the sum of distances to two fixed foci ($F_1$, $F_2$) is constant.

### Figure F2 — Ellipse derivation coordinate system (middle right)
- **Type:** curve-plot
- **Caption/Number:** (none printed)
- **Description:** A Cartesian coordinate system showing an ellipse centered at the origin O with its major axis along the x-axis. The foci are marked as $F_1(c, 0)$ and $F_2(-c, 0)$. The vertices are marked as $A_2(-a, 0)$ and $A_2(a, 0)$. A generic point $P(x, y)$ is shown in the first quadrant with line segments connecting it to the foci.
- **Mathematical meaning:** Illustrates the setup for deriving the standard equation of an ellipse with horizontal major axis, where the sum of distances $|PF_1| + |PF_2| = 2a$.

### Figure F3 — Vertical ellipse coordinate system (lower middle right)
- **Type:** curve-plot
- **Caption/Number:** (none printed)
- **Description:** A Cartesian coordinate system showing an ellipse centered at the origin O with its major axis along the y-axis. The foci are marked as $F_1(0, c)$ and $F_2(0, -c)$. A generic point $P(x, y)$ is shown in the second quadrant with line segments connecting it to the foci.
- **Mathematical meaning:** Illustrates the orientation where foci lie on the y-axis, leading to the standard form $\frac{x^2}{b^2}+\frac{y^2}{a^2}=1$.

### Figure F4 — Elements of an ellipse (bottom right)
- **Type:** curve-plot
- **Caption/Number:** (none printed)
- **Description:** A detailed Cartesian plot of a horizontal ellipse centered at origin O. It labels the vertices $A_1(a, 0)$ and $A_2(-a, 0)$ on the x-axis, and co-vertices $B_1(0, b)$ and $B_2(0, -b)$ on the y-axis. The foci are marked as $F_1(c, 0)$ and $F_2(-c, 0)$. Auxiliary vertical lines are drawn at $x = -a/e$ and $x = a/e$ representing the directrices. The axes are labeled $x$ and $y$.
- **Mathematical meaning:** Displays all key structural elements of a standard horizontal ellipse including semi-major axis $a$, semi-minor axis $b$, focal distance $c$, and directrix positions defined by eccentricity $e$.
