---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-3
chapter_folder: Chapter-03-Integration
chapter_number: 3
chapter_title: INTEGRATION
page_image: 10
page_printed: 98
section: null
exercise: null
content_type: mixed
has_figures: false
figures_count: 0
source_image: ../../../Raw/Mathematics/Unit-03-Integration/0010.jpg
converted_at: "2026-09-06"
converted_by: "agent-13d (glm-vision)"
notes: "Example 10 statement is printed as the bare expression (no integral sign/dx) in the book — preserved verbatim."
---

# Page 10 — Unit 03: Integration

> 📄 Original scan: [0010.jpg](../../../Raw/Mathematics/Unit-03-Integration/0010.jpg) · printed page 98

$$\begin{aligned} &= a^2 \int \frac{1+\cos 2\theta}{2} \, d\theta = \frac{a^2}{2} \int (1+\cos 2\theta) \, d\theta = \frac{a^2}{2}\left(\theta + \frac{\sin 2\theta}{2}\right) + c \\ &= \frac{a^2}{2}\theta + \frac{a^2}{2}\left(\frac{\sin 2\theta}{2}\right) + c = \frac{a^2}{2}\theta + \frac{a^2}{2}\left(\frac{2 \sin \theta \cos \theta}{2}\right) + c \\ &= \frac{a^2}{2}\theta + \frac{a^2}{2}(\sin \theta \sqrt{1-\sin^2 \theta}) + c = \frac{a^2}{2} \sin^{-1}\left(\frac{x}{a}\right) + \frac{a^2}{2}\left(\frac{x}{a} \sqrt{1-\frac{x^2}{a^2}}\right) + c \\ &= \frac{a^2}{2} \sin^{-1}\left(\frac{x}{a}\right) + \frac{a^2}{2}\left(\frac{x}{a} \sqrt{\frac{a^2-x^2}{a^2}}\right) + c = \frac{a^2}{2} \sin^{-1}\left(\frac{x}{a}\right) + \frac{x\sqrt{a^2-x^2}}{2} + c \end{aligned}$$

**Example 10:** Evaluate: $\displaystyle \frac{1}{\sqrt{5-4x-x^2}}$

**Solution:** $\displaystyle \int \frac{1}{\sqrt{5-4x-x^2}} \, dx = \int \frac{1}{\sqrt{5+4-4-4x-x^2}} \, dx = \int \frac{1}{\sqrt{9-(4+4x+x^2)}} \, dx$

$$= \int \frac{1}{\sqrt{(3)^2-(2+x)^2}} \, dx = \sin^{-1}\left(\frac{2+x}{3}\right) + c \qquad \text{(Using direct formula)}$$

**Note:** We can also solve by substituting $x+2=3\sin\theta$

**Formula 3.7:** $\displaystyle \int \frac{1}{\sqrt{x^2-a^2}} \, dx = \ln(x+\sqrt{x^2-a^2}) + C$

**Derivation:** Substituting $x=a\sec\theta$, we have $dx=a\sec\theta\tan\theta \, d\theta$

$$\begin{aligned} \therefore \int \frac{1}{\sqrt{x^2-a^2}} \, dx &= \int \frac{1}{\sqrt{(a\sec\theta)^2-a^2}} \, a\sec\theta\tan\theta \, d\theta \\ &= \int \frac{1}{\sqrt{a^2\sec^2\theta-a^2}} \, a\sec\theta\tan\theta \, d\theta = \int \frac{1}{\sqrt{a^2(\sec^2\theta-1)}} \, a\sec\theta\tan\theta \, d\theta \\ &= \int \frac{1}{a\tan\theta} \, a\sec\theta\tan\theta \, d\theta = \int \sec\theta \, d\theta = \ln[\sec\theta+\tan\theta] + c \\ &= \ln[\sec\theta+\sqrt{\sec^2\theta-1}] + c = \ln\left[\frac{x}{a}+\sqrt{\frac{x^2}{a^2}-1}\right] + c = \ln\left[\frac{x}{a}+\sqrt{\frac{x^2-a^2}{a^2}}\right] + c \\ &= \ln\left[\frac{x}{a}+\frac{\sqrt{x^2-a^2}}{a}\right] + c = \ln\left[\frac{x+\sqrt{x^2-a^2}}{a}\right] + c = \ln(x+\sqrt{x^2-a^2}) - \ln a + c \\ &= \ln(x+\sqrt{x^2-a^2}) + (c-\ln a) = \ln(x+\sqrt{x^2-a^2}) + C \end{aligned}$$

**Note:** Expression $\displaystyle \frac{1}{\sqrt{x^2-a^2}}$ can also be integrated by making the substitution $x=a\cosh\theta$.

**Formula 3.8:** $\displaystyle \int \frac{1}{\sqrt{x^2+a^2}} \, dx = \ln(x+\sqrt{a^2+x^2}) + C$

**Derivation:** Substituting $x=a\tan\theta$, we have $dx=a\sec^2\theta \, d\theta$

$$\begin{aligned} \therefore \int \frac{1}{\sqrt{x^2+a^2}} \, dx &= \int \frac{1}{\sqrt{(a\tan\theta)^2+a^2}} \, a\sec^2\theta \, d\theta = \int \frac{1}{\sqrt{a^2\tan^2\theta+a^2}} \, a\sec^2\theta \, d\theta \\ &= \int \frac{1}{\sqrt{a^2(\tan^2\theta+1)}} \, a\sec^2\theta \, d\theta = \int \frac{1}{a\sec\theta} \, a\sec^2\theta \, d\theta = \int \sec\theta \, d\theta \end{aligned}$$
