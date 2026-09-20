---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-6
chapter_folder: Chapter-06-Analytical-Geometry
chapter_number: 6
chapter_title: ANALYTICAL GEOMETRY
page_image: 15
page_printed: 174
section: 6.5.4 Homogeneous Quadratic Equations in two Variables
exercise: null
content_type: theory
has_figures: false
figures_count: 0
source_image: ../../../Raw/Mathematics/Unit-06-Analytical-Geometry/0015.jpg
converted_at: "2026-09-20"
converted_by: "agent-16j (glm-vision)"
notes: "Theorem 6.4 restarts equation numbering at (1) as printed. Eq (13) expansion prints without trailing = 0 - preserved verbatim. Key Facts box (3x3 determinant condition) rendered as blockquote per canon."
---

# Page 15 — Unit 06: Analytical Geometry

> 📄 Original scan: [0015.jpg](../../../Raw/Mathematics/Unit-06-Analytical-Geometry/0015.jpg) · printed page 174

Equation (11) is special joint equation and can be re-written as:
$$a_1a_2x^2 + a_1b_2xy + a_2b_1xy + b_1b_2y^2 = a_1a_2x^2 + (a_1b_2 + a_2b_1)xy + b_1b_2y^2$$
If we put $a_1a_2 = a$, $a_1b_2 + a_2b_1 = 2h$ and $b_1b_2 = b$, then we get:
$$ax^2 + 2hxy + by^2 = 0 \quad \ldots\ldots\ldots (12)$$
where $a, h$ and $b$ are not simultaneously zero.

Equation (12) represents a special pair of lines passing through origin and can be resolved back into two homogeneous linear equations. This equation is called general second-degree homogeneous equation.

Any point P(x, y) that satisfies $a_1x + b_1y = 0$ or $a_2x + b_2y = 0$ will also satisfy equation (12). For example, $6x^2 - 4xy + 8y^2 = 0$ is a homogeneous quadratic equation in two variables $x$ and $y$. Equations (9) and (10) can also be written as:

$y = m_1x$ and $y = m_2x$ where $m_1$ and $m_2$ are slopes of lines passing through origin.

Their joint equation is:
$$(y - m_1x)(y - m_2x) = 0 \implies y^2 - (m_1 + m_2)xy + m_1m_2x^2 \quad \ldots\ldots\ldots (13)$$
Equation (13) is another special type of second-degree homogeneous equation.

Comparing equations (12) and (13), we have:
$$\frac{m_1m_2}{a} = \frac{-(m_1+m_2)}{2h} = \frac{1}{b}. \quad \implies \quad m_1m_2 = \frac{a}{b} \text{ and } m_1 + m_2 = \frac{-2h}{b}$$

## 6.5.4 Homogeneous Quadratic Equations in two Variables

If we take $n = 2$ in equation (1), then we get:
$$f(kx, ky) = k^2f(x, y) \quad \ldots\ldots\ldots (14)$$
Equation (14) is called homogeneous quadratic equation in two variables. Consider:
$$f(x, y) = ax^2 + 2hxy + by^2 = 0 \ldots\ldots\ldots (15)$$
Replacing $x$ by $kx$ and $y$ by $ky$, we have:
$$f(kx, ky) = a(kx)^2 + 2h(kx)(ky) + b(ky)^2 = k^2(ax^2 + 2hxy + by^2) = k^2f(x, y) \quad \ldots\ldots\ldots (16)$$
From (16), it is clear that equation (15) is homogeneous quadratic equation in two variables.

> **Key Facts**
>
> The most general equation of second degree: $ax^2 + 2hxy + by^2 + 2gx + 2fy + c = 0$
> Represents a pair of lines if:
> $$\begin{vmatrix} a & h & g \\ h & b & f \\ g & f & c \end{vmatrix} = 0$$

### Theorem 6.4:

Every homogeneous second-degree equation:
$$ax^2 + 2hxy + by^2 = 0 \quad \ldots\ldots\ldots (1)$$
represents a pair of lines passing through the origin. The lines are:

(i) Real and distinct if $h^2 > ab$

(ii) Real and coincident if $h^2 = ab$

(iii) Imaginary if $h^2 < ab$
