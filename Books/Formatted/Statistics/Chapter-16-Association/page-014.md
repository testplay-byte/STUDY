---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-9
chapter_folder: Chapter-16-Association
chapter_number: 16
chapter_title: "Association"
page_image: 14
page_printed: 298
section: 16.18. LIMITATIONS OF χ²
exercise: null
content_type: mixed
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-16-Association/0014.jpg
converted_at: "2026-10-06"
converted_by: "agent-27a (glm-vision)"
notes: "Offset check: printed p.298 = image 14 + 284 (header folio, top-left; even page). Page opens mid-sentence ('frequency is (A_i)(B_j)/n ...') — continuation of 16.17 from printed p.297; 16.18 heading verified WITHOUT trailing dot after χ² (zoom-checked; earlier QA misread claimed one). Page ends mid-computation — expected-frequency pair lines ('(Aβ) = 20 ... (αβ) = 20') continue on printed p.299. Running header on this page reads 'Basic Statistics Part-II ( Federal Board )'. Expected frequencies verified: (100)(160)/200 = 80, (100)(40)/200 = 20."
---

# Page 14 — Association (Chapter 16)

> 📄 Original scan: [0014.jpg](../../../Raw/Statistics/Chapter-16-Association/0014.jpg) · printed page 298

frequency is $\frac{(A_i)(B_j)}{n}$ where $(A_i)$ is the total of the row $A_i$ and $(B_j)$ is the total of the column $B_j$. For expected frequency E, a more general formula may be written as

$$E = \frac{R \times C}{n} \text{ where R is the row total and C is the column total.}$$

$\chi^2$ is calculated by the formula

$$\chi^2 = \sum\left[\frac{(\text{Observed frequency} - \text{Expected frequency})^2}{\text{Expected frequency}}\right] = \sum\left[\frac{(f_o - f_e)^2}{f_e}\right]$$

## 16.18. LIMITATIONS OF $\chi^2$

The $\chi^2$-test of independence gives very good results or conclusions when all the cell frequencies are very large. For small cell frequencies the test is not very reliable. $\chi^2$-test should not be used if any expected frequency is less than 5. If any expected frequency is less than 5, then something is to be done about it. One column containing the small frequency/frequencies is added to the adjacent column before calculating $\chi^2$. Similarly if some row has expected frequencies less than 5, the entire row is added to the adjacent row by adding the corresponding cell frequencies. If we have the choice to reduce the number of rows or columns, we should choose that column or row which we think is least important in the given data and this column or row should be added to the adjacent column or row.

**Example 16.12.**

Test the independence between the gender and liking for fish. Use $\alpha = 0.05$.

| | Males | Females | Total |
| :--- | :--- | :--- | :--- |
| Like Fish | 80 | 80 | 160 |
| Do not like Fish | 20 | 20 | 40 |
| Total | 100 | 100 | 200 |

**Solution:**

(i) Null hypothesis: $\quad H_0$: There is independence between gender and liking for fish.
   Alternative hypothesis: $H_1$: There is association between gender and liking for fish.

(ii) Level of significance: $\quad \alpha = 0.05$

(iii) Test-statistic: $\qquad \chi^2 = \sum\left(\frac{(f_o - f_e)^2}{f_e}\right)$

(iv) Computations: Let A = Males, $\alpha$ = Females, B = Like fish and $\beta$ = Do not like fish. The given table of observed frequencies is written as:

| | A | $\alpha$ | Total |
| :--- | :--- | :--- | :--- |
| B | $(AB) = 80$ | $(\alpha B) = 80$ | $(B) = 160$ |
| $\beta$ | $(A\beta) = 20$ | $(\alpha\beta) = 20$ | $(\beta) = 40$ |
| Total | $(A) = 100$ | $(\alpha) = 100$ | n = 200 |

The corresponding expected frequencies are calculated as below:

$$(AB) = \frac{(A)(B)}{n} = \frac{(100)(160)}{200} = 80 \qquad (\alpha B) = \frac{(\alpha)(B)}{n} = \frac{(100)(160)}{200} = 80$$
$$(A\beta) = \frac{(A)(\beta)}{n} = \frac{(100)(40)}{200} = 20 \qquad (\alpha\beta) = \frac{(\alpha)(\beta)}{n} = \frac{(100)(40)}{200} = 20$$
