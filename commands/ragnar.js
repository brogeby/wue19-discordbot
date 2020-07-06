const { Client, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'ragnar',
    description: "this checks the role ID!",
    execute(message, args) {
        const embed = new MessageEmbed()
        .setTitle('RacerRagnar')
        .setColor(0xff0000)
        .setDescription('I egen hög person!')
        .setImage('https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/1930752_1083931452991_1570_n.jpg?_nc_cat=111&_nc_sid=cdbe9c&_nc_ohc=aaYTiVz58AIAX97bMbT&_nc_ht=scontent-arn2-1.xx&oh=80f8efab0dd26ef7baed9fa2f0f086f9&oe=5F252520')
        message.channel.send(embed)
    }
}
