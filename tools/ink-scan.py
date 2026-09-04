#!/usr/bin/env python3
"""Ink-margin scan for figure crops (Task 11-e).
Usage:
  python3 tools/ink-scan.py bbox <image> [thr]      -> report ink bbox fractions + edge margins (px)
  python3 tools/ink-scan.py rowprofile <image>      -> print per-row ink runs (compact) for locating text bands
  python3 tools/ink-scan.py colprofile <image>      -> per-column ink runs
Ink = pixels darker than thr (0-255) in grayscale; also counts colored (saturated) pixels.
"""
import sys
import numpy as np
from PIL import Image


def load(path):
    im = Image.open(path).convert("RGB")
    a = np.asarray(im).astype(np.int16)
    g = a.mean(axis=2)
    mx = a.max(axis=2)
    mn = a.min(axis=2)
    sat = mx - mn
    ink = (g < 200) | (sat > 60)
    return a, g, ink


def bbox_report(path, thr_override=None):
    a, g, ink = load(path)
    if thr_override:
        ink = (g < float(thr_override)) | ((a.max(axis=2) - a.min(axis=2)) > 60)
    h, w = ink.shape
    ys, xs = np.where(ink)
    if len(ys) == 0:
        print("NO INK")
        return
    y0, y1, x0, x1 = ys.min(), ys.max(), xs.min(), xs.max()
    print(f"size {w}x{h}")
    print(f"ink bbox px: x {x0}..{x1}  y {y0}..{y1}")
    print(f"ink bbox frac: L {x0/w:.4f} T {y0/h:.4f} R {x1/w:.4f} B {y1/h:.4f}")
    print(f"margins px: left {x0} right {w-1-x1} top {y0} bottom {h-1-y1}")
    # ink density per edge strip to see if content touches edge
    for name, cnt in (("left-edge-col0", ink[:, 0].sum()), ("right-edge-col-1", ink[:, -1].sum()),
                      ("top-edge-row0", ink[0, :].sum()), ("bottom-edge-row-1", ink[-1, :].sum())):
        print(f"{name}: {cnt}")


def rowprofile(path):
    a, g, ink = load(path)
    h, w = ink.shape
    rows = ink.sum(axis=1)
    # print runs of rows with ink > 0.5% of width
    active = rows > w * 0.005
    runs = []
    start = None
    for i, v in enumerate(active):
        if v and start is None:
            start = i
        elif not v and start is not None:
            runs.append((start, i - 1))
            start = None
    if start is not None:
        runs.append((start, h - 1))
    print(f"h={h} w={w}; active row runs (frac start-end, px start-end, max-ink-px):")
    for s, e in runs:
        seg = rows[s:e + 1]
        print(f"  {s/h:.4f}-{e/h:.4f}  rows {s}-{e}  maxink {seg.max()}")


def colprofile(path):
    a, g, ink = load(path)
    h, w = ink.shape
    cols = ink.sum(axis=0)
    active = cols > h * 0.005
    runs = []
    start = None
    for i, v in enumerate(active):
        if v and start is None:
            start = i
        elif not v and start is not None:
            runs.append((start, i - 1))
            start = None
    if start is not None:
        runs.append((start, w - 1))
    print(f"h={h} w={w}; active col runs (frac start-end, px start-end, max-ink-px):")
    for s, e in runs:
        seg = cols[s:e + 1]
        print(f"  {s/w:.4f}-{e/w:.4f}  cols {s}-{e}  maxink {seg.max()}")


if __name__ == "__main__":
    cmd = sys.argv[1]
    path = sys.argv[2]
    if cmd == "bbox":
        bbox_report(path, sys.argv[3] if len(sys.argv) > 3 else None)
    elif cmd == "rowprofile":
        rowprofile(path)
    elif cmd == "colprofile":
        colprofile(path)
