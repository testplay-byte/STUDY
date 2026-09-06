---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-3
chapter_folder: Chapter-03-Integration
chapter_number: 3
chapter_title: INTEGRATION
page_image: 13
page_printed: 101
section: null
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Mathematics/Unit-03-Integration/0013.jpg
converted_at: "2026-09-06"
converted_by: "agent-13d (glm-vision)"
notes: ""
---

# Page 13 — Unit 03: Integration

> 📄 Original scan: [0013.jpg](../../../Raw/Mathematics/Unit-03-Integration/0013.jpg) · printed page 101

$$\begin{aligned} &= \tan^{-1}x \int xdx - \int \left[\frac{d}{dx}(\tan^{-1}x) \int xdx\right] dx \\ &= \tan^{-1}x . \frac{x^2}{2} - \int \frac{1}{x^2+1} . \frac{x^2}{2} dx = \frac{x^2 \tan^{-1}x}{2} - \frac{1}{2}\int \frac{x^2}{x^2+1} dx \\ &= \frac{x^2 \tan^{-1}x}{2} - \frac{1}{2}\int \left(1 - \frac{1}{x^2+1}\right) dx = \frac{x^2 \tan^{-1}x}{2} - \frac{1}{2}(x - \tan^{-1}x) + c \end{aligned}$$

**Example 15:** Apply integration by parts to evaluate:

(i) $\int \sqrt{a^2-x^2} \, dx$   (ii) $\int \sqrt{a^2+x^2} \, dx$

**Solution:**

(i) $\int \sqrt{a^2-x^2} \, dx = \int \sqrt{a^2-x^2} \, (1) \, dx$,

Here, we take ‘$\sqrt{a^2-x^2}$’ as first function and ‘1’ as second function.

$\therefore \quad \int \sqrt{a^2-x^2} \, dx = \int \sqrt{a^2-x^2} \, (1)dx$

$$\begin{aligned} &= \sqrt{a^2-x^2} \int 1dx - \int \left[\frac{d}{dx}(\sqrt{a^2-x^2}) \int 1dx\right] dx \\ &= \sqrt{a^2-x^2} (x) - \int \frac{-2x}{2\sqrt{a^2-x^2}} (x)dx = x\sqrt{a^2-x^2} - \int \frac{-x^2}{\sqrt{a^2-x^2}} dx \\ &= x\sqrt{a^2-x^2} - \int \frac{a^2-x^2-a^2}{\sqrt{a^2-x^2}} dx \\ &= x\sqrt{a^2-x^2} - \int \frac{a^2-x^2}{\sqrt{a^2-x^2}}dx + \int \frac{a^2}{\sqrt{a^2-x^2}}dx \end{aligned}$$

$\int \sqrt{a^2-x^2} \, dx = x\sqrt{a^2-x^2} - \int \sqrt{a^2-x^2} \, dx + a^2 \sin^{-1}\left(\frac{x}{a}\right) + c$

$\int \sqrt{a^2-x^2} \, dx + \int \sqrt{a^2-x^2} \, dx = x\sqrt{a^2-x^2} + a^2 \sin^{-1}\left(\frac{x}{a}\right) + c$

$2 \int \sqrt{a^2-x^2} \, dx = x\sqrt{a^2-x^2} + a^2 \sin^{-1}\left(\frac{x}{a}\right) + c$

$\int \sqrt{a^2-x^2} \, dx = \frac{x\sqrt{a^2-x^2}}{2} + \frac{a^2}{2} \sin^{-1}\left(\frac{x}{a}\right) + \frac{c}{2} = \frac{x\sqrt{a^2-x^2}}{2} + \frac{a^2}{2} \sin^{-1}\left(\frac{x}{a}\right) + C$

(ii) $\int \sqrt{a^2+x^2} \, dx = \int \sqrt{a^2+x^2} \, (1) \, dx$,

Here, we take ‘$\sqrt{a^2+x^2}$’ as first function and ‘1’ as second function.

$\therefore \quad \int \sqrt{a^2+x^2} \, dx = \int \sqrt{a^2+x^2} \, (1)dx$

$$\begin{aligned} &= \sqrt{a^2+x^2} \int 1dx - \int \left[\frac{d}{dx}(\sqrt{a^2+x^2}) \int 1dx\right] dx \\ &= \sqrt{a^2+x^2} (x) - \int \frac{2x}{2\sqrt{a^2+x^2}} (x)dx = x\sqrt{a^2+x^2} - \int \frac{x^2}{\sqrt{a^2+x^2}} dx \\ &= x\sqrt{a^2+x^2} - \int \frac{a^2+x^2-a^2}{\sqrt{a^2+x^2}} dx \\ &= x\sqrt{a^2+x^2} - \int \frac{a^2+x^2}{\sqrt{a^2+x^2}}dx + \int \frac{a^2}{\sqrt{a^2+x^2}}dx \end{aligned}$$

$\int \sqrt{a^2+x^2} \, dx = x\sqrt{a^2+x^2} - \int \sqrt{a^2+x^2} \, dx + a^2 \times \frac{1}{a} \tan^{-1}\left(\frac{x}{a}\right) + c$
