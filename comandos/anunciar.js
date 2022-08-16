const Discord = require("discord.js")
exports.run = (client, message, args) => {

    let titulo = args.join(" ")
    var guild = message.guild;

    if (!titulo) return message.author.send(`:ac_errado:  **${message.author.username}**, você não colocou o título.`)

    if (!message.member.hasPermission('ADMINISTRATOR')) {
        return message.author.send(`:ac_errado:  **${message.author.username}**, você não possui permissão para usar esse comando.`)
    }
    message.delete().catch(O_o => {});

    message.author.send(`Qual o texto do seu anúncio?`).then(msg0 => {


    let p0 = msg0.channel.createMessageCollector(x => x.author.id == message.author.id, {  max: 1 })
    p0.on("collect", async texto => {
    pergunta0 = texto.content

    embed = new Discord.MessageEmbed()
        .setAuthor(titulo)
        .setColor(`#2f3136`)
        .setDescription(texto)
        .setFooter(`Action City.`)
        .setTimestamp()
    let channel = client.channels.cache.get('898845298133192725')
    channel.send(`@everyone`)
    channel.send(embed)
    })
})
}