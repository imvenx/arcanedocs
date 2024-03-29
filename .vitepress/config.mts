import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    ['link', { rel: 'icon', href: '/arcanedocs/favicon.ico' }],

    ['meta', { property: 'og:title', content: 'ArcaneDocs' }],
    ['meta', { property: 'og:description', content: 'Documentation and tutorials to create apps and games with Arcanepad' }],
    ['meta', { property: 'og:image', content: '/arcanedocs/favicon.ico' }],
    ['meta', { property: 'og:url', content: 'https://imvenx.github.io/arcanedocs/' }],
    ['meta', { property: 'og:type', content: 'website' }]
  ],
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
      { text: 'Guide', link: '/guide/what-is-arcanepad', activeMatch: '/guide' },
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is Arcanepad?', link: '/guide/what-is-arcanepad' },
          { text: 'Getting Started', link: '/guide/get-started' },
        ]
      },
      {
        text: 'Unity',
        collapsed: true,
        items: [
          { text: 'Getting Started - Unity', link: '/guide/unity/get-started/get-started', },
          { text: 'Flying Car Game', link: '/guide/unity/flying-car', },
        ]
      },
      {
        text: 'Web',
        collapsed: true,
        items: [
          { text: 'Getting Started - Web', link: '/guide/web/get-started', },
          { text: 'Space Ships Retro Game', link: '/guide/web/radius-raid', },
          // { text: 'Markdown Examples', link: '/guide/markdown-examples' },
          // { text: 'Runtime API Examples', link: '/guide/api-examples' }
        ]
      },
      {
        text: 'Godot 3',
        collapsed: true,
        items: [
          { text: 'Getting Started - Godot 3', link: '/guide/godot3/get-started', },
          { text: 'Baseball Game', link: '/guide/godot3/baseball-game', },
        ]
      },
      {
        text: 'Godot 4', collapsed: true,
        items: [
          { text: 'Getting Started', link: '/guide/godot4/get-started' },
          { text: 'Platformer Game', link: '/guide/godot4/platformer-game' },
        ]
      },
      { text: 'Unreal Engine 5 (soon)', },
      { text: 'UX Recomendations', link: '/guide/recomendations/recomendations' },
      { text: 'Monetization', link: '/guide/monetization/monetization' },
      { text: 'ArcaneJam', link: '/guide/arcanejam' },
      { text: 'Cool Ideas & Random Stuff', link: '/guide/random-stuff/random-stuff' },
      { text: 'To Do', link: '/guide/to-do' },
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.com/invite/6Pr9JBCGXy' },
      { icon: 'twitter', link: 'https://twitter.com/arcanepad' },
      { icon: 'youtube', link: 'https://www.youtube.com/@Arcanepad' },
      { icon: 'instagram', link: 'https://www.instagram.com/arcanepad/' },
      { icon: 'mastodon', link: 'https://mastodon.social/@Arcanepad' },
      { icon: 'github', link: 'https://github.com/imvenx' },
    ]
  }
})
