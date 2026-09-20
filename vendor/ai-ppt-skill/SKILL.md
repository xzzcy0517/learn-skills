---
name: ai-ppt
description: 用「先生成 HTML、再转 PPT」的工作流制作、生成或修改 PPT、演示文稿、幻灯片、课件、答辩稿与汇报材料，也适用于把思路文档或口语文本变成 PPT。生成风格统一的页面，并同步产出配套口述稿与演讲者备注；内置科技分享、各学段课堂、政务汇报和领导汇报等受众风格，支持低成本反复改版。
---

# AI-PPT：先生成 HTML，再生成 PPT

核心思路：AI 最擅长处理文本，HTML 就是文本。不要直接生成 PPT 文件——先生成 HTML 演示页，在浏览器里校准格式，确认后再一键转成 PPT。改版永远只改 HTML 源头，重跑脚本出新版。

## Skill 路径

开始工作时，先把当前 `SKILL.md` 所在目录解析为绝对路径，并记作 `AI_PPT_SKILL_DIR`。后续读取主题或调用脚本时都基于这个目录；不要依赖 `${KIMI_SKILL_DIR}` 等特定客户端环境变量，也不要写死 Claude Code、Kimi、WorkBuddy 或 Codex 的安装路径。

## 第 0 步：确定风格（Theme）

本 Skill 内置多种风格，每种风格的完整设计规范（配色、字体、组件 CSS）在 `<AI_PPT_SKILL_DIR>/themes/<风格ID>.md` 中：

| 风格 ID | 风格名称 | 适用场景 |
| --- | --- | --- |
| `tech-dark` | 深色科技风 | 技术分享、AI/互联网主题、行业交流（默认风格） |
| `elementary` | 童趣乐园风 | 小学课堂、低年级分享、亲子活动 |
| `junior` | 清新活力风 | 初中课堂、社团活动 |
| `senior` | 简约求知风 | 高中课堂、知识密度较高的讲授 |
| `university` | 学术蓝风 | 大学课堂、学术报告、论文答辩 |
| `government` | 政务红蓝风 | 政府单位、党政机关、事业单位汇报 |
| `report` | 商务蓝灰风 | 向领导/老师的工作汇报、项目汇报 |

风格选择规则：

- 用户明确指定风格 → 直接使用。
- 用户说明了受众/场合但未指定风格 → 按上表推断，并在动手前告知选择了哪种风格。
- 无法推断 → 询问用户，不要擅自决定。
- 任何情况下都不得混用多种风格的元素；选定后严格执行该 theme 文件的 CSS 与说明。

## 工作流程（严格按顺序执行）

1. **理解素材**：通读用户提供的思路文档 / 口语文本。口语化内容必须润色为书面表达，但保留原意与观点，不擅自增加用户没有的新论点。措辞语气要匹配所选风格（如政务风正式严谨、小学风活泼亲切）。
2. **规划结构**：把内容组织成 8~12 页幻灯片，典型结构为：封面 → 背景/回顾 → 痛点/现状 → 核心内容（1~4 页）→ 方法/流程 → 总结 → 收尾。
3. **生成 slides.html**：单文件、每页一个 `<section class="slide" id="sN">`，固定 1280×720。`<style>` 内容从所选 `themes/<风格ID>.md` 的 CSS 代码块完整复制，不得自行改动设计 token。`tech-dark` 另有完整成品参照 `themes/tech-dark.example.html`。
4. **逐页渲染并自检**：用无头 Chrome 按 `slides.html?slide=N` 逐页截图（页面内置 JS 只显示第 N 页），**逐张读图检查**：文字溢出、对齐、留白失衡、配色对比度，发现问题先改 HTML 再重渲。
5. **转换 PPT**：运行 `<AI_PPT_SKILL_DIR>/scripts/html_to_ppt.py`（用法见下），生成 16:9（13.333×7.5 英寸）的 .pptx，每页为 2 倍清晰度全幅图片。
6. **配套口述稿**：生成 `口述稿.md`，按 `## 第 N 页 · 标题` 分节，每节 100~250 字、适合照读的口语稿，语气匹配受众；同一份内容写入 PPT 每页的演讲者备注（脚本 `--notes` 参数自动完成）。
7. **交付说明**：明确告诉用户——PPT 内每页是高清图片、不可直接编辑，改动都在 HTML 源头完成；改版 = 改 HTML / 口述稿 → 重跑脚本。

## 转换脚本用法

```bash
AI_PPT_SKILL_DIR="/absolute/path/to/ai-ppt"
python3 "$AI_PPT_SKILL_DIR/scripts/html_to_ppt.py" slides.html 输出文件名.pptx --notes 口述稿.md
```

- 自动按 `<section class="slide" id="sN">` 数量渲染，2 倍清晰度截图
- 依赖：macOS 上的 Google Chrome（无头模式）+ Python 包 `python-pptx`；缺依赖时明确告知用户，不要静默失败
- Chrome 路径可用环境变量 `CHROME` 覆盖（默认探测常见 macOS 路径）

## slides.html 页面骨架（所有风格通用）

HTML 结构、class 命名在所有风格间保持一致（kicker / cards / flow / vs / quote / big-idea / list / pageno / footer-brand），只换 CSS。每页必须包含以下 JS，保证 `?slide=N` 截图只含单页：

```html
<script>
  var n = new URLSearchParams(location.search).get('slide');
  var slides = document.querySelectorAll('.slide');
  if (n) { var el = document.getElementById('s' + n); if (el) el.classList.add('active'); }
  else { slides.forEach(function(s){ s.classList.add('active'); }); }
</script>
```

`.slide` 默认 `display:none`，`.slide.active` 为 `display:flex`（纵向）。

## 通用版式纪律（所有风格都必须遵守）

- 画布 1280×720 CSS 像素/页；截图用 `--force-device-scale-factor=2`（输出 2560×1440）
- 页边距 60~64px 上下 / 76~80px 左右；一页只讲一件事；列表项 ≤ 5 条
- 每页右下角 `.pageno` 页码（`NN / 总数`），内容页左下角 `.footer-brand`
- 金句块 `.quote` 每页最多一条；绝不出现文字溢出卡片或贴边
- 组件的 HTML 结构与 class 名以 `themes/tech-dark.example.html` 为基准参照

## 质量检查清单（交付前逐项确认）

- [ ] 风格选择与受众匹配，且全篇只用一种风格
- [ ] 每页截图均已读图检查，无溢出、无错位、无低对比
- [ ] 页码、footer 齐全且编号正确
- [ ] .pptx 可用 python-pptx 重新打开，页数与 HTML 一致
- [ ] 每页演讲者备注已写入对应口述稿段落
- [ ] 口述稿.md 与 PPT 同目录，分节标题含页码，语气匹配受众
- [ ] 内容忠实于用户原始思路，润色但未篡改观点
