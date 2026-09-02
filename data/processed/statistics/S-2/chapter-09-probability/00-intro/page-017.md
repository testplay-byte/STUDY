---
book: S-2
book_title: "Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot"
page_image: 17
page_printed: 27
chapter: 9
chapter_title: "Probability"
section: "Example 9.18; Example 9.19; Example 9.20"
exercise: null
content_type: worked-examples
has_figures: true
figures_count: 2
source_image: ../../../../../../data/raw/statistics/S-2/0017.jpg
converted_at: "2026-09-02"
converted_by: "agent-3b (glm-vision)"
notes: "Running header prints '[Chapter 7] Probability' — book misprint; chapter is 9. Book prints 'A ∪ B ≤ S' (simple ≤, verified by zoom) where subset notation would be expected — preserved verbatim. '0.7 + 0.6 ≰ 1' printed with slashed ≤. Figure-8 sits right of Example 9.19 statement/solution start; Figure-9 right of the solution's end.
---

# Page 17 — Probability (Chapter 9)

> 📄 Original scan: [0017.jpg](../../../../../../data/raw/statistics/S-2/0017.jpg) · printed page 27

**Example 9.18.**

Two dice are rolled. Find the probability that the total is less than 12.

**Solution:** When two dice are rolled, there are 36 possible points. The sample space is

$$S = \left\{ \begin{array}{llllll} (1,1) & (1,2) & (1,3) & (1,4) & (1,5) & (1,6) \\ (2,1) & (2,2) & (2,3) & (2,4) & (2,5) & (2,6) \\ (3,1) & (3,2) & (3,3) & (3,4) & (3,5) & (3,6) \\ (4,1) & (4,2) & (4,3) & (4,4) & (4,5) & (4,6) \\ (5,1) & (5,2) & (5,3) & (5,4) & (5,5) & (5,6) \\ (6,1) & (6,2) & (6,3) & (6,4) & (6,5) & (6,6) \end{array} \right\}, n(S) = 36$$

In the sample space there are 35 pairs in which the total is less than 12. Let A represent these 35 outcomes and $\bar{A}$ represents only one outcome, the total of 12 that is $P(\bar{A}) = 1/36$.

Since A and $\bar{A}$ are disjoint. Therefore $P(A \cup \bar{A}) = P(S)=1$ or $P(A)+P(\bar{A}) = 1$

or $P(A) = 1 - P(\bar{A}) = 1 - \frac{1}{36} = \frac{35}{36}= P(\text{total is less than } 12)$

**Example 9.19.**

If A and B are two mutually exclusive events from a sample space, then is it possible that $P(A) = 0.7$ and $P(B) = 0.6$?

[Figure F1]

**Solution:**
Since A and B are mutually exclusive, therefore $A \cup B \leq S$
If A and B are exhaustive events, then $A \cup B = S$
If A and B are not exhaustive events, then $A \cup B < S$

Thus $A \cup B \leq S$
and $P(A \cup B) \leq P(S)$
or $P(A) + P(B) \leq 1$
or $0.7 + 0.6 \not\leq 1$

Hence A and B are not mutually exclusive events. The given probabilities are wrong.

[Figure F2]

**Example 9.20.**

A digit is selected at random from the first 100 natural numbers. Find the probability that the selected digit is multiple of 10 or multiple of 11.

**Solution:** The sample space will be $S = \{1, 2, 3, ..., 100\}$, $n(S) = 100$

Let A be the event that the selected digit is multiple of 10, then

$$A = \{10, 20, 30, 40, 50, 60, 70, 80, 90, 100\}, n(A) = 10, P(A) = \frac{n(A)}{n(S)} = \frac{10}{100}$$

Let B be the event that the selected digit is multiple of 11, then

$$B = \{11, 22, 33, 44, 55, 66, 77, 88, 99\}, n(B) = 9, P(B) = \frac{n(B)}{n(S)} = \frac{9}{100}$$

Any multiple of 10 is not common with the multiples of 11. Thus A and B are mutually exclusive events, therefore

$$P(A \cup B) = P(\text{A or B}) = P(A) + P(B) = \frac{10}{100} + \frac{9}{100} = \frac{19}{100} = 0.19$$

## Figures on this page

### Figure F1 — Venn diagram for exhaustive events (right side, beside Example 9.19 statement and start of solution)
- **Type:** venn-diagram
- **Caption/Number:** Figure-8
- **Description:** A rectangular box representing the universal set S. It is divided by a diagonal line running from bottom-left to top-right into two regions labeled A (left) and B (right); the two regions together fill the entire box. Below the box it states "$A \cup B = S$" and below that "A and B are exhaustive events".
- **Mathematical meaning:** Illustrates that if two events A and B are exhaustive, their union covers the entire sample space S ($A \cup B = S$).

### Figure F2 — Venn diagram for non-exhaustive events (right side, beside the end of Example 9.19 solution)
- **Type:** venn-diagram
- **Caption/Number:** Figure-9
- **Description:** A rectangular box representing the universal set S, containing three vertical sections: the first labeled A, the second labeled B, and a third empty region to the right of B. Below the box it states "$A \cup B < S$" and below that "A and B are not exhaustive events".
- **Mathematical meaning:** Illustrates that if two events A and B are not exhaustive, their union does not cover the entire sample space S ($A \cup B \subset S$).
