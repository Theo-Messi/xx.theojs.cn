import { defineConfig } from 'vitepress'
import { nav, sidebar, head } from './configs'
import { pagefindPlugin } from 'vitepress-plugin-pagefind'

export default defineConfig({
  vite: {
    plugins: [
      pagefindPlugin({
        locales: {
          root: {
            btnPlaceholder: '搜索',
            placeholder: '搜索文档',
            emptyText: '空空如也',
            heading: '共: {{searchResult}} 条结果',
            // 搜索结果不展示最后修改日期日期
            showDate: false
          }
        },
        customSearchQuery(input) {
          // 将搜索的每个中文单字两侧加上空格
          return input
            .replace(/[\u4e00-\u9fa5]/g, ' $& ')
            .replace(/\s+/g, ' ')
            .trim()
        }
      })
    ]
  },
  // 站点名称
  title: '玄学宝典',

  // 站点语言
  lang: 'cn',

  // 网站头部
  head,

  // 站点介绍
  description: '',

  // 上次更新时间戳
  lastUpdated: true,

  // 开启后网址后缀无'html'
  cleanUrls: true,

  // 源目录
  srcDir: 'src',

  // markdown-it插件配置
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark-dimmed'
    },
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    }
  },

  //true强制开启深色模式 false强制开启浅色模式
  // appearance: false,

  // 站点地图
  // sitemap: {
  //   hostname: 'https://theovan.xyz',
  //   transformItems(items) {
  //     return items.filter((item) => !item.url.includes('migration'))
  //   }
  // },

  themeConfig: {
    // // logo
    logo: 'https://theovan.xyz/avatar.png',

    // 社交链接
    socialLinks: [{ icon: 'github', link: 'https://github.com/vanhiupun' }],

    // false去除网站标题 只显示logo
    // siteTitle: false,

    // GitHub编辑页面
    editLink: {
      pattern: 'https://github.com/vanhiupun/bible/blob/main/docs/src/:path',
      text: '为此页提供修改建议'
    },

    // 目录设置
    outline: 'deep', // 索引级别
    outlineTitle: '本页目录', // 目录文本

    // 上次更新
    lastUpdated: { text: '上次更新' },

    // 文章翻页
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    // 移动端 - 外观
    darkModeSwitchLabel: '外观',

    // 移动端 - 返回顶部
    returnToTopLabel: '返回顶部',

    // 移动端 - menu
    sidebarMenuLabel: '文章',

    // 导航栏
    nav,

    // 侧边栏
    sidebar,

    // // algolia搜索
    // algolia,

    // 底部信息
    footer: {
      message: 'Released Under The MIT License.',
      copyright:
        'Copyright © 2019 - 2023 <a href="https://github.com/vanhiupun" target="_blank">Theo</a> . All Rights Reserved.'
    }
  }
})
