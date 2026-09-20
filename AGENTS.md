# AGENTS.md — learn-skills 仓库维护规则

本仓库以服务器端直接维护为主(Claude Code / Kimi Code 等终端 agent 修改后推送 GitHub,本地电脑只拉取验证)。
本文件是**唯一的 agent 规则源**,细则全部外置到仓库文档,按需引用。
根目录 `CLAUDE.md` 只是导入本文件的指针(兼容旧版 Claude Code),**规则一律只写在本文件,禁止写进 CLAUDE.md**。

## 硬性规则(每次都要遵守)

1. **Git 身份**:author `xzzcy0517 <xzzcy0517@163.com>`(仓库级已配置,不要动全局)
2. **提交规范**:Conventional Commits,标题一行、简短;前缀用 `docs:` / `vendor:` / `chore:` / `fix:`
3. **提交门槛**:`npm run docs:build` 通过(含死链检查)才能 commit,不过不提交
4. **提交即推送**:commit 后立刻 `git push origin main`(本地验证流程依赖拉取最新代码)
5. **许可红线**:上游标注 Proprietary / 受服务条款限制 / 无 LICENSE 的内容,**一律不做快照**,只写笔记跳转出处
6. **快照不可改写**:`vendor/` 内上游文件原样保存;`SOURCE.yml` 的 `license` 字段必须人工核对,留 TODO 不得提交

## 按需引用(做哪件事,读哪份文件,别凭记忆猜)

| 任务 | 先读 |
| --- | --- |
| 拉取 / 更新 skill 快照 | `docs/guide/vendor.md`(完整工作流)+ `scripts/vendor.mjs`(工具行为) |
| 撰写 / 修改学习笔记 | `docs/skills/template.md`(结构)+ `docs/guide/contribute.md`(规范) |
| 新增页面、调整导航 | `docs/.vitepress/config.mts` |
| 快照目录与出处字段约定 | `vendor/README.md` + `vendor/SOURCE.example.yml` |

## 已知的坑(踩过的,别再踩)

- VitePress 构建时,ASCII 字母开头的尖括号占位符(如 `<YYYY-MM-DD>`、`<main>`)会被 Vue 当作 HTML 标签,报 "Element is missing end tag" —— **必须用反引号包住**;中文内容的占位符无此问题
- 新增一篇笔记要同步三处,缺一即"不完整":`docs/skills/index.md` 总览表、`config.mts` 侧边栏、与 `vendor/<同名>/` 快照对应
- 只 vendored 上游 monorepo 的子目录时,用 `--subdir`(脚本会自动做 sparse checkout 并带上仓库根的 LICENSE/README)

## 常用命令(仓库根目录)

```bash
npm run docs:dev       # 本地预览 http://localhost:5173
npm run docs:build     # 构建 + 死链检查(提交前必跑)
npm run vendor:fetch -- <github-url> [name] [--subdir <path>] [--ref <branch|tag>]
npm run vendor:update -- <name>
```
