---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-4
chapter_folder: Chapter-04-Differential-Equations
chapter_number: 4
chapter_title: DIFFERENTIAL EQUATIONS
page_image: 7
page_printed: 126
section: "4.3.1 General Solution of DE; 4.3.2 Particular Solution of DE"
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Mathematics/Unit-04-Differential-Equations/0007.jpg
converted_at: "2026-09-06"
converted_by: "agent-13f (glm-vision)"
notes: "Book grammar typo preserved in Example 5: 'Is the function y = xe^x is a solution...' (doubled 'is' as printed)."
---

# Page 7 — Unit 04: Differential Equations

> 📄 Original scan: [0007.jpg](../../../Raw/Mathematics/Unit-04-Differential-Equations/0007.jpg) · printed page 126

## 4.3.1 General Solution of DE

The solution that contains as many arbitrary constants as the order of the differential equation is called a general solution. It is the relation between the independent variables $x$ and dependent variable $y$ which is obtained after removing the derivatives (by integration) where the relation contains arbitrary constant to denote the order of an equation. In the above example, $x^2 + y^2 = c$ is the general solution.

## 4.3.2 Particular Solution of DE

The solution free from arbitrary constants is called a particular solution.

If particular values are given to the arbitrary constant, the particular solution of the differential equations is obtained. In the above example, $x^2 + y^2 = 4$, $x^2 + y^2 = 9$ etc. are the particular solutions.

> **Key Facts**
>
> *   The solution of a first-order differential equation contains one arbitrary constant whereas the second-order differential equation contains two arbitrary constants.
> *   The general solution of a differential equation represents a family of curves.
> *   The particular solution of a differential equation represents a particular curve for a particular value of constant from the family of curves.

### Example 4:

Verify that $y = \frac{x^4}{16}$ is a solution of the differential equation $\frac{dy}{dx} - xy^{\frac{1}{2}} = 0$.

*   **Solution:** Given solution is:

    $$y = \frac{x^4}{16} \quad \text{(i)}$$

    Differentiating (i) with respect to $x$, we get:

    $$\frac{dy}{dx} = \frac{4x^3}{16} = \frac{x^3}{4}$$

    Substituting for $y$ and $\frac{dy}{dx}$ in the left side of given differential equation:

    $$\frac{dy}{dx} - xy^{\frac{1}{2}} = \frac{x^3}{4} - x \left(\frac{x^4}{16}\right)^{\frac{1}{2}} = \frac{x^3}{4} - x \left(\frac{x^2}{4}\right) = \frac{x^3}{4} - \frac{x^3}{4} = 0$$

    Which is true $\forall x \in R$.

    Thus, $y = \frac{x^4}{16}$ is a solution of the differential equation $\frac{dy}{dx} - xy^{\frac{1}{2}} = 0$.

> **Check Point**
>
> Find the DE corresponding to the equation $y = 3x^2 + c$. Of which type the family of curves does the solution represent?

### Example 5:

Is the function $y = xe^x$ is a solution of the differential equation $y'' - 2y' + y = 0$ on the interval $(-\infty, +\infty)$?

**Solution:** Given solution is:

$$y = xe^x \quad \text{(i)}$$
