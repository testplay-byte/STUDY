---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-10
chapter_folder: Chapter-10-Numerical-Methods
chapter_number: 10
chapter_title: NUMERICAL METHODS
page_image: 11
page_printed: 284
section: null
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Mathematics/Unit-10-Numerical-Methods/0011.jpg
converted_at: "2026-09-20"
converted_by: "coordinator-w5 (glm-vision)"
notes: "BOOK TYPOS preserved in the MATLAB box: 'dis(...)) ' (disp) and 'no convergence after n interactions' (iterations) as printed. MATLAB box -> fenced code block (not a figure)."
---

# Page 11 — Unit 10: Numerical Methods

> 📄 Original scan: [0011.jpg](../../../Raw/Mathematics/Unit-10-Numerical-Methods/0011.jpg) · printed page 284

Putting $x = 0$ in equation (i), first approximation $x_0$ is given by:

$$\begin{aligned} x_1 &= \frac{2[x_0^3 + x_0^2 + 10]}{3x_0^2 + 4x_0 + 10} = \frac{2[(1.2)^3 + (1.2)^2 + 10]}{3(1.2)^2 + 4(1.2) + 10} = \frac{6.336}{19.12} = 1.3774059 \end{aligned}$$

The second approximation $x_2$ is:

$$\begin{aligned} x_2 &= \frac{2[x_1^3 + x_1^2 + 10]}{3x_1^2 + 4x_1 + 10} \\ &= \frac{2[(1.3774059)^3 + (1.3774059)^2 + 10]}{3(1.3774059)^2 + 4(1.3774059) + 10} = \frac{29.021052}{21.201364} = 1.3688295 \\ x_3 &= \frac{2[x_2^3 + x_2^2 + 10]}{3x_2^2 + 4x_2 + 10} \\ &= \frac{2[(1.3688295)^3 + (1.3688295)^2 + 10]}{3(1.3688295)^2 + 4(1.3688295) + 10} = \frac{28.876924}{21.0964} = 1.3688081 \end{aligned}$$

The fourth approximation is $x_4 = 1.3688081$. Hence the root is $1.3688081$.

**Example 6:** Solve $\sin(x)=1+x^3$ using Newton's Raphson method by taking initial approximation $x_0 = -1.1$ up to 6 decimal places.

**Solution:**

Let $\quad f(x)=\sin(x)-1-x^3$

$\quad f'(x)=\cos(x)-3x^2$

$$\begin{aligned} x_{n+1} &= x_n - \frac{f(x_n)}{f'(x_n)} = x_n - \frac{\sin(x_n)-1-x_n^3}{\cos(x_n)-3x_n^2} \\ &= \frac{x_n \cos(x_n) - \sin(x_n) - 2x_n^3 + 1}{\cos(x_n) - 3x_n^2} \quad \text{......(i)} \end{aligned}$$

When $n=0,1,2,.....$

Putting $n=0$ in (i)

$$\begin{aligned} x_1 &= \frac{x_0 \cos(x_0) - \sin(x_0) - 2x_0^3 + 1}{\cos(x_0) - 3x_0^2} \\ &= \frac{(-1.1)\cos(-1.1) - \sin(-1.1) - 2(-1.1)^3 + 1}{\cos(-1.1) - 3(-1.1)^2} \\ &= \frac{4.0542516}{-3.1764039} = -1.2763653 \\ x_2 &= \frac{5.7452469}{-4.5971297} = -1.2497465 \\ x_3 &= \frac{5.4584049}{-4.370036} = -1.2490526 \\ x_4 &= \frac{5.4510835}{-4.364170} = -1.2490522 \end{aligned}$$

Hence, the approximate root is $= -1.249052$


```
Matlab code for Newton's method
function[root]=newtonmethod(f,df,xo,tol,n)
xn=xo;
for k=1:n
   xn1=xn-f(xn)/df(xn);
   dx=abs(xn1-xn);
   xn=xn1;
   if dx<tol
      dis("newton method has converged")
      root=xn;
      return
   end
end
disp("no convergence after n interactions")
```
