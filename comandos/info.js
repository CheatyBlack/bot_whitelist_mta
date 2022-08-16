const Discord = require("discord.js");
const mysql = require('mysql')

module.exports.run = async(client, message, args) => {


    const connection = mysql.createPool({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'acrp'
    });

        if(!message.member.hasPermission('ADMINISTRATOR')) {
        return message.author.send(`<:ac_errado:765549288531951697>  **${message.author.username}**, você não possui permissão para usar esse comando.`)
    }    
    
    const user = message.mentions.users.first() || message.guild.members.cache.get(args[0])
    const user2 = user.id

    connection.query(`SELECT id FROM ac_contas WHERE discord = '${user2}'`, (err, results) => {
      if(!results[0])
      return message.channel.send("Não achei")
      else {
        connection.query(`SELECT * FROM ac_users_saves WHERE id = '${results[0].id}'`, (err2, results2) => {

const descricao = [`***> INFORMAÇÃO DO ID: __${results2[0].id}__ **

                    **- PERSONAGEM:**

                    **ID:** ${results2[0].id}
                    **Discord:** ${user}
                    **Registro:** ${results2[0].registro}
                    **Serial:** ${results2[0].serial}
                    **Último login:** ${results2[0].login}
                    **Nome:** ${results2[0].nome} ${results2[0].sobrenome}
                    **Idade:** ${results2[0].idade}
                    **Grupo:** ${results2[0].grupo}
                    **Skin:** ${results2[0].skin}
                    **Número:** ${results2[0].numero}
                    **Banco:** ${results2[0].banco}
                    **Multas:** ${results2[0].multas}
                    **M. Garagem:** ${results2[0].garagem}
                    **Mochila:** ${results2[0].mochila}
                    **M. Mochila:** ${results2[0].mochila2}
                    **Gemas:** ${results2[0].gemas}
                    **Pix:** ${results2[0].pix}
                    **M. Casas:** ${results2[0].casas}
                    **Fome:** ${results2[0].comida}
                    **Sede:** ${results2[0].agua}
                    **Stress:** ${results2[0].stress}
                    **Vida:** ${results2[0].vida}
                    **Colete:** ${results2[0].colete}
                    **Interior:** ${results2[0].interior}
                    **Dimensão:** ${results2[0].dimensao}`]

          let embed = new Discord.MessageEmbed()
          .setDescription(`${descricao}`)
          .setColor('#000000')

          message.channel.send(embed)
      })
    }
    })
}