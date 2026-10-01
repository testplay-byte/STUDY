---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-3
chapter_folder: Chapter-10-Random-Variable-and-Probability-Distributions
chapter_number: 10
chapter_title: Random Variable and Probability Distributions
page_image: 21
page_printed: 81
section: null
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-10-Random-Variable-and-Probability-Distributions/0021.jpg
converted_at: "2026-10-01"
converted_by: "agent-S3c (glm-vision)"
notes: "Offset check: printed p.81 = image 21 + 60 (header folio, top-right). Example 10.26 ends complete with = 0.5."
---

# Page 21 — Random Variable and Probability Distributions (Chapter 10)

> 📄 Original scan: [0021.jpg](../../../Raw/Statistics/Chapter-10-Random-Variable-and-Probability-Distributions/0021.jpg) · printed page 81

**Example 10.25.**

(a) A continuous random variable X has a density function $f(x) = 2x$ when $0 \leq x \leq 1$ and zero otherwise. Find (i) $P(X < \frac{1}{2})$ (ii) $P(\frac{1}{4} < X < \frac{1}{2})$

(b) If $f(x)$ has probability density $kx^2$ for $0 < x < 1$, determine k and find the probability that $1/3 < X < 1/2$.

**Solution:**

(a) $f(x) = 2x$ for $0 \leq x \leq 1$,  
$\quad\quad = 0$, otherwise.

(i) $\quad P(X < \frac{1}{2}) = \int\limits_{0}^{1/2} f(x)\,dx = \int\limits_{0}^{1/2} 2x\,dx = 2 \left[ \frac{x^2}{2} \right]_{0}^{1/2} = \left[ (\frac{1}{2})^2 - 0 \right] = \frac{1}{4}$

(ii) $\quad P(\frac{1}{4} < X < \frac{1}{2}) = \int\limits_{1/4}^{1/2} f(x)\,dx = \int\limits_{1/4}^{1/2} 2x\,dx = 2 \left[ \frac{x^2}{2} \right]_{1/4}^{1/2} = \left[ (\frac{1}{2})^2 - (\frac{1}{4})^2 \right] = \left[ \frac{1}{4} - \frac{1}{16} \right] = \frac{3}{16}$

(b) $f(x)$ will be a probability density function, if $\int\limits_{-\infty}^{\infty} f(x)\,dx = 1$ that is  

$$1 = \int\limits_{0}^{1} f(x)\,dx = \int\limits_{0}^{1} kx^2\,dx = k \left[ \frac{x^3}{3} \right]_{0}^{1} = k \left[ \frac{1}{3} - 0 \right] = \frac{k}{3}, \text{ so that } k=3.$$

Hence the probability density function $f(x) = 3x^2$ for $0 < x < 1$  
Now  

$$P(\frac{1}{3} < X < \frac{1}{2}) = \int\limits_{1/3}^{1/2} f(x)\,dx = \int\limits_{1/3}^{1/2} 3x^2\,dx = 3 \left[ \frac{x^3}{3} \right]_{1/3}^{1/2} = \left[ (\frac{1}{2})^3 - (\frac{1}{3})^3 \right] = \left[ \frac{1}{8} - \frac{1}{27} \right] = \frac{19}{216}$$

**Example 10.26.**

$f(x) = \frac{4-x}{4}$ when $1 \leq x \leq 3$. Is $f(x)$ a probability density function?  
Also find $P(1.5 < X < 2.5)$, $P(1.5 \leq X < 2.5)$, $P(1.5 < X \leq 2.5)$, $P(1.5 \leq X \leq 2.5)$.

**Solution:** $f(x) = \frac{4-x}{4}$ when $1 \leq x \leq 3$.  

$f(x)$ will be a probability density function if $\int\limits_{-\infty}^{\infty} f(x)\,dx = 1$. Therefore  

$$\begin{aligned}
\int\limits_{-\infty}^{\infty} f(x)\,dx &= \int\limits_{1}^{3} \frac{4-x}{4}\,dx = \frac{1}{4} \int\limits_{1}^{3} (4-x)\,dx = \frac{1}{4} \left[ 4x - \frac{x^2}{2} \right]_{1}^{3} \\
&= \frac{1}{4} \left[ 4(3) - \frac{(3)^2}{2} - 4(1) + \frac{(1)^2}{2} \right] = \frac{1}{4} \left[ 12 - \frac{9}{2} - 4 + \frac{1}{2} \right] = \frac{1}{4} \left[ 8 - \frac{8}{2} \right] = \frac{1}{4} [4] = 1
\end{aligned}$$

Also $P(1.5 < X < 2.5) = P(1.5 \leq X < 2.5) = P(1.5 < X \leq 2.5) = P(1.5 \leq X \leq 2.5)$  

$$\begin{aligned}
&= \int\limits_{1.5}^{2.5} f(x)\,dx = \frac{1}{4} \int\limits_{1.5}^{2.5} (4-x)\,dx = \frac{1}{4} \left[ 4x - \frac{x^2}{2} \right]_{1.5}^{2.5} = \frac{1}{4} \left[ 4(2.5) - \frac{(2.5)^2}{2} - 4(1.5) + \frac{(1.5)^2}{2} \right] \\
&= \frac{1}{4} [\, 10 - 3.125 - 6 + 1.125 \,] = \frac{1}{4} [\, 2 \,] = 0.5
\end{aligned}$$
