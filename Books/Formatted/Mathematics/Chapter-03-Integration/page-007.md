---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-3
chapter_folder: Chapter-03-Integration
chapter_number: 3
chapter_title: INTEGRATION
page_image: 7
page_printed: 95
section: 3.2.1 Integration of Sin²x and Cos²x
exercise: null
content_type: theory
has_figures: false
figures_count: 0
source_image: ../../../Raw/Mathematics/Unit-03-Integration/0007.jpg
converted_at: "2026-09-06"
converted_by: "agent-13d (glm-vision)"
notes: ""
---

# Page 7 — Unit 03: Integration

> 📄 Original scan: [0007.jpg](../../../Raw/Mathematics/Unit-03-Integration/0007.jpg) · printed page 95

$$= -\frac{25}{7}\cot\frac{7x}{5} + \frac{25}{7}c \quad = \quad -\frac{25}{7}\cot\frac{7x}{5} + C$$

(v) $\int 9 \sec 3x \tan 3x \, dx = \int 3 \times 3 \sec 3x \tan 3x \, dx = 3 \int \sec 3x \tan 3x (3)dx$
$$\begin{aligned}
&= 3(\sec 3x + c) &&= 3\sec 3x + 3c &&= 3\sec 3x + C
\end{aligned}$$

**Example 5:** Prove that:

(i) $\int \sec x \, dx = \ln|\sec x + \tan x| + c$

(ii) $\int \text{cosec } x \, dx = \ln|\text{cosec } x - \cot x| + c$

(iii) $\int \tan x \, dx = -\ln(\cos x) + c = \ln(\sec x) + c$

**Solution:**

(i) $\displaystyle \int \sec x \, dx = \int \frac{\sec x (\sec x + \tan x)}{\sec x + \tan x} \, dx$ [Multiplying and dividing by $(\sec x + \tan x)$]
$$\begin{aligned}
&= \int \frac{\sec^2 x + \sec x \tan x}{\sec x + \tan x} \, dx = \int \frac{\sec x \tan x + \sec^2 x}{\sec x + \tan x} \, dx \\
&= \int \frac{\frac{d}{dx}(\sec x + \tan x)}{\sec x + \tan x} \, dx = \ln|\sec x + \tan x| + c
\end{aligned}$$

$$\boxed{\begin{aligned}
&\int \frac{f'(x)}{f(x)}dx \\
&= \ln[f(x)] + c
\end{aligned}}$$

(ii) $\displaystyle \int \text{cosec } x \, dx = \int \frac{\text{cosec } x (\text{cosec } x - \cot x)}{\text{cosec } x - \cot x} \, dx$
$$\begin{aligned}
&= \int \frac{\text{cosec}^2 x - \text{cosec } x \cot x}{\text{cosec } x - \cot x} \, dx = \int \frac{-\text{cosec } x \cot x + \text{cosec}^2 x}{\text{cosec } x - \cot x} \, dx \\
&= \int \frac{\frac{d}{dx}(\text{cosec } x - \cot x)}{\text{cosec } x - \cot x} \, dx = \ln|\text{cosec } x - \cot x | + c
\end{aligned}$$

(iii) $\displaystyle \int \tan x \, dx = \int \frac{\sin x}{\cos x} \, dx = -\int \frac{-\sin x}{\cos x} \, dx = -\int \frac{\frac{d}{dx}(\cos x)}{\cos x} \, dx$
$$\begin{aligned}
&= -\ln(\cos x) + c = \ln(\cos x)^{-1} + c \\
&= \ln\frac{1}{\cos x} + c = \ln(\sec x) + c
\end{aligned}$$

> **Check Point**
> Prove that
> $\int \cot x \, dx = \ln(\sin x) + c$

## 3.2.1 Integration of Sin²x and Cos²x

Sometimes it is difficult to evaluate integrals directly. Using trigonometric identities, we can easily evaluate integrals. For example, the integrals of $\sin^2 x$ and $\cos^2 x$ cannot be solved directly and can be handled using following relations.

$\sin^2 x = \frac{1-\cos 2x}{2}$ and $\cos^2 x = \frac{1+\cos 2x}{2}$

> **Check Point**
> Evaluate $\int \cos^2 x \, dx$

**Example 6:** Evaluate $\int \sin^2 x \, dx$

**Solution:** $\displaystyle \int \sin^2 x \, dx = \int \frac{1-\cos 2x}{2} \, dx = \frac{1}{2}\int dx - \frac{1}{2}\int \cos 2x \, dx$
$$= \frac{1}{2}x - \frac{1}{2}\left(\frac{\sin 2x}{2}\right) + c = \frac{1}{2}x - \frac{1}{4}\sin 2x + c$$
