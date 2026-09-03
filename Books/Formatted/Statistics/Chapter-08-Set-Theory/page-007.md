---
subject: statistics
book_title: null
batch: S-1
chapter_folder: Chapter-08-Set-Theory
chapter_number: 8
chapter_title: Set Theory
page_image: 7
page_printed: 7
section: "8.21 Multiplication Principle; 8.22 Factorials"
exercise: null
content_type: theory
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-08-Set-Theory/0007.jpg
converted_at: "2026-09-02"
converted_by: "agent-2e (glm-vision)"
notes: "Top of page is the tail (set-equality list + 'Hence' results i-viii) of a worked example continued from the previous page; no heading/'Solution' label printed above it. Majority of page is theory (8.21, 8.22) → 00-intro."
---

# Page 7 — Chapter 8: Set Theory

> 📄 Original scan: [0007.jpg](../../../Raw/Statistics/Chapter-08-Set-Theory/0007.jpg) · printed page 7

$(A \cup B)=\{1,2,3,5,7,9,10\}$

$(B \cup C)=\{3,4,5,7,9,10\}$

$(A \cap B)=\{3,5,9\}$

$(B \cap C)=\{7,9,10\}$

$(A \cup C)=\{1,2,3,4,5,7,9,10\}$

$(A \cap C)=\{9\}$

$(A \cup B) \cup C=\{1,2,3,4,5,7,9,10\}$

$A \cup (B \cup C)=\{1,2,3,4,5,7,9,10\}$

$(A \cap B) \cap C=\{9\}$

$A \cap (B \cap C)=\{9\}$

$A \cup (B \cap C)=\{1,2,3,5,7,9,10\}$

$(A \cup B) \cap (A \cup C)=\{1,2,3,5,7,9,10\}$

$A \cap (B \cup C)=\{3,5,9\}$

$(A \cap B) \cup (A \cap C)=\{3,5,9\}$

$\bar{A}=\{0,4,7,10\}$

$\bar{B}=\{0,1,2,4\}$

$(\overline{A \cup B})=\{0,4\}$

$\bar{A} \cap \bar{B}=\{0,4\}$

$(\overline{A \cap B})=\{0,1,2,4,7,10\}$

$\bar{A} \cup \bar{B}=\{0,1,2,4,7,10\}$

$(\bar{A} \cap B)=\{7,10\}$

$(A \cap B) \cup (\bar{A} \cap B)=\{3,5,7,9,10\}$

$A \cup (\bar{A} \cap B)=\{1,2,3,5,7,9,10\}$

Hence

(i) $(A \cup B) \cup C = A \cup (B \cup C)$

$= \{1,2,3,4,5,7,9,10\}$

(ii) $(A \cap B) \cap C = A \cap (B \cap C) = \{9\}$

(iii) $A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$

$= \{1,2,3,5,7,9,10\}$

(iv) $A \cap (B \cup C) = (A \cap B) \cup (A \cap C) = \{3,5,9\}$

(v) $(\overline{A \cup B}) = \bar{A} \cap \bar{B} = \{0,4\}$

(vi) $(\overline{A \cap B}) = \bar{A} \cup \bar{B} = \{0,1,2,4,7,10\}$

(vii) $(A \cap B) \cup (\bar{A} \cap B) = B = \{3,5,7,9,10\}$

(viii) $A \cup (\bar{A} \cap B) = A \cup B = \{1,2,3,5,7,9,10\}$

## 8.21. MULTIPLICATION PRINCIPLE

The multiplication principle states that if an operation can be performed in $\text{n}_1$ ways, and then after it is performed in any one of these ways, a second operation can be performed in $\text{n}_2$ ways, and after this second operation is performed in any one of these ways, a third operation can be performed in $\text{n}_3$ ways, and so on for k operations, then the k operations can be performed in

$$\text{n}_1 \times \text{n}_2 \times \text{n}_3 \times ... \times \text{n}_{\text{k}} \text{ ways}$$

For example, in how many ways can the three letters A, B and C be arranged? By the principle of multiplication, we have

$$\text{n}_1 \times \text{n}_2 \times \text{n}_3 = 3 \times 2 \times 1 = 6 \text{ ways}$$

If a departmental store has five entrances and six exits, in how many ways can one enter and leave the store? Here, we write

$$\text{n}_1 \times \text{n}_2 = 5 \times 6 = 30 \text{ ways}$$

## 8.22. FACTORIALS

If n is a positive whole number, the product n (n – 1) (n – 2) .... 3.2.1 is called ‘factorial n’ and is denoted by the symbol n!. So

$$\text{n!} = \text{n(n - 1)(n - 2) .... (3)(2)(1)}$$

In particular, we see that

$$1!=1 \quad 2!=2 \times 1=2 \quad 3!=3 \times 2 \times 1 =6 \quad 4!=4 \times 3 \times 2 \times 1=24$$

$$10! = 10 \times 9 \times 8 \times 7 \times 6 \times 5 \times 4 \times 3 \times 2 \times 1=3628800$$

Electronic calculators have the facility of calculating factorials. Zero factorial is equal to 1.

Thus $0! = 1$, but $(-4)!$, is not defined and has no meaning.
