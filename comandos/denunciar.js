const Discord = require("discord.js")
exports.run = (client, message, args) => {

    const imgwl = "https://i.imgur.com/GyhxzKL.png";

    if(message.channel.id !== "946881520705105990") return message.delete()
    message.delete()

    message.author.send(`Qual o id da pessoa que cometeu o ato?`).then(msg0 => {


        let p0 = msg0.channel.createMessageCollector(x => x.author.id == message.author.id, {  max: 1 })
        p0.on("collect", async id => {
        pergunta0 = id.content

        message.author.send(`Qual o motivo?`).then(msg01 => {    

        let p01 = msg01.channel.createMessageCollector(x => x.author.id == message.author.id, { max: 1 })
        p01.on("collect", async motivo => {
        pergunta01 = motivo.content 

        message.author.send(`Qual as provas?\n**Favor upar as mensagens na internet e mandar em link**`).then(msg02 => {    

        let p02 = msg02.channel.createMessageCollector(x => x.author.id == message.author.id, { max: 1 })
        p02.on("collect", async prova => {
        pergunta02 = prova.content 

                embed = new Discord.MessageEmbed()
                .setColor(`#2f3136`)
                .setDescription(`**ID:** ${id}\n\n**Motivo:** ${motivo}\n\n**Provas:** ${prova}\n\n**Reportado por:** ${message.author}`)
                .setTimestamp(new Date(), imgwl)
                .setFooter(`Enviado por ${message.author.username}`)
                 let channel = client.channels.cache.get('898845324037226497')
                 channel.send(embed)

                 embed2 = new Discord.MessageEmbed()
                 .setColor(`#2f3136`)
                 .setDescription(`<:certo:765549288561836033>  **${message.author.username}**, sua denúncia foi reportada com sucesso, aguarde o retorno da **__Administração__**.`)
                 .setTimestamp(new Date(), imgwl)
                 .setTimestamp()
                 message.author.send(embed2) 
                })
                })
             })
            })
        })
    })
}