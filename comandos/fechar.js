const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {

        if(!message.member.hasPermission('ADMINISTRATOR')) {
            return message.author.send(`<:ac_errado:765549288531951697>  **${message.author.username}**, você não possui permissão para usar esse comando.`)
        }  
        let user = message.mentions.users.first() || message.guild.members.cache.get(args[0])
        let servidor = client.guilds.cache.get("863517712767254528")
        if (!user) return message.channel.send("Esqueceu de marcar o dono do ticket")
        let canal = servidor.channels.cache.find(ch => ch.name === `ticket-${user.id}`); 
        if(!canal) return message.channel.send("Canal não encontrado")
        if (canal) return canal.delete()

}
