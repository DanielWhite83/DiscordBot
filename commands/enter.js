const fs = require('fs');

module.exports = {
    name: 'enter',
    description: 'enter the giveaway',
    execute(message,args){
        if (message.channel.name == "giveaways"){
            user_name = message.author.username;
            user_id = message.author.id;
            fs.appendFile('commands/giveaway_entrants.txt', user_name + " " + user_id + '\n', function (err) {
                if (err) {
                    console.log(err);
                }
                    console.log('Saved!');
                });
        
                message.channel.send("Hello " + message.author.username +  "! you have successfully entered the giveaway!");
        }

    }
}