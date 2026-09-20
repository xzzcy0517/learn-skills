# Anthropic Skills —— 官方 Agent Skills 合集

> 📝 笔记整理中。本页是**合集导读**;单个 skill 按许可证允许的范围分别拍快照、单独学。

## 快照信息(合集级)

| 项 | 值 |
| --- | --- |
| 源仓库 | <https://github.com/anthropics/skills> |
| 整仓快照 | ❌ **不 vendored** —— 仓库根无 LICENSE,且各 skill 许可证混合 |
| 已 vendored | [anthropics-skill-creator](/skills/anthropics-skill-creator/)(Apache-2.0) |
| 调研依据 | commit `34040c9c56`(2026-09-20 核查) |

## 许可普查(本仓库"注明出处"流程的第一份产出)

仓库内 19 个 skill 的许可证**并不统一**,结论如下:

| 许可 | Skill | 能否做快照 |
| --- | --- | --- |
| Apache-2.0 | academy-guide、algorithmic-art、brand-guidelines、canvas-design、claude-api、discernment-nudge、frontend-design、internal-comms、mcp-builder、skill-creator、slack-gif-creator、theme-factory、webapp-testing、web-artifacts-builder | ✅ 可逐个 `--subdir skills/<名称>` vendored |
| Anthropic 服务条款限制(SKILL.md 标注 Proprietary) | docx、pdf、pptx、xlsx | ❌ 只能经官方渠道使用,不镜像分发 |
| 无许可证文件 | doc-coauthoring | ❌ 仅跳转上游仓库学习 |

> 结论:想学 docx/pdf 这类文档技能,读笔记 + 走官方安装渠道;Apache-2.0 的 14 个技能可以在本仓库直接下载快照。

## 学习路线(TODO)

- [ ] skill-creator:如何写出好的 SKILL.md(已拍快照,先学)
- [ ] mcp-builder:构建 MCP 服务的技能
- [ ] claude-api:API 用法技能
- [ ] 其余 Apache-2.0 技能按需补充

## 参考资料

- 源仓库:<https://github.com/anthropics/skills>
- Agent Skills 文档:<https://docs.claude.com/en/docs/agents-and-tools/agent-skills/overview>
