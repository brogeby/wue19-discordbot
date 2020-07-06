module.exports = {
    name: 'blah',
    description: "Blah blah blah",
    execute(message, args) {
        let modRole = message.guild.roles.find("name", "admin")
        if (message.member.roles.has(modRole.id)) {
            message.channel.send('Meh.')
        } else {
            message.channel.send("You don't have permission to request this command!")
        }
    }
}