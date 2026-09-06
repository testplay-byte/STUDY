---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-4
chapter_folder: Chapter-04-Differential-Equations
chapter_number: 4
chapter_title: DIFFERENTIAL EQUATIONS
page_image: 6
page_printed: 125
section: null
exercise: null
content_type: worked-examples
has_figures: true
figures_count: 1
source_image: ../../../Raw/Mathematics/Unit-04-Differential-Equations/0006.jpg
converted_at: "2026-09-06"
converted_by: "agent-13f (glm-vision)"
notes: ""
---

# Page 6 — Unit 04: Differential Equations

> 📄 Original scan: [0006.jpg](../../../Raw/Mathematics/Unit-04-Differential-Equations/0006.jpg) · printed page 125

To solve a differential equation such as $\frac{dy}{dx} - x = 0$, we mean to find an unknown function $y = f(x)$ or $y = f(x,y)$.

Consider a simple first order differential equation:

$$\frac{dy}{dx} = f(x) \quad \text{(i)}$$

Equation (i) can be solved by integration. If $f(x)$ is continuous function, then integrating both sides of (i) gives:

$$y = \int f(x)dx = F(x) + c$$

Where $F(x)$ is an anti-derivative of $f(x)$.

For example, the solution of differential equation $\frac{dy}{dx} = 1 + e^{2x}$ implies:

$$y = \int (1 + e^{2x})dx = x + \frac{1}{2}e^{2x} + c$$

> **Key Facts**
> 
> Only the simplest differential equations admit solutions given by explicit formulas. However, some properties of solutions of a given differential equation may be determined without finding their exact form. If a self-contained formula for the solution is not available, the solution may be numerically approximated using computers.

**Example 3:**

Show that $x^2 + y^2 = c$ is a solution of the differential equation $y\frac{dy}{dx} + x = 0$. Also plot the graph of solution.

**Solution:** We have $x^2 + y^2 = c$

Differentiating w.r.t. $x$, we get:

$$2x + 2y\frac{dy}{dx} = 0 \quad \text{or} \quad y\frac{dy}{dx} + x = 0$$

Hence, $x^2 + y^2 = c$ is the solution of differential equation $y\frac{dy}{dx} + x = 0$.

We note that the solution, $x^2 + y^2 = c$ depends upon an arbitrary constant $c$. By choosing different values of $c$, we get different solutions.

Let us take $c = 1, 4, 9, 16, \ldots$ then we get different solutions as:
$$\begin{aligned}
x^2 + y^2 &= 1 = 1^2 \\
x^2 + y^2 &= 4 = 2^2 \\
x^2 + y^2 &= 9 = 3^2 \\
x^2 + y^2 &= 16 = 4^2 \text{ and so on.}
\end{aligned}$$

These solutions represent a family of circles with radii 1, 2, 3, 4, ...with centre $(0, 0)$ in Fig. (i). [Figure F1]

Thus, the solution, $x^2 + y^2 = c$ represents a family of infinite number of circles.

From this example, it has been observed that there are two types of solutions of a differential equation.
(i) general solution (ii) particular solution

## Figures on this page

### Figure F1 — Family of concentric circles (bottom right)
- **Type:** geometric-diagram
- **Caption/Number:** Fig. (i)
- **Description:** A Cartesian coordinate system with horizontal axis labeled 'x' and vertical axis labeled 'y', intersecting at an origin labeled 'O'. The plot displays four concentric circles centered at the origin, representing the curves for different constant values ($c=1, 4, 9, 16$). The circles increase in size from the innermost to the outermost.
- **Mathematical meaning:** Illustrates the general solution $x^2 + y^2 = c$ as a family of concentric circles centered at the origin, where varying the arbitrary constant $c$ changes the radius of the circle.
