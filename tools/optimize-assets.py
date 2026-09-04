#!/usr/bin/env python3
"""
optimize-assets.py — shrink Books/Digital/**/assets figure crops before they are
embedded as data URIs by tools/gen-digital.mjs.

Line-art/diagram PNGs are palette-quantized (adaptive, alpha-preserving); photos
(.jpg) are re-encoded at quality 82. Idempotent: running twice keeps files valid.

Usage: python3 tools/optimize-assets.py [--min-kb 40]
"""
import sys, os
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIGITAL = os.path.join(ROOT, "Books", "Digital")

def human(n): return f"{n/1024:.0f}KB"

def optimize(path, min_kb):
    before = os.path.getsize(path)
    if before < min_kb * 1024:
        return None
    ext = os.path.splitext(path)[1].lower()
    tmp = path + ".opt"
    try:
        im = Image.open(path)
        if ext in (".jpg", ".jpeg"):
            im = im.convert("RGB")
            im.save(tmp, "JPEG", quality=82, optimize=True, progressive=True)
        elif ext == ".png":
            im.load()
            if im.mode in ("RGBA", "LA", "P"):
                im = im.convert("RGBA")
                q = im.quantize(colors=256, method=Image.Quantize.FASTOCTREE)
                q.save(tmp, "PNG", optimize=True)
            else:
                rgb = im.convert("RGB")
                q = rgb.quantize(colors=64, method=Image.Quantize.MEDIANCUT)
                q.save(tmp, "PNG", optimize=True)
        else:
            return None
        after = os.path.getsize(tmp)
        if after < before * 0.92:  # only keep meaningful wins
            os.replace(tmp, path)
            return (before, after)
        os.remove(tmp)
        return None
    except Exception as e:
        print(f"  ! {os.path.basename(path)}: {e}")
        if os.path.exists(tmp): os.remove(tmp)
        return None

def main():
    min_kb = 40
    if "--min-kb" in sys.argv:
        min_kb = int(sys.argv[sys.argv.index("--min-kb") + 1])
    tot_b = tot_a = n = 0
    for book in sorted(os.listdir(DIGITAL)):
        bp = os.path.join(DIGITAL, book)
        if not os.path.isdir(bp): continue
        for chap in sorted(os.listdir(bp)):
            ap = os.path.join(bp, chap, "assets")
            if not os.path.isdir(ap): continue
            for f in sorted(os.listdir(ap)):
                r = optimize(os.path.join(ap, f), min_kb)
                if r:
                    b, a = r
                    tot_b += b; tot_a += a; n += 1
                    print(f"  {book}/{chap}/assets/{f}: {human(b)} → {human(a)}")
    print(f"optimized {n} file(s), {human(tot_b)} → {human(tot_a)} (saved {human(tot_b-tot_a)})")

if __name__ == "__main__":
    main()
