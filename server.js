const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', () => {
  bot.user.setActivity("with the virus")
  console.log('Bot is online!')
})

bot.on('message', async (message) => {
  if(message.content === "!ping") {
  message.channel.send('**Pinging servers...**').then(m => setTimeout(function() {
      m.edit("**Pong!**\nTook `" + bot.ws.ping + "`ms!")
    }, 4000)
  )}
  
  if(message.content.startsWith("!roll")) {
  let rollEmbed = new Discord.MessageEmbed()
    .setTitle("Dice-Roll-Inator")
    .addField("I have rolled the dice!", "[`Click Here To Check The Results!`](https://www.youtube.com/watch?v=YddwkMJG1Jo)")
    .setColor("RANDOM")
    message.channel.send("**Rolling a dice...**").then(m => setTimeout(function() {
      m.edit(rollEmbed)
    }, 5000))
  }
})

bot.login(process.env.TOKEN!)