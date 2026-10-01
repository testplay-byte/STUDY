---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-4
chapter_folder: Chapter-11-Binomial-and-Hypergeometric-Distributions
chapter_number: 11
chapter_title: "Binomial and Hypergeometric Distributions"
page_image: 5
page_printed: 99
section: null
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-11-Binomial-and-Hypergeometric-Distributions/0005.jpg
converted_at: "2026-10-01"
converted_by: "agent-S4a (glm-vision)"
notes: "Offset check: printed p.99 = image 5 + 94 (header folio, top-right; odd page). Three worked examples (11.4 complete, 11.5 complete, 11.6 solution breaks off after part (iii) at the page foot — continues on printed p.100). Book's own grammar preserved: Example 11.4 prints 'If a student attempts this paper by guess. Find the probability...'. Example 11.4(ii) prints a dotted equality symbol ($\\doteq$) before 0.0046 — preserved. No section headings, no figures."
---

# Page 5 — Binomial and Hypergeometric Distributions (Chapter 11)

> 📄 Original scan: [0005.jpg](../../../Raw/Statistics/Chapter-11-Binomial-and-Hypergeometric-Distributions/0005.jpg) · printed page 99

**Example 11.4.**
A paper has 6 multiple choice questions with four alternatives. Answering these questions by guess work is a binomial experiment. If a student attempts this paper by guess. Find the probability that he / she answers: (i) 3 correct (ii) more than 4 correct

**Solution:** The probability of x successes in a series of n trials is given by

$$P(X = x) = b(x; n, p) = \binom{n}{x} p^x q^{n-x} \text{ for } x = 0, 1, 2, 3, \ldots, n.$$

Here, $n = 6$, $p = \frac{1}{4}$, $q = 1 - p = \frac{3}{4}$ and $x = 0, 1, 2, 3, 4, 5, 6$. Therefore

$$P(X = x) = \binom{6}{x} \left(\frac{1}{4}\right)^x \left(\frac{3}{4}\right)^{6-x} \text{ for } x = 0, 1, 2, 3, 4, 5, 6.$$

(i) $P(X = 3) = \binom{6}{3} \left(\frac{1}{4}\right)^3 \left(\frac{3}{4}\right)^3 = \frac{540}{4096} = 0.1318$

(ii) $P(X > 4) = \binom{6}{5} \left(\frac{1}{4}\right)^5 \left(\frac{3}{4}\right)^1 + \binom{6}{6} \left(\frac{1}{4}\right)^6 \left(\frac{3}{4}\right)^0 = \frac{18}{4096} + \frac{1}{4096} = \frac{19}{4096} \doteq 0.0046$

**Example 11.5.**
Large lots of incoming products at a manufacturing plant are inspected for defectives by means of a sampling scheme. Only 8 items are to be examined and the lot is rejected if 2 or more defectives are observed. If a lot contains 10 % defectives, what is probability that the lot will be:
(i) accepted? (ii) rejected?

**Solution:** The probability of x successes in a series of n trials is given by

$$P[X = x] = b(x; n, p) = \binom{n}{x} p^x q^{n-x} \text{ for } x = 0, 1, 2, 3, \ldots, n.$$

Here, $n = 8$, $p = 10/100 = 1/10$ and $q = 1 - p = 9/10$
Let the random variable X denote the number of defective items, then the possible values of X are 0, 1, 2, 3, ..., 8. Therefore

$$P[X = x] = \binom{8}{x} \left(\frac{1}{10}\right)^x \left(\frac{9}{10}\right)^{8-x} \text{ for } x = 0, 1, 2, 3, \ldots, 8.$$

(i) $P[\text{Accepted}] = P[X < 2] = \binom{8}{0}\left(\frac{1}{10}\right)^0\left(\frac{9}{10}\right)^8 + \binom{8}{1}\left(\frac{1}{10}\right)\left(\frac{9}{10}\right)^7 = 0.4305 + 0.3826 = 0.8131$

(ii) $P[\text{Rejected}] = P[X \geq 2] = 1 - P[X < 2] = 1 - 0.8131 = 0.1869$.

**Example 11.6.**
Assuming that each baby has probability 0.4 of being male, find the probability that a family of 4 children will have
(i) exactly one boy (ii) exactly one girl (iii) at least one boy
(iv) at least one girl (v) at most one boy (vi) at most one girl

**Solution:** The probability of x successes in a series of n trials is given by

$$P(X = x) = b(x; n, p) = \binom{n}{x} p^x q^{n-x} \text{ for } x = 0, 1, 2, 3, \ldots, n.$$

Here, $n = 4$, $p = 0.4$, $q = 1 - p = 1 - 0.4 = 0.6$
Let the random variable X denote the number of boys, then the possible values of X are 0, 1, 2, 3, 4. Therefore

$$P(X = x) = \binom{4}{x} (0.4)^x (0.6)^{4-x} \text{ for } x = 0, 1, 2, 3, 4.$$

(i) $P(X = 1) = \binom{4}{1} (0.4)^1 (0.6)^3 = 0.3456$

(ii) $P(X = 3) = \binom{4}{3} (0.4)^3 (0.6)^1 = 0.1536$

(iii) $P(X \geq 1) = 1 - P(X = 0) = 1 - \binom{4}{0} (0.4)^0 (0.6)^4 = 1 - 0.1296 = 0.8704$
