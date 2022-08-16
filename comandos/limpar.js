const Discord = require("discord.js")

module.exports.run = (bot, message, args) => {
		if(!message.member.hasPermission('ADMINISTRATOR')) {
        return message.author.send(`<:ac_errado:765549288531951697>  **${message.author.username}**, você não possui permissão para usar esse comando.`)
        }  
    let mensagemDeletar = args.slice(0).join(" ");
    if (mensagemDeletar < 2 || mensagemDeletar > 100) message.author.send(`<:ac_errado:765549288531951697>  **${message.author.username}**, você deve **colocar** 2 à 100 mensagens.`);
    if (!mensagemDeletar) return;
    if (isNaN(args[0]));
    try {
        message.channel.bulkDelete(mensagemDeletar)
    } catch (e) {
        console.log(e);
    }
}

module.exports.help = {
    name: "limpar"
}