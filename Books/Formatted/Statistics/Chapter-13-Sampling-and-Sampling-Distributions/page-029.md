---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-6
chapter_folder: Chapter-13-Sampling-and-Sampling-Distributions
chapter_number: 13
chapter_title: "Sampling and Sampling Distributions"
page_image: 29
page_printed: 183
section: null
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-13-Sampling-and-Sampling-Distributions/0029.jpg
converted_at: "2026-10-01"
converted_by: "agent-S6e (glm-vision)"
notes: "Offset check: printed p.183 = image 29 + 154 (header folio, top-right). Page opens mid-solution: verification of Example 13.23 continues from p.182. Example 13.24 starts here and the page ends with its samples table (continues on p.184). Book misprints preserved verbatim: stray prime printed after 'population II' in the X2 explanation line ('population II'.'); comma printed after 'values' only for population I ('values, 2, 3') not for population II ('values 4, 5')."
---

# Page 29 — Sampling and Sampling Distributions (Chapter 13)

> 📄 Original scan: [0029.jpg](../../../Raw/Statistics/Chapter-13-Sampling-and-Sampling-Distributions/0029.jpg) · printed page 183

$$E(\hat{p}_1 - \hat{p}_2) = E(d) = \sum d f(d) = 3/9 = 1/3$$

$$Var(\hat{p}_1 - \hat{p}_2) = Var(d) = \sum d^2 f(d) - [\sum d f(d)]^2 = \frac{2}{9} - \left( \frac{1}{3} \right)^2 = \frac{2}{9} - \frac{1}{9} = \frac{1}{9}$$

**Verification:**

$$p_1 = \frac{X_1}{N_1} = \frac{2}{3} \quad \text{and} \quad q_1 = 1 - p_1 = 1 - \frac{2}{3} = \frac{1}{3}$$

where $p_1$ = proportion of even digits in population I and $X_1$ = number of even digits in population I

$$p_2 = \frac{X_2}{N_2} = \frac{1}{3} \quad \text{and} \quad q_2 = 1 - p_2 = 1 - \frac{1}{3} = \frac{2}{3}$$

where $p_2$ = proportion of even digits in population II and $X_2$ = number of even digits in population II'.

$$p_1 - p_2 = \frac{2}{3} - \frac{1}{3} = \frac{1}{3}$$

$$\frac{p_1 q_1}{n_1} \left( \frac{N_1 - n_1}{N_1 - 1} \right) + \frac{p_2 q_2}{n_2} \left( \frac{N_2 - n_2}{N_2 - 1} \right) = \frac{(2/3)(1/3)}{2} \left( \frac{3-2}{3-1} \right) + \frac{(1/3)(2/3)}{2} \left( \frac{3-2}{3-1} \right)$$

$$= \left( \frac{2}{18} \right) \left( \frac{1}{2} \right) + \left( \frac{2}{18} \right) \left( \frac{1}{2} \right) = \frac{1}{18} + \frac{1}{18} = \frac{2}{18} = \frac{1}{9}$$

Hence (i) $E(\hat{p}_1 - \hat{p}_2) = p_1 - p_2 = \frac{1}{3}$ and (ii) $Var(\hat{p}_1 - \hat{p}_2) = \frac{p_1 q_1}{n_1} \left( \frac{N_1 - n_1}{N_1 - 1} \right) + \frac{p_2 q_2}{n_2} \left( \frac{N_2 - n_2}{N_2 - 1} \right) = \frac{1}{9}$

**Example 13.24.**

Let $\hat{p}_1$ represent the proportion of odd numbers in a random sample of size $n_1 = 2$ with replacement from a finite population consisting of values, 2, 3. Similarly, let $\hat{p}_2$ represent the proportion of odd numbers in a random sample of size $n_2 = 2$ with replacement from another finite population consisting of values 4, 5. Form a sampling distribution of $\hat{p}_1 - \hat{p}_2$. Verify that:

(i) $\mu_{\hat{p}_1 - \hat{p}_2} = p_1 - p_2$ (ii) $\sigma_{\hat{p}_1 - \hat{p}_2} = \sqrt{\frac{p_1 q_1}{n_1} + \frac{p_2 q_2}{n_2}}$

**Solution:**

| We have population I: 2,3 | Population II: 4,5 |
| :--- | :--- |
| Population size $N_1 = 2$ | Population size $N_2 = 2$ |
| Sample size $n_1 = 2$ | Sample size $n_2 = 2$ |
| The number of possible samples which can be drawn with replacement is $N_1^{n_1} = 2^2 = 4$. | The number of possible samples which can be drawn with replacement is $N_2^{n_2} = 2^2 = 4$. |

| From Population I | | | From Population II | | |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Sample No.** | **Sample Values** | **Sample Proportion ($\hat{p}_1$)** | **Sample No.** | **Sample Values** | **Sample Proportion ($\hat{p}_2$)** |
| 1 | 2, 2 | 0 | 1 | 4, 4 | 0 |
| 2 | 2, 3 | 0.5 | 2 | 4, 5 | 0.5 |
| 3 | 3, 2 | 0.5 | 3 | 5, 4 | 0.5 |
| 4 | 3, 3 | 1.0 | 4 | 5, 5 | 1.0 |
