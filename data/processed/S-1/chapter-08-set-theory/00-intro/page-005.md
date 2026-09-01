---
book: S-1
book_title: null
page_image: 5
page_printed: 5
chapter: 8
chapter_title: Set Theory
section: "Examples 8.3 – 8.5 (worked examples in §8.x theory flow)"
exercise: null
content_type: worked-examples
has_figures: true
figures_count: 1
source_image: ../../../data/raw/S-1/0005.jpg
converted_at: "2026-09-01"
converted_by: "coordinator (glm-vision)"
notes: "Printed page number in header is partially cut off in scan; verified as 5 (S-1 printed page = image number)."
---

# Page 5 — Chapter 8: Set Theory

> 📄 Original scan: [0005.jpg](../../../data/raw/S-1/0005.jpg) · printed page 5

**Example 8.3.**

Let $A = \{2, 3\}$, $B = \{3, 4\}$ and $C = \{4\}$ be subsets of the universal set $S = \{2, 3, 4\}$. Determine the sets.

(i) $\text{A} \times \text{A}$ (ii) $\text{A} \times \text{B}$ (iii) $\text{B} \times \text{A}$ (iv) $(\text{A} \times \text{B}) \cap (\text{B} \times \text{C})$ (v) $(\text{A} \times \text{B}) \cup (\text{B} \times \text{C})$

**Solution:** (i) $\text{A} \times \text{A} = \{(2, 2), (2, 3), (3, 2), (3, 3)\}$

(ii) $\text{A} \times \text{B} = \{(2, 3), (2, 4), (3, 3), (3, 4)\}$

(iii) $\text{B} \times \text{A} = \{(3, 2), (3, 3), (4, 2), (4, 3)\}$ $\text{B} \times \text{C} = \{(3, 4), (4, 4)\}$

(iv) $(\text{A} \times \text{B}) \cap (\text{B} \times \text{C}) = \{3, 4\}$

(v) $(\text{A} \times \text{B}) \cup (\text{B} \times \text{C}) = \{(2, 3), (2, 4), (3, 3), (3, 4), (4, 4)\}$

**Example 8.4.**

Given $S = \{\text{k}, \text{l}, \text{m}, \text{n}, \text{o}, \text{p}\}$, $A = \{\text{k}, \text{l}\}$, $B = \{\text{m}, \text{n}, \text{o}, \text{p}\}$, $C = \{\text{o}, \text{p}\}$. Find

(i) $\bar{\text{C}}$ (ii) $\text{A} \cup \text{C}$ (iii) $\text{A} \cup \text{B}$ (iv) $\text{A} \cap \text{B}$

(v) $\text{A} \cup \text{S}$ (vi) $\text{S} \cap \text{B}$ (vii) $(\overline{\text{A} \cup \text{B}})$ (viii) $(\overline{\bar{\text{A}} \cap \bar{\text{B}}})$

**Solution:** (i) $\bar{\text{C}} = \{\text{k}, \text{l}, \text{m}, \text{n}\}$ (ii) $\text{A} \cup \text{C} = \{\text{k}, \text{l}, \text{o}, \text{p}\}$ (iii) $\text{A} \cup \text{B} = \{\text{k}, \text{l}, \text{m}, \text{n}, \text{o}, \text{p}\}$

(iv) $\text{A} \cap \text{B} = \phi$ (v) $\text{A} \cup \text{S} = \{\text{k}, \text{l}, \text{m}, \text{n}, \text{o}, \text{p}\} = \text{S}$ (vi) $\text{S} \cap \text{B} = \{\text{m}, \text{n}, \text{o}, \text{p}\} = \text{B}$

(vii) $(\overline{\text{A} \cup \text{B}}) = \phi$ $\bar{\text{A}} = \{\text{m}, \text{n}, \text{o}, \text{p}\}$ $\bar{\text{B}} = \{\text{k}, \text{l}\}$ $\bar{\text{A}} \cap \bar{\text{B}} = \phi$

(viii) $(\overline{\bar{\text{A}} \cap \bar{\text{B}}}) = \{\text{k}, \text{l}, \text{m}, \text{n}, \text{o}, \text{p}\} = \text{S}$

**Example 8.5.**

Let $A = \{1, 2, 3\}$, $B = \{2, 4\}$ and $C = \{3, 4, 5\}$. Find $\text{A} \times \text{B} \times \text{C}$.

**Solution:** A convenient method of finding $\text{A} \times \text{B} \times \text{C}$ is through the so called "tree diagram" shown below:

[Figure F1]

## Figures on this page

### Figure F1 — Tree diagram for A × B × C (bottom center)
- **Type:** tree-diagram
- **Caption/Number:** Figure-8
- **Description:** A tree diagram illustrating the Cartesian product of three sets. The root branches into three nodes labeled '1', '2', and '3' under the column header 'A'. Each of these nodes branches into two child nodes labeled '2' and '4' under the column header 'B'. Finally, each node in the 'B' level branches into three leaf nodes labeled '3', '4', and '5' under the column header 'C'. To the right of the tree, a final column labeled 'A×B×C' lists all resulting ordered triples: (1,2,3), (1,2,4), (1,2,5), (1,4,3), (1,4,4), (1,4,5), (2,2,3), (2,2,4), (2,2,5), (2,4,3), (2,4,4), (2,4,5), (3,2,3), (3,2,4), (3,2,5), (3,4,3), (3,4,4), and (3,4,5).
- **Mathematical meaning:** Demonstrates how to systematically list all elements of a triple Cartesian product by traversing a tree structure where each level represents an element from one of the sets.
