# AI-PPT Skill

> 用「先生成 HTML、再转 PPT」的工作流，生成风格统一、适合不同受众的 PPT，并同步产出配套口述稿与演讲者备注。支持低成本反复改版。

## 这是什么？

这是一个可用于 **Claude Code、Kimi Code、Kimi 桌面应用、WorkBuddy、Codex** 等支持 `SKILL.md` 的 Agent Skill，能够把思路、文档和口述内容变成完整的 PPT 演示文稿。

核心思路：**AI 擅长文本处理，HTML 就是文本。** 不要直接生成 PPT 文件——先生成 HTML 演示页，在浏览器里校准格式，确认后再一键转成 PPT。改版永远只改 HTML 源头，重跑脚本出新版。

## 安装

1. 将本仓库克隆到对应 Agent 的用户级 Skill 目录，并将目录名设为 `ai-ppt`：

```bash
git clone git@github.com:xzzcy0517/ai-ppt-skill.git <Skill目录>/ai-ppt
```

常见目录：

| Agent | Skill 目录 |
| --- | --- |
| Codex / Kimi Code（共享 Agent Skills） | `~/.agents/skills/ai-ppt` |
| Claude Code | `~/.claude/skills/ai-ppt` |
| Kimi 桌面应用 | `~/.kimi/skills/ai-ppt` |
| WorkBuddy | `~/.workbuddy/skills/ai-ppt` |

2. 确保你的环境中安装了依赖：

- **macOS** + **Google Chrome**（用于无头渲染 HTML 为 PNG）
- Python 3 + `python-pptx` 包：

```bash
pip install python-pptx
```

3. 在对应 Agent 中直接说「帮我生成一份 PPT」即可触发。

## 工作流程

| 步骤 | 说明 |
|------|------|
| 1. 理解素材 | 通读你提供的思路/文档/口语文本，润色但不篡改观点 |
| 2. 规划结构 | 组织成 8~12 页幻灯片（封面→背景→痛点→核心内容→收尾） |
| 3. 生成 HTML | 生成单文件 `slides.html`，每页一个 `<section>` |
| 4. 渲染自检 | 无头 Chrome 逐页截图，逐张读图检查排版 |
| 5. 转 PPT | 运行脚本，生成 16:9 `.pptx` |
| 6. 口述稿 | 生成配套 `口述稿.md` + 写入 PPT 演讲者备注 |

## 内置风格

| 风格 ID | 风格名称 | 适用场景 |
| --- | --- | --- |
| `tech-dark` | 深色科技风 | 技术分享、AI/互联网主题、行业交流 |
| `elementary` | 童趣乐园风 | 小学课堂、亲子活动 |
| `junior` | 清新活力风 | 初中课堂、社团活动、轻松分享 |
| `senior` | 简约求知风 | 高中课堂、知识密度较高的讲授 |
| `university` | 学术蓝风 | 大学课堂、学术报告、论文答辩 |
| `government` | 政务红蓝风 | 政府单位、党政机关、事业单位汇报 |
| `report` | 商务蓝灰风 | 工作汇报、项目汇报 |

所有风格共用 1280×720、16:9 的版式纪律和标准组件，并根据受众切换配色、字体层级与表达语气。

## 文件结构

```
ai-ppt/
├── SKILL.md                    # Skill 定义文件（核心提示词）
├── scripts/
│   └── html_to_ppt.py          # HTML → PPT 转换脚本
├── themes/
│   ├── tech-dark.md             # 深色科技风规范
│   ├── tech-dark.example.html   # 深色科技风参考实现
│   └── *.md                     # 其他受众风格规范
└── README.md
```

## 用法示例

在支持该 Skill 的 Agent 中直接说：

- 「帮我把这份文档做成 PPT」
- 「生成一份关于 AI 写作方法的答辩 PPT」
- 「把这个思路转成演示文稿」

Claude 会按工作流自动生成 HTML → 渲染截图 → 输出 `.pptx` + 口述稿。

## 改版与迭代

改版不需要重做——只需修改 `slides.html` 中的内容或样式，然后重新运行：

```bash
python3 scripts/html_to_ppt.py slides.html 新版本.pptx --notes 口述稿.md
```

## 许可

MIT
