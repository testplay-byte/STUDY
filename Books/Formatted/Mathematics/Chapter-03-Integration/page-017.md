---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-3
chapter_folder: Chapter-03-Integration
chapter_number: 3
chapter_title: INTEGRATION
page_image: 17
page_printed: 105
section: "3.6 The Definite Integral; 3.6.1 Partition of the Interval"
exercise: null
content_type: theory
has_figures: true
figures_count: 1
source_image: ../../../Raw/Mathematics/Unit-03-Integration/0017.jpg
converted_at: "2026-09-06"
converted_by: "agent-13e (glm-vision)"
notes: ""
---

# Page 17 — Unit 03: Integration

> 📄 Original scan: [0017.jpg](../../../Raw/Mathematics/Unit-03-Integration/0017.jpg) · printed page 105

## 3.6 The Definite Integral

This section introduces the definite integral, a fundamental mathematical tool that establishes relationships between area and other essential quantities including length, volume, density, probability, and work.

### 3.6.1 Partition of the Interval

A partition of the interval $[a, b]$ is a collection of points:

$$a = x_0 < x_1 < x_2 < x_3 < \cdots < x_{n-1} < x_n = b$$

that divides $[a, b]$ into $n$ subintervals of lengths:

$$\Delta x_1 = x_1 - x_0, \quad \Delta x_2 = x_2 - x_1,$$
$$\Delta x_3 = x_3 - x_2, \ldots, \Delta x_n = x_n - x_{n-1}$$

The partition is said to be regular provided all subintervals have the same length:

$$\Delta x = \Delta x_1 = \frac{b-a}{n}$$

In the figure, each partition looks like a rectangle.
For a regular partition, widths of the rectangles approach to zero as $n$ is made large.

Area of first (left most) rectangle $= \text{length} \times \text{width} = f(x_1) \times \Delta x_1$

Area under the curve $=$ sum of areas of $n$ rectangles
$= f(x_1)\Delta x_1 + f(x_2)\Delta x_2 + f(x_3)\Delta x_3 + \cdots + f(x_n)\Delta x_n$

$$= \sum_{k=1}^{n} f(x_k)\Delta x_k \quad \ldots\ldots.. (i)$$

Expression $(i)$ represents approximation of sum of areas of $n$ rectangles.
Based on our inductive concept, the area under the curve and between the interval $[a, b]$ is:

$$A = \lim_{\Delta x \to 0} \sum_{k=1}^{n} f(x_k)\Delta x_k \quad \ldots\ldots..(ii)$$

Expression $(ii)$ provides the fundamental concept of integral calculus and form the basis of the following definition.

**Definition 3.2:** A function $f$ is said to be integrable on a finite closed interval $[a, b]$ if the limit:

$$\lim_{\Delta x \to 0} \sum_{k=1}^{n} f(x_k)\Delta x_k$$

exists and does not depend upon the choice of partitions or on the choice of the points $x_k$ in the subintervals. In the such case, we denote the limit by the symbol:

$$\int_a^b f(x)dx = \lim_{\Delta x \to 0} \sum_{k=1}^{n} f(x_k)\Delta x_k \ldots\ldots.(iii)$$

Expression $(iii)$ is called the definite integral of $f$ from $a$ to $b$. The numbers $a$ and $b$ are called lower limit and upper limit of integration respectively and $f(x)$ is called the integrand.

[Figure F1]

## Figures on this page

### Figure F1 — Graph of function y=f(x) with rectangular partitions (right side)
- **Type:** line-graph / geometric-diagram
- **Caption/Number:** (none printed)
- **Description:** A Cartesian coordinate system with horizontal axis labeled $x$ and vertical axis labeled $y$. An increasing curve representing $y = f(x)$ is plotted from left to right. The interval $[a, b]$ on the x-axis is divided into $n$ subintervals by points $x_0=a, x_1, x_2, \ldots, x_{n-1}, x_n=b$. Vertical lines are drawn from each partition point up to the curve, forming $n$ adjacent rectangles. The heights of these rectangles are labeled as $f(x_0), f(x_1), f(x_2), \ldots, f(x_n)$. The widths of the first three rectangles are explicitly labeled below the x-axis as $\Delta x_1, \Delta x_2$, and $\Delta x_3$. The width of the last rectangle is labeled $\Delta x_n$.
- **Mathematical meaning:** Illustrates the Riemann sum approximation for the area under a curve $y=f(x)$ over the interval $[a,b]$, where the total area is approximated by the sum of the areas of $n$ rectangles with widths $\Delta x_k$ and heights $f(x_k)$.
