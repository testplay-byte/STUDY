---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-7
chapter_folder: Chapter-07-Conic-Section
chapter_number: 7
chapter_title: CONIC SECTION
page_image: 17
page_printed: 198
section: 7.7.6 General equation of Parabola
exercise: null
content_type: mixed
has_figures: false
figures_count: 0
source_image: ../../../Raw/Mathematics/Unit-07-Conic-Section/0017.jpg
converted_at: "2026-09-20"
converted_by: "agent-16h (glm-vision)"
notes: "Page opens mid-solution (tail of the previous example's x-intercept quadratic formula computation) and ends mid-Example 14 solution (last line is the |PF|=|PM| distance equation). In Example 13 the book prints The distance between F and V is “a” with the letter a in quotation marks — preserved verbatim."
---

# Page 17 — Unit 07: Conic Section

> 📄 Original scan: [0017.jpg](../../../Raw/Mathematics/Unit-07-Conic-Section/0017.jpg) · printed page 198

$$\Rightarrow x = \frac{-(-3) \pm \sqrt{(-3)^2 - 4(1)(7)}}{2(1)} = \frac{3 \pm \sqrt{9 - 28}}{2} = \frac{3 \pm i\sqrt{19}}{2}$$

Which are complex numbers thus parabola has no $x$-intercept. For $y$-intercept put $x = 0$ in equation $y = x^2 - 3x + 7$. We have:

$$y = 0 - 0 + 7 \Rightarrow y = 7$$

Thus $(0, 7)$ is the $y$-intercept of parabola.

## 7.7.6 General equation of Parabola

Prove that the equation $y = ax^2 + bx + c$ where $a, b, c$ are real numbers with $a \neq 0$ represents a parabola.

**Proof:** Given equation is

$$y = ax^2 + bx + c \Rightarrow ax^2 + bx = y - c$$

Since $a \neq 0$; dividing both sides by $a$.

$$x^2 + \frac{b}{a}x = \frac{1}{a}(y - c)$$

Adding $\frac{b^2}{4a^2}$ to both sides, we have:

$$\begin{aligned}
x^2 + \frac{b}{a}x + \frac{b^2}{4a^2} &= \frac{1}{a}(y - c) + \frac{b^2}{4a^2} \\
\Rightarrow \left(x + \frac{b}{2a}\right)^2 &= \frac{1}{a}\left[y - c + \frac{b^2}{4a}\right] = \frac{1}{a}\left[y + \frac{b^2 - 4ac}{4a}\right] = 4\left(\frac{1}{4a}\right)\left[y + \frac{b^2 - 4ac}{4a}\right] \\
\Rightarrow \left(x - \frac{-b}{2a}\right)^2 &= 4\left(\frac{1}{4a}\right)\left[y - \frac{-b^2 + 4ac}{4a}\right] \quad (i)
\end{aligned}$$

Which is of the form $(x - h)^2 = 4p(y - k)$ where $h = -\frac{b}{2a}$; $k = -\frac{b^2 - 4ac}{4a}$ and $p = \frac{1}{4a}$.

(i) is the equation of parabola with vertex $\left(-\frac{b}{2a}, -\frac{b^2 - 4ac}{4a}\right)$ and its branches open upwards or downwards according as $p > 0$ or $p < 0$.

**Example 13:** Find elements of parabola with vertex at (2, 3) and focus at (7, 3).

**Solution:** Given that vertex is V(2, 3) and focus is F(7, 3). Therefore, $h = 2$ and $k = 3$. Observe that $y$-coordinate of both V and F is same, thus $y = 3$ is the axis of parabola. Since $x$-coordinate of V is less than $x$-coordinate of F. Thus branches of parabola open on the right side.
The distance between F and V is "$a$". i.e.,

$$a = |\text{FV}| = \sqrt{(7 - 2)^2 + (3 - 3)^2} = \sqrt{25 + 0} = 5$$

So, the equation of parabola is:

$$\begin{aligned}
(y - k)^2 &= 4a(x - h) \\
\Rightarrow (y - 3)^2 &= 4(5)(x - 2) \Rightarrow (y - 3)^2 = 20(x - 2)
\end{aligned}$$

Which is the required equation of parabola.

**Example 14:** Find elements of parabola with focus at $(3, -1)$ and its directrix is $3x - 4y + 1 = 0$.

**Solution:** Given that focus of the parabola is at $\text{F}(3, -1)$ and directrix is $3x - 4y + 1 = 0$. If $\text{P}(x, y)$ is any point on the parabola then by definition of parabola.
$|\text{PF}| = |\text{PM}|$; where $|\text{PM}|$ is the distance of P from directrix. Therefore:

$$\sqrt{(x - 3)^2 + (y + 1)^2} = \frac{3x - 4y + 1}{\sqrt{(3)^2 + (-4)^2}}$$
