
var Passwords = require('../security/discordbot.js')

const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '#';

const fs = require('fs');
client.commands = new Discord.Collection();
const commandfiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandfiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}





client.once('ready', () => {
    console.log('Bot is online')
});

client.on('message', message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    try {
        client.commands.get(command).execute(message,args);
    }
    catch(err){
        console.log("command: " + command + " not found!");
    }
        


});

// must be last line
client.login(Passwords.login_token);