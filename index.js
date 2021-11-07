const fetch = require('node-fetch')
module.exports.rushia = async function () {
    const res = await fetch("https://img-hololive-api.up.railway.app/rushia")
    const json = await res.json()
    return json.url;
}
module.exports.coco = async function () {
    const res = await fetch("https://img-hololive-api.up.railway.app/coco")
    const json = await res.json()
    return json.url;
}
module.exports.pekora = async function () {
    const res = await fetch("https://img-hololive-api.up.railway.app/pekora")
    const json = await res.json()
    return json.url;
}
module.exports.marine = async function () {
    const res = await fetch("https://img-hololive-api.up.railway.app/marine")
    const json = await res.json()
    return json.url;
}
module.exports.gura = async function () {
    const res = await fetch("https://img-hololive-api.up.railway.app/gura")
    const json = await res.json()
    return json.url;
}

