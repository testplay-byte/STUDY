---
subject: statistics
book_title: "Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot"
batch: S-2
chapter_folder: chapter-09-probability
chapter_number: 9
chapter_title: "Probability"
page_image: 27
page_printed: 37
section: "9.20 INDEPENDENCE OF EVENTS; 9.21 MULTIPLICATION LAW FOR INDEPENDENT EVENTS"
exercise: null
content_type: theory
has_figures: false
figures_count: 0
source_image: ../raw/S-2/0027.jpg
converted_at: "2026-09-02"
converted_by: "agent-3c (glm-vision)"
notes: "Running header misprints '[Chapter 7] Probability' — book misprint; chapter is 9. Page begins with parts (iii)-(iv) of Example 9.35 (continued from printed p.36), then §9.20 and §9.21 (with Theorem + Proof). Book quirks preserved verbatim: 'Therefore' without comma in (iii) but 'Therefore,' with comma in (iv); 'n(A ∩ B) = 1. P(A ∩ B)' with period in (iv); proof uses S₁/S₂, m/n and M/N as printed. No figures."
---

# Page 27 — Probability (Chapter 9)

> 📄 Original scan: [0027.jpg](../raw/S-2/0027.jpg) · printed page 37

(iii) Let A denote the event "2 girls" and B denote the event "middle baby is a male", then

$$A = \{bgg, gbg, ggb\}, n(A) = 3, P(A) = \frac{n(A)}{n(S)} = \frac{3}{8}$$

$$B = \{bbb, bbg, gbb, gbg\}, n(B) = 4, P(B) = \frac{n(B)}{n(S)} = \frac{4}{8}$$

$$A \cap B = \{gbg\}, n(A \cap B) = 1, P(A \cap B) = \frac{n(A \cap B)}{n(S)} = \frac{1}{8}$$

$$\text{Therefore } \quad P(A/B) = \frac{P(A \cap B)}{P(B)} = \frac{1/8}{4/8} = \frac{1}{4} = 0.25$$

(iv) Let A denote the event "2 male babies" and B denote the event "first and last babies have the same gender", then

$$A = \{bbg, bgb, gbb\}, n(A) = 3, P(A) = \frac{n(A)}{n(S)} = \frac{3}{8}$$

$$B = \{bbb, bgb, gbg, ggg\}, n(B) = 4, P(B) = \frac{n(B)}{n(S)} = \frac{4}{8}$$

$$A \cap B = \{bgb\}, n(A \cap B) = 1. P(A \cap B) = \frac{n(A \cap B)}{n(S)} = \frac{1}{8}$$

$$\text{Therefore, } \quad P(A/B) = \frac{P(A \cap B)}{P(B)} = \frac{1/8}{4/8} = \frac{1}{4} = 0.25$$

## 9.20. INDEPENDENCE OF EVENTS

The two events A and B are called statistically independent if and only if

$$P(A \cap B) = P(A)P(B) \text{ when } P(A) \neq 0 \text{ and } P(B) \neq 0.$$

A and B are also independent if

$$P(A/B) = P(A) \text{ when } P(B) \neq 0 \text{ and } P(B/A) = P(B) \text{ when } P(A) \neq 0.$$

In daily life the two events A and B are called independent if they have "nothing to do with each other" or they have no concern with each other. For example one fan is selected from factory A and another fan is taken from factory B. We are interested to find the probability that both are good. To find this probability we use the approach "nothing to do with each other". But this is not the statistical definition of independence. A and B are independent events if and only if $P(A \cap B) = P(A)P(B)$.

## 9.21. MULTIPLICATION LAW FOR INDEPENDENT EVENTS

**Theorem:**

If A and B are independent events having non-zero probabilities, then

$$P(A \cap B) = P(A)P(B)$$

The probability $P(A \cap B)$ is called joint probability of A and B, $P(A)$ and $P(B)$ are called the marginal probabilities of A and B respectively.

**Proof:**

Suppose a sample space $S_1$ has $n$ total points. The event A belongs to $S_1$ and has $m$ favourable points. Similarly the sample space $S_2$ has $N$ total points. The event B belongs to $S_2$ and has $M$ favourable points.

$$Therefore, \quad P(A) = \frac{m}{n} \quad \text{and} \quad P(B) = \frac{M}{N}$$

Since A and B are independent events, the total points for the combined event A and B will be $nN$ and total favourable points for joint event $A \cap B$ will be $mM$. Hence

$$P(A \cap B) = \frac{mM}{nN} = \frac{m}{n} \times \frac{M}{N} = P(A)P(B)$$

This is called multiplication theorem of probability for independent events. It can be generalized for more than two independent events. For k independent events,

$$P(A_1 \cap A_2 \cap A_3 \cap ... \cap A_k) = P(A_1)P(A_2)P(A_3)...P(A_k)$$
