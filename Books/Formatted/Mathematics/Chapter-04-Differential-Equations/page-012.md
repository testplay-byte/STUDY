---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-4
chapter_folder: Chapter-04-Differential-Equations
chapter_number: 4
chapter_title: DIFFERENTIAL EQUATIONS
page_image: 12
page_printed: 131
section: "(ii) Initial Condition and Initial Value Problem (IVP)"
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Mathematics/Unit-04-Differential-Equations/0012.jpg
converted_at: "2026-09-06"
converted_by: "coordinator-test (glm-vision)"
notes: "Scan LEFT EDGE cropped: leading characters of many lines cut in the scan and reconstructed from context (Example/Solution/Integrating/Note/Taking antilog/We/arbitrary). Blue sub-heading number scan-cut: recorded as '(ii)' — inferred from the surviving ')' glyph + the sibling '(i) Variable Separable Differential Equations' heading on p.130 (both are sub-headings of 4.5.1). One line genuinely incomplete in the scan: 'Sometimes we need to find the solution of [...] subject to the supplementary conditions.' — ~2-3 words missing at the left edge, not recoverable."
---

# Page 12 — Unit 04: Differential Equations

> 📄 Original scan: [0012.jpg](../../../Raw/Mathematics/Unit-04-Differential-Equations/0012.jpg) · printed page 131

**Example 8:** Solve $\frac{dy}{dx} = \frac{x^2}{y}$

**Solution:** We first separate the variables of given equation as follows:

$$y dy = x^2 dx$$

Integrating both sides, we have:

$$\begin{aligned}
\int y dy &= \int x^2 dx \\
\frac{y^2}{2} &= \frac{x^3}{3} + c_1 \\
3y^2 &= 2x^2 + 6c_1 \\
\Rightarrow \quad 3y^2 &= 2x^2 + c \quad (c = 6c_1)
\end{aligned}$$

**Note:** To avoid lengthy process, we write constant at one side only.

**Example 9:** Solve $(1 + x)dy - y dx = 0$

**Solution:** The given equation can be written as:

$$(1 + x)dy = y dx$$

$$\frac{dy}{y} = \frac{dx}{1+x}$$

Integrating both sides, we have:

$$\begin{aligned}
\int \frac{dy}{y} &= \int \frac{dx}{1+x} \quad \Rightarrow \quad lny = ln(x + 1) + lnc \\
&\Rightarrow \quad lny = ln[c(x + 1)]
\end{aligned}$$

Taking antilog on both sides, we have:

$$y = c(x + 1)$$

**Example 10:** Solve $\frac{dy}{dx} = \frac{1}{x \tan y}$

**Solution:** The given equation is:

$$\begin{aligned}
\frac{dy}{dx} &= \frac{1}{x \tan y} &&\Rightarrow \quad \tan y \, dy = \frac{1}{x} dx \\
\int \tan y \, dy &= \int \frac{1}{x} dx &&\Rightarrow \quad -ln(\cos y) = lnx + lnc \\
\Rightarrow \quad 0 &= ln(\cos y) + lnx + lnc &&\Rightarrow \quad ln(cx \cos y) = 0 \\
\Rightarrow \quad e^{ln(cx \cos y)} &= e^0 &&\Rightarrow \quad cx \cos y = 1 \\
\Rightarrow \quad x \cos y &&&\Rightarrow \quad x \cos y = C \qquad (\frac{1}{c} = C)
\end{aligned}$$

## (ii) Initial Condition and Initial Value Problem (IVP)

We have observed that general solution of differential equation contains the same number of arbitrary constants as is the order of differential equation. Sometimes we need to find the solution of `[left edge cut]` subject to the supplementary conditions.
