---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-6
chapter_folder: Chapter-06-Analytical-Geometry
chapter_number: 6
chapter_title: ANALYTICAL GEOMETRY
page_image: 3
page_printed: 162
section: null
exercise: null
content_type: mixed
has_figures: false
figures_count: 0
source_image: ../../../Raw/Mathematics/Unit-06-Analytical-Geometry/0003.jpg
converted_at: "2026-09-20"
converted_by: "agent-16a (glm-vision)"
notes: "No printed section heading on the page (continues the concurrency treatment of 6.2; verified on zoom). Book typo preserved: 'system of homogenous equations'. Key Facts sidebar box (top right) contains a circle graphic with 16 lines through its centre — described inside the blockquote, not F-blocked, per sidebar-box rule. Footer ribbon 162 pixel-verified. No edge crops."
---

# Page 3 — Unit 06: Analytical Geometry

> 📄 Original scan: [0003.jpg](../../../Raw/Mathematics/Unit-06-Analytical-Geometry/0003.jpg) · printed page 162

Three lines are concurrent if the point of intersection of two lines, lies on the third line (i.e., satisfies the equation of the third line)

To check the concurrency of three lines, we use the following methods.

> **Key Facts**
>
> *   The diameters of a circle are concurrent at the center of the circle. *(Accompanied by a black-and-white graphic of a circle with sixteen lines drawn through its center.)*

**(a) Determinant Method**

Consider three straight lines whose equations are:

$$\begin{aligned} a_1x + b_1y + c_1 &= 0 \quad \ldots \ldots \ldots \ldots (1) \\ a_2x + b_2y + c_2 &= 0 \quad \ldots \ldots \ldots \ldots (2) \\ a_3x + b_3y + c_3 &= 0 \quad \ldots \ldots \ldots \ldots (3) \end{aligned}$$

The system of homogenous equations (1)-(3) can be written in matrix form as:

$$\begin{bmatrix} a_1 & b_1 & c_1 \\ a_2 & b_2 & c_2 \\ a_3 & b_3 & c_3 \end{bmatrix} \begin{bmatrix} x \\ y \\ 1 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix} \ldots \ldots \ldots \ldots (4)$$

If the lines (1) to (3) are concurrent then they must intersect at a point $O(x, y)$ which can be found by solving equations (1) to (3) simultaneously. The system (4) has a non-trivial solution if the determinant of coefficients of the three lines is zero. i.e.,

$$\begin{vmatrix} a_1 & b_1 & c_1 \\ a_2 & b_2 & c_2 \\ a_3 & b_3 & c_3 \end{vmatrix} = 0$$

Which is the condition of concurrency for the three lines. Thus, if the determinant of the coefficients of the given lines is 0, then the lines are concurrent.

**Example 1:**

Find the value of k if the lines:
$3x+y-3=0$, $5x+ky-3=0$, $3x-y-2=0$
are concurrent.

**Solution:**

The determinant of coefficients of the given lines is:

$$D = \begin{vmatrix} 3 & 1 & -3 \\ 5 & k & -3 \\ 3 & -1 & -2 \end{vmatrix}$$

By solving the determinant, we get:

$$\begin{aligned} D &= 3 \begin{vmatrix} k & -3 \\ -1 & -2 \end{vmatrix} - 1 \begin{vmatrix} 5 & -3 \\ 3 & -2 \end{vmatrix} + (-3) \begin{vmatrix} 5 & k \\ 3 & -1 \end{vmatrix} = 3(-2k - 3) - 1(-10 + 9) - 3(-5 - 3k) \\ &= -6k - 9 + 1 + 15 + 9k = 3k + 7 \end{aligned}$$

As, the three lines are concurrent, therefore:

$$3k + 7 = 0 \Rightarrow 3k = -7 \Rightarrow k = \frac{-7}{3}$$

> **Check Point**
>
> *   Check whether the lines:
>     $3x+4y-7=0$,
>     $2x-3y+5=0$,
>     $3x-5y+8=0$
>     are concurrent or not.
