# Minepm

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
  name: 'Requires MC 1.8 / 1.16',
  ip: 'mc.hypixel.net',
  port: '25565',
  motd: '             §aHypixel Network  §c[1.8-1.16]\n' +
    '        §6§lSKYBLOCK 0.11 §7- §5§lDWARVEN MINES',    
  players: { online: 101407, max: 200000 },
  other: {
    status: 'online',
    error: null,
    last_online: '1615304700',
    protocol: 47
  }
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
