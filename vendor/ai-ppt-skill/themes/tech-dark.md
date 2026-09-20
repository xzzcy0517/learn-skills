# tech-dark · 深色科技风

- **适用场景**：技术分享、AI/互联网主题、行业交流、产品发布风格的内部演示
- **设计关键词**：深色底、青蓝渐变、发光感、现代、克制
- **语气建议**：专业但不端着，可以有观点、有金句
- **成品参照**：`tech-dark.example.html`（同目录，一份完整成品的 HTML，结构与组件写法以它为准）

## 设计 tokens

- 背景：`linear-gradient(135deg, #0b1020 0%, #101a35 55%, #0d2137 100%)`，右上青色、左下蓝色径向光晕（透明度 ≤ .14）
- 主强调色：青 `#5eead4`；渐变 `#14b8a6 → #3b82f6`；渐变标题字 `linear-gradient(90deg, #5eead4, #7cc4ff, #a5b4fc)`
- 文字：主 `#e8eefc`，次要 `#9fb2d8`，弱化 `#7f92bb` / `#5a6b94`
- 卡片：`rgba(255,255,255,.045)` + 1px 边 `rgba(255,255,255,.09)`，圆角 16~20px
- 对比页：负面红 `rgba(255,99,99,.06)` / `#ff9c9c`，正面青 `rgba(94,234,212,.06)` / `#5eead4`
- 字号：页标题 38px/700，封面 46~56px，卡片标题 21px，正文 16~20px

## 完整 CSS（直接作为 slides.html 的 <style> 内容）

```css
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { background: #0b1020; }
  body { font-family: "PingFang SC", "Microsoft YaHei", "Helvetica Neue", sans-serif; }

  .slide {
    width: 1280px; height: 720px;
    position: relative; overflow: hidden;
    background: linear-gradient(135deg, #0b1020 0%, #101a35 55%, #0d2137 100%);
    color: #e8eefc;
    padding: 64px 80px;
    display: none;
    flex-direction: column;
  }
  .slide.active { display: flex; }

  .slide::before {
    content: ""; position: absolute; right: -180px; top: -180px;
    width: 480px; height: 480px; border-radius: 50%;
    background: radial-gradient(circle, rgba(56,224,205,.14) 0%, rgba(56,224,205,0) 70%);
  }
  .slide::after {
    content: ""; position: absolute; left: -140px; bottom: -200px;
    width: 420px; height: 420px; border-radius: 50%;
    background: radial-gradient(circle, rgba(88,140,255,.12) 0%, rgba(88,140,255,0) 70%);
  }

  .grad-text {
    background: linear-gradient(90deg, #5eead4 0%, #7cc4ff 60%, #a5b4fc 100%);
    -webkit-background-clip: text; background-clip: text; color: transparent;
  }

  .kicker {
    display: inline-block; font-size: 15px; letter-spacing: 3px;
    color: #5eead4; border: 1px solid rgba(94,234,212,.4);
    padding: 6px 16px; border-radius: 999px; margin-bottom: 28px;
    width: fit-content;
  }
  h1 { font-size: 56px; line-height: 1.25; font-weight: 700; }
  h2 { font-size: 38px; font-weight: 700; margin-bottom: 10px; }
  .subtitle { font-size: 20px; color: #9fb2d8; margin-top: 22px; line-height: 1.7; }
  .pageno {
    position: absolute; right: 40px; bottom: 28px;
    font-size: 14px; color: #5a6b94; letter-spacing: 1px;
  }
  .footer-brand {
    position: absolute; left: 80px; bottom: 28px;
    font-size: 14px; color: #5a6b94; letter-spacing: 2px;
  }

  .cards { display: flex; gap: 24px; margin-top: 36px; }
  .card {
    flex: 1; background: rgba(255,255,255,.045);
    border: 1px solid rgba(255,255,255,.09);
    border-radius: 18px; padding: 28px 26px;
  }
  .card .icon { font-size: 34px; margin-bottom: 14px; }
  .card h3 { font-size: 21px; margin-bottom: 12px; color: #cfe3ff; }
  .card p { font-size: 16px; line-height: 1.75; color: #9fb2d8; }
  .card p b, li b { color: #e8eefc; }

  ul.list { margin-top: 30px; list-style: none; }
  ul.list li {
    font-size: 20px; line-height: 1.6; color: #b9c7e4;
    padding: 14px 0 14px 40px; position: relative;
    border-bottom: 1px dashed rgba(255,255,255,.08);
  }
  ul.list li::before {
    content: "▸"; position: absolute; left: 6px; color: #5eead4; font-size: 20px;
  }

  .flow { display: flex; align-items: stretch; gap: 0; margin-top: 44px; }
  .flow .step { flex: 1; text-align: center; position: relative; padding: 0 6px; }
  .flow .step .num {
    width: 46px; height: 46px; margin: 0 auto 14px; border-radius: 50%;
    background: linear-gradient(135deg, #14b8a6, #3b82f6);
    display: flex; align-items: center; justify-content: center;
    font-size: 20px; font-weight: 700; color: #fff;
  }
  .flow .step .label { font-size: 17px; color: #d5e1f7; line-height: 1.5; }
  .flow .step .sub { font-size: 13px; color: #7f92bb; margin-top: 6px; line-height: 1.5; }
  .flow .arrow { align-self: flex-start; margin-top: 14px; color: #3b82f6; font-size: 22px; flex: 0 0 22px; }

  .vs { display: flex; gap: 32px; margin-top: 36px; flex: 1; }
  .vs .col { flex: 1; border-radius: 20px; padding: 32px 30px; }
  .vs .col.bad { background: rgba(255,99,99,.06); border: 1px solid rgba(255,99,99,.22); }
  .vs .col.good { background: rgba(94,234,212,.06); border: 1px solid rgba(94,234,212,.28); }
  .vs .col h3 { font-size: 23px; margin-bottom: 18px; }
  .vs .col.bad h3 { color: #ff9c9c; }
  .vs .col.good h3 { color: #5eead4; }
  .vs .col ul { list-style: none; }
  .vs .col li { font-size: 17px; color: #b9c7e4; line-height: 1.7; padding: 8px 0; }
  .vs .col.bad li::before { content: "✕  "; color: #ff8080; }
  .vs .col.good li::before { content: "✓  "; color: #5eead4; }

  .quote {
    margin-top: 34px; padding: 26px 34px; border-left: 4px solid #5eead4;
    background: rgba(94,234,212,.06); border-radius: 0 16px 16px 0;
    font-size: 22px; line-height: 1.8; color: #d9f7ef;
  }

  .big-idea {
    margin-top: 40px; text-align: center; flex: 1;
    display: flex; flex-direction: column; justify-content: center; align-items: center;
  }
  .big-idea .formula { display: flex; align-items: center; gap: 26px; margin-top: 36px; }
  .big-idea .token {
    padding: 22px 34px; border-radius: 16px; font-size: 24px; font-weight: 600;
    background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.12);
  }
  .big-idea .token.hl {
    background: linear-gradient(135deg, rgba(20,184,166,.25), rgba(59,130,246,.25));
    border: 1px solid rgba(94,234,212,.5); color: #a7f3e9;
  }
  .big-idea .op { font-size: 34px; color: #5eead4; }

  .center-wrap { flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; }
```

## 该风格的注意事项

- 深色底下正文对比度必须保证：正文不小于 16px，次要文字不得浅于 `#9fb2d8`
- emoji 图标可用，但每页不超过 3 个
- 装饰光晕透明度不得超过 .14，避免喧宾夺主
