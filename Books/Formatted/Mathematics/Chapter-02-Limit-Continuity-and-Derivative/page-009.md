---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-2
chapter_folder: Chapter-02-Limit-Continuity-and-Derivative
chapter_number: 2
chapter_title: LIMIT, CONTINUITY AND DERIVATIVE
page_image: 9
page_printed: 51
section: "2.3 Rate of Change of Functions; 2.3.1 Tangent of a Graph"
exercise: null
content_type: mixed
has_figures: true
figures_count: 3
source_image: ../../../Raw/Mathematics/Unit-02-Limit-Continuity-and-Derivative/0009.jpg
converted_at: "2026-09-06"
converted_by: "agent-13a2 (glm-vision)"
notes: "Page opens with Q.19 and Q.20 completing Exercise 2.2 from printed p.50 (exercise: null because theory dominates; boundary recorded here). Spacing preserved as printed: 'In the figure(i)' and 'fixed-point P'. Figures carry printed captions Fig (i), Fig (ii), Fig (iii). No edge cuts."
---

# Page 9 — Unit 02: Limit, Continuity and Derivative

> 📄 Original scan: [0009.jpg](../../../Raw/Mathematics/Unit-02-Limit-Continuity-and-Derivative/0009.jpg) · printed page 51

19. Prove that the equation $\frac{x^2+1}{x+3} + \frac{x^4+1}{x-4} = 0$ has a solution in the interval $(-3, 4)$.

20. Prove that $f(x) = \begin{cases} 1, & x \text{ rational} \\ 0, & x \text{ irrational} \end{cases}$ is discontinuous at every real number. What does the graph of $f$ look like?

## 2.3 Rate of Change of Functions

### 2.3.1 Tangent of a Graph

Suppose $y = f(x)$ is a continuous function. In the figure(i), the graph of $f$ possesses a tangent line L at a point P, and then we would like to find its equation.

[Figure F1]

To do so we need: (i) the coordinates of P and

(ii) the slope $m_{tan}$ of L.

The coordinates of P pose no difficulty since a point on a graph is obtained by specifying a value of $x$, say $x = a$ in domain of $f$. The coordinates of point of tangency are $(a, f(a))$.

As a means of approximating the slope $m_{tan}$, we find the slope of secant lines that pass through the fixed-point P and any other point Q on the graph.

If P has coordinates $(a, f(a))$ and if we let Q have coordinates $(a + \Delta x, f(a + \Delta x))$, then from fig (ii) the slope of the secant line through P and Q is

$$\begin{aligned}
m_{sec} &= \frac{\text{change in y-coordinate}}{\text{change in x-coordinate}} \\
&= \frac{f(a+\Delta x)-f(a)}{(a+\Delta x)-a} = \frac{\Delta y}{\Delta x}
\end{aligned}$$

Then, $m_{sec} = \frac{\Delta y}{\Delta x}$ [Figure F2]

When the value of $\Delta x$ is close to zero either positive or negative, we get points Q and $Q'$ on the graph on each side of P, but close to the point P, we expect that the slopes $m_{PQ}$ and $m_{PQ'}$ are very close to the slope of the tangent line L. See fig (iii) [Figure F3]

## Figures on this page

### Figure F1 — Tangent line at P (top right)
- **Type:** line-graph
- **Caption/Number:** Fig (i)
- **Description:** A Cartesian coordinate system with X and Y axes. A smooth black curve starts from the origin and curves upwards into the first quadrant. A red straight line touches the curve at a point labeled P. The red line is labeled "Tangent line L at P".
- **Mathematical meaning:** Illustrates the geometric definition of a tangent line L touching the graph of a function $y=f(x)$ at a specific point P.

### Figure F2 — Secant line through P and Q (middle right)
- **Type:** line-graph
- **Caption/Number:** Fig (ii)
- **Description:** A Cartesian coordinate system with X and Y axes. A smooth black curve passes through points P and Q. Point P is located at $x=a$. Point Q is located at $x=a+\Delta x$. A red straight line (secant) passes through both P and Q. The horizontal distance between P and Q is labeled $\Delta x$, and the vertical distance is labeled $\Delta y = f(a+\Delta x) - f(a)$.
- **Mathematical meaning:** Demonstrates the slope of a secant line $m_{sec} = \frac{\Delta y}{\Delta x}$ as an approximation for the slope of the tangent line.

### Figure F3 — Secant lines approaching tangent (bottom right)
- **Type:** line-graph
- **Caption/Number:** Fig (iii)
- **Description:** A Cartesian coordinate system with X and Y axes. A smooth blue curve is shown. A red straight line (tangent) touches the curve at point P. Two other points, Q (to the left of P) and $Q'$ (to the right of P), are marked on the curve. Red secant lines are drawn connecting Q to P and $P$ to $Q'$.
- **Mathematical meaning:** Illustrates the limit process where as $\Delta x \to 0$, the slopes of the secant lines ($m_{PQ}$ and $m_{PQ'}$) approach the slope of the tangent line at P.
