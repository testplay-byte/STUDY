---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-4
chapter_folder: Chapter-11-Binomial-and-Hypergeometric-Distributions
chapter_number: 11
chapter_title: "Binomial and Hypergeometric Distributions"
page_image: 12
page_printed: 106
section: null
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-11-Binomial-and-Hypergeometric-Distributions/0012.jpg
converted_at: "2026-10-01"
converted_by: "agent-S4b (glm-vision)"
notes: "Offset check: printed p.106 = image 12 + 94 (header folio, top-left; even page). Examples 11.15 and 11.16 complete on this page; Example 11.17 (biased coin) gives the p/q calculation but the actual fitting of the binomial distribution is NOT on this page — page ends right after 'q = 1 - p = 1 - 0.398 = 0.602' (continues on printed p.107). In the 11.15 frequency block the X=3 line prints its last factor as (1/2) with no exponent — preserved verbatim. No figures; no defects."
---

# Page 12 — Binomial and Hypergeometric Distributions (Chapter 11)

> 📄 Original scan: [0012.jpg](../../../Raw/Statistics/Chapter-11-Binomial-and-Hypergeometric-Distributions/0012.jpg) · printed page 106

**Example 11.15.**
The probability of male birth is equal to the probability of female birth. Out of 400 families with 4 children each, find the expected number of families with 0, 1, 2, 3 and 4 males.

**Solution:** The binomial frequency distribution is

$$N.P[ X = x ] = N.b( x; n, p ) = N \binom{n}{x} p^x q^{n-x} \text{ for } x = 0, 1, 2, 3, ..., n.$$

Here, $N= 400$, $n=4$, $p = 1/2$, $q = 1-p = 1/2$ and $x=0, 1, 2, 3, 4$. Therefore

$$400P[ X = x ] = 400 \binom{4}{x} \left(\frac{1}{2}\right)^x \left(\frac{1}{2}\right)^{4-x} \text{ for } x = 0, 1, 2, 3, 4.$$

$$\begin{aligned}
400 P[ X = 0 ] &= 400 \binom{4}{0} \left(\frac{1}{2}\right)^0 \left(\frac{1}{2}\right)^4 &&= 25 \text{ Families} \\
400 P[ X = 1 ] &= 400 \binom{4}{1} \left(\frac{1}{2}\right)^1 \left(\frac{1}{2}\right)^3 &&= 100 \text{ Families} \\
400 P[ X = 2 ] &= 400 \binom{4}{2} \left(\frac{1}{2}\right)^2 \left(\frac{1}{2}\right)^2 &&= 150 \text{ Families} \\
400 P[ X = 3 ] &= 400 \binom{4}{3} \left(\frac{1}{2}\right)^3 \left(\frac{1}{2}\right) &&= 100 \text{ Families} \\
400 P[ X = 4 ] &= 400 \binom{4}{4} \left(\frac{1}{2}\right)^4 \left(\frac{1}{2}\right)^0 &&= 25 \text{ Families}
\end{aligned}$$

**Example 11.16.**
Six dice are thrown 729 times. How many times do you expect at least three dice to show a five or a six?

**Solution:** The binomial frequency distribution is

$$N.P[ X = x ] = N.b( x; n, p ) = N \binom{n}{x} p^x q^{n-x} \text{ for } x = 0, 1, 2, 3, ..., n.$$

Here, $p = 1/3$, $q = 1-p = 2/3$, $n = 6$ and $N = 729$.
Let the random variable X denote the number of dice to show a five or a six, then the possible values of X are 0, 1, 2, 3, 4, 5, 6. Therefore

$$729 P[ X = x ] = 729 \binom{6}{x} \left(\frac{1}{3}\right)^x \left(\frac{2}{3}\right)^{6-x} \text{ for } x = 0, 1, 2, ..., 6.$$

The expected number of times at least three dice will show a 5 or a 6 $= 729 P ( X \geq 3 )$
$$\begin{aligned}
&= 729 \binom{6}{3} \left(\frac{1}{3}\right)^3 \left(\frac{2}{3}\right)^3 + 729 \binom{6}{4} \left(\frac{1}{3}\right)^4 \left(\frac{2}{3}\right)^2 + 729 \binom{6}{5} \left(\frac{1}{3}\right)^5 \left(\frac{2}{3}\right) + 729 \binom{6}{6} \left(\frac{1}{3}\right)^6 \left(\frac{2}{3}\right)^0 \\
&= 729 \left(\frac{160}{729}\right) + 729 \left(\frac{60}{729}\right) + 729 \left(\frac{12}{729}\right) + 729 \left(\frac{1}{729}\right) = 160 + 60 + 12 + 1 = 233.
\end{aligned}$$

**Example 11.17.**
Fit a binomial distribution to the following data, obtained by tossing a biased coin 5 times.

| No. of heads | 0 | 1 | 2 | 3 | 4 | 5 | Total |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Frequency | 12 | 56 | 74 | 39 | 18 | 1 | 200 |

**Solution:** The value of p is not given. Let us first calculate p.

| No. of heads (X) | 0 | 1 | 2 | 3 | 4 | 5 | Total |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Frequency (f) | 12 | 56 | 74 | 39 | 18 | 1 | 200 |
| Product (f X) | 0 | 56 | 148 | 117 | 72 | 5 | 398 |

Here, $\sum f = 200$, $\sum fX = 398$ and $n = 5$. Therefore

$$\bar{X} = np = \frac{\sum fX}{\sum f} = \frac{398}{200} = 1.99 \quad \text{or} \quad 5p = 1.99 \quad (\text{since } n = 5)$$

$$\text{or } p = \frac{1.99}{5} = 0.398 \quad \text{and} \quad q = 1 - p = 1 - 0.398 = 0.602$$
