const Discord = require("discord.js");
const mysql = require('mysql');

module.exports.run = async(client, message, args) => {

    const cargoanalise = "898845280009596948";
    const cargoliberado = "898845278382198814";
    const cargoliberacao = "945783028947509331";
   	const nomeliberacao = "Liberação";
    const nomeliberado = "Civil";
    const nomeanalise = "Esperando Passaporte";
    const iddoservidor = "863517712767254528";
    let servidor = client.guilds.cache.get("863517712767254528")

    if (['909559444654944296', '898845265174351882', '898845266956935198', '904535442878263416'].every(r => !message.member.roles.cache.has(r)))
        return message.author.send(`<:ac_errado:765549288531951697>  **${message.author.username}**, você não possui permissão para usar esse comando.`)   
   
	
    let guild = message.guild;
	const user = message.mentions.members.first()

    if(!user) return message.author.send(`<:ac_errado:765549288531951697>  **${message.author.username}**, esqueceu de colocar o **ID** do usuário.`)  
    
    user.roles.remove(cargoanalise)
    user.roles.add(cargoliberado)
    user.roles.add(cargoliberacao)

    let embedaprovar = new Discord.MessageEmbed()
    .setColor("#2f3136")
    .setDescription(`Parabéns!\nVocê foi aprovado na whitelist do **Action City**.\n\n📌 **- Algumas instruções para jogar no servidor:**\n\n- Pegue o IP no canal <#838580335003828254>.\n- Após logar no servidor irá gerar seu **ID**, envie ele na sala <#839650045623926784> com seu **nome**, **sobrenome** e **idade**.\n- Espere o bot liberar você e estará pronto pra jogar.\n\n⚙️ **- Nosso discord: discord.gg/HCsmDrEaxp**.`)
    user.send(embedaprovar)

    let embedaprovous = new Discord.MessageEmbed()
    .setColor("#2f3136")
    .setDescription(`<:certo:765549288561836033>    **<@${user.id}>**, foi aprovado.`)
    let chanelsaves = servidor.channels.cache.get('946879277796835358')
    chanelsaves.send(embedaprovous)

    let canal = servidor.channels.cache.find(ch => ch.name === `wl-${user.id}`); 
    if (canal) return canal.delete()

}