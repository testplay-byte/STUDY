---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-8
chapter_folder: Chapter-15-Statistical-Inference-Testing-of-Hypotheses
chapter_number: 15
chapter_title: "Statistical Inference Testing of Hypotheses"
page_image: 29
page_printed: 267
section: null
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-15-Statistical-Inference-Testing-of-Hypotheses/0029.jpg
converted_at: "2026-10-06"
converted_by: "agent-24b (glm-vision)"
notes: "Offset check: printed p.267 = image 29 + 238 (header folio, top-right; odd page). Page opens mid-example — the display Z computation and item (vi) of Example 15.26 (continued from p.266) — then complete Example 15.27 and the statement + 2x2 data table of Example 15.28 (its Solution continues on next page). Book typos preserved verbatim: 'Has the machine output improved after overhauling at α = 0.05.' ends with a period (not '?'); 'the machine output does not improved after overhauled'. Printed 'Test- statistic' (hyphen attached to Test, space before statistic — 6x zoom verified) and '5 %' spacing preserved; Example headings printed bold. No figures, no cut-offs."
---

# Page 29 — Statistical Inference Testing of Hypotheses (Chapter 15)

> 📄 Original scan: [0029.jpg](../../../Raw/Statistics/Chapter-15-Statistical-Inference-Testing-of-Hypotheses/0029.jpg) · printed page 267

$$Z = \frac{(0.28 - 0.2) - 0.10}{\sqrt{\frac{(0.28)(0.72)}{200} + \frac{(0.2)(0.8)}{150}}} = \frac{-0.02}{0.0455} = -0.44$$

(vi) Conclusion: Since the calculated value of $Z = -0.44$ falls in the acceptance region, so we accept our null hypothesis $H_0 : p_1 - p_2 \geq 0.10$ at 5 % level of significance and we may conclude that the brand 'A' outsells brand 'B'.

**Example 15.27.**

A machine put out 16 imperfect articles in a sample of 500. After the machine is overhauled, it put out 10 imperfect articles in a sample of 300. Has the machine output improved after overhauling at $\alpha = 0.05$.

**Solution:**

(i) Null hypothesis: $H_0 : p_1 \geq p_2$ and Alternative hypothesis: $H_1 : p_1 < p_2$

(ii) Level of significance: $\alpha = 0.05$

(iii) Test- statistic: $Z = \dfrac{(\hat{p}_1 - \hat{p}_2) - (p_1 - p_2)}{\sqrt{\hat{p}_c\hat{q}_c\left(\dfrac{1}{n_1} + \dfrac{1}{n_2}\right)}}$

(iv) Critical region: $Z < -1.645$

(From the area table of normal distribution, we have $-Z_\alpha = -Z_{0.05} = -1.645$)

(v) Computations: Here, $n_1 = 500$, $X_1 = 16$, $n_2 = 300$, $X_2 = 10$,

$$\hat{p}_c = \frac{X_1 + X_2}{n_1 + n_2} = \frac{16 + 10}{500 + 300} = \frac{26}{800} = 0.0325$$

$$\hat{q}_c = 1 - \hat{p}_c = 1 - 0.0325 = 0.9675$$

$$\hat{p}_1 = \frac{X_1}{n_1} = \frac{16}{500} = 0.032, \quad \hat{p}_2 = \frac{X_2}{n_2} = \frac{10}{300} = 0.033$$

$$Z = \frac{(0.032 - 0.033) - 0}{\sqrt{0.0325(0.9675)\left(\frac{1}{500} + \frac{1}{300}\right)}} = \frac{-0.001}{0.012950} = -0.077$$

(vi) Conclusion: Since the calculated value of $Z = -0.077$ falls in the acceptance region, so we accept our null hypothesis $H_0$ at 5 % level of significance. We may conclude that the machine output does not improved after overhauled.

**Example 15.28.**

A random sample of 150 high school students was asked whether they would turn to their fathers or their mothers for help with a homework assignment in Mathematics and another random sample of 150 high school students was asked the same question with regard to a homework assignment in English. Use the result shown in the following table at the 0.01 level of significance to test whether or not there is a difference between the true proportions of high school students who turn to their fathers rather than their mothers for help in these two subjects:

| | Mathematics | English |
| :--- | :--- | :--- |
| **Mother** | 59 | 85 |
| **Father** | 91 | 65 |
