---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-7
chapter_folder: Chapter-07-Conic-Section
chapter_number: 7
chapter_title: CONIC SECTION
page_image: 39
page_printed: 220
section: 7.13 Equation of Tangent and Normal to a Hyperbola
exercise: null
content_type: theory
has_figures: false
figures_count: 0
source_image: ../../../Raw/Mathematics/Unit-07-Conic-Section/0039.jpg
converted_at: "2026-09-20"
converted_by: "coordinator-w4a (glm-vision)"
notes: "BOOK TYPO preserved: 'we wil get' (missing l). Pen-slash cancellations on b^4 (both occurrences), m^4 of the a^4m^4(c-k)^2 term and m^2 of the last a^4m^2(c-k)^2 term rendered with \\not{} (zoom-verified). Final tangent-slope result printed inside a bordered box -> blockquote."
---

# Page 39 — Unit 07: Conic Section

> 📄 Original scan: [0039.jpg](../../../Raw/Mathematics/Unit-07-Conic-Section/0039.jpg) · printed page 220

## 7.13 Equation of Tangent and Normal to a Hyperbola

Consider the hyperbola $\frac{(x-h)^2}{a^2} - \frac{(y-k)^2}{b^2} = 1$ ...........(1)

and the line $y = mx + c$ ...........(2)

on solving Eqs (1) and (2) simultaneously we wil get the points of intersections of the line and hyperbola; for this use Eq (2) in (1)

$$\begin{aligned}
&\frac{(x-h)^2}{a^2} - \frac{(mx+c-k)^2}{b^2} = 1 \\
\Rightarrow \quad &b^2(x-h)^2 - a^2(mx + (c-k))^2 = a^2b^2 \\
\Rightarrow \quad &b^2x^2 - 2b^2hx + b^2h^2 - a^2m^2x^2 - 2a^2m(c-k)x - a^2(c-k)^2 - a^2b^2 = 0 \\
\Rightarrow \quad &(b^2 - a^2m^2)x^2 - 2(b^2h + a^2m(c-k))x + (b^2h^2 - a^2(c-k)^2 - a^2b^2) = 0
\end{aligned}$$

which is quadratic equation in ‘$x$’.

If discriminant of this equation is greater than zero or positive the equation will have two distinct values of $x$ so line will cut the hyperbola at two distinct points. If discriminant of this equation is negative then the roots of the equation will be imaginary i.e. there is no point of intersection and if value of discriminant is zero then equation has repeated roots i.e. there is only one point of intersection. In this case the line will be tangent to the hyperbola, so condition for the line to be tangent to hyperbola is

$$\begin{aligned}
Disc &= 0 \\
\Rightarrow \quad &\left(2(b^2h + a^2m(c-k))\right)^2 - 4(b^2 - a^2m^2)(b^2h^2 - a^2b^2 - a^2(c-k)^2) = 0 \\
\Rightarrow \quad &4(b^2h + a^2m(c-k))^2 - 4(b^2 - a^2m^2)(b^2h^2 - a^2b^2 - a^2(c-k)^2) = 0
\end{aligned}$$

Dividing both sides by ‘4’

$$\begin{aligned}
&(b^2h + a^2m(c-k))^2 - (b^2 - a^2m^2)(b^2h^2 - a^2b^2 - a^2(c-k)^2) = 0 \\
\Rightarrow \quad &\not{b}^4h^2 + a^4\not{m}^4(c-k)^2 + 2a^2b^2mh(c-k)^2 - \not{b}^4h^2 + a^2b^4 + a^2b^2(c-k)^2 + a^2b^2m^2h^2 \\
&\qquad - a^4b^2m^2 - a^4\not{m}^2(c-k)^2 = 0 \\
\Rightarrow \quad &a^2b^2[2mh(c-k)^2 + b^2 + (c-k)^2 + m^2h^2 - a^2m^2] = 0
\end{aligned}$$

Dividing both sides by $a^2b^2$

$$\Rightarrow (2mh + 1)(c - k)^2 + b^2 + m^2h^2 - a^2m^2 = 0$$

is condition for tangency.

**In particular** when centre of the hyperbola is at $(0,0)$; then $h = 0, k = 0$;

In this case condition of tangency is

$$\begin{aligned}
&(2m(0) + 1)(c - 0)^2 + b^2 + m^2(0)^2 - a^2m^2 = 0 \\
&c^2 + b^2 - a^2m^2 = 0 \\
&c^2 = a^2m^2 - b^2
\end{aligned}$$

from here we have $c = \pm\sqrt{a^2m^2 - b^2}$ provided that $a^2m^2 - b^2 \geq 0$.

Put in $y = mx + c$

> $$y = mx \pm \sqrt{a^2m^2 - b^2}$$

are the equations of the tangents to the hyperbola with slope $m$.
