---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-8
chapter_folder: Chapter-08-Inverse-Trigonometric-Functions-and-Their-Graphs
chapter_number: 8
chapter_title: INVERSE TRIGONOMETRIC FUNCTIONS AND THEIR GRAPHS
page_image: 9
page_printed: 238
section: 8.1.14 The Inverse Secant Function; 8.1.15 The Domain and Range of Inverse Secant Function
exercise: null
content_type: theory
has_figures: true
figures_count: 2
source_image: ../../../Raw/Mathematics/Unit-08-Inverse-Trigonometric-Functions-and-Their-Graphs/0009.jpg
converted_at: "2026-09-20"
converted_by: "coordinator-w4b (glm-vision)"
notes: "BOOK SLOPPINESS preserved: 'y \u2209 \u03c0/2' (\u2209 instead of \u2260) in Example 5 setup, and 8.1.14 inverse range line prints '...and y \u2208 [0, \u03c0], x \u2260 \u03c0/2' (x should be y). 'Secy' printed without space. Capital 'Cos' printed in the working."
---

# Page 9 — Unit 08: Inverse Trigonometric Functions and Their Graphs

> 📄 Original scan: [0009.jpg](../../../Raw/Mathematics/Unit-08-Inverse-Trigonometric-Functions-and-Their-Graphs/0009.jpg) · printed page 238

In the interval $x \in [0, \pi], x \neq \frac{\pi}{2}$, we can find a **unique solution** to the equation $\text{Sec } x = k$, where $k \in R - (-1, 1)$. We write this solution as $x = \text{Sec}^{-1} k$. In other words, “$x$ is a real number in the interval $[0, \frac{\pi}{2}) \cup (\frac{\pi}{2}, \pi]$ whose secant value is $k$”. The secant function defined on $x \in [0, \pi], x \neq \frac{\pi}{2}$ for which there is only one **solution** of the equation $\sec x = k$ where, $k \in R - (-1, 1)$ is called the **Principal Secant Function**.

[Figure F1]

**Example 5:** Find the principal value of $\text{Sec}^{-1}(-2)$.

**Solution:** Let $y = \text{Sec}^{-1}(-2)$ if and only if $\text{Sec } y = (-2)$, where $y \in [0, \pi], y \notin \frac{\pi}{2}$.

Consider $\text{Sec } y = (-2)$ [We need to find $y$ whose secant value is $(-2)$].

$$\begin{aligned}
&\Rightarrow \text{Cos } y = -\frac{1}{2} && \text{Since Cos } y < 0 \Rightarrow \text{Secy} < 0 \Rightarrow y \text{ lies in Quad II}. \\
&\Rightarrow \text{Cos } y = \text{Cos}\left(\frac{2\pi}{3}\right) \\
&\Rightarrow y = \frac{2\pi}{3} \\
&\Rightarrow \text{Sec}^{-1}(-2) = \frac{2\pi}{3}
\end{aligned}$$

> **Check Point**
> Find the principal value of $\text{Sec}^{-1}\left(\frac{2}{\sqrt{3}}\right)$.

## 8.1.14 The Inverse Secant Function

For the secant function $y = \text{Sec } x$

where $x \in [0, \pi], x \neq \frac{\pi}{2}$ and $y \in R - (-1, 1)$,

we define an inverse secant function $y = \text{Sec}^{-1}(x)$

where $x \in R - (-1, 1)$ and $y \in [0, \pi], x \neq \frac{\pi}{2}$.

In view of above, we observe that:

$\text{Sec}^{-1}(1) = 0$ since $\text{Sec}(0) = 1$
$\text{Sec}^{-1}(-1) = \pi$ since $\text{Sec}(\pi) = -1$

[Figure F2]

## 8.1.15 The Domain and Range of Inverse Secant Function

To find the domain and range of inverse trigonometric function, switch the domain and range of the original function. For the secant function $y = \text{Sec } x$

$$Domain = x \in [0, \pi], x \neq \frac{\pi}{2} \text{ and } Range = R - (-1, 1)$$

For the inverse secant function $y = \text{Sec}^{-1} x$

$$Domain = R - (-1, 1) \text{ and } Range = x \in [0, \pi], x \neq \frac{\pi}{2}$$

## Figures on this page

### Figure F1 — Graph of y = Sec x (top right)
- **Type:** curve-plot
- **Caption/Number:** (none printed)
- **Description:** Title "$y = \text{Sec}x$" printed above. A Cartesian coordinate system with vertical axis labeled $y$ (ticks 1, 2, 3 and $-1, -2, -3$) and horizontal axis labeled $x$ (labels $-\pi$, $O$, $\frac{\pi}{2}$, $\pi$). Central U-shaped branch opening upwards with vertex marked by a dot at $(0,1)$ (pink accent at the vertex), bounded by vertical dashed asymptotes at $x = \pm\frac{\pi}{2}$. Two downward-opening branches: left (black, dot at $(-\pi,-1)$) and right (black curve with pink/magenta accent and dot at $(\pi,-1)$). Arrows indicate the branches continue downwards.
- **Mathematical meaning:** Illustrates the Principal Secant Function defined on $[0, \pi]$, excluding $\frac{\pi}{2}$, showing its range is $R - (-1, 1)$ and its periodic nature.

### Figure F2 — Graph of y = Sec⁻¹x (middle right)
- **Type:** curve-plot
- **Caption/Number:** (none printed)
- **Description:** Label "$y = \text{Sec}^{-1}x$" printed at top left. Two red/brown branches of the inverse secant: an upper-left branch rising towards a vertical asymptote at $x = -1$ (approaching $y = \pi$), and a lower-right branch falling from the vertical asymptote at $x = 1$ towards $y = 0$ as $x \to \infty$; both branches end in left/right arrows just above/below the dashed horizontal line at $y = \frac{\pi}{2}$. A double-headed vertical arrow between the two asymptote arrows is labeled $\pi$ (top) and $\frac{\pi}{2}$ (at the dashed line). The vertical axis is labeled rotated "$y -$ axis"; the horizontal axis carries small ticks $-6$ to $6$ with $-1$ and $1$ marked below the axis.
- **Mathematical meaning:** Displays the graph of the inverse secant function $y = \text{Sec}^{-1}x$, illustrating its domain $R - (-1, 1)$ and range $[0, \pi] \setminus \{\frac{\pi}{2}\}$, with vertical asymptotes at $x = \pm 1$.
