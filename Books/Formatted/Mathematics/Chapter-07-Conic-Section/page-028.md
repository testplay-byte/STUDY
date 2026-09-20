---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-7
chapter_folder: Chapter-07-Conic-Section
chapter_number: 7
chapter_title: CONIC SECTION
page_image: 28
page_printed: 209
section: 7.11 Equations of Tangent and Normal to an Ellipse at a Given Point
exercise: null
content_type: mixed
has_figures: false
figures_count: 0
source_image: ../../../Raw/Mathematics/Unit-07-Conic-Section/0028.jpg
converted_at: "2026-09-20"
converted_by: "agent-16l (glm-vision)"
notes: "Page opens mid-solution (tail of Example 21: discriminant check that the line is tangent) and ends mid-derivation (aligned tangent-equation block, final line b^2(x_1-h)(x-h) + a^2(y_1-k)(y-k) = b^2(x_1-h)^2 + a^2(y_1-k)^2). Equation number (1) set with blank space, no dot leaders, as printed. 'w. r. t.' spacing preserved."
---

# Page 28 — Unit 07: Conic Section

> 📄 Original scan: [0028.jpg](../../../Raw/Mathematics/Unit-07-Conic-Section/0028.jpg) · printed page 209

From equation (1) $2y = \sqrt{3}x + 8 \Rightarrow y = \frac{\sqrt{3}x+8}{2}$

Put in equation (2)

$$\begin{aligned}
& x^2 + 4\left(\frac{\sqrt{3}x + 8}{2}\right)^2 = 16 \\
\Rightarrow & x^2 + 4\left(\frac{3x^2 + 16\sqrt{3}x + 64}{4}\right) = 16 \\
\Rightarrow & x^2 + 3x^2 + 16\sqrt{3}x + 64 = 16 \\
\Rightarrow & 4x^2 + 16\sqrt{3}x + 48 = 0
\end{aligned}$$

Dividing both sides by 4

$\Rightarrow x^2 + 4\sqrt{3}x + 12 = 0$

Taking its discriminant

$$\begin{aligned}
& \Rightarrow Disc. = (4\sqrt{3})^2 - 4(1)(12) = 48 - 48 \\
& \Rightarrow Disc. = 0 \text{ this shows that line is tangent to the ellipse.}
\end{aligned}$$

## 7.11 Equations of Tangent and Normal to an Ellipse at a Given Point

Consider the equation of ellipse

$$\begin{aligned}
& \frac{(x-h)^2}{a^2} + \frac{(y-k)^2}{b^2} = 1 \\
\Rightarrow & b^2(x-h)^2 + a^2(y-k)^2 = a^2b^2 \qquad (1)
\end{aligned}$$

Let $P(x_1, y_1)$ be any point on this ellipse. Differentiating equation (1) w. r. t. $x$

$$\begin{aligned}
& \Rightarrow 2b^2(x-h) + 2a^2(y-k)\frac{dy}{dx} = 0 \\
& \Rightarrow \frac{dy}{dx} = -\frac{b^2(x-h)}{a^2(y-k)}
\end{aligned}$$

At point $P(x_1, y_1)$

$$\Rightarrow \frac{dy}{dx} = -\frac{b^2(x_1-h)}{a^2(y_1-k)}$$

is the slope of the tangent line at point $P(x_1, y_1)$. Thus, equation of tangent line at this point $P$ is

$$\begin{aligned}
y - y_1 &= -\frac{b^2(x_1-h)}{a^2(y_1-k)}(x-x_1) \\
\Rightarrow & a^2(y_1-k)(y-y_1) = -b^2(x_1-h)(x-x_1) \\
\Rightarrow & b^2(x_1-h)(x-h+h-x_1) + a^2(y_1-k)(y-k+k-y_1) = 0 \\
\Rightarrow & b^2(x_1-h)[(x-h)-(x_1-h)] + a^2(y_1-k)[(y-k)-(y_1-k)] = 0 \\
\Rightarrow & b^2(x_1-h)(x-h) - b^2(x_1-h)^2 + a^2(y_1-k)(y-k) - a^2(y_1-k)^2 = 0 \\
\Rightarrow & b^2(x_1-h)(x-h) + a^2(y_1-k)(y-k) = b^2(x_1-h)^2 + a^2(y_1-k)^2
\end{aligned}$$
