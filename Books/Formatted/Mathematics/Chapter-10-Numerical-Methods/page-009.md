---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-10
chapter_folder: Chapter-10-Numerical-Methods
chapter_number: 10
chapter_title: NUMERICAL METHODS
page_image: 9
page_printed: 282
section: 10.7 Newton's Raphson Method
exercise: null
content_type: theory
has_figures: false
figures_count: 0
source_image: ../../../Raw/Mathematics/Unit-10-Numerical-Methods/0009.jpg
converted_at: "2026-09-20"
converted_by: "coordinator-w5 (glm-vision)"
notes: "BOOK MISPRINT preserved: x_2 formula prints x_0 \\cdot (x_1) and denominator (x_1) where f(x_1) is meant (twice). MATLAB box (with its title line inside the box) -> fenced code block; internal string line-wraps reproduced as printed."
---

# Page 9 — Unit 10: Numerical Methods

> 📄 Original scan: [0009.jpg](../../../Raw/Mathematics/Unit-10-Numerical-Methods/0009.jpg) · printed page 282

Since, $f(x_0)f(x_1)<0$

$$\begin{aligned} x_2 &= \frac{x_0 \cdot (x_1) - x_1 f(x_0)}{(x_1)-f(x_0)} \\ &= \frac{1(3.72253)-1.5(-0.28172)}{3.72253-(-0.28172)} = 1.035 \end{aligned}$$

$f(x_2)=f(1.035)=1.035(e^{1.035})-3=-0.0864 (-ve)$

$f(x_2)f(x_1)<0$

Therefore, root lies between $x_1$ and $x_2$.

$$\begin{aligned} x_3 &= \frac{x_1 f(x_2)-x_2 f(x_1)}{f(x_2)-f(x_1)} \\ &= \frac{1.5(-0.0864)-1.035(3.72253)}{-0.0864-3.72253}=1.045 \end{aligned}$$

Now, $f(x_3)=f(1.045)=1.045e^{1.045}-3=-0.0286485(-ve)$

The root lies between $x_1$ and $x_3$.

$$\begin{aligned} x_4 &= \frac{x_1 f(x_3)-x_3 f(x_1)}{f(x_3)-f(x_1)} \\ &= \frac{1.5(-0.0286)-1.045(3.72253)}{-0.0286-3.72253}=1.048 \end{aligned}$$

So, the root is 1.048 up to 2 decimal places.

```
Matlab code Regula Falsi method
syms x;
y = input('Enter non-linear equations:
');
a = input('Enter first guess: ');
b = input('Enter second guess: ');
e = input('Tolerable error: ');
fa = eval(subs(y,x,a));
fb = eval(subs(y,x,b));
if fa*fb > 0
    disp('Given initial values do not
bracket the root.');
else
    c = a - (a-b) * fa/(fa-fb);
    fc = eval(subs(y,x,c));
fprintf('\n\na\t\tb\t\tc\t\t\tf(c)
\n');
    while abs(fc)>e
fprintf('%f\t\t%f\t\t%f\n',a,b,c,c);
        if fa*fc< 0
            b =c;
            fb = eval(subs(y,x,b));
        else
            a =c;
            fa = eval(subs(y,x,a));
        end
    c = a - (a-b) * fa/(fa-fb);
    fc = eval(subs(y,x,c));
    end
fprintf('\nRoot is: %f\n', c);
```

## 10.7 Newton's Raphson Method

It can be derived as follows:

Let $x_0$ be an approximation of a root of the given equation $f(x)=0$, which may be algebraic or transcendental.

Let $x_0 + h$ be the exact value or the better approximation of the corresponding root, $h$ being a small quantity. Then $f(x_0+h)=0$.

Expanding it by Taylor's theorem, we get

$$f(x_0+h)=f(x_0)+hf'(x_0)+\frac{h^2}{2!}f''(x_0)+......=0$$

Since $h$ is small, we neglect second, third and higher degree terms in $h$ and thus we will get,

$$f(x_0)+hf'(x_0)=0$$

$$\text{Or } h=-\frac{f(x_0)}{f'(x_0)}; \quad f'(x_0)\neq 0$$
