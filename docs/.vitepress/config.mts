import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Learn Skill',
  description: '收集和分享 GitHub 上优秀 Skill 的使用方法与实践经验的文档仓库',
  lastUpdated: true,
  cleanUrls: true,

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '入门指南', link: '/guide/' },
      { text: 'Skill 笔记', link: '/skills/' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '入门指南',
          items: [
            { text: '介绍', link: '/guide/' },
            { text: '如何贡献', link: '/guide/contribute' },
          ],
        },
      ],
      '/skills/': [
        {
          text: 'Skill 笔记',
          items: [
            { text: '总览', link: '/skills/' },
            { text: '笔记模板', link: '/skills/template' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xzzcy0517/learn-skill' },
    ],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索文档' },
          modal: { noResultsText: '没有找到相关结果', resetButtonTitle: '清除查询条件' },
        },
      },
    },

    outline: { label: '本页目录' },
    docFooter: { prev: '上一篇', next: '下一篇' },

    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © 2026 xzzcy0517',
    },
  },
})
