---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-3
chapter_folder: Chapter-03-Integration
chapter_number: 3
chapter_title: INTEGRATION
page_image: 11
page_printed: 99
section: null
exercise: "3.3"
content_type: mixed
has_figures: false
figures_count: 0
source_image: ../../../Raw/Mathematics/Unit-03-Integration/0011.jpg
converted_at: "2026-09-06"
converted_by: "agent-13d (glm-vision)"
notes: ""
---

# Page 11 — Unit 03: Integration

> 📄 Original scan: [0011.jpg](../../../Raw/Mathematics/Unit-03-Integration/0011.jpg) · printed page 99

$$\begin{aligned}
&= \ln[\sec\theta + \tan\theta] + c = \ln[\tan\theta + \sec\theta] + c = \ln\left[\tan\theta + \sqrt{1 + \tan^2\theta}\right] + c \\
&= \ln\left[\frac{x}{a} + \sqrt{1 + \frac{x^2}{a^2}}\right] + c = \ln\left[\frac{x}{a} + \sqrt{\frac{a^2+x^2}{a^2}}\right] + c = \ln\left[\frac{x}{a} + \frac{\sqrt{a^2+x^2}}{a}\right] + c \\
&= \ln\left[\frac{x+\sqrt{a^2+x^2}}{a}\right] + c = \ln(x+\sqrt{a^2+x^2}) - lna + c \\
&= \ln(x+\sqrt{a^2+x^2}) + (c - lna) = \ln(x+\sqrt{a^2+x^2}) + C
\end{aligned}$$

**Formula 3.9:** $\displaystyle \int \frac{1}{a^2+x^2}\, dx = \frac{1}{a}\tan^{-1}\left(\frac{x}{a}\right) + c$

This formula can easily be proved by substituting $x = a\tan\theta$.

**Example 11:** Evaluate: $\displaystyle \int \frac{1}{x^2+4x+5}\, dx$

**Solution:** $\displaystyle \int \frac{1}{x^2+4x+5}\, dx = \int \frac{1}{x^2+4x+4+1}\, dx = \int \frac{1}{(x+2)^2+(1)^2}\, dx$

$$= \frac{1}{1}\tan^{-1}\left(\frac{x+2}{1}\right) + c = \tan^{-1}(x+2) + c \qquad \text{(Using direct formula)}$$

**Note:** We can also solve by substituting $x+2=\tan\theta$

**Example 12:** Evaluate: $\displaystyle \int x(x^2-a^2)^{\frac{3}{2}}\, dx$

**Solution:** Putting $x^2-a^2=u$

$$\Rightarrow 2xdx = du \quad \Rightarrow \quad xdx = \frac{du}{2}$$

$$\begin{aligned}
\therefore \int x(x^2-a^2)^{\frac{3}{2}}\, dx &= \int (u)^{\frac{3}{2}} \frac{du}{2} = \frac{1}{2} \int (u)^{\frac{3}{2}}\, du \\
&= \frac{1}{2} \frac{(u)^{\frac{3}{2}+1}}{\frac{3}{2}+1} = \frac{1}{2} \times \frac{u^{\frac{5}{2}}}{\frac{5}{2}} = \frac{1}{5}(x^2-a^2)^{\frac{5}{2}} + c
\end{aligned}$$

## Exercise 3.3

Use suitable substitution, to evaluate the integrals.

1. $\displaystyle \int \frac{dx}{x^2+9}$  
2. $\displaystyle \int \frac{dx}{\sqrt{5-x^2}}$  
3. $\displaystyle \int (2x+7)(x^2+7x+3)^{\frac{4}{5}}\, dx$  

4. $\displaystyle \int \frac{x^2}{x^3+1}\, dx$  
5. $\displaystyle \int \frac{dy}{y^2+8y+20}$  
6. $\displaystyle \int \frac{dx}{\sqrt{20-x^2-4x}}$  

7. $\displaystyle \int \frac{x\,dx}{(4x^2+1)^3}$  
8. $\displaystyle \int x^4\sqrt{3x^5-5}\, dx$  
9. $\displaystyle \int \frac{2ax+b}{ax^2+bx+c}\, dx$  

10. $\displaystyle \int \frac{dx}{(1-3x)^2}$  
11. $\displaystyle \int \frac{z^3}{1+z^4}\, dz$  
12. $\displaystyle \int \frac{\cot^{-1}x}{1+x^2}\, dx$
