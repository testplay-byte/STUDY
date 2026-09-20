---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-8
chapter_folder: Chapter-08-Inverse-Trigonometric-Functions-and-Their-Graphs
chapter_number: 8
chapter_title: INVERSE TRIGONOMETRIC FUNCTIONS AND THEIR GRAPHS
page_image: 29
page_printed: 258
section: null
exercise: null
content_type: worked-examples
has_figures: true
figures_count: 1
source_image: ../../../Raw/Mathematics/Unit-08-Inverse-Trigonometric-Functions-and-Their-Graphs/0029.jpg
converted_at: "2026-09-20"
converted_by: "coordinator-w4b (glm-vision)"
notes: "BOOK PRINT ARTIFACTS preserved: chain line 1 begins '.Sin\u207b\u00b9' (stray period before Sin); the book RESTATES the LHS 'Csc\u207b\u00b9(x) + Csc\u207b\u00b9(y) =' on the second chain line (reproduced)."
---

# Page 29 — Unit 08: Inverse Trigonometric Functions and Their Graphs

> 📄 Original scan: [0029.jpg](../../../Raw/Mathematics/Unit-08-Inverse-Trigonometric-Functions-and-Their-Graphs/0029.jpg) · printed page 258

**Proof:**

(i) Let $\alpha = \text{Csc}^{-1}(x)$ and $\beta = \text{Csc}^{-1}(y)$ if and only if $\text{Csc } \alpha = x$ and $\text{Csc } \beta = y$

where $\alpha, \beta \in \left[-\frac{\pi}{2}, 0\right) \cup \left(0, \frac{\pi}{2}\right]$ and $x, y \in (-\infty, -1] \cup [1, +\infty)$

Using the sine addition formula

$$\text{Sin}(\alpha + \beta) = \text{Sin } \alpha \text{ Cos } \beta + \text{Cos } \alpha \text{ Sin } \beta$$

Applying arc function on both sides

$$\alpha + \beta = \text{Sin}^{-1}[\text{Sin } \alpha \text{ Cos } \beta + \text{Cos } \alpha \text{ Sin } \beta] \quad \longrightarrow \quad (\text{VI})$$

If $\text{Csc } \alpha > 0$ and $\text{Csc } \beta > 0 \Rightarrow \text{ Sin } \alpha > 0$ and $\text{ Sin } \beta > 0$

then $\alpha, \beta \in [0, \frac{\pi}{2})$ i.e., Quadrant I.

[Figure F1]

$$\Rightarrow \text{Cos } \alpha = \sqrt{1 - \text{Sin}^2 \alpha} \quad ; \quad \text{Cos } \beta = \sqrt{1 - \text{Sin}^2 \beta}$$

$$\text{Cos } \alpha = \sqrt{1 - \frac{1}{x^2}} \qquad ; \qquad \text{Cos } \beta = \sqrt{1 - \frac{1}{y^2}} \quad (\text{Using Sin } \alpha = \frac{1}{x} \text{ and Sin } \beta = \frac{1}{y})$$

Substituting values in equation (VI), we have:

$$\begin{aligned}
\text{Csc}^{-1}(x) + \text{Csc}^{-1}(y) &= \text{.Sin}^{-1} \left[ \left(\frac{1}{x}\right) \sqrt{1 - \frac{1}{y^2}} + \sqrt{1 - \frac{1}{x^2}} \left(\frac{1}{y}\right) \right] \\
\text{Csc}^{-1}(x) + \text{Csc}^{-1}(y) &= \text{Sin}^{-1} \left[ \frac{1}{x} \sqrt{\frac{y^2-1}{y^2}} + \frac{1}{y} \sqrt{\frac{x^2-1}{x^2}} \right] \\
&= \text{Sin}^{-1} \left[ \frac{\sqrt{y^2-1}}{xy} + \frac{\sqrt{x^2-1}}{xy} \right] = \text{Sin}^{-1} \left[ \frac{\sqrt{y^2-1}+\sqrt{x^2-1}}{xy} \right]
\end{aligned}$$

(ii) The proof is similar to subtraction formula.

**Example 15:**

Show that: $\text{Csc}^{-1}\left(\frac{2}{\sqrt{3}}\right) + \text{Csc}^{-1}(-2) = -\frac{\pi}{2}$

**Solution:** L.H.S. $= \text{Csc}^{-1}\left(\frac{2}{\sqrt{3}}\right) + \text{Csc}^{-1}(-2)$

Applying the inverse cosecant addition formula

$$\begin{aligned}
\text{L.H.S} &= \text{Sin}^{-1} \left[ \frac{\sqrt{(-2)^2-1}+\sqrt{\left(\frac{2}{\sqrt{3}}\right)^2-1}}{\left(\frac{2}{\sqrt{3}}\right)(-2)} \right] \\
&= \text{Sin}^{-1} \left[ \frac{\sqrt{4-1}+\sqrt{\frac{4}{3}-1}}{-\frac{4}{\sqrt{3}}} \right] = \text{Sin}^{-1} \left[ \frac{\sqrt{3}+\frac{1}{\sqrt{3}}}{-\frac{4}{\sqrt{3}}} \right] \\
&= \text{Sin}^{-1} \left[ -\frac{\frac{4}{\sqrt{3}}}{\frac{4}{\sqrt{3}}} \right] = \text{Sin}^{-1}[-1] = -\frac{\pi}{2}
\end{aligned}$$

**Check Point**

Show that:

$\text{Csc}^{-1}\left(\frac{2\sqrt{3}}{3}\right) - \text{Csc}^{-1}\left(\frac{2}{\sqrt{2}}\right) = \frac{\pi}{12}$

> **Inverse Trigonometric Identities**
>
> $\text{Sec}^{-1} x = \text{Cos}^{-1}\left(\frac{1}{x}\right), x \geq 1$ or $x \leq -1$
>
> $\text{Csc}^{-1} x = \text{Sin}^{-1}\left(\frac{1}{x}\right), x \geq 1$ or $x \leq -1$
>
> $$\text{Cot}^{-1} x = \begin{cases} \text{Tan}^{-1}\left(\frac{1}{x}\right) & x > 0 \\ \pi + \text{Tan}^{-1}\left(\frac{1}{x}\right) & x < 0 \end{cases}$$

## Figures on this page

### Figure F1 — Coordinate axes showing Quadrants I and IV (top right)
- **Type:** geometric-diagram
- **Caption/Number:** (none printed)
- **Description:** A simple Cartesian coordinate system diagram with a vertical axis labeled with $\frac{\pi}{2}$ at the top, $0$ at the origin, and $-\frac{\pi}{2}$ at the bottom. The region above the origin is labeled "Quad-I" and the region below is labeled "Quad-IV". An arc is drawn in the first quadrant connecting the positive vertical axis to the positive horizontal axis, passing through a point labeled "$\alpha, \beta$" near the horizontal axis.
- **Mathematical meaning:** Illustrates the principal value ranges for inverse trigonometric functions (specifically Cosecant) which lie in Quadrant I ($[0, \frac{\pi}{2})$) and Quadrant IV ($[-\frac{\pi}{2}, 0)$).
