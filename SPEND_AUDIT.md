# Spend Reconstruction Audit

**Purpose:** the hero stat claims **190,000+ SAR managed**. Reconstructing total spend
from the figures already published on the site gives roughly **229,000 SAR** — meaningfully
higher. This file shows where every riyal comes from so each line can be checked against
the live ad accounts before the hero number is changed.

**The hero number has NOT been changed.** It still reads 190,000+ SAR.

**Verify each line below, then decide the new headline figure.**

---

## Reconstruction by client

| # | Client | Derived spend (SAR) | Source figure | Confidence |
|---|---|---:|---|---|
| 01 | Waqf Programs | **83,382.99** | May 40,043.26 + June 43,339.73, read directly from the WQF-Performance Google Sheet | ✅ Exact (sheet) |
| 02 | BE Training | **84,336.00** | Meta 7,629 + Snapchat 70,017 + TikTok 6,690 — all three printed on the page | ✅ Exact (stated) |
| 03 | PRO X | **53,302.20** | Meta 20,076 + Snapchat 26,546 (both stated) + TikTok 6,680.20 (derived) | ⚠️ Partly derived |
| 04 | BE Pioneer | **unknown** | No spend or CPL published for this client | ❌ Missing |
| 05 | Najd El Jannob | **8,455.93** | "Cost SAR8,455.93" visible in the Google Ads dashboard screenshot | ✅ Exact (screenshot) |
| | **Total (excl. BE Pioneer)** | **229,477.12** | | |

---

## Line-by-line derivation

### 01 · Waqf Programs — 83,382.99 SAR ✅
Taken straight from the source spreadsheet, not derived from the page:

| Month | Snapchat | Meta | TikTok | Total |
|---|---:|---:|---:|---:|
| May | 10,899.73 | 25,220.06 | 3,923.47 | 40,043.26 |
| June | 13,932.43 | 19,224.13 | 10,183.17 | 43,339.73 |
| **Total** | | | | **83,382.99** |

> **Note on the 83,166 figure:** dividing the published sales value by the published ROAS
> (1,455,405 ÷ 17.5) gives 83,166 — about 217 SAR low. That gap is only a rounding artifact:
> the true ROAS is 17.4544x, not 17.5x. **83,382.99 is the correct figure.**

### 02 · BE Training — 84,336.00 SAR ✅
Every component is printed on the page; nothing derived.

| Platform | Spend | How it appears on the page |
|---|---:|---|
| Meta | 7,629 | "7,629 SAR — Spend" |
| Snapchat | 70,017 | "70,017 SAR — Budget managed" |
| TikTok | 6,690 | "6,690 SAR — Spend" |

> ⚠️ Snapchat is labelled **"Budget managed"**, not "Spend". If that 70,017 is budget
> *allocated* rather than *consumed*, this client's real spend — and the total — drops.
> **Worth checking first: it is 31% of the whole reconstruction.**

### 03 · PRO X — 53,302.20 SAR ⚠️
Two of three platforms are stated; TikTok is derived.

| Platform | Spend | Source |
|---|---:|---|
| Meta | 20,076 | Stated: "20,076 SAR — Spend" |
| Snapchat | 26,546 | Stated: "26,546 SAR — Spend" |
| TikTok | 6,680.20 | **Derived:** 263 leads × 25.4 SAR CPL |

> TikTok spend is not published — only the CPL and the lead count. 6,680.20 is
> reconstructed arithmetic, so confirm it against the account.

### 04 · BE Pioneer — unknown ❌
565 Meta leads and 291 Snapchat leads are published, but **no spend and no CPL**.
Nothing can be reconstructed. This is the one gap that makes the total a floor
rather than a final number. (The site now carries a TODO comment at this client's
block for exactly these two figures.)

### 05 · Najd El Jannob — 8,455.93 SAR ✅
The dashboard screenshot (`img/shot-najd-google.png`) shows **Cost SAR8,455.93** directly.

> Multiplying the published 4,785 clicks × 1.77 SAR CPC gives 8,469.45 — 13.52 SAR high,
> because the 1.77 CPC is rounded. **Use 8,455.93; it is the figure Google reports.**

---

## What this means for the hero stat

| | SAR |
|---|---:|
| Currently claimed | 190,000+ |
| Reconstructed, excluding BE Pioneer | **229,477.12** |
| Understated by at least | **~39,477** |

Once BE Pioneer's spend is added the true figure only goes higher, so **229,477 is a floor.**

**Before changing the hero number, confirm in this order:**

1. **BE Training Snapchat 70,017** — budget managed vs. actually spent (largest single line, 31% of total)
2. **BE Pioneer spend** — the only fully missing client
3. **PRO X TikTok 6,680.20** — derived from CPL × leads, not stated

If all three hold, **"230,000+ SAR managed"** is defensible and still conservative.
