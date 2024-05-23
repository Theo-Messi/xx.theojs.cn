// .vitepress/theme/index.ts */
import DefaultTheme from 'vitepress/theme'
import { inject } from '@vercel/analytics'
import googleAnalytics from 'vitepress-plugin-google-analytics'

// 注入分析
inject()
// 导入自定义样式
import './styles/index.scss'
// 导出默认主题
export default {
  extends: DefaultTheme,
  enhanceApp: (ctx) => {
    googleAnalytics({ id: 'G-5SHLV23EGQ' })
  }
}
