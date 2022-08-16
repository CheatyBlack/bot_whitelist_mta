const Discord = require("discord.js");
const canaldecomandos = "898845314864271391"
const canalsugestao = "898845310816751666"

module.exports.run = async(client, message, args) => {

  if(message.channel.id !== canaldecomandos) return message.channel.send(message.author.toString() + ` Você não pode usar este comando nesse chat. Utilize: <#${canaldecomandos}>`)

  let sugestao = args.join(" ")
  if(!sugestao) return message.author.send(`<:ac_errado:765549288531951697>  **${message.author.username}**, você deve colocar sua sugestão.`)
  

  const Embed0 = new Discord.MessageEmbed()
  .setDescription(`**Sugestão:** ${sugestao}\n\n**Enviado por:** ${message.author}`)
  .setColor(`#2F3136`)
  message.delete()
  client.channels.cache.get(canalsugestao).send(Embed0).then(async(msg) => {
    msg.react("<:certo:765549288561836033>")
    msg.react("<:ac_errado:765549288531951697>")
  })

}