---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-10
chapter_folder: Chapter-10-Numerical-Methods
chapter_number: 10
chapter_title: NUMERICAL METHODS
page_image: 6
page_printed: 279
section: null
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Mathematics/Unit-10-Numerical-Methods/0006.jpg
converted_at: "2026-09-20"
converted_by: "coordinator-w5 (glm-vision)"
notes: "BOOK MISPRINTS preserved (zoom-verified): 'f(x_2) is negective' (negative); x_4 numerator prints stale (0.4+0.5)/2 instead of (0.5+0.45)/2 (result 0.475 is correct). Bisection Method advantages/limitations box -> blockquote; MATLAB code box -> fenced code block."
---

# Page 6 — Unit 10: Numerical Methods

> 📄 Original scan: [0006.jpg](../../../Raw/Mathematics/Unit-10-Numerical-Methods/0006.jpg) · printed page 279

**Example 1:** Use the Bisection method to find (correct to two decimal points) the root between 0.4 and 0.6 of the equation $\sin(x)-5x+2=0$.

**Note:** if two initial guesses are not given, then find two points, the value of function has opposite signs on $x_1$ and $x_2$, so $f(x_1).f(x_2)<0$.

**Solution:**

Let $f(x)=\sin(x)-5x+2$; $x_0=0.4$, $x_1=0.6$

$$f(x_0)=f(0.4)=\sin(0.4)-5(0.4)+2=0.3894 \text{ (+ve)}$$

$$f(x_1)=f(0.6)=\sin(0.6)-5(0.6)+2=-0.4354 \text{ (-ve)}$$

Applying the bisection algorithm

$$f(x_0)f(x_1)=0.3894\times(-0.4354)=-0.1695<0$$

We have,

$$x_2=\frac{x_0+x_1}{2}=\frac{0.4+0.6}{2}=0.5$$

$$f(x_2)=\sin(0.5)-5(0.5)+2=-0.0206$$

Since,

$f(x_0)f(x_2)<0$, ($f(x_0)$ is positive and $f(x_2)$ is negective)

$$x_3=\frac{x_0+x_2}{2}=\frac{0.4+0.5}{2}=0.45$$

The root lies in between $x_0$ and $x_2$.

$$f(x_3)=f(0.45)=\sin(0.45)-5(0.45)+2=0.1850 \text{ (+ve)}$$

Here,

$f(x_2)f(x_3)<0$

$$x_4=\frac{x_2+x_3}{2}=\frac{0.4+0.5}{2}=0.475$$

$f(x_4)=0.0832$ (+ve) and $f(x_3)$ is also + ve, $f(x_2)$ is – ve

To find $x_5$ we will use $x_2$ and $x_4$.

$$x_5=\frac{x_2+x_4}{2}=\frac{0.5+0.475}{2}=0.4875, f(x_5)=0.0309$$

Again $f(x_5)$ is + ve, we consider

$f(x_2).f(x_5)<0$. The root lies between $x_2$ and $x_5$

$$x_6=\frac{x_2+x_5}{2}=\frac{0.5+0.4875}{2}=0.4937, f(x_6)=0.005181 \text{ (+ve)}$$

$$x_7=\frac{0.5+0.4937}{2}=0.4968$$

Hence, $x_6=0.4937$, $x_7=0.4968$

We have obtained accuracy up to two decimal places.
Approximate solution is = 0.4968.

> **Bisection Method:**

> **Advantages:**
> * Simple and robust.
> * Guaranteed to converge if the function changes sign over an interval.
>
> **Limitations:**
> * Convergence can be slow, especially if high precision is required.
> * Requires the initial interval to be known where the sign change occurs.

```
MATLAB code for bisection method
syms x
F=input('enter function');
f=inline(F);
a=input('left limit of interval');
b=input('right limit of interval');
n=input('number of iterations');
e=input('enter tolerance');
disp('n      a       b       c       f(a)
f(b)     f(c)')
for i=1:n;
    f1=f(a);
    f2=f(b);
    if f1==0
        fprintf('root is =%f',a)
        break
    else if f2==0
            fprintf('root is =%f',b)
            break
        end
    end
    if f1*f2>0;
        disp('no root exist in the given interval')
        break
    else if f1*f2<0;
            c=(a+b)/2;
            f3=f(c);
        end
    end
end
fprintf('%i   %f   %f   %f   %f   %f   %f\n',i,a,b,c,f1,f2,f3)
if abs(b-a)<e
    break
end
if f3==0
    fprintf('root is =%f',c)
    break
else if f1*f3<0;
        b=c;
    else if f2*f3<0;
            a=c;
        end
    end
end
end
```
