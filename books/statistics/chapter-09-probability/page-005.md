---
subject: statistics
book_title: "Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot"
batch: S-2
chapter_folder: chapter-09-probability
chapter_number: 9
chapter_title: "Probability"
page_image: 5
page_printed: 15
section: 9.9 NOT MUTUALLY EXCLUSIVE EVENTS; 9.10 EXHAUSTIVE EVENTS; 9.11 A or B; 9.12 A and B
exercise: null
content_type: theory
has_figures: true
figures_count: 3
source_image: ../raw/S-2/0005.jpg
converted_at: "2026-09-02"
converted_by: "coordinator-test (glm-vision)"
notes: "Running header on this page prints '[Chapter 7] Probability' — a book misprint; the chapter is 9 (§9.x numbering + opener image 0001 shows 'Chapter 9'). Offset check: printed p.15 = image 5 + 10. Figure-4 caption printed under a rectangular sample-space box."
---

# Page 5 — Probability (Chapter 9)

> 📄 Original scan: [0005.jpg](../raw/S-2/0005.jpg) · printed page 15

## 9.9. NOT MUTUALLY EXCLUSIVE EVENTS

The events are called not mutually exclusive if they have at least one outcome common between them. If A and B are not mutually exclusive events, then $A \cap B \neq \phi$. Similarly A, B and C are not mutually exclusive events if $A \cap B \cap C \neq \phi$. Thus they must have at least one common point between them. Consider a sample space :

$$S = \{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11\}$$

Let the event $A = \{\text{prime numbers}\} = \{2, 3, 5, 7, 11\}$

and $B = \{\text{odd faces}\} = \{1, 3, 5, 7, 9, 11\}$.

Here $A \cap B = \{3, 5, 7, 11\}$

Thus $A \cap B \neq \phi$ i.e, $A \cap B$ exists. Here, A and B are not mutually exclusive events. $A \cap B$ consists of outcomes which are common to both A and B. Figure-2 shows a venn diagram in which A and B are not mutually exclusive events. Some area under A is common with B. If the event A is a part of the event B, then $A \cap B = A$. This is shown in Figure-3.

[Figure F1] [Figure F2]

## 9.10. EXHAUSTIVE EVENTS

When a sample space S is partitioned into some mutually exclusive events such that their union is the sample space itself then the events are called *exhaustive events* or *collectively exhaustive events*. Suppose a die is rolled and the sample space is

$S = \{1, 2, 3, 4, 5, 6\}$.

Let $A = \{1, 2\}$

$B = \{3, 4, 5\}$

$C = \{6\}$

Here the events A, B and C are mutually exclusive because $A \cap B \cap C = \phi$ and $A \cup B \cup C = S$. Figure-4 shows three events A, B and C which are exhaustive.

[Figure F3]

## 9.11. A or B

The term A or B is very important in probability theory. The term 'A or B' is used for two events A and B when they are mutually exclusive and we are interested to know the probability of the event "A or B". For this purpose the symbol $A \cup B$ is used. It must be remembered that the symbol $A \cup B$ is also used for the event "A or B or both", when A and B are not mutually exclusive.

## 9.12. A and B

The term 'A and B' is used for the event which consists of the points which are common to both A and B. In set theory language, the symbol $A \cap B$ is used for A and B. The symbol $A \cap B$ means intersection of A and B.

## Figures on this page

### Figure F1 — Venn diagram of non-mutually exclusive events (middle left)
- **Type:** venn-diagram
- **Caption/Number:** Figure-2. A and B are Not Mutually Exclusive Events
- **Description:** A rectangular box labeled 'S' contains two overlapping circles labeled 'A' (left) and 'B' (right). The overlapping region (intersection) is shaded with diagonal lines. An arrow points down from the shaded intersection to the label '$A \cap B$'.
- **Mathematical meaning:** Illustrates that two events A and B are not mutually exclusive because their intersection $A \cap B$ is non-empty ($A \cap B \neq \phi$).

### Figure F2 — Venn diagram showing event A as part of event B (middle right)
- **Type:** venn-diagram
- **Caption/Number:** Figure-3 A and B are Not Mutually Exclusive Events
- **Description:** A rectangular box labeled 'S' contains two concentric circles. The inner circle is labeled 'A', and the annular region between the inner and outer circles is labeled 'B'. Below the diagram is the label '$A \cap B = A$'.
- **Mathematical meaning:** Demonstrates that if event A is entirely contained within event B, then the intersection of A and B is simply A ($A \cap B = A$), confirming they are not mutually exclusive.

### Figure F3 — Partition of sample space into exhaustive events (bottom right)
- **Type:** venn-diagram
- **Caption/Number:** Figure-4
- **Description:** A rectangular box representing sample space 'S' (letter S at the right edge, outside the partition lines). Inside the box, straight lines radiating from a vertex at the top edge partition the rectangle into three regions: the left region is labeled 'A' and contains the points 1, 2; the large middle region is labeled 'B' and contains the points 3, 4, 5; the right region is labeled 'C' (letter C at the top-right corner) and contains the point 6; the letter B also appears at the bottom-right corner of the middle region. Below the box is the printed text "$A \cap B \cap C = \phi$ and $A \cup B \cup C = S$".
- **Mathematical meaning:** Shows three mutually exclusive events A, B, and C whose union covers the entire sample space S, defining them as exhaustive events.
