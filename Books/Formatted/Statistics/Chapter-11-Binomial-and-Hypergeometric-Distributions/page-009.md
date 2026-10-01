---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-4
chapter_folder: Chapter-11-Binomial-and-Hypergeometric-Distributions
chapter_number: 11
chapter_title: "Binomial and Hypergeometric Distributions"
page_image: 9
page_printed: 103
section: null
exercise: null
content_type: theory
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-11-Binomial-and-Hypergeometric-Distributions/0009.jpg
converted_at: "2026-10-01"
converted_by: "agent-S4b (glm-vision)"
notes: "Offset check: printed p.103 = image 9 + 94 (header folio, top-right; odd page). Page opens with the continuation of Example 11.11's E(X^2) derivation (broke off at foot of printed p.102), completes Var(X) = npq and the S.D(X) = sqrt(npq) line, then gives a bold 'Alternative method' derivation of E(X), E(X^2), Var(X) and S.D(X), which finishes on this page. 'Alternative method' is an unnumbered bold label, not a numbered section heading — page has no printed section headings. No figures; no illegible spots or defects."
---

# Page 9 — Binomial and Hypergeometric Distributions (Chapter 11)

> 📄 Original scan: [0009.jpg](../../../Raw/Statistics/Chapter-11-Binomial-and-Hypergeometric-Distributions/0009.jpg) · printed page 103

$$\begin{aligned} \mathrm{E}\left(\mathrm{X}^{2}\right) &=\mathrm{np}\left[\left\{\mathrm{q}^{\mathrm{n}-1}+(\mathrm{n}-1) \mathrm{pq}^{\mathrm{n}-2}+\frac{(\mathrm{n}-1)(\mathrm{n}-2)}{2 !} \mathrm{p}^{2} \mathrm{q}^{\mathrm{n}-3}+\frac{(\mathrm{n}-1)(\mathrm{n}-2)(\mathrm{n}-3)}{3 !} \mathrm{p}^{3} \mathrm{q}^{\mathrm{n}-4}+\ldots+\mathrm{p}^{\mathrm{n}-1}\right\}\right. \\ &\quad +\left\{(\mathrm{n}-1) \mathrm{pq}^{\mathrm{n}-2}+2 \frac{(\mathrm{n}-1)(\mathrm{n}-2)}{2 !} \mathrm{p}^{2} \mathrm{q}^{\mathrm{n}-3}+3 \frac{(\mathrm{n}-1)(\mathrm{n}-2)(\mathrm{n}-3)}{3 !} \mathrm{p}^{3} \mathrm{q}^{\mathrm{n}-4}+\ldots+(\mathrm{n}-1) \mathrm{p}^{\mathrm{n}-1}\right\}] \\ &=\mathrm{np}\left[(\mathrm{q}+\mathrm{p})^{\mathrm{n}-1}+(\mathrm{n}-1) \mathrm{p}\left\{\mathrm{q}^{\mathrm{n}-2}+(\mathrm{n}-2) \mathrm{pq}^{\mathrm{n}-3}+\frac{(\mathrm{n}-2)(\mathrm{n}-3)}{2 !} \mathrm{p}^{2} \mathrm{q}^{\mathrm{n}-4}+\ldots+\mathrm{p}^{\mathrm{n}-2}\right\}\right] \\ &=\mathrm{np}\left[(\mathrm{q}+\mathrm{p})^{\mathrm{n}-1}+(\mathrm{n}-1) \mathrm{p}\left\{\mathrm{q}^{\mathrm{n}-2}+\binom{\mathrm{n}-2}{1} \mathrm{pq}^{\mathrm{n}-3}+\binom{\mathrm{n}-2}{2} \mathrm{p}^{2} \mathrm{q}^{\mathrm{n}-4}+\ldots+\mathrm{p}^{\mathrm{n}-2}\right\}\right] \\ &=\mathrm{np}\left[(\mathrm{q}+\mathrm{p})^{\mathrm{n}-1}+(\mathrm{n}-1) \mathrm{p}(\mathrm{q}+\mathrm{p})^{\mathrm{n}-2}\right]=\mathrm{np}\left[(1)^{\mathrm{n}-1}+(\mathrm{n}-1) \mathrm{p}(1)^{\mathrm{n}-2}\right] \\ &=\mathrm{np}[1+(\mathrm{n}-1) \mathrm{p}]=\mathrm{np}[1+\mathrm{np}-\mathrm{p}]=\mathrm{np}+\mathrm{n}^{2} \mathrm{p}^{2}-\mathrm{np}^{2} \end{aligned}$$

