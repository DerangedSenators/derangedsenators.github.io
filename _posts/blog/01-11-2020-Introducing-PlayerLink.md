---
layout: post
title: Introducing PlayerLink
category: blog
excerpt: Linking of the Players!
author: Hanzalah Ravat
---
## Hello PlayerLink
PlayerLink is our new bespoke online multiplayer solution designed with performance, security and scalability in mind. We are writing this libary using native programming APIs which in turn will allow us to maximise hardware performance for the best gaming experience. You can view the progress of PlayerLink by visiting the [GitHub repository](https://github.com/derangedsenators/playerlink)

### TCP or UDP?
We intend to use BOTH. This way, developers are given the freedom to choose between speed and reliability from a single API without much additional configuration. The TCP communications will be encrypted using the TLS protocol and UDP connections will also be secured using an inhouse technique known as StatefulUDP. This system will use the existing secured TLS connection to establish another shared key which can be used to encrypt all UDP traffic

### Scalability
PlayerLink is designed with scalability in mind. We have designed it such that a large majority of processing actually takes place on the client side rather than on the server. This will allow the server to host many more games and also allow for a higher throughput
