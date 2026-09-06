---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-3
chapter_folder: Chapter-03-Integration
chapter_number: 3
chapter_title: INTEGRATION
page_image: 12
page_printed: 100
section: "3.4 Integration by Parts"
exercise: null
content_type: mixed
has_figures: false
figures_count: 0
source_image: ../../../Raw/Mathematics/Unit-03-Integration/0012.jpg
converted_at: "2026-09-06"
converted_by: "agent-13d (glm-vision)"
notes: ""
---

# Page 12 — Unit 03: Integration

> 📄 Original scan: [0012.jpg](../../../Raw/Mathematics/Unit-03-Integration/0012.jpg) · printed page 100

## 3.4 Integration by Parts

Integration by parts is a special method of integration that is very helpful technique to evaluate a wide variety of integrals that sometimes do not fit any of the basic integration formula. This method is used to find the integrals by reducing them into standard forms.

$$\int f(x)g(x)dx = f(x) \int g(x)dx - \int[f'(x) \int g(x)dx] dx \tag{1}$$

Formula (1) is called the formula for integration by parts. Using this formula, we integrate the product of two functions. The important thing to use this formula is the selection of given functions given in the product as a first or second function. The function whose integration can easily be found is considered as the second function while the first function is chosen whose derivative could be easily found. In formula (1), $f(x)$ is treated as first function while $g(x)$ as a second function.

> **Key Facts**
> *   Integration by parts is not applicable for functions such as $\int \sqrt{x} \sin x \ dx$.
> *   We do not add any constant while finding the integral of the second function.
> *   Usually, if any function is a power of x or a polynomial in x, then we take it as the first function. However, if the other function is an inverse trigonometric function or logarithmic function, then we take them as first function.
> *   If the product of functions contains exponential and trigonometric functions, then we can select any one of the two as a first function.

**Example 13:** Evaluate the integral: $\int xe^x \ dx$

**Solution:** In the integral $\int xe^x \ dx$, we take ‘$x$’ as a first function as its derivative will reduce it and ‘$e^x$’ as second function.

$$\begin{aligned}
\therefore \quad \int xe^x \ dx &= x \int e^x dx - \int \left[\frac{d}{dx}(x) \int e^x dx\right] dx \\
&= xe^x - \int 1.e^x dx = xe^x - e^x + c
\end{aligned}$$

**Example 14:** Evaluate: (i) $\int x^2 lnx \ dx$ (ii) $\int x \tan^{-1}x \ dx$

**Solution:**

(i) In the integral $\int x^2 lnx \ dx$, we take ‘$lnx$’ as first function and ‘$x^2$’ as second function.

$$\begin{aligned}
\therefore \quad \int x^2 lnx \ dx &= \int(lnx)(x^2)dx = lnx \int x^2 dx - \int \left[\frac{d}{dx}(lnx) \int x^2 dx\right] dx \\
&= lnx . \frac{x^3}{3} - \int \frac{1}{x}. \frac{x^3}{3} dx = \frac{x^3 lnx}{3} - \frac{1}{3}\int x^2 \ dx \\
&= \frac{x^3 lnx}{3} - \frac{1}{3}. \frac{x^3}{3} + c \quad = \frac{x^3 lnx}{3} - \frac{x^3}{9} + c
\end{aligned}$$

(ii) In the integral $\int x \tan^{-1}x \ dx$, we take ‘$\tan^{-1}x$’ as first function and ‘$x$’ as second function.

$$\therefore \quad \int x \tan^{-1}x \ dx = \int (\tan^{-1}x)(x) \ dx$$
