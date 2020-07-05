module.exports = {
    name: 'role',
    description: "this checks the role ID!",
    execute(message, args) {
        message.channel.send().author.role.id
    }
}