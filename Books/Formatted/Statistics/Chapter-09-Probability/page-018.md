---
subject: statistics
book_title: "Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot"
batch: S-2
chapter_folder: Chapter-09-Probability
chapter_number: 9
chapter_title: "Probability"
page_image: 18
page_printed: 28
section: "9.18 ADDITION LAW FOR NOT MUTUALLY EXCLUSIVE EVENTS"
exercise: null
content_type: mixed
has_figures: true
figures_count: 2
source_image: ../../../Raw/Statistics/Chapter-09-Probability/0018.jpg
converted_at: "2026-09-02"
converted_by: "agent-3b (glm-vision), finalized by coordinator"
notes: "Top of page = Example 9.21 (worked example) then §9.18 theory -> mixed. Book prints 'Thus A ∩ B has n1+(n2−m) points' (mathematically it is A ∪ B) — preserved verbatim. Figures 10/11 sit to the right of the text. Even-page header furniture."
---

# Page 18 — Probability (Chapter 9)

> 📄 Original scan: [0018.jpg](../../../Raw/Statistics/Chapter-09-Probability/0018.jpg) · printed page 28

**Example 9.21.**

A, B and C are taking part in a race. The chance of winning the race by A is half of that of B and B winning the race is half of that of C. Find their respective chances of winning the race.

**Solution:** Let the probability of winning the race by A is p that is

$$P(A) = p, \text{ then } P(B) = 2p \text{ and } P(C) = 4p.$$

Since A, B and C are mutually exclusive events, therefore

$$P(A \cup B \cup C) = P(A) + P(B) + P(C) \text{ or } 1 = p + 2p + 4p \text{ or } 7p = 1 \text{ or } p = 1/7$$

Hence $P(A) = 1/7, P(B) = 2/7$ and $P(C) = 4/7$

## 9.18. ADDITION LAW FOR NOT MUTUALLY EXCLUSIVE EVENTS

**Theorem:**

If A and B are not mutually exclusive events then the probability that A or B or both occur is given by $P(\text{A or B or both}) = P(A \cup B) = P(A) + P(B) - P(A \cap B)$

**Proof:**

Suppose there is a sample space S containing N points which are equally likely. The two events A and B belong to S and contain $n_1$ and $n_2$ points respectively. The events A and B overlap each other with the result that $A \cap B$ has m points. Thus m points are common to A and B. $A \cup B$ can be written as union of two disjoint events which are

(i) A $\quad\quad\quad\quad$ (ii) $(B - A \cap B)$

Thus we can write $A \cup B = A \cup (B - A \cap B)$

A contains $n_1$ points and $(B - A \cap B)$ contains $(n_2 - m)$ points

[Figure F1]

Thus $A \cap B$ has $n_1 + (n_2 - m)$ points

Using classical definition of probability, we have

$$P(A \cup B) = \frac{\text{Number of points in } A \cup B}{\text{Number of points in S}} = \frac{n_1 + n_2 - m}{N} = \frac{n_1}{N} + \frac{n_2}{N} - \frac{m}{N}$$

$$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$

Which is called the general law of addition of probabilities.

When A and B are mutually exclusive, then $A \cap B = \phi$ and $P(A \cap B) = 0$, we get $P(A \cup B) = P(A) + P(B)$ which is the addition law for mutually exclusive events.

For three not mutually exclusive events,

$$
\begin{aligned}
P(A \cup B \cup C) &= P(A) + P(B) + P(C) - P(A \cap B) \\
&\quad - P(A \cap C) - P(B \cap C) + P(A \cap B \cap C)
\end{aligned}
$$

When A, B and C are mutually exclusive, then

$P(A \cap B) = P(A \cap C) = P(B \cap C) = P(A \cap B \cap C) = 0$

Therefore, $P(A \cup B \cup C) = P(A) + P(B) + P(C)$

This is called addition law of probability for mutually exclusive events.

[Figure F2]

## Figures on this page

### Figure F1 — Venn diagram for non-mutually exclusive events (middle right)
- **Type:** venn-diagram
- **Caption/Number:** Figure-10.
- **Description:** A rectangular box represents sample space S with N points. Inside are two overlapping circles labeled "A ($n_1$ points)" on the left and "B ($n_2$ points)" on the right. The overlapping region is labeled "$B - A \cap B$" inside the right circle's non-overlapping part. An arrow points from the overlapping region down to text stating "$A \cap B$ has m points" and "$A \cup B$ is shaded". The entire area covered by the two circles (the union) appears shaded.
- **Mathematical meaning:** Illustrates the general addition rule for probability where the intersection $A \cap B$ must be subtracted once to avoid double-counting when calculating $P(A \cup B)$.

### Figure F2 — Venn diagram for three mutually exclusive events (bottom right)
- **Type:** venn-diagram
- **Caption/Number:** Figure-11.
- **Description:** A rectangular box represents sample space S. Inside are three separate, non-overlapping circles arranged in a triangle formation, labeled "A" (top left), "B" (top right), and "C" (bottom center). Below the diagram, text states "$A \cap B \cap C = \phi$" and "A, B, C are mutually exclusive".
- **Mathematical meaning:** Demonstrates the concept of mutually exclusive events where intersections are empty sets, simplifying the addition law to $P(A \cup B \cup C) = P(A) + P(B) + P(C)$.
