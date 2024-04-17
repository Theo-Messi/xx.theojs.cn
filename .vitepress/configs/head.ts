import type { HeadConfig } from 'vitepress'

const isDevelopment = process.env.NODE_ENV === 'development'

export const head: HeadConfig[] = [
  // 设置图标
  ['link', { rel: 'icon', href: 'https://theovan.cn/avatar.jpg' }],
  // 设置主题颜色
  ['meta', { name: 'theme-color', content: '#5f67ee' }],
  // 设置OG类型
  ['meta', { name: 'og:type', content: 'website' }],
  // 设置OG语言
  ['meta', { name: 'og:locale', content: 'cn' }],
  // 设置OG站点名称
  ['meta', { name: 'og:site_name', content: '玄学宝典' }],
  // 设置OG图片
  ['meta', { name: 'og:image', content: 'https://theovan.cn/avatar.png' }]
  // 强制开启为深色模式
  // ["script", {}, `document.documentElement.classList.add('dark')`],
]
