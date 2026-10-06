---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-9
chapter_folder: Chapter-16-Association
chapter_number: 16
chapter_title: "Association"
page_image: 10
page_printed: 294
section: 16.13. COEFFICIENT OF ASSOCIATION
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-16-Association/0010.jpg
converted_at: "2026-10-06"
converted_by: "agent-27a (glm-vision)"
notes: "Offset check: printed p.294 = image 10 + 284 (header folio, top-left; even page). Page opens mid-example (conclusion of Example 16.8 cash-payment association from printed p.293). Running header on this page reads 'Basic Statistics Part-II ( Federal Board )'. Page ends mid-table — the Example 16.10 contingency table (Inoculated 528/25, Not inoculated 790/175) is printed without a Total row here; continues on next page. Book typos preserved: 'the two random variable X and Y' (singular 'variable' as printed); 'on the top left corner in the 2 x 2 cross table' (odd phrasing as printed)."
---

# Page 10 — Association (Chapter 16)

> 📄 Original scan: [0010.jpg](../../../Raw/Statistics/Chapter-16-Association/0010.jpg) · printed page 294

There is positive association between A and B. It means that males make the cash payments with greater frequency than the females.

If we check the pair $(A\beta)$, we will find negative association.

$$(A\beta) = 20 \text{ and } \frac{(A)(\beta)}{n} = \frac{(100)(80)}{200} = 40. \text{ Therefore } (A\beta) < \frac{(A)(\beta)}{n}$$

There is negative association between A and $\beta$. Females are less inclined to make the cash payments. It is also clear from the given data. Out of 120 males, 80 make the payment on cash.

80 out of 120 means that $\frac{80}{120} \times 100 = 66.7 \%$ males make cash payment. 20 out of 80 means that $\frac{20}{80} \times 100 = 25\%$ females make the cash payment. Thus males and cash payment go together with high frequency and are called positively related or associated.

## 16.13. COEFFICIENT OF ASSOCIATION

When it is desired to calculate the level of association, we can calculate coefficient of association denoted by Q, where

$$Q = \frac{(AB)(\alpha\beta) - (A\beta)(\alpha B)}{(AB)(\alpha\beta) + (A\beta)(\alpha B)}$$

This is called Yule's coefficient of association. It lies between $-1$ and $+1$. It is explained in the same manner as the coefficient of correlation **r** between the two random variable **X** and **Y**.

If $Q = -1$ it is perfect negative association between the attributes on the top left corner in the $2 \times 2$ cross table.
If $Q = 0$ it means independence
If $Q = +1$ it means perfect positive association between attributes.

**Example 16.9.**

We wish to determine if there is any difference in the popularity of football between college educated males and non college educated males. A sample of 100 college educated males showed that 55 were football fans. A sample of 200 non college educated males revealed that 125 were football fans. Is there any evidence of a difference in football popularity between college educated and non college educated males.

**Solution:** Let $A =$ College educated males, $\alpha =$ Non-College educated males, $B =$ Football fans and $\beta =$ Not football fans. We put the data in the following table.

| | **A** | **$\alpha$** | **Total** |
| :--- | :--- | :--- | :--- |
| **B** | $(AB) = 55$ | $(\alpha B) = 125$ | $(B) = 180$ |
| **$\beta$** | $(A\beta) = 45$ | $(\alpha\beta) = 75$ | $(\beta) = 120$ |
| **Total** | $(A) = 100$ | $(\alpha) = 200$ | $n = 300$ |

$$\begin{aligned}
\text{Coefficient of association } &= Q = \frac{(AB)(\alpha\beta) - (A\beta)(\alpha B)}{(AB)(\alpha\beta) + (A\beta)(\alpha B)} = \frac{(55)(75) - (45)(125)}{(55)(75) + (45)(125)} \\
&= \frac{4125 - 5625}{4125 + 5625} = \frac{-1500}{9750} = -0.1538
\end{aligned}$$

This indicates negative association between A and B.

**Example 16.10.**

Find the association between injection against typhoid and exemption from attack from the following contingency table:

| Attribute | Attacked | Not Attacked |
| :--- | :--- | :--- |
| Inoculated | 528 | 25 |
| Not inoculated | 790 | 175 |
