---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-3
chapter_folder: Chapter-03-Integration
chapter_number: 3
chapter_title: INTEGRATION
page_image: 28
page_printed: 116
section: 3.12.2 Rectilinear Motion
exercise: null
content_type: worked-examples
has_figures: true
figures_count: 1
source_image: ../../../Raw/Mathematics/Unit-03-Integration/0028.jpg
converted_at: "2026-09-06"
converted_by: "agent-13e (glm-vision)"
notes: ""
---

# Page 28 — Unit 03: Integration

> 📄 Original scan: [0028.jpg](../../../Raw/Mathematics/Unit-03-Integration/0028.jpg) · printed page 116

**Example 32:**
Suppose the demand and supply of a commodity selling for $x$ dollars a unit and $D(x) = 1000 - 20x$ and $S(x) = x^2 + 10x$, respectively. Find the consumer and producer surplus.

**Solution:** From the graph it is clear that $D(x) = 0$ when $b = 50, S(x) = 0$ when $c = 0$ and $D(s) = S(x)$ for $p = 20$. $Cs$ represents the area under the graph of $D(x)$ on the interval $[20, 50]$ and $Ps$ is the area under the graph of $S(x)$ on $[0, 20]$. We have:

$$\begin{aligned} Cs &= \int_{p}^{b} D(x)dx = \int_{20}^{50} (1000 - 20x)dx \\ Cs &= \left| 1000x - \frac{20}{2}x^2 \right|_{20}^{50} = \$ 9000 \end{aligned}$$

And,
$$\begin{aligned} Ps &= \int_{c}^{p} S(x)dx = \int_{0}^{20} (x^2 + 10x)dx \\ Ps &= \left| \frac{1}{3}x^3 + 5x^2 \right|_{0}^{20} = \$ 4666.67 \end{aligned}$$

[Figure F1]

## 3.12.2 Rectilinear Motion

If $f(t)$ is the position function of an object moving in the straight line, then we have:
$\text{velocity} = v(t) = \frac{dS}{dt}$ and $\text{acceleration} = a(t) = \frac{dv}{dt}$

By using the definition of anti-derivative, the quantities $S$ and $v$ can be written as indefinite integrals.
$S(t) = \int v(t)dt$ and $v(t) = \int a(t)dt$

By knowing the initial position $S(0)$ and the initial velocity $v(0)$, we can find specific values of constants of integration.

> **Key Facts**
> 
> (i) For upward motion:
> $S(0) = 0, \quad v(0) > 0, \quad a = g = -98m/s^2 = -32ft/s^2$
> 
> (ii) For downward motion:
> $S(0) = h, \quad v(0) = 0, \quad a = g = 98m/s^2 = 32ft/s^2$

**Example 33:**
The position function of an object that moves on a coordinate line is $S(t) = t^2 - 6t$. Where $S$ is measured in centimetres and $t$ in seconds. Find the distance travelled in the time interval $[3, 9]$.

**Solution:** The velocity function:
$v(t) = \frac{dS}{dt} = 2t - 6$

implies that $v \geq 0$ for $3 \leq t \leq 9$. Hence the distance travelled is:

$$\begin{aligned} S(t) &= \int_{3}^{9} v(t)dt = \int_{3}^{9} (2t - 6)dt \\ &= |t^2 - 6t|_{3}^{9} = (81 - 54) - (9 - 18) = 4 \ cm \end{aligned}$$

## Figures on this page

### Figure F1 — Demand and Supply Graph (right side)
- **Type:** line-graph
- **Caption/Number:** (none printed)
- **Description:** A Cartesian coordinate system with a horizontal x-axis labeled 'b' (ranging from 0 to 50) and a vertical y-axis labeled 'y' (ranging from 0 to 600). A downward-sloping straight line labeled D(x) represents demand, starting from the y-axis and ending at (50, 0). An upward-sloping parabolic curve labeled S(x) represents supply, starting from the origin (0, 0). The two curves intersect at the point (20, 600). The region between the D(x) curve and the x-axis from x=20 to x=50 is shaded pink/magenta and labeled Cs. The region between the S(x) curve and the x-axis from x=0 to x=20 is shaded light blue and labeled Ps. An arrow labeled 'c' points upwards on the left side near the y-axis.
- **Mathematical meaning:** Illustrates consumer surplus (Cs) as the area under the demand curve above the equilibrium price, and producer surplus (Ps) as the area under the supply curve below the equilibrium price.
