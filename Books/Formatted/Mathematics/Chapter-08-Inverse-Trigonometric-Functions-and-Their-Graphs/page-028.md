---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-8
chapter_folder: Chapter-08-Inverse-Trigonometric-Functions-and-Their-Graphs
chapter_number: 8
chapter_title: INVERSE TRIGONOMETRIC FUNCTIONS AND THEIR GRAPHS
page_image: 28
page_printed: 257
section: 8.3.5 Inverse Secant Addition and Subtraction Formulas; 8.3.6 Inverse Cosecant Addition and Subtraction Formulas
exercise: null
content_type: theory
has_figures: true
figures_count: 1
source_image: ../../../Raw/Mathematics/Unit-08-Inverse-Trigonometric-Functions-and-Their-Graphs/0028.jpg
converted_at: "2026-09-20"
converted_by: "coordinator-w4b (glm-vision)"
notes: "BOOK MISPRINT preserved in 8.3.6: domain condition prints 'where 1 \u2264 x, y \u2264 \u22121' (impossible as printed; cf. 8.3.5 style 'x, y \u2265 1 or x, y \u2264 \u22121')."
---

# Page 28 — Unit 08: Inverse Trigonometric Functions and Their Graphs

> 📄 Original scan: [0028.jpg](../../../Raw/Mathematics/Unit-08-Inverse-Trigonometric-Functions-and-Their-Graphs/0028.jpg) · printed page 257

## 8.3.5 Inverse Secant Addition and Subtraction Formulas

(i) $\text{Sec}^{-1}(x) + \text{Sec}^{-1}(y) = \text{Cos}^{-1}\left(\frac{1-\sqrt{(x^2-1)(y^2-1)}}{xy}\right)$ where $x, y \geq 1$ or $x, y \leq -1$

(ii) $\text{Sec}^{-1}(x) - \text{Sec}^{-1}(y) = \text{Cos}^{-1}\left(\frac{1+\sqrt{(x^2-1)(y^2-1)}}{xy}\right)$ where $x, y \geq 1$ or $x, y \leq -1$

**Proof:**

**(i)** Let $\alpha = \text{Sec}^{-1}(x)$ and $\beta = \text{Sec}^{-1}(y)$ if and only if $\text{Sec } \alpha = x$ and $\text{Sec } \beta = y$

where $\alpha, \beta \in [0, \frac{\pi}{2}) \cup (\frac{\pi}{2}, \pi]$ and $x, y \in (-\infty, -1] \cup [1, +\infty)$

Using the cosine addition formula:
$\text{Cos}(\alpha + \beta) = \text{Cos } \alpha \text{ Cos } \beta - \text{Sin } \alpha \text{ Sin } \beta$
Applying arc function on both sides:
$\alpha + \beta = \text{Cos}^{-1}[\text{Cos } \alpha \text{ Cos } \beta - \text{Sin } \alpha \text{ Sin } \beta] \rightarrow (V)$

If $\text{Sec } \alpha > 0$ and $\text{Sec } \beta > 0 \Rightarrow \text{Cos } \alpha > 0$ and $\text{Cos } \beta > 0$ then $\alpha, \beta \in [0, \frac{\pi}{2})$.

$\Rightarrow \text{Sin } \alpha = \sqrt{1 - \text{Cos}^2 \alpha}$ ; $\text{Sin } \beta = \sqrt{1 - \text{Cos}^2 \beta}$

$\text{Sin } \alpha = \sqrt{1 - \frac{1}{x^2}}$ ; $\text{Sin } \beta = \sqrt{1 - \frac{1}{y^2}}$ (Using $\text{Cos } \alpha = \frac{1}{x}$ and $\text{Cos } \beta = \frac{1}{y}$)

Substituting values in equation $(V)$, we get:

$$
\begin{aligned}
\text{Sec}^{-1}(x) + \text{Sec}^{-1}(y) &= \text{Cos}^{-1} \left[ \left(\frac{1}{x}\right)\left(\frac{1}{y}\right) - \sqrt{1-\frac{1}{x^2}}\sqrt{1-\frac{1}{y^2}} \right] \\
&= \text{Cos}^{-1} \left[ \frac{1}{xy} - \sqrt{\frac{x^2-1}{x^2}}\sqrt{\frac{y^2-1}{y^2}} \right] = \text{Cos}^{-1} \left[ \frac{1}{xy} - \frac{\sqrt{x^2-1}\sqrt{y^2-1}}{xy} \right] \\
&= \text{Cos}^{-1} \left[ \frac{1-\sqrt{x^2-1}\sqrt{y^2-1}}{xy} \right] = \text{Cos}^{-1} \left[ \frac{1-\sqrt{(x^2-1)(y^2-1)}}{xy} \right]
\end{aligned}
$$

[Figure F1]

**(ii)** The proof is similar to subtraction formula.

**Example 14:** Show that: $\text{Sec}^{-1}(\sqrt{2}) - \text{Sec}^{-1}(1) = \frac{\pi}{4}$

**Solution:** L.H.S. $= \text{Sec}^{-1}(\sqrt{2}) - \text{Sec}^{-1}(1)$

$$
\begin{aligned}
&= \text{Cos}^{-1}\left(\frac{1+\sqrt{((\sqrt{2})^2-1)(1^2-1)}}{(\sqrt{2})(1)}\right) = \text{Cos}^{-1}\left(\frac{1+\sqrt{(2-1)(0)}}{\sqrt{2}}\right) \\
&= \text{Cos}^{-1}\left(\frac{1+0}{\sqrt{2}}\right) = \text{Cos}^{-1}\left(\frac{1}{\sqrt{2}}\right) = \frac{\pi}{4} = \text{R.H.S}
\end{aligned}
$$

> **Check Point**
> Show that:
> $\text{Sec}^{-1}(2) + \text{Sec}^{-1}\left(\frac{2}{\sqrt{3}}\right) = \frac{\pi}{2}$

## 8.3.6 Inverse Cosecant Addition and Subtraction Formulas

(i) $\text{Csc}^{-1}(x) + \text{Csc}^{-1}(y) = \text{Sin}^{-1}\left[\frac{\sqrt{y^2-1}+\sqrt{x^2-1}}{xy}\right]$ where $1 \leq x, y \leq -1$

(ii) $\text{Csc}^{-1}(x) - \text{Csc}^{-1}(y) = \text{Sin}^{-1}\left[\frac{\sqrt{y^2-1}-\sqrt{x^2-1}}{xy}\right]$ where $1 \leq x, y \leq -1$

## Figures on this page

### Figure F1 — Unit circle diagram (middle right)
- **Type:** geometric-diagram
- **Caption/Number:** (none printed)
- **Description:** A Cartesian coordinate system with a unit circle centered at the origin O. The horizontal axis is labeled with $\pi$ on the left and $0$ on the right. The vertical axis points upwards. The upper half of the circle is divided into two regions by the vertical axis: "Quad-II" (Quadrant II) on the left and "Quad-I" (Quadrant I) on the right. Two angles, $\alpha$ and $\beta$, are marked in Quadrant I between the positive x-axis and a radius vector.
- **Mathematical meaning:** Illustrates the principal value range for inverse secant functions where angles $\alpha$ and $\beta$ lie in the first quadrant ($[0, \frac{\pi}{2})$), corresponding to positive secant values ($x, y \geq 1$).
