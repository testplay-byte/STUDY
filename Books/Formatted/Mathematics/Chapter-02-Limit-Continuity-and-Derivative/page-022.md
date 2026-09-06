---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-2
chapter_folder: Chapter-02-Limit-Continuity-and-Derivative
chapter_number: 2
chapter_title: LIMIT, CONTINUITY AND DERIVATIVE
page_image: 22
page_printed: 64
section: 2.10 Derivatives of Inverse Trigonometric Functions
exercise: null
content_type: theory
has_figures: false
figures_count: 0
source_image: ../../../Raw/Mathematics/Unit-02-Limit-Continuity-and-Derivative/0022.jpg
converted_at: "2026-09-06"
converted_by: "agent-13b (glm-vision)"
notes: ""
---

# Page 22 — Unit 02: Limit, Continuity and Derivative

> 📄 Original scan: [0022.jpg](../../../Raw/Mathematics/Unit-02-Limit-Continuity-and-Derivative/0022.jpg) · printed page 64

**Example 24:** Find $\frac{dy}{dx}$ if $y = \sin x(2 + \sec x)$

**Solution:** $\frac{dy}{dx} = \frac{d}{dx} [\sin x(2 + \sec x)]$

$$\begin{aligned}
&= \sin x \frac{d}{dx} (2 + \sec x) + (2 + \sec x) \frac{d}{dx} (\sin x) = \sin x(0 + \sec x \tan x)) + (2 + \sec x)(\cos x) \\
&= \sin x \sec x \tan x + 2\cos x + \sec x \cos x = \sin x \frac{1}{\cos x} \tan x + 2\cos x + \sec x \cos x \\
&= \tan^2 x + 2\cos x + 1 = \tan^2 x + 1 + 2\cos x \\
&= \sec^2 x + 2\cos x \quad (1 + \tan^2 x = \sec^2 x)
\end{aligned}$$

## 2.10 Derivatives of Inverse Trigonometric Functions

The derivative of an inverse trigonometric function can be obtained. Research reveals that the inverse tangent and inverse cotangent are differentiable for all $x$. However the remaining four inverse trigonometric functions are not differentiable at either $x = -1$ or $x = 1$

**Inverse sine function:**

For $-1 < x < 1$ and $-\frac{\pi}{2} < y < \frac{\pi}{2}$.

$y = \sin^{-1} x$ if and only if $x = \sin y$

Differentiate w.r.t $x$

$$\begin{aligned}
&\frac{dx}{dx} = \frac{d}{dx} \sin y \\
&1 = \cos y \frac{dy}{dx} \\
&\frac{dy}{dx} = \frac{1}{\cos y} = \frac{1}{\sqrt{1 - \sin^2 y}} \\
&\frac{d}{dx} \sin^{-1} x = \frac{1}{\sqrt{1-x^2}}, \text{ for } -1 < x < 1
\end{aligned}$$

Similarly, $\boxed{\frac{d}{dx}\cos^{-1}x = -\frac{1}{\sqrt{1-x^2}}, \text{ for } -1 < x < 1}$

**Inverse tangent function:**

For $-\alpha < x < \alpha$ and $-\frac{\pi}{2} < y < \frac{\pi}{2}$

$y = \tan^{-1} x$ if and only if $x = \tan y$

Differentiate w.r.t $x$

$$\begin{aligned}
&\frac{dx}{dx} = \frac{d}{dx} \tan y \\
&1 = \sec^2 y \frac{dy}{dx} \\
&\frac{dy}{dx} = \frac{1}{1 + \tan^2 y} = \frac{1}{1 + x^2}
\end{aligned}$$

$\boxed{\frac{d}{dx} \tan^{-1}x = \frac{1}{1+x^2}, \text{ for } x \in R}$

Similarly, $\boxed{\frac{d}{dx} \cot^{-1}x = -\frac{1}{1+x^2}, \text{ for } x \in R}$

**Inverse secant function:**

For $|x| > 1$ and $0 < y < \frac{\pi}{2}$ or $\pi < y < \frac{3\pi}{2}$

$y = \sec^{-1} x$ if and only if $x = \sec y$

Differentiate w.r.t $x$

$$\begin{aligned}
&\frac{dx}{dx} = \frac{d}{dx} \sec y & \therefore 1 + \tan^2 y &= \sec^2 y \\
&1 = \sec y \tan y \frac{dy}{dx} & \tan^2 y &= \sec^2 y - 1 \\
&\frac{dy}{dx} = \frac{1}{\sec y \tan y} & \tan y &= \sqrt{\sec^2 y - 1}
\end{aligned}$$
