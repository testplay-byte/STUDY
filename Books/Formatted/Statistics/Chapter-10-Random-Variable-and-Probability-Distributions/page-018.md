---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-3
chapter_folder: Chapter-10-Random-Variable-and-Probability-Distributions
chapter_number: 10
chapter_title: Random Variable and Probability Distributions
page_image: 18
page_printed: 78
section: "10.16 PROBABILITY DENSITY FUNCTION; 10.17 PROPERTIES OF PROBABILITY DENSITY FUNCTION"
exercise: null
content_type: theory
has_figures: true
figures_count: 1
source_image: ../../../Raw/Statistics/Chapter-10-Random-Variable-and-Probability-Distributions/0018.jpg
converted_at: "2026-10-01"
converted_by: "agent-S3c (glm-vision)"
notes: "Offset check: printed p.78 = image 18 + 60 (header folio, top-left). Continuation: opens mid-sentence of the 10.15 paragraph from p.77 ('nothing like an exact observation...'). Figure - 5 printed caption ends with a period; heading 10.16 prints without a dot, 10.17. with a dot. Handwritten tick-like mark over '10.16' and a small ink smudge left of property (ii) in the scan (not content)."
---

# Page 18 — Random Variable and Probability Distributions (Chapter 10)

> 📄 Original scan: [0018.jpg](../../../Raw/Statistics/Chapter-10-Random-Variable-and-Probability-Distributions/0018.jpg) · printed page 78

nothing like an exact observation in continuous variable. In discrete random variable the values of the variable are exact like 0, 1, 2 good bulbs. In continuous random variable the value of the variable is never an exact point. It is always in the form of an interval, the interval may be very very small.

Some examples of the continuous random variable are

(i) The computer time (in seconds) required to process a certain program.

(ii) The time that a poultry bird will gain the weight of 1.5 kg.

(iii) The amount of rain fall in a certain city.

(iv) The amount of water passing through a pipe connected with a high level reservoir.

(v) The heat gained by a ceiling fan when it has worked for one hour.

## 10.16 PROBABILITY DENSITY FUNCTION

The probability function of the continuous random variable is called probability density function or briefly p.d.f. It is denoted by f( x ) or p( x ) where f( x ) is the probability that the random variable X takes the value between x and $x + \Delta x$ where $\Delta x$ is a very very small change in X.

If there are two points 'a' and 'b' then the probability that the random variable will take the value between a and b is given by the integral

$$P(a \leq X \leq b) = \int_{a}^{b} f(x) \, dx$$

where 'a' and 'b' are any points between $-\infty$ and $+\infty$.
The quantity $f(x) \, dx$ is called probability differential.

[Figure F1]

The number of possible outcomes of a continuous random variable is uncountably infinite. Therefore, a probability of zero is assigned to each point of the random variable. Thus $P( X = x ) = 0$ for all values of X. This means that we must calculate a probability for a continuous random variable over an interval and not for any particular point. This probability can be interpreted as an area under the graph between the interval from a to b. When we say that the probability is zero that a continuous random variable assumes a specific value, we do not necessarily mean that a particular value cannot occur. We, in fact, mean that the point (event) is one of an infinite number of possible outcomes. Whenever we have to find the probability of some interval of the continuous random variable, we can use any one of these two methods.

(i) Integral calculus

(ii) Area by geometrical diagrams ( this method is easy to apply when f( x ) is a simple linear function ).

## 10.17. PROPERTIES OF PROBABILITY DENSITY FUNCTION

The probability density function f( x ) must have the following properties.

(i) It is non-negative that is $f(x) \geq 0$ for all x.

(ii) Total Area $\displaystyle = \int_{-\infty}^{\infty} f(x) \, dx = 1$

(iii) $P(X = c) = \int_{c}^{c} f(x) \, dx = 0$, where c is any constant.

## Figures on this page

### Figure F1 — Graph of probability density function f(x) (middle right)
- **Type:** line-graph
- **Caption/Number:** Figure - 5.
- **Description:** A Cartesian coordinate system with a horizontal axis labeled **X** and a vertical axis labeled **Y**. A straight line representing the function **f(x)** starts at a positive y-intercept on the Y-axis and slopes upward to the right. Two vertical lines drop from this sloped line down to the X-axis at points labeled **x** and **x + Δx**. The vertical segment at **x + Δx** is explicitly labeled **f(x)**. The region under the curve between **x** and **x + Δx** represents the area corresponding to the probability differential.
- **Mathematical meaning:** Illustrates the concept of the probability density function $f(x)$ for a continuous random variable, showing how the area under the curve over an infinitesimal interval $[x, x + \Delta x]$ approximates the probability $P(x \leq X \leq x + \Delta x)$.
