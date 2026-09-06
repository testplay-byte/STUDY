---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-4
chapter_folder: Chapter-04-Differential-Equations
chapter_number: 4
chapter_title: DIFFERENTIAL EQUATIONS
page_image: 19
page_printed: null
section: null
exercise: "4.4"
content_type: exercise
has_figures: false
figures_count: 0
source_image: ../../../Raw/Mathematics/Unit-04-Differential-Equations/0019.jpg
converted_at: "2026-09-06"
converted_by: "agent-13f2 (glm-vision)"
notes: "Footer ribbon CUT at the bottom edge of the scan — pixel-verified: only ~26 top pixel rows of the blue ribbon visible (y≥3470 of 3496), no digit readable inside; page_printed recorded as null per convention (offset would suggest 138 — never computed into the field). Bottom trim also shaves descenders of the final body line only; right-edge strip zoom-verified complete words, nothing lost. First half finishes Example 17 (from p.137); Exercise 4.4 word problems Q.1-6 (one per line). Book typos preserved: 'a radioactive substances', 'at the rate proportional', 'the temperature of thermometer', 'removing from the oven'."
---

# Page 19 — Unit 04: Differential Equations

> 📄 Original scan: [0019.jpg](../../../Raw/Mathematics/Unit-04-Differential-Equations/0019.jpg) · printed page n/a

Integrating both sides, we get:
$$\begin{aligned} ln(T - 30) &= kt + lnc \quad \text{where } c \text{ is the constant of integration.} \\ ln(T - 30) &= lne^{kt} + lnc \quad \Rightarrow \quad ln(T - 30) = ln(ce^{kt}) \end{aligned}$$

Taking antilog, we get:
$$T - 30 = ce^{kt} \qquad \qquad \text{.......... (3)}$$

Imposing the initial condition $T(0) = 90^\circ$, we find:
$$90 - 30 = c \quad \Rightarrow \quad c = 60$$

Therefore (3) implies:
$$T - 30 = 60e^{kt} \quad \Rightarrow \quad T = 60e^{kt} + 30 \quad \text{.......... (4)}$$

To find the value of constant $k$, we use the second condition $T(5) = 70^\circ$ in (4).
$$\begin{aligned} 70 &= 60e^{5k} + 30 \Rightarrow \quad 60e^{5k} = 40 \quad \Rightarrow \quad e^{5k} = \frac{2}{3} \\ 5k &= ln \left(\frac{2}{3}\right) \quad \Rightarrow \quad k = \frac{1}{5} ln \left(\frac{2}{3}\right) = -0.081 \end{aligned}$$

Substituting the value of $k$ in relation (4), we have:
$$T = 60e^{-0.081t} + 30$$

Which shows the temperature of the body as a function of time.

## Exercise 4.4

1. Thomas Malthus in 1798 proved that increase in population of a country or a city at a certain time is proportional to the total population of the country at that time $\left(\frac{dP}{dt} \propto P\right)$. If at present the population of city A is 20 million and after 4 years, it is expected to be 25 million, what would be the population of that city after 12 years?

2. Ayesha was preparing a pizza in a baking oven. She observed that temperature of the cooked pizza was $150^\circ$C. Four minutes after removing from the oven, the temperature of pizza was $90^\circ$C. How long will it take to cool off to a temperature of $40^\circ$C if room temperature is $20^\circ$C?

3. In a culture, the rate of growth of bacteria is proportional to the population present. If the population of bacteria becomes four times in two days, how much the population would be after ten days at the same rate if the initial population was 20?

4. Most of the radioactive substances disintegrate at the rate proportional to the amount present. If the amount of a radioactive substances is 50 grams and its half life is 1000 years, find the amount of substance present after 800 years.

5. A thermometer showing room temperature of $80^\circ$F is placed on a block of ice with a temperature of $30^\circ$F. After one minute the temperature of thermometer is $40^\circ$F. How long will it take for the thermometer to have a temperature of $70^\circ$F?

6. A ball is thrown upward with a velocity of 40m/s. Develop a differential equation representing the flow phenomenon and find the velocity of the ball after 1 second. Also find the maximum height attained by the ball. Neglect the air resistance.
