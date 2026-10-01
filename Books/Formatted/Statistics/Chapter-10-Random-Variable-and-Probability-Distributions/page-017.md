---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-3
chapter_folder: Chapter-10-Random-Variable-and-Probability-Distributions
chapter_number: 10
chapter_title: Random Variable and Probability Distributions
page_image: 17
page_printed: 77
section: "10.15 CONTINUOUS RANDOM VARIABLE"
exercise: null
content_type: mixed
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-10-Random-Variable-and-Probability-Distributions/0017.jpg
converted_at: "2026-10-01"
converted_by: "agent-S3c (glm-vision)"
notes: "Offset check: printed p.77 = image 17 + 60 (header folio, top-right). Section 10.15 starts near the bottom of the page; page ends mid-sentence ('There is') — continues on next page."
---

# Page 17 — Random Variable and Probability Distributions (Chapter 10)

> 📄 Original scan: [0017.jpg](../../../Raw/Statistics/Chapter-10-Random-Variable-and-Probability-Distributions/0017.jpg) · printed page 77

**Example 10.22.**

A and B throw one die for a prize of Rs.77 which is to be won by the player who first throws 3. If A has first throw what are their respective expectations?

**Solution:** Here, p = $\frac{1}{6}$ and q = 1 – p = $\frac{5}{6}$

A has the first throw. Therefore A can win in the first trial. If A does not win on the first trial, the second trial will go to B. If B does not win on the second trial, the third trial will go to A and so on. Thus A can win on 1st, 3rd, 5th ... trials and B can win on 2nd, 4th, 6th ... trials.

| Trials: | 1 | 3 | 5 | 7 | ... |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Chances of A: | p | pq² | pq⁴ | pq⁶ | ... |
| Chances of A: | $\left(\frac{1}{6}\right)$ | $\left(\frac{1}{6}\right)\left(\frac{5}{6}\right)^2$ | $\left(\frac{1}{6}\right)\left(\frac{5}{6}\right)^4$ | $\left(\frac{1}{6}\right)\left(\frac{5}{6}\right)^6$ | ... |

A may win in any of the trials given to him.

$$P(A) = \left(\frac{1}{6}\right) + \left(\frac{1}{6}\right)\left(\frac{5}{6}\right)^2 + \left(\frac{1}{6}\right)\left(\frac{5}{6}\right)^4 + \left(\frac{1}{6}\right)\left(\frac{5}{6}\right)^6 + \ldots \infty \text{ terms}$$

This is a geometric progression in which a = $\frac{1}{6}$ and r = $\left(\frac{5}{6}\right)^2$ = $\frac{25}{36}$. Therefore

$$P(A) = \text{Sum} = \frac{a}{1 - r} = \frac{1/6}{1 - 25/36} = \frac{1/6}{11/36} = \frac{6}{11}$$

| Trials: | 2 | 4 | 6 | 8 | ... |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Chances of B: | pq | pq³ | pq⁵ | pq⁷ | ... |
| Chances of B: | $\left(\frac{1}{6}\right)\left(\frac{5}{6}\right)$ | $\left(\frac{1}{6}\right)\left(\frac{5}{6}\right)^3$ | $\left(\frac{1}{6}\right)\left(\frac{5}{6}\right)^5$ | $\left(\frac{1}{6}\right)\left(\frac{5}{6}\right)^7$ | ... |

B may win in any of the trials given to him.

$$P(B) = \left(\frac{1}{6}\right)\left(\frac{5}{6}\right) + \left(\frac{1}{6}\right)\left(\frac{5}{6}\right)^3 + \left(\frac{1}{6}\right)\left(\frac{5}{6}\right)^5 + \left(\frac{1}{6}\right)\left(\frac{5}{6}\right)^7 + \ldots \infty \text{ terms}$$

This is also a geometric progression in which

a = $\left(\frac{1}{6}\right)\left(\frac{5}{6}\right) = \frac{5}{36}$ and r = $\left(\frac{5}{6}\right)^2 = \frac{25}{36}$. Therefore

$$P(B) = \text{Sum} = \frac{a}{1 - r} = \frac{5/36}{1 - 25/36} = \frac{5/36}{11/36} = \frac{5}{11}$$

Probability of B can also be obtained from the equation P(A) + P(B) = 1

or P(B) = 1 – P(A) = 1 – 6/11 = 5/11

Hence E(A) = 77(6/11) = Rs.42 and E(B) = 77(5/11) = Rs.35

## 10.15. CONTINUOUS RANDOM VARIABLE

A random variable is called continuous if it can assume all possible values in the possible range of the random variable. Suppose the temperature in a certain city in the month of June in the past many years has always been between 35° to 45° centigrade. The temperature can take any value between the range 35° to 45°. The temperature on any day may be 40.15°C or 40.16°C or it may take any value between 40.15° and 40.16°. When we say that the temperature is 40°C, it means that the temperature lies somewhere between 39.5° to 40.5°. Any observation which is taken falls in an interval. There is
