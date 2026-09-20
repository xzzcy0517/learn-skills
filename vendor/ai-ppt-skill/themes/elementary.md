# elementary · 童趣乐园风

- **适用场景**：小学课堂、低年级分享、亲子活动、儿童主题讲座
- **设计关键词**：暖色奶油底、橙粉绿糖果配色、大圆角、大字号、活泼亲切
- **语气建议**：多用提问和互动句式（"小朋友们想一想……"），用词简单，句子短，适当使用 emoji

## 设计 tokens

- 背景：`linear-gradient(160deg, #FFF8E7 0%, #FFEFC7 60%, #FFE9F0 100%)`，右上橙色、左下绿色径向色块装饰
- 主色：橙 `#FF8C42`；辅助：粉 `#FF6B9D`、绿 `#4FB06D`、蓝 `#4A9FE8`
- 文字：主 `#3E352C`，正文 `#5C5044`，弱化 `#A08D76` / `#C4B39A`
- 卡片：白底 + 3px 彩色描边 + 底部厚阴影，圆角 24px
- 字号偏大：页标题 40px/800，封面 52px，卡片标题 23px，正文 18~22px

## 完整 CSS（直接作为 slides.html 的 <style> 内容）

```css
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { background: #FFF3D6; }
  body { font-family: "PingFang SC", "Microsoft YaHei", "Helvetica Neue", sans-serif; }

  .slide {
    width: 1280px; height: 720px;
    position: relative; overflow: hidden;
    background: linear-gradient(160deg, #FFF8E7 0%, #FFEFC7 60%, #FFE9F0 100%);
    color: #4A3F35;
    padding: 60px 76px;
    display: none;
    flex-direction: column;
  }
  .slide.active { display: flex; }

  .slide::before {
    content: ""; position: absolute; right: -120px; top: -120px;
    width: 360px; height: 360px; border-radius: 50%;
    background: radial-gradient(circle, rgba(255,140,66,.18) 0%, rgba(255,140,66,0) 70%);
  }
  .slide::after {
    content: ""; position: absolute; left: -100px; bottom: -140px;
    width: 320px; height: 320px; border-radius: 50%;
    background: radial-gradient(circle, rgba(79,176,109,.16) 0%, rgba(79,176,109,0) 70%);
  }

  .grad-text {
    background: linear-gradient(90deg, #FF8C42, #FF6B9D, #4A9FE8);
    -webkit-background-clip: text; background-clip: text; color: transparent;
  }

  .kicker {
    display: inline-block; font-size: 17px; font-weight: 700; letter-spacing: 2px;
    color: #fff; background: #FF8C42;
    padding: 8px 20px; border-radius: 999px; margin-bottom: 26px;
    width: fit-content; box-shadow: 0 4px 0 rgba(0,0,0,.08);
  }
  h1 { font-size: 52px; line-height: 1.3; font-weight: 800; color: #3E352C; }
  h2 { font-size: 40px; font-weight: 800; margin-bottom: 12px; color: #3E352C; }
  .subtitle { font-size: 21px; color: #8A7A68; margin-top: 20px; line-height: 1.7; }
  .pageno { position: absolute; right: 36px; bottom: 26px; font-size: 15px; color: #C4B39A; }
  .footer-brand { position: absolute; left: 76px; bottom: 26px; font-size: 15px; color: #C4B39A; letter-spacing: 2px; }

  .cards { display: flex; gap: 24px; margin-top: 34px; }
  .card {
    flex: 1; background: #fff; border: 3px solid #FFD9A8;
    border-radius: 24px; padding: 28px 26px;
    box-shadow: 0 6px 0 rgba(255,140,66,.12);
  }
  .card .icon { font-size: 40px; margin-bottom: 12px; }
  .card h3 { font-size: 23px; margin-bottom: 10px; color: #E8701D; }
  .card p { font-size: 18px; line-height: 1.75; color: #6B5D4F; }
  .card p b, li b { color: #3E352C; }

  ul.list { margin-top: 28px; list-style: none; }
  ul.list li {
    font-size: 22px; line-height: 1.6; color: #5C5044;
    padding: 13px 0 13px 44px; position: relative;
    border-bottom: 2px dashed rgba(255,140,66,.25);
  }
  ul.list li::before { content: "●"; position: absolute; left: 8px; color: #FF8C42; font-size: 18px; }

  .flow { display: flex; align-items: stretch; margin-top: 42px; }
  .flow .step { flex: 1; text-align: center; padding: 0 6px; }
  .flow .step .num {
    width: 52px; height: 52px; margin: 0 auto 14px; border-radius: 50%;
    background: #FF8C42; display: flex; align-items: center; justify-content: center;
    font-size: 24px; font-weight: 800; color: #fff; box-shadow: 0 4px 0 rgba(0,0,0,.08);
  }
  .flow .step .label { font-size: 19px; font-weight: 700; color: #4A3F35; line-height: 1.5; }
  .flow .step .sub { font-size: 15px; color: #A08D76; margin-top: 6px; line-height: 1.5; }
  .flow .arrow { align-self: flex-start; margin-top: 16px; color: #FFB066; font-size: 26px; flex: 0 0 26px; }

  .vs { display: flex; gap: 28px; margin-top: 34px; flex: 1; }
  .vs .col { flex: 1; border-radius: 24px; padding: 30px; background: #fff; }
  .vs .col.bad { border: 3px solid #FFB3C2; }
  .vs .col.good { border: 3px solid #9ADCB2; }
  .vs .col h3 { font-size: 24px; margin-bottom: 16px; }
  .vs .col.bad h3 { color: #E85A7A; }
  .vs .col.good h3 { color: #2E9E5B; }
  .vs .col ul { list-style: none; }
  .vs .col li { font-size: 19px; color: #5C5044; line-height: 1.7; padding: 8px 0; }
  .vs .col.bad li::before { content: "✕  "; color: #E85A7A; }
  .vs .col.good li::before { content: "✓  "; color: #2E9E5B; }

  .quote {
    margin-top: 32px; padding: 24px 32px; border-radius: 20px;
    background: #FFE3B3; font-size: 23px; font-weight: 700; line-height: 1.7; color: #8A5A1D;
  }

  .big-idea {
    margin-top: 38px; text-align: center; flex: 1;
    display: flex; flex-direction: column; justify-content: center; align-items: center;
  }
  .big-idea .formula { display: flex; align-items: center; gap: 24px; margin-top: 34px; }
  .big-idea .token {
    padding: 20px 30px; border-radius: 20px; font-size: 24px; font-weight: 700;
    background: #fff; border: 3px solid #FFD9A8; color: #4A3F35;
  }
  .big-idea .token.hl { background: #FF8C42; border-color: #FF8C42; color: #fff; }
  .big-idea .op { font-size: 32px; color: #FF8C42; }

  .center-wrap { flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; }
```

## 该风格的注意事项

- 字号是七种风格里最大的，内容务必精简：每页要点更少、句子更短，列表 ≤ 4 条
- emoji 可以大方使用（卡片图标、列表点缀），符合儿童认知
- 避免大段文字；能用图就不用字，能三步说完就不写五步
- 颜色可以明亮但同一页彩色元素不超过 3 种，避免杂乱
