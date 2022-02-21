# Minepm

![minepm](https://user-images.githubusercontent.com/61658427/115971218-88202080-a547-11eb-9a12-a6b1fcee60c3.png)


Minepm is a [Node.js](https://nodejs.org) module that allow you to easly see all minecraft information !


## Features

-   💾 Use to see the server's stats
-   👨‍🎓 Find information about user
-   💥 Show .png server icon

## Description

This module provides the ability to show information about minecraft!
- logo: Show the server icon
- player: Show the player stats
- ping: Show information about the server

## Exemple
```js
const { ping } = require('minepm');

    ping('mc.hypixel.net').then(res =>{
        console.log(res)
    })


/* Return: 
{
	"ip": "172.65.223.54",
	"port": 25565,
	"debug": {
		"ping": true,
		"query": false,
		"srv": false,
		"querymismatch": false,
		"ipinsrv": false,
		"cnameinsrv": false,
		"animatedmotd": false,
		"cachetime": 1645460474,
		"apiversion": 2
	},
	"motd": {
		"raw": [
			"                §aHypixel Network §c[1.8-1.18]",
			"      §e✰ §6§lSKYBLOCK - BEDWARS - AND MORE! §e✰"
		],
		"clean": [
			"                Hypixel Network [1.8-1.18]",
			"      ✰ SKYBLOCK - BEDWARS - AND MORE! ✰"
		],
		"html": [
			"                <span style=\"color: #55FF55\">Hypixel Network <\/span><span style=\"color: #FF5555\">[1.8-1.18]<\/span>",
			"      <span style=\"color: #FFFF55\">✰ <\/span><span style=\"color: #FFAA00\"><span style=\"font-weight: bold;\">SKYBLOCK - BEDWARS - AND MORE! <\/span><\/span><span style=\"color: #FFFF55\">✰<\/span>"
		]
	},
	"players": {
		"online": 71231,
		"max": 200000
	},
	"version": "Requires MC 1.8 \/ 1.18",
	"online": true,
	"protocol": 47,
	"hostname": "mc.hypixel.net"
} */
```

## Installation

```js
npm install minepm
```


## Credits

Thank's ♥ to [me](https://github.com/TapsHTS) !<br>
*If you have problem, we can open an issue.* <br>

*This is my first module, it's normal if they have bug and sorry for the spelling mistake :)*
