#!/usr/bin/env python3
"""
embed-figures.py — make Books/Digital pages fully self-contained.

Optimizes every figure asset (photos -> JPEG, line art -> quantized PNG),
then inlines it into the HTML pages as a base64 data URI, replacing
src="assets/<name>". The optimized file also (re)writes the asset itself in
Books/Digital/assets/ so the repo keeps a small canonical copy.

Why: relative asset URLs only work when the assets/ folder travels with the
HTML. Data URIs guarantee figures (graphs!) render in every viewing context:
file://, a lone downloaded page, GitHub zip, any static server.

Usage:  python3 tools/embed-figures.py   (run from repo root)
"""
import base64
import io
import os
import re
import sys

from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIGITAL = os.path.join(ROOT, "Books", "Digital")
ASSETS = os.path.join(DIGITAL, "assets")

# photographic assets (JPEG is right for these; everything else is line art)
PHOTOS = {"M1-001-unit-banner", "M1-001-fig-telecom"}
# palette size for line-art quantization
LINE_COLORS = 256
ICON_COLORS = 64


def optimize_line_art(path: str, colors: int) -> bytes:
    im = Image.open(path)
    q = im.quantize(colors=colors, method=Image.MAXCOVERAGE, dither=Image.NONE)
    buf = io.BytesIO()
    q.save(buf, "PNG", optimize=True)
    return buf.getvalue()


def optimize_photo(path: str, quality: int = 82, max_w: int = 2000) -> bytes:
    im = Image.open(path)
    if im.width > max_w:
        h = round(im.height * max_w / im.width)
        im = im.resize((max_w, h), Image.LANCZOS)
    buf = io.BytesIO()
    im.save(buf, "JPEG", quality=quality, optimize=True, progressive=True)
    return buf.getvalue()


def main() -> int:
    if not os.path.isdir(ASSETS):
        print("assets folder missing", file=sys.stderr)
        return 1

    # 1) optimize every asset once, remember data-uri per stem
    uris: dict[str, str] = {}
    report: list[tuple[str, int, int]] = []
    for fname in sorted(os.listdir(ASSETS)):
        stem, ext = os.path.splitext(fname)
        if ext.lower() != ".png":
            continue
        path = os.path.join(ASSETS, fname)
        orig = os.path.getsize(path)
        if stem in PHOTOS:
            data = optimize_photo(path)
            out_name = stem + ".jpg"
            with open(os.path.join(ASSETS, out_name), "wb") as fh:
                fh.write(data)
            if fname != out_name and orig and os.path.exists(os.path.join(ASSETS, fname)):
                os.remove(os.path.join(ASSETS, fname))  # png superseded by jpg
            mime = "image/jpeg"
        elif "icon" in stem:
            data = optimize_line_art(path, ICON_COLORS)
            with open(path, "wb") as fh:
                fh.write(data)
            mime = "image/png"
        else:
            data = optimize_line_art(path, LINE_COLORS)
            with open(path, "wb") as fh:
                fh.write(data)
            mime = "image/png"
        uris[stem] = f"data:{mime};base64," + base64.b64encode(data).decode("ascii")
        report.append((fname if os.path.exists(os.path.join(ASSETS, fname)) else out_name,
                       orig, len(data)))

    # 2) inline into every page
    img_re = re.compile(r'src="assets/([A-Za-z0-9_-]+?)\.png"')
    for fname in sorted(os.listdir(DIGITAL)):
        if not fname.endswith(".html"):
            continue
        path = os.path.join(DIGITAL, fname)
        with open(path, "r", encoding="utf-8") as fh:
            html = fh.read()
        size_before = len(html)

        def repl(m: re.Match) -> str:
            stem = m.group(1)
            if stem not in uris:
                print(f"  !! {fname}: no optimized asset for {stem}", file=sys.stderr)
                return m.group(0)
            return f'src="{uris[stem]}"'

        html = img_re.sub(repl, html)
        with open(path, "w", encoding="utf-8") as fh:
            fh.write(html)
        print(f"{fname}: {size_before/1024:.0f} KB -> {len(html)/1024:.0f} KB")

    print("\nasset optimization:")
    for name, a, b in report:
        print(f"  {name}: {a/1024:.0f} KB -> {b/1024:.0f} KB")
    return 0


if __name__ == "__main__":
    sys.exit(main())
