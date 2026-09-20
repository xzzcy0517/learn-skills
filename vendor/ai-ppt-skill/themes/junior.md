# junior · 清新活力风

- **适用场景**：初中课堂、社团活动、青少年主题分享
- **设计关键词**：浅薄荷绿底、绿蓝配色、清爽、有活力但不过于幼稚
- **语气建议**：亲切、鼓励式，可以有一点流行语感，但保持课堂的引导性

## 设计 tokens

- 背景：`linear-gradient(150deg, #F2FAF6 0%, #E4F4EC 60%, #E3F0FA 100%)`，右上绿色、左下蓝色径向装饰
- 主色：绿 `#2FA97C`；辅助：蓝 `#3B9DD9`、琥珀 `#F5A623`
- 文字：主 `#22333B`，正文 `#40535E`，弱化 `#7A8F99` / `#A9BCC4`
- 卡片：白底 + 柔和阴影 + 1px 浅绿边，圆角 18px
- 字号：页标题 38px/700，封面 50px，卡片标题 22px，正文 17~20px

## 完整 CSS（直接作为 slides.html 的 <style> 内容）

```css
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { background: #EAF6F0; }
  body { font-family: "PingFang SC", "Microsoft YaHei", "Helvetica Neue", sans-serif; }

  .slide {
    width: 1280px; height: 720px;
    position: relative; overflow: hidden;
    background: linear-gradient(150deg, #F2FAF6 0%, #E4F4EC 60%, #E3F0FA 100%);
    color: #22333B;
    padding: 62px 78px;
    display: none;
    flex-direction: column;
  }
  .slide.active { display: flex; }

  .slide::before {
    content: ""; position: absolute; right: -150px; top: -150px;
    width: 400px; height: 400px; border-radius: 50%;
    background: radial-gradient(circle, rgba(47,169,124,.13) 0%, rgba(47,169,124,0) 70%);
  }
  .slide::after {
    content: ""; position: absolute; left: -120px; bottom: -160px;
    width: 360px; height: 360px; border-radius: 50%;
    background: radial-gradient(circle, rgba(59,157,217,.11) 0%, rgba(59,157,217,0) 70%);
  }

  .grad-text {
    background: linear-gradient(90deg, #2FA97C, #3B9DD9);
    -webkit-background-clip: text; background-clip: text; color: transparent;
  }

  .kicker {
    display: inline-block; font-size: 16px; font-weight: 700; letter-spacing: 2px;
    color: #fff; background: linear-gradient(90deg, #2FA97C, #3B9DD9);
    padding: 7px 18px; border-radius: 999px; margin-bottom: 26px;
    width: fit-content;
  }
  h1 { font-size: 50px; line-height: 1.28; font-weight: 800; color: #1E2E35; }
  h2 { font-size: 38px; font-weight: 800; margin-bottom: 10px; color: #1E2E35; }
  .subtitle { font-size: 20px; color: #6B8290; margin-top: 20px; line-height: 1.7; }
  .pageno { position: absolute; right: 38px; bottom: 26px; font-size: 14px; color: #A9BCC4; }
  .footer-brand { position: absolute; left: 78px; bottom: 26px; font-size: 14px; color: #A9BCC4; letter-spacing: 2px; }

  .cards { display: flex; gap: 24px; margin-top: 34px; }
  .card {
    flex: 1; background: #fff; border: 1px solid #D8EBE2;
    border-radius: 18px; padding: 28px 26px;
    box-shadow: 0 6px 18px rgba(47,169,124,.10);
  }
  .card .icon { font-size: 36px; margin-bottom: 12px; }
  .card h3 { font-size: 22px; margin-bottom: 10px; color: #2FA97C; }
  .card p { font-size: 17px; line-height: 1.75; color: #40535E; }
  .card p b, li b { color: #1E2E35; }

  ul.list { margin-top: 28px; list-style: none; }
  ul.list li {
    font-size: 20px; line-height: 1.6; color: #40535E;
    padding: 13px 0 13px 42px; position: relative;
    border-bottom: 1px dashed #CBE4D9;
  }
  ul.list li::before { content: "▸"; position: absolute; left: 8px; color: #2FA97C; font-size: 20px; }

  .flow { display: flex; align-items: stretch; margin-top: 42px; }
  .flow .step { flex: 1; text-align: center; padding: 0 6px; }
  .flow .step .num {
    width: 48px; height: 48px; margin: 0 auto 14px; border-radius: 50%;
    background: linear-gradient(135deg, #2FA97C, #3B9DD9);
    display: flex; align-items: center; justify-content: center;
    font-size: 21px; font-weight: 800; color: #fff;
  }
  .flow .step .label { font-size: 18px; font-weight: 700; color: #22333B; line-height: 1.5; }
  .flow .step .sub { font-size: 14px; color: #7A8F99; margin-top: 6px; line-height: 1.5; }
  .flow .arrow { align-self: flex-start; margin-top: 15px; color: #3B9DD9; font-size: 24px; flex: 0 0 24px; }

  .vs { display: flex; gap: 28px; margin-top: 34px; flex: 1; }
  .vs .col { flex: 1; border-radius: 18px; padding: 30px; background: #fff; }
  .vs .col.bad { border: 1px solid #F3C1C1; background: #FDF6F6; }
  .vs .col.good { border: 1px solid #B7E2CF; background: #F4FBF8; }
  .vs .col h3 { font-size: 23px; margin-bottom: 16px; }
  .vs .col.bad h3 { color: #D05A5A; }
  .vs .col.good h3 { color: #2FA97C; }
  .vs .col ul { list-style: none; }
  .vs .col li { font-size: 18px; color: #40535E; line-height: 1.7; padding: 8px 0; }
  .vs .col.bad li::before { content: "✕  "; color: #D05A5A; }
  .vs .col.good li::before { content: "✓  "; color: #2FA97C; }

  .quote {
    margin-top: 32px; padding: 24px 32px; border-left: 4px solid #2FA97C;
    background: #E9F6F0; border-radius: 0 16px 16px 0;
    font-size: 22px; font-weight: 600; line-height: 1.7; color: #1F6B4E;
  }

  .big-idea {
    margin-top: 38px; text-align: center; flex: 1;
    display: flex; flex-direction: column; justify-content: center; align-items: center;
  }
  .big-idea .formula { display: flex; align-items: center; gap: 24px; margin-top: 34px; }
  .big-idea .token {
    padding: 20px 30px; border-radius: 16px; font-size: 23px; font-weight: 700;
    background: #fff; border: 1px solid #D8EBE2; color: #22333B;
    box-shadow: 0 4px 12px rgba(47,169,124,.08);
  }
  .big-idea .token.hl {
    background: linear-gradient(135deg, #2FA97C, #3B9DD9);
    border-color: transparent; color: #fff;
  }
  .big-idea .op { font-size: 30px; color: #2FA97C; }

  .center-wrap { flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; }
```

## 该风格的注意事项

- 介于童趣与严肃之间：可用 emoji 做卡片图标，但装饰保持克制
- 知识内容可以比小学风更深入，列表可到 5 条
- 绿色为主、蓝色为辅，琥珀色 `#F5A623` 仅用于个别需要强调的数字或关键词