$$\begin{aligned} \operatorname{Var}(\mathrm{X}) &=\sigma^{2}=\mathrm{E}\left(\mathrm{X}^{2}\right)-[\mathrm{E}(\mathrm{X})]^{2}=\mathrm{np}+\mathrm{n}^{2} \mathrm{p}^{2}-\mathrm{np}^{2}-(\mathrm{np})^{2}=\mathrm{np}+\mathrm{n}^{2} \mathrm{p}^{2}-\mathrm{np}^{2}-\mathrm{n}^{2} \mathrm{p}^{2} \\ &=\mathrm{np}-\mathrm{np}^{2}=\mathrm{np}(1-\mathrm{p})=\mathrm{npq} \end{aligned}$$

$$\text{S.D(X)} = \sigma = \sqrt{\text{npq}}$$

**Alternative method**

The binomial random variable X with parameters n and p has the probability distribution

$$\mathrm{P}[\mathrm{X}=\mathrm{x}]=\mathrm{b}(\mathrm{x}; \mathrm{n}, \mathrm{p})=\binom{\mathrm{n}}{\mathrm{x}} \mathrm{p}^{\mathrm{x}} \mathrm{q}^{\mathrm{n}-\mathrm{x}} \quad \text{for } \mathrm{x}=0,1,2,3, \ldots, \mathrm{n}.$$

$$\begin{aligned} \mathrm{E}(\mathrm{X}) &=\sum_{\mathrm{x}=0}^{\mathrm{n}} \mathrm{x p}(\mathrm{x})=\sum_{\mathrm{x}=0}^{\mathrm{n}} \mathrm{x}\binom{\mathrm{n}}{\mathrm{x}} \mathrm{p}^{\mathrm{x}} \mathrm{q}^{\mathrm{n}-\mathrm{x}}=\sum_{\mathrm{x}=0}^{\mathrm{n}} \mathrm{x} \frac{\mathrm{n} !}{\mathrm{x} !(\mathrm{n}-\mathrm{x}) !} \mathrm{p}^{\mathrm{x}} \mathrm{q}^{\mathrm{n}-\mathrm{x}} \\ &=\sum_{\mathrm{x}=0}^{\mathrm{n}} \mathrm{x} \frac{\mathrm{n}(\mathrm{n}-1) !}{\mathrm{x}(\mathrm{x}-1) !(\mathrm{n}-\mathrm{x}) !} \mathrm{pp}^{\mathrm{x}-1} \mathrm{q}^{\mathrm{n}-\mathrm{x}}=\mathrm{np} \sum_{\mathrm{x}=1}^{\mathrm{n}} \frac{(\mathrm{n}-1) !}{(\mathrm{x}-1) !(\mathrm{n}-\mathrm{x}) !} \mathrm{p}^{\mathrm{x}-1} \mathrm{q}^{\mathrm{n}-\mathrm{x}} \\ &=\mathrm{np} \sum_{\mathrm{x}=1}^{\mathrm{n}} \binom{\mathrm{n}-1}{\mathrm{x}-1} \mathrm{p}^{\mathrm{x}-1} \mathrm{q}^{\mathrm{n}-\mathrm{x}}=\mathrm{np}\left[\mathrm{q}^{\mathrm{n}-1}+\binom{\mathrm{n}-1}{1} \mathrm{pq}^{\mathrm{n}-2}+\binom{\mathrm{n}-1}{2} \mathrm{p}^{2} \mathrm{q}^{\mathrm{n}-3}+\ldots+\mathrm{p}^{\mathrm{n}-1}\right] \\ &=\mathrm{np}[(\mathrm{q}+\mathrm{p})^{\mathrm{n}-1}]=\mathrm{np}[(1)^{\mathrm{n}-1}]=\mathrm{np} \end{aligned}$$

$$\mathrm{E}\left(\mathrm{X}^{2}\right)=\mathrm{E}[\mathrm{X}(\mathrm{X}-1)]+\mathrm{E}(\mathrm{X})=\mathrm{E}[\mathrm{X}(\mathrm{X}-1)]+\mathrm{np}$$

