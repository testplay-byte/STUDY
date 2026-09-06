---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-4
chapter_folder: Chapter-04-Differential-Equations
chapter_number: 4
chapter_title: DIFFERENTIAL EQUATIONS
page_image: 18
page_printed: 137
section: null
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Mathematics/Unit-04-Differential-Equations/0018.jpg
converted_at: "2026-09-06"
converted_by: "agent-13f2 (glm-vision)"
notes: "Continuation of Example 16 (from p.136) — no printed section heading; §4.7 in force. Book typos preserved: 'Integrating both sides, se have:' ('se' for 'we') and 'Which is velocity of the ball after 1 second.' (no 'the'). Example 16 prints v = 9.8 × 2.02 = 19.8 m/s (exactly 19.796, rounded as printed). Ends with 'Check Point' sidebar box → blockquote."
---

# Page 18 — Unit 04: Differential Equations

> 📄 Original scan: [0018.jpg](../../../Raw/Mathematics/Unit-04-Differential-Equations/0018.jpg) · printed page 137

Now, integrating both sides, we get

$$v = gt + c_1$$

At $t = 0, v = 0$, the constant $c_1 = 0$.

Thus, $v = gt$ ......(i)

Substituting the values,

$$v = 9.8 \times 1 = 9.8m/s$$

Which is velocity of the ball after 1 second.

Now from (i)

$$\frac{dS}{dt} = gt \text{ where } S \text{ is the distance covered by the ball.}$$

$$dS = gtdt$$

Integrating both sides, se have:

$$S = g\frac{t^2}{2} + c_2 \text{ ......(ii)}$$

At $t = 0, S = 0$, therefore from (ii), $c_2 = 0$.

and, $S = g\frac{t^2}{2}$ implies

$$20 = 9.8 \times \frac{t^2}{2} \quad \text{or} \quad t = 2.02sec$$

Now from (i)

$$v = 9.8 \times 2.02 = 19.8m/s$$

Thus, the velocity with which the ball hits the ground is $19.8m/s$.

**Example 17:**

According to Newton, cooling of a hot body is proportional to the temperature difference between its temperature $T$ and the temperature $T_0$ of its surrounding medium. If a body at $90^\circ\text{C}$ is allowed to cool in air with temperature $30^\circ\text{C}$ and if it is observed after 5 min the body has cooled to $70^\circ\text{C}$, find the temperature of the body as a function of time.

**Solution:** The mathematical formulation of Newton's law of cooling in this problem is:

$$\frac{dT}{dt} \propto (T - T_0) \text{ ..........(1)}$$

Introducing a proportionality constant $k > 0$, the above equation can be written as:

$$\frac{dT}{dt} = k(T - T_0) \text{ ..........(2)}$$

Here, $T$ is the temperature of the body and $t$ is the time, $T_0$ is the temperature of the surrounding and $\frac{dT}{dt}$ is the rate of cooling of the body. Substituting, $T_0 = 30^\circ$ in equation (2), we get:

$$\frac{dT}{dt} = k(T - 30) \implies \frac{dT}{T - 30} = kdt$$

> **Check Point**
> A thermometer showing the temperature of $20^\circ\text{C}$ indoors is placed outdoors. After 8 minutes it reads $25^\circ\text{C}$ and after another 8 minutes it reads $30^\circ\text{C}$. Using Newton's law of cooling, find the outdoors temperature.
