---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-4
chapter_folder: Chapter-04-Differential-Equations
chapter_number: 4
chapter_title: DIFFERENTIAL EQUATIONS
page_image: 14
page_printed: 133
section: 4.6 Homogeneous First order Differential Equations; 4.6.1 Homogeneous Function
exercise: "4.2"
content_type: mixed
has_figures: false
figures_count: 0
source_image: ../../../Raw/Mathematics/Unit-04-Differential-Equations/0014.jpg
converted_at: "2026-09-06"
converted_by: "agent-13g (glm-vision)"
notes: "Exercise 4.2 instruction line prints the book typo 'Slove' (preserved). §4.6.1 text prints 'homogenous function of degree n' (typo, preserved) and solution (i) line prints 'is homogeneous function of degree 3/2 ∈ R' (no 'a', as printed). Example 13 (iii) prints '(x,y) = x/2y + 4' without the 'f' — as printed. Exercise items printed side-by-side, kept on shared lines (nbsp separators). No scan-edge cropping, no figures."
---

# Page 14 — Unit 04: Differential Equations

> 📄 Original scan: [0014.jpg](../../../Raw/Mathematics/Unit-04-Differential-Equations/0014.jpg) · printed page 133

## Exercise 4.2

Slove the differential equations by separating the variables.

1. $\frac{dy}{dx} = -\frac{1}{e^{3x}}$ &nbsp;&nbsp; 2. $x\frac{dy}{dx} = 4y$ &nbsp;&nbsp; 3. $\frac{dy}{dx} = \frac{y^3}{x^2}$

4. $\frac{dy}{dx} = e^{2x+3y}$ &nbsp;&nbsp; 5. $\frac{dy}{dx} = \frac{x^2y^2}{1+x}$ &nbsp;&nbsp; 6. $2y(x + 1)dy = xdx$

7. $\frac{dy}{dx} + y^2 \sin x = 0$ &nbsp;&nbsp; 8. $(\sin x + \cos x)dx = \cot y \cos x \, dy$

Solve the initial value problems.

9. $\frac{dy}{dx} = \cos x$ ; $y(0) = 1$ &nbsp;&nbsp; 10. $2\frac{dy}{dx} = 4x e^{-x}$ ; $y(0) = 2$

11. $\frac{dy}{dx} + \left(\frac{1+x}{x}\right)y = 0$ ; $y(1) = 1$ &nbsp;&nbsp; 12. $\frac{dy}{dx} + y \tan 2x = 0$ ; $y(0) = 2$

13. $\frac{dy}{dx} = y^2 + 4$ ; $y(0) = -2$ &nbsp;&nbsp; 14. $(1 - x)dy + y^{-1}dx = 0$ ; $y(0) = 2$

15. $2(y - 1)dy = (3x^2 + 4x + 2)dx$ ; $y(0) = -1$

## 4.6 Homogeneous First order Differential Equations

Before considering a homogeneous differential equation of first order, we need to recall a homogeneous function.

### 4.6.1 Homogeneous Function

If a function $f$ has the property that:
$$f(tx, ty) = t^n f(x, y)$$
where $t \in R^+$, $n \in R$. Then $f$ is said to be a homogenous function of degree $n$.

**Example 13:** Check whether the function

(i) $f(x,y) = \sqrt{x^3 + y^3}$ (ii) $f(x,y) = x^2 + y^2 + 2$ (iii) $(x,y) = \frac{x}{2y} + 4$

are homogeneous or not. If homogeneous then find degree.

**Solution:**

(i) $f(x,y) = \sqrt{x^3 + y^3}$

Replacing $x$ with $tx$ and $y$ with $ty$, we have:

$$\begin{aligned}
f(tx, ty) &= \sqrt{(tx)^3 + (ty)^3} = \sqrt{t^3x^3 + t^3y^3} \\
&= t^{\frac{3}{2}}\sqrt{x^3 + y^3} = t^{\frac{3}{2}}f(x, y)
\end{aligned}$$

$\therefore f(x,y)$ is homogeneous function of degree $\frac{3}{2} \in R$

> **Check Point**
> Check whether the functions are homogeneous or not. If homogeneous then find degree.
> 
> (a) $f(x,y) = x^2 - 3xy + y^2$
> (b) $f(x,y) = x - \sqrt{xy} + 5y$
