---
subject: mathematics
book_title: null
batch: M-1
chapter_folder: chapter-01-functions-and-graphs
chapter_number: 1
chapter_title: FUNCTIONS AND GRAPHS
page_image: 21
page_printed: 27
section: "Base of the Logarithms; Properties; Laws of Logarithms; Graph of Exponential Function"
exercise: null
content_type: theory
has_figures: true
figures_count: 1
source_image: ../raw/M-1/0021.jpg
converted_at: "2026-09-01"
converted_by: "agent-1c (glm-vision)"
notes: "Top of page (Definition block) is the continuation of §1.10.3 Logarithmic Functions printed on the previous page. Headings 'Base of the Logarithms', 'Properties', 'Laws of Logarithms', 'Graph of Exponential Function' are printed unnumbered. Book typo preserved verbatim: 'Note: As a^x = 1, therefore log_a(1) = 0' (mathematically a^0 = 1 — printed as-is)."
---

# Page 21 — Unit 01: Functions and Graphs

> 📄 Original scan: [0021.jpg](../raw/M-1/0021.jpg) · printed page 27

**Definition:** If you have an exponential function of the form $y = a^x$ where $a > 0$ and $a \neq 1$, then the logarithmic function is defined as:
$$x = \log_a(y)$$

Replacing $y$ with $x$, we have:
$$y = \log_a(x)$$

Here, $\log_a(x)$ is read as logarithmic of $x$ to the base $a$.

## Base of the Logarithms

The base of logarithm determines its specific type. Some types are:

*   Natural logarithm: It is written as $\log_e(x) = \ln x$ where $e = 2.71828...$ is called Euler's number.
*   Common logarithm: It is written as $\log_{10}(x)$ where $a = 10$.
*   Binary logarithm: It is written as $\log_2(x)$ where $a = 2$.

## Properties

*   The logarithm is the inverse of exponential. If $y = a^x$, then $x = \log_a(y)$. This means $\log_a(a^x) = x$ and $a^{\log_a(y)} = y$.
*   The domain of $\log_a(x)$ is $x > 0$ because we cannot take the logarithm of zero or a negative real number.

## Laws of Logarithms

*   Product Rule: $\log_a(xy) = \log_a(x) + \log_a(y)$
*   Quotient Rule: $\log_a\left(\frac{x}{y}\right) = \log_a(x) - \log_a(y)$
*   Power Rule: $\log_a(x^n) = n \log_a(x)$
*   Change of Base Rule: For any positive bases $a \neq 1$ and $b \neq 1$:

$$\log_a(x) = \frac{\log_b(x)}{\log_b(a)}$$

**Note:** As $a^x = 1$, therefore $\log_a(1) = 0$.

## Graph of Exponential Function

*   If the base, $a$ is greater than 1, then the function increases exponentially at a growth rate of $a$. This is known as exponential growth.
*   If the base, $a$ is less than 1 (but greater than 0) the function decreases exponentially at a rate of $a$. This is known as exponential decay.
*   If the base, $a$ is equal to 1, then the function trivially becomes $y = 1$. This means exponential function always passes through $(0, 1)$.
*   The points $(0, 1)$ and $(1, a)$ are always on the graph of the function $y = a^x$.
*   Exponential function takes only positive values and its graph never touches x-axis.
*   The domain of the exponential function is the set of all real numbers, whereas the range of this function is the set of positive real numbers.

[Figure F1]

## Figures on this page

### Figure F1 — graphs of exponential functions (bottom right)
- **Type:** curve-plot
- **Caption/Number:** (none printed)
- **Description:** A Cartesian coordinate system with a horizontal x-axis (labeled 'x' with an arrow on the right) and a vertical y-axis (labeled 'y' with an arrow pointing up). The origin is marked as '0'. Two curves are plotted: one labeled '$y = 2^x$' which increases from left to right, passing through the point $(0, 1)$ marked on the y-axis; and another labeled '$y = 0.5^x$' which decreases from left to right, also passing through the point $(0, 1)$. Both curves approach but do not touch the x-axis.
- **Mathematical meaning:** Illustrates that for $a > 1$ ($y=2^x$), the function shows exponential growth, while for $0 < a < 1$ ($y=0.5^x$), it shows exponential decay; both pass through $(0, 1)$ and have a range of positive real numbers.
