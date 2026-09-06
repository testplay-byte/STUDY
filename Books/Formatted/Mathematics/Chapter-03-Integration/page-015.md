---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-3
chapter_folder: Chapter-03-Integration
chapter_number: 3
chapter_title: INTEGRATION
page_image: 15
page_printed: 103
section: 3.5 Integration by Partial Fraction
exercise: null
content_type: theory
has_figures: false
figures_count: 0
source_image: ../../../Raw/Mathematics/Unit-03-Integration/0015.jpg
converted_at: "2026-09-06"
converted_by: "agent-13d (glm-vision)"
notes: "Book typo preserved: 'repectively' (Example 17 solution). Check Point sidebar box (Evaluate \\int (2x+1)/((x-1)(x+3)) dx) transcribed as blockquote at its scan position."
---

# Page 15 — Unit 03: Integration

> 📄 Original scan: [0015.jpg](../../../Raw/Mathematics/Unit-03-Integration/0015.jpg) · printed page 103

## 3.5 Integration by Partial Fraction

When the terms in the sum:

$$\frac{3}{x+4} + \frac{4}{x+2} \quad \text{(i)}$$

are combined by means of a common denominator, we obtain a single rational expression:

$$\frac{7x + 22}{(x+4)(x+2)} \quad \text{(ii)}$$

Suppose that we are faced with the problem of evaluating the integral:

$$\int \frac{7x + 22}{(x+4)(x+2)} dx$$

From (i) and (ii), we have:

$$\begin{aligned}
\int \frac{7x + 22}{(x+4)(x+2)} dx &= \int \left[ \frac{3}{(x+4)} + \frac{4}{(x+2)} \right] dx = \int \frac{3}{(x+4)} dx + \int \frac{4}{(x+2)} dx \\
&= 3 \int \frac{1}{(x+4)} dx + 4 \int \frac{1}{(x+2)} dx = 3 \ln(x + 4) + 4 \ln(x + 2) + c
\end{aligned}$$

This example illustrates a procedure for integrating certain rational fractions $\frac{P(x)}{Q(x)}$, where the degree of $P(x)$ is less than the degree of $Q(x)$. This method, known as partial fractions consists of decomposing such rational fractions into simplest component fractions and then evaluating the integral term by term.

**Example 17:** Evaluate: $\displaystyle \int \frac{x^3 - 2x}{x^2 + 3x + 2} dx$

**Solution:** We observe that degree of numerator is greater than that of denominator.

$$\therefore \int \frac{x^3 - 2x}{x^2 + 3x + 2} dx = \int \left[ x - 3 + \frac{5x + 6}{x^2 + 3x + 2} \right] dx \quad \text{(i)}$$

> **Check Point**
> Evaluate $\int \frac{2x+1}{(x-1)(x+3)}\,dx$

Now, $\displaystyle \frac{5x + 6}{x^2 + 3x + 2} = \frac{5x + 6}{(x+1)(x+2)} = \frac{A}{x+1} + \frac{B}{x+2}$

By equating numerator, we get:

$$5x + 6 = A(x + 2) + B(x + 1) \quad \text{(ii)}$$

If we set $x = -2$ and $x = -1$, we get $B = 4$ and $A = 1$, repectively.

$$\begin{aligned}
\therefore \int \frac{x^3 - 2x}{x^2 + 3x + 2} dx &= \int \left[ x - 3 + \frac{1}{x+1} + \frac{4}{x+2} \right] dx = \int x \, dx - 3 \int dx + \int \frac{1}{x+1} dx + 4 \int \frac{1}{x+2} dx \\
&= \frac{x^2}{2} - 3x + ln(x + 1) + 4 \ln(x + 2) + c
\end{aligned}$$

**Example 18:** Evaluate: $\displaystyle \int \frac{x^2 + 2x + 4}{(x+1)^3} dx$

**Solution:** Given fraction can be written as:

$$\frac{x^2 + 2x + 4}{(x+1)^3} = \frac{A}{x+1} + \frac{B}{(x+1)^2} + \frac{C}{(x+1)^3}$$
