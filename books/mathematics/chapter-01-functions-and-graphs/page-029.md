---
subject: mathematics
book_title: null
batch: M-1
chapter_folder: chapter-01-functions-and-graphs
chapter_number: 1
chapter_title: Functions and Graphs
page_image: 29
page_printed: 35
section: "1.12.4 Properties of the Inverse of One to One Function"
exercise: null
content_type: worked-examples
has_figures: true
figures_count: 2
source_image: ../raw/M-1/0029.jpg
converted_at: "2026-09-02"
converted_by: "agent-1d-v2 (glm-vision)"
notes: "Book quirks preserved verbatim: Example 23 text states '(3,0) is on the graph of f(x) and the point (0,3) is on the graph of f^-1(x)' — swapped relative to the book's own printed graph (dots: (0,3) on f(x), (3,0) on f^-1(x)); bullet 4 of 1.12.4 says 'range of g is equal to the domain of f' (redundant, as printed); 'Challenge' line sits between Examples 22 and 23 and refers forward to 'example 23' (as printed). No dashed y=x line drawn on either graph. Exercise 1.4 starts at top of next page (printed 36). Printed p.35 verified via footer."
---

# Page 29 — Unit 01: Functions and Graphs

> 📄 Original scan: [0029.jpg](../raw/M-1/0029.jpg) · printed page 35

## 1.12.4 Properties of the Inverse of One to One Function

Here are the properties of the inverse of one to one function:

*   The function $f$ has an inverse function if and only if $f$ is a one to one function.
*   If the functions $f$ and $g$ are inverses of each other then, both these functions are one to one.
*   $f$ and $g$ are inverses of each other if and only if $f(g(x)) = x$, $x$ in the domain of $g$ and $g(f(x)) = x$, $x$ in the domain of $f$.
*   If $f$ and $g$ are inverses of each other then the domain of $f$ is equal to the range of $g$ and the range of $g$ is equal to the domain of $f$.
*   If $f$ and $g$ are inverses of each other then their graphs will make reflections of each other on the line $y = x$.
*   If the point $(a,b)$ is on the graph of $f$ then point $(b,a)$ is on the graph of $f^{-1}$.

**Example 22:** Find the inverse of $f(x) = \frac{1}{2x-3}; x \neq \frac{3}{2}$, then represent $f$ and $f^{-1}$ graphically.

**Solution:** Given that $f(x) = \frac{1}{2x-3}; x \neq \frac{3}{2}$

Since $f$ is a one to one function, therefore:

$$f(f^{-1}(x)) = \frac{1}{2f^{-1}(x)-3} \quad [\text{Replacing } x \text{ with } f^{-1}(x)]$$

Solving for $f^{-1}(x)$, we get:

$$\Rightarrow \quad x = \frac{1}{2f^{-1}(x)-3} \quad \Rightarrow \quad 2f^{-1}(x) - 3 = \frac{1}{x}$$

$$\Rightarrow \quad 2f^{-1}(x) = \frac{1}{x} + 3 \quad \Rightarrow \quad f^{-1}(x) = \frac{1+3x}{2x}$$

Graph of function $f(x)$ and $f^{-1}(x)$ are shown in the adjoining figure. From the graph it is clear that if any point $(a,b)$ is on the graph of $f(x)$ then point $(b,a)$ is on the graph of $f^{-1}(x)$.

[Figure F1]

**Challenge:** Can you find inverse of $f(x)$ given in example 23, by any other method?

**Example 23:** Given that $f(x) = 3 - 4x$ is one to one. Find its inverse and represent $f$ and $f^{-1}$ graphically.

**Solution:** Given that $f(x) = 3 - 4x$ or $y = 3 - 4x$

Solving for $x$, we get:

$$\Rightarrow \quad 4x = 3 - y \quad \Rightarrow \quad x = \frac{3-y}{4}$$

$$\Rightarrow \quad f^{-1}(y) = \frac{3-y}{4}$$

$$\Rightarrow \quad f^{-1}(x) = \frac{3-x}{4} \quad [\text{Replacing } y \text{ with } x.]$$

Graph of function $f(x)$ and $f^{-1}(x)$ are shown in the adjoining figure. From the graph it is clear that the point $(3,0)$ is on the graph of $f(x)$ and the point $(0,3)$ is on the graph of $f^{-1}(x)$. Therefore, both the graphs are reflections of each other.

[Figure F2]

## Figures on this page

### Figure F1 — graphs of f(x) and f^-1(x) for Example 22 (middle right, beside solution text)
- **Type:** curve-plot
- **Caption/Number:** (none printed)
- **Description:** A Cartesian coordinate system with x-axis ticks labeled -8, -6, -4, -2, 0, 2, 4, 6, 8 and y-axis ticks -6, -4, -2, 0, 2, 4, 6. Two solid two-branch hyperbola-type curves are plotted: a yellow-green curve labeled $f(x)$ with vertical asymptote at $x = 1.5$ and horizontal asymptote $y = 0$ (branches in the first and third quadrants), and a purple curve labeled $f^{-1}(x)$ with vertical asymptote $x = 0$ (the y-axis) and horizontal asymptote $y = 1.5$, drawn as the mirror image of $f(x)$ (labels placed near their curves). No dashed $y = x$ reference line and no marked points.
- **Mathematical meaning:** Illustrates that the graph of the inverse function $f^{-1}(x) = \frac{1+3x}{2x}$ is the reflection of the original function $f(x) = \frac{1}{2x-3}$ across the line $y=x$; the asymptotes swap ($x=1.5$/$y=0$ become $x=0$/$y=1.5$).

### Figure F2 — graphs of f(x) and f^-1(x) for Example 23 (bottom right, beside solution text)
- **Type:** line-graph
- **Caption/Number:** (none printed)
- **Description:** A Cartesian coordinate system with x-axis ticks labeled -6, -4, -2, 0, 2, 4, 6, 8 and y-axis ticks -2, 0, 2, 4, 6. Two straight lines are plotted: a steep purple line labeled $f(x)$ (negative slope) passing through the y-intercept $(0, 3)$ and meeting the x-axis between 0 and 2 (at $x = 0.75$), and a shallow dark/black line labeled $f^{-1}(x)$ passing through the y-intercept $(0, 0.75)$ and the x-intercept $(3, 0)$. Two points are marked with black dots and annotated with their coordinates: $(0, 3)$ on the $f(x)$ line and $(3, 0)$ on the $f^{-1}(x)$ line. No dashed $y = x$ reference line is drawn.
- **Mathematical meaning:** Demonstrates that the linear function $f(x) = 3 - 4x$ and its inverse $f^{-1}(x) = \frac{3-x}{4}$ are reflections of each other across the line $y=x$, with intercepts swapped — the marked dot pair $(0,3)$ / $(3,0)$ illustrates the reflection.
