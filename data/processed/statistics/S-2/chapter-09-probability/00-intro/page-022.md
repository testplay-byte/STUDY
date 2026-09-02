---
book: S-2
book_title: "Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot"
page_image: 22
page_printed: 32
chapter: 9
chapter_title: "Probability"
section: "9.19 CONDITIONAL PROBABILITY"
exercise: null
content_type: mixed
has_figures: false
figures_count: 0
source_image: ../../../../../../data/raw/statistics/S-2/0022.jpg
converted_at: "2026-09-02"
converted_by: "agent-3c (glm-vision)"
notes: "Even page: header 'Basic Statistics Part-II ( Federal Board )' + printed 32 top-left. Page begins mid-solution — top line n(A ∩ B) = 5C1 = 5 … is the tail of Example 9.28 from printed p.31. Example 9.29 complete on page; section 9.19 theory fills the bottom. No figures/tables."
---

# Page 22 — Probability (Chapter 9)

> 📄 Original scan: [0022.jpg](../../../../../../data/raw/statistics/S-2/0022.jpg) · printed page 32

$$n(A \cap B) = {}^5C_1 = 5, \quad P(A \cap B) = \frac{n(A \cap B)}{n(S)} = \frac{5}{30} = \frac{1}{6}$$

Since A and B are not mutually exclusive events, therefore

$$P(A \cup B) = P(A) + P(B) - P(A \cap B) = \frac{1}{3} + \frac{1}{2} - \frac{1}{6} = \frac{2+3-1}{6} = \frac{4}{6} = \frac{2}{3}$$

**Example 9.29.**

A drum contains 50 bolts and 150 nuts. Half of the bolts and half of the nuts are rusted. (i) If one item is chosen at random, what is the probability that it is rusted or is a bolt? (ii) If two items are chosen at random, what is the probability that both are rusted or both are nuts?

**Solution:**

$$\begin{aligned} \text{Total items} &= 50 \text{ bolts} + 150 \text{ nuts} = 200 \\ \text{Rusted items} &= 25 \text{ bolts} + 75 \text{ nuts} = 100 \end{aligned}$$

(i) $n(S) = {}^{200}C_1 = 200$

Let A be the event that an item is rusted and B be the event that an item is a bolt, then

$$\begin{aligned} n(A) &= {}^{100}C_1 = 100, &\quad P(A) &= \frac{n(A)}{n(S)} = \frac{100}{200} = \frac{1}{2} \\ n(B) &= {}^{50}C_1 = 50, &\quad P(B) &= \frac{n(B)}{n(S)} = \frac{50}{200} = \frac{1}{4} \\ n(A \cap B) &= {}^{25}C_1 = 25, &\quad P(A \cap B) &= \frac{n(A \cap B)}{n(S)} = \frac{25}{200} = \frac{1}{8} \end{aligned}$$

Since A and B are not mutually exclusive events, therefore

$$P(A \text{ or } B) = P(A) + P(B) - P(A \cap B) = \frac{1}{2} + \frac{1}{4} - \frac{1}{8} = \frac{5}{8} = 0.625$$

(ii) $n(S) = {}^{200}C_2 = 19900$

Let C be the event that both items are rusted and D be the event that both items are nuts

$$\begin{aligned} n(C) &= {}^{100}C_2 = 4950, &\quad P(C) &= \frac{n(C)}{n(S)} = \frac{4950}{19900} = 0.25 \\ n(D) &= {}^{150}C_2 = 11175, &\quad P(D) &= \frac{n(D)}{n(S)} = \frac{11175}{19900} = 0.56 \\ n(C \cap D) &= {}^{75}C_2 = 2775, &\quad P(C \cap D) &= \frac{n(C \cap D)}{n(S)} = \frac{2775}{19900} = 0.14 \end{aligned}$$

Since C and D are not mutually exclusive events, therefore

$$P(C \text{ or } D) = P(C) + P(D) - P(C \cap D) = 0.25 + 0.56 - 0.14 = 0.67$$

## 9.19. CONDITIONAL PROBABILITY

The probability of an event A is called conditional if it depends upon the occurrence of some other event B. The conditional probability of event A when event B has already occurred is denoted by $P(A/B)$. It can be shown that $P(A/B) = \frac{P(A \cap B)}{P(B)}$ when $P(B) \neq 0$

We read $P(A/B)$ as probability of A when B has occurred or "the probability of A given B".

Similarly, $P(B/A) = \frac{P(A \cap B)}{P(A)}$ when $P(A) \neq 0$

We read $P(B/A)$ as probability of B when A has occurred or "the probability of B given A".
