---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-6
chapter_folder: Chapter-13-Sampling-and-Sampling-Distributions
chapter_number: 13
chapter_title: "Sampling and Sampling Distributions"
page_image: 27
page_printed: 181
section: "13.38 SAMPLING DISTRIBUTION OF DIFFERENCE BETWEEN p̂1 and p̂2"
exercise: null
content_type: mixed
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-13-Sampling-and-Sampling-Distributions/0027.jpg
converted_at: "2026-10-01"
converted_by: "agent-S6d (glm-vision)"
notes: "Offset check: printed p.181 = image 27 + 154 (header folio, top-right). Examples 13.21 and 13.22 start and complete on this page; section 13.38 begins here and its properties list ends the page. Book typos preserved verbatim: 'The president take n = 400 questionnaires' (missing s) and 'public finding' (for funding). Inconsistent print preserved: '80%' (no space) vs '20 %' (space); 'S.E(p̂)' in 13.21 vs 'S.E.(p̂)' in 13.22; heading prints lowercase 'and' between p̂1 and p̂2. | TYPO-CORRECTION PASS (2026-10-06, user mandate): unambiguous surface typo(s) corrected in the body per correction policy v4.4 — printed forms remain documented earlier in this note and itemised in docs/tracking/CORRECTIONS-LOG.md."
---

# Page 27 — Sampling and Sampling Distributions (Chapter 13)

> 📄 Original scan: [0027.jpg](../../../Raw/Statistics/Chapter-13-Sampling-and-Sampling-Distributions/0027.jpg) · printed page 181

**Example 13.21.**

(i) A small society has $N = 4500$ members. The president takes $n = 400$ questionnaires to a random sample without replacement. If $p = 0.7$ then find mean and variance of the sampling distribution of sample proportion ( $\hat{p}$ ). Here $p$ = population proportion and $\hat{p}$ = sample proportion.

(ii) Suppose that 80% of a city population favours public funding for a proposed recreational facility. If 150 persons are to be randomly selected and interviewed, what is the mean and standard error of the sample proportion favouring this issue?

**Solution:** The necessary calculations are given below:

(i) Here, $N = 4500$, $n = 400$, $p = 0.7$ and $q = 1 - p = 0.3$. Therefore

$E(\hat{p}) = \mu_{\hat{p}} = p = 0.7$ and $\mathrm{Var}(\hat{p}) = \sigma_{\hat{p}}^2 = \frac{pq}{n}\left(\frac{N-n}{N-1}\right) = \frac{(0.7)(0.3)}{400}\left(\frac{4500-400}{4500-1}\right) = 0.00048$

(ii) Here, $p = 0.80$, $q = 1 - p = 0.20$ and $n = 150$. Therefore

$E(\hat{p}) = \mu_{\hat{p}} = p = 0.80$ and $\mathrm{S.E}(\hat{p}) = \sigma_{\hat{p}} = \sqrt{\frac{pq}{n}} = \sqrt{\frac{(0.80)(0.20)}{150}} = 0.0327$

**Example 13.22.**

If samples of $n = 200$ observations are to be drawn from a large population $N = 2500$ in which the population proportion is 20 %. Determine the expected mean and standard deviation of the sampling distribution of proportions when sampling is done (i) with replacement (ii) without replacement.

**Solution:** Here, $N = 2500$, $n = 200$, $p = 0.20$ and $q = 1 - p = 1 - 0.20 = 0.80$. Therefore

(i) When sampling is done with replacement, then

$E(\hat{p}) = p = 0.20$ and $\mathrm{S.E.}(\hat{p}) = \sqrt{\frac{pq}{n}} = \sqrt{\frac{(0.20)(0.80)}{200}} = 0.0283$

(ii) When sampling is done without replacement, then

$E(\hat{p}) = p = 0.20$ and $\mathrm{S.E.}(\hat{p}) = \sqrt{\frac{pq}{n}\left(\frac{N-n}{N-1}\right)} = \sqrt{\frac{(0.20)(0.80)}{200}\left(\frac{2500-200}{2500-1}\right)} = 0.0271$

## 13.38. SAMPLING DISTRIBUTION OF DIFFERENCE BETWEEN $\hat{p}_1$ and $\hat{p}_2$

Suppose there are two populations with proportions $p_1$ and $p_2$ and all possible simple random samples of size $n_1$ and $n_2$ are selected from the populations respectively. The sample proportions calculated from the samples are $\hat{p}_1$ and $\hat{p}_2$. The difference $\hat{p}_1 - \hat{p}_2$ is a random variable and its distribution is called the sampling distribution of $\hat{p}_1 - \hat{p}_2$. The sampling distribution of $\hat{p}_1 - \hat{p}_2$ has the following properties:

(i) $E(\hat{p}_1 - \hat{p}_2) = p_1 - p_2$ (with or without replacement)

(ii) (a) $\mathrm{Var}(\hat{p}_1 - \hat{p}_2) = \frac{p_1q_1}{n_1} + \frac{p_2q_2}{n_2}$ (with replacement)

(b) $\mathrm{Var}(\hat{p}_1 - \hat{p}_2) = \frac{p_1q_1}{n_1}\left(\frac{N_1-n_1}{N_1-1}\right) + \frac{p_2q_2}{n_2}\left(\frac{N_2-n_2}{N_2-1}\right)$ (without replacement)

(iii) (a) $\mathrm{S.E}(\hat{p}_1 - \hat{p}_2) = \sqrt{\frac{p_1q_1}{n_1} + \frac{p_2q_2}{n_2}}$ (with replacement)

(b) $\mathrm{S.E}(\hat{p}_1 - \hat{p}_2) = \sqrt{\frac{p_1q_1}{n_1}\left(\frac{N_1-n_1}{N_1-1}\right) + \frac{p_2q_2}{n_2}\left(\frac{N_2-n_2}{N_2-1}\right)}$ (without replacement)
