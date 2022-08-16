const Client = require('discord.js')
const mysql = require('mysql'); 

module.exports = {
  config: {
    nome: 'whitelist',                                           
    aliases: ['wl'],                         
    descricao: 'fazer whitelist do servidor',   
    utilizacao: '',                                               
    cooldown: 0
},

  run: async (client, message, args) => {
  const resultadowlstaff = "898845320442695690" 
  const iddacategoria = "898845293909540885";
  const canaldewhitelist1 = "922420576251969546";
  const cargoanalise = "898845280009596948";
  const iddoservidor = "863517712767254528";
  const imgwl = "https://i.imgur.com/GyhxzKL.png";
  if(message.channel.id !== canaldewhitelist1) return;
    let guild = message.guild;
        message.delete()
        const channel2 = await guild.channels.create(`whitelist-${message.author.id}`,{
        type: 'text',
        permissionOverwrites:[
            {
                allow: ['VIEW_CHANNEL','READ_MESSAGE_HISTORY','EMBED_LINKS','ATTACH_FILES','SEND_MESSAGES'],
                id: message.author.id
            },
            {
                deny: 'VIEW_CHANNEL',
                id: guild.id
            }
        ]
    }); 

    let servidor = client.guilds.cache.get(iddoservidor)

    channel2.send(`<@${message.author.id}>`)
    async function createForm({ questions, channel, time, user }) {
    const { once } = require("events")
    const answers = []

    for (const question of questions) {
    const embed = new Client.MessageEmbed()
        .setColor("#2f3136")
        .setAuthor(`Action City - Whitelist\n`, imgwl)
        .setDescription(`${question} \n\n\`Você tem ${time/1000} segundos para responder!\``)
        .setTimestamp(new Date(), imgwl)
        .setFooter(`Action City`)
    channel2.send(embed)

    const filter = m => m.author.id === user.id && m.channel.id === channel2.id && m.content.length >= 1
    const options = { time: time, max: 1 }

    const collector = channel2.createMessageCollector(filter, options)
    const [collected, reason] = await once(collector, 'end')
    if (reason == 'limit') answers.push(collected.first().content)
    else if (reason == 'channelDelete') throw new Error('channelDelete')
    else if (reason == 'time') throw new Error('time')
    }
        return answers;
    }

    createForm({ 
    questions: [
        "Para iniciar sua whitelist digite o comando \`iniciar\`\n e aguarde sua sala ser criada.",

        "O que é Roleplay para você?",

        "O que é Car-Parking?",

        "O que é DarkRP?", 

        "O que é Combat-Logging?",

        "O que é Revenge Kill?",

        "Se você está fugindo da polícia e comete um Power-Gaming, qual seria sua reação?",

        "Se você está andando na rua e pessoas armadas rendem você, qual seria sua reação?",

        "Se você está fazendo uma ação com uma pessoa e ela quebra as regras, qual seria sua reação?",

        "Se você está na rua e vê alieníginas oque faria?"

    ], 

    channel: message.channel2, 
    time: 120000, 
    user: message.author 

    })
    .then(respostas => {

        var acertos = 0;
        if(respostas[2] === "2"){
            acertos++;
        }
        if(respostas[3] === "2"){
            acertos++;
        }
        if(respostas[4] === "3"){
            acertos++;
        }
        if(respostas[5] === "4"){
            acertos++;
        }
        if(respostas[6] === "4"){
            acertos++;   
        }
        if(respostas[7] === "4"){
            acertos++;   
    }

    channel2.bulkDelete(100)
    setTimeout(() => { 
        channel2.send(`⚙️ **| Salvando suas respostas...**`).then(msg0 => {
            setTimeout(() => { 
                msg0.edit(`✅ **| Enviando suas respostas pra equipe de whitelist...**`)
            }, 1500)
            setTimeout(() => { 
                msg0.edit(`📌 **| Finalizando sua whitelist...**`)
            }, 4500)            
        })
    }, 100) 

    setTimeout(() => { 
        let embedstaff2 = new Client.MessageEmbed()
        .setColor("#2f3136")
        .setAuthor(`Action City - Resultado whitelist\n`, imgwl)
        .setDescription(`📌 **- Resultado da whitelist de <@${message.author.id}>.**\n \n\`O que é roleplay para você?\`\n${respostas[1]}\n\n\`O que é Car-Parking?\`\n${respostas[2]}\n\n\`O que é DarkRP?\`\n${respostas[3]}\n\n\`O que é Combat-Logging?\`\n${respostas[4]}\n\n\`O que é Revenge Kill?\`\n${respostas[5]}\n\n\`Se você está fugindo da polícia e comete um Power-Gaming, qual seria sua reação?\`\n${respostas[6]}\n\n\`Se você está andando na rua e pessoas armadas rendem você, qual seria sua reação?\`\n${respostas[7]}\n\n\`Se você está fazendo uma ação com uma pessoa e ela quebra as regras, qual seria sua reação?\`\n${respostas[8]}\n\n\`Se você está na rua e vê alieníginas oque faria?\`\n${respostas[9]}\n\n✅ **- Para aprovar digite:**\n!aprovar <@${message.author.id}>\n\n❌ **- Para reprovar digite:**\n!reprovar <@${message.author.id}> (Mensagem)\n \n**(OBS: Ao aprovar ou reprovar alguém apague a mensagem do bot.)**`)
        .setFooter(`Action City`)
        .setTimestamp(new Date(), imgwl)   
        
        let embedmensagem = new Client.MessageEmbed()
        .setColor("#2f3136")
        .setDescription(`Sua whitelist está em análise, espere a equipe de whitelist dar o resultado.`)
        message.author.send(embedmensagem)

        client.guilds.cache.get(iddoservidor).members.cache.get(message.author.id).roles.add(cargoanalise)        
        servidor.channels.create(`wl-${message.author.id}`, {
            type : 'text',
            permissionOverwrites:[
                        {
                            allow: ['VIEW_CHANNEL','READ_MESSAGE_HISTORY','EMBED_LINKS','ATTACH_FILES','SEND_MESSAGES'],
                            id: message.author.id
                        },
                        {
                            deny: 'VIEW_CHANNEL',
                            id: guild.id
                        }
                    ]
                }).then(async(msg) => { 
            msg.setParent(iddacategoria)
            msg.send(embedstaff2)
        })
        channel2.delete()
    }, 7000)
    })
        .catch(err => {
        if (err.message == 'time') {
        console.log(`O usuário ignorou o formulário e por isto foi cancelado.`)
        channel2.delete()
        } else if (err.message == 'channelDelete') {
        console.log(`O canal foi deletado e por isto o formulário foi cancelado.`)
        } else {
        console.log(`Algo deu errado ao trabalhar o formulário!`, err)
        channel2.delete()
        }
    })
  }
  
}