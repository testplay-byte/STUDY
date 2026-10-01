---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-5
chapter_folder: Chapter-12-Normal-Distribution
chapter_number: 12
chapter_title: Normal Distribution
page_image: 11
page_printed: 133
section: "12.7 THE NORMAL APPROXIMATION TO THE BINOMIAL DISTRIBUTION"
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-12-Normal-Distribution/0011.jpg
converted_at: "2026-10-01"
converted_by: "agent-S5d (glm-vision)"
notes: "Offset check: printed p.133 = image 11 + 122 (header folio, top-right). Page opens with Step 3 of the §12.7 procedure (continued from p.132); Example 12.13 parts (vii), (viii) and (ix) are not yet solved at the bottom — the solution continues on next page. Book styling/typos preserved verbatim: 'Use the normal approximation to find' begins with a capital U mid-sentence; a stray quote mark ( ' ) is printed after '(iv) P(X ≥ 62 )' in the example statement; a small stray ink mark sits above the word 'variable' in the Example 12.13 statement."
---

# Page 11 — Normal Distribution (Chapter 12)

> 📄 Original scan: [0011.jpg](../../../Raw/Statistics/Chapter-12-Normal-Distribution/0011.jpg) · printed page 133

Step 3. Use a standard normal table to find the probabilities corresponding to Z in order to obtain the binomial b( x; n, p ). For example,

$$\begin{aligned}
P(X = a) & \equiv P \left[ \frac{(a - 1/2) - \mu}{\sigma} \leq Z \leq \frac{(a + 1/2) - \mu}{\sigma} \right] \\
P(X \leq b) & \equiv P \left[ Z \leq \frac{(b + 1/2) - \mu}{\sigma} \right] \\
P(X \geq c) & \equiv P \left[ Z \geq \frac{(c - 1/2) - \mu}{\sigma} \right] \text{ or } 1 - P \left[ Z \leq \frac{(c + 1/2) - \mu}{\sigma} \right]
\end{aligned}$$

where a, b and c are some values of random variable X.

**Example 12.13.**

If X is a binomial random variable with distribution b( x; 100, 0.5 ), Use the normal approximation to find

(i) $\quad$ $P(X < 40)$  (ii) $\quad$ $P(X \leq 40)$  (iii) $\quad$ $P(X > 62)$

(iv) $\quad$ $P(X \geq 62)$  (v) $\quad$ $P(40 < X < 60)$  (vi) $\quad$ $P(40 \leq X < 60)$

(vii) $\quad$ $P(40 < X \leq 60)$  (viii) $\quad$ $P(40 \leq X \leq 60)$  (ix) $\quad$ $P(X = 50)$

**Solution:** Here, n = 100, p = 0.5, q = 1 - p = 1 - 0.5 = 0.5, $\mu = np = 100 ( 0.5 ) = 50$

$\sigma = \sqrt{npq} = \sqrt{100(0.5)(0.5)} = 5$ and $Z = \frac{X - \mu}{\sigma} = \frac{X - 50}{5}$. Therefore

(i) Considering the data as continuous, it follows that $X < 40$ can be considered as $X \leq 39.5$. The corresponding Z value is

$Z = \frac{39.5 - 50}{5} = -2.1$

$P(X < 40) = P(Z \leq -2.1) = P(-\infty \leq Z \leq 0) - P(-2.1 \leq Z \leq 0) = 0.5 - 0.4821 = 0.0179$

(ii) Considering the data as continuous, it follows that $X \leq 40$ can be considered as $X \leq 40.5$. The corresponding Z value is

$Z = \frac{40.5 - 50}{5} = -1.9$

$P(X \leq 40) = P(Z \leq -1.9) = P(-\infty \leq Z \leq 0) - P(-1.9 \leq Z \leq 0) = 0.5 - 0.4713 = 0.0287$

(iii) Considering the data as continuous, it follows that $X > 62$ can be considered as $X \geq 62.5$. The corresponding Z value is

$Z = \frac{62.5 - 50}{5} = 2.5$

$P(X > 62) = P(Z \geq 2.5) = P(0 \leq Z \leq \infty) - P(0 \leq Z \leq 2.5) = 0.5 - 0.4938 = 0.0062$

(iv) Considering the data as continuous, it follows that $X \geq 62$ can be considered as $X \geq 61.5$. The corresponding Z value is

$Z = \frac{61.5 - 50}{5} = 2.3$

$P(X \geq 62) = P(Z \geq 2.3) = P(0 \leq Z \leq \infty) - P(0 \leq Z \leq 2.3) = 0.5 - 0.4893 = 0.0107$

(v) Considering the data as continuous, it follows that $40 < X < 60$ can be considered as $40.5 \leq X \leq 59.5$. The corresponding Z values are

$Z_1 = \frac{X_1 - 50}{5} = \frac{40.5 - 50}{5} = -1.9$ and $Z_2 = \frac{X_2 - 50}{5} = \frac{59.5 - 50}{5} = +1.9$

$P(40 < X < 60) = P(-1.9 \leq Z \leq +1.9) = P(-1.9 \leq Z \leq 0) + P(0 \leq Z \leq 1.9) = 0.4713 + 0.4713 = 0.9426$

(vi) Considering the data as continuous, it follows that $40 \leq X < 60$ can be considered as $39.5 \leq X \leq 59.5$. The corresponding Z values are

$Z_1 = \frac{X_1 - 50}{5} = \frac{39.5 - 50}{5} = -2.1$ and $Z_2 = \frac{X_2 - 50}{5} = \frac{59.5 - 50}{5} = +1.9$

$P(40 \leq X < 60) \equiv P(-2.1 \leq Z \leq +1.9) = P(-2.1 \leq Z \leq 0) + P(0 \leq Z \leq 1.9) = 0.4821 + 0.4713 = 0.9534$
