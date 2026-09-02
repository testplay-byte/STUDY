---
subject: statistics
book_title: "Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot"
batch: S-2
chapter_folder: chapter-09-probability
chapter_number: 9
chapter_title: "Probability"
page_image: 21
page_printed: 31
section: null
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../raw/S-2/0021.jpg
converted_at: "2026-09-02"
converted_by: "agent-3c (glm-vision)"
notes: "Running header misprints '[Chapter 7] Probability' — book misprint; chapter is 9 (validated by recon; section numbering 9.x). Page begins mid-solution: the top 'Solution:' + contingency table + lines (i)-(x) are the tail of an example from printed p.30. Example 9.28 solution is cut off after P(B) = 1/2 and continues on printed p.32 (next page). No numbered section headings on page (section: null); only example/solution headings."
---

# Page 21 — Probability (Chapter 9)

> 📄 Original scan: [0021.jpg](../raw/S-2/0021.jpg) · printed page 31

**Solution:**

| | B | $\bar{B}$ | Total |
| :--- | :--- | :--- | :--- |
| **A** | $n(A \cap B)=10$ | $n(A \cap \bar{B})=30$ | $n(A)=40$ |
| **$\bar{A}$** | $n(\bar{A} \cap B)=25$ | $n(\bar{A} \cap \bar{B})=35$ | $n(\bar{A})=60$ |
| **Total** | $n(B)=35$ | $n(\bar{B})=65$ | $n(S)=100$ |

(i) $\quad P(A) = \frac{n(A)}{n(S)} = \frac{40}{100} = 0.40$

(ii) $\quad P(B) = \frac{n(B)}{n(S)} = \frac{35}{100} = 0.35$

(iii) $\quad P(\bar{A}) = \frac{n(\bar{A})}{n(S)} = \frac{60}{100} = 0.60$

(iv) $\quad P(A \text{ and } B) = \frac{n(A \cap B)}{n(S)} = \frac{10}{100} = 0.10$

(v) $\quad P(A \text{ and } \bar{B}) = \frac{n(A \cap \bar{B})}{n(S)} = \frac{30}{100} = 0.30$

(vi) $\quad P(\bar{A} \text{ and } \bar{B}) = \frac{n(\bar{A} \cap \bar{B})}{n(S)} = \frac{35}{100} = 0.35$

(vii) $\quad P(A \text{ or } B) = P(A) + P(B) - P(A \cap B) = \frac{40}{100} + \frac{35}{100} - \frac{10}{100} = \frac{65}{100} = 0.65$

(viii) $\quad P(A \text{ or } \bar{B}) = P(A) + P(\bar{B}) - P(A \cap \bar{B}) = \frac{40}{100} + \frac{65}{100} - \frac{30}{100} = \frac{75}{100} = 0.75$

(ix) $\quad P(\bar{A} \text{ or } \bar{B}) = P(\bar{A}) + P(\bar{B}) - P(\bar{A} \cap \bar{B}) = \frac{60}{100} + \frac{65}{100} - \frac{35}{100} = \frac{90}{100} = 0.90$

(x) $\quad P(\bar{A} \text{ or } B) = P(\bar{A}) + P(B) - P(\bar{A} \cap B) = \frac{60}{100} + \frac{35}{100} - \frac{25}{100} = \frac{70}{100} = 0.70$

**Example 9.27.**

A and B can solve 70 % and 80 % of the problems in a book respectively. Find the chance that a problem chosen at random will be solved by at least one of them.

**Solution:** Here, A and B are independent events.

$$P(A) = \frac{70}{100} = 0.7, \quad P(B) = \frac{80}{100} = 0.8 \text{ and } P(A \cap B) = P(A)P(B) = (0.7)(0.8) = 0.56$$

Since A and B are not mutually exclusive events, therefore

$$P(\text{at least one }) = P(A \cup B) = P(A) + P(B) - P(A \cap B) = 0.7 + 0.8 - 0.56 = 0.94$$

**Example 9.28.**

A class contains 10 boys and 20 girls. Half of the boys and half of the girls have brown eyes. Find the probability that a student chosen at random is a boy or has brown eyes.

**Solution:**

| | Boys | Girls | Total |
| :--- | :--- | :--- | :--- |
| **Class** | 10 | 20 | 30 |
| **Brown eyes** | 5 | 10 | 15 |

$n(S) = ^{30}C_1 = 30$

Let $A =$ a student is a boy, $\quad n(A) = ^{10}C_1 = 10, \quad P(A) = \frac{n(A)}{n(S)} = \frac{10}{30} = \frac{1}{3}$

$B =$ a student has brown eyes, $n(B) = ^{15}C_1 = 15, \quad P(B) = \frac{n(B)}{n(S)} = \frac{15}{30} = \frac{1}{2}$
