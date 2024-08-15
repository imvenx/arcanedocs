# Getting Started with ArcanePad on Web

Welcome to ArcanePad! This guide will help you get started with integrating ArcanePad into your web projects.

If you haven't installed the app yet, please refer to [this guide](/guide/get-started) and follow the instructions to install ArcanePad desktop and mobile apps before continuing.

We are going to use Quasar.js, a framework on top of Vue.js. The reason for this is that Quasar comes with a lot of tools out of the box that are going to make our development journey a lot easier. For more information, visit [quasar.dev](https://quasar.dev) to get started.

## Things you need to have installed

1. Visual Studio Code
2. Node.js
3. NPM
4. Vue
5. Quasar

### Installing the ArcanePad Web SDK

```bash
npm install arcanepad-web-sdk
```

## Basic Tutorial

<YoutubeEmbed video-id="0zk3x568NXM" />

## Getting Sensors Data Tutorial

<YoutubeEmbed video-id="-q6kseH4uQ8" />

## Starter Template Repo

https://github.com/imvenx/arcanepad-web-template

::: code-group
<<< @/guide/web/template-project/App.vue
<<< @/guide/web/template-project/IndexPage.vue
<<< @/guide/web/template-project/MainLayout.vue
<<< @/guide/web/template-project/models.ts
<<< @/guide/web/template-project/PadPage.vue
<<< @/guide/web/template-project/Player.vue
<<< @/guide/web/template-project/routes.ts
<<< @/guide/web/template-project/quasar.config.js
:::

## Upload your game to Arcanepad

Go to https://dev.arcanepad.com, create an account and after you are verified you can upload your game. The app folder has to be compressed on .zip format.
