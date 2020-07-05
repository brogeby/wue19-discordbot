module.exports = {
    name: 'twoteams',
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
        const firstHalf = args.splice(0, half)
        const secondHalf = args.splice(-half)
            // message.channel.send(firstHalf)
            // message.channel.send(secondHalf)

        const embed = new MessageEmbed()
        .setTitle(':fire::fire::exclamation: Team Generator :exclamation::fire::fire:')
        .setColor(0xff0000)
        .setDescription(firstHalf + secondHalf)
        message.delete()
        message.channel.send(embed)
        }
        else {
            message.channel.send('You have to name atleast 3 players')
        }
    }
}