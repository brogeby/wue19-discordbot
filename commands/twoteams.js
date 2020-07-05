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
        const firstHalf = list.splice(0, half)
        const secondHalf = list.splice(-half)
            message.channel.send(firstHalf)
            message.channel.send(secondHalf)
        }
        else {
            message.channel.send('You have to specify atleast 3 members')
        }
    }
}