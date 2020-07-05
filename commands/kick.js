module.exports = {
    name: 'say',
    description: "Kicks the mentioned member",
    execute(message, args) {
        if (!member.roles.cache.has(role => role.name === 'admin')) return
        let member = message.mentions.members.first()
        let reason = args.slice(1).join(" ")
        member.kick(reason)
    }
}