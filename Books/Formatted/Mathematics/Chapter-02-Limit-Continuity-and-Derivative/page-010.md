---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-2
chapter_folder: Chapter-02-Limit-Continuity-and-Derivative
chapter_number: 2
chapter_title: LIMIT, CONTINUITY AND DERIVATIVE
page_image: 10
page_printed: 52
section: null
exercise: null
content_type: worked-examples
has_figures: true
figures_count: 1
source_image: ../../../Raw/Mathematics/Unit-02-Limit-Continuity-and-Derivative/0010.jpg
converted_at: "2026-09-06"
converted_by: "agent-13a2 (glm-vision)"
notes: "Continuation of 2.3.1 Tangent of a Graph (started printed p.51) — no new numbered section heading printed, section: null. Definition box: book prints the slope identity WITHOUT lim on the first fraction ('= lim Δy/Δx' appears only at the end) — preserved verbatim. Figure (bottom right, no printed caption): orange/red parabola with black tangent line at (4,8). No edge cuts."
---

# Page 10 — Unit 02: Limit, Continuity and Derivative

> 📄 Original scan: [0010.jpg](../../../Raw/Mathematics/Unit-02-Limit-Continuity-and-Derivative/0010.jpg) · printed page 52

**Definition: Tangent line**

Let $y = f(x)$ be a continuous function. At a point $(a,f(a))$ the tangent line to the graph is the line that passes through the point with slope.

$$\text{Slope} = m_{tan} = \frac{f(a + \Delta x) - f(a)}{\Delta x} = \lim_{\Delta x \to 0} \frac{\Delta y}{\Delta x}$$

whenever the limit exists.

The slope of the tangent line at $(a,f(a))$ is also called the slope of the curve at the point. The tangent at $(a, f(a))$ is unique since a point and a slope determine a single line.

**Example 9:** Use definition to find the slope of the tangent line to the graph of $f(x) = x^2$ at $(1,f(1))$.

**Solution:**

i. $f(1) = 1^2 = 1$ for any $\Delta x \neq 0$

$$f(1 + \Delta x) = (1 + \Delta x)^2 = 1 + 2\Delta x + (\Delta x)^2$$

ii. $\Delta y = f(1 + \Delta x) - f(1)$

$$= 1+ 2\Delta x + (\Delta x)^2 - 1 = 2\Delta x + (\Delta x)^2 = \Delta x(2 + \Delta x)$$

iii. $\frac{\Delta y}{\Delta x} = \frac{\Delta x(2+\Delta x)}{\Delta x} = 2 + \Delta x$

Slope of the tangent is given by:

iv. $m_{tan} = \lim_{\Delta x \to 0} \frac{\Delta y}{\Delta x} = \lim_{\Delta x \to 0} 2 + \Delta x = 2$

**We summarize the definition into 4 steps:**

* Evaluate $f$ at $a$ and $a + \Delta x$: $f(a)$ and $f(a + \Delta x)$
* Find $\Delta y$
* Divide $\Delta y$ by $\Delta x$, $\Delta x \neq 0$

$$\frac{\Delta y}{\Delta x} = \frac{f(a + \Delta x) - f(a)}{\Delta x}$$

* Compute $\lim_{\Delta x \to 0}$

$$m_{tan} = \lim_{\Delta x \to 0} \frac{\Delta y}{\Delta x}$$

**Example 10:** Find the slope of the tangent line to the graph $f(x) = -x^2 + 6x$ at $(4, f(4))$.

**Solution:**

i. $f(4) = -(4)^2 + 6(4) = 8$, for any $\Delta x \neq 0$

$$f(4 + \Delta x) = -(4 + \Delta x)^2 + 6(4 + \Delta x) = 8 - 2\Delta x - (\Delta x)^2$$

ii. $\Delta y = f(4 + \Delta x) - f(4)$

$$= 8 - 2\Delta x - (\Delta x)^2 - 8 = -2\Delta x - (\Delta x)^2 = \Delta x(-2 - \Delta x)$$

iii. $\frac{\Delta y}{\Delta x} = \frac{\Delta x(-2-\Delta x)}{\Delta x} = -2 - \Delta x$

Slope of the tangent is given by:

iv. $m_{tan} = \lim_{\Delta x \to 0} \frac{\Delta y}{\Delta x} = \lim_{\Delta x \to 0} -2 - \Delta x = -2$

From graph we observe that the slope of line is $-2$ at $(4, 8)$.

[Figure F1]

## Figures on this page

### Figure F1 — Graph of parabola and tangent line (bottom right)
- **Type:** curve-plot
- **Caption/Number:** (none printed)
- **Description:** A Cartesian coordinate system with axes ranging from approximately -10 to 10 on both x and y axes. A downward-opening red parabola is plotted, representing the function $f(x) = -x^2 + 6x$. A straight black line touches the curve at a specific point labeled as (4, 8), which appears to be near the vertex or slightly to its right.
- **Mathematical meaning:** Illustrates the geometric interpretation of the derivative for $f(x) = -x^2 + 6x$; the tangent line at the point $(4, 8)$ has a negative slope of -2, indicating the function is decreasing at that point.
