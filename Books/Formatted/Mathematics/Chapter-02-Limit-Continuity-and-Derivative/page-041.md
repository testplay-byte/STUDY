---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-2
chapter_folder: Chapter-02-Limit-Continuity-and-Derivative
chapter_number: 2
chapter_title: LIMIT, CONTINUITY AND DERIVATIVE
page_image: 41
page_printed: 83
section: "2.22 Applications of Derivatives"
exercise: null
content_type: worked-examples
has_figures: true
figures_count: 1
source_image: ../../../Raw/Mathematics/Unit-02-Limit-Continuity-and-Derivative/0041.jpg
converted_at: "2026-09-06"
converted_by: "agent-13c3 (glm-vision)"
notes: "No section heading printed — §2.22 (heading p.81) in force; worked Examples 52-53 (optimization). Book typos/misprints preserved verbatim: 'The function p(x) defined any for 0 ≤ x ≤ 15', 'Thus, any critical value is x = 5', 'Testing the end points of the interval reveal ... , is the minimum value', 'A rectangular plot of land that contain 1500 m²', 'divided into equal portions by any additional fence parallel to two sides', 'Hence x = 15√10 m, is required minimum amount of fencing', L''(x) = 13500/x³ (correct value 9000/x³), and L(15√10) = 2(15√10) + 4500/(15√10) = 15√10 (arithmetic misprint; equals 60√10). Example 52 jumps straight from p'(x) factorization to the critical value — as printed. No edge crops, no sidebar boxes."
---

# Page 41 — Unit 02: Limit, Continuity and Derivative

> 📄 Original scan: [0041.jpg](../../../Raw/Mathematics/Unit-02-Limit-Continuity-and-Derivative/0041.jpg) · printed page 83

**Example 52:** Find two non-negative numbers whose sum is 15 such that the product of one with the square of other is a maximum.

**Solution:** Let $x$ and $y$ denote the two non-negative numbers (i.e. $x \geq 0$ and $y \geq 0$). It is given that:
$$x + y = 15 \ldots\ldots\text{(i)}$$

Let p denote the product: $p = x.y^2$ (Product = one number. square of the other)

We can use $y = 15 - x$ to express p in terms of $x$: $p(x) = x(15 - x)^2$

The function $p(x)$ defined any for $0 \leq x \leq 15$.

If $x > 15$, then $y = 15 - x$ would be negative.

$p'(x) = x.2(15 - x)(-1) + (15 - x)^2 = (15 - x)(15 - 3x)$

Thus, any critical value is $x = 5$.

Testing the end points of the interval reveal $p(0) = p(15) = 0$, is the minimum value of the product. Hence, $p(5) = 5(10)^2 = 500$ must be the maximum value. The two non-negative numbers are 5 and 10.

**Example 53:** A rectangular plot of land that contain 1500 $m^2$ will be fenced and divided into equal portions by any additional fence parallel to two sides. Find the dimensions of the land that require the least amount of fencing.

[Figure F1]

**Solution:** Let us introduce variable $x$ and $y$ so that $xy = 1500$. Then the function we wish to minimize is the sum of the lengths of the five portions of the fence.

$$L = 2x + 3y$$

But $y = \frac{1500}{x}$, we have

$$L(x) = 2x + \frac{4500}{x}$$

$$L'(x) = 2 - \frac{4500}{x^2}$$

For critical value, $L'(x) = 0$

$$x^2 = 2250$$

$$x = 15\sqrt{10}$$

For $2^{\text{nd}}$ derivative: $L''(x) = \frac{13500}{x^3}$

When $x = 15\sqrt{10}$

$$L''(15\sqrt{10}) > 0$$

Hence $x = 15\sqrt{10}m$, is required minimum amount of fencing.

So,

$$L(15\sqrt{10}) = 2(15\sqrt{10}) + \frac{4500}{15\sqrt{10}} = 15\sqrt{10}$$

$$xy = 1500$$

$$y = \frac{1500}{x} = \frac{1500}{15\sqrt{10}}$$

$$y = 10\sqrt{10}m$$

Dimension of land:

$$xy = 15\sqrt{10} \times 10\sqrt{10}$$

## Figures on this page

### Figure F1 — rectangular plot diagram (middle right)
- **Type:** geometric-diagram
- **Caption/Number:** (none printed)
- **Description:** A diagram showing a rectangle with a vertical dashed line dividing it into two equal parts. The total horizontal length at the bottom is labeled '$x$', and the height on both the left and right sides is labeled '$y$'. The internal dividing line is also labeled '$y$'. Arrows indicate the full width ($x$) and the heights ($y$).
- **Mathematical meaning:** Illustrates the fencing problem where a rectangular area of fixed size is divided into two equal portions by an additional fence parallel to one side, resulting in a total fence length of $L = 2x + 3y$.
