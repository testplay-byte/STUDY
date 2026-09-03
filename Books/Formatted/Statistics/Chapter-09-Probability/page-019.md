---
subject: statistics
book_title: "Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot"
batch: S-2
chapter_folder: Chapter-09-Probability
chapter_number: 9
chapter_title: "Probability"
page_image: 19
page_printed: 29
section: "Examples 9.22 – 9.23 (worked examples)"
exercise: null
content_type: worked-examples
has_figures: true
figures_count: 1
source_image: ../../../Raw/Statistics/Chapter-09-Probability/0019.jpg
converted_at: "2026-09-02"
converted_by: "coordinator (glm direct transcription; VLM API quota exhausted)"
notes: "Odd-page running header misprints '[Chapter 7] Probability' — chapter is 9; header digit = furniture. Printed 29 top right (offset check: 19 + 10 = 29 ✓). Transcribed directly by coordinator via image read because the vision API returned sustained 429s. P(A ∩ B') in Ex 9.23 is printed with a prime mark (B') — preserved as printed."
---

# Page 19 — Probability (Chapter 9)

> 📄 Original scan: [0019.jpg](../../../Raw/Statistics/Chapter-09-Probability/0019.jpg) · printed page 29

**Example 9.22.**

A die is rolled. Find the probability that the face is a prime or is even number.

**Solution:** When a die is rolled, there are 6 possible outcomes which are equally likely. Therefore

$$S = \{1, 2, 3, 4, 5, 6\}, \quad n(S) = 6$$

Let A be the event that the face is prime number, then

$$A = \{2, 3, 5\}, \quad n(A) = 3, \quad P(A) = \frac{n(A)}{n(S)} = \frac{3}{6}$$

Let B be the event that the face is even number, then

$$B = \{2, 4, 6\}, \quad n(B) = 3, \quad P(B) = \frac{n(B)}{n(S)} = \frac{3}{6}$$

A and B are overlapping

$$A \cap B = \{2\}, \quad n(A \cap B) = 1, \quad P(A \cap B) = \frac{n(A \cap B)}{n(S)} = \frac{1}{6}$$

Since A and B are not mutually exclusive events, therefore

$$P(A \cup B) = P(A) + P(B) - P(A \cap B) = \frac{3}{6} + \frac{3}{6} - \frac{1}{6} = \frac{5}{6}$$

<u>Alternate Solution</u>

Here, $S = \{1, 2, 3, 4, 5, 6\}$, $n(S) = 6$, $A = \{2, 3, 5\}$, $B = \{2, 4, 6\}$,

$$A \cup B = \{2, 3, 4, 5, 6\}, \quad n(A \cup B) = 5, \quad P(A \cup B) = \frac{n(A \cup B)}{n(S)} = \frac{5}{6}$$

**Example 9.23.**

Two coins are tossed. Find the probability that both faces are heads or at least one is head.

**Solution:**

When two coins are tossed, the sample space S contains $2^2 = 4$ possible outcomes, therefore

$$S = \{HH, HT, TH, TT\}, \quad n(S) = 4.$$

Let A be the event that both faces are heads, then

$$A = \{HH\}, \quad n(A) = 1, \quad P(A) = \frac{n(A)}{n(S)} = \frac{1}{4}$$

Let B be the event that at least one is head, then

$$B = \{HH, HT, TH\}, \quad n(B) = 3, \quad P(B) = \frac{n(B)}{n(S)} = \frac{3}{4}$$

[Figure F1]

$$A \cap B = \{HH\}, \quad n(A \cap B) = 1, \quad P(A \cap B') = \frac{n(A \cap B)}{n(S)} = \frac{1}{4}$$

Since A and B are not mutually exclusive events, therefore

$$P(A \cup B) = P(A) + P(B) - P(A \cap B) = \frac{1}{4} + \frac{3}{4} - \frac{1}{4} = \frac{3}{4}$$

<u>Alternately Method</u>

Here, $S = \{HH, HT, TH, TT\}$, $n(S) = 4$, $A = \{HH\}$, $B = \{HH, HT, TH\}$

$$A \cup B = \{HH, HT, TH\}, \quad n(A \cup B) = 3 \text{ and } P(A \cup B) = \frac{n(A \cup B)}{n(S)} = \frac{3}{4}\text{ .}$$

## Figures on this page

### Figure F1 — Venn diagram of A ∪ B for two tossed coins (right side, beside the Solution of Example 9.23)
- **Type:** venn-diagram
- **Caption/Number:** Figure-12.
- **Description:** A rectangular box represents the sample space S (letter S at the right edge). Inside, two concentric circles: the inner circle is labeled HH (with label A pointing to it by an arrow from the top-left), and the annular region between the inner and outer circles contains the labels HT (top), TH (bottom), and TT (right, with label B pointing to the outer circle by an arrow from the bottom-right). Below the diagram the printed text reads "A ∪ B is shaded".
- **Mathematical meaning:** Shows event A = {HH} contained within event B = {HH, HT, TH}; the shaded union A ∪ B illustrates P(A ∪ B) = P(A) + P(B) − P(A ∩ B) for two tossed coins.
