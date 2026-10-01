---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-3
chapter_folder: Chapter-10-Random-Variable-and-Probability-Distributions
chapter_number: 10
chapter_title: Random Variable and Probability Distributions
page_image: 2
page_printed: 62
section: "10.4 USES OF RANDOM NUMBERS TABLE"
exercise: null
content_type: theory
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-10-Random-Variable-and-Probability-Distributions/0002.jpg
converted_at: "2026-10-01"
converted_by: "agent-S3a (glm-vision)"
notes: "Offset check: printed p.62 = image 2 + 60 (header folio). Book typo preserved: '(ii) Consecutively number of items on the list' (grammar as printed). The ten-digit coin table announced by 'reproduced below' is printed on the next page, not this one."
---

# Page 2 — Random Variable and Probability Distributions (Chapter 10)

> 📄 Original scan: [0002.jpg](../../../Raw/Statistics/Chapter-10-Random-Variable-and-Probability-Distributions/0002.jpg) · printed page 62

The first “testing” of random numbers for statistical randomness was developed by M.G. Kendall and B. Babington Smith in the late 1930s, and was based upon looking for certain types of probabilistic expectations in a given sequence. The simplest test looked to make sure that roughly equal numbers of 1s, 2s, 3s, etc. were present; more complicated tests looked for the number of digits between successive 0s and compared the total counts with their expected probabilities. Over the years more complicated tests were developed. Kendall and Smith also created the notion of “local randomness”, whereby a given set of random numbers would be broken down and tested in segments. In their set of 100,000 numbers, for example, two of the thousands were somewhat less “locally random” than the rest, but the set as a whole would pass its tests. Kendall and Smith advised their readers not to use those particular thousands by themselves as a consequence.

## 10.4. USES OF RANDOM NUMBERS TABLE

Random number tables have been used in statistics for tasks such as selected random samples. This was much more effective than manually selecting the random samples ( with dice, cards, etc. ) Nowadays, tables of random numbers have been replaced by computational random number generators.

If carefully prepared, the filtering and testing processes remove any noticeable bias or asymmetry from the hardware-generated original numbers so that such tables provide the most “reliable” random numbers available to the casual user. Note that any published ( or otherwise accessible ) random data table is unsuitable for cryptographic purposes since the accessibility of the numbers makes them effectively predictable, and hence their effect on a cryptosystem is also predictable. By way of contrast, genuinely random numbers that are only accessible to the intended encoder and decoder allow literally unbreakable encryption of a similar or lesser amount of meaningful data ( using a simple exclusive OR operation ) in a method known as the one-time pad; which has often insurmountable problems that are barriers to implementing this method correctly.

To illustrate the use of a random number table, let us suppose that a large department store wishes to select a random sample of 20 customers from a list of 850 customers with charge accounts. The purpose of the sample may be to estimate frequency of purchases, to ascertain why people open charge accounts, to determine the average amount purchased or to uncover complaints about the system. The customers may be listed alphabetically. The numbers 000 to 850 would be assigned consecutively to the list from top to bottom. Since the item identification is a three digit number, it will be necessary to read three-digit numbers from a random number table so that we can achieve correspondence between the random numbers and the listed numbers. Any three-digit sequence read from a random number table will do. Let us use Table-1 and read the last three digits in the last column of the table, going down the column. Those digits are 945, 665, 606, 659, 833, 170,... When we come to a number such as 945, we simply discard it because our population only goes to 850. We would also ignore any previously selected numbers that appeared more than once. The process is continued until we have read 20 numbers. These correspond to 20 items from our population. Once we have the 20 numbers, we can refer to our list and select those 20 for further study.

In sum, to use a random number table:

(i) Obtain a list of the items in the population.
(ii) Consecutively number of items on the list, beginning with zero ( 0,00, 000, etc ).
(iii) Read numbers from a random number table such that the number of digits in each one equals the number of digits of the last numbered item on your list.
(iv) Omit any numbers that do not correspond to numbers on the list or that repeat previously selected numbers from the table. Continue until the desired number of observations have been obtained.
(v) Use those random numbers to identify the items from the list to include in the sample.

Random number table can also be used to generate data without performing the actual experiment. Suppose we want to toss a coin 10 times to see the number of heads. We can do it by

(i) Tossing the coin and counting the number of heads.
(ii) By using random number table. The even digits 0, 2, 4, 6, 8 will stand for the head and the odd digits 1, 3, 5, 7, 9 will be for the tail. The first ten digits of the first column of Table-1 are reproduced below. H is for head and T is for tail.
