---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-2
chapter_folder: Chapter-02-Limit-Continuity-and-Derivative
chapter_number: 2
chapter_title: LIMIT, CONTINUITY AND DERIVATIVE
page_image: 27
page_printed: 69
section: "2.15 Differentials"
exercise: null
content_type: theory
has_figures: true
figures_count: 1
source_image: ../../../Raw/Mathematics/Unit-02-Limit-Continuity-and-Derivative/0027.jpg
converted_at: "2026-09-06"
converted_by: "agent-13b2 (glm-vision)"
notes: "First VLM draft scrambled the block order (Example 36's continuation equations placed before its heading) — re-verified against the scan and reordered: Example 35 solution ends at dy/dx = 12t^2/sec^2 t; all quotient-rule work for dx/dt and dy/dt and the final dy/dx = (t^2-1)/2t belong to Example 36. Figure F1 sits in the right margin beside the §2.15 text (caption 'Fig (a)'). Book typo preserved: 'the derivative of finding slope of a tangent line'. No scan-edge cropping, no sidebar boxes."
---

# Page 27 — Unit 02: Limit, Continuity and Derivative

> 📄 Original scan: [0027.jpg](../../../Raw/Mathematics/Unit-02-Limit-Continuity-and-Derivative/0027.jpg) · printed page 69

**Example 35:** Find $\frac{dy}{dx}$ if $x = \tan t$, $y = 4t^3 + 1$

**Solution:** $\frac{dy}{dx} = \frac{dy}{dt} \cdot \frac{dt}{dx} = \frac{\frac{dy}{dt}}{\frac{dx}{dt}}$

$$\begin{aligned} \frac{dy}{dt} &= \frac{d}{dt}(4t^3 + 1) = 12t^2 \\ \frac{dx}{dt} &= \frac{d}{dt}(\tan t) = \sec^2 t \\ \frac{dy}{dx} &= \frac{12t^2}{\sec^2 t} \end{aligned}$$

**Example 36:** Find $\frac{dy}{dx}$ if $x = \frac{1-t^2}{1+t^2}$, $y = \frac{2t}{1+t^2}$

**Solution:** $\frac{dy}{dx} = \frac{dy}{dt} \cdot \frac{dt}{dx}$

$$\frac{dx}{dt} = \frac{d}{dt}\left(\frac{1-t^2}{1+t^2}\right)$$

$$= \frac{(1+t^2)\frac{d}{dt}(1-t^2) - (1-t^2)\frac{d}{dt}(1+t^2)}{(1+t^2)^2}$$

$$= \frac{(1+t^2)(-2t) - (1-t^2)(2t)}{(1+t^2)^2}$$

$$\begin{aligned} &= \frac{-2t - 2t^3 - 2t + 2t^3}{(1+t^2)^2} \\ &= \frac{-4t}{(1+t^2)^2} \end{aligned}$$

$$\frac{dy}{dt} = \frac{d}{dt}\left(\frac{2t}{1+t^2}\right)$$

$$\begin{aligned} &= \frac{(1+t^2)\frac{d}{dt}(2t) - (2t)\frac{d}{dt}(1+t^2)}{(1+t^2)^2} \\ &= \frac{(1+t^2)(2) - (2t)(2t)}{(1+t^2)^2} \\ &= \frac{2+2t^2-4t^2}{(1+t^2)^2} \\ &= \frac{2(1-t^2)}{(1+t^2)^2} \end{aligned}$$

$$\frac{dy}{dx} = \frac{\frac{2(1-t^2)}{(1+t^2)^2}}{\frac{-4t}{(1+t^2)^2}} = \frac{(t^2-1)}{2t}$$

## 2.15 Differentials

We have already discussed the derivative of finding slope of a tangent line to the graph of a function $y = f(x)$.

[Figure F1]

$$m_{sec} = \frac{f(x+\Delta x)-f(x)}{\Delta x} = \frac{\Delta y}{\Delta x}$$

For small values of $\Delta x$,

$$m_{sec} \cong m_{tan} \text{ or } \frac{\Delta y}{\Delta x} = m_{tan} = f'(x)$$

We have: $\quad \frac{\Delta y}{\Delta x} = f'(x)$

$$\Delta y = f'(x)\Delta x$$

## Figures on this page

### Figure F1 — Geometric representation of the derivative (right margin, beside §2.15 text)
- **Type:** geometric-diagram
- **Caption/Number:** Fig (a)
- **Description:** A Cartesian coordinate system with X and Y axes. A smooth curve is plotted in the first quadrant. Two points are marked on the curve: point P at $(x, y)$ and point Q at $(x+\Delta x, y+\Delta y)$. A straight secant line passes through both points P and Q. A tangent line touches the curve at point Q. The horizontal distance between points P and Q is labeled as $\Delta x$, and the vertical distance is labeled as $\Delta y$.
- **Mathematical meaning:** Illustrates that for small values of $\Delta x$, the slope of the secant line ($m_{sec}$) approximates the slope of the tangent line ($m_{tan}$), which is the derivative $f'(x)$ at a point on the curve.
