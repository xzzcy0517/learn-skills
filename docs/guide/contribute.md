# 如何贡献

## 写作流程

1. **选题**:在 [Skill 笔记总览](/skills/) 确认还没有人写过该 Skill
2. **建目录**:在 `docs/skills/` 下新建 `<skill 名称>/index.md`
3. **写笔记**:复制 [笔记模板](/skills/template) 作为起点
4. **登记**:在总览页表格中加一行
5. **配导航**:把新页面加进 `docs/.vitepress/config.mts` 的 `/skills/` 侧边栏
6. **自测**:`npm run docs:dev` 本地预览,`npm run docs:build` 确认构建无死链

## 写作要求

- **标题**:使用 `# Skill 名 —— 一句话定位`,不要只写仓库名
- **代码块**:标注语言,保证读者可直接复制运行
- **截图/示例**:优先用自己跑通的结果,注明来源与版本
- **时效性**:在「参考资料」一节记录笔记基于的版本和最后验证日期
- **语言**:中文为主,专有名词、命令、配置保留英文原文

## Git 提交规范

遵循 [Conventional Commits](https://www.conventionalcommits.org/zh-hans/):

| 前缀 | 用途 | 示例 |
| --- | --- | --- |
| `docs:` | 新增/修改文档内容 | `docs: add anthropics/skills notes` |
| `chore:` | 工程配置、依赖 | `chore: bump vitepress to 1.7` |
| `fix:` | 修复链接、排版错误 | `fix: repair dead link in guide` |

提交信息保持简短,一行说清楚做了什么。
