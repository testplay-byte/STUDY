---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-2
chapter_folder: Chapter-02-Limit-Continuity-and-Derivative
chapter_number: 2
chapter_title: LIMIT, CONTINUITY AND DERIVATIVE
page_image: 12
page_printed: 54
section: null
exercise: null
content_type: theory
has_figures: true
figures_count: 1
source_image: ../../../Raw/Mathematics/Unit-02-Limit-Continuity-and-Derivative/0012.jpg
converted_at: "2026-09-06"
converted_by: "agent-13a2 (glm-vision)"
notes: "Continuation of 2.4 Instantaneous Velocity (started printed p.53) — no printed section heading anywhere on the page, section: null. Book grammar preserved verbatim: 'Suppose if a runner's completes 5 km in 0.5 hr...' and '= 8km/hr' (no space) in the first V_ave equation. Figure (right side, no printed caption): red/orange inverted-U parabola with black ground line through its ends and a black vertical line from the vertex down to a red ball dot labelled 'Ball at t = 3'. No edge cuts."
---

# Page 12 — Unit 02: Limit, Continuity and Derivative

> 📄 Original scan: [0012.jpg](../../../Raw/Mathematics/Unit-02-Limit-Continuity-and-Derivative/0012.jpg) · printed page 54

Consider a runner who finishes a 10 km race in an elapsed time of 1 hour and 15 min (1.25 hr). The runner's average velocity or average speed for the race was

$$V_{ave} = \frac{10}{1.25} = 8km/hr$$

But suppose we now wish to determine velocity at the instant the runner is one half hour into the race. If the distance run in the time interval from 0 hr to 0.5 hr is measured to be 5 km, then

$$V_{ave} = \frac{5}{0.5} = 10 \text{ km/hr}$$

Suppose if a runner's completes 5 km in 0.5 hr and 5.7 km in 0.6 hr, however, during the time interval from 0.5 hr to 0.6 hr

$$V_{ave} = \frac{5.7 - 5}{0.6 - 0.5} = 7 \text{ km/hr}$$

**Definition: Instantaneous Velocity**

Let $s = f(t)$ be a function that gives the position of an object moving in a **straight line**.
The instantaneous velocity at time $t_1$ is

$$V(t_1) = \lim_{\Delta t \to 0} \frac{f(t_1 + \Delta t) - f(t_1)}{\Delta t} = \lim_{\Delta t \to 0} \frac{\Delta s}{\Delta t}$$

whenever the limit exists.

**Example 11:** The height s above ground of a ball dropped from the top of the tower is given by $s = -4.9t^2 + 192$ where s is measured in meters and t in seconds. Find the instantaneous velocity of the falling ball at $t_1 = 3$ sec.

**Solution:** We use the same four step procedure:

Step 1: $f(3) = -4.9(3)^2 + 192 = 147.9$ for any $\Delta t \neq 0$

$$\begin{aligned}
f(3 + \Delta t) &= -4.9(3 + \Delta t)^2 + 192 \\
&= -4.9(\Delta t)^2 - 29.4\Delta t + 147.9
\end{aligned}$$

Step 2: $\Delta s = f(3 + \Delta t) - f(3)$

$$\begin{aligned}
&= [-4.9(\Delta t)^2 - 29.4\Delta t + 147.9] - 147.9 \\
&= \Delta t[-4.9\Delta t - 29.4]
\end{aligned}$$

[Figure F1]

Step 3: $\frac{\Delta s}{\Delta t} = \frac{\Delta t(-4.9\Delta t - 29.4)}{\Delta t}$

$$= -4.9\Delta t - 29.4$$

Step 4: $v(3) = \lim_{\Delta t \to 0} \frac{\Delta s}{\Delta t} = \lim_{\Delta t \to 0} (-4.9\Delta t - 29.4)$

$$= -29.4 \text{ m/sec}$$

The minus sign is significant because the ball is moving opposite to the positive or upward direction. The number $f(3) = 147.9$ m is the height of the ball above the ground at 3 seconds.

## Figures on this page

### Figure F1 — Ball dropping from tower (right side, beside Step 2–3)
- **Type:** illustration
- **Caption/Number:** (none printed)
- **Description:** A red/orange inverted-U parabolic arc whose two ends meet a solid black horizontal line (ground level). A thin black vertical line drops from the vertex of the arc down to a solid red circular dot (the ball). The text label "Ball at $t = 3$" is printed to the left of the vertical line and ball.
- **Mathematical meaning:** Illustrates the physical context of Example 11, marking the position of the falling ball at the instant $t = 3$ seconds during its drop from the tower.
