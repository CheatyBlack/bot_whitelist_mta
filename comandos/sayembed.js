const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
        if(!message.member.hasPermission('ADMINISTRATOR')) {
            return message.author.send(`<:ac_errado:765549288531951697>  **${message.author.username}**, você não possui permissão para usar esse comando.`)
        }   
let Conteudo = args.join(" ");
if(!Conteudo) return message.channel.send("Bobinho esqueceu de colocar o Titulo")
    let botEmbed = new Discord.MessageEmbed()
    .setDescription(`${Conteudo}`)
    .setColor(`#2F3136`)
    message.channel.send(botEmbed)
message.delete()

}
