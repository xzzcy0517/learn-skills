# ai-ppt-skill —— 「先 HTML 后 PPT」的跨 Agent 演示文稿技能

> 自己的 skill 练手第一篇。本笔记基于快照通读整理;端到端实操(转 .pptx)需 macOS + Chrome,待本机跑通后补「实战经验」并更新 status。

## 快照信息

| 项 | 值 |
| --- | --- |
| 源仓库 | <https://github.com/xzzcy0517/ai-ppt-skill> |
| 快照 commit / ref | `0e1a1cda10ffacc4400578a1fafd7bb176e0997a` @ `main` |
| 拉取日期 | 2026-09-20 |
| 许可证 | 自有仓库,未声明开源许可证(版权即本人) |
| 原始快照 | `vendor/ai-ppt-skill/`(clone 本仓库即可离线使用) |

## 是什么

把思路文档、口语内容变成一套风格统一的 PPT:AI 先生成 HTML 演示页(文本,AI 最擅长),浏览器校准后一键转 16:9 的 .pptx,同时产出配套口述稿并写入每页演讲者备注。

- 兼容任何支持 `SKILL.md` 的 Agent:**Claude Code、Kimi Code、Kimi 桌面版、WorkBuddy、Codex**
- 内置 7 种受众风格(tech-dark / elementary / junior / senior / university / government / report),另有成品参照 `themes/tech-dark.example.html`
- 核心卖点:**改版成本低** —— 永远只改 HTML 源头,重跑脚本出新版,PPT 本身是高清图页、不可直接编辑

适合谁:要让 agent 做课件、汇报、答辩稿,又受够了 AI 直出 PPT 格式漂移的人。

## 快速上手

```bash
# 1. 安装到对应 Agent 的用户级 skill 目录(目录名必须是 ai-ppt)
git clone git@github.com:xzzcy0517/ai-ppt-skill.git ~/.claude/skills/ai-ppt   # Claude Code
# Kimi/Codex 共享目录:~/.agents/skills/ai-ppt   Kimi 桌面:~/.kimi/skills/ai-ppt

# 2. 依赖:macOS + Google Chrome(无头渲染)+ python-pptx
pip install python-pptx

# 3. 对 Agent 说一句「帮我生成一份 PPT」即可触发
```

非 macOS 环境(如 Linux 服务器)需设 `CHROME` 环境变量指向浏览器可执行文件 —— 脚本默认只探测 macOS 路径。

## 核心用法

工作流固定七步(SKILL.md 强约束,agent 按序执行):

1. **定风格**:明示风格,或由受众/场合推断并告知;严禁混用两种风格
2. **理解素材**:口语润色为书面,但不增删用户观点
3. **生成 slides.html**:单文件、每页一个 `<section class="slide" id="sN">`、固定 1280×720;CSS 从所选 theme 文件完整复制,不改设计 token
4. **逐页截图自检**:按 `?slide=N` 无头渲染逐页读图,查溢出/对齐/对比度
5. **转 PPT**:`python3 scripts/html_to_ppt.py slides.html 输出.pptx --notes 口述稿.md`(2 倍清晰度整页图)
6. **口述稿**:按 `## 第 N 页 · 标题` 分节,每节 100~250 字,同步写入演讲者备注
7. **交付说明**:告知用户"改就改 HTML 再重跑"

组件 class 全风格统一(`kicker` / `cards` / `flow` / `vs` / `quote` / `big-idea` / `list` / `pageno` / `footer-brand`),换风格 = 换 CSS,结构不动 —— 这是它能塞进 7 套主题还能保持一致的关键设计。

## 实战经验与踩坑

- ✅ 路径解析写法值得抄:`SKILL.md` 里把 skill 目录解析为 `AI_PPT_SKILL_DIR` 绝对路径,不依赖 `${KIMI_SKILL_DIR}` 等客户端专有变量 —— 一份 SKILL.md 跨所有 Agent 通用
- ✅ 版式纪律写成硬指标(页边距 60~64px、列表 ≤5 条、金句每页最多一条),agent 自检有明确锚点
- ⚠️ 转出的每页是图片,**PowerPoint 里改不了字** —— 所有修订必须回到 HTML;这是"格式零漂移"的代价,交付前要和用户讲清
- ⚠️ 待验证:Linux 服务器 + Chromium 设 `CHROME` 后转换是否顺畅(macOS 路径探测不含 Linux)
- TODO:本机实操后补充真实踩坑

## 参考资料

- 源仓库:<https://github.com/xzzcy0517/ai-ppt-skill>
- 本笔记对应快照:`vendor/ai-ppt-skill/`(上述 commit 的原始备份)
- 成品参照:快照内 `themes/tech-dark.example.html`

## 最后验证

- 笔记基于快照 `0e1a1cda10`,端到端跑通验证:—(待本机 macOS 实操后填写,并把 `SOURCE.yml` 的 `status` 改为 `verified`)
