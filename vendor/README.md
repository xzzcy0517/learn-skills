# vendor/ —— 上游 Skill 快照区

本目录存放从 GitHub 下载的**原始 Skill 代码/文档快照**,与 `docs/skills/` 下的学习笔记**一一对应、同名**。

> 为什么叫"快照"?我们学的是**某个时点**的 skill。每次拉取都会用 `SOURCE.yml` 记死上游 commit,
> 上游之后怎么变,都不影响这篇笔记描述的内容;要学新版本,走 `vendor:update` 更新流程。

## 每个快照目录的固定结构

```
vendor/<skill-name>/
├── SOURCE.yml    # 出处记录:源仓库、ref、commit、拉取日期、license、status(必须)
├── SNAPSHOT.md   # 本快照说明,含原始文档出处与版权提示(脚本生成,不占用上游 README.md)
├── LICENSE*      # 上游许可证(如有,必须保留)
└── ...           # 上游 skill 的原始文件(README.md、SKILL.md、脚本等),原样保存,不做修改
```

## 拉取与更新

```bash
# 拉取一个仓库作为快照(自动生成 SOURCE.yml)
npm run vendor:fetch -- https://github.com/owner/repo

# 上游是 monorepo、只要其中某个子目录
npm run vendor:fetch -- https://github.com/owner/repo my-name --subdir path/in/repo

# 锁定某个 tag/分支
npm run vendor:fetch -- https://github.com/owner/repo --ref v1.2.0

# 上游有更新时,刷新快照并给出对比链接
npm run vendor:update -- <skill-name>
```

## 规范

1. **同名对应**:`vendor/<name>/` ⇔ `docs/skills/<name>/`,笔记里必须回填 commit
2. **注明出处**:每个快照必须有 `SOURCE.yml`;笔记首节必须有「快照信息」
3. **保留版权**:上游的 LICENSE 与文件头版权声明一律保留,不得删除
4. **不改原文**:快照内容原样保存;魔改/本地实验放自己的环境里,不提交到 `vendor/`
5. **license 字段要人核对**:脚本只标 TODO,提交前改成实际许可证(如 MIT、Apache-2.0)

## 许可说明

本目录内容版权归各上游原作者与项目所有,按各自的开源许可证分发;
`docs/` 下的学习笔记为原创整理,采用 CC BY-NC-SA 4.0。
