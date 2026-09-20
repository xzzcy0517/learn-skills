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
- 想写笔记:先看 [如何贡献](/guide/contribute),照 [笔记模板](/skills/template) 写
- 本地浏览:仓库根目录执行 `npm install && npm run docs:dev`

## 目录约定

```
docs/skills/<skill 名称>/     # 每个 Skill 一个子目录,目录名与 GitHub 仓库/技能名保持一致
```

例如 `docs/skills/anthropics-skills/`、`docs/skills/remotion-skill/`。笔记较多时,子目录内可再按主题拆分多个 `.md` 文件。
