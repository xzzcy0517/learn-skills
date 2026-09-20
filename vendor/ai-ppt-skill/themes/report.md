# report · 商务蓝灰风

- **适用场景**：向领导/老师的工作汇报、项目汇报、季度总结、述职
- **设计关键词**：商务蓝、灰白底、扁平、数据导向、专业高效
- **语气建议**：结论先行（先讲结果，再讲过程），数据说话，措辞干练，突出「进展—成果—下一步」结构

## 设计 tokens

- 背景：`linear-gradient(180deg, #FFFFFF 0%, #F5F7FA 100%)`，左侧 6px 商务蓝竖条
- 主色：商务蓝 `#1F4E79`；辅助：中蓝 `#2E75B6`、浅蓝灰 `#D6E0EC`、强调橙 `#ED7D31`（仅关键数字/结论）
- 文字：主 `#25303B`，正文 `#45525F`，弱化 `#8494A5` / `#B3BEC9`
- 卡片：白底 + 1px 边 `#E1E7EE` + 轻微阴影，圆角 10px
- 字号：页标题 36px/700，封面 46px，卡片标题 20px，正文 16~19px

## 完整 CSS（直接作为 slides.html 的 <style> 内容）

```css
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { background: #F5F7FA; }
  body { font-family: "PingFang SC", "Microsoft YaHei", "Helvetica Neue", sans-serif; }

  .slide {
    width: 1280px; height: 720px;
    position: relative; overflow: hidden;
    background: linear-gradient(180deg, #FFFFFF 0%, #F5F7FA 100%);
    color: #25303B;
    padding: 62px 80px 60px 92px;
    display: none;
    flex-direction: column;
    box-shadow: inset 6px 0 0 #1F4E79;
  }
  .slide.active { display: flex; }

  .grad-text {
    background: linear-gradient(90deg, #1F4E79, #2E75B6);
    -webkit-background-clip: text; background-clip: text; color: transparent;
  }

  .kicker {
    display: inline-block; font-size: 15px; font-weight: 600; letter-spacing: 2px;
    color: #fff; background: #1F4E79;
    padding: 6px 18px; border-radius: 999px; margin-bottom: 24px;
    width: fit-content;
  }
  h1 { font-size: 46px; line-height: 1.28; font-weight: 700; color: #1F4E79; }
  h2 { font-size: 36px; font-weight: 700; margin-bottom: 10px; color: #25303B; }
  .subtitle { font-size: 19px; color: #8494A5; margin-top: 18px; line-height: 1.75; }
  .pageno { position: absolute; right: 40px; bottom: 26px; font-size: 14px; color: #B3BEC9; }
  .footer-brand { position: absolute; left: 92px; bottom: 26px; font-size: 14px; color: #B3BEC9; letter-spacing: 2px; }

  .cards { display: flex; gap: 22px; margin-top: 32px; }
  .card {
    flex: 1; background: #fff; border: 1px solid #E1E7EE;
    border-radius: 10px; padding: 26px 24px;
    box-shadow: 0 4px 14px rgba(31,78,121,.07);
  }
  .card .icon { font-size: 30px; margin-bottom: 12px; }
  .card h3 { font-size: 20px; margin-bottom: 10px; color: #1F4E79; }
  .card p { font-size: 16px; line-height: 1.8; color: #45525F; }
  .card p b, li b { color: #25303B; }

  /* 关键数字（汇报风格特有）：<div class="stat"><div class="num">98%</div><div class="cap">完成率</div></div> */
  .stats { display: flex; gap: 22px; margin-top: 32px; }
  .stat {
    flex: 1; background: #fff; border: 1px solid #E1E7EE; border-radius: 10px;
    padding: 24px; text-align: center;
    box-shadow: 0 4px 14px rgba(31,78,121,.07);
  }
  .stat .num { font-size: 44px; font-weight: 800; color: #ED7D31; line-height: 1.1; }
  .stat .cap { font-size: 16px; color: #8494A5; margin-top: 8px; }

  ul.list { margin-top: 26px; list-style: none; }
  ul.list li {
    font-size: 19px; line-height: 1.65; color: #45525F;
    padding: 12px 0 12px 38px; position: relative;
    border-bottom: 1px solid #E7ECF2;
  }
  ul.list li::before { content: "▸"; position: absolute; left: 8px; color: #2E75B6; font-size: 18px; }

  .flow { display: flex; align-items: stretch; margin-top: 40px; }
  .flow .step { flex: 1; text-align: center; padding: 0 6px; }
  .flow .step .num {
    width: 44px; height: 44px; margin: 0 auto 12px; border-radius: 50%;
    background: #1F4E79;
    display: flex; align-items: center; justify-content: center;
    font-size: 19px; font-weight: 700; color: #fff;
  }
  .flow .step .label { font-size: 17px; font-weight: 600; color: #25303B; line-height: 1.5; }
  .flow .step .sub { font-size: 13px; color: #8494A5; margin-top: 5px; line-height: 1.5; }
  .flow .arrow { align-self: flex-start; margin-top: 12px; color: #2E75B6; font-size: 22px; flex: 0 0 22px; }

  .vs { display: flex; gap: 26px; margin-top: 32px; flex: 1; }
  .vs .col { flex: 1; border-radius: 10px; padding: 28px; background: #fff; border: 1px solid #E1E7EE; }
  .vs .col.bad { border-top: 3px solid #C0504D; }
  .vs .col.good { border-top: 3px solid #1F4E79; }
  .vs .col h3 { font-size: 21px; margin-bottom: 14px; }
  .vs .col.bad h3 { color: #C0504D; }
  .vs .col.good h3 { color: #1F4E79; }
  .vs .col ul { list-style: none; }
  .vs .col li { font-size: 17px; color: #45525F; line-height: 1.75; padding: 7px 0; }
  .vs .col.bad li::before { content: "✕  "; color: #C0504D; }
  .vs .col.good li::before { content: "✓  "; color: #1F4E79; }

  .quote {
    margin-top: 30px; padding: 22px 30px; border-left: 4px solid #ED7D31;
    background: #FDF4EC; border-radius: 0 10px 10px 0;
    font-size: 20px; font-weight: 600; line-height: 1.75; color: #8A4A1B;
  }

  .big-idea {
    margin-top: 36px; text-align: center; flex: 1;
    display: flex; flex-direction: column; justify-content: center; align-items: center;
  }
  .big-idea .formula { display: flex; align-items: center; gap: 22px; margin-top: 32px; }
  .big-idea .token {
    padding: 18px 28px; border-radius: 10px; font-size: 21px; font-weight: 600;
    background: #fff; border: 1px solid #E1E7EE; color: #25303B;
    box-shadow: 0 4px 14px rgba(31,78,121,.07);
  }
  .big-idea .token.hl { background: #1F4E79; border-color: #1F4E79; color: #fff; }
  .big-idea .op { font-size: 26px; color: #2E75B6; }

  .center-wrap { flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; }
```

## 该风格的注意事项

- 汇报结构优先「进展—成果—问题—下一步」，能用数字就不用形容词
- 特有 `.stats / .stat` 组件用于关键指标展示（完成率、增长量等），数字一律用强调橙
- 数据必须与用户素材一致，不得编造；用户没给的数据用「待补充」占位并提醒
- emoji 仅可作卡片小图标，每页 ≤ 2 个；整体保持干练
