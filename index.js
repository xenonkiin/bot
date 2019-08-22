const Discord = require('discord.js')
const bot = new Discord.Client()
bot.on('ready', function () {
    console.log("Je suis connecté!")
    })
    bot.on('ready', function () {

        console.log("Je suis connecté !")
        });
        
        
        bot.on('message', function (message) {
            if (message.content === '!chambre') {
                message.channel.send('ton paysage https://zupimages.net/up/19/34/brno.png');
            }
        });
       
        bot.on('message', function (message) {
            if (message.content === '!centreville') {
                message.channel.send('ton paysage https://zupimages.net/up/19/34/ujya.png');
            }
        });
        
        bot.on('message', function (message) {
            if (message.content === '!plage') {
                message.channel.send('ton paysage https://zupimages.net/up/19/34/4ous.png');
            }
        });

        bot.on('message', function (message) {
            if (message.content === '!belvedert') {
                message.channel.send('ton paysage https://zupimages.net/up/19/34/lj0a.png');
            }
        });
 
        bot.on('message', function (message) {
            if (message.content === '!bowling') {
                message.channel.send('ton paysage https://zupimages.net/up/19/34/mssr.png');
            }
        });
 
        bot.on('message', function (message) {
            if (message.content === '!plainedeneige') {
                message.channel.send('ton paysage https://zupimages.net/up/19/34/m4u0.png');
            }
        });
        bot.on('message', function (message) {
            if (message.content === '!hotel') {
                message.channel.send('ton paysage https://zupimages.net/up/19/34/q9gd.png');
            }
        });
    
   
    bot.on('message', function (message) {
        if (message.content === '!facemer') {
            message.channel.send('ton paysage https://zupimages.net/up/19/34/5k6r.png');
        }
    });

    bot.on('message', function (message) {
        if (message.content === '!paysages') {
            message.channel.send('les paysage:!chambre,!centreville,!plage,!belvedert,!bowling,!plainedeneige,!hotel,!facemer');
        }
    });

    bot.on('message', function (message) {
        if (message.content === '!épisode') {
            message.channel.send('épisode:la rentrée');
        }
    });
 
 

bot.login('NjEzODM1MDkzNTI5NzIyODgx.XV2uHA.CxKWPrP0hUzMPKZb0OE0IE7z14o')
    
