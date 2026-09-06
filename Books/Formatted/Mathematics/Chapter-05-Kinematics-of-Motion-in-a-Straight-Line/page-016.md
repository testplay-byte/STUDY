---
subject: mathematics
book_title: Mathematics (Grade 12)
batch: M-5
chapter_folder: Chapter-05-Kinematics-of-Motion-in-a-Straight-Line
chapter_number: 5
chapter_title: KINEMATICS OF MOTION IN A STRAIGHT LINE
page_image: 16
page_printed: 155
section: "5.6.4 Derivative of a Vector Valued Function; 5.6.5 Velocity and Acceleration of a Vector Valued Function"
exercise: null
content_type: theory
has_figures: false
figures_count: 0
source_image: ../../../Raw/Mathematics/Unit-05-Kinematics-of-Motion-in-a-Straight-Line/0016.jpg
converted_at: "2026-09-06"
converted_by: "agent-13i (glm-vision)"
notes: "Opens under §5.6.4 (in force from p.154, not printed on this page); §5.6.5 printed mid-page. Page ends mid-Example 8: velocity v(1) computed; acceleration part continues on p.156. Book misprints preserved verbatim: Example 7 last line prints 'df/dt|_{t=5} df/dt = ...' (no equals sign between the vertical-bar evaluation and the second df/dt); Example 7 line 2 k-component prints '+ -3t^{-4}k' (plus followed by minus); Example 8 Solution line prints stray 'v(t̄)' before 'd/dt f(t)'; v(t) = 4ti + 12t^3j - 3t^2k genuinely printed twice. Side annotation 'where f'(t0) = v(t0)' printed right of the velocity equation. No figures, no sidebar boxes, no scan-edge crops."
---

# Page 16 — Unit 05: Kinematics of Motion in a Straight Line

> 📄 Original scan: [0016.jpg](../../../Raw/Mathematics/Unit-05-Kinematics-of-Motion-in-a-Straight-Line/0016.jpg) · printed page 155

For example, the function represents the position of an object at a point in time $t$, the derivative of that function represents its velocity at that time on the same point. Consider a function $f(t)$ which has three components that is $f_1(t), f_2(t)$ and $f_3(t)$. The function $f(t)$ is said to be differentiable if all of its three components are differentiable.

$$\mathbf{f}(t) = f_1(t)\hat{\imath} + f_2(t)\hat{\jmath} + f_3(t)\hat{k}$$

Then $\mathbf{f}(t)$ is differentiable at $t = t_0$ and its derivative is given as

$$\mathbf{f}'(t_0) = f'_1(t_0)\hat{\imath} + f'_2(t_0)\hat{\jmath} + f'_3(t_0)\hat{k}$$

Or we may write it as

$$\left.\frac{d\mathbf{f}}{dt}\right|_{t=t_0} = \frac{d}{dt}f_1(t_0)\hat{\imath} + \frac{d}{dt}f_2(t_0)\hat{\jmath} + \frac{d}{dt}f_3(t_0)\hat{k}$$

**Example 7:** Find the derivative of the vector function $\mathbf{f}(t) = 3t^2\hat{\imath} + 8t\hat{\jmath} - \frac{1}{t^3}\hat{k}$ at $\text{t} = 5$.

**Solution:** $\quad \mathbf{f}(t) = 3t^2\hat{\imath} + 8t\hat{\jmath} - \frac{1}{t^3}\hat{k}$

$$\begin{aligned}
\frac{d\mathbf{f}}{dt} &= \frac{d}{dt}(3t^2)\hat{\imath} + \frac{d}{dt}(8t)\hat{\jmath} - \frac{d}{dt}\left(\frac{1}{t^3}\right)\hat{k} = 3\frac{d}{dt}(t^2)\hat{\imath} + 8\frac{d}{dt}(t)\hat{\jmath} - \frac{d}{dt}(t^{-3})\hat{k} \\
\frac{d\mathbf{f}}{dt} &= 3 \times 2t^{2-1}\hat{\imath} + 8 \times 1\hat{\jmath} - (-3t^{-3-1})\hat{k} = 6t\hat{\imath} + 8\hat{\jmath} + -3t^{-4}\hat{k} \\
\frac{d\mathbf{f}}{dt} &= 6t\hat{\imath} + 8\hat{\jmath} + \frac{-3}{t^4}\hat{k} \\
\left.\frac{d\mathbf{f}}{dt}\right|_{t=5} \frac{d\mathbf{f}}{dt} &= 6(5)\hat{\imath} + 8\hat{\jmath} + \frac{-3}{(5)^4}\hat{k} = 30\hat{\imath} + 8\hat{\jmath} + \frac{-3}{625}\hat{k}
\end{aligned}$$

## 5.6.5 Velocity and Acceleration of a Vector Valued Function

The derivative of the vector valued function gives the velocity of the function at the particular point and if we take again the derivative of the velocity function then it will be acceleration of the function at the particular point.

Consider the function in space

$$\mathbf{f}(t) = f_1(t)\hat{\imath} + f_2(t)\hat{\jmath} + f_3(t)\hat{k}$$

Then $\mathbf{f}(t)$ is differentiable at $t = t_0$ and its derivative is given as

$$\mathbf{f}'(t_0) = \mathbf{v}(t_0) = f'_1(t_0)\hat{\imath} + f'_2(t_0)\hat{\jmath} + f'_3(t_0)\hat{k} \qquad \text{where } \mathbf{f}'(t_0) = \mathbf{v}(t_0)$$

Which gives the velocity of the function at $t = t_0$ and for the acceleration of the function again we differentiate the velocity function to get the acceleration

$$\mathbf{a}(t_0) = \frac{d}{dt}\mathbf{v}(t_0) = f''_1(t_0)\hat{\imath} + f''_2(t_0)\hat{\jmath} + f''_3(t_0)\hat{k}$$

**Example 8:** Find the velocity and acceleration of function $\mathbf{f}(t) = 2t^2\hat{\imath} + 3t^4\hat{\jmath} - t^3\hat{k}$ at $\text{t} = 1$.

**Solution:** $\quad \mathbf{v}(\overline{t}) \quad \frac{d}{dt}\mathbf{f}(t) = \frac{d}{dt}(2t^2)\hat{\imath} + \frac{d}{dt}(3t^4)\hat{\jmath} - \frac{d}{dt}(t^3)$

$$\begin{aligned}
\mathbf{v}(t) &= 2 \times 2t\hat{\imath} + 3 \times 4t^3\hat{\jmath} - 3t^2\hat{k} = 4t\hat{\imath} + 12t^3\hat{\jmath} - 3t^2\hat{k} \\
\mathbf{v}(t) &= 4t\hat{\imath} + 12t^3\hat{\jmath} - 3t^2\hat{k} \\
\therefore \quad \mathbf{v}(1) &= 4(1)\hat{\imath} + 12(1)^3\hat{\jmath} - 3(1)^2\hat{k} = 4\hat{\imath} + 12\hat{\jmath} - 3\hat{k}
\end{aligned}$$
