---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-3
chapter_folder: Chapter-03-Integration
chapter_number: 3
chapter_title: INTEGRATION
page_image: 16
page_printed: 104
section: null
exercise: "3.5"
content_type: mixed
has_figures: false
figures_count: 0
source_image: ../../../Raw/Mathematics/Unit-03-Integration/0016.jpg
converted_at: "2026-09-06"
converted_by: "agent-13d2 (glm-vision)"
notes: "Book typos preserved verbatim: 'we gat:' printed where 'we get' expected (Example 18); equating-coefficients line of Example 19 prints 'A + B, 2B + C = 5, A + 2C = 3' (no '= 3' after A + B); Example 19 final line prints ln(x + 1) where ln(x + 2) would be expected. Top of page continues Example 18 solution from printed p.103. Exercise 3.5 (Q.1-12) starts and completes on this page. No scan-edge crops; no sidebar boxes; no figures."
---

# Page 16 — Unit 03: Integration

> 📄 Original scan: [0016.jpg](../../../Raw/Mathematics/Unit-03-Integration/0016.jpg) · printed page 104

By equating numerator, we get:
$$x^2 + 2x + 4 = A(x + 1)^2 + B(x + 1) + C$$
$$x^2 + 2x + 4 = Ax^2 + (2A + B)x + (A + B + C)$$

Comparing coefficients of like powers of $x$ from both sides, we gat:
$$A = 1, 2A + B = 2 \text{ and } A + B + C = 4$$

Solving the equations, we have:
$$A = 1, B = 0 \text{ and } C = 3$$

$$\begin{aligned}
\therefore \int \frac{x^2+2x+4}{(x+1)^3} dx &= \int \left[ \frac{1}{x+1} + \frac{0}{(x+1)^2} + \frac{3}{(x+1)^3} \right] dx = \int \frac{1}{x+1} dx + 3 \int \frac{1}{(x+1)^3} dx \\
&= \int \frac{1}{x+1} dx + 3 \int (x + 1)^{-3} dx = ln(x + 1) - \frac{3}{2}(x + 1)^{-2} + c \\
&= ln(x + 1) - \frac{3}{2(x+1)^2} + c
\end{aligned}$$

**Example 19:** Evaluate: $\int \frac{3x^2+5x+3}{(x+2)(x^2+1)} dx$

**Solution:** Given fraction can be written as:
$$\frac{3x^2+5x+3}{(x+2)(x^2+1)} = \frac{A}{x+2} + \frac{Bx+C}{x^2+1}$$
$$3x^2 + 5x + 3 = A(x^2 + 1) + (Bx + C)(x + 2)$$
$$3x^2 + 5x + 3 = (A + B)x^2 + (2B + C)x + (A + 2C)$$

Equating coefficients:
$$A + B, \quad 2B + C = 5, \quad A + 2C = 3$$

Solving the equations, we have:
$$A = 1, B = 2, C = 1$$

$$\begin{aligned}
\therefore \int \frac{3x^2+5x+3}{(x+2)(x^2+1)} dx &= \int \left( \frac{1}{x+2} + \frac{2x+1}{x^2+1} \right) dx \\
&= \int \frac{1}{x+2} dx + \int \frac{2x}{x^2+1} dx + \int \frac{1}{x^2+1} dx \\
&= ln(x + 1) + ln(x^2 + 1) + tan^{-1}x + c
\end{aligned}$$

## Exercise 3.5

Evaluate the integrals using partial fractions.

1. $\displaystyle \int \frac{3x+7}{(x+2)(x+3)} dx$
2. $\displaystyle \int \frac{4x+9}{x^2+x-12} dx$
3. $\displaystyle \int \frac{21-8x}{x^2+x-6} dx$
4. $\displaystyle \int \frac{3x+7}{(x+2)^2} dx$
5. $\displaystyle \int \frac{5x^2-5x+2}{(x+1)(x-1)^2} dx$
6. $\displaystyle \int \frac{9x^2+3x+29}{(x+1)(x^2+4)} dx$
7. $\displaystyle \int \frac{7x^2+7x+4}{(2x+1)(x^2+x+1)} dx$
8. $\displaystyle \int \frac{x^3+4x^2+9x+14}{x^2+4x+3} dx$
9. $\displaystyle \int \frac{1}{x^2-9} dx$
10. $\displaystyle \int \frac{1}{x^3+2x^2+x} dx$
11. $\displaystyle \int \frac{e^x}{(e^x+1)^2(e^x-2)} dx$
12. $\displaystyle \int \frac{x}{(x+1)^2(x^2+1)} dx$
