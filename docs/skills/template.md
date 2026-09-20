# 笔记模板

> 复制下面这条分割线以下的全部内容到 `docs/skills/<skill 名称>/index.md`,替换尖括号占位后开始写作。

---

# <Skill 名称> —— <一句话定位>

## 快照信息

> 必填,且与 `vendor/<skill 名称>/SOURCE.yml` 完全一致 —— 这是本笔记"时点学习"的凭证。

| 项 | 值 |
| --- | --- |
| 源仓库 | <https://github.com/owner/repo> |
| 快照 commit / ref | `<commit sha>` @ `<main 或 tag>` |
| 拉取日期 | `<YYYY-MM-DD>` |
| 许可证 | `<MIT / Apache-2.0 / ...>` |
| 原始快照 | `vendor/<skill 名称>/`(clone 本仓库即可离线使用) |

## 是什么

<这个 Skill 解决什么问题?适合谁用?一两段讲清楚。>

## 快速上手

> 写法要求:先给「AI 自然语言安装」(小白复制一句话就能装),命令行版放后面标注"备用"。

### ① 把这句话复制给你的 AI(Claude Code / Kimi / Codex 等)

> 请帮我安装这个技能:<仓库地址>,装到你存放技能(skills)的目录里,
> 目录名用 `<skill 名称>`,并帮我装好它需要的依赖,最后告诉我怎么验证装成功了。

AI 装好后你也可以不管上面这句 —— 它自己会知道怎么用它。

### ② 备用:自己动手装(熟悉终端的人)

```bash
# 安装
<命令>

# 第一个例子
<命令>
```

## 核心用法

<最常用的 2~4 个功能,每个配一个真实示例。>

## 实战经验与踩坑

- ✅ <验证有效的技巧>
- ❌ <踩过的坑及解决办法>

## 参考资料

- 官方文档:<https://github.com/owner/repo>(替换为实际地址)
- 示例 / 模板:<https://github.com/owner/repo/tree/main/examples>(替换为实际地址)
- 本笔记对应快照:`vendor/<skill 名称>/`(上述 commit 的原始备份)

## 最后验证

- 笔记基于快照 `<commit sha>`,最后跑通验证:`<YYYY-MM-DD>`
