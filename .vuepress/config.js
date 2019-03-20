module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Page', link: '/page/' },
          { text: 'External', link: 'https://google.com' },
        ]
    },
    plugins: [['@vuepress/pagination']] 
 }