const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    const imgwl = "https://i.imgur.com/GyhxzKL.png";

        if(!message.member.hasPermission('ADMINISTRATOR')) {
        return message.author.send(`<:ac_errado:765549288531951697>  **${message.author.username}**, você não possui permissão para usar esse comando.`)
		} 
		
    if (!args[0]) return;  

    if (args[0] === "1") {
        let embedmensagem = new Discord.MessageEmbed()
        .setColor("#2f3136")
        .setAuthor(`Action City - Whitelist`, imgwl)
        .setDescription(`Para começar sua whitelist digite \`!whitelist\` e aguarde as instruções do bot.\nLogo após digitar o comando será criada uma sala, siga as instruções do bot.`)
        message.channel.send(embedmensagem)
        message.delete()
    }
    else if (args[0] === "2") {
        let embedmensagem = new Discord.MessageEmbed()
        .setColor("#2f3136")
        .setDescription(`<:ac_errado:765549288531951697> Whitelist fechada no momento.`)
        message.channel.send(embedmensagem)
        message.delete()
    }
    if (args[0] === "3") {
        let embedmensagem = new Discord.MessageEmbed()
        .setColor("#2f3136")
        .setAuthor(`Action City - Denuncias`, imgwl)
        .setDescription(`Para realizar uma denúncia digite \`!denunciar\` e aguarde as instruções do bot.\nLogo após digitar o comando será enviado uma mensagem, siga as instruções do bot.`)
        message.channel.send(embedmensagem)
    }
	if (args[0] === "4") {
        let embedmensagem = new Discord.MessageEmbed()
        .setColor("#2f3136")
        .setAuthor(`Action City - Verificação`, imgwl)
        .setDescription(`Para realizar sua verificação digite \`!verificar ID Nome Sobrenome\`.`)
        message.channel.send(embedmensagem)
    }
}