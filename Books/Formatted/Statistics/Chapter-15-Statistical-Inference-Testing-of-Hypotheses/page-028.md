---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-8
chapter_folder: Chapter-15-Statistical-Inference-Testing-of-Hypotheses
chapter_number: 15
chapter_title: "Statistical Inference Testing of Hypotheses"
page_image: 28
page_printed: 266
section: null
exercise: null
content_type: mixed
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-15-Statistical-Inference-Testing-of-Hypotheses/0028.jpg
converted_at: "2026-10-06"
converted_by: "agent-25a (glm-vision)"
notes: "Offset check: printed p.266 = image 28 + 238 (header folio 266, top-left; even page, running header is the book-title variant). No numbered section heading printed on this page (section: null): page opens mid-theory with the 15.29 procedure continued from the previous page ((iv) Critical region (a)-(c), (v) Computation, (vi) Conclusion), then complete Example 15.26 statement and solution (i)-(v) up to the sample-proportion values line ending 'and hence'; the Z computation continues on the next page. Book print inconsistencies preserved per-instance: (v) of the procedure is printed 'Computation' (singular) while the Example's (v) is 'Computations'; percent spacing mixed in the Example statement ('10%' no space vs '10 %' with space); '( No. of smokers who prefer brand B )' printed with inner spaces vs '(No. of smokers who prefer brand A)' without — normalized to the dominant no-space form. Hypotheses in (b)/(c) printed WITHOUT hats over the p letters (pixel-verified), while the test-statistic and the final 'Thus Z =' formula carry hatted p-hat symbols. No figures, no cut-offs, nothing illegible."
---

# Page 28 — Statistical Inference Testing of Hypotheses (Chapter 15)

> 📄 Original scan: [0028.jpg](../../../Raw/Statistics/Chapter-15-Statistical-Inference-Testing-of-Hypotheses/0028.jpg) · printed page 266

(iv) Critical region: The critical region depends upon the alternative hypothesis $H_1$. For three forms of $H_1$, the rejection regions are:

(a) When $H_1$ is $p_1 - p_2 = 0$ or $p_1 = p_2$, the rejection region is taken in both ends of the sampling distribution. The critical values are $-Z_{\alpha/2}$ and $+Z_{\alpha/2}$. The values greater than $+Z_{\alpha/2}$ and less than $-Z_{\alpha/2}$ form the rejection region. The values which lie between $-Z_{\alpha/2}$ and $+Z_{\alpha/2}$ form the acceptance region. $H_0$ is rejected if $Z < -Z_{\alpha/2}$ or $Z > +Z_{\alpha/2}$. When $H_0$ is $p_1 - p_2 = 0$, then it does not make any difference whether we take $(\hat{p}_1 - \hat{p}_2)$ or $(\hat{p}_2 - \hat{p}_1)$ in the test-statistic.

(b) When $H_1$ is $p_1 - p_2 > 0$ or $p_1 > p_2$, the entire rejection region is taken in the right side of the curve. It is called one-tailed test to the right. The critical value is $Z_\alpha$ and if $Z$ lies in rejection region the hypothesis $(p_1 - p_2) \leq 0$ or $(p_1 \leq p_2)$ is rejected and $H_1 : p_1 > p_2$ is accepted. It is important to note that if $H_1$ is $p_2 > p_1$, then the difference $(\hat{p}_2 - \hat{p}_1)$ is used in the test-statistic. Thus $Z = \frac{(\hat{p}_2 - \hat{p}_1)}{\sqrt{\hat{p}_c \hat{q}_c (\frac{1}{n_1} + \frac{1}{n_2})}}$.

The rejection region is $Z > Z_\alpha$.

(c) When $H_1$ is $(p_1 - p_2) < 0$ (or $p_1 < p_2$), the rejection region equal to $\alpha$ is taken in the extreme left side. The critical value is $-Z_\alpha$ and the hypothesis $H_0 : (p_1 - p_2) \geq 0$ is rejected and $H_1 : (p_1 - p_2) < 0$ is accepted. The critical region is $Z < -Z_\alpha$.

(v) Computation: The value of $Z$ is calculated by using the formula.

(vi) Conclusion: The null hypothesis is rejected if the calculated value of $Z$ lies in rejection region. If $Z$ lies in acceptance region, the null hypothesis is accepted.

**Example 15.26.**

The cigarette-manufacturing firm distributes two brands of cigarettes. It is found that 56 of 200 smokers prefer brand 'A' and that 30 of 150 smokers prefer brand 'B'. Test the hypothesis at 0.05 level of significance that brand 'A' outsells brand 'B' by 10% against the alternative hypothesis that the difference is less than 10 %.

**Solution:**

(i) Null hypothesis: $H_0 : p_1 - p_2 \geq 0.10$ and Alternative hypothesis: $H_1 : p_1 - p_2 < 0.10$

(ii) Level of significance: $\alpha = 0.05$

(iii) Test - statistic: $Z = \frac{(\hat{p}_1 - \hat{p}_2) - (p_1 - p_2)}{\sqrt{\frac{\hat{p}_1 \hat{q}_1}{n_1} + \frac{\hat{p}_2 \hat{q}_2}{n_2}}}$

(iv) Critical region: $Z < -1.645$
(From the area table of normal distribution, we have $-Z_\alpha = -Z_{0.05} = -1.645$)

(v) Computations: Here, $n_1 = 200, X_1 = 56$ (No. of smokers who prefer brand A),
$n_2 = 150, X_2 = 30$ (No. of smokers who prefer brand B),
$\hat{p}_1 = \frac{X_1}{n_1} = \frac{56}{200} = 0.28, \hat{q}_1 = 1 - \hat{p}_1 = 0.72,$
$\hat{p}_2 = \frac{X_2}{n_2} = \frac{30}{150} = 0.2, \hat{q}_2 = 1 - \hat{p}_2 = 0.8,$ and hence
