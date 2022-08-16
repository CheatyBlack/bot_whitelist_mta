const Discord = require("discord.js");
const canaldecomprovante = "898845322955071519"
const canalvip = "898845322955071519"
const mysql = require('mysql')

module.exports.run = async(client, message, args) => {


    const connection = mysql.createPool({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'acrp'
    });
    
    if(message.channel.id !== "945779961820753970") return;

    let id = args[0]
    let nome = args.slice(1).join(" ")
    if(!id) return message.author.send(`<:ac_errado:765549288531951697>  **${message.author.username}**, você deve colocar o seu id.`)
    if(!nome) return message.author.send(`<:ac_errado:765549288531951697>  **${message.author.username}**, você deve colocar seu nome e sobrenome.`)

    let servidor = client.guilds.cache.get("863517712767254528")
    let membro = servidor.members.cache.get(message.author.id)
    let cargo1 = servidor.roles.cache.get("945783028947509331")

    connection.query("SELECT * FROM ac_users_saves WHERE id = ?", [id], (err, results) => {
        if(!results[0]) return message.author.send(`<:ac_errado:765549288531951697>  **${message.author.username}**, o ID **${id}** não foi encontrado no **__banco de dados__**.`)
        sql = `UPDATE ac_users_saves SET discord = ${message.author.id} WHERE id=${id}`
        connection.query(sql)
        sql2 = `UPDATE ac_contas SET discord = ${message.author.id} WHERE id=${id}`
        connection.query(sql2)            
        sql3 = `UPDATE ac_whitelist SET liberacao = 1 WHERE id=${id}`
        connection.query(sql3)    
        message.author.send(`<:certo:765549288561836033>  **#${id} ${nome}**, liberei sua entrada no servidor. Bem-Vindo ao **__Action City__**!`)
        membro.roles.remove(cargo1)
        membro.setNickname(`#${id} ${nome}`)
    })
        message.delete()

}