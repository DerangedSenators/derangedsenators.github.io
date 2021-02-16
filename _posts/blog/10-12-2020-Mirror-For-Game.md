---
layout: post
title: Migrating to Mirror
category: blog
excerpt: Bye PlayerLink... For now :-(
author: Hanzalah Ravat
---

Hi everyone. We have been working on the project for around two months now and our progress is coming along smoothly. However, As we are approaching many deadlines we have had to make some decisions regarding PlayerLink and our game. This blog post aims to address these decisions

## PlayerLink Progress
The Development of PlayerLink has been progressing fairly smoothly so far with myself and Ash having implemented the majority of the low-level native part of the framework and are now beginning to turn our attention towards running tests and adding a `.NET` layer to allow PlayerLink to be accessed by `CLR` so that it can be used by Unity. The progress can be tracked via the [PlayerLink Repository](http://www.github.com/derangedsenators/playerlink)

## Why Migrate to Mirror
Unfortunately, we have strict deadlines to meet with the Cops And Robbers project which dictates the majority of decisions we make with the project. In this case, we have to deliver an MVP next week and we must have some form of multiplayer implemented by then and with PlayerLink at such a primitive stage with limited test data available, we have had to look elsewhere

### Enter Mirror
After a lot of consideration, we have decided to use Mirror to implement Multiplayer in our game. We decided to use Mirror as it is based on UNet which provides us with access to comprehensive documentation and is Open Source allowing us to ensure that the code is sound and secure. Mirror also uses a single codebase for both the client and server reducing the number of projects to maintain

## In Other News

### Hosting
In other news, We have decided to use the Google Cloud Platform to host our server for the game. Google Cloud offers us a fast, scalable solution for hosting our game at a resonable price.

### Documentation Website
Our public documentation website is now live [here](http://docs.derangedsenators.me). This site is auto-generated and provides documentation for all of our public APIs and other tips and tutorials

