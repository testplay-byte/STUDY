---
subject: mathematics
book_title: null
batch: M-1
chapter_folder: Chapter-01-Functions-and-Graphs
chapter_number: 1
chapter_title: Functions and Graphs
page_image: 28
page_printed: 34
section: "1.12.2 Horizontal Line Test; 1.12.3 Inverse of One-One Function"
exercise: null
content_type: theory
has_figures: true
figures_count: 3
source_image: ../../../Raw/Mathematics/Unit-01-Functions-and-Graphs/0028.jpg
converted_at: "2026-09-02"
converted_by: "agent-1d-v2 (glm-vision)"
notes: "Draft by agent-1d, QA-completed by agent-1d-v2. Book typos preserved verbatim: 'ono-one function' (twice), 'must determines', 'a function g with main Y and range X', '(g(y)) = y' in the Definition, 'Rang' (unspelled 'Range') twice, '1-1 function' in Check Point. Printed p.34 verified via footer. Two side-by-side horizontal-line-test graphs counted as separate figures (F1, F2) per convention; mapping diagram = F3."
---

# Page 28 — Unit 01: Functions and Graphs

> 📄 Original scan: [0028.jpg](../../../Raw/Mathematics/Unit-01-Functions-and-Graphs/0028.jpg) · printed page 34

## 1.12.2 Horizontal Line Test

The horizontal line test is used to determine whether a function is one-one when its graph is given. To test whether the function is one-one from its graph just take a horizontal line (consider a horizontal stick) and make it pass through the graph.

* If the horizontal line does not pass through more than one point of the graph, then the function is one-one.
* If the horizontal line passes through more than one point of the graph, then the function is not one-one.

**Examples:** If we draw horizontal lines on the above graphs, we observe that:

(i) The graph of $f(x) = x - 3$ passes horizontal line test, so it is ono-one function.

(ii) The graph of $g(x) = x^2 - 1$ fails horizontal line test, so it is not ono-one function.

[Figure F1] [Figure F2]

$f(x)$ is **one-one** function.

$g(x)$ is **not a one-one** function.

> **Check Point**
>
> By using horizontal line test, check whether the function $y = x^3$ is 1-1 function or not.

## 1.12.3 Inverse of One-One Function

Suppose $f\colon X \to Y$ is a one-one function. Since every element $y$ of Y corresponds with precisely one element $x$ of X, the function $f$ must determines a "**reverse function**" $g\colon Y \to X$ whose domain is Y and range is X. Then $f$ and $g$ imply that:

$$
\begin{aligned}
f(x) &= y \quad &\text{and} \quad g(y) &= x \\
f(g(y)) &= y \quad &\text{and} \quad g(f(x)) &= x
\end{aligned}
$$

The function $g$ is given the formal name as "**inverse of $f$**".

From the above discussion it is clear that:

Dom $f =$ Rang $g$ and Rang $f =$ Dom $g$

[Figure F3]

**Definition:**

Let $f$ be a one-to-one function with domain X and range Y. The inverse of $f$ is a function $g$ with main Y and range X for which:

$(g(y)) = y$ for every $y$ in Y and $g(f(x)) = x$ for every $x$ in X.

Symbolically the inverse of a function $f$ is denoted by $f^{-1}$. Thus, $g(x) = f^{-1}(x)$. It is to be noted that $f^{-1}$ is not the same as $[f(x)]^{-1}$. In terms of this new notation, we have:

$$
f(f^{-1}(x)) = f^{-1}(f(x)) = x
$$

## Figures on this page

### Figure F1 — Graph of f(x)=x−3 passing the horizontal line test (upper left, under example (i))
- **Type:** line-graph
- **Caption/Number:** (none printed)
- **Description:** A Cartesian coordinate system with x-axis ticks at 0, 2, 4, 6 and y-axis ticks at -4, -2, 2. A solid red straight line representing $f(x) = x - 3$ passes through $(0, -3)$ and $(3, 0)$. A dashed blue horizontal line labeled "Horizontal line" (text written above it) crosses the graph and intersects the line at exactly one point. Below the graph, blue caption text: "$f(x)$ is one-one function."
- **Mathematical meaning:** Every horizontal line cuts the graph at most once, so the linear function passes the horizontal line test and is one-one (injective).

### Figure F2 — Graph of g(x)=x²−1 failing the horizontal line test (upper right, under example (ii))
- **Type:** curve-plot
- **Caption/Number:** (none printed)
- **Description:** A Cartesian coordinate system with x-axis ticks at -2, 0, 2 and y-axis ticks at -2, 2, 4. A solid blue upward-opening parabola representing $g(x) = x^2 - 1$ has its vertex at $(0, -1)$. A dashed red/orange horizontal line labeled "Horizontal line" (text beside it) crosses the graph and intersects the parabola at two distinct points, one on each side of the y-axis. Below the graph, caption text: "$g(x)$ is not a one-one function."
- **Mathematical meaning:** A horizontal line cuts the parabola twice, so the quadratic fails the horizontal line test and is not one-one (many-to-one).

### Figure F3 — Mapping diagram for inverse function (right, in §1.12.3)
- **Type:** other
- **Caption/Number:** (none printed)
- **Description:** A mapping diagram showing two ovals representing sets X and Y: the left oval contains element $x$ with label X below it, the right oval contains element $y$ with label Y below it. A curved arrow labeled $f$ points from set X to set Y; a curved arrow labeled $g$ points from set Y back to set X.
- **Mathematical meaning:** Illustrates the relationship between a one-to-one function $f$ and its inverse function $g$ (or $f^{-1}$), showing how elements map back and forth between the domain and range.
