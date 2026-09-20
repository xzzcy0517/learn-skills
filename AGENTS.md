# AGENTS.md — learn-skills 仓库维护规则

本仓库以服务器端直接维护为主(Claude Code / Kimi Code 等终端 agent 修改后推送 GitHub,本地电脑只拉取验证)。
本文件是**唯一的 agent 规则源**,细则全部外置到仓库文档,按需引用。
根目录 `CLAUDE.md` 只是导入本文件的指针(兼容旧版 Claude Code),**规则一律只写在本文件,禁止写进 CLAUDE.md**。

## 硬性规则(每次都要遵守)

1. **Git 身份**:author `xzzcy0517 <xzzcy0517@163.com>`(仓库级已配置,不要动全局)
2. **提交规范**:Conventional Commits,标题一行、简短;前缀用 `docs:` / `vendor:` / `chore:` / `fix:`
3. **提交门槛**:`npm run docs:build` 通过(含死链检查)才能 commit,不过不提交
4. **提交即推送**:commit 后立刻 `git push origin main`(本地验证流程依赖拉取最新代码)
5. **许可三档分级(合规永远第一步,不合规的事不做)**:
   - ① 有开源协议(MIT / Apache-2.0 等)→ 正常快照
   - ② 无协议声明 → 视同作者不懂开源、并非拒绝使用,**可以快照**,但 `SOURCE.yml` 与笔记中必须醒目标注出处、版权归属和"作者提出异议即下架"提示
   - ③ 明示受限(标注 Proprietary / 受服务条款限制 / 私有仓库)→ **绝对不快照**,只写笔记 + 跳转出处,并在文首做版权提示
   - 任何一档拿不准 → 按更严的一档处理
6. **快照不可改写**:`vendor/` 内上游文件原样保存;`SOURCE.yml` 的 `license` 字段必须人工核对,留 TODO 不得提交
7. **TODO 台账**:凡是会话内无法闭环、需要用户确认/实操的事项,收尾时**必须**追加到根目录 `TODO.md`,格式 `- [ ] 日期 | 主题 | 事项 → 建议动作`;用户确认后由 agent 删除该条(历史靠 git log 追溯)。新会话开场先读 `TODO.md`,未完成欠账主动跟进提醒
8. **小白优先写作**:读者默认是不会终端的新手。安装/使用类步骤**先给"把这句话发给 AI"的自然语言指令**,命令行版本放后面并标注"备用/可选";术语首次出现随手用大白话解释(如 .pptx → PPT 文件、仓库 → 网上存代码的地方)

## 按需引用(做哪件事,读哪份文件,别凭记忆猜)

| 任务 | 先读 |
| --- | --- |
| 拉取 / 更新 skill 快照 | `docs/guide/vendor.md`(完整工作流)+ `scripts/vendor.mjs`(工具行为) |
| 撰写 / 修改学习笔记 | `docs/skills/template.md`(结构)+ `docs/guide/contribute.md`(规范) |
| 新增页面、调整导航 | `docs/.vitepress/config.mts` |
| 快照目录与出处字段约定 | `vendor/README.md` + `vendor/SOURCE.example.yml` |
| 会话开场 / 收尾 | `TODO.md`(开场查欠账,收尾录新欠账) |

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
