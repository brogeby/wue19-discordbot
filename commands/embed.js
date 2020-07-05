const { Client, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'embed',
    description: "this checks the role ID!",
    execute(message, args) {
        let text = args.join(" ")
        const embed = new MessageEmbed()
        .setTitle(':fire::fire::exclamation: INFO :exclamation::fire::fire:')
        .setColor(0xff0000)
        .setDescription(text)
        message.delete()
        message.channel.send(embed)
    }
}
