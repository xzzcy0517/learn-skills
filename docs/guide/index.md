# 介绍

欢迎!这里是一份面向新手的 GitHub Skill 学习手册。

## 这个仓库是什么

GitHub 上有大量提升开发效率的 Skill —— 从 Claude Code / Agent Skills 生态,到各类工具链的实用技巧 —— 但好的使用经验往往散落在 issue、博客和视频教程里,新手很难系统性地学起来。

本仓库把它们**逐个整理成中文笔记**,每篇笔记回答三个问题:

1. 这个 Skill 能帮我做什么?
2. 怎么最快跑起来?
3. 真实使用中有哪些坑和技巧?

## 怎么阅读

- 第一次来:从 [Skill 笔记总览](/skills/) 挑感兴趣的看
- 想直接用:每个笔记对应的 skill **原始快照**都在仓库的 `vendor/` 目录里,clone 仓库或到 GitHub 上下载对应子目录即可
- 想写笔记:先看 [快照与更新工作流](/guide/vendor) 和 [如何贡献](/guide/contribute),照 [笔记模板](/skills/template) 写
- 本地浏览:仓库根目录执行 `npm install && npm run docs:dev`

## 目录约定:快照与笔记一一对应

本仓库采用 monorepo 结构,同一个 Skill 在两处成对出现,**目录同名**:

```
vendor/<skill 名称>/            # 上游原始快照 + SOURCE.yml 出处记录
docs/skills/<skill 名称>/       # 对应的学习笔记(index.md,笔记多时可按主题拆分)
```

例如 `vendor/anthropics-skills/` ⇔ `docs/skills/anthropics-skills/`。
笔记永远描述快照那个时点的内容,上游更新后对照 diff 复学再刷新 —— 详见 [快照与更新工作流](/guide/vendor)。
