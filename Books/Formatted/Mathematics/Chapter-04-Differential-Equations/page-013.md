---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-4
chapter_folder: Chapter-04-Differential-Equations
chapter_number: 4
chapter_title: DIFFERENTIAL EQUATIONS
page_image: 13
page_printed: 132
section: "(ii) Initial Condition and Initial Value Problem (IVP)"
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Mathematics/Unit-04-Differential-Equations/0013.jpg
converted_at: "2026-09-06"
converted_by: "agent-13g (glm-vision)"
notes: "Continuation of section (ii) IVP from p.131 — no heading printed on this page, section field records the section in force. Ends with a 'Check Point' sidebar box (transcribed as blockquote)."
---

# Page 13 — Unit 04: Differential Equations

> 📄 Original scan: [0013.jpg](../../../Raw/Mathematics/Unit-04-Differential-Equations/0013.jpg) · printed page 132

Suppose we want to find the solution of differential equation $\frac{dy}{dx} = f(x,y)$ subject to conditions $y = y_0$ at $x = x_0$. If we substitute $x = x_0$ and $y = y_0$, in the solution of $\frac{dy}{dx} = f(x,y)$ then we get a particular value of constant obtained in the general solution. Thus, a particular solution is obtained with the choice of some values of variables given in the differential equation. We call $y(x_0) = y_0$ as initial condition and the differential equation of $\frac{dy}{dx} = f(x,y)$ becomes an initial value problem as follows:

$$\frac{dy}{dx} = f(x,y), \quad y(x_0) = y_0$$

**Example 11:** Solve the initial value problem: $\frac{dy}{dx} = -\frac{x}{y}$, $y(1) = 3$

**Solution:** The given equation can be written as:
$$y \, dy = -x \, dx$$

Integrating both sides, we get:

$$\int y \, dy = \int -x \, dx \quad \Rightarrow \quad \frac{y^2}{2} = -\frac{x^2}{2} + c \quad \Rightarrow \quad x^2 + y^2 = 2c \qquad (i)$$

Using the initial condition i.e. $x = 1, y = 3$ in equation (i), we get:

$$1^2 + 3^2 = 2c \qquad \Rightarrow \quad 2c = 10 \qquad \Rightarrow \quad c = 5$$

Substituting the value of $c$ in equation (i), we get:

$$x^2 + y^2 = 2 \times 5 \quad \Rightarrow \quad x^2 + y^2 = 10$$

Which is a solution of initial value problem representing a circle with centre $(0, 0)$ and radius $\sqrt{10}$.

**Example 12:** Solve $\frac{dy}{dx} = 2x$ such that $y(2) = 4$.

**Solution:** Given equation can be written as:
$$dy = 2x \, dx$$

Integrating both sides, we get:

$$\int dy = \int 2x \, dx \quad \Rightarrow \quad y = 2\left(\frac{x^2}{2}\right) + c \quad \Rightarrow \quad y - x^2 = c \qquad (i)$$

Using $x = 2, y = 4$ in equation (i), we get:

$$4 - 2^2 = c \qquad \Rightarrow \quad c = 0$$

Substituting the value of $c$ in equation (i), we get:

$$y - x^2 = 0 \qquad (ii)$$

Which is a solution of initial value problem.

**Note:** The general solution (i) represents a family of parabolas for different values of $c$ whereas the particular solution (ii) represents a member of family that passes through $(2, 4)$.

> **Check Point**
>
> Show that the solution of differential equation $\frac{dy}{dx} = 2$ represents a family of parallel lines. Draw some of parallel lines. Also solve differential equation for initial condition $y(0) = 1$.
