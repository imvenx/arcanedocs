# Radius Raid

This is an adaptation of the amazing open source game "Radius Raid" to the Arcanepad platform

<YoutubeEmbed video-id="ZNmKL_J8nlc" />

This project was separated into two different projects since all the web technologies involved to make the game were from 2013 it was difficult
to integrate to a modern framework with little effort and I had no time for that, so I just put the whole vainila js game inside a vue project
and load it as I could, added a sort of wrapper to the Arcane object on the view. 

On the gamepad I could do it with more modern technologies so I had a separate project for that, also because the routing system would have problems
loading all the static HTML from the origianl project while doing SPA. 

I'm sure it can be improved, this was rushed a little bit but it is a good a example of how to make work an old game with Arcaenpad in no time.

## View Repo

https://github.com/imvenx/radius-raid-arcanepad

## Pad Repo

https://github.com/imvenx/radius-raid-pad