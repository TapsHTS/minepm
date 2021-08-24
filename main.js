const fetch = require('node-fetch');


async function ping(mcip, port) {
    var mcport;
    if (!port) {
        mcport = '25565'
    } else {
        mcport = port
    }

    const info1 = await fetch(`https://mcapi.us/server/status?ip=${mcip}&port=${mcport}`);
    const server = await info1.json();
    const info2 = await fetch(`https://api.mcsrvstat.us/2/${mcip}:${mcport}`);
    const data = await info2.json()

    if (server.online === false) return console.log('An error was occured, the server is down or block the acces');
    if (server.online) {
        server.info = 'online';
    } else {
        server.info = 'offline';
    };

    server.desc = data.motd
    const stats = {
        name: server.server.name,
        ip: mcip,
        port: mcport,
        motd: server.desc,
        players: {
            online: server.players.now,
            max: server.players.max
        },
        other: {
            status: server.info,
            error: server.error,
            last_online: server.last_online,
            protocol: server.server.protocol,
        },
    };
    return stats;


}

async function logo(mcip, port) {
    let mcport;
    if (!port) {
        mcport = 25565
    } else {
        mcport = port
    }

    const res = await fetch(`https://eu.mc-api.net/v3/server/favicon/${mcip}:${mcport}`)

    var loginfo;
    if (res.statusText === "Not Found") {
        loginfo = 'Not Found'
        statcode = 404
    } else {
        loginfo = `https://eu.mc-api.net/v3/server/favicon/${mcip}:${mcport}`
        statcode = 200
    }

    const logo = {
        favicon: loginfo,
        code: statcode
    }

    return logo;



}

async function player(mcname) {
    const fplayer = await fetch(`https://api.mojang.com/users/profiles/minecraft/${mcname}`)
    const infoplayer = await fplayer.json()
    const uuid = infoplayer.id

    const fhist = await fetch(`https://api.mojang.com/user/profiles/${uuid}/names`)
    const hist = await fhist.json()

    const info = {
        pseudo: infoplayer.name,
        uuid: uuid,
        names: hist.map(r => r.name),
        skin: {
            avatars: `https://crafatar.com/avatars/${uuid}`,
            head: `https://crafatar.com/renders/head/${uuid}`,
            body: `https://crafatar.com/renders/body/${uuid}`,
            skin: `https://crafatar.com/skins/${uuid}`
        }
    }
    return info;
}

module.exports.ping = ping;
module.exports.logo = logo;
module.exports.player = player;
