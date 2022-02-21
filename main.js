const fetch = require('node-fetch');


async function ping(mcip) {
    // var ip;
    // if (!port) {
    //     ip = mcip
    // } else {
    //     ip = `${mcip}:${mcport}`
    // }

    const info1 = await fetch(`https://api.mcsrvstat.us/2/${mcip}`);
    const server = await info1.json();

    return server;


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