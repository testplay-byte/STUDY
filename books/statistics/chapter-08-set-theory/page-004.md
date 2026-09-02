---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board)
batch: S-1
chapter_folder: chapter-08-set-theory
chapter_number: 8
chapter_title: Set Theory
page_image: 4
page_printed: 4
section: "8.18 PRODUCT SET; 8.19 PARTITION OF SET"
exercise: null
content_type: theory
has_figures: true
figures_count: 1
source_image: ../raw/S-1/0004.jpg
converted_at: "2026-09-01"
converted_by: "agent-2d (glm-vision)"
notes: ""
---

# Page 4 — Basic Statistics Part-II (Federal Board) · Chapter 8: Set Theory

> 📄 Original scan: [0004.jpg](../raw/S-1/0004.jpg) · printed page 4

## 8.18. PRODUCT SET

If A and B are two sets, then A × B contains all those elements of the type $(x, y)$ where $x \in A$ and $y \in B$, that is

$$A \times B = \{(x, y) / x \in A, y \in B\}$$

Let $A = \{1, 2, 3\}$

and $B = \{w, x\}$, then

$$A \times B = \{(1, w), (1, x), (2, w),$$
$$(2, x), (3, w), (3, x)\}$$

In general $A \times B$ is not equal to $B \times A$.

[Figure F1]

## 8.19. PARTITION OF SET

If S is a universal set, and we divide S into different disjoint and non empty subsets, it is called partition of set S.

$$S = \{1, 2, 3, 4\}, \quad A_1 = \{1\}, \quad A_2 = \{2, 3\}, \quad A_3 = \{4\}.$$

$A_1$, $A_2$ and $A_3$ form partition of S, that is

(i) $A_i \cap A_j = \phi$ for all $i \neq j$ (ii) $A_1 \cup A_2 \cup A_3 \cup ... \cup A_n = S$

**Example 8.1.**

If $S = \{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\}$. Consider the subsets of S given as:

$A = \{1, 2, 3, 10\}$, $B = \{2, 4, 6, 8\}$, $C = \{1, 3, 5, 7\}$ and $D = \{8, 9, 10\}$. Find:

(i) $A \cup B$ (ii) $A \cup C$ (iii) $A \cap C$ (iv) $C \cap D$ (v) $B \cap D$ (vi) $\bar{D}$ (vii) $\bar{C}$. (viii) $\bar{D} \cap \bar{C}$

**Solution:** (i) $A \cup B = \{1, 2, 3, 4, 6, 8, 10\}$

(ii) $A \cup C = \{1, 2, 3, 5, 7, 10\}$

(iii) $A \cap C = \{1, 3\}$

(iv) $C \cap D = \phi$

(v) $B \cap D = \{8\}$

(vi) $\bar{D} = \{1, 2, 3, 4, 5, 6, 7\}$

(vii) $\bar{C} = \{2, 4, 6, 8, 9, 10\}$

(viii) $\bar{D} \cap \bar{C} = \{2, 4, 6\}$

**Example 8.2.**

Let $S = \{1, 2, 3, 4, 5, 6, 7, 8, 9\}$, $A = \{1, 2, 3, 4\}$, $B = \{2, 4, 6, 8\}$ and $C = \{3, 4, 5, 6\}$. Find:

(i) $\bar{A}$ (ii) $\bar{B}$ (iii) $(\overline{A \cap C})$ (iv) $(\overline{A \cup B})$ (v) $(\overline{\bar{A}})$ (vi) $(\overline{B - C})$

**Solution:** $A \cap C = \{3, 4\}, A \cup B = \{1, 2, 3, 4, 6, 8\}, (B - C) = \{2, 8\}$

(i) $\bar{A} = \{5, 6, 7, 8, 9\}$

(ii) $\bar{B} = \{1, 3, 5, 7, 9\}$

(iii) $(\overline{A \cap C}) = \{1, 2, 5, 6, 7, 8, 9\}$

(iv) $(\overline{A \cup B}) = \{5, 7, 9\}$

(v) $(\overline{\bar{A}}) = \{1, 2, 3, 4\} = A$

(vi) $(\overline{B - C}) = \{1, 3, 4, 5, 6, 7, 9\}$

## Figures on this page

### Figure F1 — Tree diagram for product set (top right)
- **Type:** tree-diagram
- **Caption/Number:** Figure-7
- **Description:** A tree diagram (root point on the left) illustrating the Cartesian product of sets A and B. The root branches into three primary nodes labeled 1, 2, and 3 (representing elements of set A). Each of these nodes further branches into two secondary nodes labeled 'w' and 'x' (representing elements of set B). To the right of each terminal leaf node, in a column labeled $A \times B$, the resulting ordered pair from the Cartesian product $A \times B$ is listed in parentheses: (1, w), (1, x), (2, w), (2, x), (3, w), and (3, x).
- **Mathematical meaning:** Demonstrates the systematic generation of ordered pairs in a Cartesian product $A \times B$ where $|A|=3$ and $|B|=2$, resulting in $3 \times 2 = 6$ elements.
