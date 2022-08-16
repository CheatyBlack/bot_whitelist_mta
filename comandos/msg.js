const Discord = require("discord.js");
const mysql = require('mysql');

module.exports.run = async(client, message, args) => {

    const iddoservidor = "863517712767254528";
    const imgwl = "https://i.imgur.com/GyhxzKL.png";

    if(!message.member.hasPermission('ADMINISTRATOR')) {
        return message.author.send(`<:ac_errado:765549288531951697>  **${message.author.username}**, você não possui permissão para usar esse comando.`)
    }     

    let guild = message.guild;
	const user = message.mentions.members.first()
    const motivo = args.join(" ").slice(22);

    if(!user) return message.author.send(`<:ac_errado:765549288531951697>  **${message.author.username}**, esqueceu de marcar o usuário.`)  

    if(!motivo) return message.author.send(`<:ac_errado:765549288531951697>  **${message.author.username}**, esqueceu de colocar a **mensagem**.`) 

    let embedaprovar = new Discord.MessageEmbed()
    .setColor("#2f3136")
    .setAuthor(`Você recebeu uma mensagem da Administração.`, imgwl)
    .setDescription(`${motivo}`)
    .setFooter(`Action City - Sistema de mensagens.`)
    .setTimestamp()
    user.send(embedaprovar)
    message.delete()
}