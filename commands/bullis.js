const { Client, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'bullis',
    description: "Bullis is too good",
    execute(message, args) {
        const embed = new MessageEmbed()
        .setTitle('Bullis is to good for this world :drool:')
        .setColor(0x8B4513)
        .setImage('https://ih1.redbubble.net/image.1191566311.5904/st,small,507x507-pad,600x600,f8f8f8.jpg')
        message.channel.send(embed)
    }
}
