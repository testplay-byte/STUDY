---
subject: statistics
book_title: Basic Statistics Part-II (Federal Board) — M. Saleem Akhtar, Majeed Book Depot
batch: S-9
chapter_folder: Chapter-16-Association
chapter_number: 16
chapter_title: Association
page_image: 6
page_printed: 290
section: 16.11. DEFINITION OF INDEPENDENCE
exercise: null
content_type: mixed
has_figures: false
figures_count: 0
source_image: ../../../Raw/Statistics/Chapter-16-Association/0006.jpg
converted_at: "2026-10-06"
converted_by: "agent-26a (glm-vision)"
notes: "Offset check: printed p.290 = image 6 + 284 (header folio, top-left; even page). Continuation of Example 16.5 cases (ii)-(iv) + Example 16.6 + theory 16.11 → mixed. Book quirks preserved: Example 16.6 opens 'In a certain b.g college' ('b.g' printed exactly so); a stray dot printed after '160 liked Mathematics and Physics.' (print noise — rendered 'Physics. ·'); all three consistency tables cross-checked arithmetically (consistent, incl. printed (AB) = -10 in case iii and n = 1000 in case ii). Example 16.5 case (ii) given-line carried on this page's top; 16.11 theory continues on next page. No figures, no cut-offs. | TYPO-CORRECTION PASS (2026-10-06, user mandate): unambiguous surface typo(s) corrected in the body per correction policy v4.4 — printed forms remain documented earlier in this note and itemised in docs/tracking/CORRECTIONS-LOG.md."
---

# Page 6 — Association (Chapter 16)

> 📄 Original scan: [0006.jpg](../../../Raw/Statistics/Chapter-16-Association/0006.jpg) · printed page 290

(ii) Here, $(\alpha) = 550, (\alpha\beta) = 50, (\text{B}) = 700$ and $(\text{A}\beta) = 250$. Therefore
| Attributes | A | $\alpha$ | Total |
| :--- | :--- | :--- | :--- |
| B | $(\text{AB}) = 200$ | $(\alpha\text{B}) = 500$ | $(\text{B}) = 700$ |
| $\beta$ | $(\text{A}\beta) = 250$ | $(\alpha\beta) = 50$ | $(\beta) = 300$ |
| **Total** | $(\text{A}) = 450$ | $(\alpha) = 550$ | n = 1000 |

All the ultimate class frequencies are positive, the data is called consistent.

(iii) Here, $(\text{B}) = 45, (\text{A}) = 50, (\text{A}\beta) = 60$ and $n = 115$. Therefore

| Attributes | A | $\alpha$ | Total |
| :--- | :--- | :--- | :--- |
| B | $(\text{AB}) = -10$ | $(\alpha\text{B}) = 55$ | $(\text{B}) = 45$ |
| $\beta$ | $(\text{A}\beta) = 60$ | $(\alpha\beta) = 10$ | $(\beta) = 70$ |
| **Total** | $(\text{A}) = 50$ | $(\alpha) = 65$ | n = 115 |

$(\text{AB}) = (\text{A}) - (\text{A}\beta) = 50 - 60 = -10 = (\text{B}) - (\alpha\text{B})$.

One frequency $(\text{AB})$ is negative, thus the sample data is inconsistent.

(iv) Here, $(\text{AB}) = 80, (\text{A}) = 100, (\beta) = 80$ and $(\alpha) = 100$. Therefore

| Attributes | A | $\alpha$ | Total |
| :--- | :--- | :--- | :--- |
| B | $(\text{AB}) = 80$ | $(\alpha\text{B}) = 40$ | $(\text{B}) = 120$ |
| $\beta$ | $(\text{A}\beta) = 20$ | $(\alpha\beta) = 60$ | $(\beta) = 80$ |
| **Total** | $(\text{A}) = 100$ | $(\alpha) = 100$ | n = 200 |

Hence the data is consistent, because all the ultimate class frequencies are positive.

**Example 16.6.**

In a certain b.g college, 600 students of intermediate level were interviewed. They were asked to give their opinion about liking or disliking in the subjects of Mathematics, Statistics and Physics. The sample data sent by the enumerator was:

300 liked Mathematics. 350 liked Statistics.

340 liked Physics. 130 liked Mathematics and Statistics.

160 liked Mathematics and Physics. 180 liked Physics and Statistics.

100 liked all the three subjects. Examine the data for consistency.

**Solution:** All the given frequencies can be written in the form of attributes. Let A, B, C denote liking Mathematics, Statistics and Physics respectively and $\alpha$, $\beta$, $\gamma$ are their opponents for disliking of the subjects. We are given

$n = 600, (\text{A}) = 300, (\text{B}) = 350, (\text{C}) = 340, (\text{AB}) = 130, (\text{AC}) = 160, (\text{BC}) = 180, (\text{ABC}) = 100$.

All the given frequencies are positive, we can therefore calculate a negative class frequency of order three which is $(\alpha\beta\gamma)$.

Now

$$(\alpha\beta\gamma) = \text{n} \cdot \alpha\beta\gamma = \text{n}(1 - \text{A})(1 - \text{B})(1 - \text{C})$$

$$= \text{n} - (\text{A}) - (\text{B}) - (\text{C}) + (\text{AB}) + (\text{AC}) + (\text{BC}) - (\text{ABC})$$

$$= 600 - 300 - 350 - 340 + 130 + 160 + 180 - 100 = -20$$

A negative frequency indicates that the sample data sent by the enumerator is incorrect (inconsistent).

## 16.11. DEFINITION OF INDEPENDENCE

We know that in probability, the two events A and B are called independent if the joint probability of A $\cap$ B is equal to the product of the marginal probabilities of A and B. Thus for independence of A and B

$$P(\text{A} \cap \text{B}) = P(\text{A}) P(\text{B}).$$
