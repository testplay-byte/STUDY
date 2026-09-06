---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-4
chapter_folder: Chapter-04-Differential-Equations
chapter_number: 4
chapter_title: DIFFERENTIAL EQUATIONS
page_image: 8
page_printed: 127
section: "4.4 Formation of Differential Equation"
exercise: null
content_type: theory
has_figures: false
figures_count: 0
source_image: ../../../Raw/Mathematics/Unit-04-Differential-Equations/0008.jpg
converted_at: "2026-09-06"
converted_by: "agent-13f (glm-vision)"
notes: ""
---

# Page 8 — Unit 04: Differential Equations

> 📄 Original scan: [0008.jpg](../../../Raw/Mathematics/Unit-04-Differential-Equations/0008.jpg) · printed page 127

Differentiating (i) with respect to $x$, we get:
$$y' = xe^x + e^x \quad \text{(ii)}$$

Differentiating (ii) with respect to $x$, we get:
$$y'' = xe^x + 2e^x \quad \text{(iii)}$$

Substituting the values in the left side of given differential equation:
$$\begin{aligned}
y'' - 2y' + y &= xe^x + 2e^x - 2(xe^x + e^x) + xe^x \\
&= xe^x + 2e^x - 2xe^x - 2e^x + xe^x = 0
\end{aligned}$$

Which is true $\forall x \in R$. Thus, $y = xe^x$ is a solution of the differential equation $y'' - 2y' + y = 0$ on the interval $(-\infty, +\infty)$.

**Note:** In examples (4) and (5), we notice that the constant function $y = 0$ for $(-\infty < x < +\infty)$ also satisfies the given differential equation.

> **Key Facts**
> * A solution of differential equation that is identically zero on any interval is often called a trivial solution.
> * Every differential equation that we write necessarily has a solution either real or imaginary. For example, the differential equation $(y')^2 + 1 = 0$ has no real solution.

## 4.4 Formation of Differential Equation

We can form a differential equation by eliminating the constants appearing in an algebraic equation; the solution of differential equation.

Let us find the differential equation corresponding to the equation $y = e^x$.

Now, $y = e^x$ gives $y' = e^x$ and solving both equations, we get:
$$y' - y = 0,$$
which is a differential equation.

### Example 6:

Find the DE corresponding to the equation $y = a\cos x + b\sin x$

**Solution:** Given that
$$\begin{aligned}
y &= a\cos x + b\sin x \\
y' &= -a\sin x + b\cos x \\
y'' &= -a\cos x - b\sin x = -(a\cos x + b\sin x)
\end{aligned}$$

$y'' = -y$ or $y'' + y = 0$ is required differential equation.

**Note:** $y = a\cos x + b\sin x$ is a solution of differential equation $y'' + y = 0$.
