# Learn Skills

> 收集和分享 GitHub 上优秀 Skill 的使用方法、最佳实践与学习经验的文档仓库。

## 关于本项目

本仓库是一个面向新手的 Skill 学习文档库。GitHub 上有许多好用的 Skill(如 Claude Code 技能、Agent Skills、各类开发工具链的使用技巧),但资料分散、入门门槛高。我们把它们逐个整理成体系化的中文笔记,包含:

- **是什么 / 能做什么**:一句话讲清楚这个 Skill 的价值
- **快速上手**:最短路径跑起来
- **实战经验**:真实使用中的技巧与踩坑记录
- **参考资料**:官方文档、源码仓库等延伸阅读

## 技术栈

文档站点基于 [VitePress](https://vitepress.dev/) 构建(Vue / Vite 官方文档同款工具),Markdown 编写,支持本地全文搜索,后续可轻松部署到 GitHub Pages。

## 目录结构

```
learn-skills/
├── docs/                       # 文档源文件(站点内容)
│   ├── .vitepress/config.mts   # 站点配置(导航、侧边栏、搜索等)
│   ├── index.md                # 站点首页
│   ├── guide/                  # 入门指南
│   └── skills/                 # Skill 学习笔记,每个 Skill 一个子目录
├── package.json
└── README.md
```

## 本地开发

```bash
# 安装依赖
npm install

# 启动本地预览(默认 http://localhost:5173)
npm run docs:dev

# 构建静态站点
npm run docs:build
```

## 如何贡献

1. 在 `docs/skills/` 下为每个 Skill 新建一个子目录(目录名与 GitHub 仓库名一致,如 `docs/skills/anthropics-skills/`)
2. 按照 `docs/skills/template.md` 模板撰写笔记
3. 在 `docs/skills/index.md` 的目录表中登记
4. 更新 `docs/.vitepress/config.mts` 中的侧边栏配置

详细规范见文档站点内「入门指南 → 如何贡献」一节。

## License

[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) — 欢迎学习分享,转载请注明出处。
