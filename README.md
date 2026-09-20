# Learn Skills

> 收集和分享 GitHub 上优秀 Skill 的使用方法、最佳实践与学习经验的文档仓库。

## 关于本项目

本仓库是一个面向新手的 Skill 学习文档库。GitHub 上有许多好用的 Skill(如 Claude Code 技能、Agent Skills、各类开发工具链的使用技巧),但资料分散、入门门槛高。我们把它们逐个整理成体系化的中文笔记,包含:

- **是什么 / 能做什么**:一句话讲清楚这个 Skill 的价值
- **快速上手**:最短路径跑起来
- **实战经验**:真实使用中的技巧与踩坑记录
- **参考资料**:官方文档、源码仓库等延伸阅读

## 核心理念:快照 + 笔记,双线对应

学习是有时点的 —— 每次学的都只是 skill **此刻**的样子。因此本仓库采用 monorepo 结构,
把**上游原始代码快照**与**学习笔记**成对维护,并在 `SOURCE.yml` 里记死出处(仓库 / commit / 日期 / 许可),
上游更新后可对照 diff 复学、刷新快照。

## 目录结构

```
learn-skills/
├── docs/                       # 文档站点(VitePress)
│   ├── .vitepress/config.mts   # 站点配置(导航、侧边栏、搜索等)
│   ├── index.md                # 站点首页
│   ├── guide/                  # 入门指南(含快照与更新工作流)
│   └── skills/<name>/          # 每个 Skill 一篇学习笔记
├── vendor/                     # 上游 Skill 原始快照(与笔记同名一一对应)
│   └── <name>/
│       ├── SOURCE.yml          # 出处记录:源仓库 / commit / 拉取日期 / license
│       └── ...                 # 上游文件原样保存
├── scripts/vendor.mjs          # 快照拉取/更新命令行工具(零依赖)
├── package.json
└── README.md
```

## 快速上手

```bash
# 学习一个新 skill:拉取上游快照(自动生成出处记录)
npm run vendor:fetch -- https://github.com/owner/repo [name] [--subdir 路径] [--ref tag]

# 上游更新了:刷新快照并拿到 GitHub 对比链接,对照复学
npm run vendor:update -- <name>
```

完整流程见文档站点「入门指南 → 快照与更新工作流」。

## 技术栈

文档站点基于 [VitePress](https://vitepress.dev/) 构建(Vue / Vite 官方文档同款工具),Markdown 编写,支持本地全文搜索,后续可轻松部署到 GitHub Pages。快照工具为单文件 Node 脚本,零额外依赖。

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

1. `npm run vendor:fetch -- <上游仓库地址>` 拉取快照,核对并填写 `SOURCE.yml` 的 `license`
2. 复制 `docs/skills/template.md` → `docs/skills/<name>/index.md` 撰写笔记,回填「快照信息」
3. 在 `docs/skills/index.md` 总览表登记,更新 `docs/.vitepress/config.mts` 侧边栏
4. 快照与笔记**同名、同 commit**,注明出处;保留上游 LICENSE 与版权声明

详细规范见文档站点内「入门指南 → 快照与更新工作流 / 如何贡献」。

## License

- `docs/` 学习笔记(原创整理):[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/),转载请注明出处
- `vendor/` 上游快照:版权归各原作者所有,按各自项目的开源许可证分发(见各目录 `SOURCE.yml` 与 LICENSE)
