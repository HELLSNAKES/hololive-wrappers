<div align="center">
  <h1>Hololive</h1>
  <p>
    <a href="https://www.npmjs.com/package/hololive-wrappers"><img src="https://img.shields.io/npm/v/hololive-wrappers?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/hololive-wrappers"><img src="https://img.shields.io/npm/dt/hololive-wrappers?maxAge=3600" alt="NPM downloads" /></a>
  </p>
  <p>
    <a href="https://www.npmjs.com/package/hololive-wrappers"><img src="https://nodei.co/npm/hololive-wrappers.png?downloads=true&stars=true" alt="NPM Banner"></a>
  </p>
</div>

## Installation
```
npm i hololive-wrappers
```
## Examples
### Rushia command :
```js
const rus = require("hololive-wrappers")
const Discord = require("discord.js")
const client = new Discord.Client()


client.on("message", async message => {
if (message.content.toLowerCase() === "rushia") {
  const rushia = await rs.rushia()
  message.channel.send(rushia)
   }
})

client.login("bot token")
```

## Endpoints
- `rushia()`
- `coco()`
- `pekora()`





