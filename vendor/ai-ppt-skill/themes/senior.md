# senior · 简约求知风

- **适用场景**：高中课堂、知识密度较高的讲授、复习课、竞赛辅导
- **设计关键词**：浅色干净、学院蓝、信息密度高、少装饰、重结构
- **语气建议**：清晰、严谨、有条理，少寒暄，直接给知识结构和方法

## 设计 tokens

- 背景：`linear-gradient(160deg, #FFFFFF 0%, #F4F7FB 70%, #EEF3FA 100%)`，装饰极少（仅右上一抹浅蓝）
- 主色：学院蓝 `#2B5EA7`；辅助：天蓝 `#5B9BD5`、强调橙 `#E8833A`（仅关键处）
- 文字：主 `#1F2D3D`，正文 `#3C4B5E`，弱化 `#8595A8` / `#B4C1CF`
- 卡片：白底 + 1px 边 `#DCE4F0`，圆角 12px，几乎无阴影
- 字号：页标题 36px/700，封面 46px，卡片标题 20px，正文 16~19px（密度优先）

## 完整 CSS（直接作为 slides.html 的 <style> 内容）

```css
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { background: #F4F7FB; }
  body { font-family: "PingFang SC", "Microsoft YaHei", "Helvetica Neue", sans-serif; }

  .slide {
    width: 1280px; height: 720px;
    position: relative; overflow: hidden;
    background: linear-gradient(160deg, #FFFFFF 0%, #F4F7FB 70%, #EEF3FA 100%);
    color: #1F2D3D;
    padding: 60px 78px;
    display: none;
    flex-direction: column;
  }
  .slide.active { display: flex; }

  .slide::before {
    content: ""; position: absolute; right: -140px; top: -140px;
    width: 380px; height: 380px; border-radius: 50%;
    background: radial-gradient(circle, rgba(43,94,167,.08) 0%, rgba(43,94,167,0) 70%);
  }

  .grad-text {
    background: linear-gradient(90deg, #2B5EA7, #5B9BD5);
    -webkit-background-clip: text; background-clip: text; color: transparent;
  }

  .kicker {
    display: inline-block; font-size: 15px; font-weight: 600; letter-spacing: 2px;
    color: #2B5EA7; border: 1px solid #B9CCE8;
    padding: 6px 16px; border-radius: 6px; margin-bottom: 24px;
    width: fit-content;
  }
  h1 { font-size: 46px; line-height: 1.28; font-weight: 700; color: #1F2D3D; }
  h2 { font-size: 36px; font-weight: 700; margin-bottom: 10px; color: #1F2D3D; }
  .subtitle { font-size: 19px; color: #8595A8; margin-top: 18px; line-height: 1.7; }
  .pageno { position: absolute; right: 38px; bottom: 26px; font-size: 14px; color: #B4C1CF; }
  .footer-brand { position: absolute; left: 78px; bottom: 26px; font-size: 14px; color: #B4C1CF; letter-spacing: 2px; }

  .cards { display: flex; gap: 22px; margin-top: 32px; }
  .card {
    flex: 1; background: #fff; border: 1px solid #DCE4F0;
    border-radius: 12px; padding: 26px 24px;
  }
  .card .icon { font-size: 32px; margin-bottom: 12px; }
  .card h3 { font-size: 20px; margin-bottom: 10px; color: #2B5EA7; }
  .card p { font-size: 16px; line-height: 1.75; color: #3C4B5E; }
  .card p b, li b { color: #1F2D3D; }

  ul.list { margin-top: 26px; list-style: none; }
  ul.list li {
    font-size: 19px; line-height: 1.65; color: #3C4B5E;
    padding: 12px 0 12px 38px; position: relative;
    border-bottom: 1px solid #E8EEF6;
  }
  ul.list li::before { content: "▸"; position: absolute; left: 8px; color: #2B5EA7; font-size: 18px; }

  .flow { display: flex; align-items: stretch; margin-top: 40px; }
  .flow .step { flex: 1; text-align: center; padding: 0 6px; }
  .flow .step .num {
    width: 44px; height: 44px; margin: 0 auto 12px; border-radius: 8px;
    background: #2B5EA7;
    display: flex; align-items: center; justify-content: center;
    font-size: 20px; font-weight: 700; color: #fff;
  }
  .flow .step .label { font-size: 17px; font-weight: 600; color: #1F2D3D; line-height: 1.5; }
  .flow .step .sub { font-size: 13px; color: #8595A8; margin-top: 5px; line-height: 1.5; }
  .flow .arrow { align-self: flex-start; margin-top: 12px; color: #5B9BD5; font-size: 22px; flex: 0 0 22px; }

  .vs { display: flex; gap: 26px; margin-top: 32px; flex: 1; }
  .vs .col { flex: 1; border-radius: 12px; padding: 28px; background: #fff; border: 1px solid #DCE4F0; }
  .vs .col.bad { border-top: 3px solid #D05A5A; }
  .vs .col.good { border-top: 3px solid #2B5EA7; }
  .vs .col h3 { font-size: 21px; margin-bottom: 14px; }
  .vs .col.bad h3 { color: #D05A5A; }
  .vs .col.good h3 { color: #2B5EA7; }
  .vs .col ul { list-style: none; }
  .vs .col li { font-size: 17px; color: #3C4B5E; line-height: 1.7; padding: 7px 0; }
  .vs .col.bad li::before { content: "✕  "; color: #D05A5A; }
  .vs .col.good li::before { content: "✓  "; color: #2B5EA7; }

  .quote {
    margin-top: 30px; padding: 22px 30px; border-left: 4px solid #2B5EA7;
    background: #EEF3FB; border-radius: 0 10px 10px 0;
    font-size: 20px; font-weight: 600; line-height: 1.75; color: #24467C;
  }

  .big-idea {
    margin-top: 36px; text-align: center; flex: 1;
    display: flex; flex-direction: column; justify-content: center; align-items: center;
  }
  .big-idea .formula { display: flex; align-items: center; gap: 22px; margin-top: 32px; }
  .big-idea .token {
    padding: 18px 28px; border-radius: 10px; font-size: 22px; font-weight: 600;
    background: #fff; border: 1px solid #DCE4F0; color: #1F2D3D;
  }
  .big-idea .token.hl { background: #2B5EA7; border-color: #2B5EA7; color: #fff; }
  .big-idea .op { font-size: 28px; color: #5B9BD5; }

  .center-wrap { flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; }
```

## 该风格的注意事项

- 装饰最少的一种风格：不使用大色块、不加阴影，靠留白和层级取胜
- 可以承载较高信息密度，列表可到 5 条，正文可到 19px，但仍不许溢出
- 橙色 `#E8833A` 只用于易错点、关键词等个别强调，一页不超过 1 处
