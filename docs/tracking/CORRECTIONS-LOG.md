# CORRECTIONS LOG — book-typo auto-correction ledger (policy v4.4)

> **Status:** Living document. Every correction of a printed-book error applied to the
> Formatted library is itemised here. Created 2026-10-06 by user mandate: *"the dozens of
> small book typos throughout… correct them automatically along the way, and keep note of
> things like these from now on."*
>
> **Going-forward rule (binding for all future books):** unambiguous surface typos in the
> print are **corrected in the body** at conversion time, the printed form is **documented
> in the page's `notes:` field**, and every correction is **appended to this log**. Anything
> ambiguous or substantive stays verbatim + flagged (never guessed silently).

## Correction policy (CONVENTIONS §1.9, v4.4)

| Tier | What | Action |
|------|------|--------|
| **A** | Spelling/punctuation/word typos with exactly one intended form (`R.ject`, `negective`, `Internal Estimation`, stray dots/periods) | Correct in body + note original |
| **B** | Single missing function word documented in the note (`Which of following` → `Which of the following`) | Insert word + note |
| **C** | Math values, inequality/notation quirks, duplicated options, mismatched constants, subscripts, code blocks, garbled wording with no single fix, structural quirks | **Keep verbatim + flag. Never touch.** |

Frozen exception: the **112 legacy pages** (M-0, M-1, S-0, S-1, S-2) are byte-locked against
their v3 baseline by `tools/verify-v4.mjs` and keep their original verbatim transcriptions
(they were user-reviewed during the Digital-edition rounds). The correction sweep therefore
covers the **556 markdown-only pages** (M-2…M-BM, S-3…S-L).

---

## 1. User-decided reconstructions (2026-10-06 session)

| Page | Issue | Decision |
|------|-------|----------|
| S-9 printed p.317 (`Chapter-16-Association/page-033.md`) | Ink blotch obscured Q.25 rank-table col-9 (both rows) and one word of the Ans line | **User decision:** Laboratory = 1, Lecture = 2 — **FLAGGED as potentially inaccurate** (verified arithmetically: Σd² = 24 → r_s = 0.8545 ≈ printed 0.85). Blot-lost word filled as "in" (contextual, flagged). |
| S-10 printed p.332 (`Chapter-17-Orientation-of-Computers/page-014.md`) | Q.15 stem truncated in the printed book itself | **User decision:** first word "The" restored — **FLAGGED** as reconstruction; all following text verbatim. |
| S-9 printed p.302 (`Chapter-16-Association/page-018.md`) | Earlier agent's false edge-cut claim had dropped chi-square rows | Resolved Phase 9: scan pixel-verified complete; rows 115/94.2 + totals χ² = 32.15 restored. **User approved closure** — re-verified intact this session. |

## 2. Printed p.337 z-table (S-L `Chapter-99-Back-Matter/page-003.md`)

