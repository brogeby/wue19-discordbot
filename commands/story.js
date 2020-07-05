module.exports = {
    name: 'story',
    description: "this is a story made up by the author!",
    execute(message, args) {
        if (args.length == 6) {
            let [color, animal, action, country, describing, secondAction] = args;
            message.channel.send(`Today we went to the zoo! The first thing we saw was a ${color} ${animal} ${action}! The zookeeper told us that was normal, except in ${country}. I had a ${describing} time! Next time I will remember that if I ever see a ${color} ${animal} I should ${secondAction} the other way.`);
        }
        else {
            message.channel.send('Specify the following: Color, animal, action(such as running), country, a describing word(nice) and a second action. Separate them by a blank space and it should look something like this:\n```!story blue rhino running norway nice look```')
        }
    }
}