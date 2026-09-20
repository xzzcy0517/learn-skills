# government · 政务红蓝风

- **适用场景**：政府单位、党政机关、事业单位的工作汇报、总结表彰、政策宣讲
- **设计关键词**：中国红 + 藏青蓝、衬线大标题、方正、庄重、大气
- **语气建议**：正式、规范、稳重，用公文化表达（"扎实推进""全面落实"），数据务必准确，不用网络流行语

## 设计 tokens

- 背景：`linear-gradient(180deg, #FFFFFF 0%, #FBFAF7 100%)`，顶部 8px 红色带 + 底部 4px 金色细线
- 主色：中国红 `#B01F24`；辅助：藏青 `#1D3A6E`、金色 `#C9A227`（仅线条点缀）
- 文字：主 `#262626`，正文 `#43494F`，弱化 `#8A8F94` / `#B9BDC2`
- 标题字体：衬线 `"Songti SC", "STSong", "SimSun", serif`，加粗
- 卡片：白底 + 1px 边 `#E3E0D8`，圆角 4px（方正），标题红色
- 字号：页标题 38px/700，封面 48px，卡片标题 21px，正文 17~20px

## 完整 CSS（直接作为 slides.html 的 <style> 内容）

```css
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { background: #FBFAF7; }
  body { font-family: "PingFang SC", "Microsoft YaHei", "Helvetica Neue", sans-serif; }

  .slide {
    width: 1280px; height: 720px;
    position: relative; overflow: hidden;
    background: linear-gradient(180deg, #FFFFFF 0%, #FBFAF7 100%);
    color: #262626;
    padding: 66px 82px 62px;
    display: none;
    flex-direction: column;
    box-shadow: inset 0 8px 0 #B01F24, inset 0 -4px 0 #C9A227;
  }
  .slide.active { display: flex; }

  .grad-text { color: #B01F24; }

  .kicker {
    display: inline-block; font-size: 15px; font-weight: 700; letter-spacing: 4px;
    color: #fff; background: #B01F24;
    padding: 7px 20px; border-radius: 3px; margin-bottom: 26px;
    width: fit-content;
  }
  h1, h2 { font-family: "Songti SC", "STSong", "SimSun", serif; }
  h1 { font-size: 48px; line-height: 1.3; font-weight: 900; color: #B01F24; letter-spacing: 2px; }
  h2 { font-size: 38px; font-weight: 900; margin-bottom: 12px; color: #1D3A6E; letter-spacing: 1px; }
  h2::after {
    content: ""; display: block; width: 72px; height: 4px;
    background: #B01F24; margin-top: 14px;
  }
  .subtitle { font-size: 20px; color: #6B7076; margin-top: 22px; line-height: 1.8; }
  .pageno { position: absolute; right: 42px; bottom: 28px; font-size: 14px; color: #B9BDC2; }
  .footer-brand { position: absolute; left: 82px; bottom: 28px; font-size: 14px; color: #B9BDC2; letter-spacing: 3px; }

  .cards { display: flex; gap: 24px; margin-top: 36px; }
  .card {
    flex: 1; background: #fff; border: 1px solid #E3E0D8;
    border-top: 4px solid #B01F24;
    border-radius: 4px; padding: 28px 26px;
  }
  .card .icon { font-size: 30px; margin-bottom: 12px; }
  .card h3 { font-size: 21px; margin-bottom: 12px; color: #B01F24; font-family: "Songti SC", "STSong", "SimSun", serif; font-weight: 700; }
  .card p { font-size: 17px; line-height: 1.85; color: #43494F; }
  .card p b, li b { color: #B01F24; }

  ul.list { margin-top: 30px; list-style: none; }
  ul.list li {
    font-size: 20px; line-height: 1.7; color: #43494F;
    padding: 14px 0 14px 40px; position: relative;
    border-bottom: 1px solid #EBE8E0;
  }
  ul.list li::before { content: "◆"; position: absolute; left: 8px; color: #B01F24; font-size: 15px; top: 18px; }

  .flow { display: flex; align-items: stretch; margin-top: 44px; }
  .flow .step { flex: 1; text-align: center; padding: 0 6px; }
  .flow .step .num {
    width: 46px; height: 46px; margin: 0 auto 14px; border-radius: 4px;
    background: #1D3A6E;
    display: flex; align-items: center; justify-content: center;
    font-size: 20px; font-weight: 700; color: #fff;
  }
  .flow .step .label { font-size: 18px; font-weight: 700; color: #262626; line-height: 1.5; }
  .flow .step .sub { font-size: 14px; color: #8A8F94; margin-top: 6px; line-height: 1.5; }
  .flow .arrow { align-self: flex-start; margin-top: 13px; color: #B01F24; font-size: 22px; flex: 0 0 22px; }

  .vs { display: flex; gap: 28px; margin-top: 36px; flex: 1; }
  .vs .col { flex: 1; border-radius: 4px; padding: 30px; background: #fff; border: 1px solid #E3E0D8; }
  .vs .col.bad { border-top: 4px solid #8A8F94; }
  .vs .col.good { border-top: 4px solid #B01F24; }
  .vs .col h3 { font-size: 22px; margin-bottom: 16px; font-family: "Songti SC", "STSong", "SimSun", serif; font-weight: 700; }
  .vs .col.bad h3 { color: #6B7076; }
  .vs .col.good h3 { color: #B01F24; }
  .vs .col ul { list-style: none; }
  .vs .col li { font-size: 18px; color: #43494F; line-height: 1.8; padding: 8px 0; }
  .vs .col.bad li::before { content: "✕  "; color: #8A8F94; }
  .vs .col.good li::before { content: "✓  "; color: #B01F24; }

  .quote {
    margin-top: 32px; padding: 24px 32px; border-left: 5px solid #B01F24;
    background: #FBF3F2; border-radius: 0 4px 4px 0;
    font-size: 21px; font-weight: 700; line-height: 1.85; color: #7A1A1E;
    font-family: "Songti SC", "STSong", "SimSun", serif;
  }

  .big-idea {
    margin-top: 38px; text-align: center; flex: 1;
    display: flex; flex-direction: column; justify-content: center; align-items: center;
  }
  .big-idea .formula { display: flex; align-items: center; gap: 24px; margin-top: 34px; }
  .big-idea .token {
    padding: 20px 30px; border-radius: 4px; font-size: 22px; font-weight: 700;
    background: #fff; border: 1px solid #E3E0D8; color: #262626;
  }
  .big-idea .token.hl { background: #B01F24; border-color: #B01F24; color: #fff; }
  .big-idea .op { font-size: 28px; color: #C9A227; }

  .center-wrap { flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; }
```

## 该风格的注意事项

- 不用 emoji，不用渐变文字，不用网络用语；红色、藏青、金三色已足够
- 圆角统一 4px 以内，保持方正感；阴影一律不用
- 对比页（vs）不用红绿对比：问题侧用灰色，成效侧用红色
- 涉及数据、排名、表彰信息必须与用户素材完全一致，不得编造；缺数据就留占位并提醒用户补充
- 封面建议包含：主标题（红）、副标题（单位/会议名称）、汇报人与日期
