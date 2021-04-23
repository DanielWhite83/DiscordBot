module.exports = {
    name: 'ping',
    description: 'responds with pong',
    execute(message,args){
        message.channel.send('pong!');
    }

}