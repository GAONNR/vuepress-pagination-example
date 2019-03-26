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
    plugins: [
      [
        '@vuepress/pagination',
        // The default postsFilter has extra paranthesis that make it not work
        { postsFilter: (type => type.frontmatter.type === 'post') }
        // A sortFilter can also be used

        // Plugin is hardcoded to 10 posts per pagination page
        // Plugin is hardcoded to paginate posts in the 'page' folder
      ]
    ] 
 }