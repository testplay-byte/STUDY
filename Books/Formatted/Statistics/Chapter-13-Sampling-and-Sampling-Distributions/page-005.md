---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-6
chapter_folder: Chapter-13-Sampling-and-Sampling-Distributions
chapter_number: 13
chapter_title: "Sampling and Sampling Distributions"
page_image: 5
page_printed: 159
section: 13.21 SAMPLING WITHOUT REPLACEMENT; 13.22 COMBINATIONS; 13.23 PERMUTATIONS; 13.24 SIMPLE RANDOM SAMPLE
exercise: null
content_type: theory
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-13-Sampling-and-Sampling-Distributions/0005.jpg
converted_at: "2026-10-01"
converted_by: "agent-S6a (glm-vision)"
notes: "Offset check: printed p.159 = image 5 + 154 (header folio, top-right). Table-1 (with-replacement samples of the 5-bulb example from 13.20) opens the page; caption printed as 'Table-1' without a period. Page ends mid-sentence in 13.24 ('...is not to be compared with the') — continues on next page."
---

# Page 5 — Sampling and Sampling Distributions (Chapter 13)

> 📄 Original scan: [0005.jpg](../../../Raw/Statistics/Chapter-13-Sampling-and-Sampling-Distributions/0005.jpg) · printed page 159

**Table-1**

| | G₁ | G₂ | G₃ | D₁ | D₂ |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **G₁** | G₁G₁ | G₁G₂ | G₁G₃ | G₁D₁ | G₁D₂ |
| **G₂** | G₂G₁ | G₂G₂ | G₂G₃ | G₂D₁ | G₂D₂ |
| **G₃** | G₃G₁ | G₃G₂ | G₃G₃ | G₃D₁ | G₃D₂ |
| **D₁** | D₁G₁ | D₁G₂ | D₁G₃ | D₁D₁ | D₁D₂ |
| **D₂** | D₂G₁ | D₂G₂ | D₂G₃ | D₂D₁ | D₂D₂ |

The number of samples is given by $N^n = 5^2 = 25$. The selected sample will be any one of the 25 possible samples. Each sample has equal probability $1/25$ of selection. A sample selected in this manner is called simple random sample.

## 13.21. SAMPLING WITHOUT REPLACEMENT

Sampling is called *without replacement* when a unit is selected at random from the population and it is not returned to the main lot. First unit is selected out of a population of size N and the second unit is selected out of the remaining population of N – 1 units and so on. Thus the size of the population goes on decreasing as the sample size n increases. The sample size n cannot exceed the population size N. The unit once selected for a sample cannot be repeated in the same sample. Thus all the units of the sample are distinct from one another. A sample *without replacement* can be selected either by using the idea of permutations or combinations. Depending upon the situation, we write all possible permutations or combinations. If the different arrangements of the units are to be considered, then the permutations (arrangements) are written to get all possible samples. If the arrangement of units is of no interest, we write the combinations to get all possible samples.

## 13.22. COMBINATIONS

Let us again consider a lot ( population ) of 5 bulbs with 3 good ($G_1, G_2$ and $G_3$) and 2 defective ($D_1$ and $D_2$) bulbs. Suppose we have to select two bulbs in any order, there are ${}^5C_2 = \frac{5!}{2!\,3!} = 10$ possible *combinations or samples*. These *combinations* (samples) are listed as: $G_1G_2$, $G_1G_3$, $G_1D_1$, $G_1D_2$, $G_2G_3$, $G_2D_1$, $G_2D_2$, $G_3D_1$, $G_3D_2$, $D_1D_2$.

There are 10 possible samples and each of them has probability of selection equal to $1/10$. The selected sample will be any one of these 10 samples. The sample selected in this manner is also called simple random sample. In general, the number of samples by *combinations* is equal to

$$ {}^NC_n = \frac{N!}{n!(N - n)!}. $$

## 13.23. PERMUTATIONS

Each combination generates a number of arrangements (*permutations*). Thus in general the number of *permutations* is greater than the number of combinations. In the previous example of bulbs, if the order of the selected bulbs is to be considered then the number of samples by *permutations* is given by ${}^5P_2 = \frac{5!}{(5 - 2)!} = 20$. These samples are:

| G₁G₂ | G₂G₁ | G₁G₃ | G₃G₁ | G₂G₃ | G₃G₂ | G₁D₁ | D₁G₁ | G₁D₂ | D₂G₁ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| G₂D₁ | D₁G₂ | G₂D₂ | D₂G₂ | G₃D₁ | D₁G₃ | G₃D₂ | D₂G₃ | D₁D₂ | D₂D₁ |

Each sample has probability of selection equal to $1/20$. The selected sample keeping in view the order of the bulbs will be any one of these 20 samples. A sample selected in this manner is also called simple random sample because each sample has equal probability of being selected.

## 13.24. SIMPLE RANDOM SAMPLE

Simple random sample ( SRS ) is a special case of a random sample. A sample is called *simple random sample* if each unit of the population has an equal chance of being selected for the sample. Whenever a unit is selected for the sample, the units of the population are equally likely to be selected. It must be noted that the probability of selecting the first element is not to be compared with the
