---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board)
batch: S-1
chapter_folder: chapter-08-set-theory
chapter_number: 8
chapter_title: Set Theory
page_image: 8
page_printed: 8
section: "8.23 PERMUTATIONS; 8.24 COMBINATIONS"
exercise: null
content_type: theory
has_figures: false
figures_count: 0
source_image: ../raw/S-1/0008.jpg
converted_at: "2026-09-02"
converted_by: "agent-2e (glm-vision)"
notes: "Single worked example (Example 8.8) at bottom; majority of page is theory → 00-intro."
---

# Page 8 — Chapter 8: Set Theory

> 📄 Original scan: [0008.jpg](../raw/S-1/0008.jpg) · printed page 8

## 8.23. PERMUTATIONS

A permutation of a number of objects is an arrangement of these objects in a definite order. The number of permutations of a set of n things, taken r at a time is represented by $^nP_r$ and is given by

$$^nP_r = \frac{n!}{(n-r)!} = n(n-1)(n-2)\ldots(n-r+1) \text{ ways}$$

For example, in how many different ways can the three letters a, b and c be arranged by taking two at a time? The answer is

$$^3P_2 = \frac{3!}{(3-2)!} = 6 \text{ ways. These permutations are ab, ba, ac, ca, bc, cb.}$$

The number of permutations of a set of n things, taken all at the same time, is n!. Denoting this number by $^nP_n$, we have

$$^nP_n = \frac{n!}{(n-n)!} = \frac{n!}{0!} = n!$$

For example, in how many different ways can the 10 digits 0 to 9 be arranged by taking all of them at a time? The answer is $^{10}P_{10} = 10! = 10 \times 9 \times 8 \times 7 \times 6 \times 5 \times 4 \times 3 \times 2 \times 1 = 3628800$

The number of permutations of n things consisting of groups among which $n_1$ are of one kind, $n_2$ of a second kind, $n_3$ of a third kind and so on, $n_k$ of a kth kind is

$$\frac{n!}{n_1!\,n_2!\,n_3!\,\ldots\,n_k!} \text{ where } n_1 + n_2 + n_3 + \ldots + n_k = n$$

For example, in how many ways can the letters of the word "Samasatta" be arranged. Here, total number of letters is 9, 's' occurs 2 times, 'a' occurs 4 times, 't' occurs 2 times 'm' occurs 1 time. So the number of permutations is $\frac{9!}{2!\,4!\,2!\,1!} = \frac{9.8.7.6.5.4!}{2.1.4!\,2.1.1} = 3780$ ways

## 8.24. COMBINATIONS

A combination is a selection of objects considered without regard to their order. The total number of combinations of a set of n things taken r at a time, with $n \geq r$, usually denoted by $^nC_r$ or by $\binom{n}{r}$, is

$$^nC_r = \binom{n}{r} = \frac{n!}{r!(n-r)!} = \frac{n(n-1)(n-2)\ldots(n-r+1)}{r!}$$

The number of combinations of the letters a, b and c taken two at a time is $\binom{3}{2} = 3$.

These combinations are ab, ac, bc. Here, ab is the same combination as ba.

A basket ball squad has 10 players. The coach must select a starting team. How many different teams of five players can be selected for this purpose? Here, we have

$$^{10}C_5 = \binom{10}{5} = \frac{10!}{5!(10-5)!} = \frac{10 \times 9 \times 8 \times 7 \times 6 \times 5!}{5! \times 5 \times 4 \times 3 \times 2 \times 1} = 252 \text{ combinations}$$

The students are advised to remember the following relations

$$^nC_1 = \binom{n}{1} = \frac{n!}{1!(n-1)!} = n \quad\quad\quad ^nC_n = \binom{n}{n} = \frac{n!}{n!(n-n)!} = \frac{n!}{n!\,0!} = 1$$

$$^nC_{n-r} = \binom{n}{n-r} = \frac{n!}{r!(n-r)!} = \binom{n}{r} \quad\quad\quad 0! = 1$$

**Example 8.8.**

Given the letters A, B, C and D, list the permutations and combinations for selecting two letters.

*Solution:* Here, $n = 4$, $r = 2$ and total number of permutations = $^nP_r = {}^4P_2 = 12$. Therefore elements of the permutations are: AB, BA, AC, CA, AD, DA, BC, CB, BD, DB, CD, DC.

Here, $n = 4$, $r = 2$ and total number of combinations = $^nC_r = {}^4C_2 = 6$. Therefore elements of the combinations are: AB, AC, AD, BC, BD, CD.
