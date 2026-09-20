---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-6
chapter_folder: Chapter-06-Analytical-Geometry
chapter_number: 6
chapter_title: ANALYTICAL GEOMETRY
page_image: 16
page_printed: 175
section: 6.5.5 Angle between Lines Represented by ax^2 + 2hxy + by^2 = 0
exercise: null
content_type: theory
has_figures: false
figures_count: 0
source_image: ../../../Raw/Mathematics/Unit-06-Analytical-Geometry/0016.jpg
converted_at: "2026-09-20"
converted_by: "agent-16j (glm-vision)"
notes: ""
---

# Page 16 — Unit 06: Analytical Geometry

> 📄 Original scan: [0016.jpg](../../../Raw/Mathematics/Unit-06-Analytical-Geometry/0016.jpg) · printed page 175

**Proof:** Multiplying equation (1) by $a$, we have:

$$\begin{aligned}
a^2 x^2 + 2ahxy + aby^2 &= 0 \\
a^2 x^2 + 2ahxy + h^2 y^2 - h^2 y^2 + aby^2 &= 0 \\
(ax + hy)^2 - y^2(h^2 - ab) &= 0 \\
(ax + hy)^2 - (y\sqrt{h^2 - ab})^2 &= 0 \\
(ax + hy + y\sqrt{h^2 - ab})(ax + hy - y\sqrt{h^2 - ab}) &= 0 \quad \ldots (2)
\end{aligned}$$

Which shows that equation (1) represents a pair of lines through origin. From equation (2):

$$\begin{aligned}
ax + hy + y\sqrt{h^2 - ab} = 0 \quad \text{and} \quad ax + hy - y\sqrt{h^2 - ab} = 0 \\
\text{or} \quad ax + y(h + \sqrt{h^2 - ab}) = 0 \quad \ldots (3) \\
\quad ax + y(h - \sqrt{h^2 - ab}) = 0 \quad \ldots (4)
\end{aligned}$$

From Equations (3) and (4), it is clear that the lines are:

(i) Real and distinct if $h^2 > ab$ \quad (ii) Real and coincident if $h^2 = ab$

(iii) Imaginary if $h^2 < ab$

**Note:** It is interesting to note that even the lines are imaginary, they pass through the real point $(0, 0)$ as this point lies on the joint equation.

**Example 5:**

Find the straight lines represented by $x^2 - 7xy + 12y^2 = 0$

**Solution:**

$$\begin{aligned}
x^2 - 7xy + 12y^2 = 0 &\implies x^2 - 3xy - 4xy + 12y^2 = 0 \\
\implies x(x - 3y) - 4y(x - 3y) = 0 &\implies (x - 3y)(x - 4y) = 0 \\
\implies x - 3y = 0 \quad \text{or} \quad x - 4y &= 0
\end{aligned}$$

Which are required straight lines.

## 6.5.5 Angle between Lines Represented by $ax^2 + 2hxy + by^2 = 0$

We have already proved that $ax^2 + 2hxy + by^2 = 0$ represents two straight lines:

$$\begin{aligned}
ax + y(h + \sqrt{h^2 - ab}) &= 0 \quad \ldots (1) \\
ax + y(h - \sqrt{h^2 - ab}) &= 0 \quad \ldots (2)
\end{aligned}$$

Slopes of (1) and (2) respectively are:

$$\begin{aligned}
m_1 = \frac{-(h + \sqrt{h^2 - ab})}{b} \quad \text{and} \quad m_2 &= \frac{-(h - \sqrt{h^2 - ab})}{b} \\
\implies m_1 + m_2 = \frac{-2h}{b} \quad \text{and} \quad m_1m_2 &= \frac{a}{b} \quad \text{and}
\end{aligned}$$

If $\theta$ is the measure of acute angle between (1) and (2), then:

$$\tan \theta = \frac{m_1 - m_2}{1 + m_1m_2} = \frac{\sqrt{(m_1 + m_2)^2 - 4m_1m_2}}{1 + m_1m_2} = \frac{\sqrt{\frac{4h^2}{b^2} - \frac{4a}{b}}}{1 + \frac{a}{b}} = \frac{2\sqrt{h^2 - ab}}{a + b} \quad \ldots (3)$$
