#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""html_to_ppt.py — 把分节的 slides.html 逐页渲染成 2K PNG，再组装成 16:9 PPT。

用法:
    python3 html_to_ppt.py slides.html 输出.pptx [--notes 口述稿.md]

要求:
    - HTML 中每页为 <section class="slide" id="s1"> ... <section class="slide" id="sN">
    - 页面内置 JS 支持 ?slide=N 只显示第 N 页（见 SKILL.md 的页面骨架）
    - macOS + Google Chrome（可用环境变量 CHROME 指定路径）
    - pip install python-pptx

--notes 文件格式: 按 "## 第 N 页 ..." 分节的 Markdown，每节正文写入第 N 页演讲者备注。
"""
import os, re, subprocess, sys

def find_chrome():
    candidates = [
        os.environ.get("CHROME"),
        "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        "/Applications/Chromium.app/Contents/MacOS/Chromium",
        "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
    ]
    for c in candidates:
        if c and os.path.exists(c):
            return c
    sys.exit("[ERROR] 未找到 Chrome/Chromium，请设置环境变量 CHROME 指向浏览器可执行文件")

def count_slides(html_path):
    with open(html_path, encoding="utf-8") as f:
        html = f.read()
    ids = re.findall(r'<section[^>]*class="slide"[^>]*id="s(\d+)"', html)
    if not ids:
        sys.exit("[ERROR] HTML 中未找到 <section class=\"slide\" id=\"sN\"> 结构")
    return max(int(i) for i in ids)

def parse_notes(md_path):
    """解析 '## 第 N 页 ...' 分节的 Markdown，返回 {页码: 正文}"""
    notes, current, buf = {}, None, []
    with open(md_path, encoding="utf-8") as f:
        for line in f:
            m = re.match(r"^##\s*第\s*(\d+)\s*页", line)
            if m:
                if current is not None:
                    notes[current] = "\n".join(buf).strip()
                current, buf = int(m.group(1)), []
            elif current is not None:
                buf.append(line.rstrip())
    if current is not None:
        notes[current] = "\n".join(buf).strip()
    # 去掉每节末尾的分隔线
    return {k: re.sub(r"\n?---\s*$", "", v).strip() for k, v in notes.items()}

def render(html_path, total, out_dir, chrome):
    os.makedirs(out_dir, exist_ok=True)
    for i in range(1, total + 1):
        png = os.path.join(out_dir, f"slide_{i:02d}.png")
        url = f"file://{os.path.abspath(html_path)}?slide={i}"
        cmd = [chrome, "--headless=new", "--disable-gpu", "--hide-scrollbars",
               "--force-device-scale-factor=2", "--window-size=1280,720",
               f"--screenshot={png}", url]
        r = subprocess.run(cmd, capture_output=True, text=True)
        if r.returncode != 0 or not os.path.exists(png):
            sys.exit(f"[ERROR] 第 {i} 页渲染失败: {r.stderr.strip()[:300]}")
        print(f"[OK] rendered slide {i}/{total}")

def build_ppt(total, out_dir, ppt_path, notes):
    from pptx import Presentation
    from pptx.util import Inches
    prs = Presentation()
    prs.slide_width = Inches(13.333)
    prs.slide_height = Inches(7.5)
    blank = prs.slide_layouts[6]
    for i in range(1, total + 1):
        png = os.path.join(out_dir, f"slide_{i:02d}.png")
        slide = prs.slides.add_slide(blank)
        slide.shapes.add_picture(png, 0, 0, width=prs.slide_width, height=prs.slide_height)
        if notes.get(i):
            slide.notes_slide.notes_text_frame.text = notes[i]
    prs.save(ppt_path)
    print(f"[OK] saved {ppt_path} ({total} slides, {len(notes)} with notes)")

def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    if len(args) < 2:
        sys.exit(__doc__)
    html_path, ppt_path = args[0], args[1]
    notes = {}
    if "--notes" in sys.argv:
        idx = sys.argv.index("--notes")
        notes = parse_notes(sys.argv[idx + 1])
        print(f"[OK] parsed notes for {len(notes)} slides")
    out_dir = os.path.join(os.path.dirname(os.path.abspath(ppt_path)) or ".", "slide_png")
    total = count_slides(html_path)
    render(html_path, total, out_dir, find_chrome())
    build_ppt(total, out_dir, ppt_path, notes)

if __name__ == "__main__":
    main()
