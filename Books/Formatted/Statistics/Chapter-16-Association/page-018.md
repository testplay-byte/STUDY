---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-9
chapter_folder: Chapter-16-Association
chapter_number: 16
chapter_title: "Association"
page_image: 18
page_printed: 302
section: null
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-16-Association/0018.jpg
converted_at: "2026-10-06"
converted_by: "agent-26c (glm-vision); corrected by coordinator"
notes: "Offset check: printed p.302 = image 18 + 284 (header folio, top-left; even page). Page is the continuation of Example 16.15 (no printed section heading, section: null; no figures). CORRECTION: the original conversion wrongly claimed an edge cut after the row '155 185.4 -30.4 924.16 4.98' — coordinator pixel-verification (3x zooms) shows the scan is COMPLETE: the next row '115 94.2 +20.8 432.64 4.59' and the totals row 'Sum fo = 510, Sum fe = 510, Sum (fo - fe) = 0, chi-square = 32.15' are fully printed and readable; table restored and the false [edge cut] marker removed (the six term values sum to exactly 32.15 as printed). Expected-frequency cells print the fraction over two lines inside the cell (rendered with \\frac); (A3B2) cell reads '= 82.0' with a plain equals sign (pixel-verified). Attribute-table row/column labels printed bold."
---

# Page 18 — Association (Chapter 16)

> 📄 Original scan: [0018.jpg](../../../Raw/Statistics/Chapter-16-Association/0018.jpg) · printed page 302

| | $B_1$ | $B_2$ | $B_3$ | Total |
| :--- | :--- | :--- | :--- | :--- |
| **$A_1$** | $(A_1 B_1) = 10$ | $(A_1 B_2) = 35$ | $(A_1 B_3) = 5$ | $(A_1) = 50$ |
| **$A_2$** | $(A_2 B_1) = 150$ | $(A_2 B_2) = 140$ | $(A_2 B_3) = 15$ | $(A_2) = 305$ |
| **$A_3$** | $(A_3 B_1) = 40$ | $(A_3 B_2) = 95$ | $(A_3 B_3) = 20$ | $(A_3) = 155$ |
| **Total** | $(B_1) = 200$ | $(B_2) = 270$ | $(B_3) = 40$ | n = 510 |

The expected frequencies are computed as below:

| | $B_1$ | $B_2$ | $B_3$ | Total |
| :--- | :--- | :--- | :--- | :--- |
| **$A_1$** | $(A_1 B_1) = \frac{(50)(200)}{510} = 19.6$ | $(A_1 B_2) = \frac{(50)(270)}{510} = 26.5$ | $(A_1 B_3) = \frac{(50)(40)}{510} = 3.9$ | $(A_1) = 50$ |
| **$A_2$** | $(A_2 B_1) = \frac{(305)(200)}{510} = 119.6$ | $(A_2 B_2) = \frac{(305)(270)}{510} = 161.5$ | $(A_2 B_3) = \frac{(305)(40)}{510} = 23.9$ | $(A_2) = 305$ |
| **$A_3$** | $(A_3 B_1) = \frac{(155)(200)}{510} = 60.8$ | $(A_3 B_2) = \frac{(155)(270)}{510} = 82.0$ | $(A_3 B_3) = \frac{(155)(40)}{510} = 12.2$ | $(A_3) = 155$ |
| **Total** | $(B_1) = 200$ | $(B_2) = 270$ | $(B_3) = 40$ | n = 510 |

One expected frequency under the column $B_3$ and against row $A_1$ is 3.9 which is less than 5. This frequency cannot be used in the calculation of $\chi^2$. Now we have two options (i) column $B_3$ is added to column $B_2$ (ii) Row $A_1$ is added to row $A_2$. But the total of column $B_3$ is 40 which is minimum of all the column and row totals. It means column $B_3$ is less important as compared to row $A_1$. Thus column $B_3$ is added to column $B_2$. This is equivalent to combining a small sample data with a large sample data. Thus the tables of observed frequencies and the expected frequencies would become:

**Observed Frequencies**

| | $B_1$ | $B_2 + B_3$ | Total |
| :--- | :--- | :--- | :--- |
| **$A_1$** | 10 | $35 + 5 = 40$ | 50 |
| **$A_2$** | 150 | $140 + 15 = 155$ | 305 |
| **$A_3$** | 40 | $95 + 20 = 115$ | 155 |
| **Total** | 200 | 310 | 510 |

**Expected Frequencies**

| | $B_1$ | $B_2 + B_3$ | Total |
| :--- | :--- | :--- | :--- |
| **$A_1$** | 19.6 | $26.5 + 3.9 = 30.4$ | 50 |
| **$A_2$** | 119.6 | $161.5 + 23.9 = 185.4$ | 305 |
| **$A_3$** | 60.8 | $82.0 + 12.2 = 94.2$ | 155 |
| **Total** | 200 | 310.0 | 510 |

The necessary calculations of Chi-square are given below:

| $f_o$ | $f_e$ | $(f_o - f_e)$ | $(f_o - f_e)^2$ | $\frac{(f_o - f_e)^2}{f_e}$ |
| :--- | :--- | :--- | :--- | :--- |
| 10 | 19.6 | -9.6 | 92.16 | 4.70 |
| 150 | 119.6 | +30.4 | 924.16 | 7.73 |
| 40 | 60.8 | -20.8 | 432.64 | 7.12 |
| 40 | 30.4 | +9.6 | 92.16 | 3.03 |
| 155 | 185.4 | -30.4 | 924.16 | 4.98 |
| 115 | 94.2 | +20.8 | 432.64 | 4.59 |
| $\sum f_o = 510$ | $\sum f_e = 510$ | $\sum (f_o - f_e) = 0$ | - | $\chi^2 = 32.15$ |
