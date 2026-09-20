---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-8
chapter_folder: Chapter-08-Inverse-Trigonometric-Functions-and-Their-Graphs
chapter_number: 8
chapter_title: INVERSE TRIGONOMETRIC FUNCTIONS AND THEIR GRAPHS
page_image: 26
page_printed: 255
section: 8.3.3 Inverse Tangent Addition and Subtraction Formulas
exercise: null
content_type: theory
has_figures: true
figures_count: 2
source_image: ../../../Raw/Mathematics/Unit-08-Inverse-Trigonometric-Functions-and-Their-Graphs/0026.jpg
converted_at: "2026-09-20"
converted_by: "coordinator-w4b (glm-vision)"
notes: "BOOK SLOPPINESS preserved: Proof line for \\beta prints '...and x \u2208 (-\u221e, +\u221e)' (x should be y)."
---

# Page 26 — Unit 08: Inverse Trigonometric Functions and Their Graphs

> 📄 Original scan: [0026.jpg](../../../Raw/Mathematics/Unit-08-Inverse-Trigonometric-Functions-and-Their-Graphs/0026.jpg) · printed page 255

Applying arccosine on both sides:
$$\alpha + \beta = \text{Cos}^{-1}[\text{Cos } \alpha \text{ Cos } \beta - \text{Sin } \alpha \text{ Sin } \beta] \longrightarrow (\text{II})$$

If $\text{Cos } \alpha > 0$ and $\text{Cos } \beta > 0$ then $\alpha, \beta \in [0, \frac{\pi}{2}]$ i.e., Quadrant I.

[Figure F1]

$$\Rightarrow \text{Sin } \alpha = \sqrt{1 - \text{Cos}^2 \alpha} \quad ; \quad \text{Sin } \beta = \sqrt{1 - \text{Cos}^2 \beta}$$

$$\text{Sin } \alpha = \sqrt{1 - x^2} \qquad ; \quad \text{Sin } \beta = \sqrt{1 - y^2} \quad (\text{Using } x = \text{Sin } \alpha \text{ and } y = \text{Sin } \beta)$$

Substituting values in equation (II), we get:
$$\text{Cos}^{-1}(x) + \text{Cos}^{-1}(y) = \text{Cos}^{-1}[xy - \sqrt{1 - x^2}\sqrt{1 - y^2}]$$
$$\text{Cos}^{-1}(x) + \text{Cos}^{-1}(y) = \text{Cos}^{-1}[xy - \sqrt{(1 - x^2)(1 - y^2)}]$$

**(ii)** The proof is similar to subtraction formula.

**Example 11:** Show that: $\text{Cos}^{-1}\left(-\frac{1}{2}\right) - \text{Cos}^{-1}\left(-\frac{\sqrt{3}}{2}\right) = \frac{\pi}{6}$

**Solution:** L.H.S $= \text{Cos}^{-1}\left(-\frac{1}{2}\right) - \text{Cos}^{-1}\left(-\frac{\sqrt{3}}{2}\right)$

Applying the inverse cosine subtraction formula

$$\begin{aligned}
\text{L.H.S} &= \text{Cos}^{-1}\left[\left(-\frac{1}{2}\right)\left(-\frac{\sqrt{3}}{2}\right) + \sqrt{\left[1 - \left(-\frac{1}{2}\right)^2\right]\left[1 - \left(-\frac{\sqrt{3}}{2}\right)^2\right]}\right] \\
&= \text{Cos}^{-1}\left[\left(\frac{\sqrt{3}}{4}\right) + \sqrt{\left(1 - \frac{1}{4}\right)\left(1 - \frac{3}{4}\right)}\right] = \text{Cos}^{-1}\left[\frac{\sqrt{3}}{4} + \sqrt{\left(\frac{3}{4}\right)\left(\frac{1}{4}\right)}\right] \\
&= \text{Cos}^{-1}\left[\frac{\sqrt{3}}{4} + \sqrt{\frac{3}{16}}\right] = \text{Cos}^{-1}\left[\frac{\sqrt{3}}{4} + \frac{\sqrt{3}}{4}\right] = \text{Cos}^{-1}\left[\frac{2\sqrt{3}}{4}\right] \\
&= \text{Cos}^{-1}\left[\frac{\sqrt{3}}{2}\right] \\
&= \frac{\pi}{6} = \text{R.H.S}
\end{aligned}$$

> **Check Point**
> Show that: $\text{Cos}^{-1}\left(\frac{1}{\sqrt{2}}\right) + \text{Cos}^{-1}\left(-\frac{\sqrt{3}}{2}\right) = \frac{11\pi}{12}$

## 8.3.3 Inverse Tangent Addition and Subtraction Formulas

(i) $\text{Tan}^{-1}(x) + \text{Tan}^{-1}(y) = \text{Tan}^{-1}\left(\frac{x+y}{1-xy}\right)$, where $xy < 1$

(ii) $\text{Tan}^{-1}(x) - \text{Tan}^{-1}(y) = \text{Tan}^{-1}\left(\frac{x-y}{1+xy}\right)$, where $xy < 1$

**Proof:**

(i) Let $\alpha = \text{Tan}^{-1}(x)$ if and only if $\text{Tan } \alpha = x$, where $\alpha \in \left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$ and $x \in (-\infty, +\infty)$

Let $\beta = \text{Tan}^{-1}(y)$ if and only if $\text{Tan } \beta = y$, where $\beta \in \left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$ and $x \in (-\infty, +\infty)$

Using the tangent addition formula:

$$\text{Tan}(\alpha + \beta) = \frac{\text{Tan } \alpha + \text{Tan } \beta}{1 - \text{Tan } \alpha \text{Tan } \beta}$$

Applying arctangent on both sides:

$$\alpha + \beta = \text{Tan}^{-1}\left(\frac{\text{Tan } \alpha + \text{Tan } \beta}{1 - \text{Tan } \alpha \text{Tan } \beta}\right) \longrightarrow (\text{III})$$

[Figure F2]

## Figures on this page

### Figure F1 — Angle diagram (top right)
- **Type:** geometric-diagram
- **Caption/Number:** (none printed)
- **Description:** A coordinate system showing an angle $\alpha + \beta$ in standard position. The angle is located in Quadrant I and II, with its vertex at the origin. The initial side lies along the positive x-axis, and the terminal side extends into Quadrant II. The arc representing the angle is labeled $\alpha + \beta$. The axes are labeled with $\pi$, $0$, Quad-I, and Quad-II.
- **Mathematical meaning:** Illustrates that when $\text{Cos } \alpha > 0$ and $\text{Cos } \beta > 0$, the sum of angles $\alpha + \beta$ falls within the range suitable for the cosine addition formula derivation.

### Figure F2 — Angle diagram for tangent addition (bottom right)
- **Type:** geometric-diagram
- **Caption/Number:** (none printed)
- **Description:** A coordinate system illustrating angles $\alpha$ and $\beta$. It shows a vertical axis labeled with $\frac{\pi}{2}$ at the top and $-\frac{\pi}{2}$ at the bottom. An arc represents the angle from the positive x-axis into Quadrant I, labeled with $\alpha, \beta$. The quadrants are marked as Quad-I (top right) and Quad-IV (bottom right). The origin is marked as $0$.
- **Mathematical meaning:** Demonstrates the principal value domain for the inverse tangent function, where $\alpha, \beta \in (-\frac{\pi}{2}, \frac{\pi}{2})$, which is essential for proving the tangent addition formula.
