---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-5
chapter_folder: Chapter-05-Kinematics-of-Motion-in-a-Straight-Line
chapter_number: 5
chapter_title: KINEMATICS OF MOTION IN A STRAIGHT LINE
page_image: 9
page_printed: 148
section: "5.3.1 Acceleration as Derivative of Velocity and Displacement"
exercise: null
content_type: theory
has_figures: false
figures_count: 0
source_image: ../../../Raw/Mathematics/Unit-05-Kinematics-of-Motion-in-a-Straight-Line/0009.jpg
converted_at: "2026-09-06"
converted_by: "agent-13h2 (glm-vision)"
notes: "Continuation of Example 2 from p.147 (differentiation + v(0), v(π/3)); §5.3.1 'Acceleration as Derivative of Velocity and Displacement' printed mid-page; Example 3 through 'Velocity at t = 4' computation — page ends there (acceleration evaluations continue p.149). Book typos/styles preserved verbatim: '2cost' (no space, twice), '2m/sec'-style unit runs, 'Which is acceleration is a derivative of its velocity.' (redundant grammar as printed), 'ln (t + 1)' with space. No figures, no sidebar boxes; dark gutter strip at far left with facing-page bleed but no content loss (zoom-verified)."
---

# Page 9 — Unit 05: Kinematics of Motion in a Straight Line

> 📄 Original scan: [0009.jpg](../../../Raw/Mathematics/Unit-05-Kinematics-of-Motion-in-a-Straight-Line/0009.jpg) · printed page 148

Differentiate it w.r.t ‘t’

$$\frac{dS}{dt} = 2t + 2cost$$
$$v(t) = 2t + 2cost \qquad \qquad \qquad \qquad \qquad \dots\dots(1)$$

(1) shows the velocity of the particle at any time ‘t’. To find the initial velocity put $t = 0$ in (1).

$$v(0) = 2(0) + 2\cos 0 = 2m/sec$$

Now put $t = \frac{\pi}{3}$ in (1).

$$v \left(\frac{\pi}{3}\right) = 2 \left(\frac{\pi}{3}\right) + 2\cos \frac{\pi}{3} = \frac{2\pi}{3} + 2 \left(\frac{1}{2}\right) = \frac{2\pi}{3} + 1 = \frac{2\pi + 3}{3} m/sec$$

Which is the velocity of the particle at $t = \frac{\pi}{3}$.

## 5.3.1 Acceleration as Derivative of Velocity and Displacement

Let the position of the moving particle at any time ‘t’ be determined by the function $S(t)$.
By definition the acceleration of a particle is the rate of change of velocity w.r.t time; so

$$a = \text{acceleration} = \frac{dv}{dt}$$

Which is acceleration is a derivative of its velocity.

As we know that $v = \frac{dS}{dt}$. Hence $a = \frac{d}{dt} \left(\frac{dS}{dt}\right) = \frac{d^2S}{dt^2}$ is the acceleration as derivative of its displacement.

**Example 3:** The position function of a moving particle is given by $S = \sqrt{t} + ln (t + 1)$.
Find the velocity and acceleration of the particle at any instant of time ‘t’. Also find its velocity and acceleration at $t = 1$ and $t = 4$. Here S is measured in meters and time in seconds.

**Solution:**

Given that $S = \sqrt{t} + ln (t + 1)$

Differentiate w.r.t ‘t’

$$\frac{dS}{dt} = \frac{1}{2} t^{-\frac{1}{2}} + \frac{1}{t+1}$$
$$v(t) = \frac{1}{2\sqrt{t}} + \frac{1}{t+1} \qquad \qquad \qquad \qquad \dots\dots(1)$$

Equation (1) shows the velocity of the particle at any time ‘t’. Differentiate (1) w.r.t ‘t’.

$$\frac{dv}{dt} = -\frac{1}{4} t^{-\frac{3}{2}} - \frac{1}{(t+1)^2} \qquad \qquad \dots\dots(2)$$

Which is the acceleration of the particle at any time ‘t’.

**Velocity at $t = 1$**

Put $t = 1$ in Eq. (1).

$$v(1) = \frac{1}{2} + \frac{1}{2} = 1m/sec$$

**Velocity at $t = 4$**

Put $t = 4$ in Eq. (1).

$$v(4) = \frac{1}{2\sqrt{4}} + \frac{1}{4+1} = \frac{1}{4} + \frac{1}{5} = \frac{9}{20} m/sec$$
