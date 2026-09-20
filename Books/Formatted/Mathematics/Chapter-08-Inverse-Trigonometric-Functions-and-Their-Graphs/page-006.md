---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-8
chapter_folder: Chapter-08-Inverse-Trigonometric-Functions-and-Their-Graphs
chapter_number: 8
chapter_title: INVERSE TRIGONOMETRIC FUNCTIONS AND THEIR GRAPHS
page_image: 6
page_printed: 235
section: 8.1.8 The Inverse Tangent Function
exercise: null
content_type: theory
has_figures: true
figures_count: 3
source_image: ../../../Raw/Mathematics/Unit-08-Inverse-Trigonometric-Functions-and-Their-Graphs/0006.jpg
converted_at: "2026-09-20"
converted_by: "agent-16m (glm-vision)"
notes: "Salvaged + scan-verified agent-16d draft (chapter_title re-capped, figures re-split/renumbered). Book prints 'Tan y = Tan(pi/3)' but 'Since tany > 0' (lowercase, no space) and 'y lies in Quad I.' — preserved verbatim. Eval row 'Tan^-1(-infinity) = -pi/2 since Tan(-pi/2) = infinity' is the book's own wording (preserved). Dashed-border box and pink Check Point box rendered as blockquotes; no edge crops; footer digit 235 read from blue ribbon."
---

# Page 6 — Unit 08: Inverse Trigonometric Functions and Their Graphs

> 📄 Original scan: [0006.jpg](../../../Raw/Mathematics/Unit-08-Inverse-Trigonometric-Functions-and-Their-Graphs/0006.jpg) · printed page 235

We write this solution as $x = \text{Tan}^{-1}k$. In other words, “$x$ is a real number in the interval $\left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$ whose tangent value is $k$”. The tangent function defined on $x \in \left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$ for which there is only **one solution** of the equation $\tan x = k$ where $k \in (-\infty, \infty)$ is called the **Principal Tangent Function**.

[Figure F1]

> $\text{Tan}x = \text{tan}x$ ; $x \in \left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$
>
> **Tan⁻¹** and **tan** are not inverses of each other
> (They do not cancel each other)
>
> **tan** does not have an inverse
>
> The functions that are inverses are **Tan⁻¹** and **Tan**

[Figure F2]

**Example 3:** Find the principal value of $\text{Tan}^{-1}(\sqrt{3})$.

**Solution:** Let $y = \text{Tan}^{-1}(\sqrt{3})$ if and only if $\text{Tan } y = \sqrt{3}$, where $y \in \left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$

Consider $\text{Tan } y = \sqrt{3}$ $\quad$ [We need to find $y$ whose tangent value is $\sqrt{3}$.]

$$\Rightarrow \text{Tan } y = \text{Tan}\left(\frac{\pi}{3}\right) \quad \text{Since tany} > 0 \Rightarrow y \text{ lies in Quad I.}$$

$$\Rightarrow y = \frac{\pi}{3} \quad \Rightarrow \text{Tan}^{-1}(\sqrt{3}) = \frac{\pi}{3}$$

## 8.1.8 The Inverse Tangent Function

For the tangent function $y = \text{Tan }x$ where $x \in \left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$ and $y \in (-\infty, +\infty)$, we define an inverse tangent function $y = \text{Tan}^{-1}(x)$ where $x \in (-\infty, +\infty)$ and $y(x) \in \left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$. In view of above, we observe that:

$$\begin{aligned}
&\text{Tan}^{-1}(-\infty) = -\frac{\pi}{2} && \text{since} && \text{Tan}\left(-\frac{\pi}{2}\right) = \infty \\
&\text{Tan}^{-1}(1) = \frac{\pi}{4} && \text{since} && \text{Tan}\left(\frac{\pi}{4}\right) = 1 \\
&\text{Tan}^{-1}(0) = 0 && \text{since} && \text{Tan}(0) = 0 \\
&\text{Tan}^{-1}(\infty) = \frac{\pi}{2} && \text{since} && \text{Tan}\left(\frac{\pi}{2}\right) = \infty
\end{aligned}$$

[Figure F3]

> **Check Point**
>
> Find the principal value of $\text{Tan}^{-1}\left(-\frac{1}{\sqrt{3}}\right)$.

## Figures on this page

### Figure F1 — Graph of y = tanx with multiple branches (top right)
- **Type:** curve-plot
- **Caption/Number:** $y = \text{tanx}$ (printed in orange beside the curve)
- **Description:** A Cartesian coordinate system with the horizontal axis labeled "x – axis" (vertical axis unlabeled, arrow at top). $y$-axis ticks $3$, $2$, $1$, $0$, $-1$, $-2$, $-3$; $x$-axis ticks $-2\pi$, $-\pi$, $-\frac{\pi}{2}$, $\frac{\pi}{2}$, $\pi$, $2\pi$. A solid red curve of repeating tangent branches of $y = \text{tanx}$ rises through the origin on each branch, cut by dotted/dashed vertical asymptotes at $-\frac{3\pi}{2}$, $-\frac{\pi}{2}$, $\frac{\pi}{2}$, $\frac{3\pi}{2}$ with arrows at their ends and $-\infty$ printed at the lower ends.
- **Mathematical meaning:** Shows the unrestricted (periodic) tangent function, motivating the restriction to a principal-value interval before inversion.

### Figure F2 — Graph of y = Tanx restricted to (−π/2, π/2) (middle left)
- **Type:** curve-plot
- **Caption/Number:** $y = \text{Tanx}$ (printed in orange/red beside the curve)
- **Description:** A Cartesian coordinate system with $x$-axis ticks $-\frac{\pi}{2}$, $0$, $\frac{\pi}{2}$ and $y$-axis ticks $5$, $-5$. A single solid orange branch of $y = \text{Tanx}$ passes through the origin between dotted orange vertical asymptotes at $x = -\frac{\pi}{2}$ and $x = \frac{\pi}{2}$, arrows at the asymptote ends and $-\infty$ printed near their lower ends.
- **Mathematical meaning:** Displays the principal (restricted) tangent function on $\left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$, the one-to-one branch that defines $\text{Tan}^{-1}$.

### Figure F3 — Graph of y = Tan⁻¹x (bottom right)
- **Type:** curve-plot
- **Caption/Number:** $y = \text{Tan}^{-1}x$ (printed beside the blue curve)
- **Description:** A Cartesian coordinate system with axes labeled $x$ and $y$; $x$-axis ticks $-\pi$, $\pi$ and $y$-axis ticks mixing integers $-3$, $-2$, $-1$, $0$, $1$, $2$, $3$ with $\frac{\pi}{2}$, $-\frac{\pi}{2}$. A solid blue strictly increasing curve $y = \text{Tan}^{-1}x$ through the origin, with marked points $\left(1, \frac{\pi}{4}\right)$ and $\left(-1, -\frac{\pi}{4}\right)$, flattening toward dashed horizontal asymptotes $y = \frac{\pi}{2}$ and $y = -\frac{\pi}{2}$.
- **Mathematical meaning:** Graph of the inverse tangent function with domain $(-\infty, \infty)$ and range $\left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$.
