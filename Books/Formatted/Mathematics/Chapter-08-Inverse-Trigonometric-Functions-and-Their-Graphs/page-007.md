---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-8
chapter_folder: Chapter-08-Inverse-Trigonometric-Functions-and-Their-Graphs
chapter_number: 8
chapter_title: INVERSE TRIGONOMETRIC FUNCTIONS AND THEIR GRAPHS
page_image: 7
page_printed: 236
section: 8.1.9 The Domain and Range of Inverse Tangent Function; 8.1.10 The Principal Cotangent Function
exercise: null
content_type: theory
has_figures: true
figures_count: 2
source_image: ../../../Raw/Mathematics/Unit-08-Inverse-Trigonometric-Functions-and-Their-Graphs/0007.jpg
converted_at: "2026-09-20"
converted_by: "agent-16m (glm-vision)"
notes: "Book misprint preserved in Example 4: after correctly deriving 'y lies in Quad II', the book prints y = -pi/3 and Cot^{-1}(-sqrt3) = -pi/3 (principal value on (0,pi) would be 2pi/3). Dashed If/Then summary box rendered as blockquote per p.235 canon."
---

# Page 7 — Unit 08: Inverse Trigonometric Functions and Their Graphs

> 📄 Original scan: [0007.jpg](../../../Raw/Mathematics/Unit-08-Inverse-Trigonometric-Functions-and-Their-Graphs/0007.jpg) · printed page 236

## 8.1.9 The Domain and Range of Inverse Tangent Function

To find the domain and range of inverse trigonometric function, switch the **domain** and **range** of the original function.

For the tangent function $y = \text{Tan } x$

$Domain = \left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$ and $Range = (-\infty, \infty)$

For the inverse tangent function $y = \text{Tan}^{-1} x$

$Domain = (-\infty, \infty)$ and $Range = \left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$

> **If** $y = \text{Tan } x$ with $x \in \left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$; $y \in (-\infty, \infty)$ **then** $y = \text{Tan}^{-1}(x)$ with $x \in (-\infty, \infty)$; $y \in \left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$

Since graph of the inverse trigonometric function is a reflection of the graph of the original function about the line $y=x$.

Therefore, to graph the inverse trigonometric function, we use the graph of the trigonometric function restricted to the domain specified earlier and reflect the graph about the line $y = x$ as shown in figure.

[Figure F1]

## 8.1.10 The Principal Cotangent Function

To define principal cotangent function, we need an interval for $x$ where there is only one solution to $\cot x = k$ for $k \in (-\infty, +\infty)$. Such a solution is possible in the interval between $0$ and $\pi$. In the interval $(0, \pi)$, we can find a **unique solution** to the equation $\text{Cot } x = k$, where $k \in (-\infty, \infty)$.

We write this solution as $x = \text{Cot}^{-1} k$.

The cotangent function defined on $x \in (0, \pi)$ for which there is only **one solution** of the equation $\text{Cot } x = k$ where $k \in (-\infty, \infty)$ is called the **Principal Cotangent Function**.

[Figure F2]

**Example 4:** Find the principal value of $\text{Cot}^{-1}(-\sqrt{3})$

**Solution:** Let $y = \text{Cot}^{-1}(-\sqrt{3})$ if and only if $\text{Cot } y = -\sqrt{3}$, where $y \in (0, \pi)$.

Consider $\text{Cot } y = -\sqrt{3}$ [We need to find $y$ whose cotangent value is $-\sqrt{3}$.]

$\text{Tan } y = -\frac{1}{\sqrt{3}}$ Since, $\text{Tan } y < 0 \Rightarrow \text{Cot } y < 0 \Rightarrow y$ lies in Quad II.

$\Rightarrow \text{Tan } y = \text{Tan}\left(-\frac{\pi}{3}\right)$

$\Rightarrow y = -\frac{\pi}{3}$ $\Rightarrow \text{Cot}^{-1}(-\sqrt{3}) = -\frac{\pi}{3}$

> **Check Point** Find the principal value of $\text{Cot}^{-1}(1)$.

## Figures on this page

### Figure F1 — Graphs of Tan x and Tan⁻¹x (middle right)
- **Type:** curve-plot
- **Caption/Number:** (none printed)
- **Description:** A Cartesian coordinate system showing two curves. The horizontal axis is labeled "x-axis" and the vertical axis is labeled "y-axis". A blue curve labeled "$y=\text{Tan } x$" shows the standard tangent curve increasing from left to right within vertical asymptotes at $x=-\pi/2$ and $x=\pi/2$, passing through the origin. A red curve (appearing nearly linear over the restricted interval) labeled "$y=\text{Tan}^{-1} x$" passes through the origin with a positive slope, bounded by horizontal asymptotes at $y=-\pi/2$ and $y=\pi/2$. A dotted diagonal line representing $y=x$ is also present. The axes are marked with values $\pm\pi/2$.
- **Mathematical meaning:** Illustrates that the graph of the inverse tangent function ($y=\text{Tan}^{-1}x$) is the reflection of the restricted tangent function ($y=\text{Tan }x$) about the line $y=x$.

### Figure F2 — Graph of y = Cot x (lower right)
- **Type:** curve-plot
- **Caption/Number:** (none printed)
- **Description:** A Cartesian coordinate system with horizontal axis labeled "x" and vertical axis labeled "y". A red curve labeled "$y=\text{Cot } x$" starts near the top of the y-axis (approaching a vertical asymptote at $x=0$), decreases monotonically, crosses the x-axis at $x=\pi/2$, and continues to decrease towards negative infinity as it approaches a vertical asymptote at $x=\pi$. The origin is marked as "O".
- **Mathematical meaning:** Shows the graph of the principal cotangent function defined on the interval $(0, \pi)$, which is strictly decreasing and takes all real values exactly once.
