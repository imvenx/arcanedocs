# Getting Started With Arcanepad on Godot 3

Welcome to the Arcanepad Godot Tutorial! This guide will help you get started with creating Arcanepad games in Godot.

## Cool demo

<YoutubeEmbed video-id="-Qz9MFCGoYE" />

## Starter Template Tutorial

::: warning
Breaking changes were made to the way we use events, in the video I use strings to call events like "GetQuaternion", but now is AEventName.GetQuaternion instead, this is explained on the next video after this on the "Breaking changes to event names" section, and also has been updated on the template repo code, so if you read the code and follow how is structured you shouldn't have any problems.
:::

<YoutubeEmbed video-id="bZ31lta1MgQ" />
## Repo

https://github.com/imvenx/arcanepad-godot3-sdk

::: warning
Since there is no GDScript code syntax highlight support, we have to use PHP syntax highlight. So the highlight will not be totally accurate.
:::

::: code-group
<<< ./get-started-assets/Main.gd {php}
<<< ./get-started-assets/View.gd {php}
<<< ./get-started-assets/Pad.gd {php}
<<< ./get-started-assets/Player.gd {php}
<<< ./get-started-assets/Events.gd {php}
<<< ./get-started-assets/EventName.gd {php}
:::

## Breaking changes to event names

<YoutubeEmbed video-id="PL6J-acMXNU" />

## Upload your game to Arcanepad

Go to https://dev.arcanepad.com, create an account and after you are verified you can upload your game. The app folder has to be compressed on .zip format.
