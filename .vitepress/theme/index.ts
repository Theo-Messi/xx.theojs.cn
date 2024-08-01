// .vitepress/theme/index.ts */
import DefaultTheme from 'vitepress/theme'
import googleAnalytics from 'vitepress-plugin-google-analytics'
import { h } from 'vue'
import {
  DocBox,
  DocLinks,
  DocBoxCube,
  DocAsideLogo,
  HomeUnderline,
  BaziConverter,
  Announcement
} from './components'

import './styles/index.scss'
import '@fortawesome/fontawesome-free/css/all.css'

// 导出默认主题
export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-info-before': () => h(Announcement),
      'aside-ads-before': () => h(DocAsideLogo)
    })
  },
  enhanceApp: ({ app }, ctx) => {
    googleAnalytics({ id: 'G-5SHLV23EGQ' })
    app.component('Home', HomeUnderline)
    app.component('Box', DocBox)
    app.component('Links', DocLinks)
    app.component('BoxCube', DocBoxCube)
    app.component('BZ', BaziConverter)
  }
}
