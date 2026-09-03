#!/usr/bin/env python3
"""
crop-figure.py — extract figure images from raw textbook scans (Digital test edition).

Figures on a scanned page are cropped from the ORIGINAL full-resolution JPG and
saved as PNG assets under Books/Digital/assets/. Coordinates are FRACTIONS of the
page (0..1, left/top/right/bottom) so they survive any rescaling of the source.

Usage:
  python3 tools/crop-figure.py probe  <scan.jpg>                # size + dominant colors of strips
  python3 tools/crop-figure.py crop   <scan.jpg> <out.png> L T R B   # fractional box
  python3 tools/crop-figure.py grid   <scan.jpg>                # render coordinate grid overlay
"""
import sys, os
from collections import Counter
from PIL import Image

def probe(path):
    im = Image.open(path).convert("RGB")
    w, h = im.size
    print(f"size: {w}x{h}")
    def strip_colors(y0f, y1f, label):
        strip = im.crop((0, int(y0f*h), w, int(y1f*h)))
        q = strip.quantize(colors=8, method=Image.Quantize.MEDIANCUT).convert("RGB")
        counts = Counter(q.getdata())
        print(f"{label}: " + " | ".join(f"#{r:02x}{g:02x}{b:02x} x{c}" for (r,g,b),c in counts.most_common(6)))
    strip_colors(0.0, 0.05, "top 5%")
    strip_colors(0.95, 1.0, "bottom 5%")
    # probe a horizontal band mid-page for text/label colors (darkest saturated pixels)
    mid = im.crop((0, int(0.10*h), w, int(0.20*h)))
    px = list(mid.getdata())
    blues = Counter(p for p in px if p[2] > 100 and p[2] - p[0] > 40 and p[2] - p[1] > 20 and sum(p) < 420)
    reds  = Counter(p for p in px if p[0] > 100 and p[0] - p[1] > 60 and p[0] - p[2] > 40 and sum(p) < 420)
    if blues: print("midband saturated blues: " + " | ".join(f"#{r:02x}{g:02x}{b:02x} x{c}" for (r,g,b),c in blues.most_common(4)))
    if reds:  print("midband saturated reds:  " + " | ".join(f"#{r:02x}{g:02x}{b:02x} x{c}" for (r,g,b),c in reds.most_common(4)))

def crop(path, out, l, t, r, b):
    im = Image.open(path).convert("RGB")
    w, h = im.size
    box = (int(l*w), int(t*h), min(w, int(r*w)), min(h, int(b*h)))
    fig = im.crop(box)
    os.makedirs(os.path.dirname(out) or ".", exist_ok=True)
    fig.save(out, "PNG", optimize=True)
    print(f"saved {out}  ({fig.size[0]}x{fig.size[1]} from box l={l} t={t} r={r} b={b})")

def grid(path):
    im = Image.open(path).convert("RGB").copy()
    w, h = im.size
    from PIL import ImageDraw
    d = ImageDraw.Draw(im)
    for i in range(1, 10):
        d.line([(w*i//10, 0), (w*i//10, h)], fill=(255, 0, 255), width=3)
        d.text((w*i//10 + 6, 8), f".{i}", fill=(255, 0, 255))
        d.line([(0, h*i//10), (w, h*i//10)], fill=(0, 200, 0), width=3)
        d.text((8, h*i//10 + 6), f".{i}", fill=(0, 200, 0))
    im.save("/tmp/grid.jpg", quality=88)
    print("saved /tmp/grid.jpg")

if __name__ == "__main__":
    cmd = sys.argv[1]
    if cmd == "probe":  probe(sys.argv[2])
    elif cmd == "crop": crop(sys.argv[2], sys.argv[3], *map(float, sys.argv[4:8]))
    elif cmd == "grid": grid(sys.argv[2])
    else: print(__doc__); sys.exit(1)
