---
subject: statistics
book_title: "Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot"
batch: S-2
chapter_folder: chapter-09-probability
chapter_number: 9
chapter_title: "Probability"
page_image: 15
page_printed: 25
section: "(iv) Subjective or Personalistic Probability; 9.17. ADDITION LAW FOR MUTUALLY EXCLUSIVE EVENTS"
exercise: null
content_type: theory
has_figures: true
figures_count: 2
source_image: ../raw/S-2/0015.jpg
converted_at: "2026-09-02"
converted_by: "agent-3b (glm-vision)"
notes: "Running header prints '[Chapter 7] Probability' — book misprint; chapter is 9. Two Venn figures: Figure-6 (right side beside proof, two separate shaded circles, caption below 'A ∪ B is shaded') and Figure-7 (bottom right beside Corollary 2). Figure-7 has no printed caption text beyond 'Figure-7'.
---

# Page 15 — Probability (Chapter 9)

> 📄 Original scan: [0015.jpg](../raw/S-2/0015.jpg) · printed page 25

## (iv) Subjective or Personalistic Probability

A person may have some confidence or belief regarding the occurrence of some event, say A. The numerical measure of this confidence is called the subjective probability of the occurrence of A. This probability is based on the experience, intelligence and knowledge of the person who is determining the probability in some situation. For example, we may be interested to know whether a certain political system will succeed in a country or not. The probability of success in this situation cannot be determined by objective definitions of probability. The assessment of this probability is made by some expert. This approach can be applied in real world situations. This probability is subjective in nature. Different persons may have different probabilities for the same situation at the same time.

## 9.17. ADDITION LAW FOR MUTUALLY EXCLUSIVE EVENTS

**Theorem:**

If the two events A and B are mutually exclusive then the probability that any one of them will occur is the sum of the probabilities of A and B. In symbols,

$$P(A \text{ or } B) = P(A \cup B) = P(A) + P(B)$$

*Proof:*

Suppose there is a sample space S containing N points (outcomes) which are equally likely. The two events A and B belong to S and contain $n_1$ and $n_2$ points respectively. There is no point common to A and B. As A and B are disjoint, the union of A and B contains $(n_1 + n_2)$ points. Using classical definition of probability, we can write

$$P(A \cup B) = \frac{\text{Number of outcomes favourable to } A \cup B}{\text{Total number of outcomes in S}} = \frac{n_1 + n_2}{N} = \frac{n_1}{N} + \frac{n_2}{N} = P(A) + P(B)$$

[Figure F1]

Thus $P(A \cup B) = P(A) + P(B)$

The law can be generalised for more than two events. If $A_1, A_2, A_3, ..., A_k$ are k mutually exclusive events then

$$P(A_1 \cup A_2 \cup A_3 \cup ... \cup A_k) = P(A_1) + P(A_2) + P(A_3) + ... + P(A_k) = \sum_{i=1}^{k} P(A_i)$$

As a special case, if $A_1 \cup A_2 \cup A_3 \cup ... \cup A_r = S$
then $P(A_1 \cup A_2 \cup A_3 \cup ... \cup A_r) = P(S) = 1$ or $P(A_1) + P(A_2) + P(A_3) + ... + P(A_r) = 1$
Here, $A_1, A_2, A_3, ..., A_r$ are called exhaustive events. They are mutually exclusive and they cover the whole sample space.

**Corollary 1:** If $\phi$ is an empty set, then $P(\phi) = 0$

We know that $\phi \cup S = S$ and $P(\phi \cup S) = P(S)$
$\phi$ and S are mutually exclusive events, therefore
$P(\phi) + P(S) = P(S)$ or $P(\phi) = P(S) - P(S) = 0$

**Corollary 2:** If $\bar{A}$ is complement of a set A relative to same sample space S, then $A \cup \bar{A} = S$
and $P(A \cup \bar{A}) = P(S) = 1$
A and $\bar{A}$ are mutually exclusive, therefore
$P(A) + P(\bar{A}) = 1$ or $P(\bar{A}) = 1 - P(A)$
or $P(A) = 1 - P(\bar{A})$

This is called law of complementation of two sets.

[Figure F2]

## Figures on this page

### Figure F1 — Venn diagram for mutually exclusive events (right side, beside proof text and formula)
- **Type:** venn-diagram
- **Caption/Number:** Figure-6
- **Description:** A rectangular box representing the sample space S containing N points. Inside it are two separate, non-overlapping shaded circles: the left circle is labeled 'A' and contains $n_1$ points, the right circle is labeled 'B' and contains $n_2$ points. Printed text under the diagram: "$A \cup B$ is shaded".
- **Mathematical meaning:** Illustrates that for mutually exclusive (disjoint) events A and B, the union contains the sum of their individual elements.

### Figure F2 — Venn diagram for complementary sets (bottom right, beside Corollary 2 text)
- **Type:** venn-diagram
- **Caption/Number:** Figure-7
- **Description:** A rectangular box representing the sample space S, divided by a diagonal line into two regions. The left region is labeled A, and the right region is labeled $\bar{A}$. Caption 'Figure-7' printed below the diagram.
- **Mathematical meaning:** Demonstrates that an event A and its complement $\bar{A}$ are mutually exclusive and exhaustive, partitioning the entire sample space S such that $P(A) + P(\bar{A}) = 1$.
