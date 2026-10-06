---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-9
chapter_folder: Chapter-16-Association
chapter_number: 16
chapter_title: Association
page_image: 4
page_printed: 288
section: null
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-16-Association/0004.jpg
converted_at: "2026-10-06"
converted_by: "agent-26a (glm-vision)"
notes: "Offset check: printed p.288 = image 4 + 284 (header folio, top-left; even page). All three pages-of-content are worked examples (16.1-16.3); 'Example' banners are not sections → section: null. In Example 16.3 the unknown table frequencies are printed inside rectangular boxes — represented here as square brackets [40] [10] [20] [30] [60]. Book quirks preserved: first result row shows leading dot '.(α) = 100-40=60'; punctuation after n alternates period/comma (row 1 'n.', row 2 'n,'). Page ends with complete sentence 'complete the table.' No figures, no cut-offs."
---

# Page 4 — Association (Chapter 16)

> 📄 Original scan: [0004.jpg](../../../Raw/Statistics/Chapter-16-Association/0004.jpg) · printed page 288

**Example 16.1.**

Express $( \text{AB} )$ in terms of lower order frequencies with the help of operators.

**Solution:** We write $( \text{AB} ) = \text{n} \cdot \text{AB}$. Substituting $\text{A}=1-\alpha$ and $\text{B}=1-\beta$. Therefore

$$ ( \text{AB} ) = \text{n}(1-\alpha)(1-\beta)=\text{n}[1-\beta-\alpha+\alpha\beta]=\text{n}-\text{n}\beta-\text{n}\alpha+\text{n}\alpha\beta $$

Writing the original symbols for $\text{n}\beta$, $\text{n}\alpha$ and $\text{n}\alpha\beta$, we have

$$ ( \text{AB} ) = \text{n}-(\beta)-(\alpha)+(\alpha\beta) \text{ or } ( \text{AB} ) = \text{n}-(\alpha)-(\beta)+(\alpha\beta) $$

It is to be noted that the left hand side contains positive attributes and all attributes on the right side are negative except one frequency which is n. Any attribute on the left side does not appear on the right side in this type of relation.

**Example 16.2.**

Express $( \alpha\beta\gamma )$ in terms of lower order frequencies.

**Solution:** $( \alpha\beta\gamma )$ can be written as $\text{n} \cdot \alpha\beta\gamma$. Thus $( \alpha\beta\gamma ) = \text{n} \cdot \alpha\beta\gamma$

Using the relations $\alpha = 1-\text{A}$, $\beta=1-\text{B}$ and $\gamma=1-\text{C}$. Therefore

$$ \begin{aligned}
( \alpha\beta\gamma ) &= \text{n}(1-\text{A})(1-\text{B})(1-\text{C}) \\
&= \text{n}(1-\text{A}-\text{B}-\text{C}+\text{AB}+\text{AC}+\text{BC}-\text{ABC}) \\
&= \text{n}-\text{n}\cdot\text{A}-\text{n}\cdot\text{B}-\text{n}\cdot\text{C}+\text{n}\cdot\text{AB}+\text{n}\cdot\text{AC}+\text{n}\cdot\text{BC}-\text{n}\cdot\text{ABC} \\
( \alpha\beta\gamma ) &= \text{n}-(\text{A})-(\text{B})-(\text{C})+(\text{AB})+(\text{AC})+(\text{BC})-(\text{ABC})
\end{aligned} $$

The attributes on the left side are negative and all attributes on the right side are positive except one frequency of order zero that is n.

**Example 16.3.**

Given the following frequencies: $\text{n} = 100$, $( \text{AB} ) = 30$, $( \text{A} ) = 40$, $( \text{B} ) = 70$. Calculate all the remaining frequencies.

**Solution:** Here, $\text{n} = 100$, $( \text{AB} ) = 30$, $( \text{A} ) = 40$ and $( \text{B} ) = 70$. Therefore

$$ \begin{aligned}
( \text{A} )+( \alpha ) &= \text{n}. & \text{or } \quad 40+( \alpha ) &= 100 & \text{or } .( \alpha ) &= 100-40=60 \\
( \text{B} )+( \beta ) &= \text{n}, & \text{or } \quad 70+( \beta ) &= 100 & \text{or } ( \beta ) &= 100-70=30 \\
( \text{B} ) &= ( \text{AB} )+( \alpha\text{B} ) & \text{or } \quad 70 &= 30+( \alpha\text{B} ) & \text{or } ( \alpha\text{B} ) &= 70-30=40 \\
( \text{A} ) &= ( \text{AB} )+( \text{A}\beta ) & \text{or } \quad 40 &= 30 +( \text{A}\beta ) & \text{or } ( \text{A}\beta ) &= 40-30 = 10 \\
( \beta ) &= ( \text{A}\beta )+( \alpha\beta ) & \text{or } \quad 30 &= 10 +( \alpha\beta ) & \text{or } ( \alpha\beta ) &= 30 - 10 = 20
\end{aligned} $$

These frequencies can be calculated very easily if the given frequencies are substituted in the $2 \times 2$ contingency table. The unknown frequencies can be calculated by simple addition or subtraction. Thus

| | A | α | Total |
| :--- | :--- | :--- | :--- |
| **B** | ( AB ) = 30 | ( αB ) = [40] | ( B ) = 70 |
| **β** | ( Aβ ) = [10] | ( αβ )= [20] | ( β ) = [30] |
| **Total** | ( A ) = 40 | ( α )= [60] | n = 100 |

The unknown frequencies within the rectangles have been calculated by simple subtraction to complete the table.
