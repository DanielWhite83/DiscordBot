
var Passwords = require('../security/discordbot.js')

const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '#';

client.once('ready', () => {
    console.log('Bot is online')
});


// must be last line
client.login(Passwords.login_token);