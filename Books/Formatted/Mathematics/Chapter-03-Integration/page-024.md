---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-3
chapter_folder: Chapter-03-Integration
chapter_number: 3
chapter_title: INTEGRATION
page_image: 24
page_printed: null
section: "3.9 Area and Volume"
exercise: "3.7"
content_type: mixed
has_figures: false
figures_count: 0
source_image: ../../../Raw/Mathematics/Unit-03-Integration/0024.jpg
converted_at: "2026-09-06"
converted_by: "agent-13e (glm-vision)"
notes: "Footer ribbon cut off at the bottom edge of the scan (only top halves of 'GRADE 12' and 'National Book Foundation' visible, middle digit region missing) → page_printed: null. Offset cross-check (printed = image + 88) suggests 112, NOT used as the value. Exercise 3.7 items 1–20 all on this page."
---

# Page 24 — Unit 03: Integration

> 📄 Original scan: [0024.jpg](../../../Raw/Mathematics/Unit-03-Integration/0024.jpg) · printed folio cut off in scan

**Example 27:** Evaluate: $\int_{1}^{e} x \, lnx \, dx$

**Solution:** Taking $lnx$ as first function and integrating by parts, we get:

$$\begin{aligned}
\int_{1}^{e} x \, lnx \, dx &= \int_{1}^{e} (lnx)(x) \, dx = \left|lnx \times \frac{x^2}{2}\right|_{1}^{e} - \int_{1}^{e} \frac{1}{x} \times \frac{x^2}{2} dx \\
&= \left|lnx \times \frac{x^2}{2}\right|_{1}^{e} - \frac{1}{2}\int_{1}^{e} x \, dx = \left|lnx \times \frac{x^2}{2}\right|_{1}^{e} - \frac{1}{2} \times \left|\frac{x^2}{2}\right|_{1}^{e} \\
&= \left(lne \times \frac{e^2}{2} - ln1 \times \frac{1^2}{2}\right) - \frac{1}{2}\left(\frac{e^2}{2} - \frac{1^2}{2}\right) = \left(1 \times \frac{e^2}{2} - 0 \times \frac{1}{2}\right) - \frac{e^2}{4} + \frac{1}{4} \\
&= \frac{e^2}{2} - 0 - \frac{e^2}{4} + \frac{1}{4} = \frac{e^2}{4} + \frac{1}{4}
\end{aligned}$$

## Exercise 3.7

Evaluate the definite integrals.

1. $\int_{-1}^{2}(2x + 3) \, dx$
2. $\int_{-4}^{12}\sqrt{y + 4} \, dy$
3. $\int_{0}^{\frac{1}{2}}(2x + 1)^{-\frac{1}{3}} \, dx$
4. $\int_{0}^{3}(6x^2 - 4x + 5) \, dx$
5. $\int_{-2}^{1}(12x^5 - 36) \, dx$
6. $\int_{-\frac{\pi}{3}}^{\frac{\pi}{4}} \cos\theta \, d\theta$
7. $\int_{0}^{\frac{\pi}{4}} \sec^2 2\theta \, d\theta$
8. $\int_{2}^{4} \frac{x^2 + 8}{x^2} \, dx$
9. $\int_{-\frac{1}{2}}^{\frac{3}{2}} x - \cos\pi x \, dx$
10. $\int_{1}^{4} \frac{\cos\sqrt{x}}{2\sqrt{x}} \, dx$
11. $\int_{\frac{\pi}{6}}^{\frac{\pi}{3}} \sin x \cos x \, dx$
12. $\int_{\frac{\pi}{6}}^{\frac{\pi}{2}} \frac{1 + \cos\theta}{(\theta + \sin\theta)^2} \, d\theta$
13. $\int_{\frac{-\pi}{4}}^{\frac{\pi}{4}} (\sec x + \tan x)^2 \, dx$
14. $\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} \cos^2 x \, dx$
15. $\int_{1}^{3} lnx \, dx$
16. $\int_{2}^{4} \left(e^{\frac{x}{2}} - e^{\frac{x}{4}}\right) \, dx$
17. $\int_{0}^{\frac{\pi}{4}} \frac{1}{1 - \sin x} \, dx$
18. $\int_{0}^{\frac{\pi}{4}} \tan^{-1} y \, dy$
19. $\int_{0}^{\frac{\pi}{2}} \frac{\sin x}{(2 + \cos x)(5 + \cos x)} \, dx$
20. $\int_{2}^{5} \frac{1}{x(x + 1)} \, dx$

## 3.9 Area and Volume

The definite integrals have applications that extend far beyond the area problems. In this section, we will also apply definite integrals for finding the volume. We have an inductive idea of what is meant by the area of certain geometrical figures. It is a number that in same way measures the size of the region enclosed by the figure. The area of a rectangle is the product of its length and width likewise the area of a triangle is half the product of lengths of the base and the altitude.

The area of a polygon may be defined as the sum of the areas of triangles into which it is decomposed and it can be proved that the area thus obtained is independent of how the polygon is decomposed into triangles.
