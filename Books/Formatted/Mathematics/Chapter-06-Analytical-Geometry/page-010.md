---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-6
chapter_folder: Chapter-06-Analytical-Geometry
chapter_number: 6
chapter_title: ANALYTICAL GEOMETRY
page_image: 10
page_printed: 169
section: null
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Mathematics/Unit-06-Analytical-Geometry/0010.jpg
converted_at: "2026-09-20"
converted_by: "agent-16j (glm-vision)"
notes: ""
---

# Page 10 — Unit 06: Analytical Geometry

> 📄 Original scan: [0010.jpg](../../../Raw/Mathematics/Unit-06-Analytical-Geometry/0010.jpg) · printed page 169

we get:

$$\begin{vmatrix} 6 - 3 & 3 + 2 & 1(6 - 3) - 2(3 + 2) \\ -1 - 6 & 2 - 3 & -3(-1 - 6) + 2(2 - 3) \\ 3 + 1 & -2 - 2 & -6(3 + 1) - 3(-2 - 2) \end{vmatrix} = \begin{vmatrix} 3 & 5 & -7 \\ -7 & -1 & 19 \\ 4 & -4 & -12 \end{vmatrix}$$

Adding $R_3$ in $R_2$, we get:

$$\begin{vmatrix} 3 & 5 & -7 \\ -3 & -5 & 7 \\ 4 & -4 & -12 \end{vmatrix} = \begin{vmatrix} 3 & 5 & -7 \\ 3 & 5 & -7 \\ 4 & -4 & -12 \end{vmatrix} \text{ (Multiplying } R_2 \text{ by } -1\text{)}$$

$$= 0 \text{ (} R_1 \text{ and } R_2 \text{ are identical.)}$$

Hence altitudes of triangle are concurrent.

Now, the determinant of coefficients of the three right bisectors is:

$$\begin{vmatrix} x_3 - x_2 & y_3 - y_2 & -\frac{1}{2}(x_3^2 - x_2^2) - \frac{1}{2}(y_3^2 - y_2^2) \\ x_1 - x_3 & y_1 - y_3 & -\frac{1}{2}(x_1^2 - x_3^2) - \frac{1}{2}(y_1^2 - y_3^2) \\ x_2 - x_1 & y_2 - y_1 & -\frac{1}{2}(x_2^2 - x_1^2) - \frac{1}{2}(y_2^2 - y_1^2) \end{vmatrix}$$

Substituting the values $x_1 = -1, y_1 = 2, x_2 = 3, y_2 = -2, x_3 = 6$ and $y_3 = 3$ in above determinant, we get:

$$\begin{vmatrix} 6 - 3 & 3 + 2 & -\frac{1}{2}(36 - 9) - \frac{1}{2}(9 - 4) \\ -1 - 6 & 2 - 3 & -\frac{1}{2}(1 - 36) - \frac{1}{2}(4 - 9) \\ 3 + 1 & -2 - 2 & -\frac{1}{2}(9 - 1) - \frac{1}{2}(4 - 4) \end{vmatrix} = \begin{vmatrix} 3 & 5 & -16 \\ -7 & -1 & 20 \\ 4 & -4 & -4 \end{vmatrix}$$

Adding $R_3$ in $R_2$, we get:

$$\begin{vmatrix} 3 & 5 & -16 \\ -3 & -5 & 16 \\ 4 & -4 & -4 \end{vmatrix} = \begin{vmatrix} 0 & 0 & 0 \\ -3 & -5 & 16 \\ 4 & -4 & -4 \end{vmatrix} \text{ (Adding } R_2 \text{ in } R_1\text{)}$$

$$= 0$$

Hence right bisectors of triangle are concurrent.

Again, the determinant of coefficients of the three medians is:

$$\begin{vmatrix} \left(\frac{y_2 + y_3}{2} - y_1\right) & -\left(\frac{x_2 + x_3}{2} - x_1\right) & -\left(\frac{y_2 + y_3}{2} - y_1\right)x_1 + \left(\frac{x_2 + x_3}{2} - x_1\right)y_1 \\ \left(\frac{y_1 + y_3}{2} - y_2\right) & -\left(\frac{x_1 + x_3}{2} - x_2\right) & -\left(\frac{y_1 + y_3}{2} - y_2\right)x_2 + \left(\frac{x_1 + x_3}{2} - x_2\right)y_2 \\ \left(\frac{y_1 + y_2}{2} - y_3\right) & -\left(\frac{x_1 + x_2}{2} - x_3\right) & -\left(\frac{y_1 + y_2}{2} - y_3\right)x_3 + \left(\frac{x_1 + x_2}{2} - x_3\right)y_3 \end{vmatrix}$$

Substituting the values $x_1 = -1, y_1 = 2, x_2 = 3, y_2 = -2, x_3 = 6$ and $y_3 = 3$ in above determinant,
we get:
