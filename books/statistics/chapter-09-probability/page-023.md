---
subject: statistics
book_title: "Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot"
batch: S-2
chapter_folder: chapter-09-probability
chapter_number: 9
chapter_title: "Probability"
page_image: 23
page_printed: 33
section: "Explanation"
exercise: null
content_type: mixed
has_figures: true
figures_count: 1
source_image: ../raw/S-2/0023.jpg
converted_at: "2026-09-02"
converted_by: "agent-3c (glm-vision)"
notes: "Running header misprints '[Chapter 7] Probability' — book misprint; chapter is 9. Page opens with unnumbered heading 'Explanation' — a continuation of §9.19 Conditional Probability (started printed p.32); explanation + derivation of P(A/B) = P(A∩B)/P(B), then Example 9.30 part (i). Book typos preserved verbatim: figure caption printed 'Figue-13' (not Figure-13), Solution line printed 'We a die is rolled' (not 'When'), opening sentence 'The event B has already occurred is called...' as printed. Part (ii) of Example 9.30 continues on printed p.34."
---

# Page 23 — Probability (Chapter 9)

> 📄 Original scan: [0023.jpg](../raw/S-2/0023.jpg) · printed page 33

## Explanation

The event B has already occurred is called "the additional information" about the sample space S. The additional information reduces the size of the sample space S and the remaining part of S is called the reduced sample space which may be denoted by $S_r$. Any probability calculated from the reduced sample space is called conditional probability. When the event B has occurred, then the reduced sample space consists of B. Thus $S_r = \text{B}$. When it is known that B has occurred, then we are concerned with reduced sample space and not with the original sample space. Suppose a die is rolled and the additional information is that the face is even. Now we are interested to find the probability that the face is a complete square. When it is known that the face is even then the sample space $\text{S} = \{1, 2, 3, 4, 5, 6\}$ is reduced to $\{2, 4, 6\}$. Now we are concerned with this reduced sample space. In the original sample space each face has probability of 1/6. Thus in the reduced sample space each face has probability of 1/3. Face 4 is a complete square in the reduced sample space. Thus probability of a complete square when it is known that face is even is 1/3. It is called conditional probability of a complete square when the face is even. If B denotes the even face and A denotes the "complete square" then P(A/B) = 1/3.

[Figure F1]

We can show that the conditional probability

$$P(\text{A/B}) = \frac{P(A \cap B)}{P(B)} \quad \text{when } P(B) \neq 0$$

Suppose there is a sample space S which contains N outcomes which are equally likely. The event B has n points and there are m points which are common to the event A and B. Thus A ∩ B contains m points. When it is known that B has occurred, then occurrence of A is possible only when any point out of m points occurs. By using classical definition of probability, we have

$$P(\text{A/B}) = \frac{m}{n} \quad (\text{As B has occurred, therefore B becomes sample space for A})$$

When both numerator and denominator are divided by N, we get

$$P(\text{A/B}) = \frac{m}{n} = \frac{m/N}{n/N} = \frac{P(A \cap B)}{P(B)} \quad \text{if } P(B) \neq 0$$

If $P(B)=0$, then P(A/B) does not exist. If $A \cap B = \phi$ then $P(A \cap B) = 0$, therefore $P(A/B) = 0$

Similarly, $P(B/A) = \frac{P(A \cap B)}{P(A)}$ if $P(A) \neq 0$

If $A \cap B = \phi$ then $P(A \cap B) = 0$ and $P(B/A) = 0$

Thus any conditional probability will be greater than zero only when $A \cap B \neq \phi$, which means that A and B are not mutually exclusive events.

**Example 9.30.**
A fair die is rolled. Find the probability that
(i) the face is even given that the face is less than 4.
(ii) the face is less than 4 given that the face is prime.

**Solution:** We a die is rolled, then the sample space is $\text{S} = \{1, 2, 3, 4, 5, 6\}$, n(S) = 6

(i) Let A be the event that the face is even, then

$$A = \{2, 4, 6\}, n(A) = 3, P(A) = \frac{n(A)}{n(S)} = \frac{3}{6}$$

Let B be the event that the face is less than 4, then

$$B = \{1, 2, 3\}, n(B) = 3, P(B) = \frac{n(B)}{n(S)} = \frac{3}{6}$$

$$A \cap B = \{2\}, n(A \cap B) = 1, P(A \cap B) = \frac{n(A \cap B)}{n(S)} = \frac{1}{6}$$

$$P(A/B) = \frac{P(A \cap B)}{P(B)} = \frac{1/6}{3/6} = \frac{1}{3}$$

## Figures on this page

### Figure F1 — Venn diagram (right side)
- **Type:** venn-diagram
- **Caption/Number:** Figue-13 (printed exactly so — book typo for "Figure-13")
- **Description:** A rectangular box representing the universal set S (labeled S on the right with "N points"). Inside are two overlapping circles labeled A (left) and B (right). The intersection region ($A \cap B$) is shaded black. An arrow points from the shaded region down to text reading "$A \cap B$ has m points". Circle B contains the label "n points".
- **Mathematical meaning:** Illustrates the concept of conditional probability by showing event B as the reduced sample space containing n points, with the intersection $A \cap B$ containing m points where both events occur.
