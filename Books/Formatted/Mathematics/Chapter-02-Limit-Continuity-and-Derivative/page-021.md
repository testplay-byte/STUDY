---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-2
chapter_folder: Chapter-02-Limit-Continuity-and-Derivative
chapter_number: 2
chapter_title: LIMIT, CONTINUITY AND DERIVATIVE
page_image: 21
page_printed: 63
section: "The other Trigonometric Functions:"
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Mathematics/Unit-02-Limit-Continuity-and-Derivative/0021.jpg
converted_at: "2026-09-06"
converted_by: "agent-13b (glm-vision)"
notes: "Page begins mid-derivation (continuation of the d/dx sin x derivation from printed p.62). No numbered section heading printed on this page; bold sub-heading 'The other Trigonometric Functions:' only. Book prints 'cosec' notation, preserved."
---

# Page 21 — Unit 02: Limit, Continuity and Derivative

> 📄 Original scan: [0021.jpg](../../../Raw/Mathematics/Unit-02-Limit-Continuity-and-Derivative/0021.jpg) · printed page 63

$$\begin{aligned} &= \lim_{\Delta x \to 0} \left[ \sin x \left[ \frac{\cos \Delta x - 1}{\Delta x} \right] + \cos x \left[ \frac{\sin \Delta x}{\Delta x} \right] \right] \\ &= \sin x \lim_{\Delta x \to 0} \frac{\cos \Delta x - 1}{\Delta x} + \cos x \lim_{\Delta x \to 0} \frac{\sin \Delta x}{\Delta x} \\ &= \sin x(0) + \cos x(1) \\ &\text{sinx and cosx independent of } \Delta x \end{aligned}$$

Thus, we have $\boxed{\frac{d}{dx}\sin x = \cos x}$

In a similar manner it can be shown that $\boxed{\frac{d}{dx}\cos x = -\sin x}$

**Example 21:** Find $\frac{dy}{dx}$ if $y = x\sin x$

**Solution:** $\displaystyle \frac{dy}{dx} = \frac{d}{dx}[x\sin x]$
$$\begin{aligned} &= x \frac{d}{dx}\sin x + \sin x \frac{d}{dx}x \text{ use product rule} \\ &= x\cos x + \sin x(1) = x\cos x + \sin x \end{aligned}$$

**Example 22:** Find $\frac{dy}{dx}$ if $y = \frac{\sin x}{1+\cos x}$

**Solution:** $\displaystyle \frac{dy}{dx} = \frac{d}{dx}\left[\frac{\sin x}{1+\cos x}\right]$
$$\begin{aligned} &= \frac{(1 + \cos x)\frac{d}{dx}\sin x - \sin x \frac{d}{dx}[1 + \cos x]}{(1 + \cos x)^2} \\ &= \frac{(1 + \cos x)\cos x - \sin x(0 - \sin x)}{(1 + \cos x)^2} \\ &= \frac{\cos x + \cos^2 x + \sin^2 x}{(1 + \cos x)^2} \\ &= \frac{1 + \cos x}{(1 + \cos x)^2} = \frac{1}{1 + \cos x} \end{aligned}$$

**The other Trigonometric Functions:**

Let $y = \tan x$
$$\begin{aligned} \frac{dy}{dx} &= \frac{d}{dx}\tan x = \frac{d}{dx}\frac{\sin x}{\cos x} \\ &= \frac{\cos x \frac{d}{dx}\sin x - \sin x \frac{d}{dx}\cos x}{\cos^2 x} \end{aligned} \quad \longrightarrow \quad \begin{aligned} &= \frac{(\cos x)\cos x - \sin x(-\sin x)}{\cos^2 x} \\ &= \frac{\cos^2 x + \sin^2 x}{\cos^2 x} \\ &= \frac{1}{\cos^2 x} = \sec^2 x \end{aligned}$$

$\boxed{\frac{d}{dx}\tan x = \sec^2 x}$

Similarly, $\boxed{\frac{d}{dx}\cot x = -\cosec^2 x}$

For $y = \sec x$
$$\begin{aligned} \frac{dy}{dx} &= \frac{d}{dx}\sec x = \frac{d}{dx}\frac{1}{\cos x} \\ &= \frac{\cos x \frac{d}{dx}(1) - (1)\frac{d}{dx}\cos x}{\cos^2 x} \\ &= \frac{\cos x(0) - (-\sin x)}{\cos^2 x} \\ &= \frac{\sin x}{\cos^2 x} = \sec x\tan x \end{aligned}$$

$\boxed{\frac{d}{dx}\sec x = \sec x\tan x}$

Similarly, $\boxed{\frac{d}{dx}\cosec x = \cosec x\cot x}$

**Example 23:** Find $\frac{dy}{dx}$ if $y = \frac{\cos x}{x-\cot x}$

**Solution:** $\displaystyle \frac{dy}{dx} = \frac{d}{dx}\left[\frac{\cos x}{x-\cot x}\right]$
$$\begin{aligned} &= \frac{(x - \cot x)\frac{d}{dx}\cos x - \cos x\frac{d}{dx}(x - \cot x)}{(x - \cot x)^2} \\ &= \frac{(x - \cot x)(-\sin x) - \cos x(1 - (-\cosec^2 x))}{(x - \cot x)^2} \\ &= \frac{-x\sin x + \cot x\sin x - \cos x - \cos x\cosec^2 x}{(x - \cot x)^2} \\ &= \frac{-x\sin x + \cos x - \cos x - \cos x\cosec^2 x}{(x - \cot x)^2} \\ &= \frac{-x\sin x - \cos x\cosec^2 x}{(x - \cot x)^2} \end{aligned}$$
