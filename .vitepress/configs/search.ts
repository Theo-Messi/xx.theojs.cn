import type { DefaultTheme } from 'vitepress'

export const search: DefaultTheme.AlgoliaSearchOptions = {
  appId: 'M2BBRX6C1F',
  apiKey: '8860e6474194a5fb3f649283b77c43d7',
  indexName: 'xx-theojs',
  insights: true,
  locales: {
    root: {
      placeholder: '若简体无法搜索到相关内容，请尝试使用繁体',
      translations: {
        button: {
          buttonText: '搜索书籍',
          buttonAriaLabel: '搜索书籍'
        },
        modal: {
          searchBox: {
            resetButtonTitle: '清除查询条件',
            resetButtonAriaLabel: '清除查询条件',
            cancelButtonText: '取消',
            cancelButtonAriaLabel: '取消'
          },
          startScreen: {
            recentSearchesTitle: '搜索历史',
            noRecentSearchesText: '没有搜索历史',
            saveRecentSearchButtonTitle: '保存至搜索历史',
            removeRecentSearchButtonTitle: '从搜索历史中移除',
            favoriteSearchesTitle: '收藏',
            removeFavoriteSearchButtonTitle: '从收藏中移除'
          },
          errorScreen: {
            titleText: '无法获取结果',
            helpText: '你可能需要检查你的网络连接'
          },
          footer: {
            selectText: '选择条目',
            navigateText: '切换条目',
            closeText: '关闭搜索框',
            searchByText: '搜索提供者'
          },
          noResultsScreen: {
            noResultsText: '无法找到相关结果',
            suggestedQueryText: '你可以尝试查询',
            reportMissingResultsText: '你认为该查询应该有结果？',
            reportMissingResultsLinkText: '点击反馈'
          }
        }
      }
    }
  }
}
