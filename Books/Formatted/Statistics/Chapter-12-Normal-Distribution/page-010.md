---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-5
chapter_folder: Chapter-12-Normal-Distribution
chapter_number: 12
chapter_title: Normal Distribution
page_image: 10
page_printed: 132
section: "12.7 THE NORMAL APPROXIMATION TO THE BINOMIAL DISTRIBUTION"
exercise: null
content_type: mixed
has_figures: true
figures_count: 3
source_image: ../../../Raw/Statistics/Chapter-12-Normal-Distribution/0010.jpg
converted_at: "2026-10-01"
converted_by: "agent-S5b (glm-vision)"
notes: "Offset check: printed p.132 = image 10 + 122 (header folio, top-left). Page opens with part (b) of Example 12.11 (continued from p.131); section 12.7 begins near the bottom and the page ends right after the Step 2 display equation (the procedure continues on next page). Book styling preserved verbatim: the line 'also Z = ...' begins lowercase, and the Example 12.12 statement prints 'The two parameters of this normal distribution are, the mean = Rs. 900 ...'. Figure F1 is shaded with horizontal hatching, F2 and F3 with diagonal hatching."
---

# Page 10 — Normal Distribution (Chapter 12)

> 📄 Original scan: [0010.jpg](../../../Raw/Statistics/Chapter-12-Normal-Distribution/0010.jpg) · printed page 132

(b) $Z_1 = \frac{X_1 - 42}{24} = \frac{30 - 42}{24} = -0.5$

$Z_2 = \frac{X_2 - 42}{24} = \frac{54 - 42}{24} = +0.5$

$P(30 \leq X \leq 54) = P(-0.5 \leq Z \leq 0.5)$

$\quad\quad\quad\quad\quad = P(-0.5 \leq Z \leq 0) + P(0 \leq Z \leq 0.5)$

$\quad\quad\quad\quad\quad = 0.1915 + 0.1915 = 0.3830$

Hence the expected number of children lying between the scores 30 and 54

$\quad\quad = N.P(30 \leq X \leq 54) = 1000(0.3830) = 383.$

[Figure F1]

**Example 12.12.**

The income of a group of 15000 people in a town was found to be normally distributed. The two parameters of this normal distribution are, the mean = Rs. 900 ( per day ) and the standard deviation = Rs. 80. Show that, of this group 10986 had income exceeding Rs. 850 and only 93 had income exceeding Rs. 1100.

**Solution:** Here, $\mu = 900, \sigma = 80, N = 15000$ and $Z = \frac{X - \mu}{\sigma} = \frac{X - 900}{80}$. Therefore

$Z = \frac{850 - 900}{80} = -0.62$

$P(X > 850) = P(Z > -0.62)$

$\quad\quad\quad\quad = P(-0.62 \leq Z \leq 0) + P(0 \leq Z \leq \infty)$

$\quad\quad\quad\quad = 0.2324 + 0.5 = 0.7324$

[Figure F2]

Hence the expected number of people having daily income exceeding Rs. 850

$\quad\quad\quad\quad = N.P(X > 850) = 15000(0.7324) = 10986.$

also $Z = \frac{1100 - 900}{80} = 2.5$

$P(X > 1100) = P(Z > 2.5)$

$\quad\quad\quad\quad = P(0 \leq Z \leq \infty) - P(0 \leq Z \leq 2.5)$

$\quad\quad\quad\quad = 0.5 - 0.4938 = 0.0062$

[Figure F3]

Hence the expected number of people having daily income exceeding Rs. 1100 = N.P(X > 1100)

$\quad\quad\quad\quad = 15000(0.0062) = 93.$

## 12.7 THE NORMAL APPROXIMATION TO THE BINOMIAL DISTRIBUTION

The (continuous) normal distribution provides a close approximation to the (discrete) binomial distribution when n, the number of trials is very large and p, the probability of a success on an individual trial is close to 1/2. To provide a theoretical foundation for this argument, let us make the following statement, a proof of which can be found in most of the texts in mathematical statistics.

If X is a random variable having a binomial distribution with the parameters n and p, then $Z = (X - np)/\sqrt{npq}$ approaches the standard normal distribution when n approaches infinity. Strictly speaking, this statement applies when n approaches infinity, but the normal distribution is often used to approximate binomial probabilities even n is fairly small. A good rule of thumb is to use this approximation only when np and nq are both equal to or greater than 5. The procedure to follow in using a normal approximation to the binomial is as follows:

Step 1. Compute $\mu = np$ and $\sigma = \sqrt{npq}$

Step 2. Apply a continuity correction factor to convert a discrete ( binomial ) random variable into a ( normal ) continuous random variable, so that the standardized normal Z transformation is

$$Z = \frac{(X - 1/2) - \mu}{\sigma} \text{ or } Z = \frac{(X + 1/2) - \mu}{\sigma}$$

## Figures on this page

### Figure F1 — Normal curve with dual X/Z scales, area between 30 and 54 (top right)
- **Type:** curve-plot
- **Caption/Number:** (none printed)
- **Description:** A normal distribution bell curve with two stacked horizontal axes. The TOP axis row is labeled X with tick values 30, 42 and 54; the BOTTOM axis row is labeled Z with tick values -0.5, 0 and +0.5. An ordinate (vertical line) drops from the peak of the curve at the mean 42 (Z=0), with ordinates also at the 30/-0.5 and 54/+0.5 positions. The region under the curve between X=30 and X=54 is shaded with dense horizontal hatching lines.
- **Mathematical meaning:** Illustrates the probability calculation for a range of values symmetric about the mean ($P(30 \leq X \leq 54)$), corresponding to $Z$ scores from -0.5 to +0.5.

### Figure F2 — Normal curve with dual X/Z scales, area beyond 850 (middle right)
- **Type:** curve-plot
- **Caption/Number:** (none printed)
- **Description:** A normal distribution bell curve with two stacked horizontal axes. The TOP axis row is labeled X with tick values 850 and 900; the BOTTOM axis row is labeled Z with tick values -0.62 and 0. An ordinate (vertical line) is drawn at the mean 900 (Z=0) and another at the 850/-0.62 position. The entire region under the curve to the right of X=850 (Z=-0.62), including the part past the mean, is shaded with diagonal hatching lines.
- **Mathematical meaning:** Illustrates the probability of daily income exceeding Rs. 850 ($P(X > 850)$), which corresponds to the area to the right of $Z = -0.62$.

### Figure F3 — Normal curve with dual X/Z scales, area beyond 1100 (bottom right)
- **Type:** curve-plot
- **Caption/Number:** (none printed)
- **Description:** A normal distribution bell curve with two stacked horizontal axes. The TOP axis row is labeled X with tick values 900 and 1100; the BOTTOM axis row is labeled Z with tick values 0 and 2.5. An ordinate (vertical line) is drawn at the mean 900 (Z=0) and another at the 1100/2.5 position. Only the small tail region under the curve to the right of X=1100 (Z=2.5) is shaded with diagonal hatching lines.
- **Mathematical meaning:** Illustrates the probability of daily income exceeding Rs. 1100 ($P(X > 1100)$), which corresponds to the small area in the upper tail to the right of $Z = 2.5$.
