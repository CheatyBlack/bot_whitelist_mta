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
    
    let id = args[0]
    if(!id) return message.author.send(`<:ac_errado:765549288531951697>ﾠ**${message.author.username}**, você deve colocar o __ID__.`)

    connection.query("SELECT * FROM ac_banimentos WHERE id = ?", [id], (err, results) => {
        if(!results[0]) return message.author.send(`<:ac_errado:765549288531951697>  **${message.author.username}**, o ID **${id}** não está banido.`)
        sql = `DELETE FROM ac_banimentos WHERE id = '${id}'`
        connection.query(sql)  

        embed = new Discord.MessageEmbed()
        .setColor(`#2f3136`)
        .setDescription(`<:certo:765549288561836033>ﾠ**${message.author.username}**, você desbaniu o **ID ${id}**.`)
        .setFooter(`Action City.`)
        .setTimestamp()
        message.channel.send(embed) 

    })

    message.delete()

}