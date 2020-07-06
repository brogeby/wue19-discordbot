const { Client, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'pirogen',
    description: "this checks the role ID!",
    execute(message, args) {
        let text = args.join(" ")
        const embed = new MessageEmbed()
        .setTitle('KUNGEN')
        .setColor(0xff0000)
        .setDescription(text)
        .setImage('https://preview.redd.it/ylirml0nbog21.jpg?width=960&crop=smart&auto=webp&s=a02158ffc0d7d2c0983c5d18c1171d5d09815fe4')
        message.channel.send(embed)
    }
}