Every cell was cross-checked against the computed true area Φ(z) − 0.5 (5 decimals).
**16 misprints corrected** (incl. **6 newly-discovered** by the computational sweep that the
original conversion note had missed), **7 last-digit wobble cells left as printed** (the
book's own rounding convention). Two of the original note's "intended" guesses were
themselves wrong and are superseded here (1.88 → .46995, not .46495; 3.09 → .49900, not .49890).

**Corrected (printed → true):** 0.40 `15542`→.15542 · 0.48 `.18430`→.18439 · 0.53 `.20184`→.20194 ·
0.88 `.33646`→.31057 · 0.89 `.33891`→.31327 · 1.19 `.28298`→.38298 · 1.30 `.40220`→.40320 ·
1.57 `.44170`→.44179 · 1.88 `.56495`→.46995 · 1.99 `.47679`→.47670 · 2.48 `.49243`→.49343 ·
2.51 `.49393`→.49396 · 3.07 `.49897`→.49893 · 3.08 `.49897`→.49896 · 3.09 `.49800`→.49900 ·
3.24 `.49C40`→.49940

**Left as printed (wobble ±1–2e-5):** 0.09 `.03585` · 0.46 `.17726` · 0.63 `.23566` ·
0.82 `.29388` · 1.03 `.34850` · 1.46 `.42786` · 1.98 `.47616`

---

## 3. Surface-typo sweep ledger (this session: 162 corrections across 104 files)

**`Mathematics/Chapter-02-Limit-Continuity-and-Derivative/page-006.md`**

- printed `exits` → corrected `exists`
- printed `is not define.` → corrected `is not defined.`

**`Mathematics/Chapter-02-Limit-Continuity-and-Derivative/page-008.md`**

- printed `are also continues at $a$` → corrected `are also continuous at $a$`

**`Mathematics/Chapter-02-Limit-Continuity-and-Derivative/page-011.md`**

- printed `points. but is not` → corrected `points. But is not`

**`Mathematics/Chapter-02-Limit-Continuity-and-Derivative/page-013.md`**

- printed `instantaneous velocity at $= \frac{1}{2}$` → corrected `instantaneous velocity at $t = \frac{1}{2}$`

**`Mathematics/Chapter-02-Limit-Continuity-and-Derivative/page-016.md`**

- printed `are differentiable function,` → corrected `are differentiable functions,`
- printed `equals to the sum` → corrected `equals the sum`

**`Mathematics/Chapter-02-Limit-Continuity-and-Derivative/page-025.md`**

- printed `differentiable formula of $u$` → corrected `differentiable function of $u$`
- printed `y is an implicit of $x$` → corrected `y is an implicit function of $x$`

**`Mathematics/Chapter-02-Limit-Continuity-and-Derivative/page-026.md`**

- printed `Taking $ln$ both sides` → corrected `Taking $ln$ of both sides`

**`Mathematics/Chapter-02-Limit-Continuity-and-Derivative/page-028.md`**

- printed `can be interrupted in $dy$` → corrected `can be interpreted in $dy$`

**`Mathematics/Chapter-02-Limit-Continuity-and-Derivative/page-031.md`**

- printed `fourth derivative, by` → corrected `fourth derivative by`

**`Mathematics/Chapter-02-Limit-Continuity-and-Derivative/page-032.md`**

- printed `third derivatives of` → corrected `third derivative of`

**`Mathematics/Chapter-02-Limit-Continuity-and-Derivative/page-034.md`**

- printed `closed interval at $[1, 2]$` → corrected `closed interval $[1, 2]$`

**`Mathematics/Chapter-02-Limit-Continuity-and-Derivative/page-035.md`**

- printed `doesnot` → corrected `does not`
- printed `number in $c$ in its domain` → corrected `number $c$ in its domain`

**`Mathematics/Chapter-02-Limit-Continuity-and-Derivative/page-036.md`**

- printed `(b) illustrates` → corrected `(b) illustrate`

**`Mathematics/Chapter-02-Limit-Continuity-and-Derivative/page-037.md`**

- printed `be a continuous at $c$` → corrected `be continuous at $c$`

**`Mathematics/Chapter-02-Limit-Continuity-and-Derivative/page-039.md`**

- printed `real world phenomenon involve` → corrected `real world phenomena involve`
- printed `stoke intensity` → corrected `stroke intensity`
- printed `the give function` → corrected `the given function`
- printed `the number in a bacteria` → corrected `the number of bacteria`

**`Mathematics/Chapter-02-Limit-Continuity-and-Derivative/page-040.md`**

- printed `baloon` → corrected `balloon`
- printed `where $x$ the length` → corrected `where $x$ is the length`

**`Mathematics/Chapter-02-Limit-Continuity-and-Derivative/page-041.md`**

- printed `interval reveal` → corrected `interval reveals`
- printed `land that contain 1500` → corrected `land that contains 1500`

**`Mathematics/Chapter-02-Limit-Continuity-and-Derivative/page-042.md`**

- printed `price level at time P` → corrected `price level at time t`

**`Mathematics/Chapter-02-Limit-Continuity-and-Derivative/page-043.md`**

- printed `The slopes of $` → corrected `The slope of $` (×2)
- printed `a projectile time t` → corrected `a projectile at time t`
- printed `joggers hanging 20 minutes after` → corrected `joggers changing 20 minutes after`
- printed `revenue equal costs` → corrected `revenue equals costs`
- printed `when side in 8cm` → corrected `when side is 8cm`

**`Mathematics/Chapter-02-Limit-Continuity-and-Derivative/page-044.md`**

- printed `enclosed land in figure` → corrected `enclosed land in the figure`
- printed `its remove and cost functions` → corrected `its revenue and cost functions`

**`Mathematics/Chapter-02-Limit-Continuity-and-Derivative/page-046.md`**

- printed `an approximate of` → corrected `an approximation of`

**`Mathematics/Chapter-03-Integration/page-015.md`**

- printed `repectively` → corrected `respectively`

**`Mathematics/Chapter-03-Integration/page-016.md`**

- printed `we gat:` → corrected `we get:`

**`Mathematics/Chapter-03-Integration/page-025.md`**

- printed `We even certain` → corrected `We are even certain`

**`Mathematics/Chapter-03-Integration/page-026.md`**

- printed `can approximated` → corrected `can be approximated`

**`Mathematics/Chapter-03-Integration/page-029.md`**

- printed `Hook's law` → corrected `Hooke's law`

**`Mathematics/Chapter-03-Integration/page-030.md`**

- printed `bonded` → corrected `bounded`
- printed `sloid` → corrected `solid`

**`Mathematics/Chapter-04-Differential-Equations/page-007.md`**

- printed `y = xe^x$ is a solution` → corrected `y = xe^x$ a solution`

**`Mathematics/Chapter-04-Differential-Equations/page-014.md`**

- printed `Slove` → corrected `Solve`
- printed `homogenous` → corrected `homogeneous`

**`Mathematics/Chapter-04-Differential-Equations/page-018.md`**

- printed `Which is velocity of the ball` → corrected `Which is the velocity of the ball`
- printed `sides, se have:` → corrected `sides, we have:`

**`Mathematics/Chapter-05-Kinematics-of-Motion-in-a-Straight-Line/page-008.md`**

- printed `2sint` → corrected `2 sin t` (×2)
- printed `for which it decelerating` → corrected `for which it is decelerating`

**`Mathematics/Chapter-05-Kinematics-of-Motion-in-a-Straight-Line/page-009.md`**

- printed `2cost` → corrected `2 cos t`

**`Mathematics/Chapter-05-Kinematics-of-Motion-in-a-Straight-Line/page-012.md`**

- printed `Meinar-e-Pakistan` → corrected `Minar-e-Pakistan` (×2)
- printed `Now when stone attains` → corrected `Now when the stone attains`
- printed `maximum height of projectile` → corrected `maximum height of the projectile`

**`Mathematics/Chapter-05-Kinematics-of-Motion-in-a-Straight-Line/page-014.md`**

- printed `of $P$ form $O$` → corrected `of $P$ from $O$`

**`Mathematics/Chapter-05-Kinematics-of-Motion-in-a-Straight-Line/page-015.md`**

- printed `The value the function` → corrected `The value of the function`
- printed `considering it motion` → corrected `considering its motion`

**`Mathematics/Chapter-05-Kinematics-of-Motion-in-a-Straight-Line/page-018.md`**

- printed `What is length of train` → corrected `What is the length of train`
- printed `Which of following` → corrected `Which of the following` (×2)
- printed `along minor road` → corrected `along a minor road`
- printed `on the platform of station` → corrected `on the platform of the station`
- printed `the lowest speed $40km/h$` → corrected `the lowest speed is $40km/h$`

**`Mathematics/Chapter-05-Kinematics-of-Motion-in-a-Straight-Line/page-019.md`**

- printed `What is average speed of the car for whole journey` → corrected `What is the average speed of the car for the whole journey`
- printed `What is speed of car` → corrected `What is the speed of the car`

**`Mathematics/Chapter-05-Kinematics-of-Motion-in-a-Straight-Line/page-020.md`**

- printed `Find acceleration of the particle` → corrected `Find the acceleration of the particle`
- printed `the speed of particle` → corrected `the speed of the particle`
- printed `velocity of object` → corrected `velocity of the object`

**`Mathematics/Chapter-06-Analytical-Geometry/page-002.md`**

- printed `proceed as follow:` → corrected `proceed as follows:`

**`Mathematics/Chapter-06-Analytical-Geometry/page-003.md`**

- printed `homogenous equations` → corrected `homogeneous equations`

**`Mathematics/Chapter-06-Analytical-Geometry/page-020.md`**

- printed `11.5= 0` → corrected `11.5 = 0`
- printed `R(7,10)` → corrected `R(7, 10)`
- printed `angel between rays` → corrected `angle between rays`
- printed `equations •of the lines` → corrected `equations of the lines`

**`Mathematics/Chapter-06-Analytical-Geometry/page-022.md`**

- printed `and ,hence the area` → corrected `and, hence the area`

**`Mathematics/Chapter-07-Conic-Section/page-008.md`**

- printed `Equation the line is` → corrected `Equation of the line is`

**`Mathematics/Chapter-07-Conic-Section/page-015.md`**

- printed `equation of parabola then:` → corrected `equation of parabola:`

**`Mathematics/Chapter-07-Conic-Section/page-034.md`**

- printed `Covertices hyperbola are` → corrected `Covertices of hyperbola are`

**`Mathematics/Chapter-07-Conic-Section/page-039.md`**

- printed `we wil get` → corrected `we will get`

**`Mathematics/Chapter-07-Conic-Section/page-040.md`**

- printed `= 1$. with slope` → corrected `= 1$ with slope`

**`Mathematics/Chapter-08-Inverse-Trigonometric-Functions-and-Their-Graphs/page-002.md`**

- printed `trigonometric function on one graph` → corrected `trigonometric functions on one graph`

**`Mathematics/Chapter-08-Inverse-Trigonometric-Functions-and-Their-Graphs/page-013.md`**

- printed `gain insights the characteristics` → corrected `gain insights into the characteristics`

**`Mathematics/Chapter-10-Numerical-Methods/page-006.md`**

- printed `is negective` → corrected `is negative`

**`Mathematics/Chapter-10-Numerical-Methods/page-010.md`**

- printed `$h$ will small` → corrected `$h$ will be small`
- printed `Examble 5:` → corrected `Example 5:`

**`Mathematics/Chapter-99-Back-Matter/page-021.md`**

- printed `f(x)$ exits` → corrected `f(x)$ exists`

**`Mathematics/Chapter-99-Back-Matter/page-022.md`**

- printed `nomogenous function` → corrected `homogeneous function`

**`Mathematics/Chapter-99-Back-Matter/page-025.md`**

- printed `Instantaneously velocity` → corrected `Instantaneous velocity`

**`Statistics/Chapter-10-Random-Variable-and-Probability-Distributions/page-005.md`**

- printed `not a random variable If we write` → corrected `not a random variable. If we write`

**`Statistics/Chapter-10-Random-Variable-and-Probability-Distributions/page-008.md`**

- printed `first defective bulbs` → corrected `first defective bulb`

**`Statistics/Chapter-10-Random-Variable-and-Probability-Distributions/page-009.md`**

- printed `= 120$. sample points` → corrected `= 120$ sample points`

**`Statistics/Chapter-10-Random-Variable-and-Probability-Distributions/page-012.md`**

- printed `Verify that.E( 2X + 3` → corrected `Verify that E( 2X + 3`
- printed `whenever die is rolled` → corrected `whenever a die is rolled`

**`Statistics/Chapter-10-Random-Variable-and-Probability-Distributions/page-022.md`**

- printed `select a sample is such a way` → corrected `select a sample in such a way`

**`Statistics/Chapter-10-Random-Variable-and-Probability-Distributions/page-024.md`**

- printed `both (a).and (b)` → corrected `both (a) and (b)`
- printed `of a electric bulb` → corrected `of an electric bulb`

**`Statistics/Chapter-10-Random-Variable-and-Probability-Distributions/page-025.md`**

- printed `(d).all of these` → corrected `(d) all of these`

**`Statistics/Chapter-10-Random-Variable-and-Probability-Distributions/page-026.md`**

- printed `neither (a) and (b)` → corrected `neither (a) nor (b)`

**`Statistics/Chapter-10-Random-Variable-and-Probability-Distributions/page-031.md`**

- printed `suming equal probabilities` → corrected `assuming equal probabilities`
- printed `urdu` → corrected `Urdu` (×2)

**`Statistics/Chapter-11-Binomial-and-Hypergeometric-Distributions/page-018.md`**

- printed `P(X = x).= b(x; n, p)` → corrected `P(X = x) = b(x; n, p)`
- printed `Trails` → corrected `Trials`

**`Statistics/Chapter-11-Binomial-and-Hypergeometric-Distributions/page-019.md`**

- printed `In a Bernoulli trials` → corrected `In Bernoulli trials`
- printed `a'binomial` → corrected `a binomial`

**`Statistics/Chapter-11-Binomial-and-Hypergeometric-Distributions/page-020.md`**

- printed `the probability success` → corrected `the probability of success`

**`Statistics/Chapter-11-Binomial-and-Hypergeometric-Distributions/page-025.md`**

- printed `(iii)131/243` → corrected `(iii) 131/243`
- printed `when ever it plays` → corrected `whenever it plays`

**`Statistics/Chapter-12-Normal-Distribution/page-016.md`**

- printed `such that. (i)` → corrected `such that (i)`
- printed `such that.(i)` → corrected `such that (i)`

**`Statistics/Chapter-12-Normal-Distribution/page-018.md`**

- printed `will be remain same` → corrected `will remain the same`

**`Statistics/Chapter-12-Normal-Distribution/page-025.md`**

- printed `the normal, probability density function` → corrected `the normal probability density function`

**`Statistics/Chapter-12-Normal-Distribution/page-030.md`**

- printed `P( at most 21 ) .(v)` → corrected `P( at most 21 ) (v)`
- printed `is normally distribution with` → corrected `is normally distributed with`

**`Statistics/Chapter-12-Normal-Distribution/page-031.md`**

- printed `of the distrib lies` → corrected `of the distribution lies`

**`Statistics/Chapter-12-Normal-Distribution/page-032.md`**

- printed `are .under 63` → corrected `are under 63`

**`Statistics/Chapter-13-Sampling-and-Sampling-Distributions/page-004.md`**

- printed `listed between in Table-1` → corrected `listed in Table-1`

**`Statistics/Chapter-13-Sampling-and-Sampling-Distributions/page-009.md`**

- printed `and calculation the sample mean` → corrected `and calculate the sample mean`
- printed `the number of sample ` → corrected `the number of samples `

**`Statistics/Chapter-13-Sampling-and-Sampling-Distributions/page-011.md`**

- printed `= 5.25. \text{ and }` → corrected `= 5.25 \text{ and }`

**`Statistics/Chapter-13-Sampling-and-Sampling-Distributions/page-025.md`**

- printed `$X$ represent the vowel` → corrected `$X$ represents the vowel`

**`Statistics/Chapter-13-Sampling-and-Sampling-Distributions/page-026.md`**

- printed `$X$ represent the number` → corrected `$X$ represents the number`

**`Statistics/Chapter-13-Sampling-and-Sampling-Distributions/page-027.md`**

- printed `president take $n` → corrected `president takes $n`
- printed `public finding` → corrected `public funding`

**`Statistics/Chapter-13-Sampling-and-Sampling-Distributions/page-031.md`**

- printed `(iii)Real population` → corrected `(iii) Real population`
- printed `drawing sample from` → corrected `drawing a sample from`
- printed `important roll in` → corrected `important role in`

**`Statistics/Chapter-13-Sampling-and-Sampling-Distributions/page-033.md`**

- printed `in a.sample.` → corrected `in a sample.`
- printed `is collection of` → corrected `is a collection of`

**`Statistics/Chapter-13-Sampling-and-Sampling-Distributions/page-034.md`**

- printed `(af)` → corrected `(a)`
- printed `sampling faction` → corrected `sampling fraction`

**`Statistics/Chapter-13-Sampling-and-Sampling-Distributions/page-044.md`**

- printed `find it mean` → corrected `find its mean`

**`Statistics/Chapter-14-Statistical-Inference-Estimation/page-002.md`**

- printed `infact` → corrected `in fact`

**`Statistics/Chapter-14-Statistical-Inference-Estimation/page-011.md`**

- printed `Obtained the best unbiased estimates` → corrected `Obtain the best unbiased estimates`

**`Statistics/Chapter-14-Statistical-Inference-Estimation/page-024.md`**

- printed `Internal Estimation` → corrected `Interval Estimation`

**`Statistics/Chapter-14-Statistical-Inference-Estimation/page-026.md`**

- printed `both (a) or (b)` → corrected `both (a) and (b)`

**`Statistics/Chapter-14-Statistical-Inference-Estimation/page-027.md`**

- printed `unbiased estimated of` → corrected `unbiased estimate of`

**`Statistics/Chapter-14-Statistical-Inference-Estimation/page-028.md`**

- printed `( i.e, ` → corrected `( i.e., `
- printed `is doubles` → corrected `is doubled`

**`Statistics/Chapter-14-Statistical-Inference-Estimation/page-034.md`**

- printed `a 96% confidence limits` → corrected `the 96% confidence limits`

**`Statistics/Chapter-14-Statistical-Inference-Estimation/page-036.md`**

- printed `a 95% confidence limits` → corrected `the 95% confidence limits`

**`Statistics/Chapter-15-Statistical-Inference-Testing-of-Hypotheses/page-005.md`**

- printed `BETTA` → corrected `BETA`
- printed `Figure-4. has` → corrected `Figure-4 has`

**`Statistics/Chapter-15-Statistical-Inference-Testing-of-Hypotheses/page-013.md`**

- printed `as show in Figure-11` → corrected `as shown in Figure-11`

**`Statistics/Chapter-16-Association/page-005.md`**

- printed `(\text{A}\beta),=40` → corrected `(\text{A}\beta)=40`

**`Statistics/Chapter-16-Association/page-006.md`**

- printed `Physics. · 180` → corrected `Physics. 180`

**`Statistics/Chapter-16-Association/page-011.md`**

- printed `Let A denotes attacked` → corrected `Let A denote attacked`

**`Statistics/Chapter-16-Association/page-013.md`**

- printed `when we are taking about heights` → corrected `when we are talking about heights`

**`Statistics/Chapter-16-Association/page-020.md`**

- printed `between students midterm averages` → corrected `between students' midterm averages`

**`Statistics/Chapter-16-Association/page-022.md`**

- printed `attributes categories` → corrected `attribute categories`
- printed `other there will be` → corrected `otherwise there will be`

**`Statistics/Chapter-16-Association/page-023.md`**

- printed `The large the value` → corrected `The larger the value`

**`Statistics/Chapter-16-Association/page-024.md`**

- printed `It .is used` → corrected `It is used`
- printed `and . the rankings` → corrected `and the rankings`

**`Statistics/Chapter-16-Association/page-025.md`**

- printed `(b) $+1$ . (c)` → corrected `(b) $+1$. (c)`
- printed `(b)positively associated (c)independent` → corrected `(b) positively associated (c) independent`
- printed `(c) $+1$ . (d)` → corrected `(c) $+1$. (d)`
- printed `(c) zero . (d)` → corrected `(c) zero. (d)`
- printed `(d) $0$ and $5$ .` → corrected `(d) $0$ and $5$.`
- printed `(d) nine .` → corrected `(d) nine.`
- printed `less'than 5` → corrected `less than 5`

**`Statistics/Chapter-16-Association/page-026.md`**

- printed `The eyes colour` → corrected `The eye colour`
- printed `great than zero` → corrected `greater than zero`

**`Statistics/Chapter-17-Orientation-of-Computers/page-008.md`**

- printed `PASCAL, and FORTRAN
` → corrected `PASCAL, and FORTRAN.
`
- printed `with in the` → corrected `within the`

---

## 4. Reviewed and deliberately NOT corrected (Tier C — preserved verbatim + flagged)

Representative classes (full per-page documentation lives in each page's `notes:` field):

- **Math values / arithmetic in print** — e.g. M-5 a(4) = −37/800 (true −57/800); M-6 p.169
  tan chain "8/13 = 0.727"; M-7 Example 8 problem/solution constant mismatch; M-10 stale
  x₄ numerator; S-5 Figure F5 axis "μ = 10" for μ = 40; S-5 "P₉₀ = 664.5" for P₉₅;
  S-6 d-column missing minus signs; S-8 Example 15.4 (vi) accept/reject conclusion error;
  S-3 MCQ Q.32 "6/8"; S-4 row-30 orphan digit "8"; z-table wobble cells (§2 above);
  M-2 p.58 reversed first inequality; M-8 8.3.6 impossible domain line.
- **Structural/print quirks** — duplicated Example number (M-4 "Example 6" ×2), missing
  section headings, side-by-side columns, `← NN →` chips, en-dash MCQ banners, unnumbered
  questions (S-7 pp.227/231), heading numbering quirk (M-2 "2.5.2 before 2.4").
- **Notation/wording with no single fix** — `cosec`, `w. r. t`, `cosx` spacing style,
  "b.g college", "is not acceptance in the real sense", run-on questions, "If X be the
  number…", S-9 Q.11 "Number of observations … are called", S-6 Q12 "Any population
  constants is called a:", S-9 def-12 "B are β" ('are' for 'and/,'), "consistence".
- **Code blocks** — MATLAB listings reproduce printed code verbatim (`dis(...))`,
  "n interactions") even though typos are visible; program listings are data.
- **Already-correct in body** — S-6 p.188 Q19(a): the note records printed "(af)" /
  "faction" but the body had already been transcribed with the corrected label/wording;
  M-6 p.171 Q.9 stray bullet dot was never transcribed.

## 5. Verification

- Every sweep replacement was applied body-only with exact-count assertions and a
  single-read/single-write pass per file (an earlier per-entry rewrite bug was caught and
  re-converged; final state machine-checked). Superseded first-pass string variants were
  deduplicated; two entries were dropped as genuinely absent from bodies (S-6 p.188 "(af)",
  M-6 p.171 "•of" — both already correct in the transcriptions).
- Final: **162 unique printed→corrected pairs across 104 files**; every modified file
  carries the `TYPO-CORRECTION PASS` note suffix; `$`-balance re-verified on all touched
  files (the only two line-parity flags are a pre-existing multi-line `aligned` block on
  S-9 p.289, byte-identical to the committed version outside the corrected comma).
- Post-sweep gates: `bun tools/verify-v4.mjs` ALL GREEN (112/112 legacy byte-verified,
  668/668 raw images, 556/556 markdown-only placed) and
  `node tools/check-digital.mjs --frozen --strict-figures` ALL GREEN.
- Post-correction z-table re-check: 0 hard mismatches vs computed Φ(z) − 0.5;
  only the 7 documented wobble cells differ.

---

## 6. Pakistan Studies Grade 12 — Phase 10 onward (2026-10-09 →)

New book "BOOK-P-1-2-3-4-5-6" (batches P-0…P-6). Conventions applied to this book from
recon: **dates/numbers in factual claims are Tier C** (kept verbatim + flagged — e.g. Unit 02
opener prints "Wars of 1948, 1965, 1971 and 199" for the 1999 Kargil war; a numeric value,
never silently fixed). Unit-end Glossary pages use `content_type: summary`; "List more
words…" write-in tables are transcribed as empty GFM tables with the printed row count.
TOC "Unit | Title | Page" header rows are editorial (not printed).

| Page | Printed | Corrected | Tier |
|------|---------|-----------|------|
| P-1 `Chapter-01-Ideological-Basis-of-Pakistan/page-020.md` (printed p.25, Glossary) | `Field Marshall` | `Field Marshal` | A |
| P-1 `Chapter-01-Ideological-Basis-of-Pakistan/page-020.md` (printed p.25, Glossary) | `led by a caliph` (no full stop, all 7 sibling items have one) | `led by a caliph.` | A |
| P-3 `Chapter-03-Land-of-Pakistan-and-Environmental-Hazards/page-005.md` (printed p.48) | `Turky` | `Turkey` | A |
| P-3 `Chapter-03-Land-of-Pakistan-and-Environmental-Hazards/page-005.md` (printed p.48) | `Siri Lanka` | `Sri Lanka` | A |
| P-3 `Chapter-03-Land-of-Pakistan-and-Environmental-Hazards/page-005.md` (printed p.48) | `established in1985` (missing space) | `established in 1985` | A |
| P-1 `Chapter-01-Ideological-Basis-of-Pakistan/page-003.md` (printed p.8, heading) | `Establishment of British Raj .` (stray period with space before it; sibling headings unpunctuated) | `Establishment of British Raj` | A |
| P-1 `Chapter-01-Ideological-Basis-of-Pakistan/page-007.md` (printed p.12) | `set off Britain` (missing preposition) | `set off for Britain` | B |
| P-1 `Chapter-01-Ideological-Basis-of-Pakistan/page-008.md` (printed p.13, continuation of p.12 sentence) | `boarders` | `borders` | A |
| P-2 `Chapter-02-Political-Development-in-Pakistan/page-001.md` (printed p.26, Unit 02 opener) | `Soviet- Afghan` (stray space after hyphen) | `Soviet-Afghan` | A |
| P-2 `Chapter-02-Political-Development-in-Pakistan/page-002.md` (printed p.27) | `first president of Constituent Assembly` (missing article) | `first president of the Constituent Assembly` | B |
| P-2 `Chapter-02-Political-Development-in-Pakistan/page-002.md` (printed p.27) | `adopted as interim constitution` (missing article) | `adopted as the interim constitution` | B |
| P-2 `Chapter-02-Political-Development-in-Pakistan/page-003.md` (printed p.28) | `at time of the inauguration ceremony` (missing article) | `at the time of the inauguration ceremony` | B |
| P-2 `Chapter-02-Political-Development-in-Pakistan/page-003.md` (printed p.28) | `future structure of economy` (missing article) | `the future structure of the economy` | B |
| P-2 `Chapter-02-Political-Development-in-Pakistan/page-003.md` (printed p.28) | `membership of United Nations` (missing article) | `membership of the United Nations` | B |
| P-2 `Chapter-02-Political-Development-in-Pakistan/page-003.md` (printed p.28) | `secretary general of All India Muslim League` (missing article) | `secretary general of the All India Muslim League` | B |
| P-2 `Chapter-02-Political-Development-in-Pakistan/page-004.md` (printed p.29) | `became guiding principle for our all-future constitutions` (missing article) | `became the guiding principle for our all-future constitutions` | B |
| P-2 `Chapter-02-Political-Development-in-Pakistan/page-004.md` (printed p.29) | `to improve economic and security situation` (missing article) | `to improve the economic and security situation` | B |
| P-2 `Chapter-02-Political-Development-in-Pakistan/page-004.md` (printed p.29) | `to overcome economic crisis` (missing article) | `to overcome the economic crisis` | B |
| P-2 `Chapter-02-Political-Development-in-Pakistan/page-004.md` (printed p.29) | `was even not a member of constituent assembly` (missing article) | `was even not a member of the constituent assembly` | B |
| P-2 `Chapter-02-Political-Development-in-Pakistan/page-010.md` (printed p.35) | `Khán` (diacritic — 3× zoom shows none in print; converter artifact) | `Khan` | A |
| P-3 `Chapter-03-Land-of-Pakistan-and-Environmental-Hazards/page-001.md` (printed p.44, Unit 03 opener) | `access the significance` (SLO verb misprint) | `assess the significance` | A |
| P-3 `Chapter-03-Land-of-Pakistan-and-Environmental-Hazards/page-001.md` (printed p.44, Unit 03 opener) | `on Pakistan's, economic` (stray comma) | `on Pakistan's economic` | A |
| P-3 `Chapter-03-Land-of-Pakistan-and-Environmental-Hazards/page-003.md` (printed p.46) | `NE.USA` (missing space) | `NE. USA` | A |
| P-2 `Chapter-02-Political-Development-in-Pakistan/page-005.md` (printed p.30) | `Feroze Kham Noon` (name misspelling; zoom crops, 2 reads agree printed 'Kham') | `Feroze Khan Noon` | A |
| P-2 `Chapter-02-Political-Development-in-Pakistan/page-005.md` (printed p.30) | `lost the confidence of assembly` (missing article) | `lost the confidence of the assembly` | B |
| P-2 `Chapter-02-Political-Development-in-Pakistan/page-005.md` (printed p.30) | `he started conspiracy against Ayub Khan` (missing article) | `he started a conspiracy against Ayub Khan` | B |
| P-2 `Chapter-02-Political-Development-in-Pakistan/page-005.md` (printed p.30) | `he was hindrance to good governance` (missing article) | `he was a hindrance to good governance` | B |
| P-2 `Chapter-02-Political-Development-in-Pakistan/page-005.md` (printed p.30) | `invest their money in industrial sector` (missing article) | `invest their money in the industrial sector` | B |
| P-2 `Chapter-02-Political-Development-in-Pakistan/page-006.md` (printed p.31) | `Kahmir` (misspelling, 2 reads agree) | `Kashmir` | A |
| P-2 `Chapter-02-Political-Development-in-Pakistan/page-006.md` (printed p.31) | `twenty -four` (stray printed space) | `twenty-four` | A |
| P-2 `Chapter-02-Political-Development-in-Pakistan/page-013.md` (printed p.38) | `M-2 Moter way` (misspelling) | `M-2 Motor way` | A |
| P-2 `Chapter-02-Political-Development-in-Pakistan/page-007.md` (printed p.32) | `(Roti,Kapra aur makan)` (missing space after comma) | `(Roti, Kapra aur makan)` | A |
| P-2 `Chapter-02-Political-Development-in-Pakistan/page-007.md` (printed p.32) | `He claimed that army intervened` (missing article) | `He claimed that the army intervened` | B |
| P-2 `Chapter-02-Political-Development-in-Pakistan/page-008.md` (printed p.33; page reprints the entire p.32 block — production misprint, transcribed verbatim) | `(Roti,Kapra aur makan)` (missing space after comma) | `(Roti, Kapra aur makan)` | A |
| P-2 `Chapter-02-Political-Development-in-Pakistan/page-008.md` (printed p.33; reprinted block) | `(Roti, Kapra aur makan). .` (stray extra printed period) | `(Roti, Kapra aur makan).` | A |
| P-2 `Chapter-02-Political-Development-in-Pakistan/page-014.md` (printed p.39) | `came into power as result of 2008 elections` (missing article) | `came into power as a result of 2008 elections` | B |
| P-2 `Chapter-02-Political-Development-in-Pakistan/page-017.md` (printed p.42, first cyan lead-in) | `Answers the following questions briefly:` (verb-form typo; Unit-01's identical lead-ins print 'Answer'; printed colon kept) | `Answer the following questions briefly:` | A |
| P-2 `Chapter-02-Political-Development-in-Pakistan/page-017.md` (printed p.42, second cyan lead-in) | `Answers the following questions in detail:` (same verb-form typo) | `Answer the following questions in detail:` | A |
| P-3 `Chapter-03-Land-of-Pakistan-and-Environmental-Hazards/page-011.md` (printed p.54) | `(IPCC)held` (missing space) | `(IPCC) held` | A |
| P-3 `Chapter-03-Land-of-Pakistan-and-Environmental-Hazards/page-011.md` (printed p.54) | `baseline. the average` (lowercase sentence start) | `baseline. The average` | A |
| P-3 `Chapter-03-Land-of-Pakistan-and-Environmental-Hazards/page-011.md` (printed p.54) | `0.8degree Celsius` / `-20degree Celsius` (missing spaces) | `0.8 degree Celsius` / `-20 degree Celsius` | A |
| P-3 `Chapter-03-Land-of-Pakistan-and-Environmental-Hazards/page-011.md` (printed p.54) | `emit in to the atmosphere` (split preposition) | `emit into the atmosphere` | A |
| P-3 `Chapter-03-Land-of-Pakistan-and-Environmental-Hazards/page-012.md` (printed p.55) | `where there is intersection` (missing article) | `where there is an intersection` | B |
| P-3 `Chapter-03-Land-of-Pakistan-and-Environmental-Hazards/page-016.md` (printed p.59) | `23.5degree North` (missing space) | `23.5 degree North` | A |
| P-3 `Chapter-03-Land-of-Pakistan-and-Environmental-Hazards/page-016.md` (printed p.59) | `Rawal dam,(Korang river)` / `Khanpur dam,(Haro river)` (missing spaces) | `Rawal dam, (Korang river)` / `Khanpur dam, (Haro river)` | A |
| P-3 `Chapter-03-Land-of-Pakistan-and-Environmental-Hazards/page-016.md` (printed p.59) | `In spite of the fact the climatic` (missing 'that') | `In spite of the fact that the climatic` | B |
| P-3 `Chapter-03-Land-of-Pakistan-and-Environmental-Hazards/page-016.md` (printed p.59) | `north of Tropic of Cancer` (missing article) | `north of the Tropic of Cancer` | B |
| P-3 `Chapter-03-Land-of-Pakistan-and-Environmental-Hazards/page-017.md` (printed p.60) | `250mm` / `in term of` / `identity preferred` / `Cholistian` (4 surface typos) | `250 mm` / `in terms of` / `identify preferred` / `Cholistan` | A |
| P-3 `Chapter-03-Land-of-Pakistan-and-Environmental-Hazards/page-017.md` (printed p.60) | `weather scenairos` (transposed letters, coordinator zoom-verified) | `weather scenarios` | A |
| P-3 `Chapter-03-Land-of-Pakistan-and-Environmental-Hazards/page-017.md` (printed p.60) | `Jet stream flows overhead` / `It also has continental climate` (missing words) | `The Jet stream flows overhead` / `It also has a continental climate` | B |
| P-3 `Chapter-03-Land-of-Pakistan-and-Environmental-Hazards/page-018.md` (printed p.61) | `i.e ocean water` / `multi -sectoral` (missing dot/space) | `i.e. ocean water` / `multi-sectoral` | A |
| P-3 `Chapter-03-Land-of-Pakistan-and-Environmental-Hazards/page-018.md` (printed p.61) | `emergency response of federal government` (missing article) | `emergency response of the federal government` | B |
| P-3 `Chapter-03-Land-of-Pakistan-and-Environmental-Hazards/page-019.md` (printed p.62) | `aquifer of other bodies of water` (letter transposition) | `aquifer or other bodies of water` | A |
| P-3 `Chapter-03-Land-of-Pakistan-and-Environmental-Hazards/page-019.md` (printed p.62) | `the liter like plastic` (missing letter) | `the litter like plastic` | A |
| P-2 `Chapter-02-Political-Development-in-Pakistan/page-009.md` (printed p.34) | `harsh at it alienated` (at/as) | `harsh as it alienated` | A |
| P-2 `Chapter-02-Political-Development-in-Pakistan/page-009.md` (printed p.34) | `21 November 1971 .` (stray space before period) | `21 November 1971.` | A |
| P-2 `Chapter-02-Political-Development-in-Pakistan/page-015.md` (printed p.40) | `Tehreek-e- Insaf` / `sit in at Islamabad` / `no- confidence` / `Anwaar -ul Haq- Kakar` (stray hyphen spaces) | `Tehreek-e-Insaf` / `sit-in at Islamabad` / `no-confidence` / `Anwaar-ul-Haq Kakar` | A |
| P-2 `Chapter-02-Political-Development-in-Pakistan/page-015.md` (printed p.40) | `interim prime minster` (missing i) | `interim prime minister` | A |
| P-3 `Chapter-03-Land-of-Pakistan-and-Environmental-Hazards/page-021.md` (printed p.64) | `Quetta Earth quake` (split word) | `Quetta Earthquake` | A |
| P-3 `Chapter-03-Land-of-Pakistan-and-Environmental-Hazards/page-021.md` (printed p.64) | `What factors effect the climate change` (effect/affect) | `What factors affect the climate change` | A |
| P-3 `Chapter-03-Land-of-Pakistan-and-Environmental-Hazards/page-022.md` (printed p.65, Glossary) | `Thes shifting` (typo) | `The shifting` | A |
| P-3 `Chapter-03-Land-of-Pakistan-and-Environmental-Hazards/page-022.md` (printed p.65, Glossary) | `earth quakes` (split word) | `earthquakes` | A |
| P-4 `Chapter-04-Natural-Vegetation-and-Forests-of-Pakistan/page-002.md` (printed p.67) | `ecosystem system` / `high level- resolution` / `mapping of a aquifers` (3 surface typos) | `ecosystem` / `high-level resolution` / `mapping of the aquifers` | A |
| P-4 `Chapter-04-Natural-Vegetation-and-Forests-of-Pakistan/page-002.md` (printed p.67) | `Hardware, Software data` (missing 'and') | `Hardware, Software and data` | B |
| P-4 `Chapter-04-Natural-Vegetation-and-Forests-of-Pakistan/page-003.md` (printed p.68) | `4, 000 meters` (stray space) | `4,000 meters` | A |
| P-4 `Chapter-04-Natural-Vegetation-and-Forests-of-Pakistan/page-003.md` (printed p.68) | `used in number of ways` / `estimates three-dimensional structure` / `at even higher altitude` (missing words) | `used in a number of ways` / `estimates the three-dimensional structure` / `at an even higher altitude` | B |
| P-4 `Chapter-04-Natural-Vegetation-and-Forests-of-Pakistan/page-004.md` (printed p.69, altitude table) | `forestsare` / `Scrubfrosts` / `Mangroveforests` / `mountains-are` / `Rawalpindi- Islamabad` / `20-25 %` (6 surface typos) | `forests are` / `Scrub forests` / `Mangrove forests` / `mountains are` / `Rawalpindi-Islamabad` / `20-25%` | A |
| P-4 `Chapter-04-Natural-Vegetation-and-Forests-of-Pakistan/page-005.md` (printed p.70) | `has semi-arid climate` / `increasing area under tree cover` / `for better environment` (missing words) | `has a semi-arid climate` / `increasing the area under tree cover` / `for a better environment` | B |
| P-4 `Chapter-04-Natural-Vegetation-and-Forests-of-Pakistan/page-007.md` (printed p.72) | `floating forests..` (stray duplicated full stop) | `floating forests.` | A |
| P-4 `Chapter-04-Natural-Vegetation-and-Forests-of-Pakistan/page-010.md` (printed p.75) | `about250mm` (missing space) | `about 250mm` | A |
| P-4 `Chapter-04-Natural-Vegetation-and-Forests-of-Pakistan/page-011.md` (printed p.76) | `broad leave deciduous trees` / `converted int tube wells` / `famous for it truck Art` (3 surface typos) | `broad-leaved deciduous trees` / `converted into tube wells` / `famous for its truck Art` | A |
| P-4 `Chapter-04-Natural-Vegetation-and-Forests-of-Pakistan/page-012.md` (printed p.77) | `people..` / `housing , food` (stray dot/space) | `people.` / `housing, food` | A |
| P-4 `Chapter-04-Natural-Vegetation-and-Forests-of-Pakistan/page-012.md` (printed p.77) | `“reduce, “followed by “reuse”` (misplaced curly quote) | `“reduce”, followed by “reuse”` | A |
| P-4 `Chapter-04-Natural-Vegetation-and-Forests-of-Pakistan/page-014.md` (printed p.79, Glossary) | `adding tress` / `live in the costal` (2 typos) | `adding trees` / `live in the coastal` | A |
| P-4 `Chapter-04-Natural-Vegetation-and-Forests-of-Pakistan/page-014.md` (printed p.79, Glossary) | `in canal irrigated tract` (missing article) | `in the canal irrigated tract` | B |
| P-5 `Chapter-05-Mineral-Power-Resources-and-Telecommunication/page-011.md` (printed p.90) | `Matiari Solar Power Plantin Sindh` (missing space) | `Matiari Solar Power Plant in Sindh` | A |
