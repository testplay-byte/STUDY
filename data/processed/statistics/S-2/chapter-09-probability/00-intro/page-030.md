---
book: S-2
book_title: "Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot"
page_image: 30
page_printed: 40
chapter: 9
chapter_title: "Probability"
section: "Examples 9.39 (iv)-(v) tail – 9.40; 9.22 MULTIPLICATION LAW FOR DEPENDENT EVENTS"
exercise: null
content_type: mixed
has_figures: false
figures_count: 0
source_image: ../../../../../../data/raw/statistics/S-2/0030.jpg
converted_at: "2026-09-02"
converted_by: "coordinator (glm direct transcription; VLM API quota exhausted)"
notes: "Even-page header = furniture. Printed 40 top left (30 + 10 ✓). Top = tail of Example 9.39 parts (iv)-(v) (started printed p.39), then Example 9.40 with a data table, then §9.22 theorem + proof start (continues p.41). Transcribed directly by coordinator (VLM API 429s)."
---

# Page 30 — Probability (Chapter 9)

> 📄 Original scan: [0030.jpg](../../../../../../data/raw/statistics/S-2/0030.jpg) · printed page 40

Similarly

$$P(\text{ first is queen }) = P(Q_1) = \frac{4}{52} \text{ and } P(\text{ second is king }) = P(K_2) = \frac{4}{52}$$

Since $Q_1$ and $K_2$ are independent, therefore

$$P(Q_1 \cap K_2) = P(Q_1)P(K_2) = \left(\frac{4}{52}\right)\left(\frac{4}{52}\right) = \frac{1}{169}$$

$$\text{Thus P( one king and one queen )} = P(K_1 \cap Q_2) + P(Q_1 \cap K_2) = \frac{1}{169} + \frac{1}{169} = \frac{2}{169}$$

(iv) Both are faced cards ( There are 12 faced cards or picture cards)

$$P(\text{ first card is faced }) = P(F_1) = \frac{12}{52} \text{ and } P(\text{ second card is faced }) = P(F_2) = \frac{12}{52}$$

Since $F_1$ and $F_2$ are independent, therefore

$$P(F_1 \cap F_2) = P(F_1)P(F_2) = \left(\frac{12}{52}\right)\left(\frac{12}{52}\right) = \frac{9}{169}$$

(v) First is card of diamonds and the second is an ace ( There are 13 diamonds cards and 4 are aces )

$$P(\text{ first card is diamonds }) = P(D_1) = \frac{13}{52} \text{ and } P(\text{ second card is an ace }) = P(A_2) = \frac{4}{52}$$

Since $D_1$ and $A_2$ are independent, therefore

$$P(D_1 \cap A_2) = P(D_1)P(A_2) = \left(\frac{13}{52}\right)\left(\frac{4}{52}\right) = \frac{1}{52}$$

**Example 9.40.**

Three groups of children contain respectively 3 girls and 1 boy; 2 girls and 2 boys; 1 girl and 3 boys. One child is selected at random from each group. Find the chance that the three selected consist of 1 girl and 2 boys.

**Solution:**

|         | Girls | Boys | Total |
|---------|-------|------|-------|
| Group 1 | 3     | 1    | 4     |
| Group 2 | 2     | 2    | 4     |
| Group 3 | 1     | 3    | 4     |

Let $G_1$ = a girl is selected from group 1 , $P(G_1)$ = 3/4
　　 $G_2$ = a girl is selected from group 2 , $P(G_2)$ = 2/4
　　 $G_3$ = a girl is selected from group 3 , $P(G_3)$ = 1/4
　　 $B_1$ = a boy is selected from group 1 , $P(B_1)$ = 1/4
　　 $B_2$ = a boy is selected from group 2 , $P(B_2)$ = 2/4
　　 $B_3$ = a boy is selected from group 3 , $P(B_3)$ = 3/4

$$P(\text{ 1 girl and 2 boys }) = P(G_1 \cap B_2 \cap B_3) + P(B_1 \cap G_2 \cap B_3) + P(B_1 \cap B_2 \cap G_3)$$

$$= P(G_1)P(B_2)P(B_3) + P(B_1)P(G_2)P(B_3) + P(B_1)P(B_2)P(G_3)$$

$$= \left(\frac{3}{4}\right)\left(\frac{2}{4}\right)\left(\frac{3}{4}\right) + \left(\frac{1}{4}\right)\left(\frac{2}{4}\right)\left(\frac{3}{4}\right) + \left(\frac{1}{4}\right)\left(\frac{2}{4}\right)\left(\frac{1}{4}\right) = \frac{18}{64} + \frac{6}{64} + \frac{2}{64} = \frac{26}{64} = \frac{13}{32}$$

## 9.22. MULTIPLICATION LAW FOR DEPENDENT EVENTS

**Theorem:**

If A and B are two dependent events, then

$$P(A \cap B) = P(A)P(B/A) = P(B)P(A/B)$$

**Proof:**

Suppose there is a sample space S containing n points (outcomes) which are equally likely. Let event A has $m_1$ favourable points, event B has $m_2$ favourable points and $A \cap B$ has $m_3$ favourable points.
