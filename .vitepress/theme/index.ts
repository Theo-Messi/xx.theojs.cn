// .vitepress/theme/index.ts */
import DefaultTheme from 'vitepress/theme'
import { inject } from '@vercel/analytics'
import googleAnalytics from 'vitepress-plugin-google-analytics'
import { h } from 'vue'
import Box from './components/Box.vue'
import Links from './components/Links.vue'
import BoxCube from './components/BoxCube.vue'
import AsideLogo from './components/AsideLogo.vue'
import { NolebaseGitChangelogPlugin } from '@nolebase/vitepress-plugin-git-changelog/client'

import './styles/index.scss'
import '@nolebase/vitepress-plugin-git-changelog/client/style.css'
import '@fortawesome/fontawesome-free/css/all.css'
inject()

// 导出默认主题
export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'aside-ads-before': () => h(AsideLogo)
    })
  },
  enhanceApp: ({ app }, ctx) => {
    googleAnalytics({ id: 'G-5SHLV23EGQ' })
    app.component('Box', Box)
    app.component('Links', Links)
    app.component('BoxCube', BoxCube)
    app.use(NolebaseGitChangelogPlugin, {
      mapAuthors: [
        {
          name: 'Theo',
          username: 'Theo-messi',
          mapByNameAliases: ['Theo', 'vanhiupun'],
          mapByEmailAliases: [
            'fanxiaobin422@gmail.com',
            'fanxiaobin422@sina.com',
            '771720405@qq.com'
          ]
        },
        {
          name: 'dependabot',
          username: 'dependabot',
          mapByEmailAliases: [
            '49699333+dependabot[bot]@users.noreply.github.com'
          ]
        }
      ]
    })
  }
}
