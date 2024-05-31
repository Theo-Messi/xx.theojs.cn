// .vitepress/theme/index.ts */
import DefaultTheme from 'vitepress/theme'
import { inject } from '@vercel/analytics'
import googleAnalytics from 'vitepress-plugin-google-analytics'
import { h } from 'vue'
import AsideSponsors from './components/pendant.vue'

import './styles/index.css'
inject()

// 导出默认主题
export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'aside-ads-before': () => h(AsideSponsors)
    })
  },
  enhanceApp: (ctx) => {
    googleAnalytics({ id: 'G-5SHLV23EGQ' })
  }
}
