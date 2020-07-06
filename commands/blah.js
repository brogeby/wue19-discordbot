const { Client, Role, Guild } = require('discord.js')

module.exports = {
    name: 'blah',
    description: "Blah blah blah",
    execute(message, args) {
        if (!message.member.roles.find(r => r.name === "admin")) return message.channel.send("You don't have permission to use this command!")
        message.channel.send('Meh.')
    }
}