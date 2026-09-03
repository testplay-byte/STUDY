---
subject: mathematics
book_title: null
batch: M-1
chapter_folder: Chapter-01-Functions-and-Graphs
chapter_number: 1
chapter_title: Functions and Graphs
page_image: 23
page_printed: 29
section: "Conclusions"
exercise: null
content_type: worked-examples
has_figures: true
figures_count: 1
source_image: ../../../Raw/Mathematics/Unit-01-Functions-and-Graphs/0023.jpg
converted_at: "2026-09-01"
converted_by: "agent-1d (glm-vision)"
notes: "Page opens mid-way through a bulleted applications list continued from the previous page (image 22); only printed heading on the page is 'Conclusions'. Example 21 prints 'r = 9% = 0.009' although the problem statement says growth rate is 0.9% per year — preserved as printed. 'Key Facts' box (Figure F1) sits at right of Example 21 solution text; its printed text is transcribed inline."
---

# Page 23 — Unit 1: Functions and Graphs

> 📄 Original scan: [0023.jpg](../../../Raw/Mathematics/Unit-01-Functions-and-Graphs/0023.jpg) · printed page 29

*   Financial Models: Logarithmic functions are used in finance particularly in modelling the time value of money and compound interest.
*   Computer Science: Logarithmic functions appear in algorithms and data structures.

**Conclusions**

Logarithmic functions are powerful tools for dealing with exponential growth and decay as well as for measuring and comparing quantities on vastly different scales. Their unique properties and applications make them essential in both theoretical and applied fields. Most of the applications, we find, are in the fields of engineering and computer technology.

**Example 20:** Suppose that Rs. 30,000 is invested at 8% interest compounded annually. In $t$ years, it will grow to the amount $A(t)$ given by the function: $A(t) = 30,000 (1.08)^t$

(i) How long will it take until then is Rs. 150,000 in the account?
(ii) Let T be the amount of time it takes for the Rs.30,000 to double itself. Find T.

**Solution:**

(i) We set $A(t) = 150,000$ and solve for t.
$$150,000 = 30,000 (1.08)^t \Rightarrow (1.08)^t = \frac{150,000}{30,000} = 5$$
Taking natural log on both sides, we get:
$$\ln(1.08)^t = \ln 5 \Rightarrow t \ln(1.08) = \ln 5$$
$$\Rightarrow t = \frac{\ln 5}{\ln(1.08)} = \frac{1.6094}{0.07696} \approx 20.9$$
Therefore, it will take almost 20.9 years for Rs. 30,000 to grow to Rs. 150,000.

(ii) To find the doubling time T, we set A(t) = Rs. 60,000, t = T and solve for T.
$$60,000 = 30,000 (1.08)^T \Rightarrow (1.08)^T = \frac{60,000}{30,000} = 2$$
Taking natural log on both sides, we get:
$$\ln(1.08)^T = \ln 2 \Rightarrow T \ln(1.08) = \ln 2$$
$$\Rightarrow T = \frac{\ln 2}{\ln(1.08)} = \frac{0.6931}{0.07696} \approx 9$$
Therefore, doubling time is about 9 years.

**Example 21:** In 2020, the population of the country was 249 million and the exponential growth rate was 0.9% per year. If $P(t) = P_0 e^{rt}$ is exponential growth function, then:

(i) Find the exponential growth function for the given data.
(ii) What would you expect the population to be in the year 2028?

**Solution:** [Figure F1]

> **Key Facts**
>
> The function $P(t) = P_0 e^{rt}$ models the growth in the quantity while the function $P(t) = P_0 e^{-rt}$ models the decay or decline in the quantity where $r > 0$.

(i) Here $P_0 = 249$, $r = 9\% = 0.009$
The population growth function, gives:
$$P(t) = 249 \times e^{0.009t} \quad (a)$$
(ii) In 2028, we have $t = 8$.
To find the population in 2028, we substitute 8 for $t$ in (a).
$$P(8) = 249 \times e^{0.009 \times 8} = 249 \times e^{0.072}$$
$$\approx 249 \times 1.0747 = 267.6$$
Therefore, population of the city in 2028, will be about 267.6 million.

## Figures on this page

### Figure F1 — Key Facts box (right side, beside Example 21 Solution)
- **Type:** callout box (illustration with icon)
- **Caption/Number:** Key Facts
- **Description:** A red-bordered rectangular box located on the right side of the page, beside/overlapping the text of the Solution of Example 21. It features a small icon of two crossed keys inside a red square on its left side. Printed text inside the box, verbatim: "The function $P(t) = P_0 e^{rt}$ models the growth in the quantity while the function $P(t) = P_0 e^{-rt}$ models the decay or decline in the quantity where $r > 0$."
- **Mathematical meaning:** Distinguishes between the exponential growth function $P(t) = P_0 e^{rt}$ and the exponential decay function $P(t) = P_0 e^{-rt}$ where $r > 0$.
