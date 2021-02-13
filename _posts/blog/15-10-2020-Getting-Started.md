---
layout: post
title: Getting Started
category: blog
excerpt: Our Game :)
author: Naim Ahmed
---
<style>
    
    .column1 {
        float: left;
        width: 30%;
        padding: 5px;
    }

    .row1::after {
        content: "";
        clear: both;
        display: table;
    }

    #cop0 {
        padding-left: 50px;
    }

    /* #ground {
        padding-left: 50px;
    }

    #wall {
        padding-left: 50px;
    } */

    #lampPost {
        padding-left: 50px;
    }

</style>

## Introduction
Cops and Robbers is an online multiplayer party game with competitive elements as two teams battle for
dominance of resources.
Designed to be compatible on PC devices. The game makes use of both fast-paced action and thoughtful strategy
tactics, as players must decide when to make use of the money they’ve gathered to either, secure the win
through sum or potentially gain an advantage in the tide of battle through use of items and powerups.
Whilst the game has its competitive elements its focus is to be casual enough as
to not be off-putting for new users who may feel they are at a disadvantage to veterans in the game.

## Game Design
We planned the overall theme of the game and started developing the design and look of the main 
characters. After various discussions and meetings we concluded on the final design of the two main
chacraters as well as a rough map idea of how the game is going to look like and where the cops and robbers will be posiitoned.
The following graphs were made using Clip Studio Paint and each design was made according to the theme of teh game. <br/>
Below you can see the different desing features in the game:

### Characters and first draft map

<div class="row1">
    <div class="column1" id="cop0">
        <img src="{{site.baseurl}}/assets/images/cop resize.png" height="200" alt="Cop" style="width:30%">
    </div>
    <div class="column1">
        <img src="{{site.baseurl}}/assets/images/robber resize left.png" height="200" alt="Robber" style="width:30%">
    </div>
    <div class="column1">
        <img src="{{site.baseurl}}/assets/images/MAP.png" height="150" alt="Map" style="width:100%">
    </div>
</div>

### Weapons

<div class="container center">
    <div class="row weapons">
        <div class="col-md-12">
            </div>
            <div class="col-md-3">
              <img src="{{site.baseurl}}/assets/images/bat.PNG" class="img-fluid img-border" alt="">
            </div>
            <div class="col-md-3">
              <img src="{{site.baseurl}}/assets/images/pipe.PNG" class="img-fluid img-border" alt="">
            </div>
            <div class="col-md-3">
              <img src="{{site.baseurl}}/assets/images/robbergun.PNG" class="img-fluid img-border" alt="">
            </div>
            <div class="col-md-3">
              <img src="{{site.baseurl}}/assets/images/coppergun.PNG" class="img-fluid img-border" alt="">
        </div>
     </div>
</div>

### Ground

<div class="row1" id="ground">
    <div class="column1">
        <img src="{{site.baseurl}}/assets/images/ground.png" height="50" alt="Map" style="width:200%">
    </div>
</div>

### Wall

<div class="row1" id="wall">
    <div class="column1">
          <img src="{{site.baseurl}}/assets/images/walls.png" height="60" alt="Map" style="width:33%">
    </div>
</div>

### Lamp post

<div class="row1">
    <div class="column1" id="lampPost">
        <img src="{{site.baseurl}}/assets/images/Lamp" height="250" alt="Cop" style="width:45%">
    </div>
</div>


## Multiplayer
Our project will include a bespoke multiplayer solution. To keep communications fast and secure,
there are several components. The Server will consist of the following key components: 

• Key Exchange Server: This server application will serve random 32-bit values for Diffie Helman Key Exchange.
These values will automatically update every 90 seconds. 

• Game Server: The Game Server will be used for gameplay. 
Initially we will keep all processing to client side to preserve server bandwidth, so all the server needs to
do is send data from one player to others in the game. We intend to do this by placing groups into virtual
rooms. Initially, these groups will consist of random members from the matchmaking lobby, but we plan on
introducing accounts or private lobbies to allow friends to play together