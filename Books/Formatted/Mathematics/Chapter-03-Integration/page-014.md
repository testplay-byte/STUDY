---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-3
chapter_folder: Chapter-03-Integration
chapter_number: 3
chapter_title: INTEGRATION
page_image: 14
page_printed: 102
section: null
exercise: null
content_type: mixed
has_figures: false
figures_count: 0
source_image: ../../../Raw/Mathematics/Unit-03-Integration/0014.jpg
converted_at: "2026-09-06"
converted_by: "agent-13d (glm-vision)"
notes: "Scan RIGHT EDGE has a thin dark band/page-edge shadow (x≈98% of width, full height) with faint bleed from the facing page beside Q.9/Q.12 — scan artifact, no body text affected. First math line at top is a continuation of Example 15(ii) from printed p.101; its leading integrals are reconstructed unambiguously from the derivation chain."
---

# Page 14 — Unit 03: Integration

> 📄 Original scan: [0014.jpg](../../../Raw/Mathematics/Unit-03-Integration/0014.jpg) · printed page 102

$$\begin{aligned} \int \sqrt{a^2 + x^2} \, dx + \int \sqrt{a^2 + x^2} \, dx &= x\sqrt{a^2 + x^2} + a \tan^{-1}\left(\frac{x}{a}\right) + c \\ 2 \int \sqrt{a^2 + x^2} \, dx &= x\sqrt{a^2 + x^2} + a \tan^{-1}\left(\frac{x}{a}\right) + c \\ \int \sqrt{a^2 + x^2} \, dx &= \frac{x\sqrt{a^2 + x^2}}{2} + \frac{a}{2}\tan^{-1}\left(\frac{x}{a}\right) + \frac{c}{2} = \frac{x\sqrt{a^2 + x^2}}{2} + \frac{a}{2}\tan^{-1}\left(\frac{x}{a}\right) + C \end{aligned}$$

> **Check Point**
> Using integration by parts, prove that:
> $$\int \sqrt{x^2 - a^2} \, dx = \frac{x\sqrt{x^2 - a^2}}{2} - \frac{a^2}{2}\cosh^{-1}\left(\frac{x}{a}\right) + c$$

**Example 16:** Apply integration by parts to evaluate:
$$\int e^{ax} \sin bx \, dx$$

**Solution:** Let, $I = \int e^{ax} \sin bx \, dx = \int (\sin bx)(e^{ax}) \, dx$

$$\begin{aligned} &= \sin bx \int e^{ax} \, dx - \int \left[\frac{d}{dx}(\sin bx) \int e^{ax} \, dx\right] dx \\ &= \sin bx \left(\frac{e^{ax}}{a}\right) - \int \left[(b \cos bx)\left(\frac{e^{ax}}{a}\right)\right] dx \\ &= \sin bx \left(\frac{e^{ax}}{a}\right) - \frac{b}{a} \int [(\cos bx)(e^{ax})] dx \\ &= \sin bx \left(\frac{e^{ax}}{a}\right) - \frac{b}{a} \left[\cos bx \int e^{ax} \, dx - \int \left\{\frac{d}{dx}(\cos bx) \int e^{ax} \, dx\right\} dx\right] \\ I &= \sin bx \left(\frac{e^{ax}}{a}\right) - \frac{b}{a} \left[\cos bx \left(\frac{e^{ax}}{a}\right) - \int \left\{(-b \sin bx)\left(\frac{e^{ax}}{a}\right)\right\} dx\right] \\ I &= \sin bx \left(\frac{e^{ax}}{a}\right) - \frac{b}{a} \cos bx \left(\frac{e^{ax}}{a}\right) - \frac{b^2}{a^2} \int e^{ax} \sin bx \, dx + c \\ I &= \sin bx \left(\frac{e^{ax}}{a}\right) - \frac{b}{a} \cos bx \left(\frac{e^{ax}}{a}\right) - \frac{b^2}{a^2} I + c \\ I + \frac{b^2}{a^2} I &= \frac{1}{a} e^{ax} \sin bx - \frac{b}{a^2} e^{ax} \cos bx + c \\ \left(\frac{a^2 + b^2}{a^2}\right) I &= e^{ax} \left[\frac{1}{a} \sin bx - \frac{b}{a^2} \cos bx\right] + c \\ I &= e^{ax} \left[\frac{1}{a} \times \frac{a^2}{a^2 + b^2} \sin bx - \frac{b}{a^2} \times \frac{a^2}{a^2 + b^2} \cos bx\right] + c \times \frac{a^2}{a^2 + b^2} \\ I &= e^{ax} \left[\frac{a}{a^2 + b^2} \sin bx - \frac{b}{a^2 + b^2} \cos bx\right] + C \end{aligned}$$

## Exercise 3.4

Evaluate the integrals using integration by parts.

1. $\int \ln x \, dx$
2. $\int (\ln x)^2 \, dx$
3. $\int \sin(\ln x) \, dx$
4. $\int x^3 \ln x \, dx$
5. $\int y \sin 2y \, dy$
6. $\int e^x \cos x \, dx$
7. $\int x \sec^{-1} x \, dx$
8. $\int \ln(2x + 3) \, dx$
9. $\int x^2 e^x \, dx$
10. $\int x \cos x \, dx$
11. $\int \cos^{-1} x \, dx$
12. $\int \tan^{-1} x \, dx$
13. $\int x \sec^2 x \, dx$
14. $\int x^2 \sin^{-1} x \, dx$
15. $\int \ln [x + \sqrt{1 + x^2}] \, dx$
16. $\int x^3 e^{x^2} \, dx$
17. $\int x^2 \sin x \, dx$
18. $\int \frac{\ln x}{\sqrt{x}} \, dx$
