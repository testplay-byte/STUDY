---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-3
chapter_folder: Chapter-10-Random-Variable-and-Probability-Distributions
chapter_number: 10
chapter_title: Random Variable and Probability Distributions
page_image: 8
page_printed: 68
section: null
exercise: null
content_type: worked-examples
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-10-Random-Variable-and-Probability-Distributions/0008.jpg
converted_at: "2026-10-01"
converted_by: "agent-S3a (glm-vision)"
notes: "Offset check: printed p.68 = image 8 + 60 (header folio). Book misprint preserved: P(X = 1) line prints 'first defective bulbs and second good bulb' (plural 'bulbs' as printed). Page ends cleanly with the Example 10.7 distribution table. | TYPO-CORRECTION PASS (2026-10-06, user mandate): unambiguous surface typo(s) corrected in the body per correction policy v4.4 — printed forms remain documented earlier in this note and itemised in docs/tracking/CORRECTIONS-LOG.md."
---

# Page 8 — Random Variable and Probability Distributions (Chapter 10)

> 📄 Original scan: [0008.jpg](../../../Raw/Statistics/Chapter-10-Random-Variable-and-Probability-Distributions/0008.jpg) · printed page 68

**Example 10.6.**

A factory is producing bulbs out of which 25% are defective. Two bulbs are selected at random from this factory for inspection. Write the probability distribution of number of defective bulbs.

**Solution:** Let X denote the number of defective bulbs. Here D for defective bulb and G for good bulb, therefore

$$P(D) = \frac{25}{100} = \frac{1}{4} \quad \text{and} \quad P(G) = \frac{75}{100} = \frac{3}{4}$$

The two bulbs are selected independently because there are very large number of bulbs in the factory. According to multiplication law of probability for independent events, we have

$$P(X = 0) = P(\text{both good bulbs}) = P(\text{none defective bulb})$$

$$= P(G_1G_2) = P(G_1)P(G_2) = \left(\frac{3}{4}\right)\left(\frac{3}{4}\right) = \frac{9}{16}$$

$$P(X = 1) = P(\text{first defective bulb and second good bulb})$$

$$+ P(\text{first good bulb and second defective bulb})$$

$$= P(D_1G_2) + P(G_1D_2) = P(D_1)P(G_2) + P(G_1)P(D_2)$$

$$= \left(\frac{1}{4}\right)\left(\frac{3}{4}\right) + \left(\frac{3}{4}\right)\left(\frac{1}{4}\right) = \frac{3}{16} + \frac{3}{16} = \frac{6}{16}$$

$$P(X = 2) = P(\text{both defective bulbs}) = P(D_1D_2) = P(D_1)P(D_2) = \left(\frac{1}{4}\right)\left(\frac{1}{4}\right) = \frac{1}{16}$$

The above information can be collected as below in the form of a probability distribution of the random variable X.

| x | 0 | 1 | 2 | Total |
| :---: | :---: | :---: | :---: | :---: |
| p(x) | 9/16 | 6/16 | 1/16 | 1 |

**Example 10.7.**

A family has three children. If the genders of these children are listed in the order they are born, there are eight possible outcomes: BBB, BBG, BGB, BGG, GBB, GBG, GGB and GGG. Assume these outcomes are equally likely. Let X represent the number of children that are girls. Find the probability distribution of X.

**Solution:** The possible outcomes, the random variable X and the corresponding probabilities are put in the following table.

| Outcomes ( S ) | Number of Girls ( Random variable ) | Probability |
| :--- | :---: | :---: |
| BBB | 0 | 1/8 |
| BBG, BGB, GBB | 1 | 3/8 |
| BGG, GBG, GGB | 2 | 3/8 |
| GGG | 3 | 1/8 |

The probability distribution of number of girls in a tabular form is:

| x | 0 | 1 | 2 | 3 | Total |
| :---: | :---: | :---: | :---: | :---: | :---: |
| p(x) | 1/8 | 3/8 | 3/8 | 1/8 | 1 |
