---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-7
chapter_folder: Chapter-07-Conic-Section
chapter_number: 7
chapter_title: CONIC SECTION
page_image: 19
page_printed: 200
section: 7.8 Equation of Tangent and Normal of Parabola; 7.8.1 Condition for a Line to be Tangent to a Parabola
exercise: null
content_type: mixed
has_figures: false
figures_count: 0
source_image: ../../../Raw/Mathematics/Unit-07-Conic-Section/0019.jpg
converted_at: "2026-09-20"
converted_by: "agent-16h (glm-vision)"
notes: "Book misprint preserved verbatim: Example 16 solution prints 'Here h = 4; k = 3 and a = 4' although (y-3)^2 = 16(x-1) gives h = 1 (zoom-verified on scan). Page ends mid-Example 16 solution (final line is the tangent-formula substitution). 'i.e.;' and 'i.e., Both' punctuation as printed."
---

# Page 19 — Unit 07: Conic Section

> 📄 Original scan: [0019.jpg](../../../Raw/Mathematics/Unit-07-Conic-Section/0019.jpg) · printed page 200

## 7.8 Equation of Tangent and Normal of Parabola

### 7.8.1 Condition for a Line to be Tangent to a Parabola

$$\text{Consider a parabola } (y - k)^2 = 4a(x - h) \quad \ldots\ldots\ldots (1)$$

$$\text{and a line } y = mx + c \quad \ldots\ldots\ldots (2)$$

On solving these equations, we will get the points of intersections of the line and the parabola.

Using equation (2) in equation (1), we have:

$$\begin{aligned}
[(mx + c) - k]^2 &= 4a(x - h) \\
\Rightarrow [mx + (c - k)]^2 &= 4a(x - h) \\
\Rightarrow m^2x^2 + 2m(c - k)x + (c - k)^2 &= 4ax - 4ah \\
\Rightarrow m^2x^2 + \{2m(c - k)x - 4ax\} + (c - k)^2 + 4ah &= 0 \\
\Rightarrow m^2x^2 + \{2m(c - k) - 4a\}x + (c - k)^2 + 4ah &= 0
\end{aligned}$$

On solving this equation, we will get at most two values of $x$. But for the line to be tangent to the parabola it must intersect only at a point. i.e., Both values of $x$ should be same, thus discriminant of the above quadratic equation must be zero.

$$\begin{aligned}
& \{2m(c - k) - 4a\}^2 - 4m^2\{(c - k)^2 + 4ah\} = 0 \\
\Rightarrow & 4m^2(c - k)^2 - 16am(c - k) + 16a^2 - 4m^2(c - k)^2 - 16ahm^2 = 0 \\
\Rightarrow & -16am(c - k) + 16a^2 - 16ahm^2 = 0 \\
\Rightarrow & -16a[m(c - k) - a + hm^2] = 0 \quad \Rightarrow \quad m(c - k) - a + hm^2 = 0 \\
\Rightarrow & m(c - k) = a - m^2h \quad \Rightarrow \quad c - k = \frac{a - m^2h}{m} \\
\Rightarrow & c = \frac{a - m^2h}{m} + k = \frac{a - m^2h + mk}{m}
\end{aligned}$$

Putting this value of $c$ in equation (2), we get:

$$y = mx + \frac{a - m^2h + mk}{m} = mx - \frac{m^2h - mk - a}{m}$$

Which is the equation of tangent to the parabola. Here $m$ is the slope of the tangent line.

**Particular Case:**

When the vertex of the parabola is at $(0, 0)$ i.e.; $h = 0$ and $k = 0$ then equation of the tangent line is:

$$y = mx - \frac{m^2(0) - m(0) - a}{m} \quad \Rightarrow \quad y = mx - \frac{-a}{m} \quad \Rightarrow \quad y = mx + \frac{a}{m}$$

**Example 16:** Find the equation of the tangent to the parabola $y^2 - 6y - 16x + 25 = 0$ with the slope $1/2$.

**Solution:** Equation of parabola is:

$$\begin{aligned}
& y^2 - 6y - 16x + 25 = 0 \\
\Rightarrow & y^2 - 6y = 16x - 25 \Rightarrow y^2 - 6y + 9 = 16x - 25 + 9 \\
\Rightarrow & (y - 3)^2 = 16x - 16 = 16(x - 1) \\
\Rightarrow & (y - 3)^2 = 4(4)(x - 1)
\end{aligned}$$

Which is of the form $(y - k)^2 = 4a(x - h)$

Here $h = 4$; $k = 3$ and $a = 4$ and given that slope is $m = \frac{1}{2}$, therefore equation of tangent to the parabola is:

$$y = mx - \frac{m^2h - mk - a}{m}$$
