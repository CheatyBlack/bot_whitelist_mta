const Discord = require('discord.js');
const client = new Discord.Client();
module.exports.run = (client, message, args) => {

    if(!message.member.hasPermission('ADMINISTRATOR')) {
      return message.author.send(`<:ac_errado:765549288531951697>  **${message.author.username}**, você não possui permissão para usar esse comando.`)
  }     

message.delete();
  if (!args.join(" ")) return message.author.send(`<:ac_errado:765549288531951697>  **${message.author.username}**, você deve **colocar** sua mensagem.`);
  let say = args.join(' ');
  message.mentions.users.forEach((u) => say = say.replace(u.toString(),"@"+u.tag))
  message.mentions.roles.forEach((r) => say = say.replace(r.toString(),"@"+r.name))
  message.channel.send(say,{disableEveryone:true});

};

  module.exports.help = {
    name: "ping"
};