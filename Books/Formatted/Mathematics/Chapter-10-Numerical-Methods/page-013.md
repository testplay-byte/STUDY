---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-10
chapter_folder: Chapter-10-Numerical-Methods
chapter_number: 10
chapter_title: NUMERICAL METHODS
page_image: 13
page_printed: 286
section: "10.9 Simpson's 1/3 Rule"
exercise: null
content_type: theory
has_figures: false
figures_count: 0
source_image: ../../../Raw/Mathematics/Unit-10-Numerical-Methods/0013.jpg
converted_at: "2026-09-20"
converted_by: "coordinator-w5 (glm-vision)"
notes: ""
---

# Page 13 — Unit 10: Numerical Methods

> 📄 Original scan: [0013.jpg](../../../Raw/Mathematics/Unit-10-Numerical-Methods/0013.jpg) · printed page 286

$$x_2 = x_0 + 2h \dots \dots x_n = x_0 + nh = b.$$

Area of trapezium 1: $\displaystyle \int_{x_0}^{x_0+h} f(x)dx=\frac{h}{2}[y_0 + y_1]$

Similarly,
$$\int_{x_0+h}^{x_0+2h} f(x)dx=\frac{h}{2}[y_1 + y_2]$$

$$\int_{x_0+(n-1)h}^{x_0+nh} f(x)dx=\frac{h}{2}[y_{n-1} + y_n]$$

Adding these $n$ integrals, we get
$$\int_{x_0}^{x_0+nh} f(x)dx=\frac{h}{2}[(y_0 + y_n)+2(y_1 + y_2 + \dots \dots y_{n-1})]$$

This rule is known as the Trapezoidal rule. It is also called multiple segment or composite trapezoidal rule. Note that all functional values except the first and the last are multiplied by 2. The total area under the curve can therefore be approximated by the sum of areas of $n$ trapezia. Approximations to the integrals can be improved to some extent making the step size $h$ smaller and smaller (by increasing the number of intervals).

## 10.9 Simpson's $\frac{1}{3}$ Rule

The Simpson's $\frac{1}{3}$ rule for evaluation of integral $\displaystyle \int_a^b f(x)dx$ is:

$$\int_{x_0}^{x_0+nh} f(x)dx=\frac{h}{3}[(y_0 + y_n)+4(y_1 + y_3 + \dots \dots + y_{n-1})+2(y_2 + y_4 + \dots \dots + y_{n-2})]$$

**Note:** Proof is not provided at this level, beyond the scope.

The above relation is called Simpson's $\frac{1}{3}$ rule or simply Simpson's rule. It is obvious that with the exception of the first and the last functional values, all odd functional values are multiplied by 4 and all even functional values are multiplied by 2. The formula is used only when $n$ is even. Simpson's rule gives a more accurate result than the trapezoidal rule and is easier to progress and manipulate as well.
