---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-4
chapter_folder: Chapter-11-Binomial-and-Hypergeometric-Distributions
chapter_number: 11
chapter_title: "Binomial and Hypergeometric Distributions"
page_image: 4
page_printed: 98
section: null
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-11-Binomial-and-Hypergeometric-Distributions/0004.jpg
converted_at: "2026-10-01"
converted_by: "agent-S4a (glm-vision)"
notes: "Offset check: printed p.98 = image 4 + 94 (header folio, top-left; even page). Page holds two complete worked examples (11.2 house-agent, 11.3 games) with no section headings and no figures. Fraction 694/4096 in Example 11.2(i) is printed as printed (1+18+135+540 = 694, correct as printed)."
---

# Page 4 — Binomial and Hypergeometric Distributions (Chapter 11)

> 📄 Original scan: [0004.jpg](../../../Raw/Statistics/Chapter-11-Binomial-and-Hypergeometric-Distributions/0004.jpg) · printed page 98

**Example 11.2.**

The experience of a house-agent indicates that he can provide suitable accommodation for 75 percent of the clients who come to him. If on a particular occasion, 6 clients approach him independently, calculate the probability that:

(i) less than 4 clients will get satisfactory accommodation.

(ii) exactly 4 clients will get satisfactory accommodation.

(iii) at least 4 clients will get satisfactory accommodation.

(iv) at most 4 clients will get satisfactory accommodation.

**Solution:** The probability of x successes in a series of n trials is given by

$$P[X = x] = \binom{n}{x} p^x q^{n-x} \quad \text{for } x=0, 1, 2, 3, ..., n.$$

Here, $n = 6$, $p = 75/100 = 3/4$ and $q = 1 - p = 1/4$

Let the random variable X denote the number of clients who will get satisfactory accommodation. Then the possible values of X are 0, 1, 2, 3, 4, 5, 6. Therefore

$$P[X = x] = \binom{6}{x} \left(\frac{3}{4}\right)^x \left(\frac{1}{4}\right)^{6-x} \quad \text{for } x=0, 1, 2, 3, 4, 5, 6.$$

(i) $P[X < 4] = \binom{6}{0}\left(\frac{3}{4}\right)^0\left(\frac{1}{4}\right)^6 + \binom{6}{1}\left(\frac{3}{4}\right)\left(\frac{1}{4}\right)^5 + \binom{6}{2}\left(\frac{3}{4}\right)^2\left(\frac{1}{4}\right)^4 + \binom{6}{3}\left(\frac{3}{4}\right)^3\left(\frac{1}{4}\right)^3$

$$= \frac{1}{4096} + \frac{18}{4096} + \frac{135}{4096} + \frac{540}{4096} = \frac{694}{4096}= 0.1694$$

(ii) $P[X = 4] = \binom{6}{4}\left(\frac{3}{4}\right)^4\left(\frac{1}{4}\right)^2 = \frac{1215}{4096}= 0.2966$

(iii) $P[X \geq 4] = \binom{6}{4}\left(\frac{3}{4}\right)^4\left(\frac{1}{4}\right)^2 + \binom{6}{5}\left(\frac{3}{4}\right)^5\left(\frac{1}{4}\right) + \binom{6}{6}\left(\frac{3}{4}\right)^6\left(\frac{1}{4}\right)^0$

$$= \frac{1215}{4096} + \frac{1458}{4096} + \frac{729}{4096} = \frac{3402}{4096}= 0.8306$$

(iv) $P[X \leq 4] = \binom{6}{0}\left(\frac{3}{4}\right)^0\left(\frac{1}{4}\right)^6 + \binom{6}{1}\left(\frac{3}{4}\right)\left(\frac{1}{4}\right)^5 + \binom{6}{2}\left(\frac{3}{4}\right)^2\left(\frac{1}{4}\right)^4 + \binom{6}{3}\left(\frac{3}{4}\right)^3\left(\frac{1}{4}\right)^3 + \binom{6}{4}\left(\frac{3}{4}\right)^4\left(\frac{1}{4}\right)^2$

$$= \frac{1}{4096} + \frac{18}{4096} + \frac{135}{4096} + \frac{540}{4096} + \frac{1215}{4096} = \frac{1909}{4096}= 0.4661$$

**Example 11.3.**

A person is known to win two games out of 8 games on an average. Find the probability that out of 5 games: (i) He will win first three games. (ii) He will win exactly two games.

**Solution:** The probability of x successes in a series of n trials is given by

$$P(X = x) = b(x; n, p) = \binom{n}{x} p^x q^{n-x} \quad \text{for } x=0, 1, 2, 3,..., n.$$

Here, $n = 5$, $p = \frac{2}{8} = \frac{1}{4}$, $q = 1 - p = \frac{3}{4}$, and $x = 0, 1, 2, 3, 4, 5$. Therefore

$$P(X = x) = \binom{5}{x}\left(\frac{1}{4}\right)^x\left(\frac{3}{4}\right)^{5-x} \quad \text{for } x=0, 1, 2, 3, 4, 5.$$

(i) P(He will win first three games) $= p^3 q^2 = \left(\frac{1}{4}\right)^3\left(\frac{3}{4}\right)^2 = \frac{9}{1024}= 0.0088$

(ii) P(He will win exactly two games) $= \binom{5}{2}\left(\frac{1}{4}\right)^2\left(\frac{3}{4}\right)^3 = \frac{270}{1024}= 0.2637$
