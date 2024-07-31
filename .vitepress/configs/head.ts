import type { HeadConfig } from 'vitepress'

const isDevelopment = process.env.NODE_ENV === 'development'

export const head: HeadConfig[] = [
  // 设置图标
  ['link', { rel: 'icon', href: 'https://i.theojs.cn/avatar.png' }],
  ['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
  ['meta', { name: 'theme-color', content: '#5f67ee' }],
  ['meta', { name: 'og:type', content: 'website' }],
  ['meta', { name: 'og:locale', content: 'zh-CN' }],
  ['meta', { name: 'og:site_name', content: '玄学宝典' }],
  ['meta', { name: 'og:image', content: 'https://i.theojs.cn/avatar.png' }],
  ['meta', { name: 'author', content: 'Theo-Messi' }],
  ['meta', { name: 'copyright', content: 'Theo-Messi' }],
  ['meta', { name: 'robots', content: 'index, follow' }],
  ['meta', { name: 'evisit-after', content: '1 day' }],
  [
    'meta',
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, maximum-scale=1'
    }
  ],
  ['meta', { name: 'format-detection', content: 'telephone=no' }],
  ['meta', { name: 'description', content: '中华传统五术书籍传世经典著作' }],
  ['meta', { name: 'og:description', content: '中华传统五术书籍传世经典著作' }]
]
