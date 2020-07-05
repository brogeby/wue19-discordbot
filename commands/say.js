module.exports = {
    name: 'say',
    description: "This commands returns the value as a bot-message!",
    execute(message, args) {
        let text = args.join(" ");
        message.delete();
        message.channel.send(text);
    }
}