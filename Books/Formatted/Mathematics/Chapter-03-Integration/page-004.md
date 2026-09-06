---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-3
chapter_folder: Chapter-03-Integration
chapter_number: 3
chapter_title: INTEGRATION
page_image: 4
page_printed: 92
section: null
exercise: null
content_type: theory
has_figures: false
figures_count: 0
source_image: ../../../Raw/Mathematics/Unit-03-Integration/0004.jpg
converted_at: "2026-09-06"
converted_by: "agent-13d (glm-vision)"
notes: ""
---

# Page 4 — Unit 03: Integration

> 📄 Original scan: [0004.jpg](../../../Raw/Mathematics/Unit-03-Integration/0004.jpg) · printed page 92

**Formula 3.3:** $\int e^x dx = e^x + c$

**Derivation:** As,

$$\frac{d}{dx}[e^x + c] = e^x \quad (iii)$$

Integrating both sides of (iii) with respect to $x$, we have:

$$\begin{aligned}
\int \frac{d}{dx}[e^x + c]dx &= \int e^x dx \\
e^x + c &= \int e^x dx
\end{aligned}$$

$$\boxed{\int e^x dx = e^x + c}$$

In general,

$$\boxed{\int e^{f(x)} f'(x) dx = e^{f(x)} + c}$$

**Formula 3.4:** $\int a^x dx = \frac{1}{ln a} a^x + c, a > 0, a \neq 1$

**Derivation:** As,

$$\frac{d}{dx}\left[\frac{1}{ln a} a^x + c\right] = a^x \quad (iv)$$

Integrating both sides of (iv) with respect to $x$, we have:

$$\begin{aligned}
\int \frac{d}{dx}\left[\frac{1}{ln a} a^x + c\right]dx &= \int a^x dx \\
\frac{1}{ln a} a^x + c &= \int a^x dx
\end{aligned}$$

$$\boxed{\int a^x dx = \frac{1}{ln a} a^x + c}$$

In general,

$$\boxed{\int a^{f(x)} f'(x) dx = \frac{1}{ln a} a^{f(x)} + c}$$

**Theorem 3.1:**

(i) A constant factor can be moved through an integral sign. That is:
$$\int c f(x)dx = c \int f(x)dx$$

(ii) An anti-derivative of a sum is the sum of anti-derivatives. That is:
$$\int[f(x) + g(x)] dx = \int f(x)dx + \int g(x)dx$$

(iii) An anti-derivative of a difference is the difference of anti-derivatives. That is:
$$\int[f(x) - g(x)] dx = \int f(x)dx - \int g(x)dx$$

(iv) In general, $\int[af(x) \pm bg(x)] dx = a \int f(x)dx \pm b \int g(x)dx$
