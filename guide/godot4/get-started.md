# Getting Started With Arcanepad on Godot 4

Welcome to the Arcanepad Godot Tutorial! This guide will help you get started with creating Arcanepad games in Godot.

::: warning

<!-- At the time of writing this, we are using Godot 4.3 dev build because it fixes many problems with webgl exports. You can  <a href="/arcanedocs/downloads/godot.windows.editor.x86_64.zip" target="_blank">download it by clicking here</a> you will have to use the no threads template that is included on the zip, for your debug webgl exports, and uncheck the use threads option. <u> It is all explained in the video. </u> -->

### IMPORTANT!

We are using Godot 4.3 rc3. Don't try with older versions as they won't work. You can download it here https://godotengine.org/article/release-candidate-godot-4-3-rc-3/#downloads

On the video tutorial we were the older 4.3 dev4 version, but it had a sound bug that the new rc3 has fixed. Also in the video we explain how to install export templates from the provided zip, this is no longer necesary as rc3 can install the export templates automatically on the export window. You just need to point to the downloaded zip's. Reach us at arcanepad@gmail.com or discord if you need help.
:::

## Repo

https://github.com/imvenx/arcanepad-godot-sdk

::: code-group
<<< ./get-started-assets/Main.gd {php}
<<< ./get-started-assets/View.gd {php}
<<< ./get-started-assets/Player.gd {php}
<<< ./get-started-assets/Pad.gd {php}
<<< ./get-started-assets/AttackButton.gd {php}
<<< ./get-started-assets/CalibratePointerTopLeftButton.gd {php}
<<< ./get-started-assets/CalibratePointerBottomRightButton.gd {php}
<<< ./get-started-assets/CalibrateRotationButton.gd {php}
:::

## Downloading the starter template and exploring Main scene logic

<YoutubeEmbed video-id="hIx36MqvnaA" />

## Exploring the Gamepad and View scenes

<YoutubeEmbed video-id="Eqvh2T7-mRg" />

## Export game and add it to games library (optional)

<YoutubeEmbed video-id="idrow9jl9sc" />

## Upload your game to Arcanepad

Go to https://dev.arcanepad.com, create an account and after you are verified you can upload your game. The app folder has to be compressed on .zip format.

## Setup from zero or update arcane library

If you want to start your project from zero or update the arcane library, you can download the latest version here https://github.com/imvenx/arcanepad-godot-sdk/releases
