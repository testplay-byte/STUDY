---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-8
chapter_folder: Chapter-15-Statistical-Inference-Testing-of-Hypotheses
chapter_number: 15
chapter_title: "Statistical Inference Testing of Hypotheses"
page_image: 30
page_printed: 268
section: 15.30 CHOICE OF PROPER TEST-STATISTIC
exercise: null
content_type: mixed
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-15-Statistical-Inference-Testing-of-Hypotheses/0030.jpg
converted_at: "2026-10-06"
converted_by: "agent-24b (glm-vision)"
notes: "Offset check: printed p.268 = image 30 + 238 (header folio, top-left; even page). Page opens with the complete solution (i)–(vi) of Example 15.28 (statement + data table on p.267), then section 15.30 CHOICE OF PROPER TEST-STATISTIC with its guidance table (page ends after the table). Printed H_o (letter-o subscript) normalized to H_0 per chapter house style. 'Test - statistic', 'n - Large', 'σ - Known', 'Z - test', 't - test' spacing preserved as printed; Z_{alpha/2} printed as stacked alpha-over-2 subscript (transcribed Z_{\frac{\alpha}{2}} per chapter convention). Section number 15.30 pixel-verified (not hallucinated). No figures, no cut-offs."
---

# Page 30 — Statistical Inference Testing of Hypotheses (Chapter 15)

> 📄 Original scan: [0030.jpg](../../../Raw/Statistics/Chapter-15-Statistical-Inference-Testing-of-Hypotheses/0030.jpg) · printed page 268

**Solution:**

(i) Null hypothesis: $H_0 : p_1 = p_2$ or $p_1 - p_2 = 0$

Alternative hypothesis: $H_1 : p_1 \neq p_2$ or $p_1 - p_2 \neq 0$

(ii) Level of significance: $\alpha = 0.01$

(iii) Test - statistic: $Z = \dfrac{(\hat{p}_1 - \hat{p}_2) - (p_1 - p_2)}{\sqrt{\hat{p}_c\hat{q}_c\left(\dfrac{1}{n_1} + \dfrac{1}{n_2}\right)}}$

(iv) Critical region: $|Z| > 2.575$ ($Z < -2.575$ and $Z > 2.575$)

(From the area table of normal distribution, we have $Z_{\frac{\alpha}{2}} = Z_{0.005} = 2.575$)

(v) Computations: Here $n_1 = 150$, $X_1 = 91$, $n_2 = 150$, $X_2 = 65$, $\hat{p}_1 = \dfrac{X_1}{n_1} = \dfrac{91}{150}$, $\hat{p}_2 = \dfrac{X_2}{n_2} = \dfrac{65}{150}$

$$\begin{aligned}
\hat{p}_c &= \frac{n_1\hat{p}_1 + n_2\hat{p}_2}{n_1 + n_2} = \frac{150\left(\frac{91}{150}\right) + 150\left(\frac{65}{150}\right)}{150 + 150} = \frac{91 + 65}{300} = \frac{156}{300} = 0.52, \\
\hat{q}_c &= 1 - \hat{p}_c = 1 - 0.52 = 0.48, \quad \text{and hence} \\
Z &= \frac{\left(\frac{91}{150} - \frac{65}{150}\right) - 0}{\sqrt{(0.52)(0.48)\left(\frac{1}{150} + \frac{1}{150}\right)}} = \frac{\left(\frac{26}{150}\right)}{\sqrt{0.003328}} = \frac{0.1733}{0.0577} = 3.003
\end{aligned}$$

(vi) Conclusion: Since the calculated value of $Z = 3.003$ falls in the critical region, so we reject our null hypothesis $H_0 : p_1 = p_2$ at 1 % level of significance and we may conclude that there is a difference between the true proportions of high school students.

## 15.30 CHOICE OF PROPER TEST-STATISTIC

In a certain given situation, we have to choose the proper test-statistic. For example the population mean $\mu$ can be tested with the help of Z-test and t-test. The testing of hypotheses along with other things, mainly depends upon the sample size. The sample size plays a major role in the testing of hypothesis. The following table can be used for guidance in choosing the proper test-statistic.

| | n - Large | n - Small |
| :--- | :--- | :--- |
| **$\sigma$ - Known** | Z - test | Z - test |
| **$\sigma$ - Unknown** | Z - test | t - test |
