---
subject: statistics
book_title: "Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot"
batch: S-2
chapter_folder: chapter-09-probability
chapter_number: 9
chapter_title: "Probability"
page_image: 31
page_printed: 41
section: null
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../raw/S-2/0031.jpg
converted_at: "2026-09-02"
converted_by: "agent-3d (glm-vision)"
notes: "Running header misprints '[Chapter 7] Probability' — book misprint, chapter is 9. Page has no numbered section headings (only bold 'Corollary:' and 'Example 9.41.'). Page ends mid-solution of Example 9.41 ('Since C and D are dependent events, therefore') — solution continues on printed p.42/image 32."
---

# Page 31 — Probability (Chapter 9)

> 📄 Original scan: [0031.jpg](../raw/S-2/0031.jpg) · printed page 41

Thus, $\text{P(A)} = \frac{\text{m}_1}{\text{n}}, \text{m}_1 > 0$ $\quad \text{P(B)} = \frac{\text{m}_2}{\text{n}}, \text{m}_2 > 0$ $\quad \text{P(A} \cap \text{B}) = \frac{\text{m}_3}{\text{n}}$

$$
\begin{aligned}
\text{P(A} \cap \text{B}) &= \frac{\text{m}_3}{\text{n}} = \frac{\text{m}_3}{\text{n}} \times \frac{\text{m}_1}{\text{m}_1} = \frac{\text{m}_1}{\text{n}} \times \frac{\text{m}_3}{\text{m}_1} = \frac{\text{m}_1}{\text{n}} \times \frac{\text{m}_3 / \text{n}}{\text{m}_1 / \text{n}} = \text{P(A)} \frac{\text{P(A} \cap \text{B})}{\text{P(A)}} \\
&= \text{ P(A) P(B/A), Since } \text{P(B/A)} = \frac{\text{P(A} \cap \text{B})}{\text{P(A)}}
\end{aligned}
$$

Similarly,

$$
\begin{aligned}
\text{P(A} \cap \text{B}) &= \frac{\text{m}_3}{\text{n}} = \frac{\text{m}_3}{\text{n}} \times \frac{\text{m}_2}{\text{m}_2} = \frac{\text{m}_2}{\text{n}} \times \frac{\text{m}_3}{\text{m}_2} = \frac{\text{m}_2}{\text{n}} \times \frac{\text{m}_3 / \text{n}}{\text{m}_2 / \text{n}} = \text{P(B)} \frac{\text{P(A} \cap \text{B})}{\text{P(B)}} \\
&= \text{ P(B) P(A/B). Since } \text{P(A/B)} = \frac{\text{P(A} \cap \text{B})}{\text{P(B)}}
\end{aligned}
$$

Hence, $\text{P(A} \cap \text{B}) = \text{P(A) P(B/A) = P(B) P(A/B)}$

This is called the general rule of multiplication for probabilities.

**Corollary:** This rule can be extended to more than two events. For three events named A, B and C, we have $\text{P(A} \cap \text{B} \cap \text{C) = P(A) P(B/A) P(C/A} \cap \text{B)}$

If A, B and C are independent, then $\text{P(A} \cap \text{B} \cap \text{C) = P(A) P(B) P(C)}$

### Example 9.41.

A bag contains two defective and three good bulbs. Two bulbs are taken. Find the following probabilities.

(i) First bulb is defective and second is good &nbsp;&nbsp;&nbsp; (ii) One is defective and one is good.

(iii) Both are defective or both are good.

**Solution:**

| | Defective bulbs | Good bulbs | Total bulbs |
| :--- | :--- | :--- | :--- |
| **Bag:** | 2 | 3 | 5 |

(i) Let A represent the event "first bulb is defective" and B represent the event "second bulb is good", then

$\text{P(first bulb is defective) = P(A) } = \frac{2}{5}$

$\text{P(second bulb is good / first bulb was defective) = P(B/A) } = \frac{3}{4}$

Since A and B are dependent events, therefore

$$
\text{P(A} \cap \text{B) = P(A) P(B/A) = } \left( \frac{2}{5} \right) \left( \frac{3}{4} \right) = \frac{3}{10} = 0.3
$$

(ii) $\text{P(first bulb is defective) = P(A) } = \frac{2}{5}$

$\text{P(second bulb is good / first bulb was defective) = P(B/A) } = \frac{3}{4}$

Since A and B are dependent events, therefore

$$
\text{P(A} \cap \text{B) = P(A) P(B/A) = } \left( \frac{2}{5} \right) \left( \frac{3}{4} \right) = \frac{3}{10}
$$

Similarly

$\text{P(first bulb is good) = P(C) } = \frac{3}{5}$

$\text{P(second bulb is defective / first bulb was good ) = P(D / C) } = \frac{2}{4}$

Since C and D are dependent events, therefore
