# university · 学术蓝风

- **适用场景**：大学课堂、学术报告、论文答辩、开题/中期汇报
- **设计关键词**：藏蓝 + 金色点缀、衬线标题、规整、学术感、庄重但不沉闷
- **语气建议**：严谨规范，用词书面化，逻辑连接词完整（首先/进而/综上），数据和引用要准确

## 设计 tokens

- 背景：`linear-gradient(180deg, #FFFFFF 0%, #F7F8FA 100%)`，顶部 6px 藏蓝色带（`box-shadow: inset 0 6px 0 #1F3864`）
- 主色：藏蓝 `#1F3864`；辅助：雾蓝 `#8EA9C9`、金色 `#B9924C`（仅点缀）
- 文字：主 `#1C2733`，正文 `#3A4756`，弱化 `#7E8A99` / `#AEB8C4`
- 标题字体：衬线 `"Songti SC", "STSong", "SimSun", serif`，正文字体不变
- 卡片：白底 + 1px 边 `#DDE3EA`，圆角 8px，顶部 3px 藏蓝条
- 字号：页标题 36px/700，封面 44px，卡片标题 20px，正文 16~19px

## 完整 CSS（直接作为 slides.html 的 <style> 内容）

```css
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { background: #F7F8FA; }
  body { font-family: "PingFang SC", "Microsoft YaHei", "Helvetica Neue", sans-serif; }

  .slide {
    width: 1280px; height: 720px;
    position: relative; overflow: hidden;
    background: linear-gradient(180deg, #FFFFFF 0%, #F7F8FA 100%);
    color: #1C2733;
    padding: 64px 80px 60px;
    display: none;
    flex-direction: column;
    box-shadow: inset 0 6px 0 #1F3864;
  }
  .slide.active { display: flex; }

  .grad-text { color: #1F3864; }

  .kicker {
    display: inline-block; font-size: 14px; font-weight: 600; letter-spacing: 3px;
    color: #B9924C; border: 1px solid #D9C8A6;
    padding: 6px 16px; border-radius: 3px; margin-bottom: 24px;
    width: fit-content;
  }
  h1, h2 { font-family: "Songti SC", "STSong", "SimSun", serif; }
  h1 { font-size: 44px; line-height: 1.3; font-weight: 700; color: #1F3864; }
  h2 { font-size: 36px; font-weight: 700; margin-bottom: 12px; color: #1F3864; }
  h2::after {
    content: ""; display: block; width: 56px; height: 3px;
    background: #B9924C; margin-top: 14px;
  }
  .subtitle { font-size: 19px; color: #7E8A99; margin-top: 20px; line-height: 1.75; }
  .pageno { position: absolute; right: 40px; bottom: 26px; font-size: 14px; color: #AEB8C4; }
  .footer-brand { position: absolute; left: 80px; bottom: 26px; font-size: 14px; color: #AEB8C4; letter-spacing: 2px; }

  .cards { display: flex; gap: 22px; margin-top: 34px; }
  .card {
    flex: 1; background: #fff; border: 1px solid #DDE3EA;
    border-top: 3px solid #1F3864;
    border-radius: 8px; padding: 26px 24px;
  }
  .card .icon { font-size: 30px; margin-bottom: 12px; }
  .card h3 { font-size: 20px; margin-bottom: 10px; color: #1F3864; font-family: "Songti SC", "STSong", "SimSun", serif; }
  .card p { font-size: 16px; line-height: 1.8; color: #3A4756; }
  .card p b, li b { color: #1C2733; }

  ul.list { margin-top: 28px; list-style: none; }
  ul.list li {
    font-size: 19px; line-height: 1.7; color: #3A4756;
    padding: 13px 0 13px 38px; position: relative;
    border-bottom: 1px solid #E6EAEF;
  }
  ul.list li::before { content: "▪"; position: absolute; left: 8px; color: #B9924C; font-size: 18px; }

  .flow { display: flex; align-items: stretch; margin-top: 42px; }
  .flow .step { flex: 1; text-align: center; padding: 0 6px; }
  .flow .step .num {
    width: 44px; height: 44px; margin: 0 auto 12px; border-radius: 50%;
    background: #1F3864;
    display: flex; align-items: center; justify-content: center;
    font-size: 19px; font-weight: 700; color: #fff;
  }
  .flow .step .label { font-size: 17px; font-weight: 600; color: #1C2733; line-height: 1.5; }
  .flow .step .sub { font-size: 13px; color: #7E8A99; margin-top: 5px; line-height: 1.5; }
  .flow .arrow { align-self: flex-start; margin-top: 12px; color: #8EA9C9; font-size: 22px; flex: 0 0 22px; }

  .vs { display: flex; gap: 26px; margin-top: 34px; flex: 1; }
  .vs .col { flex: 1; border-radius: 8px; padding: 28px; background: #fff; border: 1px solid #DDE3EA; }
  .vs .col.bad { border-top: 3px solid #A94442; }
  .vs .col.good { border-top: 3px solid #1F3864; }
  .vs .col h3 { font-size: 21px; margin-bottom: 14px; font-family: "Songti SC", "STSong", "SimSun", serif; }
  .vs .col.bad h3 { color: #A94442; }
  .vs .col.good h3 { color: #1F3864; }
  .vs .col ul { list-style: none; }
  .vs .col li { font-size: 17px; color: #3A4756; line-height: 1.75; padding: 7px 0; }
  .vs .col.bad li::before { content: "✕  "; color: #A94442; }
  .vs .col.good li::before { content: "✓  "; color: #1F3864; }

  .quote {
    margin-top: 30px; padding: 22px 30px; border-left: 4px solid #B9924C;
    background: #F7F4EC; border-radius: 0 8px 8px 0;
    font-size: 20px; font-weight: 600; line-height: 1.8; color: #6B5A33;
  }

  .big-idea {
    margin-top: 36px; text-align: center; flex: 1;
    display: flex; flex-direction: column; justify-content: center; align-items: center;
  }
  .big-idea .formula { display: flex; align-items: center; gap: 22px; margin-top: 32px; }
  .big-idea .token {
    padding: 18px 28px; border-radius: 8px; font-size: 21px; font-weight: 600;
    background: #fff; border: 1px solid #DDE3EA; color: #1C2733;
  }
  .big-idea .token.hl { background: #1F3864; border-color: #1F3864; color: #fff; }
  .big-idea .op { font-size: 26px; color: #B9924C; }

  .center-wrap { flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; }
```

## 该风格的注意事项

- 不用 emoji；需要图标时用文字编号或「▪」「—」等符号代替
- 金色仅用于 kicker、标题下划线、quote 边线等点缀，不大面积使用
- 页面顶部 6px 藏蓝色带是该风格的标志，所有页保持一致（包括封面）
- 答辩场景建议在封面副标题区预留「汇报人 / 学号 / 导师 / 日期」位置
