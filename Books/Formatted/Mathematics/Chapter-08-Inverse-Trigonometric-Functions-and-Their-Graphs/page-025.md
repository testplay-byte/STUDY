---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-8
chapter_folder: Chapter-08-Inverse-Trigonometric-Functions-and-Their-Graphs
chapter_number: 8
chapter_title: INVERSE TRIGONOMETRIC FUNCTIONS AND THEIR GRAPHS
page_image: 25
page_printed: 254
section: 8.3.2 Inverse Cosine Addition and Subtraction Formulas
exercise: null
content_type: theory
has_figures: true
figures_count: 1
source_image: ../../../Raw/Mathematics/Unit-08-Inverse-Trigonometric-Functions-and-Their-Graphs/0025.jpg
converted_at: "2026-09-20"
converted_by: "coordinator-w4b (glm-vision)"
notes: ""
---

# Page 25 — Unit 08: Inverse Trigonometric Functions and Their Graphs

> 📄 Original scan: [0025.jpg](../../../Raw/Mathematics/Unit-08-Inverse-Trigonometric-Functions-and-Their-Graphs/0025.jpg) · printed page 254

Using the sine addition formula:
$\text{Sin}(\alpha + \beta) = \text{Sin } \alpha \text{ Cos } \beta + \text{Cos } \alpha \text{ Sin } \beta$

Applying arcsine on both sides:
$\alpha + \beta = \text{Sin}^{-1}[\text{Sin } \alpha \text{ Cos } \beta + \text{Cos } \alpha \text{ Sin } \beta] \quad \longrightarrow (I)$

Finding the values of $\cos \alpha$ and $\cos \beta$
$\because \text{Sin}^2 \alpha + \text{Cos}^2 \alpha = 1 \qquad \because \text{Sin}^2 \beta + \text{Cos}^2 \beta = 1$
$\text{Cos}^2 \alpha = 1 - \text{Sin}^2 \alpha \qquad \text{Cos}^2 \beta = 1 - \text{Sin}^2 \beta$
$\text{Cos } \alpha = \pm\sqrt{1 - \text{Sin}^2 \alpha} \qquad \text{Cos } \beta = \pm\sqrt{1 - \text{Sin}^2 \beta} \quad \text{where } \alpha, \beta \in \left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$ [Figure F1]

If $\text{Sin } \alpha > 0$ and $\text{Sin } \beta > 0$ then $\alpha, \beta \in \left(0, \frac{\pi}{2}\right)$ i.e., Quadrant I
$\Rightarrow \text{Cos } \alpha = \sqrt{1 - \text{Sin}^2 \alpha}$ and $\text{Cos } \beta = \sqrt{1 - \text{Sin}^2 \beta}$
$\text{Cos } \alpha = \sqrt{1 - x^2}$ and $\text{Cos } \beta = \sqrt{1 - y^2}$ (Using $x = \text{Sin } \alpha$ and $y = \text{Sin } \beta$)

Substituting values in equation (I), we get:
$$\text{Sin}^{-1}(x) + \text{Sin}^{-1}(y) = \text{Sin}^{-1}\left[x\sqrt{1 - y^2} + y\sqrt{1 - x^2}\right]$$

(ii) The proof is similar to subtraction formula.

**Example 10:** Show that: $\text{Sin}^{-1}\left(\frac{1}{3}\right) + \text{Sin}^{-1}\left(\frac{2\sqrt{2}}{3}\right) = \frac{\pi}{2}$

**Solution:** L.H.S $= \text{Sin}^{-1}\left(\frac{1}{3}\right) + \text{Sin}^{-1}\left(\frac{2\sqrt{2}}{3}\right)$

Applying the inverse sine addition formula:

$$
\begin{aligned}
\text{L.H.S} &= \text{Sin}^{-1} \left[ \left(\frac{1}{3}\right) \sqrt{1 - \left(\frac{2\sqrt{2}}{3}\right)^2} + \left(\frac{2\sqrt{2}}{3}\right) \sqrt{1 - \left(\frac{1}{3}\right)^2} \right] \\
&= \text{Sin}^{-1} \left[ \left(\frac{1}{3}\right) \sqrt{1 - \frac{8}{9}} + \left(\frac{2\sqrt{2}}{3}\right) \sqrt{1 - \frac{1}{9}} \right] \\
&= \text{Sin}^{-1} \left[ \left(\frac{1}{3}\right) \sqrt{\frac{1}{9}} + \left(\frac{2\sqrt{2}}{3}\right) \sqrt{\frac{8}{9}} \right] = \text{Sin}^{-1} \left[ \left(\frac{1}{3}\right) \left(\frac{1}{3}\right) + \left(\frac{2\sqrt{2}}{3}\right) \left(\frac{2\sqrt{2}}{3}\right) \right] \\
&= \text{Sin}^{-1} \left[\frac{1}{9} + \frac{8}{9}\right] \\
&= \text{Sin}^{-1}[1] = \frac{\pi}{2} = \text{ R.H.S}
\end{aligned}
$$

> **Check Point**
> Show that: $\text{Sin}^{-1}\left(\frac{1}{2}\right) - \text{Sin}^{-1}\left(\frac{\sqrt{3}}{2}\right) = -\frac{\pi}{6}$

## 8.3.2 Inverse Cosine Addition and Subtraction Formulas

(i) $\text{Cos}^{-1}(x) + \text{Cos}^{-1}(y) = \text{Cos}^{-1}[xy - \sqrt{(1-x^2)(1-y^2)}]$

(ii) $\text{Cos}^{-1}(x) - \text{Cos}^{-1}(y) = \text{Cos}^{-1}[xy + \sqrt{(1-x^2)(1-y^2)}]$

where $x, y \in [-1,1]$ and $y \in (-\infty, 1]$

**Proof:**

(i) Let $\alpha = \text{Cos}^{-1}(x)$ if and only if $x = \text{Cos } \alpha$, where $\alpha \in [0, \pi]$ and $x \in [-1,1]$

Let $\beta = \text{Cos}^{-1}(y)$ if and only if $y = \text{Cos } \beta$, where $\beta \in [0, \pi]$ and $y \in [-1,1]$

Using the cosine addition formula:
$\text{Cos}(\alpha + \beta) = \text{Cos } \alpha \text{ Cos } \beta - \text{Sin } \alpha \text{ Sin } \beta$

## Figures on this page

### Figure F1 — Quadrant diagram (top right)
- **Type:** geometric-diagram
- **Caption/Number:** (none printed)
- **Description:** A simple coordinate system diagram showing two axes intersecting at an origin labeled 'o'. The vertical axis is marked with $\pi/2$ at the top and $-\pi/2$ at the bottom. The horizontal axis is marked with '0' to the right. An arc is drawn in the first quadrant labeled 'Quad-I', and another arc is shown in the fourth quadrant labeled 'Quad-IV'. An angle vector is labeled with '$\alpha, \beta$'.
- **Mathematical meaning:** Illustrates the principal range for inverse sine functions, showing that angles $\alpha$ and $\beta$ lie within Quadrants I or IV, corresponding to the interval $[-\pi/2, \pi/2]$.
