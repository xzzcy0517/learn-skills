# TODO —— 待确认事项台账

> 维护规则见 `AGENTS.md` 硬性规则第 7 条:agent 收尾时把「需要用户确认/实操才能闭环」的事项追加到这里;
> 事项完成后删除该条(历史靠 `git log` 追溯)。开场新会话时先读本文件,别把欠账当没发生。

## 待确认

- [ ] 2026-09-20 | ai-ppt-skill(上游仓库) | 上游 README 只有命令行装法 → 建议把笔记里的「AI 自然语言安装 + 小白三步」同步进上游 README(涉及改你另一个仓库,需你确认);确认后同步并 `vendor:update` 刷新快照

- [ ] 2026-09-20 | ai-ppt-skill | 端到端实操(macOS + Chrome 转 .pptx、口述稿写入备注)尚未验证 → 跑通后把 `vendor/ai-ppt-skill/SOURCE.yml` 的 `status` 改为 `verified`,补笔记「实战经验」一节,然后删本条
- [ ] 2026-09-20 | ai-ppt-skill(上游仓库) | 仓库无 LICENSE 文件,外人复用有法律模糊地带 → 决定是否给上游补开源许可(如 MIT);补后执行 `npm run vendor:update -- ai-ppt-skill` 并同步 SOURCE.yml 的 license,然后删本条
- [ ] 2026-09-20 | ai-ppt-skill | 转换脚本只探测 macOS 浏览器路径,Linux 下依赖 `CHROME` 环境变量,未实测 → 如在本服务器实测通过,把可行的安装/调用方法写进笔记「实战经验」,然后删本条
- [ ] 2026-09-20 | anthropics-skill-creator | 笔记还是 TODO 骨架,快照已就绪 → 排期学习:通读 `vendor/anthropics-skill-creator/SKILL.md` 与 references/ 后按模板补全,状态改 verified 后删本条

## 已完成

(条目完成即删除,审计轨迹见 git log)
