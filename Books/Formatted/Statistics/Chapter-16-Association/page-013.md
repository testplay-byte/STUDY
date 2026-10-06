---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-9
chapter_folder: Chapter-16-Association
chapter_number: 16
chapter_title: "Association"
page_image: 13
page_printed: 297
section: 16.16. DIRECT FORMULA FOR CALCULATING χ² IN 2×2 CONTINGENCY TABLE; 16.17. CONTINGENCY TABLE OF HIGHER ORDER
exercise: null
content_type: theory
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-16-Association/0013.jpg
converted_at: "2026-10-06"
converted_by: "agent-27a (glm-vision)"
notes: "Offset check: printed p.297 = image 13 + 284 (header folio, top-right; odd page). Page opens with item (vi) Conclusion — continuation of the 16.15 test procedure from printed p.296. Book typo preserved: 'when we are taking about heights' ('taking' as printed, for 'talking'). Table-4 caption printed as two stacked lines ('Table-4.' / 'Two-way Classification'). Page ends mid-sentence ('...(A_i B_j) the expected') — continues on printed p.298."
---

# Page 13 — Association (Chapter 16)

> 📄 Original scan: [0013.jpg](../../../Raw/Statistics/Chapter-16-Association/0013.jpg) · printed page 297

(vi) **Conclusion:** The hypothesis of independence is rejected if the calculated value of $\chi^2$ lies in the rejection region. The rejection of hypothesis means that the attributes are associated.

## 16.16. DIRECT FORMULA FOR CALCULATING $\chi^2$ IN $2 \times 2$ CONTINGENCY TABLE

In a $2 \times 2$ contingency table the value of $\chi^2$ can be calculated without calculating the expected frequencies. Suppose a $2 \times 2$ contingency table has four cell frequencies as distributed below:

| | 1st Attribute | | Total |
| :--- | :---: | :---: | :---: |
| **2nd Attribute** | a | b | a + b |
| | c | d | c + d |
| **Total** | a + c | b + d | a + b + c + d |

The value of $\chi^2$ can be calculated directly by using the formula:

$$\chi^{2}=\frac{(a+b+c+d)(ad-bc)^{2}}{(a+b)(b+d)(c+d)(a+c)}$$

The proof of this formula is beyond the level of this book.

Let us calculate $\chi^2$ by using the above formula if a = 55, b = 125, c = 45 and d = 75. Therefore

$$\chi^{2}=\frac{(55+125+45+75)(55\times 75-125\times 45)^{2}}{(55+125)(125+75)(45+75)(55+45)}=\frac{(300)(2250000)}{(180)(200)(120)(100)}=\frac{675}{432}=1.5625$$

## 16.17. CONTINGENCY TABLE OF HIGHER ORDER

Sometimes a certain characteristic or attribute has more than two categories. For example when we are taking about heights of persons, the population or sample can be divided into four classes or categories like, very tall, tall, medium and short. In general if the attribute is A, then its different levels are denoted by $A_1$, $A_2$, ..., $A_r$ if it has r categories. The same population or sample may also be divided according to another characteristic say B with its levels $B_1$, $B_2$, ..., $B_c$ with c categories. The sample data on two attributes can be written in the form of two-way classification as below:

**Table-4.**
**Two-way Classification**

| Attribute A | Attribute B | | | | | | Row Totals |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| | **$B_1$** | **$B_2$** | ... | **$B_j$** | ... | **$B_c$** | |
| **$A_1$** | $(A_1B_1)$ | $(A_1B_2)$ | ... | $(A_1B_j)$ | ... | $(A_1B_c)$ | $(A_1)$ |
| **$A_2$** | $(A_2B_1)$ | $(A_2B_2)$ | ... | $(A_2B_j)$ | ... | $(A_2B_c)$ | $(A_2)$ |
| $\vdots$ | $\vdots$ | $\vdots$ | | $\vdots$ | | $\vdots$ | $\vdots$ |
| **$A_i$** | $(A_iB_1)$ | $(A_iB_2)$ | ... | $(A_iB_j)$ | ... | $(A_iB_c)$ | $(A_i)$ |
| $\vdots$ | $\vdots$ | $\vdots$ | | $\vdots$ | | $\vdots$ | $\vdots$ |
| **$A_r$** | $(A_rB_1)$ | $(A_rB_2)$ | ... | $(A_rB_j)$ | ... | $(A_rB_c)$ | $(A_r)$ |
| **Column Totals** | $(B_1)$ | $(B_2)$ | ... | $(B_j)$ | ... | $(B_c)$ | n |

Table-4. contains r rows and c columns, it is therefore called r × c contingency table. Each frequency in the table is called cell frequency. It is the extension of $2 \times 2$ contingency table and $\chi^2$-statistic is used to test the independence between the attributes given in the rows and columns.

The procedure is the same as explained earlier. For each observed frequency in the sample data, the corresponding expected frequency is calculated. It is calculated on the assumption that there is independence between the two characteristics. For each observed frequency $(A_iB_j)$ the expected
