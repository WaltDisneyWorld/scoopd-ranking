
const Discord = require('discord.js');
const client = new Discord.Client();
const nbx = require("noblox.js");
const info = require("./info.js");

async function login(){
    await nbx.setCookie(info.cookie);
}

async function rank(userid, thing){
    nbx.setRank(info.groupId, userid, thing);
}

client.on('message', message =>{
    var split = message.content.split(":");
    var user = split[0];
    var type = split[1];

    if(message.author.bot || message.author.id === 486342789567873024){
        if(user !== null && type !== null){
            user = Number(user);
            type = Number(type);

            try{
                login();
                rank(user, type);
            }catch(err){
                message.channel.send("Error:\n\n"+err);
            }
        }
    }
});

client.on('ready', async () => {
    client.user.setActivity("SCOOP'D RANKING | Made by nowah#6507", { type: 'LISTENING' });
    console.log("Status set")
 });

client.once('ready', () => {
    console.log('Nowah Bot is online!');
});

client.login(info.token);