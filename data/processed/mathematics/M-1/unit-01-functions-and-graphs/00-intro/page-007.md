---
book: M-1
book_title: null
page_image: 7
page_printed: 13
chapter: 1
chapter_title: Functions and Graphs
section: "1.3.1 Steps to Find an Inverse Function; 1.3.2 Graph of an Inverse Function"
exercise: null
content_type: theory
has_figures: true
figures_count: 1
source_image: ../../../../../../data/raw/mathematics/M-1/0007.jpg
converted_at: "2026-09-02"
converted_by: "agent-1a-v2 (glm-vision)"
notes: "Draft by agent-1a; QA-verified and finalized by agent-1a-v2 (footer p.13, headings 1.3.1/1.3.2, single graph, LaTeX balance all re-checked against image). Continuation of §1.3 Inverse Function from p.12; Example 7 solution (ii) continues onto p.14."
---

# Page 7 — Unit 01: Functions and Graphs

> 📄 Original scan: [0007.jpg](../../../../../../data/raw/mathematics/M-1/0007.jpg) · printed page 13

Note that $f^{-1}$ is not the reciprocal of $f$ and not every function has an inverse. If a function $f(x)$ has an inverse, then $f(x)$ never takes the same value twice. In simple words, the inverse function exists only when $f$ is both one-one and onto function. Can we say that the inverse function is also a bijective function?

Moreover, the composition of the function $f$ and the inverse function $f^{-1}$ gives the domain value of $x$.

$$fof^{-1}(x) = f^{-1}of(x) = x$$

## 1.3.1 Steps to Find an Inverse Function

Consider a function $f(x) = ax + b$.

*   Replace $f(x)$ with $y$, to obtain $y = ax + b$.
*   Solve the expression for $x$ to obtain $x = \frac{y-b}{a}$.
*   Replace $x$ with $f^{-1}(y)$ to get $f^{-1}(y) = \frac{y-b}{a}$.
*   Interchange $y$ with $x$ in the function $f^{-1}(y) = \frac{y-b}{a}$ and get inverse function

$$f^{-1}(x) = \frac{x-b}{a}$$

## 1.3.2 Graph of an Inverse Function

If the graphs of both functions are symmetric with respect to the line $y = x$ then we say that the two functions are inverses of each other. This is because of the fact that if $(x,y)$ lies on the function, then $(y,x)$ lies on its inverse function.

[Figure F1]

**Example 7:**

Find the inverse function of $f(x) = \frac{x}{x-2}$ defined on $f\colon R \to R$.

(i)     Find domain and range of function and its inverse.
(ii)    Prove that $fof^{-1}(x) = f^{-1}of(x) = x$

**Solution:**

(i)     Given function is $f(x) = \frac{x}{x-2}$

$\text{Dom } f(x) = R - \{2\}$

To find inverse function, let:

$$\begin{aligned}
y &= \frac{x}{x-2} \quad \Rightarrow \quad y(x - 2) = x \quad \Rightarrow \quad xy - x = 2y \\
&\Rightarrow \quad x(y - 1) = 2y \quad \Rightarrow \quad x = \frac{2y}{y-1} \\
&\Rightarrow \quad f^{-1}(y) = \frac{2y}{y-1} \quad \dots\dots (x = f^{-1}(y)) \\
&\Rightarrow \quad f^{-1}(x) = \frac{2x}{x-1} \quad \dots\dots \text{Replacing } y \text{ with } x.
\end{aligned}$$

## Figures on this page

### Figure F1 — Graphs of a function and its inverse (right side)
- **Type:** curve-plot
- **Caption/Number:** (none printed)
- **Description:** A Cartesian coordinate system with a horizontal axis labeled $x$ (arrowhead right) and a vertical axis labeled $y$ (arrowhead up), intersecting at an origin labeled '0'. A dashed line runs diagonally from bottom-left to top-right at a 45-degree angle through the origin, labeled $y=x$ in green text near its upper end. A solid blue curve labeled $y=f(x)$ (green label near its upper right) rises steeply upward to the right, crossing the $y$-axis at a positive value (first/second quadrants). A solid red curve labeled $y=f^{-1}(x)$ (green label near its upper right) starts near the $x$-axis and rises to the right (first/fourth quadrants). The two curves are mirror images of each other across the dashed line $y=x$.
- **Mathematical meaning:** Demonstrates that the graph of an inverse function $f^{-1}(x)$ is the reflection of the graph of the original function $f(x)$ across the line $y=x$.
