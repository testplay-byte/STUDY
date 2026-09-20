---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-6
chapter_folder: Chapter-06-Analytical-Geometry
chapter_number: 6
chapter_title: ANALYTICAL GEOMETRY
page_image: 11
page_printed: 170
section: 6.4 Area of Triangular Region
exercise: null
content_type: mixed
has_figures: true
figures_count: 1
source_image: ../../../Raw/Mathematics/Unit-06-Analytical-Geometry/0011.jpg
converted_at: "2026-09-20"
converted_by: "agent-16j (glm-vision)"
notes: "End of Example 3 medians determinant + start of section 6.4. BOOK MISPRINTS preserved verbatim (zoom-verified): in the decimal medians matrix row 2 prints third entry '-13.5 + 1' (= -12.5; true value -14.5) and row 3 prints '18 - 15' (= 3; true value +33); after 'Adding R3 in R2, we get:' the result matrix prints rows 2-3 as (-3, -5, 16) / (4, -4, -4) — stale rows copied from the preceding right-bisector determinant on p.169; zero first row still consistent with R1 + R2 of the left matrix. Equation number printed with 4 dots, normalized to \ldots\ldots\ldots (1)."
---

# Page 11 — Unit 06: Analytical Geometry

> 📄 Original scan: [0011.jpg](../../../Raw/Mathematics/Unit-06-Analytical-Geometry/0011.jpg) · printed page 170

we get:
$$\begin{vmatrix} \left(\frac{-2+3}{2}-2\right) & -\left(\frac{3+6}{2}+1\right) & -\left(\frac{-2+3}{2}-2\right)(-1)+\left(\frac{3+6}{2}+1\right)(2) \\ \left(\frac{2+3}{2}+2\right) & -\left(\frac{-1+6}{2}-3\right) & -\left(\frac{2+3}{2}+2\right)(3)+\left(\frac{-1+6}{2}-3\right)(-2) \\ \left(\frac{2-2}{2}-3\right) & -\left(\frac{-1+3}{2}-6\right) & -\left(\frac{2-2}{2}-3\right)(6)+\left(\frac{-1+3}{2}-6\right)(3) \end{vmatrix}$$

$$\begin{vmatrix} -1.5 & -5.5 & -1.5+11 \\ 4.5 & 0.5 & -13.5+1 \\ -3 & 5 & 18-15 \end{vmatrix} = \begin{vmatrix} -1.5 & -5.5 & 9.5 \\ 4.5 & 0.5 & -12.5 \\ -3 & 5 & 3 \end{vmatrix}$$

Adding $R_3$ in $R_2$, we get:

$$\begin{vmatrix} -1.5 & -5.5 & 9.5 \\ 1.5 & 5.5 & -9.5 \\ -3 & 5 & 3 \end{vmatrix} = \begin{vmatrix} 0 & 0 & 0 \\ -3 & -5 & 16 \\ 4 & -4 & -4 \end{vmatrix} \text{ (Adding } R_2 \text{ in } R_1)$$
$$= 0$$

Hence medians of triangle are concurrent.

## 6.4 Area of Triangular Region

The area of a plane figure is the space covered by it.

Consider $\Delta ABC$ as given in the adjoining figure with vertices $A(x_1, y_1), B(x_2, y_2)$, and $C(x_3, y_3)$.

[Figure F1]

In the figure, we have drawn perpendiculars BD, AE and CF from the vertices of the triangle to the x-axis.

Notice that three trapeziums are formed: ABDE, AEFC and BCFD.

We can express the area of triangle ABC in terms of the areas of these three trapeziums as follows.

Area of $\Delta ABC =$ Area of Trap.ABDE + Area of Trap.AEFC – Area of Trap.BCFD $\ldots\ldots\ldots$ (1)

Now, Area of Trap.ABDE $= \frac{1}{2} \times (\text{BD + AE}) \times \text{DE}$
$$= \frac{1}{2} \times (y_2 + y_1) \times (x_1 - x_2)$$

Area of Trap.AEFC $= \frac{1}{2} \times (\text{AE + CF}) \times \text{EF}$
$$= \frac{1}{2} \times (y_1 + y_3) \times (x_3 - x_1)$$

Area of Trap.BCFD $= \frac{1}{2} \times (\text{BD + CF}) \times \text{DF}$
$$= \frac{1}{2} \times (y_2 + y_3) \times (x_3 - x_2)$$

> **Recall**
> 
> Area of trapezium is:
> $A = \frac{1}{2} \times (\text{sum of lengths of parallel sides}) \times \text{distance between parallel sides (altitude)}$

## Figures on this page

### Figure F1 — Triangle ABC with perpendiculars to x-axis (right of the 6.4 intro)
- **Type:** geometric-diagram
- **Caption/Number:** (none printed)
- **Description:** A coordinate plane showing a triangle ABC with vertices labeled $A(x_1, y_1)$ at the top, $B(x_2, y_2)$ at the bottom left, and $C(x_3, y_3)$ at the bottom right. Perpendicular lines drop from each vertex to the x-axis at points D (from B), E (from A), and F (from C). The region ABDE is shaded light blue, and the region BCFD is shaded green.
- **Mathematical meaning:** Illustrates the derivation of the area of a triangle using coordinates by decomposing it into the sum/difference of trapezoidal areas formed between the triangle's sides and the x-axis.
