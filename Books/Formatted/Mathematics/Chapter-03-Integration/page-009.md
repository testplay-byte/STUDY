---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-3
chapter_folder: Chapter-03-Integration
chapter_number: 3
chapter_title: INTEGRATION
page_image: 9
page_printed: 97
section: null
exercise: null
content_type: mixed
has_figures: false
figures_count: 0
source_image: ../../../Raw/Mathematics/Unit-03-Integration/0009.jpg
converted_at: "2026-09-06"
converted_by: "agent-13d (glm-vision)"
notes: ""
---

# Page 9 — Unit 03: Integration

> 📄 Original scan: [0009.jpg](../../../Raw/Mathematics/Unit-03-Integration/0009.jpg) · printed page 97

**Key Facts**

Usually, the method of integration by substitution is extremely useful when we make a substitution for a function whose derivative is also present in the integrand. Doing so, the function simplifies and then the basic formulas of integration can be used to integrate the function.

**Example 8:** Evaluate $\int 3x^2 \cos(x^3) \, dx$

**Solution:**

In the equation given above the independent variable can be transformed into another variable say $t$ by substituting:

$$x^3 = t \quad (i)$$

Differentiation of (i) gives:

$$3x^2 \, dx = dt \quad (ii)$$

Substituting the values of (i) and (ii) in the given integral.

$$\int 3x^2 \cos(x^3) \, dx = \int \cos t \, dt = \sin t + c$$

Again, substituting back the value of $t$, we get:

$$\int 3x^2 \cos(x^3) \, dx = \sin(x^3) + c$$

**Key Facts**

The method of substitution to find an integral is used when it is set up in the special form.
$\int f(g(x)).g'(x).dx = \int f(t).dt$ where $t = g(x)$

**Check Point**

Integrate:
$x \sin(x^2 - 3)$ with respect to $x$.

**Example 9:** Integrate: $\int \frac{e^{\tan^{-1} x}}{1+x^2} \, dx$

**Solution:** Let $u = \tan^{-1} x$ then $du = \frac{1}{1+x^2} \, dx$

Therefore, $\int \frac{e^{\tan^{-1} x}}{1+x^2} \, dx = \int e^u du = e^u + c = e^{\tan^{-1} x} + c$

**Formula 3.5:** $\int \frac{1}{\sqrt{a^2 - x^2}} \, dx = \sin^{-1}\left(\frac{x}{a}\right) + c$

**Derivation:** Substituting $x = a \sin\theta$, we have $dx = a \cos\theta \, d\theta$

$$\begin{aligned}
\int \frac{1}{\sqrt{a^2 - x^2}} \, dx &= \int \frac{1}{\sqrt{a^2 - (a\sin\theta)^2}} \, a \cos\theta \, d\theta = \int \frac{1}{\sqrt{a^2 - a^2 \sin^2\theta}} \, a \cos\theta \, d\theta \\
&= \int \frac{1}{a\sqrt{1 - \sin^2\theta}} \, a \cos\theta \, d\theta = \int \frac{1}{\cos\theta} \, \cos\theta \, d\theta \\
&= \int d\theta = \theta + c = \sin^{-1}\left(\frac{x}{a}\right) + c
\end{aligned}$$

$$\begin{aligned}
x &= a \sin\theta \Rightarrow \sin\theta = \frac{x}{a} \\
&\Rightarrow \theta = \sin^{-1}\left(\frac{x}{a}\right)
\end{aligned}$$

**Note:** We can apply the formula directly too.

**Formula 3.6:** $\int \sqrt{a^2 - x^2} \, dx = \frac{a^2}{2} \sin^{-1}\left(\frac{x}{a}\right) + \frac{x\sqrt{a^2 - x^2}}{2} + c$

**Derivation:** Substituting $x = a \sin\theta$, we have $dx = a \cos\theta \, d\theta$

$$\begin{aligned}
\therefore \int \sqrt{a^2 - x^2} \, dx &= \int \sqrt{a^2 - (a\sin\theta)^2} \, a \cos\theta \, d\theta = \int \sqrt{a^2 - a^2 \sin^2\theta} \, a \cos\theta \, d\theta \\
&= \int a \sqrt{1 - \sin^2\theta} \, a \cos\theta \, d\theta = \int a \cos\theta \, a\cos\theta \, d\theta = a^2 \int \cos^2\theta \, d\theta
\end{aligned}$$
