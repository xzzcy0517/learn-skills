# 快照与更新工作流

本仓库的核心理念:**学习是有时点的**。每学一个 skill,我们把它此刻的原始代码/文档"拍一张快照"存进
[`vendor/`](https://github.com/xzzcy0517/learn-skills/tree/main/vendor)(仓库根目录),笔记只描述这张快照;
上游更新了,就再拍一张,对着 diff 复学。这样笔记永远可追溯、不会悄悄失效。

## 为什么把原始 skill 也存进仓库

- **时效性**:笔记写的是"这一刻"的用法,快照 commit 就是证据
- **可下载**:大家 clone 本仓库(或在 GitHub 上直接下载 `vendor/<name>/`)就能离线用上验证过的 skill,不必依赖上游仓库还在不在
- **可对比**:上游更新后,新旧快照 + GitHub compare 链接,清楚看到该复学什么

## 一次完整的学习循环

```
1. 拍快照   npm run vendor:fetch -- https://github.com/owner/repo [name] [--subdir 路径] [--ref tag]
2. 核许可   打开 vendor/<name>/SOURCE.yml,把 license 的 TODO 改成实际许可证,保留上游 LICENSE 文件
3. 写笔记   复制 docs/skills/template.md → docs/skills/<name>/index.md,回填「快照信息」一节
4. 登记     docs/skills/index.md 总览表加一行;docs/.vitepress/config.mts 侧边栏补链接
5. 提交     git add -A && git commit -m "docs: add <name> skill notes"
```

fetch 成功后,终端会直接把这套下一步提示打印出来。

## 上游更新了怎么办

```bash
npm run vendor:update -- <name>
```

脚本会重新拉取快照、更新 `SOURCE.yml` 里的 commit 与日期,并打印上游两次 commit 之间的
**GitHub compare 链接**。然后:

1. 点开 compare 链接,看上游改了什么
2. 按新改动复学,更新 `docs/skills/<name>/` 笔记,并回填新 commit
3. 把 `SOURCE.yml` 的 `status` 从 `outdated` 改回 `verified`
4. 提交:`git commit -m "docs: refresh <name> notes to <短commit>"`

## SOURCE.yml 字段一览

| 字段 | 含义 | 谁维护 |
| --- | --- | --- |
| `name` / `source` / `ref` / `subdir` | 出处:目录名、上游仓库、分支或 tag、仓库内路径 | 脚本 |
| `commit` | 快照对应的确切 commit(学习时点凭证) | 脚本 |
| `license` | 上游许可证 | **人工核对** |
| `vendored_at` / `updated_at` | 首次拉取 / 最近更新日 | 脚本 |
| `notes` | 对应笔记目录 | 脚本 |
| `status` | `draft` 草稿 / `verified` 已验证 / `outdated` 上游更新待复学 | 人工 |

## 合规注意

- 每个快照**必须注明出处**:`SOURCE.yml` 的 `source` + 脚本生成的 `SNAPSHOT.md`,缺一不可;上游自带的 README 原样保留
- 上游的 `LICENSE` 及文件内版权声明**一律保留**;vendored 子目录时脚本会自动带上仓库根的 LICENSE/README
- 快照是**原样备份**,不要在 `vendor/` 里改文件;自己的实验和魔改不提交
- **许可三档分级**(见 AGENTS.md 规则 5):开源协议 → 正常快照;无协议声明 → 可快照但出处/版权提示必须到位,作者异议即下架;明示限制(Proprietary/ToS/私有)→ 绝不快照,只写笔记。拿不准按更严一档
