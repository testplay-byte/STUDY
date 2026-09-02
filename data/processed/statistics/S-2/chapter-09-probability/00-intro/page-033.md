---
book: S-2
book_title: "Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot"
page_image: 33
page_printed: 43
chapter: 9
chapter_title: "Probability"
section: "9.23 Selections Without and With Replacement"
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../../../../data/raw/statistics/S-2/0033.jpg
converted_at: "2026-09-02"
converted_by: "agent-3d (glm-vision)"
notes: "Running header misprints '[Chapter 7] Probability' — book misprint, chapter is 9. Top of page completes Example 9.43 carried over from printed p.42. Example 9.44 solution ends after part (ii) and continues on printed p.44/image 34. Small printed table after 'Solution:' (Good/Defective/Total items) transcribed as GFM table."
---

# Page 33 — Probability (Chapter 9)

> 📄 Original scan: [0033.jpg](../../../../../../data/raw/statistics/S-2/0033.jpg) · printed page 43

$$\begin{aligned} \text{n(B)} &= {^4\text{C}_1} = 4 \text{ and } \text{P(B)} = \frac{\text{n(B)}}{\text{n(S)}} = \frac{4}{52} = \frac{1}{13} \\[10pt] &\text{Since A and B are independent events, therefore} \\[5pt] \text{P(A} \cap \text{B)} &= \text{P(A) P(B)} = \left(\frac{1}{13}\right)\left(\frac{1}{13}\right)= \frac{1}{169} \end{aligned}$$

(ii) $\text{n(S)} = {^{52}\text{C}_1} = 52$

Let C be the event that first card drawn is an ace, then

$$\text{n(C)} = {^4\text{C}_1} = 4 \text{ and } \text{P(C)} = \frac{\text{n(C)}}{\text{n(S)}} = \frac{4}{52} = \frac{1}{13}$$

Because the first card drawn is not replaced, therefore

$\text{n(S)} = {^{51}\text{C}_1} = 51$

Let D be the event that second card drawn is also an ace given that first card was an ace, then

$$\text{n(D/C)} = {^3\text{C}_1} = 3 \text{ and } \text{P(D/C)} = \frac{\text{n(D/C)}}{\text{n(S)}} = \frac{3}{51} = \frac{1}{17}$$

Since C and D are dependent events, therefore

$$\text{P(C} \cap \text{D)} = \text{P(C) P(D/C)} = \left(\frac{1}{13}\right)\left(\frac{1}{17}\right)= \frac{1}{221}$$

## 9.23. SELECTIONS WITHOUT AND WITH REPLACEMENT

The students are advised to clearly understand the difference between two types of selections of some elements from a certain lot. The lot may contain any material like bulbs, students, balls, cards etc. There are two methods of selecting a sample from a certain lot. One is called without replacement and the other is called with replacement. When only one element is to be selected from the lot, there is no difference in these two terms. When the second element is selected, the question is whether the first element has been returned to the main lot or not. If the first element is not returned to the main lot before selecting the second element, then the selection is called without replacement. Similarly the second element is not returned before taking the third element and so on. There is another special case in which the first element is returned to the main lot before selecting the next individual. This is called selection with replacement.

**Example 9.44.**

A container has 3 good and 2 defective items. Two items are selected at random and without replacement. Find the following probabilities.

(i) both are good, (ii) one is good and one is defective (iii) both are defective (iv) at least one is defective (v) at most one is defective (vi) at most two are good

**Solution:**

| | Good items | Defective items | Total items |
| :--- | :--- | :--- | :--- |
| **Container:** | 3 | 2 | 5 |

S contains $\binom{5}{2}= 10$ sample points

(i) P( both are good ) $= \dfrac{\dbinom{3}{2}\dbinom{2}{0}}{\dbinom{5}{2}}=\dfrac{3}{10}=0.3$

(ii) P( one is good and one is defective ) $= \dfrac{\dbinom{3}{1}\dbinom{2}{1}}{\dbinom{5}{2}}=\dfrac{6}{10}=0.6$
