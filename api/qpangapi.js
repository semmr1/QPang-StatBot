const request = require('request');

exports.getStats = (username, callback) => {

    var url = "https://api.qpang.io/player/";
    url += encodeURIComponent(username);

    request(url, (error, response, body) => {

        // no response
        if(!response){
            callback(new Error("No response"), null);
            return;
        }

        // player not found
        if(response.statusCode != 200){
            callback(new Error("Player not found"), null);
            return;
        }

        // random error
        if(error){
            callback(new Error("Some error occurred :("), null);
            return;
        }

        var accountInfo = body.substring(body.indexOf("data:"));

        // parse to json objects
        var jsonInfo = JSON.parse(accountInfo);

        // obtain each value and put in dict
        var ret = {
            level: jsonInfo.data.level,   
            experience: jsonInfo.data.experience,
            kills: jsonInfo.data.stats.kills,
            deaths: jsonInfo.data.stats.deaths,
            wins: jsonInfo.data.stats.n_won,
            losses: jsonInfo.data.stats.n_lost,
            draws: jsonInfo.data.stats.n_drew,
            playtime: jsonInfo.data.stats.playtime,
            matches: jsonInfo.data.stats.n_won+jsonInfo.data.stats.n_lost
        }

        // callback function with result
        callback(null, ret);

    });
}