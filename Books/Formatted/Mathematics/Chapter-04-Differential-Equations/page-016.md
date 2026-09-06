---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-4
chapter_folder: Chapter-04-Differential-Equations
chapter_number: 4
chapter_title: DIFFERENTIAL EQUATIONS
page_image: 16
page_printed: null
section: null
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Mathematics/Unit-04-Differential-Equations/0016.jpg
converted_at: "2026-09-06"
converted_by: "agent-13g (glm-vision)"
notes: "Printed folio cut off in scan: the blue footer ribbon is entirely absent from the bottom of the image (pixel-verified: zero blue pixels in the bottom 6% of the scan). page_printed recorded as null per convention (offset would suggest 135 - never computed into the field)."
---

# Page 16 — Unit 04: Differential Equations

> 📄 Original scan: [0016.jpg](../../../Raw/Mathematics/Unit-04-Differential-Equations/0016.jpg) · printed page n/a

**Example 14:** Solve $\frac{dy}{dx} = \frac{x^2 + y^2}{2xy}$

**Solution:** Putting $y = ux$ in the given differential equation, we have $\frac{dy}{dx} = u + x \frac{du}{dx}$

Therefore, given differential equation leads to:

$$u + x \frac{du}{dx} = \frac{x^2 + u^2x^2}{2xux} \quad \Rightarrow \quad u + x \frac{du}{dx} = \frac{1+u^2}{2u}$$

$$\Rightarrow \quad x \frac{du}{dx} = \frac{1+u^2}{2u} - u \quad \Rightarrow \quad x \frac{du}{dx} = \frac{1-u^2}{2u} \quad \Rightarrow \quad \frac{2u}{1-u^2} du = \frac{dx}{x}$$

Integrating, we get:
$$\int \frac{2u}{1-u^2} du = \int \frac{dx}{x}$$

$$-\ln(1-u^2) = lnx + lnc \quad \Rightarrow \quad ln(1-u^2) + lnx + lnc = 0$$

$$\Rightarrow \quad ln[cx(1-u^2)] = 0$$

Taking antilog, we have:
$$cx(1-u^2)=1 \quad \Rightarrow \quad cx\left(1-\frac{y^2}{x^2}\right)=1 \quad ..... \text{(replacing } u \text{ by } \frac{y}{x}\text{)}$$

$$\Rightarrow \quad cx\left(\frac{x^2-y^2}{x^2}\right)=1 \quad \Rightarrow \quad x^2 - y^2 = \frac{x}{c} \quad \Rightarrow \quad x^2 - y^2 = Cx \qquad (\frac{1}{c}=C)$$

**Example 15:** Solve the initial value problem:
$$x \frac{dy}{dx} = y + x e^{y/x} ; \quad y(1) = 1$$

**Solution:** Given equation is homogeneous of degree zero and can be rewritten as:
$$\frac{dy}{dx} = \frac{y}{x} + e^{y/x} ; \quad y(1) = 1$$

Substituting $y = ux$ in the given differential equation, we have $\frac{dy}{dx} = u + x \frac{du}{dx}$

Therefore, given differential equation becomes:

$$u + x \frac{du}{dx} = \frac{ux}{x} + e^{ux/x} \quad \Rightarrow \quad u + x \frac{du}{dx} = u + e^u$$

$$\Rightarrow \quad e^{-u} du = \frac{dx}{x} \quad \Rightarrow \quad \int e^{-u} du = \int \frac{dx}{x}$$

$$\Rightarrow \quad -e^{-u} = lnx + c \quad \Rightarrow \quad -e^{-y/x} = lnx + c \qquad (i)$$

Substituting, $x=1, y=1$ in equation (i), we have:
$$-e^{-1} = ln1 + c \quad \Rightarrow \quad c = -e^{-1}$$

Therefore, (i) leads to:
$$-e^{-y/x} = lnx - e^{-1} \quad \Rightarrow \quad e^{-1} - e^{-y/x} = lnx$$
