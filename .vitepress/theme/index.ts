// .vitepress/theme/index.ts */
import DefaultTheme from 'vitepress/theme'
import { inject } from '@vercel/analytics'

inject()
import './custom.css'
import './custom-blocks.css'

export default { extends: DefaultTheme }