Where $\mathrm{E}[\mathrm{X}(\mathrm{X}-1)]=\sum_{\mathrm{x}=0}^{\mathrm{n}} \mathrm{x}(\mathrm{x}-1) \mathrm{p}(\mathrm{x})=\sum_{\mathrm{x}=0}^{\mathrm{n}} \mathrm{x}(\mathrm{x}-1)\binom{\mathrm{n}}{\mathrm{x}} \mathrm{p}^{\mathrm{x}} \mathrm{q}^{\mathrm{n}-\mathrm{x}}$

$$\begin{aligned} &=\sum_{\mathrm{x}=0}^{\mathrm{n}} \mathrm{x}(\mathrm{x}-1) \frac{\mathrm{n} !}{\mathrm{x} !(\mathrm{n}-\mathrm{x}) !} \mathrm{p}^{\mathrm{x}} \mathrm{q}^{\mathrm{n}-\mathrm{x}} \\ &=\sum_{\mathrm{x}=0}^{\mathrm{n}} \mathrm{x}(\mathrm{x}-1) \frac{\mathrm{n}(\mathrm{n}-1)(\mathrm{n}-2) !}{\mathrm{x}(\mathrm{x}-1)(\mathrm{x}-2) !(\mathrm{n}-\mathrm{x}) !} \mathrm{p}^{2} \mathrm{p}^{\mathrm{x}-2} \mathrm{q}^{\mathrm{n}-\mathrm{x}} \\ &=\mathrm{n}(\mathrm{n}-1) \mathrm{p}^{2} \sum_{\mathrm{x}=2}^{\mathrm{n}} \frac{(\mathrm{n}-2) !}{(\mathrm{x}-2) !(\mathrm{n}-\mathrm{x}) !} \mathrm{p}^{\mathrm{x}-2} \mathrm{q}^{\mathrm{n}-\mathrm{x}} \\ &=\mathrm{n}(\mathrm{n}-1) \mathrm{p}^{2} \sum_{\mathrm{x}=2}^{\mathrm{n}} \binom{\mathrm{n}-2}{\mathrm{x}-2} \mathrm{p}^{\mathrm{x}-2} \mathrm{q}^{\mathrm{n}-\mathrm{x}} \\ &=\mathrm{n}(\mathrm{n}-1) \mathrm{p}^{2}\left[\mathrm{q}^{\mathrm{n}-2}+\binom{\mathrm{n}-2}{1} \mathrm{pq}^{\mathrm{n}-3}+\binom{\mathrm{n}-2}{2} \mathrm{p}^{2} \mathrm{q}^{\mathrm{n}-4}+\ldots+\mathrm{p}^{\mathrm{n}-2}\right] \\ &=\mathrm{n}(\mathrm{n}-1) \mathrm{p}^{2}\left[(\mathrm{q}+\mathrm{p})^{\mathrm{n}-2}\right]=\mathrm{n}(\mathrm{n}-1) \mathrm{p}^{2}\left[(1)^{\mathrm{n}-2}\right]=\mathrm{n}(\mathrm{n}-1) \mathrm{p}^{2} \end{aligned}$$

So, $\mathrm{E}\left(\mathrm{X}^{2}\right)=\mathrm{n}(\mathrm{n}-1) \mathrm{p}^{2}+\mathrm{np}=\mathrm{n}^{2} \mathrm{p}^{2}-\mathrm{np}^{2}+\mathrm{np}$

$$\begin{aligned} \operatorname{Var}(\mathrm{X}) &=\sigma^{2}=\mathrm{E}\left(\mathrm{X}^{2}\right)-[\mathrm{E}(\mathrm{X})]^{2}=\mathrm{n}^{2} \mathrm{p}^{2}-\mathrm{np}^{2}+\mathrm{np}-(\mathrm{np})^{2} \\ &=\mathrm{n}^{2} \mathrm{p}^{2}-\mathrm{np}^{2}+\mathrm{np}-\mathrm{n}^{2} \mathrm{p}^{2}=\mathrm{np}-\mathrm{np}^{2}=\mathrm{np}(1-\mathrm{p})=\mathrm{npq} \end{aligned}$$

$$\text{S.D(X)} = \sigma = \sqrt{\text{npq}}$$
