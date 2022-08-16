const Discord = require("discord.js");
const mysql = require('mysql');

module.exports.run = async(client, message, args) => {

    const cargoanalise = "898845280009596948";
    const cargoliberado = "898845278382198814";
    const nomeliberado = "Civil";
    const nomeanalise = "Esperando Passaporte";
    const iddoservidor = "863517712767254528";
    let servidor = client.guilds.cache.get("863517712767254528")

    if(!message.member.hasPermission('ADMINISTRATOR')) {
        return message.author.send(`<:ac_errado:765549288531951697>  **${message.author.username}**, você não possui permissão para usar esse comando.`)       
	}

    let guild = message.guild;
	const user = message.mentions.members.first()
    const motivo = args.join(" ").slice(22);

    if(!user) return message.author.send(`<:ac_errado:765549288531951697>  **${message.author.username}**, esqueceu de colocar o **ID** do usuário.`)  

    if(!motivo) return message.author.send(`<:ac_errado:765549288531951697>  **${message.author.username}**, esqueceu de colocar o **motivo** do usuário.`) 

    user.roles.remove(cargoanalise)

    let embedaprovar = new Discord.MessageEmbed()
    .setColor("#2f3136")
    .setDescription(`Ouups!\nVocê foi reprovado na whitelist do **Action City**.\n\n📩 **- Motivo da sua reprovação**\n${motivo}\n\n⚙️ **- Nosso discord: discord.gg/BmEvxaq**.`)
    user.send(embedaprovar)

    let embedaprovous = new Discord.MessageEmbed()
    .setColor("#2f3136")
    .setDescription(`<:ac_errado:765549288531951697>    **<@${user.id}>**, foi reprovado.`)
    let chanelsaves = servidor.channels.cache.get('946879300316057681')
    chanelsaves.send(embedaprovous)

    let canal = servidor.channels.cache.find(ch => ch.name === `wl-${user.id}`); 
    if (canal) return canal.delete()

}