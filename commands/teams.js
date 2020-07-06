const { Client, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'teams',
    description: "Splits the names into two random groups",
    execute(message, args) {
        if (args.length > 2) {
            for (i = args.length -1; i > 0; i--) {
                j = Math.floor(Math.random() * i)
                k = args[i]
                args[i] = args[j]
                args[j] = k
              }
        const half = Math.ceil(args.length / 2);    
        const firstHalf = args.splice(0, half).join(" ")
        const secondHalf = args.splice(-half).join(" ")
            // message.channel.send(firstHalf)
            // message.channel.send(secondHalf)

        const embed = new MessageEmbed()
        .setTitle('Team Generator')
        .setColor(0xf051e5)
        // .setDescription(`Team 1: ${firstHalf}\nTeam 2: ${secondHalf}`)
        .addFields(
            { name: 'Team 1', value: `${firstHalf}`, inline: true },
            { name: 'Team 1', value: `${secondHalf}`, inline: true }
        )
        message.delete()
        message.channel.send(embed)
        }
        else {
            message.channel.send('You have to name atleast 3 players')
        }
    }
}