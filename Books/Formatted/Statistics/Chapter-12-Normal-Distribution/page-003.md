---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-5
chapter_folder: Chapter-12-Normal-Distribution
chapter_number: 12
chapter_title: "Normal Distribution"
page_image: 3
page_printed: 125
section: "12.5 USE OF THE AREA TABLE"
exercise: null
content_type: mixed
has_figures: true
figures_count: 1
source_image: ../../../Raw/Statistics/Chapter-12-Normal-Distribution/0003.jpg
converted_at: "2026-10-01"
converted_by: "agent-S5a (glm-vision)"
notes: "Offset check: printed p.125 = image 3 + 122 (header folio 125, top-right). Opens mid-§12.4 continuing the sentence from image 0002 ('This is equivalent to measuring...'). Figure-2 printed mid-page (two stippled/hatched areas labelled 0.34134). Example 12.1 heading prints trailing dot; list item (iii) prints a stray apostrophe after 'mean' (book misprint, preserved verbatim). Part (viii) prints the denominator root covering 2(3.1416), consistent with the printed result 0.0399. Page ends after part (viii) result 0.0399; the exercise/example continues on the next page."
---

# Page 3 — Normal Distribution (Chapter 12)

> 📄 Original scan: [0003.jpg](../../../Raw/Statistics/Chapter-12-Normal-Distribution/0003.jpg) · printed page 125

This is equivalent to measuring the distance $X$ from the mean $\mu$ using the standard deviation $\sigma$ as the unit of measuring distance. The variable $Z$ is termed as the standard normal variate and plays a very important role in statistics. The probability density function in terms of $Z$ is

$$p(z) = \frac{1}{\sqrt{2\pi}} e^{-\frac{z^2}{2}}$$

The mean of random variable $Z$ is zero and its variance is unity. If we know the mean $\mu$ and the standard deviation $\sigma$, we can calculate $Z$ corresponding to any value of $X$ and corresponding from the central ordinate to the value of $Z$.

## 12.5. USE OF THE AREA TABLE

The table "areas under the standard normal curve" gives the areas for various values of $Z$. For example $Z = -1$ to 0 and 0 to $+1$ gives the area 0.34134 as shown in the figure.

As the curve is symmetrical, the same area table can be used for negative values of $Z$. The area from $Z = 0$ to $Z = 1$ is 0.34134, similarly the area between $Z = -1$ and $Z = 0$ is also 0.34134.

[Figure F1]

**Example 12.1.**

In a normal distribution mean is 100 and standard deviation is 10. Find:

(i) the mean deviation  
(ii) the quartile deviation  
(iii) the third and fourth moments about mean '  
(iv) moment ratios ($\beta_1$ and $\beta_2$)  
(v) the lower and upper quartiles  
(vi) the median and mode  
(vii) the values of points of inflection  
(viii) the value of the maximum ordinate correct to four places of decimal.

**Solution:** Here, $\mu = 100, \sigma = 10$ and $\sigma^2 = \mu_2 = 100$. Therefore

(i) Mean deviation $= 0.7979 \sigma = 0.7979(10) = 7.979$

(ii) Quartile deviation $= 0.6745 \sigma = 0.6745(10) = 6.745$

(iii) Third moment about mean $= \mu_3 = 0$, because all odd order moments about mean in a normal distribution are zero, that is $\mu_1 = \mu_3 = \mu_5 = \ldots = 0$.

Fourth moment about mean $= \mu_4 = 3\sigma^4 = 3(10)^4 = 30000$

(iv) $\beta_1 = \frac{\mu_3^2}{\mu_2^3} = \frac{(0)^2}{(100)^3} = 0$  and  $\beta_2 = \frac{\mu_4}{\mu_2^2} = \frac{30000}{(100)^2} = 3$

(v) $Q_1 = \mu - 0.6745 \sigma = 100 - 0.6745(10) = 93.255$

$Q_3 = \mu + 0.6745 \sigma = 100 + 0.6745(10) = 106.745$

(vi) Mean = Median = Mode = 100, because in a normal distribution the mean, median and mode coincide.

(vii) Normal distribution has two points of inflection which lie at a distance of one $\sigma$ above the mean $\mu$ and one $\sigma$ below the mean $\mu$ that is

$\mu - \sigma = 100 - 10 = 90$  and  $\mu + \sigma = 100 + 10 = 110$

(viii) Maximum ordinate $= \frac{1}{\sigma\sqrt{2\pi}} = \frac{1}{10\sqrt{2(3.1416)}} = 0.0399$

## Figures on this page

### Figure F1 — Standard Normal Curve Area Diagram (right side)
- **Type:** curve-plot
- **Caption/Number:** Figure-2
- **Description:** A bell-shaped curve representing the standard normal distribution with horizontal axis labeled 'z'. Ticks are marked at -1, 0, and +1 on the axis. Two vertical regions are shaded with diagonal hatching lines between z = -1 and z = 0, and between z = 0 and z = +1. Each shaded region contains the numerical label "0.34134".
- **Mathematical meaning:** Illustrates the symmetry of the standard normal curve, showing that the area under the curve from the mean (z=0) to one standard deviation above or below (z=±1) is approximately 0.34134.
