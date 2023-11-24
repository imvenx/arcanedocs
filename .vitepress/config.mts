import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [['link', { rel: 'icon', href: '/arcanedocs/favicon.ico' }]],
  title: "ArcaneDocs",
  outDir: './docs',
  base: '/arcanedocs/',
  description: "Documentation and tutorials to create apps and games with Arcanepad",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      src: '/images/arcanepad-logo.png'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/what-is-arcanepad' },
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is Arcanepad?', link: '/guide/what-is-arcanepad' },
          { text: 'Getting Started', link: '/guide/get-started' },
        ]
      }, {
        text: 'Web',
        collapsed: true,
        items: [
          { text: 'Getting Started - Web', link: '/guide/web/get-started', },
          { text: 'Markdown Examples', link: '/guide/markdown-examples' },
          { text: 'Runtime API Examples', link: '/guide/api-examples' }
        ]
      }, {
        text: 'Unity',
        collapsed: true,
        items: [
          { text: 'Getting Started - Unity', link: '/guide/unity/get-started', },
        ]
      }, {
        text: 'Godot 3',
        collapsed: true,
        items: [
          { text: 'Getting Started - Godot 3', link: '/guide/godot3/get-started', },
        ]
      },
      //  {
      //   text: 'To-Do', link: '/guide/to-do'
      // },
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.com/invite/6Pr9JBCGXy' },
      { icon: 'twitter', link: 'https://twitter.com/arcanepad' },
      { icon: 'youtube', link: 'https://www.youtube.com/@Arcanepad' },
      { icon: 'mastodon', link: 'https://mastodon.social/@Arcanepad' },
      { icon: 'github', link: 'https://github.com/imvenx' },
    ]
  }
})
