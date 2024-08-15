# Getting Started with ArcanePad in Unity

Welcome to the Arcanepad Unity Tutorial! This guide will help you get started with creating Arcanepad games in Unity.

## Starter Template

<YoutubeEmbed video-id="27YDLVHISog" />

https://github.com/imvenx/unity-starter-template-arcanepad

::: code-group
<<< ./template-code/ViewManager.cs
<<< ./template-code/PadManager.cs
<<< ./template-code/Player.cs
<<< ./template-code/Models.cs
<<< ./template-code/.gitignore {txt}
:::

## Setup from Zero

If you want to start an Arcanepad Project in Unity from scratch you need to follow this steps, otherwise you can download the starter repo and skip this part.

<YoutubeEmbed video-id="3Ehlu9WlKwU" />

### 1. Add Native Web Sockets package

Select "Add package by git url" and add this to the url

```
https://github.com/endel/NativeWebSocket.git#upm
```

### 2. Add Newtonsoft package

Select "Add package by name" and write this on the name:

```
com.unity.nuget.newtonsoft-json
```

### 3. Get the SDK

Download the arcanepad-unity-sdk unity package from this link: https://github.com/imvenx/arcanepad-unity-sdk/releases and import it in your unity project

### 4. Set compression format to disabled

On `Edit -> Project Settings -> Player -> WebGL settings -> Publishing Settings` set `Comperssion format` to `disabled`

<img src="./comperssion-format.png" />

## Creating View and Pad scenes

<YoutubeEmbed video-id="-rUw5gDRr8A" />

## Handling Pad Connect/Disconnect

<YoutubeEmbed video-id="VDSHRuETyhc" />

## Emit Events Pad/View

<YoutubeEmbed video-id="SdOOWm9KTlw" />

## Export and share your game

This is an alternative offline way to manually export and share our Arcanepad game. We working to add an
easier way with UI menu to share and sell games online on the Arcanepad store, so anyone can discover it.

<YoutubeEmbed video-id="srqW1jga7aA" />

## Don't use real time light on your gamepads!

Low end devices will struggle even with a single mesh if you use real time light, try to optimize as much as possible. Also you could use "hard shadows" or "no shadows".

![Alt text](baked-light.png)

## Use coroutines instead of async on gamepads

Async and Await don't work well on webgl exports.

## Upload your game to Arcanepad

Go to https://dev.arcanepad.com, create an account and after you are verified you can upload your game. The app folder has to be compressed on .zip format.
