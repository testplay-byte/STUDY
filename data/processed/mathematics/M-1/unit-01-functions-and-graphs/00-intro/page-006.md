---
book: M-1
book_title: null
page_image: 6
page_printed: 12
chapter: 1
chapter_title: FUNCTIONS AND GRAPHS
section: "1.3 Inverse Function"
exercise: null
content_type: theory
has_figures: true
figures_count: 1
source_image: ../../../../../../data/raw/mathematics/M-1/0006.jpg
converted_at: "2026-09-01"
converted_by: "agent-1a (glm-vision)"
notes: "Printed page number in footer box is cut off at scan edge; digit verified as 12 from visible glyph tops ('1' flag+stem, '2' top arc), consistent with image+6 sequence."
---

# Page 6 — Unit 01: Functions and Graphs

> 📄 Original scan: [0006.jpg](../../../../../../data/raw/mathematics/M-1/0006.jpg) · printed page 12

**Example 5:** Check the type of function $f(x) = x^2 - 1$ if Dom $f(x) = \{1, -1, 2, -2\}$ and Codom $f(x) = \{0, 3, -3\}$

**Solution:** Given $f(x) = x^2 - 1$ with Dom $f(x) = \{1, -1, 2, -2\}$ and Codom $f(x) = \{0, 3, -3\}$
Substituting the elements of the domain in the function, we get:
$$
\begin{aligned}
f(1) &= 1^2 - 1 = 0 \\
f(-1) &= (-1)^2 - 1 = 0 \\
f(2) &= 2^2 - 1 = 3 \\
f(-2) &= (-2)^2 - 1 = 3
\end{aligned}
$$

Therefore, Rang $f(x) = \{0, 3\}$. As, Rang $f(x) = \{0, 3\} \neq \{0, 3, -3\} =$ Codom $f(x)$.
So, the given function is an into function.

**Example 6:** Find the type of the function $f(x) = 3x + 2$ defined on $f: R \rightarrow R$.

**Solution:** Let, $f(x) = y \Rightarrow y = 3x + 2 \Rightarrow y - 2 = 3x \Rightarrow x = \frac{y-2}{3}$
Substituting the value of $x$ in the given function $f(x)$, we get:
$$
f(x) = f\left(\frac{y-2}{3}\right) = 3\left(\frac{y-2}{3}\right) + 2 = y - 2 + 2 = y
$$
Since, we get back $y$ after putting the value of $x$ in the function. Hence the given function is an onto function.

## 1.3 Inverse Function

The inverse of any function $f(x)$ is a function denoted by $f^{-1}(x)$ which reverses the effect of $f(x)$ and it undoes what $f(x)$ does. In mathematics, the inverse function is also denoted by $f^{-1}$. If $f$: X $\rightarrow$ Y, then $f^{-1}$: Y $\rightarrow$ X. i.e., If the application of a function $f$ to $x$ as input gives an output of $y$, then the application of inverse function $f^{-1}$ to $y$ should give back the value of $x$.
It can be illustrated in the following diagram as:

[Figure F1]

> **Key Facts**
>
> * If $y = f(x)$ is bijective function then $x = f^{-1}(y)$.
> * If $fog(x) = gof(x) = x$, then $g = f^{-1}$ and $f = g^{-1}$.
> * $(f^{-1})^{-1} = f$.

From the above diagram:
$$
\text{dom } f = \text{rang } f^{-1} \quad \text{and} \quad \text{rang } f = \text{dom } f^{-1}
$$
i.e., The domain of the given function becomes the range of the inverse function, and the range of the given function becomes the domain of the inverse function.

## Figures on this page

### Figure F1 — Diagram illustrating inverse functions (bottom center)
- **Type:** geometric-diagram
- **Caption/Number:** (none printed)
- **Description:** A conceptual diagram showing two sets represented by ovals. The left oval is labeled 'X' with text above it reading 'X (Domain of $f$)' and below it 'X (Range of $f^{-1}$)'. The right oval is labeled 'Y' with text above it reading 'Y (Range of $f$)' and below it 'Y (Domain of $f^{-1}$)'. A red curved arrow points from X to Y, labeled '$f(x)$' at its peak. A second red curved arrow points from Y back to X, labeled '$f^{-1}(y)$' at its bottom.
- **Mathematical meaning:** Illustrates that the inverse function $f^{-1}$ maps elements from the range of $f$ back to the domain of $f$, effectively reversing the mapping of the original function.
