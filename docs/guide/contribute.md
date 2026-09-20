# 如何贡献

## 写作流程

1. **选题**:在 [Skill 笔记总览](/skills/) 确认还没有人写过该 Skill
2. **拍快照**:仓库根目录执行 `npm run vendor:fetch -- <上游仓库地址>`,快照落在 `vendor/<name>/`
3. **核许可**:打开 `vendor/<name>/SOURCE.yml`,把 license 的 TODO 改成实际许可证,确认上游 LICENSE 已保留
4. **写笔记**:复制 [笔记模板](/skills/template) → `docs/skills/<name>/index.md`,回填「快照信息」一节
5. **登记**:在总览页表格中加一行(含 vendor 路径)
6. **配导航**:把新页面加进 `docs/.vitepress/config.mts` 的 `/skills/` 侧边栏
7. **自测**:`npm run docs:dev` 本地预览,`npm run docs:build` 确认构建无死链

上游有更新时,用 `npm run vendor:update -- <name>` 刷新快照并对照 compare 链接复学,完整循环见 [快照与更新工作流](/guide/vendor)。

## 写作要求

- **标题**:使用 `# Skill 名 —— 一句话定位`,不要只写仓库名
- **小白优先**:「快速上手」第一段必须是可复制给 AI 的自然语言安装指令,命令行走后面标注"备用";术语首次出现配大白话解释
- **出处必标**:「快照信息」一节必须与 `vendor/<name>/SOURCE.yml` 完全一致(source、commit、日期、license)
- **代码块**:标注语言,保证读者可直接复制运行
- **截图/示例**:优先用自己跑通的结果,注明来源与版本
- **时效性**:「最后验证」日期与快照 commit 对应;复学后一起更新
- **语言**:中文为主,专有名词、命令、配置保留英文原文

## Git 提交规范

遵循 [Conventional Commits](https://www.conventionalcommits.org/zh-hans/):

| 前缀 | 用途 | 示例 |
| --- | --- | --- |
| `docs:` | 新增/修改笔记与文档 | `docs: add anthropics-skills notes` |
| `vendor:` | 拉取/刷新上游快照 | `vendor: fetch anthropics/skills @ 0d4f8a2` |
| `chore:` | 工程配置、依赖 | `chore: bump vitepress to 1.7` |
| `fix:` | 修复链接、排版错误 | `fix: repair dead link in guide` |

提交信息保持简短,一行说清楚做了什么。
