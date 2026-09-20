# Skill 笔记总览

每个 Skill 一篇笔记,与仓库 [`vendor/`](https://github.com/xzzcy0517/learn-skills/tree/main/vendor) 下的**上游原始快照**同名一一对应 —— 既能照着笔记学,也能直接下载快照离线使用。

新增 Skill 请走 [快照与更新工作流](/guide/vendor),写作细节见 [如何贡献](/guide/contribute)。

## 已收录

| Skill | 简介 | 笔记 | 快照 | 状态 |
| --- | --- | --- | --- | --- |
| ai-ppt-skill | 自制的「先 HTML 后 PPT」跨 Agent 演示技能 | [阅读](/skills/ai-ppt-skill/) | `vendor/ai-ppt-skill/` | 📝 笔记完整,待实操验证 |
| anthropics-skills | 官方 Agent Skills 合集导读 + 许可普查 | [阅读](/skills/anthropics-skills/) | ❌ 整仓不镜像(许可混合) | 📝 草稿 |
| anthropics-skill-creator | 官方的"写 Skill 的 Skill" | [阅读](/skills/anthropics-skill-creator/) | `vendor/anthropics-skill-creator/` | 📝 草稿 |

> 状态:📝 草稿 在写 / ✅ 完整 可直接上手 / ⏳ 待复学(outdated)上游有更新

## 候选清单(学习计划)

- [ ] anthropics/skills 的 Apache-2.0 子集逐个快照:mcp-builder、claude-api、webapp-testing……
  命令:`npm run vendor:fetch -- https://github.com/anthropics/skills anthropics-<名称> --subdir skills/<名称>`
  ⚠️ 先查 [许可普查](/skills/anthropics-skills/),docx/pdf/pptx/xlsx 等 ToS 受限技能**不可**做快照
- [ ] [travisvn/awesome-claude-skills](https://github.com/travisvn/awesome-claude-skills) —— 生态导航,用来找选题
- [ ] 持续添加中……
