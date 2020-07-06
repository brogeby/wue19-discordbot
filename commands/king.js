const { Client, MessageEmbed } = require('discord.js')
let myRole = message.guild.roles.find(role => role.name === "admin");

module.exports = {
    name: 'king',
    description: "Knugen",
    execute(message, args) {
        if(message.member.roles.has(myRole)) {
            let text = args.join(" ")
            const embed = new MessageEmbed()
            .setTitle('KUNGEN')
            .setColor(0xff0000)
            .setDescription(text)
            .setImage('https://www.kungahuset.se/images/200.44d65b65143d2fef3c9628/1390819079165/H.M._Konung_Carl_XVI_Gustaf_Kungl.Hovstaterna_Alexis_DaflosW.jpg')
            message.channel.send(embed)
        } else {
            message.channel.send("You don't have permissions to use this command")
        }
    }
}
