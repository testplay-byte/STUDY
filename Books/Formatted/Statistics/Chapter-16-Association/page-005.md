---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-9
chapter_folder: Chapter-16-Association
chapter_number: 16
chapter_title: Association
page_image: 5
page_printed: 289
section: 16.10. CONSISTENCY
exercise: null
content_type: theory
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-16-Association/0005.jpg
converted_at: "2026-10-06"
converted_by: "agent-26a (glm-vision)"
notes: "Offset check: printed p.289 = image 5 + 284 (header folio, top-right; odd page). Book typo in Example 16.5 item (i): comma printed immediately after (Aβ), i.e. '(Aβ),= 40' — preserved. Stray bullet-like dot printed left of '(β)=145' in the 'Clearly' block under the Example 16.4 table — likely a print mark, not reproduced inside the math block; recorded here. Example 16.4 arithmetic and table totals cross-checked (all consistent with printed cells). Page ends with complete sentence '...the data is inconsistent.' — Example 16.5 cases (ii)-(iv) solutions continue on next page. No figures. | TYPO-CORRECTION PASS (2026-10-06, user mandate): unambiguous surface typo(s) corrected in the body per correction policy v4.4 — printed forms remain documented earlier in this note and itemised in docs/tracking/CORRECTIONS-LOG.md."
---

# Page 5 — Association (Chapter 16)

> 📄 Original scan: [0005.jpg](../../../Raw/Statistics/Chapter-16-Association/0005.jpg) · printed page 289

**Example 16.4.**

There are three attributes and their ultimate class frequencies are:

$$\begin{aligned}
(\text{ABC}) &= 10, (\text{AB}\gamma) = 30, (\alpha\text{BC}) = 15, (\alpha\text{B}\gamma) = 60, \\
(\text{A}\beta\text{C}) &= 20, (\text{A}\beta\gamma) = 15, (\alpha\beta\text{C}) = 40, (\alpha\beta\gamma) = 70.
\end{aligned}$$

Calculate all the negative class frequencies of order one and order two.

**Solution:** $\quad \begin{aligned}
(\alpha) &= (\alpha\text{BC}) + (\alpha\text{B}\gamma) + (\alpha\beta\text{C}) + (\alpha\beta\gamma) = 15+60+40+70 = 185 \\
(\beta) &= (\text{A}\beta\text{C}) + (\text{A}\beta\gamma) + (\alpha\beta\text{C}) + (\alpha\beta\gamma) = 20+15+40+70 = 145 \\
(\gamma) &= (\text{AB}\gamma) + (\text{A}\beta\gamma) + (\alpha\text{B}\gamma)+ (\alpha\beta\gamma) = 30+15+60+70 = 175 \\
(\alpha\beta) &= (\alpha\beta\text{C}) + (\alpha\beta\gamma) = 40+70 = 110 \\
(\alpha\gamma) &= (\alpha\text{B}\gamma) + (\alpha\beta\gamma) = 60+70 = 130 \\
(\beta\gamma) &= (\text{A}\beta\gamma) + (\alpha\beta\gamma) = 15+70 = 85
\end{aligned}$

These unknown frequencies can also be calculated with the help of the following table.

| | A | | α | | Total |
| :--- | :--- | :--- | :--- | :--- | :--- |
| | C | γ | C | γ | |
| **B** | $(\text{ABC})=10$ | $(\text{AB}\gamma)=30$ | $(\alpha\text{BC})=15$ | $(\alpha\text{B}\gamma)=60$ | $(\text{B})=115$ |
| **β** | $(\text{A}\beta\text{C})=20$ | $(\text{A}\beta\gamma)=15$ | $(\alpha\beta\text{C})=40$ | $(\alpha\beta\gamma)=70$ | $(\beta)=145$ |
| | $(\text{AC})=30$ | $(\text{A}\gamma)=45$ | $(\alpha\text{C})=55$ | $(\alpha\gamma)=130$ | |
| **Total** | $(\text{A})=75$ | | $(\alpha)=185$ | | **n = 260** |

Clearly $\quad \begin{aligned} (\alpha)&=185 & (\alpha\beta)&=40+70=110 \\ (\beta)&=145 & (\alpha\gamma)&=60+70=130 \\ (\gamma)&=30+15+60+70=175 & (\beta\gamma)&=15+70=85 \end{aligned}$

## 16.10. CONSISTENCY

If the class frequencies are observed in a certain sample data and all class frequencies are recorded correctly then there will be no error in them and they will be called consistent. But sometimes the class frequencies are not recorded correctly and their column total and row total do not agree with the grand total. If there is some error in any class frequency, then we say that the **frequencies are inconsistent.** If one class frequency is wrong, it will affect some other frequencies as well. A simple test of consistency is that all frequencies should be positive. If any frequency is negative, it means that there is inconsistency in the sample data. If the data is consistent, all the ultimate class frequencies will be positive.

**Example 16.5.**

Check whether the data given below in each case is consistent or inconsistent?

(i) $(\text{A}\beta)=40, (\text{AB})=75, (\beta)=108 \text{ and } n=165.$

(ii) $(\alpha)=550, (\alpha\beta)=50, (\text{B})=700 \text{ and } (\text{A}\beta)=250.$

(iii) $(\text{B})=45, (\text{A})=50, (\text{A}\beta)=60 \text{ and } n=115.$

(iv) $(\text{AB})=80, (\text{A})=100, (\beta)=80 \text{ and } (\alpha)=100.$

**Solution:** The necessary calculations are given below:

(i) Here, $(\text{A}\beta)=40, (\text{AB})=75, (\beta)=108 \text{ and } n=165$. Therefore

| Attributes | A | α | Total |
| :--- | :--- | :--- | :--- |
| **B** | $(\text{AB})=75$ | $(\alpha\text{B})=-18$ | $(\text{B})=57$ |
| **β** | $(\text{A}\beta)=40$ | $(\alpha\beta)=68$ | $(\beta)=108$ |
| **Total** | $(\text{A})=115$ | $(\alpha)=50$ | $n=165$ |

$(\alpha\text{B})=(\text{B})-(\text{AB})=-18=(\alpha)-(\alpha\beta)$.

Since $(\alpha\text{B})$ is negative, it means the data is inconsistent.
