---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-2
chapter_folder: Chapter-02-Limit-Continuity-and-Derivative
chapter_number: 2
chapter_title: LIMIT, CONTINUITY AND DERIVATIVE
page_image: 4
page_printed: 46
section: Theorems on Limits; Exercise 2.1
exercise: 2.1
content_type: mixed
has_figures: false
figures_count: 0
source_image: ../../../Raw/Mathematics/Unit-02-Limit-Continuity-and-Derivative/0004.jpg
converted_at: "2026-09-06"
converted_by: "agent-13a (glm-vision)"
notes: "Book prints 'apply theorem v' in Example 3(e) although the theorem list on this page gives iv = quotient, v = power — preserved verbatim."
---

# Page 4 — Unit 02: Limit, Continuity and Derivative

> 📄 Original scan: [0004.jpg](../../../Raw/Mathematics/Unit-02-Limit-Continuity-and-Derivative/0004.jpg) · printed page 46

c. $\lim_{x \to 5}(x^2 - 5x + 6) = 25 - 25 + 6 = 6$

d. $\lim_{x \to -1} \frac{3x-1}{6x+2} = \frac{3(-1)-1}{6(-1)+2} = \frac{-3-1}{-6+2} = 1$

e. $\lim_{x \to 1} \frac{x-1}{x^2+x-2}$, $\lim_{x \to 1} x^2 + x - 2=0$

By simplifying first we can apply theorem v,

$$\begin{aligned}
&= \lim_{x \to 1} \frac{x-1}{x^2+x-2} = \lim_{x \to 1} \frac{(x-1)}{(x-1)(x+2)} \\
&= \lim_{x \to 1} \frac{1}{(x+2)} = \frac{1}{3}
\end{aligned}$$

f. $\lim_{x \to 2}(3x - 2)^6 = (3(2) - 2)^6 = (4)^6 = 4096$

**Theorems on Limits:**

> i. If $c$ is constant, then $\lim_{x \to a} c = c$.
>
> ii. If $c$ is constant, then
> $$\lim_{x \to a} cf(x) = c \lim_{x \to a} f(x)$$
>
> iii. $\lim_{x \to a}[f(x) + g(x)] = \lim_{x \to a} f(x)+\lim_{x \to a} g(x)$
> $= L_1 + L_2$
>
> iv. $\lim_{x \to a} \frac{f(x)}{g(x)} = \frac{\lim_{x \to a} f(x)}{\lim_{x \to a} g(x)} = \frac{L_1}{L_2}, L_2 \neq 0$
>
> v. $\lim_{x \to a}[f(x)]^n = [\lim_{x \to a} f(x)]^n = L^n$

---

**Example 4:** Evaluate: a. $\lim_{x \to 5} \frac{4x+5}{x^2-25}$ b. $\lim_{x \to -8} \frac{x-\sqrt[3]{x}}{2x+10}$

**Solution:**

a.
$$\begin{aligned}
&\lim_{x \to 5} \frac{4x+5}{x^2-25}, &\quad &\lim_{x \to 5} 4x + 5 = 25, \\
&&&\lim_{x \to 5} x^2 - 25 = 0 \\
&\lim_{x \to 5} \frac{4x+5}{x^2-25} = \frac{25}{0}
\end{aligned}$$

We can't simplify to remove zero from the denominator, so limit $x \to 5$ doesn't exist.

b.
$$\begin{aligned}
&\lim_{x \to -8} \frac{x-\sqrt[3]{x}}{2x+10}, &\quad &\lim_{x \to -8} 2x + 10 = -6 \neq 0 \\
&= \lim_{x \to -8} \frac{x-\sqrt[3]{x}}{2x+10} &\quad &(\text{apply theorem iv}) \\
&= \lim_{x \to -8} \frac{x-\sqrt[3]{x}}{2x+10} = \frac{\lim_{x \to -8} x-\sqrt[3]{x}}{\lim_{x \to -8} 2x+10} = \frac{-8 - (-8)^{1/3}}{2(-8) + 10} \\
&= \frac{-8 - ((-2)^3)^{1/3}}{-6} = \frac{-8 + 2}{-6} = 1
\end{aligned}$$

---

## Exercise 2.1

1. Use a graph to find the given limit, if it exists.

&nbsp;&nbsp;&nbsp;&nbsp;a. $\lim_{x \to 5} \sqrt{x-1}$

&nbsp;&nbsp;&nbsp;&nbsp;b. $\lim_{x \to 1} \frac{x^2-1}{x-1}$

&nbsp;&nbsp;&nbsp;&nbsp;c. $\lim_{x \to 0} \frac{x^2-3x}{x}$

&nbsp;&nbsp;&nbsp;&nbsp;d. $\lim_{x \to 0} \frac{|x|}{x}$

&nbsp;&nbsp;&nbsp;&nbsp;e. $\lim_{x \to 2} f(x)$, where $f(x) = \begin{cases} x & x < 2 \\ x+1 & x \geq 2 \end{cases}$

&nbsp;&nbsp;&nbsp;&nbsp;f. $\lim_{x \to 0} f(x)$, where $f(x) = \begin{cases} x^2 & x < 0 \\ 2 & x = 0 \\ \sqrt{x}-1 & x > 0 \end{cases}$

&nbsp;&nbsp;&nbsp;&nbsp;g. $\lim_{x \to 0} \frac{1-\cos x}{x^2}$
