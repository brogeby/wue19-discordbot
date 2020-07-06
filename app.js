require('dotenv').config(); 
const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require('fs')

client.commands = new Discord.Collection()

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for (const file of commandFiles) {
  const command = require(`./commands/${file}`)

  client.commands.set(command.name, command)
}
client.on("ready", () => {
  console.log("I am ready!");
});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'general');
    if (!channel) return;
    channel.send(`Välkommen till GUBP, ${member}, Glöm inte all läsa reglerna!`);
    let role = member.guild.roles.cache.find(role => role.name === "Oäkting");
    member.roles.add(role);
  });

client.on("message", message => {
    if (message.author.bot) return;
    if (message.content.indexOf(process.env.PREFIX) !== 0) return;

    const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
});

client.login(process.env.CLIENT_TOKEN);