const Discord = require("discord.js");
const qpangapi = require('../api/qpangapi.js');

module.exports = {
    name: 'stats',
    description: "Checks the users QPang stats", 
    execute(message, args){
            let username = args[0]; 
            if(!username) return message.channel.send('Please provide a username');

            qpangapi.getStats(username, (err, ret) => {
                    if(err) {
                    console.log(err.message);
                    message.channel.send('Player not found!');   // player not found
                    }else{
                    const embed = new Discord.MessageEmbed()
                    .setTitle('QPang Stats')
                    .setDescription('Hey ' + message.author.username + ', here you go!')
                    .addFields(
                        {name: 'Name', value: username, inline: true},
                        {name: 'Level', value: ret.level, inline: true},
                        {name: 'Experience', value: (ret.experience/1000).toFixed(1) + 'k', inline: true},
                        {name: 'Kills', value: ret.kills, inline: true},
                        {name: 'Deaths', value: ret.deaths, inline: true},
                        {name: 'K/D Ratio', value: (ret.kills/ret.deaths).toFixed(2), inline: true},
                        {name: 'Wins', value: ret.wins, inline: true},
                        {name: 'Losses', value: ret.losses, inline: true},
                        {name: 'Draws', value: ret.draws, inline: true},
                        {name: 'Playtime', value: (ret.playtime/3600).toFixed(0) + 'h', inline: true},
                        {name: 'Matches', value: ret.matches, inline: true}, 
                        {name: 'Avg. Kills per 10 Minutes', value: (ret.kills/(ret.playtime/600)).toFixed(0), inline: true}
                    )
                    .setColor(0xFD4545)
                    .setTimestamp()
                    .setFooter('QPang StatBot')
                    if(ret.level == 1) {
                        embed.setThumbnail('https://i.imgur.com/XcpJEhV.png')
                    } else if(ret.level == 2) {
                        embed.setThumbnail('https://i.imgur.com/8OwgJJG.png')
                    } else if(ret.level == 3) {
                        embed.setThumbnail('https://i.imgur.com/3fEdxQQ.png')
                    } else if(ret.level == 4) {
                        embed.setThumbnail('https://i.imgur.com/uCaPLSq.png')
                    } else if(ret.level == 5) {
                        embed.setThumbnail('https://i.imgur.com/0VWDdVu.png')
                    } else if(ret.level == 6) {
                        embed.setThumbnail('https://i.imgur.com/H6Esw4W.png')
                    } else if(ret.level == 7) {
                        embed.setThumbnail('https://i.imgur.com/otzVl9u.png')
                    } else if(ret.level == 8) {
                        embed.setThumbnail('https://i.imgur.com/bhlYpwy.png')
                    } else if(ret.level == 9) {
                        embed.setThumbnail('https://i.imgur.com/PrbUlDl.png')
                    } else if(ret.level == 10) {
                        embed.setThumbnail('https://i.imgur.com/StvoCLH.png')
                    } else if(ret.level == 11) {
                        embed.setThumbnail('https://i.imgur.com/AG496Z3.png')
                    } else if(ret.level == 12) {
                        embed.setThumbnail('https://i.imgur.com/Xj8xIYr.png')
                    } else if(ret.level == 13) {
                        embed.setThumbnail('https://i.imgur.com/wlhuq5N.png')
                    } else if(ret.level == 14) {
                        embed.setThumbnail('https://i.imgur.com/2sulVJw.png')
                    } else if(ret.level == 15) {
                        embed.setThumbnail('https://i.imgur.com/jkdoBtS.png')
                    } else if(ret.level == 16) {
                        embed.setThumbnail('https://i.imgur.com/mdnOhDg.png')
                    } else if(ret.level == 17) {
                        embed.setThumbnail('https://i.imgur.com/1tKpYTM.png')
                    } else if(ret.level == 18) {
                        embed.setThumbnail('https://i.imgur.com/h2jQkeC.png')
                    } else if(ret.level == 19) {
                        embed.setThumbnail('https://i.imgur.com/0xZ04qW.png')
                    } else if(ret.level == 20) {
                        embed.setThumbnail('https://i.imgur.com/9JS8Vae.png')
                    } else if(ret.level == 21) {
                        embed.setThumbnail('https://i.imgur.com/3VGEk7I.png')
                    } else if(ret.level == 22) {
                        embed.setThumbnail('https://i.imgur.com/yKy5zRI.png')
                    } else if(ret.level == 23) {
                        embed.setThumbnail('https://i.imgur.com/vmZFfao.png')
                    } else if(ret.level == 24) {
                        embed.setThumbnail('https://i.imgur.com/lW0Q4BN.png')
                    } else if(ret.level == 25) {
                        embed.setThumbnail('https://i.imgur.com/JjBo4U9.png')
                    } else if(ret.level == 26) {
                        embed.setThumbnail('https://i.imgur.com/dm8vYsO.png')
                    } else if(ret.level == 27) {
                        embed.setThumbnail('https://i.imgur.com/gCebftx.png')
                    } else if(ret.level == 28) {
                        embed.setThumbnail('https://i.imgur.com/yOSUx0I.png')
                    } else if(ret.level == 29) {
                        embed.setThumbnail('https://i.imgur.com/23IXyhq.png')
                    } else if(ret.level == 30) {
                        embed.setThumbnail('https://i.imgur.com/al2LKw8.png')
                    } else if(ret.level == 31) {
                        embed.setThumbnail('https://i.imgur.com/71aVOXf.png')
                    } else if(ret.level == 32) {
                        embed.setThumbnail('https://i.imgur.com/aGMY6Rc.png')
                    } else if(ret.level == 33) {
                        embed.setThumbnail('https://i.imgur.com/H0SAk9s.png')
                    } else if(ret.level == 34) {
                        embed.setThumbnail('https://i.imgur.com/of9oRac.png')
                    } else if(ret.level == 35) {
                        embed.setThumbnail('https://i.imgur.com/M7cIIH8.png')
                    } else if(ret.level == 36) {
                        embed.setThumbnail('https://i.imgur.com/liQoYfe.png')
                    } else if(ret.level == 37) {
                        embed.setThumbnail('https://i.imgur.com/7CPFins.png')
                    } else if(ret.level == 38) {
                        embed.setThumbnail('https://i.imgur.com/rfPF0gc.png')
                    } else if(ret.level == 39) {
                        embed.setThumbnail('https://i.imgur.com/S414Ilb.png')
                    } else if(ret.level == 40) {
                        embed.setThumbnail('https://i.imgur.com/kjTIbaJ.png')
                    }
                    message.channel.send(embed);
                }
            });
    }
}