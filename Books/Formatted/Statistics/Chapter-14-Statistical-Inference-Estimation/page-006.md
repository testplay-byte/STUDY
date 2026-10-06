---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-7
chapter_folder: Chapter-14-Statistical-Inference-Estimation
chapter_number: 14
chapter_title: "Statistical Inference Estimation"
page_image: 6
page_printed: 208
section: 14.14 MEANING OF THE CONFIDENCE INTERVAL
exercise: null
content_type: mixed
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-14-Statistical-Inference-Estimation/0006.jpg
converted_at: "2026-10-06"
converted_by: "agent-21a (glm-vision)"
notes: "Offset check: printed p.208 = image 6 + 202 (header folio, top-left; even page). Page = section 14.14 theory + start of Example 14.1 (solution (a) worked to '772.16 < mu < 787.84'; continues on next page). Scan artifact: a finger visible on the left scan edge obscures no text. 'survival is, say 0.90' punctuation as printed."
---

# Page 6 — Statistical Inference Estimation (Chapter 14)

> 📄 Original scan: [0006.jpg](../../../Raw/Statistics/Chapter-14-Statistical-Inference-Estimation/0006.jpg) · printed page 208

## 14.14 MEANING OF THE CONFIDENCE INTERVAL

Let us consider $95\%$ confidence interval for $\mu$. The interval has $L = \bar{X} - 1.96 \frac{\sigma}{\sqrt{n}}$ and $U = \bar{X} + 1.96 \frac{\sigma}{\sqrt{n}}$.

The probability is $0.95$ that the random interval $(L, U)$ contains the unknown parameter $\mu$. This means that if samples of size $n$ were repeatedly taken from the population and if the random confidence interval $\left(\bar{X}-1.96\frac{\sigma}{\sqrt{n}}, \bar{X}+1.96\frac{\sigma}{\sqrt{n}}\right)$ were computed for each sample, then $95$ out of $100$ such intervals would in the long run contain the unknown parameter $\mu$.

When we construct $95\%$ confidence interval, then there are $5\%$ chances that we shall get an interval which will not cover the value of $\mu$. Suppose $\bar{X}=80$, $\sigma=24$ and $n=36$. Let us put these values in $95\%$ confidence interval, we get

$$\bar{X} - 1.96 \frac{\sigma}{\sqrt{n}} = 80 - 1.96 \frac{24}{\sqrt{36}} = 80 - 7.84 = 72.16$$

and $$\bar{X} + 1.96 \frac{\sigma}{\sqrt{n}} = 80 + 1.96 \frac{24}{\sqrt{36}} = 80 + 7.84 = 87.84$$

For a specified random sample, the $95\%$ confidence interval for $\mu$ is ($72.16$ to $87.84$). We call it $95\%$ confidence interval. At this stage we cannot say that probability is $0.95$ that the interval ($72.16, 87.84$) contains the value of $\mu$. Before tossing a die, we say that probability is $1/6$ that $4$ will come on the die. But when a die has been tossed and the face $4$ has been observed or it has not been observed then we are not in a situation of probability. Now we cannot say that probability of getting $4$ on the die is $1/6$. If $2\%$ of the drivers on the average violate the traffic rules, then the probability is $2/100=0.02$ that a driver will violate the rules. But when a driver has made a mistake and he has been arrested, now he has no concern with the probability of $0.02$. Probability is for uncertain situations. When something has happened or it has not happened, it is now ridiculous to talk about the probability of its happening. When Mr. A has died, we do not say that probability of his survival is, say $0.90$ when a confidence interval has been constructed from the sample data, it is now something which has happened or which has been determined. The different possibilities are not involved now. The calculated interval is now not a random variable. It is the realized value of the random interval.

**Example 14.1.**

(a) An electrical firm manufactures light bulbs that have a length of life with mean $\mu$ and a standard deviation of $40$ hours. If a sample of $100$ bulbs has an average life of $780$ hours, find a $95\%$ confidence interval for the population mean of all bulbs produced by this firm.

(b) A random sample of size $n = 400$, selected without replacement from a population of size $N = 2000$ with $\sigma = 4$, the sample mean is found to be $\bar{X} = 80$. Construct a $90\%$ confidence interval for the true mean of the population.

**Solution:**

(a) A $100(1-\alpha)\%$ confidence interval for $\mu$ is

$$\bar{X} - Z_{\alpha/2}\frac{\sigma}{\sqrt{n}} < \mu < \bar{X} + Z_{\alpha/2}\frac{\sigma}{\sqrt{n}}$$

Here, $\bar{X} = 780$, $\sigma = 40$, $n = 100$, $1-\alpha = 0.95$ or $\alpha = 0.05$ and $\frac{\alpha}{2} = 0.025$

From the area table of normal distribution, we have $Z_{\alpha/2} = Z_{0.025} = 1.96$

Hence the $95\%$ confidence interval for $\mu$ is

$$780 - 1.96\left(\frac{40}{\sqrt{100}}\right) < \mu < 780 + 1.96\left(\frac{40}{\sqrt{100}}\right)$$

$$780 - 7.84 < \mu < 780 + 7.84$$

$$772.16 < \mu < 787.84$$
