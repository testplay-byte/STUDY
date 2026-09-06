---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-4
chapter_folder: Chapter-04-Differential-Equations
chapter_number: 4
chapter_title: DIFFERENTIAL EQUATIONS
page_image: 15
page_printed: 134
section: "4.6.2 Homogeneous Differential Equations"
exercise: null
content_type: mixed
has_figures: false
figures_count: 0
source_image: ../../../Raw/Mathematics/Unit-04-Differential-Equations/0015.jpg
converted_at: "2026-09-06"
converted_by: "agent-13g (glm-vision)"
notes: "⚠️ RIGHT-EDGE CROP on this scan. Reconstructions: Key-Facts box title reads 'Key' + sliver of the next capital in the scan — 'Facts' reconstructed from the book's standard box title (Key Facts). Bullet 1 line 1 ends 'whole procedur' (partial 'r' glyph) → 'procedure' reconstructed from context. Bullet 1 line 2 ends '…the equation (2) as' at the cut edge (no partial glyph after) and the next printed line is 'formula.' — transcribed as 'as formula.' (a word shaved exactly at the edge cannot be ruled out). Footer publisher name cut at 'National Book F…' (furniture). Page-number digit 134 fully printed. Example 13 (ii)-(iii) continues from p.133 at top. Book prints derivation chain with P and Q although the definition above uses M and N — as printed. 'In particular, if choose y = ux' preserved verbatim (typo). No whole words lost elsewhere; no figures."
---

# Page 15 — Unit 04: Differential Equations

> 📄 Original scan: [0015.jpg](../../../Raw/Mathematics/Unit-04-Differential-Equations/0015.jpg) · printed page 134

(ii) $f(x,y) = x^2 + y^2 + 2$

$f(tx, ty) = (tx)^2 + (ty)^2 + 2 = t^2x^2 + t^2y^2 + 2 \neq t^2 f(x,y)$

$\therefore f(x,y)$ is not homogeneous function.

(iii) $f(x,y) = \frac{x}{2y} + 4$

$f(tx, ty) = \frac{tx}{2ty} + 4 = \frac{x}{2y} + 4 = t^0 f(x,y)$

$\therefore f(x,y)$ is homogeneous function of degree $0$.

## 4.6.2 Homogeneous Differential Equations

A differential equation of the form:

$$M(x,y)dx + N(x,y)dy = 0 \tag{1}$$

is said to be homogeneous if both $M$ and $N$ are homogeneous functions of the same degree.

In other words, differential equation (1) is homogeneous if

$$M(tx, ty) = t^n M(x,y) \quad \text{and} \quad N(tx, ty)= t^n N(x,y)$$

have the same degree $n$. The differential equation can be reduced to separable variables by substituting $y = ux$ or $x = vy$, where $u$ and $v$ are new dependent variables. In particular, if choose $y = ux$, then:

$$\frac{dy}{dx} = u + x\frac{du}{dx} \quad \text{or} \quad dy = udx + xdu$$

Hence the differential equation becomes:

$$P(x, ux)dx + Q(x, ux)[udx + xdu] = 0$$

$$\Rightarrow \quad x^n P(1,u)dx + x^n Q(1,u)[udx + xdu] = 0$$

$$\Rightarrow \quad [P(1,u)dx + uQ(1,u)]dx + xQ(1,u)du = 0$$

$$\Rightarrow \quad \frac{dx}{x} + \frac{Q(1,u)du}{P(1,u)dx+uQ(1,u)} = 0 \tag{2}$$

> **Key Facts**
>
> * To solve homogeneous differential equations, we have to write out whole procedure for each problem. Therefore, it is not recommended to follow the equation (2) as formula.
> * The substitution $x = vy$ also leads to a separable differential equation.
