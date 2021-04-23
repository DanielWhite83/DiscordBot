const { info } = require('console');
const fs = require('fs');

module.exports = {
    name: 'giveaway',
    description: 'gives info about the giveaways',
    execute(message,args){
        if (message.channel.name == "giveaways"){
        // Include fs module
        
        
        // Use fs.readFile() method to read the file
        fs.readFile('commands/giveaway_info.txt', 'utf8', function(err, data){
        // Display the file content
            console.log(data);
            message.channel.send("Hello " + message.author.username +  "! " + data);
            });

        }
        else{
            console.log(message.channel.name);  
        }
    }
}