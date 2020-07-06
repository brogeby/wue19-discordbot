module.exports = {
    name: 'say',
    description: "This commands returns the value as a bot-message!",
    execute(message, args) {
        if (args.length > 0 ) {
            let text = args.join(" ");
            message.delete();
            message.channel.send(text);
        } else {
            message.channel.send('You have to say something! "!say Exampletext"')
        }
    }
}