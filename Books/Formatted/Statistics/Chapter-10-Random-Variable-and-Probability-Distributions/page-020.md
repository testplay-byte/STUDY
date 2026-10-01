---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-3
chapter_folder: Chapter-10-Random-Variable-and-Probability-Distributions
chapter_number: 10
chapter_title: Random Variable and Probability Distributions
page_image: 20
page_printed: 80
section: null
exercise: null
content_type: worked-examples
has_figures: true
figures_count: 1
source_image: ../../../Raw/Statistics/Chapter-10-Random-Variable-and-Probability-Distributions/0020.jpg
converted_at: "2026-10-01"
converted_by: "agent-S3c (glm-vision)"
notes: "Offset check: printed p.80 = image 20 + 60 (header folio, top-left). Continuation: opens with the trapezoid calculation completing Example 10.23 (b)(ii) from p.79, then Example 10.24 runs complete (parts a-c). Figure - 6(c) belongs to the Example 10.23 discussion. Caption prints with spaced hyphen 'Figure - 6(c)'."
---

# Page 20 — Random Variable and Probability Distributions (Chapter 10)

> 📄 Original scan: [0020.jpg](../../../Raw/Statistics/Chapter-10-Random-Variable-and-Probability-Distributions/0020.jpg) · printed page 80

$$\begin{aligned} \text{Average Height} &= \frac{\text{Sum of parallel sides}}{2} \\ &= \frac{f\left(\frac{3}{2}\right)+f\left(\frac{1}{2}\right)}{2} \\ &= \frac{3/4 + 1/4}{2}= \frac{1}{2} \end{aligned}$$

$$\text{Base } = \frac{3}{2} - \frac{1}{2} = 1$$

$$P\left(\frac{1}{2}<X<\frac{3}{2}\right) = \text{ Area of Trapezoid }=1/2\times 1 = 1/2$$

[Figure F1]

**Example 10.24.**

A continuous random variable X which can assume values between x = 2 and 8 inclusive, has a density function given by c ( x + 3 ) where c is a constant.

(a) Calculate c. (b) P(3 < X < 5) (c) P( X $\geq$ 4 ).

**Solution:**

f( x ) = c ( x + 3 ) for $2 \le x \le 8$

(a) f( x ) will be a density function if (i) f( x ) $\ge$ 0 for every x and (ii) $\int\limits_{-\infty}^{\infty} f(x) dx = 1$. If c $\ge$ 0, f( x ) is clearly $\ge$ 0 for every x in the given interval. Hence for f( x ) to be a density function, we have

$$\begin{aligned} 1 &= \int\limits_{-\infty}^{\infty} f(x) dx=\int\limits_{2}^{8} c(x+3)dx=c\left[\frac{x^2}{2}+3x\right]_2^8 \\ &= c\left[\frac{(8)^2}{2}+3(8)-\frac{(2)^2}{2}-3(2)\right]=c[32+24-2-6]=c[48] \text{ so that } c = 1/48 \end{aligned}$$

Therefore, f( x ) = $\frac{1}{48}$ ( x + 3 ) for $2 \le x \le 8$

(b) $$\begin{aligned} P( 3 < X < 5 ) &= \int\limits_{3}^{5}\frac{1}{48}(x+3)\,dx = \frac{1}{48}\left[\frac{x^2}{2}+3x\right]_3^5 = \frac{1}{48}\left[\frac{(5)^2}{2}+3(5)-\frac{(3)^2}{2}-3(3)\right] \\ &= \frac{1}{48}\left[\frac{25}{2}+15-\frac{9}{2}-9\right]=\frac{1}{48}[14]=\frac{7}{24} \end{aligned}$$

(c) $$\begin{aligned} P( X \geq 4 ) &= \int\limits_{4}^{8}\frac{1}{48}(x+3)\,dx = \frac{1}{48}\left[\frac{x^2}{2}+3x\right]_4^8 = \frac{1}{48}\left[\frac{(8)^2}{2}+3(8)-\frac{(4)^2}{2}-3(4)\right] \\ &= \frac{1}{48}[32+24-8-12]=\frac{1}{48}[36]=\frac{3}{4} \end{aligned}$$

## Figures on this page

### Figure F1 — Graph of f(x) (top right)
- **Type:** line-graph
- **Caption/Number:** Figure - 6(c)
- **Description:** A Cartesian coordinate system with horizontal axis labeled 'x' and vertical axis labeled 'Y' and 'f(x)'. A straight line starts at the origin (0,0) and slopes upward to the right. The x-axis is marked with ticks at 0, 1/2, 3/2, and 2. The y-axis shows corresponding function values, with labels '1/4' at x=1/2 and '3/4' at x=3/2. Vertical lines drop from the curve at x=1/2 and x=3/2 to the x-axis.
- **Mathematical meaning:** Third panel of Figure - 6: the shaded trapezoid under $f(x) = \frac{1}{2}x$ between $x = \frac{1}{2}$ and $x = \frac{3}{2}$ has area $\frac{1}{2}$, the value of $P\left(\frac{1}{2} < X < \frac{3}{2}\right)$.
