---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-3
chapter_folder: Chapter-10-Random-Variable-and-Probability-Distributions
chapter_number: 10
chapter_title: Random Variable and Probability Distributions
page_image: 15
page_printed: 75
section: null
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-10-Random-Variable-and-Probability-Distributions/0015.jpg
converted_at: "2026-10-01"
converted_by: "coordinator-test (glm-vision)"
notes: "Offset check: printed p.75 = image 15 + 60 (header folio). Opening (i)/(ii) lines continue a solution started on the previous page (Example 10.18)."
---

# Page 15 — Random Variable and Probability Distributions (Chapter 10)

> 📄 Original scan: [0015.jpg](../../../Raw/Statistics/Chapter-10-Random-Variable-and-Probability-Distributions/0015.jpg) · printed page 75

(i) $\text{E(X)} = \sum \text{x f(x)} = \frac{48}{64} = 0.75$

$$\text{Var (X)} = \sum \text{x}^2\text{f(x)} - [\sum \text{x f(x)}]^2 = \frac{72}{64} - \left(\frac{48}{64}\right)^2 = 1.1250 - 0.5625 = 0.5625$$

(ii) $\text{E[ X - E(X) ]}^2 = \sum[\text{x - E(X) } ]^2 \text{ p(x)} = \frac{36}{64} = 0.5625 = \text{Var (X)}$

**Example 10.19.**

In a summer season, a dealer of desert room coolers can earn Rs. 4800 per day if the day is hot and can earn Rs. 2300 per day if it is fair and lose Rs. 1000 per day if it is cloudy. Find his mathematical expectation and standard deviation if the probability of the day being hot is 0.50 and for being cloudy it is 0.30.

**Solution:** Let the random variable X denote the number of rupees the dealer earns. Then the possible values of x are 4800, 2300 and –1000, where –1000 corresponds to the fact that dealer loses, and the respective probabilities are 0.50, 0.20 and 0.30. Therefore

$$\begin{aligned}
\text{E(X)} &= \text{x}_1 \text{ p (x}_1) + \text{x}_2 \text{ p(x}_2) + \text{x}_3 \text{ p( x}_3) = 4800( 0.50 ) + 2300( 0.20 ) - 1000( 0.30 ) \\
&= 2400 + 460 - 300 = \text{Rs. } 2560 \\
\text{E(X}^2) &= \text{x}_1^2 \text{ p(x}_1) + \text{x}_2^2 \text{ p(x}_2) + \text{x}_3^2 \text{ p( x}_3) = ( 4800 )^2 0.50 + ( 2300 )^2 0.20 - ( 1000 )^2 0.30 \\
&= 11520000 + 1058000 - 300000 = 12278000 \\
\text{S.D.( X )} &= \sqrt{\text{E(X}^2) - [\text{E(X) }]^2}=\sqrt{12278000 - ( 2560 )^2}= \text{Rs. } 2392.57
\end{aligned}$$

**Example 10.20.**

From an urn containing 3 red and 2 white balls, a man is to draw 2 balls at random without replacement, being promised Rs.20 for each red ball he draws, and Rs.10 for each white one. Find his expectation and variance.

**Solution:**

| | Red balls | White balls | Total balls |
| :--- | :---: | :---: | :---: |
| urn: | 3 | 2 | 5 |

S contains $\binom{5}{2} =$ 10 sample points

Let $\text{x}_1 =$ two red balls $= \text{Rs.40}$

$\quad \text{x}_2 =$ one red and one white ball $= \text{Rs.30}$

$\quad \text{x}_3 =$ two white balls $= \text{Rs.20}$

The respective probabilities are:

$$\begin{aligned}
\text{p (x}_1) &= \text{P(two red balls)} & &= \frac{\binom{3}{2}\binom{2}{0}}{\binom{5}{2}} = \frac{3}{10} \\[10pt]
\text{p(x}_2) &= \text{P(one red and one white ball)} & &= \frac{\binom{3}{1}\binom{2}{1}}{\binom{5}{2}} = \frac{6}{10} \\[10pt]
\text{p(x}_3) &= \text{P(two white balls)} & &= \frac{\binom{3}{0}\binom{2}{2}}{\binom{5}{2}} = \frac{1}{10}
\end{aligned}$$

$$\begin{aligned}
\text{E( X )} &= \text{x}_1 \text{ p(x}_1) + \text{x}_2 \text{ p(x}_2) + \text{x}_3 \text{ p( x}_3) & &= 40 \left(\frac{3}{10}\right) + 30 \left(\frac{6}{10}\right) + 20 \left(\frac{1}{10}\right) = 12 + 18 + 2 = \text{Rs.32} \\[8pt]
\text{E( X}^2) &= \text{x}_1^2 \text{ p(x}_1) + \text{x}_2^2 \text{ p(x}_2) + \text{x}_3^2 \text{ p( x}_3) & &= (40)^2 \frac{3}{10} + (30)^2 \frac{6}{10} + (20)^2 \frac{1}{10} = 480 + 540 + 40 = 1060 \\[8pt]
\text{Var( X )} &= \text{E( X}^2) - [\text{E( X )}]^2 = 1060 - ( 32 )^2 = 1060 - 1024 = 36
\end{aligned}$$
