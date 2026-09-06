---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-3
chapter_folder: Chapter-03-Integration
chapter_number: 3
chapter_title: INTEGRATION
page_image: 23
page_printed: 111
section: null
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Mathematics/Unit-03-Integration/0023.jpg
converted_at: "2026-09-06"
converted_by: "agent-13e (glm-vision)"
notes: "Margin 'Check Point' practice boxes (top-right beside Example 25, bottom-right at the end of Example 26) transcribed as blockquotes at their reading positions. Section continues the worked examples of §3.8."
---

# Page 23 — Unit 03: Integration

> 📄 Original scan: [0023.jpg](../../../Raw/Mathematics/Unit-03-Integration/0023.jpg) · printed page 111

**Example 25:** Evaluate: $\int_{0}^{2} \sqrt{2x^2 + 1} \, x dx$

> **Check Point**
> Evaluate: $\int_{\frac{\pi}{6}}^{\pi} \cos x \, dx$

**Solution:** We can apply two methods.

**Method-1:** By substitution but without changing the limits.

Let $u = 2x^2 + 1$ which implies $du = 4x \, dx$

Thus, $\int_{0}^{2} \sqrt{2x^2 + 1} \, x dx = \frac{1}{4}\int_{0}^{2} \sqrt{2x^2 + 1} \times 4x dx$
$$\begin{aligned}
&= \frac{1}{4}\int_{0}^{2} \sqrt{u} \, du = \frac{1}{4} \times \left| \frac{2}{3} u^{\frac{3}{2}} \right|_{0}^{2} && \text{(Substituting for u)} \\
&= \left| \frac{1}{6}(2x^2 + 1)^{\frac{3}{2}} \right|_{0}^{2} && \text{(Resubstituting for $x$)}
\end{aligned}$$

Applying limits, we get:
$$\begin{aligned}
&= \frac{1}{6}[2(2)^2 + 1]^{\frac{3}{2}} - \frac{1}{6}[2(0)^2 + 1]^{\frac{3}{2}} = \frac{1}{6}\left[9^{\frac{3}{2}} - 1^{\frac{3}{2}}\right] \\
&= \frac{1}{6}(27 - 1) = \frac{26}{6} = \frac{13}{3}
\end{aligned}$$

**Method-2:** By substitution with changing the limits.

Let $u = 2x^2 + 1$ which implies $du = 4x \, dx$

When $x = 0, u = 2(0)^2 + 1 = 1$ and when $x = 2, u = 2(2)^2 + 1 = 9$

Thus, $\int_{0}^{2} \sqrt{2x^2 + 1} \, x dx = \frac{1}{4}\int_{0}^{2} \sqrt{2x^2 + 1} \times 4x dx$
$$\begin{aligned}
&= \frac{1}{4}\int_{1}^{9} \sqrt{u} \, du = \frac{1}{4} \times \left| \frac{2}{3} u^{\frac{3}{2}} \right|_{1}^{9} && \text{(Substituting for u)} \\
&= \frac{1}{6}\left[9^{\frac{3}{2}} - 1^{\frac{3}{2}}\right] = \frac{1}{6}(27 - 1) = \frac{26}{6} = \frac{13}{3}
\end{aligned}$$

**Example 26:** Evaluate: $\int_{a}^{b} \frac{1}{1-\cos x} \, dx$ when $a = \frac{\pi}{4}, b = \frac{\pi}{3}$

**Solution:** $\int_{a}^{b} \frac{1}{1-\cos x} \, dx = \int_{a}^{b} \frac{1}{1-\cos x} \times \frac{1+\cos x}{1+\cos x} \, dx = \int_{a}^{b} \frac{1+\cos x}{1-\cos^2 x} \, dx$
$$\begin{aligned}
&= \int_{a}^{b} \frac{1+\cos x}{\sin^2 x} \, dx = \int_{a}^{b} \left[ \frac{1}{\sin^2 x} + \frac{\cos x}{\sin^2 x} \right] dx \\
&= \int_{a}^{b} [\cosec^2 x + \cot x \cosec x] dx \\
&= |-\cot x|_{a}^{b} + |-\cosec x|_{a}^{b}
\end{aligned}$$

Applying limits and substituting values of $a$ and $b$, we get:

$\int_{a}^{b} \frac{1}{1-\cos x} \, dx = -(\cot \frac{\pi}{3} - \cot \frac{\pi}{4}) - (\cosec \frac{\pi}{3} - \cosec \frac{\pi}{4})$
$$\begin{aligned}
&= -\left(\frac{1}{\sqrt{3}} - 1\right) - \left(\frac{2}{\sqrt{3}} - \sqrt{2}\right) = \frac{1}{\sqrt{3}} + 1 - \frac{2}{\sqrt{3}} + \sqrt{2} \\
&= 1 + \sqrt{2} - \sqrt{3}
\end{aligned}$$

> **Check Point**
> Evaluate: $\int_{0}^{1} \sin^{-1}x \, dx$
