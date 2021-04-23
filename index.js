
var Passwords = require('../security/discordbot.js')

const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '#';

client.once('ready', () => {
    console.log('Bot is online')
});

client.on('message', message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command == 'ping'){
        message.channel.send('pong!');

    }
    else if (command == 'youtube'){
        message.channel.send('yep!');
    }


});

// must be last line
client.login(Passwords.login_token);