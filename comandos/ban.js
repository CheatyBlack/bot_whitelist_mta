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
    let tempo = args.slice(1).join(" ")
    if(!id) return message.author.send(`<:ac_errado:765549288531951697>ﾠ**${message.author.username}**, você deve colocar o __ID__.`)
    if(!tempo) return message.author.send(`<:ac_errado:765549288531951697>ﾠ**${message.author.username}**, você deve colocar o __tempo__.`)

    connection.query("SELECT * FROM ac_users_saves WHERE id = ?", [id], (err, results) => {
        if(!results[0]) return message.author.send(`<:ac_errado:765549288531951697>  **${message.author.username}**, o ID **${id}** não foi encontrado no **__banco de dados__**.`)
        sql = `INSERT INTO ac_banimentos (id, serial, tempo) VALUES ('${id}', '${results[0]["serial"]}', '${tempo}')`
        connection.query(sql)  

        embed = new Discord.MessageEmbed()
        .setColor(`#2f3136`)
        .setDescription(`<:certo:765549288561836033>ﾠ**${message.author.username}**, você aplicou **__${tempo} dias__** de banimento no **ID ${id}**.`)
        .setFooter(`Action City.`)
        .setTimestamp()
        message.channel.send(embed) 

    })

    message.delete()

}