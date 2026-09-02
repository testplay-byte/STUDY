---
book: S-1
book_title: null
page_image: 3
page_printed: 3
chapter: 8
chapter_title: Set Theory
section: "8.13 Difference of Two Sets; 8.14 Complement Set; 8.15 Disjoint or Mutually Exclusive Sets; 8.16 Class of Sets; 8.17 Power Set"
exercise: null
content_type: theory
has_figures: true
figures_count: 4
source_image: ../../../../../../data/raw/statistics/S-1/0003.jpg
converted_at: "2026-09-01"
converted_by: "coordinator (glm-vision)"
notes: ""
---

# Page 3 — [Chapter 8] Set Theory

> 📄 Original scan: [0003.jpg](../../../../../../data/raw/statistics/S-1/0003.jpg) · printed page 3

$$A \cap B = \{x / x \in A \text{ and } x \in B\}$$

Let $A = \{1, 3, 4, 5\}$ and  
$B = \{2, 3, 4, 6\}$,  
then the intersection of A and B is  
$A \cap B = \{3, 4\}$

[Figure F1]

## 8.13. DIFFERENCE OF TWO SETS

If A and B are two sets, then A – B is a set which contains those elements of A which are not in B that is $A - B = \{x / x \in A \text{ and } x \notin B\}$

Let $A = \{1, 2, 3, 4\}$ and $B = \{3, 4, 5, 6\}$, then $A - B = \{1, 2\}$

[Figure F2]

## 8.14. COMPLEMENT SET

If A is a set and S is a universal set, then $\bar{A}$ is a set which contains those elements of S which are not in A that is

$$\bar{A} = \{x / x \in S \text{ and } x \notin A\}$$

Let $S = \{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\}$ and  
$A = \{1, 2, 3\}$, then  
$\bar{A} = \{4, 5, 6, 7, 8, 9, 10\}$

[Figure F3]

## 8.15. DISJOINT OR MUTUALLY EXCLUSIVE SETS

Two sets A and B are said to be disjoint or mutually exclusive if they have no elements in common, that is $A \cap B = \phi$.

Let $A = \{1, 2, 3, 4\}$ and  
$B = \{7, 8, 9, 10\}$,  
then $A \cap B = \phi$.

[Figure F4]

## 8.16. CLASS OF SETS

If the elements of a set E are also sets, then the set E is called a class of sets or a set of sets is called a class of sets.

Let $A = \{1, 2\}, B = \{2, 3, 4, 5\}, C = \{1, 9\}$ and $D = \{6, 7, 8, 10\}$  
and $E = \{A, B, C, D\}$, then E is called class of sets.

## 8.17. POWER SET

The set of all possible subsets of a set 'A' is called power set of A and is denoted by P(A).

Let $A = \{1, 2, 3\}$

There are $2^3 = 8$ subsets from a set of 3 elements, that is

$A_1 = \{1\}, A_2 = \{2\}, A_3 = \{3\}, A_4 = \{1, 2\}, A_5 = \{1, 3\}, A_6 = \{2, 3\}, A_7 = \{1, 2, 3\}, A_8 = \{\}$

Then $P(A) = \{A_1, A_2, A_3, A_4, A_5, A_6, A_7, A_8\}$

## Figures on this page

### Figure F1 — Venn diagram for intersection (top right)
- **Type:** venn-diagram
- **Caption/Number:** Figure-3
- **Description:** A rectangular box labeled S (universal set) contains two overlapping circles labeled A and B. The overlapping region (intersection) is shaded in solid black.
- **Mathematical meaning:** Illustrates the intersection of two sets, $A \cap B$, containing elements common to both A and B.

### Figure F2 — Venn diagram for difference (middle right)
- **Type:** venn-diagram
- **Caption/Number:** Figure-4
- **Description:** A rectangular box labeled S contains two overlapping circles labeled A and B. The portion of circle A that does not overlap with circle B is shaded in solid black.
- **Mathematical meaning:** Illustrates the difference of two sets, $A - B$, containing elements in A but not in B.

### Figure F3 — Venn diagram for complement (lower middle right)
- **Type:** venn-diagram
- **Caption/Number:** Figure-5
- **Description:** A rectangular box labeled S contains a single circle labeled A. The entire area inside the rectangle S but outside the circle A is shaded with a cross-hatch pattern.
- **Mathematical meaning:** Illustrates the complement of a set A ($\bar{A}$), containing all elements in the universal set S that are not in A.

### Figure F4 — Venn diagram for disjoint sets (bottom right)
- **Type:** venn-diagram
- **Caption/Number:** Figure-6
- **Description:** A rectangular box labeled S contains two separate, non-overlapping circles labeled A and B.
- **Mathematical meaning:** Illustrates disjoint or mutually exclusive sets where the intersection is the empty set ($A \cap B = \phi$).
