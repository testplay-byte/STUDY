---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-3
chapter_folder: Chapter-03-Integration
chapter_number: 3
chapter_title: INTEGRATION
page_image: 5
page_printed: 93
section: null
exercise: 3.1
content_type: mixed
has_figures: false
figures_count: 0
source_image: ../../../Raw/Mathematics/Unit-03-Integration/0005.jpg
converted_at: "2026-09-06"
converted_by: "agent-13d (glm-vision)"
notes: ""
---

# Page 5 — Unit 03: Integration

> 📄 Original scan: [0005.jpg](../../../Raw/Mathematics/Unit-03-Integration/0005.jpg) · printed page 93

**Example 1:** Evaluate (i) $\int(4x^7 - 2x^3 + 9x + 3)dx$  (ii) $\int\frac{y^3 - 2y^6}{y^5} dy$

**Solution:** (i) $\int(4x^7 - 2x^3 + 9x + 3)dx$
$$= 4\int x^7 dx - 2\int x^3 dx + 9\int x dx + 3\int dx$$
Integrating term by term, we get:
$$= 4\left(\frac{x^8}{8}\right) - 2\left(\frac{x^4}{4}\right) + 9\left(\frac{x^2}{2}\right) + 3x + c = \frac{x^8}{2} - \frac{x^4}{2} + \frac{9x^2}{2} + 3x + c$$

(ii) $\int\frac{y^3 - 2y^6}{y^5} dy = \int\left(\frac{y^3}{y^5} - \frac{2y^6}{y^5}\right) dy = \int\left(\frac{1}{y^2} - 2y\right) dy$
$$= \int(y^{-2} - 2y) dy = \int y^{-2} dy - 2\int y dy$$
$$= \frac{y^{-2+1}}{-2+1} - 2\left(\frac{y^2}{2}\right) + c = -\frac{1}{y} - y^2 + c$$

**Example 2:** Evaluate (i) $\int\frac{ax + \frac{1}{2}b}{ax^2 + bx + c} dx$  (ii) $\int e^{3x} dx$

**Solution:** (i) $\displaystyle \int\frac{ax + \frac{1}{2}b}{ax^2 + bx + c} dx = \frac{1}{2}\int\frac{2ax + b}{ax^2 + bx + c} dx$
$$= \frac{1}{2}ln(ax^2 + bx + c) + C$$

(ii) $\displaystyle \int e^{3x} dx = \frac{1}{3}\int e^{3x}(3)dx = \frac{1}{3}e^{3x} + c$

**Example 3:** Evaluate $\displaystyle \int\frac{e^{\sin^{-1}x}}{\sqrt{1-x^2}} dx$

**Solution:** Here, $f(x) = \sin^{-1}x \quad \Rightarrow \quad f'(x) = \frac{1}{\sqrt{1-x^2}}$

So, by using formula:
$$\int e^{f(x)}f'(x)dx = e^{f(x)} + c$$
We have:
$$\int\frac{e^{\sin^{-1}x}}{\sqrt{1-x^2}} dx = e^{\sin^{-1}x} + c$$

### Exercise 3.1

Evaluate the following integrals.

1. $\int(x^2 - 3x + 9)dx$
2. $\int(y^2 + 8y + \sqrt{2})dy$
3. $\int\left(\sqrt{y} + \frac{1}{y^2}\right) dy$
4. $\int(4 + x^2)^2 dx$
5. $\int(1 + x)(1 - x^2)dx$
6. $\int\left(\sqrt{x} + \frac{1}{2\sqrt{x}}\right) dx$
7. $\int(e^{4x} - e^{-1} + 1)dx$
8. $\int(e^{\frac{9}{2}x} + \frac{1}{x})dx$
9. $\int x e^{x^2} dx$
10. $\int 5^x dx$
11. $\int 7^{7y} dy$
12. $\int(x^3 + \frac{1}{2x} - \frac{1}{x^3})dx$
