---
book: S-2
book_title: "Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot"
page_image: 25
page_printed: 35
chapter: 9
chapter_title: "Probability"
section: null
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../../../../data/raw/statistics/S-2/0025.jpg
converted_at: "2026-09-02"
converted_by: "agent-3c (glm-vision)"
notes: "Running header misprints '[Chapter 7] Probability' — book misprint; chapter is 9. Page begins with parts (i)-(iv) of Example 9.32 (continued from printed p.34) + closing independence discussion, then Example 9.33 complete and Example 9.34 (i) begins; its solution continues on printed p.36. Book quirk preserved: 'Two coins are tossed. Find the following probabilities,' ends with a comma as printed. No numbered section headings; no figures."
---

# Page 25 — Probability (Chapter 9)

> 📄 Original scan: [0025.jpg](../../../../../../data/raw/statistics/S-2/0025.jpg) · printed page 35

(i) $P(A/B) = \frac{P(A \cap B)}{P(B)} = \frac{1/8}{4/8} = \frac{1}{4}$

Hence, $P(A/B) < P(A)$

(ii) $P(B/A) = \frac{P(A \cap B)}{P(A)} = \frac{1/8}{3/8} = \frac{1}{3}$

Hence, $P(B/A) < P(B)$

(iii) $P(B/\bar{A}) = \frac{P(\bar{A} \cap B)}{P(\bar{A})} = \frac{3/8}{5/8} = \frac{3}{5}$

Hence, $P(B/\bar{A}) > P(B)$

(iv) $P(\bar{A}/B) = \frac{P(\bar{A} \cap B)}{P(B)} = \frac{3/8}{4/8} = \frac{3}{4}$

Hence, $P(\bar{A}/B) > P(\bar{A})$

In (i) and (ii) above, we find that both the conditional probabilities P(A/B) and P(B/A) are less than the ordinary probabilities and in (iii) and (iv) above, both conditional probabilities are greater than the respective ordinary probabilities.

Thus if A and B are two events then both conditional probabilities P(A/B) and P(B/A) will be greater or both will be less than their ordinary probabilities or both will be equal to their respective ordinary probabilities.

If P(A/B) = P(A), then P(B/A) = P(B). In a topic on Independence we shall say that the events A and B are independent if P(A/B) = P(A) and P(B/A) = P(B).

When P(A/B) = P(A), then P(B/A) is always equal to P(B).

**Example 9.33.**

Given S = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}, A = {1, 3, 8, 9, 10} and B = {1, 3, 6, 7}. Write the elements of the events A ∩ B and find the probabilities:

(i) P(A) and P(A/B)

(ii) P(B) and P(B/A)

**Solution:** Here, S = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}, n(S) = 10

$$A = \{1, 3, 8, 9, 10\}, \quad n(A) = 5, \quad P(A) = \frac{n(A)}{n(S)} = \frac{5}{10} = 0.5$$

$$B = \{1, 3, 6, 7\}, \quad n(B) = 4, \quad P(B) = \frac{n(B)}{n(S)} = \frac{4}{10} = 0.4$$

$$A \cap B = \{1, 3\}, \quad n(A \cap B) = 2, \quad P(A \cap B) = \frac{n(A \cap B)}{n(S)} = \frac{2}{10} = 0.2$$

$$P(A/B) = \frac{P(A \cap B)}{P(B)} = \frac{0.2}{0.4} = 0.5 \quad \text{and} \quad P(B/A) = \frac{P(A \cap B)}{P(A)} = \frac{0.2}{0.5} = 0.4$$

(i) P(A) = 0.5 and P(A/B) = 0.5. Hence P(A) = P(A/B)

(ii) P(B) = 0.4 and P(B/A) = 0.4. Hence P(B) = P(B/A)

Here, P(A/B) = P(A) and P(B/A) = P(B). This is a condition of independence.

**Example 9.34.**

Two coins are tossed. Find the following probabilities,

(i) both are heads given that at least one is head.

(ii) the first coin shows head when it is known that one is head and the other is tail.

**Solution:** When two coins are tossed the sample space of 4 possible outcomes is

$$S = \{\text{HH, HT, TH, TT}\}, \quad n(S) = 4$$

It is assumed that the four outcomes are equally likely and each outcome has probability of 1/4.

(i) Let A denote the event "both are heads" and B denote the event "at least one is head", then

$$A = \{\text{HH}\}, \quad n(A) = 1, \quad P(A) = \frac{n(A)}{n(S)} = \frac{1}{4}$$

$$B = \{\text{HH, HT, TH}\}, \quad n(B) = 3, \quad P(B) = \frac{n(B)}{n(S)} = \frac{3}{4}$$
