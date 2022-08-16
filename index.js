const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs = require('fs')
const { MessageEmbed } = require("discord.js");

client.on("ready", () => {
  client.user.setActivity("Action City");
  console.log("a")
});

client.on("message", msg => {
    let canais = ["922420576251969546"]
    let palavras = ["!whitelist", "!mensagem 1", "!mensagem 2"]
    if ((!new RegExp(palavras.join('|', 'g')).test(msg.content) && canais.includes(msg.channel.id))) {
        msg.delete()
    }
})


client.on("message", (message) => {

  if (message.channel.type == "dm") return;
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  try {
    let commandFile = require(`./comandos/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {

    if (err.code == "MODULE_NOT_FOUND") return;
    console.error(err);
  }

})

client.login(config.token); 