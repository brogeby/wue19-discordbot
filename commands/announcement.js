const { Client, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'announcement',
    description: "this checks the role ID!",
    execute(message, args) {
        if (args.length > 0 ) {
            let text = args.join(" ")
            const embed = new MessageEmbed()
            .setTitle(':fire::fire::exclamation: ANNOUNCEMENT :exclamation::fire::fire:')
            .setColor(0xff0000)
            .setDescription(text)
            message.delete()
            message.channel.send(embed)
        } else {
            message.channel.send('You have to type something! "!announcement Exampletext"')
        }
    }
}
