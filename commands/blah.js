module.exports = {
    name: 'blah',
    description: "Blah blah blah",
    execute(message, args) {
        if (message.author.id !== '490100245917728770') return
        message.channel.send('Meh.');
    }
}