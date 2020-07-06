const { Client, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'mango',
    description: "MangoTango",
    execute(message, args) {
        const embed = new MessageEmbed()
        .setTitle('Mucho Mango!')
        .setColor(0x8B4513)
        .setImage('https://memegenerator.net/img/instances/28796482/how-much-mango-is-it-keanu-its-mucho-mango.jpg')
        message.channel.send(embed)
    }
}
