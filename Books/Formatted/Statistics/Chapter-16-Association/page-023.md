---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-9
chapter_folder: Chapter-16-Association
chapter_number: 16
chapter_title: "Association"
page_image: 23
page_printed: 307
section: "18. Coefficient of Association; 19. Coefficient of Contingency; 20. Pearson's Coefficient of Mean Square Contingency; 21. Degree of Freedom; 22. Formula of Chi-square Test and its Degree of Freedom; 23. Chi-square ($\chi^2$) Statistic; 24. Chi-square Test for Independence; 25. Chi-square ($\chi^2$) Distribution; 26. General Procedure for Test of Independence between the Attributes"
exercise: null
content_type: theory
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-16-Association/0023.jpg
converted_at: "2026-10-06"
converted_by: "agent-27b (glm-vision)"
notes: "Offset check: printed p.307 = image 23 + 284 (header folio, top-right; odd page; running head '[Chapter 16] Association' top-left = furniture). Continuation of the end-of-chapter 'SHORT DEFINITIONS' list: numbered items 18-26 (banner not reprinted on this page; the only printed headings are these numbered definition titles — recorded in section). TWO-COLUMN layout, continuous numbering read column 1 then column 2. Book typo preserved: def 23 'The large the value χ²' ('large' for 'larger', as printed). Def 19 formula/range separator is a semicolon (zoom-verified): 'C = √(χ²/(χ²+n)); 0 ≤ C ≤ √((k-1)/k)'. Line ending after def 22 '...directly by using the formula' reads ambiguously at scan resolution (various zooms suggest '/', ':' or no mark); no punctuation transcribed rather than guessed. 2x2 direct formula denominator order as printed: (a+b)(b+d)(c+d)(a+c). No figures, no cut-offs."
---

# Page 23 — Association (Chapter 16)

> 📄 Original scan: [0023.jpg](../../../Raw/Statistics/Chapter-16-Association/0023.jpg) · printed page 307

**18. Coefficient of Association**

When it is desired to calculate the strength of association, we calculate Yule's coefficient of association denoted by Q, where

Coefficient of association = Q

$$= \frac{(\text{AB})(\alpha\beta) - (\text{A}\beta)(\alpha\text{B})}{(\text{AB})(\alpha\beta) + (\text{A}\beta)(\alpha\text{B})}$$

It lies between $-1$ and $+1$. If $Q = -1$, it is perfect negative association between the attributes. If $Q = 0$, it means independence between attributes and if $Q = +1$, it means perfect positive association between attributes.

**19. Coefficient of Contingency**

The measure of the degree of relationship, association or dependence of the classifications in a contingency table is given by

$C = \sqrt{\frac{\chi^2}{\chi^2 + n}}$; $0 \leq C \leq \sqrt{\frac{k - 1}{k}}$ which is called the coefficient of contingency. The larger value of C, the greater is the degree of association. The number of rows and columns in the contingency table determine the maximum value of C, which is never greater than one. If the number of rows and columns of a contingency table is equal to k, the maximum of C is given by $\sqrt{\frac{k - 1}{k}}$.

**20. Pearson's Coefficient of Mean Square Contingency**

Pearson's coefficient of mean square contingency = C

$= \sqrt{\frac{\chi^2}{\chi^2 + n}}$ for $0 \leq C \leq \sqrt{\frac{k - 1}{k}}$.

Where k = Number of rows or columns whichever is smaller

$n = \text{sample size and } \chi^2 = \sum \left[ \frac{(f_o - f_e)^2}{f_e} \right]$.

**21. Degree of Freedom**

Degree of freedom is the number of values that are free to vary after we have placed certain restrictions upon the data.

**22. Formula of Chi-square Test and its Degree of Freedom**

Chi-Square formula is

$\chi^2 = \sum \left[ \frac{(\text{Observed frequency} - \text{Expected frequency})^2}{\text{Expected frequency}} \right]$

$= \sum \left[ \frac{(f_o - f_e)^2}{f_e} \right]$. d.f. = $(r - 1)(c - 1)$.

The value of $\chi^2$ in $2 \times 2$ contingency table can be calculated directly by using the formula

$$\chi^2 = \frac{(a + b + c + d)(ad - bc)^2}{(a + b)(b + d)(c + d)(a + c)}$$

**23. Chi-square ($\chi^2$) Statistic**

A measure of the discrepancy existing between observed and expected frequencies is supplied by the statistic $\chi^2$ ( read Chi-square ) given by

$\chi^2 = \sum \left[ \frac{(f_o - f_e)^2}{f_e} \right]$. If $\chi^2 = 0$, observed and expected frequencies agree exactly, while if $\chi^2 > 0$, they do not agree exactly. The large the value $\chi^2$, the greater is the discrepancy between observed and expected frequencies.

**24. Chi-square Test for Independence**

Chi-square ( $\chi^2$ ) is a process of test of significance to find out whether two attributes are associated or independent. Chi-square is a statistic which has positively skewed distribution ranging from 0 to $\infty$. The Chi-square test statistic to be used is

$\chi^2 = \sum \left[ \frac{(f_o - f_e)^2}{f_e} \right]$.

Where $f_o =$ Actual frequency or Observed frequency and $f_e =$ Expected frequency. The shape of the Chi-square depends upon the degrees of freedom. When $\chi^2 = 0$, it means perfect independence between the attributes.

**25. Chi-square ($\chi^2$) Distribution**

$\chi^2$ read as Chi-square is a statistic which has a positively skewed distribution ranging from 0 to $\infty$. The shape of the $\chi^2$-distribution depends upon the degrees of freedom. $\chi^2$-distribution is useful to test the independence between two attributes.

**26. General Procedure for Test of Independence between the Attributes**

(i) $H_0 : \text{The attributes are independent}$
$H_1 : \text{The attributes are associated}$

(ii) Level of significance $\alpha$ is chosen.

(iii) Test-statistic: $\chi^2 = \sum \left[ \frac{(f_o - f_e)^2}{f_e} \right]$

(iv) Computation of test-statistic

(v) Critical region: $\chi^2 \geq \chi^2_{\alpha[(r - 1)(c - 1)]}$

(vi) Conclusion: Accept $H_0$ if calculated value of $\chi^2$ falls in the acceptance region, otherwise reject $H_0$.
